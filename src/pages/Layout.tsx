import { Outlet } from "react-router-dom";
import { Sidebar } from "../widgets/Sidebar";
import { useState } from "react";

export function Layout(): JSX.Element {
    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };

    return (
        <>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
            <div className={sidebarOpen ? "content open" : "content"}>
                <Outlet />
            </div>
        </>
    );
}
