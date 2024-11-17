import React from "react";
import { AxisOptions, Chart } from "react-charts";

export function EmissionsGraph():JSX.Element {
    type DailyStars = {
        date: Date,    
        stars: number,     
    }           
     
    type Series = {     
        label: string,     
        data: DailyStars[]     
    }
                
    const data: Series[] = [     
    {     
        label: '2021',     
        data: [     
        {     
            date: new Date(2024,2),     
            stars: 24,     
        },
        {     
            date: new Date(2024,3),     
            stars: 21,     
        },    
        // ...     
        ]     
    },     
    {     
        label: '2022',     
        data: [     
        {     
            date: new Date(2024,2),     
            stars: 22   ,     
        },
        {     
            date: new Date(2024,3),     
            stars: 21   ,     
        },
        // ...     
        ]     
    }     
    ]
    
    const primaryAxis = React.useMemo(
        (): AxisOptions<DailyStars> => ({   
          getValue: datum => datum.date,   
        }),   
        []   
      )    
   
      const secondaryAxes = React.useMemo(   
        (): AxisOptions<DailyStars>[] => [   
          {   
            getValue: datum => datum.stars,   
          },
        ],   
        []   
      )

    return (<>
        <Chart
            options={{
                data,
                primaryAxis,
                secondaryAxes
            }}
            />
    </>)
}