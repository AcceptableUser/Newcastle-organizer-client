import React from "react"
import "./Signup.scss"
import Button from "../html/button/primary"
import GoogleButton from "../html/button/google"
import FacebookButton from "../html/button/facebook"
import Input from "../html/form/input"
import {Link} from "react-router-dom"

const Signup = () => (
  <section>
    <div>
      <div>
        <h1>Create an account</h1>
        <p>Have and account? <Link to="/login">Login</Link></p>
      </div>
      <form action="">
        <label htmlFor="username">Username</label>
        <Input type="text" name="username" id="username" />
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

export default Signup;