import React from "react";
import UIDataCard from "../DataCard";
import { StyledOverview, StyledProblemsList } from "./styles";
import UIHead2 from "../Heading/H2";
import {
  FrownOutlined,
  MehOutlined,
  QuestionCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Popover } from "antd";

type LagoonProblemsOverviewProps = {
  problems: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
};

const LagoonProblemsOverview: React.FC<LagoonProblemsOverviewProps> = ({
  problems,
  critical,
  high,
  medium,
  low,
}) => {
  const problemsList = (
    <StyledProblemsList>
      <UIDataCard text="Problems" count={problems} />
      <UIDataCard text="Critical" count={critical} critical />
      <UIDataCard text="High" count={high} high />
      <UIDataCard text="Medium" count={medium} medium />
      <UIDataCard text="Low" count={low} low />
    </StyledProblemsList>
  );

  // TODO: plan how we actually decide status
  const getStatusIcon = () => {
    if (critical > 30) return <FrownOutlined className="icon-status pink" />;

    if (critical > 20 && critical < 30) {
      return <MehOutlined className="icon-status orange" />;
    }

    return <SmileOutlined className="icon-status green" />;
  };
  return (
    <StyledOverview>
      <div className="icon">{getStatusIcon()}</div>
      <div className="overview-title">
        <UIHead2>
          At a glance
          <Popover
            className="explainer"
            placement="right"
            title={"Whats this?"}
            content={"All the problems shown here"}
          >
            <QuestionCircleOutlined />
          </Popover>
        </UIHead2>
      </div>

      {problemsList}
    </StyledOverview>
  );
};

LagoonProblemsOverview.displayName = "LagoonProblemsOverview";

export default LagoonProblemsOverview;

export type { LagoonProblemsOverviewProps };
