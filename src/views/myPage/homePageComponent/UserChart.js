import * as React from 'react';
import {LineChart} from '@mui/x-charts/LineChart';
import {Typography} from "@mui/material";
import {useState} from "react";

//thong ke so luong user theo thang
export default function UserChart() {
    const [userList, setUserList] = useState([
        {month: '10/2023', totalUser: 7 , newUser: 2, deletedUser: 1},
        {month: '11/2023', totalUser: 12, newUser: 5, deletedUser: 2},
        {month: '12/2023', totalUser: 20, newUser: 8, deletedUser: 3},
        {month: '1/2024', totalUser: 25, newUser: 10, deletedUser: 4},
        {month: '2/2024', totalUser: 26, newUser: 11, deletedUser: 5},
        {month: '3/2024', totalUser: 30, newUser: 15, deletedUser: 6},
    ]);
    return (
        <>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Total user chart
            </Typography>
            <LineChart
                xAxis={[
                    { data: userList.map(_element => _element.month), scaleType: 'point' }
                ]}
                series={[
                    { data: userList.map(_element => _element.totalUser), label: 'Total user'}
                ]}
                height={200}
                margin={{ top: 10, bottom: 20 }}
            />
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                New and delete user chart
            </Typography>
            <LineChart
                xAxis={[{ data: userList.map(_element => _element.month), scaleType: 'point' }]}
                series={[
                    { data: userList.map(_element => _element.newUser), label: 'New user'},
                    { data: userList.map(_element => _element.deletedUser), label: 'Deleted user'}
                ]}
                height={200}
                margin={{ top: 10, bottom: 20 }}
            />
        </>
    );
}