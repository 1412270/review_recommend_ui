import React, {useState} from "react";
import Apis, {endpoints} from "../../configs/Apis";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import cookies from "react-cookies";

export default function Login(){
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const history = useNavigate()

    const login = async (event) => {
        event.preventDefault()
        console.info('start ' + username + ' ' + password)
        try {
            let res = await Apis.post(endpoints['login'], {
                "username": username,
                "password": password,
            })
            cookies.save("access_token", res.data.access)
            console.info(res.data)
            let user = await Apis.get(endpoints['current-user'], {
                headers: {
                    'Authorization': 'Bearer ' + cookies.load("access_token"),
                }
            })
            console.info(user)
            cookies.save("user", user.data)

            dispatch({
                "type": "USER_LOGIN",
                "payload": user.data
            })
            history("/")

        } catch(err) {
            console.error(err)
        }
    }
    return (
        <div>
            <section className="normal-breadcrumb set-bg" style={{backgroundImage: "url(anime_main/img/normal-breadcrumb.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="normal__breadcrumb__text">
                                <h2>Login</h2>
                                <p>Welcome to the official Anime&nbsp;blog.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login__form">
                                <h3>Login</h3>
                                <form action="#">
                                    <div className="input__item">
                                        <input type="text" placeholder="Username" value={username}
                                               onChange={(event) =>
                                                   setUsername(event.target.value)}/>
                                        <span className="icon_user"/>
                                    </div>
                                    {/*<div className="input__item">*/}
                                    {/*    <input type="text" placeholder="Email address"/>*/}
                                    {/*    <span className="icon_mail"/>*/}
                                    {/*</div>*/}
                                    <div className="input__item">
                                        <input type="password" placeholder="Password" value={password}
                                               onChange={(event) =>
                                                   setPassword(event.target.value)}/>
                                        <span className="icon_lock"/>
                                    </div>
                                    <button type="submit" className="site-btn" onClick={login}>Login Now</button>
                                </form>
                                <a href="#" className="forget_pass">Forgot Your Password?</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login__register">
                                <h3>Dont’t Have An Account?</h3>
                                <a href="#" className="primary-btn">Register Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="login__social">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className="login__social__links">
                                    <span>or</span>
                                    <ul>
                                        <li><a href="#" className="facebook"><i className="fa fa-facebook"/> Sign in
                                            With
                                            Facebook</a></li>
                                        <li><a href="#" className="google"><i className="fa fa-google"/> Sign in
                                            With Google</a></li>
                                        <li><a href="#" className="twitter"><i className="fa fa-twitter"/> Sign in
                                            With Twitter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}