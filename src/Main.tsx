import Entry from "./components/entry"
import Header from "./components/header"
import Registration from "./components/registration"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"

export const Main = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/main" element={<Header />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/entry" element={<Entry />} />
        <Route path="/users" element={<div>Пользователи</div>} />
        <Route path="/post" element={<div>Новая статья</div>} />
        <Route path="*" element={<div>Ошибка</div>} />
      </Routes>
    </>
  )
}
