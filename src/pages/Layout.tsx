import { Outlet } from "react-router-dom";
import { Sidebar } from "../widgets/Sidebar";
import { SetStateAction, useState } from "react";
import { Button } from "@mui/material";

export function Layout(): JSX.Element {
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };

    return (
        <>
            <Button onClick={handleViewSidebar}>click here</Button>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
            <div className={sidebarOpen ? "content open" : "content"}>
                <Outlet />
            </div>
        </>
    );
}
