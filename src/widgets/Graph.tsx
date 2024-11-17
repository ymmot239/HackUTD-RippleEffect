import { ScatterChart, ScatterValueType } from "@mui/x-charts";
import { ClientData, filterTypes } from "../ClientData";

export interface graphProps{
    year:number,
    field: filterTypes,
    value: string,
}

export function Graph(props:graphProps): JSX.Element {
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

      /*
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
    */

    const data = ClientData.filterData(
        ClientData.getDataByYear(props.year),
        props.field,
        props.value
    );

    const valueFormatter = (value:ScatterValueType|undefined) => `${value?.id}`;

    return (
        <ScatterChart
            xAxis={[
                {
                    valueFormatter: (a,c) => {
                        c;
                        const jsDate = ExcelDateToJSDate(a);
                        return jsDate.toUTCString().slice(8,11);
                        
                    }
                }
            ]}
            series={[{
                label:props.year.toString(),
                data:data.map((v) => ({
                    x:v["Release Date"],
                    y:v["City CO2 Rounded Adjusted"],
                    id:v["Division"]+" " + v["Carline"]+" " + v["Verify Mfr Cd"]+" " + v["Index (Model Type Index)"]
                })),
                valueFormatter
            }]
            }
            width={500}
            height={500}
        />
    );
}

function ExcelDateToJSDate(serial:number) {
    var utc_days  = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;                                        
    var date_info = new Date(utc_value * 1000);
 
    var fractional_day = serial - Math.floor(serial) + 0.0000001;
 
    var total_seconds = Math.floor(86400 * fractional_day);
 
    var seconds = total_seconds % 60;
 
    total_seconds -= seconds;
 
    var hours = Math.floor(total_seconds / (60 * 60));
    var minutes = Math.floor(total_seconds / 60) % 60;
 
    return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
 }