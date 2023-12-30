import * as React from 'react';
import {useState} from 'react';
import {Typography} from "@mui/material";
import {BarChart} from "@mui/x-charts";

//thong ke so luong xe theo tung thang
export default function VehicleChart() {
    const [vehicleList, setVehicleList] = useState([
        {
            month: '10/2023',
            totalCar: 2,
            totalBike: 1,
            totalMotorbike: 14,
            newCar: 1,
            newBike: 1,
            newMotorbike: 5,
            deletedCar: 0,
            deletedBike: 1,
            deletedMotorbike: 10
        },
        {
            month: '11/2023',
            totalCar: 3,
            totalBike: 3,
            totalMotorbike: 14,
            newCar: 1,
            newBike: 4,
            newMotorbike: 10,
            deletedCar: 1,
            deletedBike: 2,
            deletedMotorbike: 3
        },
        {
            month: '12/2023',
            totalCar: 4,
            totalBike: 5,
            totalMotorbike: 14,
            newCar: 1,
            newBike: 2,
            newMotorbike: 8,
            deletedCar: 1,
            deletedBike: 1,
            deletedMotorbike: 5
        }
    ]);
    return (
        <>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Total every vehicle chart
            </Typography>
            <BarChart
                width={500}
                height={300}
                series={[
                    {data: vehicleList.map(e => e.totalCar), label: 'car', stack: 'total'},
                    {data: vehicleList.map(e => e.totalMotorbike), label: 'motorbike', stack: 'total'},
                    {data: vehicleList.map(e => e.totalBike), label: 'bike', stack: 'total'}
                ]}
                xAxis={[{data: vehicleList.map(e => e.month), scaleType: 'band'}]}
            />
        </>
    );
}