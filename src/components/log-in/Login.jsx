import React from "react"
import "./Login.scss"
import Button from "../html/button/primary"
import GoogleButton from "../html/button/google"
import FacebookButton from "../html/button/facebook"
import Input from "../html/form/input"
import {Link} from "react-router-dom"

const LogIn = () => (
  <section>
    <div>
      <div>
        <h1>Log in</h1>
        <p>New user? <Link to="/signup">Create an account</Link></p>
      </div>
      <form action="">
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <Input type="password"  name="password" id="password"/>
        <Button />
      </form>
      <GoogleButton />
      <FacebookButton />
    </div>
  </section>
)

export default LogIn;