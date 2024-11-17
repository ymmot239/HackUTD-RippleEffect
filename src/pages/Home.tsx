import { MultiGraph, SingleGraph } from "../widgets/Graph";
import { StyledEngineProvider } from '@mui/material/styles';

export function Home(): JSX.Element {
    return (
        <>
            
            <div style={{marginLeft:"200px"}}>
            <h1>Toyota Data Analysis</h1>
            <MultiGraph 
                years={[2021,2022, 2023]}
                field={["Mfr Name", "Division"]}
                value={["Toyota", "LEXUS"]}
            />

            <MultiGraph 
                years={[2021,2022, 2023]}
                field={["Mfr Name", "Carline Class Desc"]}
                value={["Toyota", "Midsize Cars"]}
            />
            
            </div>
            
        </>
    );
}
