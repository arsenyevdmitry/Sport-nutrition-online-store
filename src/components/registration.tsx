import authFormSchema from "../validation/YupLogin"
import sendFormData from "../validation/sendformdata"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const Registration = () => {
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
      <Label>Регистрация</Label>

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
          Зарегистрироваться
        </RegText>
      </RegBorder>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  padding: 18% 40%;
  display: flex;
  position: absolute;
  z-index: 20;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  gap: 20px;
`

const Label = styled.label`
  font-family: "Montserrat", italic;
  font-size: 40px;
  font-style: italic;
  font-weight: 900;
  line-height: 48.76px;
  text-align: center;
`

const InputLogin = styled.input`
  width: 380px;
  height: 30px;
  border-radius: 3px 0px 0px 0px;
  opacity: 1; /* Changed to 1 for visibility */
`

const InputPassword = styled.input`
  width: 380px;
  height: 30px;
  border-radius: 3px 0px 0px 0px;
  opacity: 1; /* Changed to 1 for visibility */
`

const RegText = styled.a`
  font-family: "Montserrat", italic;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.5px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
`

const RegBorder = styled.div`
  width: 210px;
  height: 40px;
  border-radius: 1px;
  opacity: 1; /* Changed to 1 for visibility */
  text-align: center;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 1);
`
const ErrorMessage = styled.span`
  color: gray;
  font-family: "Montserrat";
`

export default Registration
