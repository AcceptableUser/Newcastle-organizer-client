import React, {useState} from "react"
import "./Signup.scss"
import Button from "../html/button/primary"
import Input from "../html/form/input"
import {Link} from "react-router-dom"
import Invisibility from "../html/SVG/Invisibility";
import Visibility from "../html/SVG/Visibility";

const Signup = () => {

    //Show password or not
    const [passwordVisible, setPasswordVisible] = useState(false);

    const clickToTogglePasswordStatus = (event) => {
        event.preventDefault();
        setPasswordVisible(prevState => !prevState)
    }

    const onSignUpFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="section__signup">
            <div className="section__signup__content__wrapper">
                <div className="section__signup__title__wrapper">
                    <h1 className="section__signup__title">Create an account</h1>
                    <p className="section__signup__link">Have and account? <Link to="/login">Login</Link></p>
                </div>
                <form className="section__signup__form" onSubmit={onSignUpFormSubmit}>
                    <div className={"form-group"}>
                        <label className="section__signup__form__label" htmlFor="email">Email address</label>
                        <Input type="text" name="email" id="email" autoComplete={'' + Math.random()}/>
                    </div>
                    <div className={"form-group"}>
                        <label className="section__signup__form__label" htmlFor="username">Username</label>
                        <Input type="text" name="username" id="username"/>
                    </div>
                    <div className={"form-row"}>
                        <div className={"form-group"}>
                            <label className="section__signup__form__label" htmlFor="firstname">Firstname</label>
                            <Input type="text" name="firstname" id="firstname"/>
                        </div>
                        <div className={"form-group"}>
                            <label className="section__signup__form__label" htmlFor="lastname">Lastname</label>
                            <Input type="text" name="lastname" id="lastname"/>
                        </div>
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
                    <div className={"form-group"}>
                        <label className="section__signup__form__label" htmlFor="country">Country</label>
                        <Input type="text" name="country" id="country" list="countries"/>
                        <datalist id="countries">
                            <option value="France"/>
                            <option value="England"/>
                            <option value="Argentina"/>
                            <option value="India"/>
                            <option value="Nepal"/>
                        </datalist>
                    </div>
                    <p>By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy
                        Policy.</p>
                    <div className={"form-button"}>
                        <Button title={"Create account"} type={"submit"}/>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default Signup;