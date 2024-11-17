//import { Graph } from "../widgets/Graph";
import './pages.css';
export function SignInPassword():JSX.Element{
    
    return( 
        <>
            
            <figure> 
                <img src= "ToyotaLogo1.jpg"></img> 
                </figure>
            <h1 className="whoa">Sign In</h1>
            <p>Enter password here: </p>
            <label>Password: </label>
            <input type="password" name="name"></input>
            <p></p>
            <button>Confirm</button>
            <p>Forgot Password? Contact toyota@helpdesk.net</p>

        </>
)
}