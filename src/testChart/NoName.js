import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {BarChart} from "@mui/x-charts";
import {useState} from "react";

export default function NoName() {
    const [data, setData] = useState([
        { id: 0, type: 'xe dap', entered: 20, empty: 3, booked : 5},
        { id: 1, type: 'xe may', entered: 10, empty: 9, booked : 2},
        { id: 2, type: 'o to', entered: 25, empty: 12, booked : 0},
    ]);
    return (
        <BarChart
            width={500}
            height={300}
            series={[
                { data: data.map(e => e.entered), label: 'da vao', id: 'pvId', stack: 'total' },
                { data: data.map(e => e.empty), label: 'con trong', id: 'uvId', stack: 'total' },
                { data: data.map(e => e.booked), label: 'da dat', id: 'ipId', stack: 'total'}
            ]}
            xAxis={[{ data: data.map(e => e.type), scaleType: 'band' }]}
        />
    );
}