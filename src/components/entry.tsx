import { Link } from "react-router-dom"
import authFormSchema from "../validation/YupLogin"
import sendFormData from "../validation/sendformdata"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const Entry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authFormSchema),
  })

  const loginError = errors.login?.message
  const passwordError = errors.password?.message

  return (
    <FormContainer onSubmit={handleSubmit(sendFormData)}>
      <Label htmlFor="login">Вход</Label>
      <InputLogin type="text" placeholder="Логин" {...register("login")} />
      {loginError && <ErrorMessage>{loginError}</ErrorMessage>}

      <InputPassword
        type="password"
        placeholder="Пароль"
        {...register("password")}
      />
      {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

      <RegBorder>
        <RegText href="#" onClick={handleSubmit(sendFormData)}>
          Авторизоваться
        </RegText>
      </RegBorder>

      <RegistrationButton>
        <StyledRegister to="/register">Зарегистрироваться</StyledRegister>
      </RegistrationButton>
    </FormContainer>
  )
}

// Стили
const FormContainer = styled.form`
  padding: 18% 40%;
  display: flex;
  position: absolute;
  z-index: 20;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  gap: 20px;
`

const Label = styled.label`
  font-family: "Montserrat";
  font-size: 40px;
  font-weight: 900;
  text-align: center;
`

const InputLogin = styled.input`
  width: 380px;
  height: 30px;
  border-radius: 3px;
`

const InputPassword = styled.input`
  width: 380px;
  height: 30px;
  border-radius: 3px;
`

const RegText = styled.a`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  cursor: pointer;
`

const RegBorder = styled.div`
  width: 210px;
  height: 40px;
  border-radius: 1px;
  text-align: center;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 1);
`

const RegistrationButton = styled.div`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: rgba(255, 255, 255, 1);
`

const StyledRegister = styled(Link)`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
`

const ErrorMessage = styled.span`
  color: gray;
  font-family: "Montserrat";
`

export default Entry
