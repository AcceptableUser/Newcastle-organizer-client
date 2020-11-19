import React from "react"
import "./Login.scss"
import Button from "../html/button/primary"
import GoogleButton from "../html/button/google"
import FacebookButton from "../html/button/facebook"
import Input from "../html/form/input"
import {Link} from "react-router-dom"

const LogIn = () => (
  <section className="section__login">
    <div className="section__login__content__wrapper">
      <div className="section__login__title__wrapper">
        <h1 className="section__login__title">Log in</h1>
        <p className="section__login__link">New user? <Link to="/signup">Create an account</Link></p>
      </div>
      <form className="section__login__form" action="">
        <label className="section__login__form__label" htmlFor="email">Email</label>
        <Input type="email" name="email" id="email" />
        <label className="section__login__form__label" htmlFor="password">Password</label>
        <Input type="password"  name="password" id="password"/>
        <Button />
      </form>
      <GoogleButton />
      <FacebookButton />
    </div>
  </section>
)

export default LogIn;