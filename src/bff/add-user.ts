import { generateDate } from "./generate-date"

export const addUser = (Login, Password) => {
  fetch("http://localhost:3005/users"),
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      login: Login,
      password: Password,
      registed_at: generateDate(),
      role_id: 2,
    }),
  }
}
