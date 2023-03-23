import {Link} from "react-router-dom";

export default function Signup() {

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit} action="">
                    <h1 className="title">Create an account</h1>
                    <input type="text" placeholder="Full Name"/>
                    {/*<input type="text" placeholder="Surname"/>*/}
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Password Confirmation"/>

                    <button className="btn btn-block">Signup</button>

                    <p className="message">
                        Already Registered? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>

        </div>
    )
}
