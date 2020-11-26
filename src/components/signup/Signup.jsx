import React, {useState} from "react"
import "./Signup.scss"
import Button from "../html/button/primary"
import {Link} from "react-router-dom"
import Invisibility from "../html/SVG/Invisibility";
import Visibility from "../html/SVG/Visibility";
import axios from '../../api/server'

const initialUser = {
    email: '',
    password: '',
    username: '',
    firstname: '',
    lastname: '',
    country: ''
}

const Signup = (props) => {

    const [user, setUser] = useState(initialUser)

    //Show password or not
    const [passwordVisible, setPasswordVisible] = useState(false);

    const clickToTogglePasswordStatus = (event) => {
        event.preventDefault();
        setPasswordVisible(prevState => !prevState)
    }

    const onSignUpFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/signup', user)
            if (res.status === 200) {
                setUser(initialUser)
                window.location.href = "/";
            }
        } catch
            (e) {
            console.log(e)
        }
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
                        <input required type="email" name="email" id="email" value={user.email} onChange={(e) => {
                            setUser({...user, email: e.target.value})
                        }}/>
                    </div>
                    <div className={"form-group"}>
                        <label className="section__signup__form__label" htmlFor="username">Username</label>
                        <input required type="text" name="username" id="username" value={user.username}
                               onChange={(e) => {
                                   setUser({...user, username: e.target.value})
                               }}/>
                    </div>
                    <div className={"form-row"}>
                        <div className={"form-group"}>
                            <label className="section__signup__form__label" htmlFor="firstname">Firstname</label>
                            <input required type="text" name="firstname" id="firstname" value={user.firstname}
                                   onChange={(e) => {
                                       setUser({...user, firstname: e.target.value})
                                   }}/>
                        </div>
                        <div className={"form-group"}>
                            <label className="section__signup__form__label" htmlFor="lastname">Lastname</label>
                            <input required type="text" name="lastname" id="lastname" value={user.lastname}
                                   onChange={(e) => {
                                       setUser({...user, lastname: e.target.value})
                                   }}/>
                        </div>
                    </div>
                    <div className={"form-group"}>
                        <label className="section__signup__form__label" htmlFor="password">Password</label>
                        <div className={"form-input-icon"}>
                            <input required type={passwordVisible ? "text" : "password"} name="password" id="password"
                                   value={user.password} onChange={(e) => {
                                setUser({...user, password: e.target.value})
                            }}/>
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
                        <input type="text" name="country" id="country" list="countries" value={user.country}
                               onChange={(e) => {
                                   setUser({...user, country: e.target.value})
                               }}/>
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