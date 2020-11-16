import React from "react"
import "./log-in.styles.scss"
import Button from "../html/button/primary"
import GoogleButton from "../html/button/google"
import FacebookButton from "../html/button/facebook"
import Input from "../html/form/input"

export const LogIn = ({changeLoginState}) => (
  <section>
    <div>
      <div>
        <h1>Log in</h1>
        <p>New user? <input type="button" value="Create an account" onClick={changeLoginState}/></p>
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