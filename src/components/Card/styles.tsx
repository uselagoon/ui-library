import { Card } from "antd";
import styled, { css } from "styled-components";
import colors from "../../_util/colors";

const sharedCardStyles = css`
  max-width: 23.75rem;
  height: 15.25rem;
  background-color: ${(props) => props.theme.UI.backgrounds.lagoonCard};
  color: ${(props) => props.theme.UI.texts.primary};
  box-shadow: 2px 2px 4px 0px #69696933;
  border-color: transparent;
`;
export const StyledCard = styled(Card)`
  &.ant-card {
    cursor: unset;
    ${sharedCardStyles}
    overflow: hidden;
    .ant-card-head,
    .ant-card-body,
    .ant-card-actions > li > span > span[role="img"] {
      color: ${(props) => props.theme.UI.texts.primary};
    }

    .ant-card-actions > li > span > span[role="img"]:hover {
      color: ${colors.lagoonBlue};
    }
    .ant-card-head {
      padding-left: 3.1875rem;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      font-size: 1rem;
      line-height: 1.5rem;
      .ant-card-extra {
        color: ${(props) => props.theme.UI.texts.primary};
      }
    }
    .ant-card-extra {
      display: flex;
      gap: 10px;
      > * {
        cursor: pointer;
      }
    }
    .ant-card-body {
      padding: 0;
      min-height: 9.375rem;
      border-top: 1px solid ${(props) => props.theme.UI.borders.card};
      border-bottom: 1px solid ${(props) => props.theme.UI.borders.card};
      border-radius: 0;
      & > .lagoon-label {
        translate: 0 -3.5rem;
      }
      & > *:not(.lagoon-label) {
        padding-left: 3.1875rem;
      }
    }
    .ant-card-actions {
      background-color: transparent;
      margin-left: 1.5rem;
      height: 2.5rem;
      border: none;
      > li {
      }
    }
  }
`;

export const StyledNewCard = styled(Card)`
  display: flex;
  place-content: center;
  place-items: center;
  ${sharedCardStyles}
`;

export const PinSection = styled.div`
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-family: "ArabicPro-Regular", sans-serif;
  border: 1px solid ${(props) => props.theme.UI.borders.box};
  padding: 4px 15px;
  box-shadow: 0px 2px 0px 0px #00000004;
  border-radius: 2px;
  cursor: pointer;
  transition:
    color 0.3s ease,
    border 0.3s ease;
  &:hover {
    color: ${colors.lagoonBlue};
    border: 1px solid ${colors.lagoonBlue};
  }
`;

export const StyledEnvPartial = styled.div`
  padding-left: 3.1875rem;
  .lagooncard-project {
    display: flex;
    max-height: 2.5rem;
    flex-direction: column;
    span:nth-child(1) {
      font-size: 0.625rem;
      line-height: 0.625rem;
      font-family: "AmericaMono-Regular", sans-serif;
    }
    span:nth-child(2) {
      font-size: 0.875rem;
      line-height: 1.375rem;
      font-family: "ArabicPro-Regular", sans-serif;
      max-width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;
export const StyledProjectPartial = styled.div`
  padding-left: 3.1875rem;
`;
