import React from "react"
import "./sign-in.styles.scss"

export const SignIn = ({changeLoginState}) => (
  <section>
    <div>
      <div>
        <h1>Create an account</h1>
        <p>Have and account? <input type="button" value="Log in" onClick={changeLoginState}/></p>
      </div>
      <form action="">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password"  name="password" id="password"/>
        <input className="log__button button__font" type="button" value="Create account" />
      </form>
      <input className="log__button__google button__font" type="button" value="Create account with Google"/>
      <input className="log__button__facebook button__font" type="button" value="Create account with Facebook"/>
    </div>
  </section>
)