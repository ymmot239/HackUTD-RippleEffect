import { SetStateAction } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Button } from "@mui/material";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: React.Dispatch<SetStateAction<boolean>>;
}

export function Sidebar(props: SidebarProps): JSX.Element {
    const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
    return (
        <div className={sidebarClass}>
            <Button 
                style={{position:"fixed",top:"20px", left:"50px", zIndex:1}}
                title=""
                startIcon={<CiMenuBurger />}
                onClick={props.toggleSidebar}
            />
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
