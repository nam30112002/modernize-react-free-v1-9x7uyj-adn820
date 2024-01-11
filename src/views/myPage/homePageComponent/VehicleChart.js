import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@mui/material';

//thong ke so luong xe theo tung ngay
export default function VehicleChart({data,time}) {
    console.log(data)
    console.log(time)
    return (
        <>
            <Typography variant="h6" gutterBottom component="div">
                Thống kê số lượng xe theo ngày {time}
            </Typography>
          {data && <LineChart
            width={500}
            height={300}
            series={[
              { data: data.map((e) => e.car), label: 'car' },
              { data: data.map((e) => e.motorbike), label: 'motorbike' },
              { data: data.map((e) => e.truck), label: 'truck' },
            ]}
            xAxis={[{
              scaleType: 'point',
              data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            }]}
          />}
        </>
    );
}