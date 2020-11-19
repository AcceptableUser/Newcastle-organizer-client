import React from "react"
import "./Signup.scss"
import Button from "../html/button/primary"
import GoogleButton from "../html/button/google"
import FacebookButton from "../html/button/facebook"
import Input from "../html/form/input"
import {Link} from "react-router-dom"

const Signup = () => (
  <section className="section__signup">
    <div className="section__signup__content__wrapper">
      <div className="section__signup__title__wrapper">
        <h1 className="section__signup__title">Create an account</h1>
        <p className="section__signup__link">Have and account? <Link to="/login">Login</Link></p>
      </div>
      <form className="section__signup__form" action="">
        <label className="section__signup__form__label" htmlFor="username">Username</label>
        <Input type="text" name="username" id="username" />
        <label className="section__signup__form__label" htmlFor="email">Email</label>
        <Input type="email" name="email" id="email" />
        <label className="section__signup__form__label" htmlFor="password">Password</label>
        <Input type="password"  name="password" id="password"/>
        <Button />
      </form>
      <GoogleButton />
      <FacebookButton />
    </div>
  </section>
)

export default Signup;