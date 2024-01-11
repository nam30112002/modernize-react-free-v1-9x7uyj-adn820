import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

function TotalParkingLotChart(props) {
  const [detailParkingLot, setDetailParkingLot] = useState({
      "car": {
      "free": 73,
          "occupied": 0,
          "reserved": 0
      },
      "motorbike": {
      "free": 69,
          "occupied": 0,
          "reserved": 0
      },
      "truck": {
      "free": 68,
          "occupied": 0,
          "reserved": 0
      }
    })
  useEffect(() => {
    const asyncFunc = async () => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      await fetch('http://127.0.0.1:8001/parking_lots', requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          setDetailParkingLot(result);
        })
        .catch(error => console.log('error', error));
    };
    asyncFunc();
  }, []);
  return (
    <>
      <PieChart
        series={[
          {
            innerRadius: 0,
            outerRadius: 80,
            data: [
              { label: 'Total car slot', value: detailParkingLot.car.free + detailParkingLot.car.occupied + detailParkingLot.car.reserved },
              { label: 'Total motorbike slot', value: detailParkingLot.motorbike.free + detailParkingLot.motorbike.occupied + detailParkingLot.motorbike.reserved },
              { label: 'Total truck slot', value: detailParkingLot.truck.free + detailParkingLot.truck.occupied + detailParkingLot.truck.reserved }
            ]
          },
          {
            innerRadius: 80,
            outerRadius: 120,
            data: [
              { label: 'Free car slot', value: detailParkingLot.car.free },
              { label: 'Occupied car slot', value: detailParkingLot.car.occupied },
              { label: 'Reserved car slot', value: detailParkingLot.car.reserved },
              { label: 'Free motorbike slot', value: detailParkingLot.motorbike.free },
              { label: 'Occupied motorbike slot', value: detailParkingLot.motorbike.occupied },
              { label: 'Reserved motorbike slot', value: detailParkingLot.motorbike.reserved },
              { label: 'Free truck slot', value: detailParkingLot.truck.free },
              { label: 'Occupied truck slot', value: detailParkingLot.truck.occupied },
              { label: 'Reserved truck slot', value: detailParkingLot.truck.reserved }
            ],
          },
        ]}
        width={800}
        height={600}
        slotProps={{
          legend: { direction: 'row', position: { vertical: 'top', horizontal: 'middle' }, padding: 0},
        }}
      />
    </>
  );
}

export default TotalParkingLotChart;