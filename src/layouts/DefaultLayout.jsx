import { Outlet } from "react-router-dom";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";


export default function DefaultLayout() {
    return (
        <>
            <MyHeader />
            <Outlet />
            <MyFooter />
        </>
    )

}