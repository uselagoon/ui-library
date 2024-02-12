import styled from "styled-components";
import colors from "../../_util/colors";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;
  min-height: 9.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.UI.backgrounds.header};
  box-shadow: 2px 2px 4px 0px #69696933;

  .user-details {
    min-width: 16.45%;
    min-height: 5rem;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    .info {
      flex: 1;
      min-width: 9rem;

      display: flex;
      flex-direction: column;

      span:not(.fullname) {
        font-family: "ArabicPro-Regular", sans-serif;
        font-size: 12px;
        line-height: 22px;
        display: flex;
        gap: 8px;
        align-items: center;
      }
      span {
        color: ${(props) =>
          props.theme.colorScheme === "dark" ? "#fff" : "#333"};
      }
      .fullname {
        font-family: "Open sans";
        font-weight: bold;
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
      }
      .email {
      }
      .org {
        text-decoration: underline;
      }
    }
  }
`;
export const StyledAvatar = styled.div<{ bgcolor: string | null }>`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : "transparent"};

  img {
    object-fit: contain;
    object-position: center top;
    display: inline-block;
    height: auto;
    width: 5rem;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
  list-style: none;
  font-family: "Open sans", sans-serif;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  li {
    min-width: 4.1875rem;
    width: max-content;
    padding: 1px 8px;
    text-align: center;
    text-transform: capitalize;
    cursor: pointer;
    user-select: none;
    color: ${(props) => (props.theme.colorScheme === "dark" ? "#fff" : "#333")};
    &.active {
      position: relative;
      color: ${colors.lagoonBlue};
      &::after {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        content: "";
        min-width: 2.5rem;
        height: 3px;
        background-color: ${colors.lagoonBlue};
        margin-top: 4px;
      }
    }
  }
`;
