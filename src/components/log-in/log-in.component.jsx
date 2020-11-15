import React from "react"
import "./log-in.styles.scss"

export const LogIn = ({changeLoginState}) => (
  <section>
    <div>
      <div>
        <h1>Log in</h1>
        <p>New user? <input type="button" value="Create an account" onClick={changeLoginState}/></p>
      </div>
      <form action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password"  name="password" id="password"/>
        <input className="log__button button__font" type="button" value="Continue" />
      </form>
      <input className="log__button__google button__font" type="button" value="Continue with Google"/>
      <input className="log__button__facebook button__font" type="button" value="Continue with Facebook"/>
    </div>
  </section>
)