import { MultiGraph, SingleGraph } from "../widgets/Graph";

export function Home(): JSX.Element {
    return (
        <>
            <h1>Toyota Data Analysis</h1>
            <MultiGraph 
                years={[2021,2022, 2023]}
                field={["Mfr Name", "Division"]}
                value={["Toyota", "LEXUS"]}
            />
            
        </>
    );
}
