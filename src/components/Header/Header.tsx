import React, { ReactNode, forwardRef, useEffect, useState } from "react";
import { StyledAvatar, StyledHeader, StyledNav } from "./styles";
import genAvatarBackground from "./helpers/genAvatarBackground";
import { GlobalOutlined, MailOutlined } from "@ant-design/icons";

export type HeaderProps = {
  userInfo: {
    image?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
    firstName: string;
    lastName: string;
    email: string;
    organization: string;
  };
  navLinks: {
    label: string;
    element: ReactNode;
  }[];
};

const InternalHeader: React.ForwardRefRenderFunction<
  HTMLElement,
  HeaderProps
> = ({ userInfo, navLinks }, ref) => {
  const { firstName, lastName, image, email, organization } = userInfo;

  const [active, setActive] = useState<string>("");

  const imagePresent = !!image;

  const avatarBg = genAvatarBackground(firstName.charAt(0), lastName.charAt(0));

  useEffect(() => {
    const currentPath = location.pathname;

    const foundItem = navLinks.find((item) => {
      if (typeof item.element === "string") {
        return item.element === currentPath;
      } else if (React.isValidElement(item.element)) {
        return item.element.props.to === currentPath;
      }
      return false;
    });

    foundItem && setActive(foundItem.label);
  }, [location.pathname, navLinks]);

  return (
    <StyledHeader ref={ref}>
      <div className="user-details">
        <StyledAvatar
          className="avatar"
          bgcolor={imagePresent ? null : avatarBg}
        >
          {!imagePresent ? (
            <span> {`${firstName.charAt(0)} ${lastName.charAt(0)}`}</span>
          ) : (
            <img src={image} alt="profile image" />
          )}
        </StyledAvatar>
        <div className="info">
          <span className="fullname">
            {firstName} {lastName}
          </span>
          <span className="email">
            <MailOutlined /> {email}
          </span>
          <span className="org">
            <GlobalOutlined /> {organization}
          </span>
        </div>
      </div>
      <StyledNav className="navigation">
        {navLinks.map((item) => (
          <li
            key={item.label}
            className={item.label === active ? "active" : ""}
          >
            {item.element}
          </li>
        ))}
      </StyledNav>
    </StyledHeader>
  );
};

const LagoonHeader = forwardRef<HTMLElement, HeaderProps>(InternalHeader);

LagoonHeader.displayName = "LagoonHeader";

export default LagoonHeader;
