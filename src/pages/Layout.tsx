import { Outlet } from "react-router-dom";
import { Sidebar } from "../widgets/Sidebar";


export function Layout():JSX.Element{
    return (
        <>
            <Sidebar />
            <div className='content'>
                <Outlet />
            </div>
        </>
    )
}