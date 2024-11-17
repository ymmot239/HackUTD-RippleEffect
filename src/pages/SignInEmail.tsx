//import { Graph } from "../widgets/Graph";
import './pages.css';
export function SignInEmail():JSX.Element{
    
    return(
         
        <>
            
            <figure> 
                <img src= "ToyotaLogo1.jpg"></img> 
                </figure>
            <h1>Sign In</h1>
            <p>Enter email here: </p>
            <label>Email: </label>
            <input type="text" name="name" placeholder="jane.doe@gmail.com"></input>
            <p></p>
            <button>Confirm</button>
            <p>Forgot Email? Contact toyota@helpdesk.net</p>

        </>
)
}