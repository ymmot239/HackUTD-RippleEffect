import { ScatterChart } from "@mui/x-charts";
import data from "../sample_data.json";
import { ClientData } from "../ClientData";

export function Graph(): JSX.Element {
    //const data2 = Object.values(data[2021]);

    /*
    return (
        <ScatterChart
          series={[
            {
                label: 'Series A',
                data: data2.map((v) => ({ x: new Date(v.released).getDate(), y: v.emissions, id: v.name })),
              },
              {
                label: 'Series B',
                data: data2.map((v) => ({ x: new Date(v.released).getDate(), y: v.emissions, id: v.name })),
              },
          ]}
          width={500}
          height={500}
        />
      );
    */
    console.log(
        ClientData.filterData(
            ClientData.getDataByYear(2021),
            "Mfr Name",
            "Toyota",
        ),
    );
    const data3 = data;
    console.log(data3);
    return (
        <ScatterChart
            series={data3.map((q) => ({
                label: q.year.toString(),
                data: q.cars.map((v) => ({
                    x: new Date(v.released).getMonth(),
                    y: v.emissions,
                    id: v.name,
                })),
            }))}
            width={500}
            height={500}
        />
    );
}
