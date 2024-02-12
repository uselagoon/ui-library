import React, { forwardRef } from "react";
import styled from "styled-components";
import colors from "../../_util/colors";

type DefaultProps = {
  text: string;
  count: string | number;
};

type ConditionProps =
  | { critical: true; high?: never; medium?: never; low?: never }
  | { high: true; critical?: never; medium?: never; low?: never }
  | { medium: true; critical?: never; high?: never; low?: never }
  | { low: true; critical?: never; high?: never; medium?: never };

export type CardProps = (DefaultProps & ConditionProps) | DefaultProps;

const getColor = (props: ConditionProps) => {
  if (props.critical) {
    return colors.pink;
  }
  if (props.high) {
    return colors.orange;
  }
  if (props.medium) {
    return colors.yellow;
  }
  if (props.low) {
    return colors.blue;
  }
  return "#fff";
};

const InternalDataCard: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardProps
> = (props, ref) => {
  const { text, count } = props;

  const keysToCheck = ["critical", "high", "medium", "low"];

  const severityColor = keysToCheck.every((key) => !(key in props))
    ? "#fff"
    : getColor(props as ConditionProps);

  return (
    <StyledCard className="ui-datacard" ref={ref} $severityColor={severityColor}>
      <span className="ui-datacard__text">{text}</span>
      <span className="ui-datacard__count">{count}</span>
    </StyledCard>
  );
};

const StyledCard = styled.div<{
  $severityColor: string;
}>`
  font-family: "AmericaMono-Regular", sans-serif;
  text-transform: uppercase;
  width: 100px;
  height: 62px;
  color: ${(props) => props.$severityColor};
  border: 1px solid ${(props) => props.theme.UI.borders.box};
  border-radius: 5px;
  padding: 5px 4px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  user-select: none;
  background-color: ${(props) => props.theme.UI.backgrounds.dataCard};
  > span {
    display: inline-block;

    &.ui-datacard__text {
      font-size: 16px;
      line-height: 22px;
    }
    &.ui-datacard__count {
      font-size: 2.25rem;
      line-height: 1.25rem;
      text-align: right;
    }
  }
`;

const UIDataCard = forwardRef<HTMLDivElement, CardProps>(InternalDataCard);

UIDataCard.displayName = "UIDataCard";

export default UIDataCard;

export type { CardProps as UICardProps };
