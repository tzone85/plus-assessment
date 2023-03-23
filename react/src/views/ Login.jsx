import {Link} from "react-router-dom";

export default function Login() {

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit} action="">
                    <h1 className="title">Log into your account</h1>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="password"/>

                    <button className="btn btn-block">Login</button>

                    <p className="message">
                        Not Registered? <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>

        </div>
    )
}
