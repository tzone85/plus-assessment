import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function DefaultLayout() {

    const {user, token} = useStateContext()

    if (!token) {
        return <Navigate to='/login' />
    }

    const onLogout = (event) => {
        event.preventDefault();
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>

            <div className="content">
                <header>
                    <div>
                        HEADER
                    </div>
                    <div>
                        {user.name}
                        <a className="btn-logout" href="#" onClick={onLogout}>Logout</a>
                    </div>
                </header>
                    <main>
                        <Outlet />
                    </main>

            </div>

            <h1>Default</h1>
            <Outlet />
        </div>
    )
}
