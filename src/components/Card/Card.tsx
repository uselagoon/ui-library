import React, { forwardRef, useState } from "react";
import { CardProps as AntCardProps, Skeleton } from "antd";
import { StyledCard } from "./styles";
import { NewCard } from "./partials/NewCard";
import LagoonCardLabel, { LagoonCardLabelProps } from "../CardLabel";
import {
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  FrownOutlined,
  LinkOutlined,
  MehOutlined,
  PushpinFilled,
  PushpinOutlined,
  SettingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import colors from "../../_util/colors";
import { EnvironmentPartial } from "./partials/EnvironmentPartial";
import { ProjectPartial } from "./partials/ProjectPartial";

type DefaultProps = {
  loading?: boolean;
  title: string;
  status: "low" | "medium" | "high";
  styles?: React.CSSProperties;
  cardClassName?: string;
};

// TODO: proper env type
type ProjectCard = {
  type: "project";

  environments: string[];
};

// TODO: proper project type
type EnvCard = {
  type: "environment";
  envType: LagoonCardLabelProps["type"];
  projects: {
    name: string;
  }[];
};

type NewCard = {
  type: "new";
};

export type CardProps =
  | (ProjectCard & DefaultProps)
  | (EnvCard & DefaultProps)
  | NewCard;

export type InternalCardProps = Pick<
  AntCardProps,
  "bodyStyle" | "headStyle" | "bordered" | "size"
> &
  CardProps;

const InternalCard: React.ForwardRefRenderFunction<
  HTMLDivElement,
  InternalCardProps
> = (props: InternalCardProps, ref) => {
  const [isPinned, setIsPinned] = useState(false);

  const { type: cardType } = props;

  if (cardType === "new") return <NewCard ref={ref} />;

  const {
    type,
    loading,
    title,
    cardClassName,
    styles,
    status = "low",
    ...rest
  } = props;

  const getStatusIcon = (status: DefaultProps["status"]) => {
    switch (status) {
      case "high":
        return <FrownOutlined style={{ color: colors.pink }} />;

      case "medium":
        return <MehOutlined style={{ color: colors.orange }} />;

      case "low":
        return <SmileOutlined style={{ color: colors.green2 }} />;

      default:
        return <></>;
    }
  };

  const cardLabelType = type === "project" ? "project" : props.envType;

  // TODO: actual pin behavior
  const handlePin = () => {
    setIsPinned(!isPinned);
  };

  // TODO: click handlers
  const actions = {
    project: [
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ],
    environment: [
      <SettingOutlined key="setting" />,
      <EyeOutlined key="view" />,
      <EllipsisOutlined key="ellipsis" />,
    ],
  };

  // TODO: associated actions
  const extraIcons = [
    getStatusIcon(status),
    <LinkOutlined key="link" />,
    isPinned ? (
      <PushpinFilled key="pushpinfilled" onClick={handlePin} />
    ) : (
      <PushpinOutlined key="pushpin" onClick={handlePin} />
    ),
  ];

  return (
    <StyledCard
      hoverable
      ref={ref}
      style={styles}
      className={cardClassName ?? "ui-lagooncard"}
      title={title}
      extra={extraIcons}
      actions={actions[type]}
      {...rest}
    >
      <Skeleton loading={loading} active>
        <LagoonCardLabel type={cardLabelType} />
        {type === "environment" ? (
          <EnvironmentPartial projects={props.projects} />
        ) : (
          <ProjectPartial environments={props.environments} />
        )}
      </Skeleton>
    </StyledCard>
  );
};

const LagoonCard = forwardRef<HTMLDivElement, InternalCardProps>(InternalCard);

LagoonCard.displayName = "UILagoonCard";

export default LagoonCard;
