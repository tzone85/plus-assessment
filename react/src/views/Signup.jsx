import {Link} from "react-router-dom";
import {useRef} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfRef = useRef();

    const {setUser, setToken} = useStateContext();
    const onSubmit = (event) => {
        event.preventDefault()

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfRef.current.value

        }

        axiosClient.post('/signup', payload)
            .then(({data}) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log("response errors: ", response.data.errors);
                }
            })
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit} action="">
                    <h1 className="title">
                        Create an account
                    </h1>

                    <input ref={nameRef} type="text" placeholder="Full Name"/>
                    {/*<input type="text" placeholder="Surname"/>*/}
                    <input ref = {emailRef} type="email" placeholder="Email Address"/>
                    <input ref={passwordRef} type="password" placeholder="Password"/>
                    <input ref={passwordConfRef} type="password" placeholder="Password Confirmation"/>

                    <button className="btn btn-block">Signup</button>

                    <p className="message">
                        Already Registered? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>

        </div>
    )
}
