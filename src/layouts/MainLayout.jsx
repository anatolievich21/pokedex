import { Outlet } from "react-router-dom";
import { Header } from "../components/index.js";
export const MainLayout = () => {
    return <>
        <Header />
        <main >
            <Outlet />
        </main>
    </>
}