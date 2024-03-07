//Login/Logout & Signup
import { Login } from "./Login"
import { Logout } from "./Logout"
import { Signup } from "./Signup"
import { CustomMap } from "./CustomMap"

import { Route, Routes } from "react-router-dom"

export function Content(){
  return(
    <div>
      <h1>Search For Coffee Near You: </h1>
      <Routes>
        <Route path="/" element = {<CustomMap />}/>
        <Route path="/signup" element = {<Signup />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/logout" element = {<Logout />}/>
      </Routes>
    </div>
  )
}