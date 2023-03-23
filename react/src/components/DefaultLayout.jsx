import {Outlet} from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <h1>Default</h1>
            <Outlet />
        </>
    )
}
