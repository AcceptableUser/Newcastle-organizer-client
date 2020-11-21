import React, {useState} from "react"
import "./Login.scss"
import Button from "../html/button/primary"
import SocialButton from "../html/button/social"

import Input from "../html/form/input"
import {Link} from "react-router-dom"
import {colors} from "../../styles/color";
import Google from "../html/SVG/Google";
import Facebook from "../html/SVG/Facebook";
import Invisibility from "../html/SVG/Invisibility";
import Visibility from "../html/SVG/Visibility";

const LogIn = () => {

    //Show password or not
    const [passwordVisible, setPasswordVisible] = useState(false);

    const clickToTogglePasswordStatus = (event) => {
        event.preventDefault();
        setPasswordVisible(prevState => !prevState)
    }

    const onSignInFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="section__login">
            <div className="section__login__content__wrapper">
                <div className="section__login__title__wrapper">
                    <h1 className="section__login__title">Sign in</h1>
                    <p className="section__login__link">New user? <Link to="/signup">Create an account</Link></p>
                </div>
                <form className="section__login__form" autoComplete="new-password" onSubmit={onSignInFormSubmit}>
                    <div className={"form-group"}>
                        <label className="section__login__form__label" htmlFor="email">Email</label>
                        <Input type="email" name="email" id="email"/>
                    </div>
                    <div className={"form-group"}>
                        <label className="section__signup__form__label" htmlFor="password">Password</label>
                        <div className={"form-input-icon"}>
                            <Input type={passwordVisible ? "text" : "password"} name="password" id="password"/>
                            <button onClick={clickToTogglePasswordStatus}
                                    style={{display: `${passwordVisible ? "none" : "block"}`}}
                                    className={"bg-color-transparent"}>
                                <Invisibility size={"1"}/>
                            </button>
                            <button onClick={clickToTogglePasswordStatus}
                                    style={{display: `${passwordVisible ? "block" : "none"}`}}
                                    className={"bg-color-transparent"}>
                                <Visibility size={"1"}/>
                            </button>
                        </div>
                    </div>
                    <div className={"form-button"}>
                        <Button type={"submit"} title={"Continue"}/>
                    </div>
                </form>
                <div className={"divide"}>
                    <p>Or</p>
                </div>
                <SocialButton title={"Continue with Google"} type={"button"} backgroundColor={"#ffffff"}
                              borderColor={"#eaeaea"}>
                    <Google size={"1"}/>
                </SocialButton>
                <SocialButton title={"Continue with Facebook"} type={"button"} backgroundColor={colors.facebookColor}
                              color={"#ffffff"}>
                    <Facebook size={"1"} fillB={"#ffffff"} fillF={colors.facebookColor}/>
                </SocialButton>
            </div>
        </section>
    )
}


export default LogIn;