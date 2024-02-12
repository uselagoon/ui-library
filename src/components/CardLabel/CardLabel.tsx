import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import colors from "../../_util/colors";

const colorMap = {
  development: colors.blue,
  project: colors.black,
  production: colors.green,
  ["active production"]: colors.green,
  ["standby production"]: colors.yellow,
  uat: colors.orange,
  error: colors.pink,
} as const;

type LagoonCardLabelProps = {
  type:
    | "development"
    | "project"
    | "production"
    | "active production"
    | "standby production"
    | "uat"
    | "error";
};

const InternalLabel: React.ForwardRefRenderFunction<
  HTMLDivElement,
  LagoonCardLabelProps
> = ({ type }, ref) => {
  const currentColor = colorMap[type];

  return (
    <StyledLabel className="lagoon-label" $currentColor={currentColor} ref={ref}>
      <span>{type}</span>
    </StyledLabel>
  );
};

const UICardLabel = forwardRef<HTMLDivElement, LagoonCardLabelProps>(
  InternalLabel
);

const StyledLabel = styled.div<{
  $currentColor: (typeof colorMap)[keyof typeof colorMap];
}>`
  transform: rotate(90deg);
  text-transform: uppercase;
  min-width: 100px;
  max-width: 300px;
  width: 100%;
  transform-origin: calc(30px + 0%) 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  line-height: 30px;
  font-size: 20px;
  color: #222;
  user-select: none;
  ${(props) =>
    props.$currentColor === "#000" &&
    css`
      color: ${colors.white};
    `}
  max-height: 30px;
  background-color: ${(props) => props.$currentColor};
  span {
    display: inline-block;
    transform: rotate(-180deg);
  }
`;

UICardLabel.displayName = "UICardLabel";

export default UICardLabel;

export type { LagoonCardLabelProps };
