import { Link } from "react-router-dom"
import authFormSchema from "../validation/YupLogin"
import { server } from "../bff/server"
import { setUser } from "../actions/set-user"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"

const Entry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authFormSchema),
  })

  const navigate = useNavigate()

  const [serverError, setServerError] = useState("")
  const dispatch = useDispatch()

  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`)
        return
      }

      dispatch(setUser(res))
      navigate(-1)
    })
  }

  const loginError = errors.login?.message
  const passwordError = errors.password?.message
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
        <RegText to="/main" onClick={handleSubmit(onSubmit)}>
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

const RegText = styled(Link)`
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
