import car2021 from "./2021.json";
import car2022 from "./2022.json";
import car2023 from "./2023.json";

export interface cars {
    "Model Year": number;
    "Mfr Name": string;
    Division: string;
    Carline: string | number;
    "Verify Mfr Cd": string;
    "Index (Model Type Index)": number;
    "Eng Displ": number;
    "# Cyl": number;
    Transmission?: string;
    "City FE (Guide) - Conventional Fuel": number;
    "Hwy FE (Guide) - Conventional Fuel": number;
    "Comb FE (Guide) - Conventional Fuel": number;
    "City Unadj FE - Conventional Fuel": number;
    "Hwy Unadj FE - Conventional Fuel": number;
    "Comb Unadj FE - Conventional Fuel": number;
    "City Unrd Adj FE - Conventional Fuel": number;
    "Hwy Unrd Adj FE - Conventional Fuel": number;
    "Comb Unrd Adj FE - Conventional Fuel": number;
    "Air Aspir Method"?: string | undefined;
    "Air Aspiration Method Desc"?: string | undefined;
    Trans: string;
    "Trans Desc": string;
    "# Gears": number;
    "Lockup Torque Converter": string;
    "Trans Creeper Gear": string;
    "Drive Sys": string | number;
    "Drive Desc": string;
    "Max Ethanol % - Gasoline"?: number | undefined;
    "Fuel Usage  - Conventional Fuel": string;
    "Fuel Usage Desc - Conventional Fuel": string;
    "Fuel Unit - Conventional Fuel": string;
    "Fuel Unit Desc - Conventional Fuel": string;
    "Gas Guzzler Exempt (Where Truck = 1975 NHTSA truck definition)": string;
    "Gas Guzzler Exempt Desc (Where Truck = 1975 NHTSA truck definition)": string;
    "4Dr Pass Vol"?: number | undefined;
    "4Dr Lugg Vol"?: number | undefined;
    "Annual Fuel1 Cost - Conventional Fuel": number;
    "EPA Calculated Annual Fuel Cost - Conventional Fuel -----  Annual fuel cost error. Please revise Verify. ": number;
    "Descriptor - Model Type (40 Char or less)"?: string | undefined;
    "Intake Valves Per Cyl": number;
    "Exhaust Valves Per Cyl": number;
    "Carline Class": number;
    "Carline Class Desc": string;
    "Car/Truck Category - Cash for Clunkers Bill."?:
        | string
        | number
        | undefined;
    "Calc Approach Desc": string;
    "Release Date": number;
    "EPA FE Label Dataset ID": number;
    "Unique Label?"?: string | undefined;
    "Label Recalc?"?: string | undefined;
    "Suppressed?"?: string | undefined;
    "Police/Emerg?"?: string | undefined;
    "Comments - Mfr Eng Cnfg"?: string;
    "Cyl Deact?"?: string | undefined;
    "Var Valve Timing?"?: string | undefined;
    "Var Valve Timing Desc"?: string;
    "Var Valve Lift?": string;
    "Energy Storage Device Desc"?: string | undefined;
    "# Batteries"?: number | undefined;
    "Battery Type Desc"?: string | undefined;
    "Total Voltage for Battery Pack(s)"?: number | undefined;
    "Batt Energy Capacity (Amp-hrs)"?: number | undefined;
    "Batt Specific Energy (Watt-hr/kg)"?: number | undefined;
    "Batt Charger Type Desc"?: string | undefined;
    "Regen Braking Type Desc"?: string | undefined;
    "Regen Braking Wheels Source (Front, Rear, Both)"?: string | undefined;
    "Driver Cntrl Regen Braking?"?: string | undefined;
    "HEV-EV Comments"?: string | undefined;
    "# Drive Motor Gen"?: number | undefined;
    "Motor Gen Type Desc"?: string | undefined;
    "Motor Gen Type, If Other"?: string | undefined;
    "Rated Motor Gen Power (kW)"?: number | string | undefined;
    "Fuel Metering Sys Cd": string;
    "Fuel Metering Sys Desc": string;
    "Fuel Cell Vehicle (Y or N)"?: string | undefined;
    "Off Board Charge Capable (Y or N)"?: string | undefined;
    "Camless Valvetrain (Y or N)": string;
    "Oil Viscosity": string;
    "Stop/Start System (Engine Management System) Code": string;
    "Stop/Start System (Engine Management System)  Description": string;
    "Model Type Desc (MFR entered)"?: string | undefined;
    "MFR Calculated Gas Guzzler MPG "?: number | undefined;
    "FE Rating (1-10 rating on Label)": number;
    "GHG Rating (1-10 rating on Label)": number;
    "#1 Smog Rating Test Group": string;
    "#1 Mfr Smog Rating (Mfr Smog 1-10 Rating on Label for Test Group 1)": number;
    "$ You Spend over 5 years (increased amount spent in fuel costs over 5 years - on label) "?:
        | number
        | undefined;
    "City CO2 Rounded Adjusted": number;
    "Hwy CO2 Rounded Adjusted": number;
    "Comb CO2 Rounded Adjusted (as shown on FE Label)": number;
}

export type filterTypes =
    | "Model Year"
    | "Mfr Name"
    | "Division"
    | "Carline"
    | "Verify Mfr Cd"
    | "Index (Model Type Index)"
    | "Eng Displ"
    | "# Cyl"
    | "Transmission"
    | "City FE (Guide) - Conventional Fuel"
    | "Hwy FE (Guide) - Conventional Fuel"
    | "Comb FE (Guide) - Conventional Fuel"
    | "City Unadj FE - Conventional Fuel"
    | "Hwy Unadj FE - Conventional Fuel"
    | "Comb Unadj FE - Conventional Fuel"
    | "City Unrd Adj FE - Conventional Fuel"
    | "Hwy Unrd Adj FE - Conventional Fuel"
    | "Comb Unrd Adj FE - Conventional Fuel"
    | "Air Aspir Method"
    | "Air Aspiration Method Desc"
    | "Trans"
    | "Trans Desc"
    | "# Gears"
    | "Lockup Torque Converter"
    | "Trans Creeper Gear"
    | "Drive Sys"
    | "Drive Desc"
    | "Max Ethanol % - Gasoline"
    | "Fuel Usage  - Conventional Fuel"
    | "Fuel Usage Desc - Conventional Fuel"
    | "Fuel Unit - Conventional Fuel"
    | "Fuel Unit Desc - Conventional Fuel"
    | "Gas Guzzler Exempt (Where Truck = 1975 NHTSA truck definition)"
    | "Gas Guzzler Exempt Desc (Where Truck = 1975 NHTSA truck definition)"
    | "Annual Fuel1 Cost - Conventional Fuel"
    | "EPA Calculated Annual Fuel Cost - Conventional Fuel -----  Annual fuel cost error. Please revise Verify. "
    | "Descriptor - Model Type (40 Char or less)"
    | "Intake Valves Per Cyl"
    | "Exhaust Valves Per Cyl"
    | "Carline Class"
    | "Carline Class Desc"
    | "Car/Truck Category - Cash for Clunkers Bill."
    | "Calc Approach Desc"
    | "Release Date"
    | "EPA FE Label Dataset ID"
    | "Unique Label?"
    | "Label Recalc?"
    | "Suppressed?"
    | "Police/Emerg?"
    | "Cyl Deact?"
    | "Var Valve Timing?"
    | "Var Valve Timing Desc"
    | "Var Valve Lift?"
    | "Energy Storage Device Desc"
    | "# Batteries"
    | "Battery Type Desc"
    | "Total Voltage for Battery Pack(s)"
    | "Batt Energy Capacity (Amp-hrs)"
    | "Batt Specific Energy (Watt-hr/kg)"
    | "Batt Charger Type Desc"
    | "Regen Braking Type Desc"
    | "Regen Braking Wheels Source (Front, Rear, Both)"
    | "Driver Cntrl Regen Braking?"
    | "# Drive Motor Gen"
    | "Motor Gen Type Desc"
    | "Motor Gen Type, If Other"
    | "Rated Motor Gen Power (kW)"
    | "Fuel Metering Sys Cd"
    | "Fuel Metering Sys Desc"
    | "Fuel Cell Vehicle (Y or N)"
    | "Off Board Charge Capable (Y or N)"
    | "Camless Valvetrain (Y or N)"
    | "Oil Viscosity"
    | "Stop/Start System (Engine Management System) Code"
    | "Stop/Start System (Engine Management System)  Description"
    | "MFR Calculated Gas Guzzler MPG "
    | "FE Rating (1-10 rating on Label)"
    | "GHG Rating (1-10 rating on Label)"
    | "#1 Smog Rating Test Group"
    | "#1 Mfr Smog Rating (Mfr Smog 1-10 Rating on Label for Test Group 1)"
    | "$ You Spend over 5 years (increased amount spent in fuel costs over 5 years - on label) "
    | "City CO2 Rounded Adjusted"
    | "Hwy CO2 Rounded Adjusted"
    | "Comb CO2 Rounded Adjusted (as shown on FE Label)";
/**
 * A class to manage client data retrieval
 */
export class ClientData {
    /**
     * gets the data of a certain year
     *
     * todo: change from file read to http get from java backend
     * @param year - year of data
     */
    public static getDataByYear(year: number): cars[] {
        //generator for fiter types
        /*console.log(Object.keys(car2021[0]).reduce((a,b)=>a+"|"+'"'+b+'"'));
         */
        switch (year) {
            case 2021:
                return car2021;
            case 2022:
                return car2022;
            case 2023:
                return car2023;
        }
        return JSON.parse("{}");
    }

    /**
     * filter the annoying amount of data into manageable chunks
     * @param data - the data to sort
     * @param field - field to sort it by
     * @param value - value of said field
     */
    public static filterData(
        data: cars[],
        field: filterTypes,
        value: string,
    ): cars[] {
        const final: cars[] = [];
        for (let x of data) {
            if (x[field]===value) {
                final.push(x);
            }
        }
        return final;
    }
}
