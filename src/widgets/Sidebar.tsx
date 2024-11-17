import { SetStateAction } from "react";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: React.Dispatch<SetStateAction<boolean>>;
}

export function Sidebar(props: SidebarProps): JSX.Element {
    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
    return (
        <div className={sidebarClass}>
            <h3>Home</h3>

            <input type="button" id="btn1" value="File upload"></input>
            <h6></h6>
            <input type="button" id="btn2" value="Report"></input>
            <h6>2021</h6>
            <h6>2022</h6>
            <h6>2023</h6>
            <h6>2024</h6>
            <h6>2025</h6>

            
        </div>
    );
}
