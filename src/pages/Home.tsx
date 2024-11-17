import { Graph } from "../widgets/Graph";

export function Home(): JSX.Element {
    return (
        <>
            <h1>Toyota Data Analysis</h1>
            <Graph 
                year={2021}
                field="Mfr Name"
                value="Toyota"
            />
            <p>asdhlkfj</p>
        </>
    );
}
