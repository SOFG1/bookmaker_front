import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 35px;
`;

const StyledLink = styled(NavLink)`
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    text-decoration: none;
    &.active {
        color: #fde054;
        font-weight: 600;
    }
`

export const HeaderNav = () => {
  return <StyledNav>
    <StyledLink to="/">Sports</StyledLink>
    <StyledLink to="/account">Account</StyledLink>
  </StyledNav>;
};
