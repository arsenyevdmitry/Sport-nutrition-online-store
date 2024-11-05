import { Link } from "react-router-dom"
import styled from "styled-components"

const Header = () => (
  <NavMenu>
    <TitleText>RESULT</TitleText>
    <Icons>
      <img src="/src/icons/shopping-cart.png" alt="Shopping Cart" />
      <img src="/src/icons/user-icon.png" alt="User Icon" />
      <Registration>
        <StyledLink to="/entry">Вход/Регистрация</StyledLink>
      </Registration>
    </Icons>
  </NavMenu>
)

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
  padding-left: 900px; // Это может потребовать корректировки
  gap: 500px; // Это может потребовать корректировки
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
  // Изменено с 'a' на 'div'
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
