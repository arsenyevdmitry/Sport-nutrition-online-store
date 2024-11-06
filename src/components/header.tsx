import { Link, useNavigate } from "react-router-dom"
import {
  selectUserLogin,
  selectUserRole,
  selectUserSession,
} from "../selectors"

import { ROLE } from "../constants"
import { logout } from "../actions/logout"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const Header = () => {
  const dispatch = useDispatch()
  const roleId = useSelector(selectUserRole)
  const login = useSelector(selectUserLogin)
  const session = useSelector(selectUserSession)
  return (
    <NavMenu>
      <TitleText>RESULT</TitleText>
      <Icons>
        <img src="/src/icons/shopping-cart.png" alt="Shopping Cart" />
        <img src="/src/icons/user-icon.png" alt="User Icon" />
        <Registration>
          {roleId === ROLE.GUEST ? (
            <StyledLink to="/entry">Вход/Регистрация</StyledLink>
          ) : (
            <>
              <div>{login}</div>
              <a onClick={() => dispatch(logout(session))}>
                <img src="/src/icons/log-out 1.png"></img>
              </a>
            </>
          )}
        </Registration>
      </Icons>
    </NavMenu>
  )
}
// Styled components
const NavMenu = styled.nav`
  width: 100%;
  height: 70px;
  z-index: 10;
  margin: 0 auto;
  text-align: center;
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-left: 900px;
  gap: 500px;
  position: fixed;
  line-height: 70px;
`

const TitleText = styled.h1`
  font-family: "Protest Guerrilla";
  color: white;
  font-size: 40px;
  font-weight: 400;
`

const Icons = styled.div`
  line-height: 20px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 10px;
`

const Registration = styled.div`
  font-family: "Montserrat";
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  padding: 0;
`

const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
`

export default Header
