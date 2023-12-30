import * as React from 'react';
import {useState} from 'react';
import {Typography} from "@mui/material";
import {PieChart} from "@mui/x-charts/PieChart";


//thong ke chi tiet 1 parking lot
export default function ParkingLotChart() {
    const [parkingLot, setParkingLot] = useState({
        name : 'bai do xe 1',
        carSlot : 10,
        motorbikeSlot : 20,
        bikeSlot : 30,
        parkedCar : 5,
        parkedMotorbike : 10,
        parkedBike : 15,
        bookedCar : 2,
        bookedMotorbike : 3,
        bookedBike : 4,
        emptyCar : 3,
        emptyMotorbike : 7,
        emptyBike : 11
    });
    return (
        <>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Detail Parking Lot Chart
            </Typography>
            <PieChart
                series={[
                    {
                        innerRadius: 0,
                        outerRadius: 80,
                        data: [
                            { label: 'Car Slot', value: parkingLot.carSlot },
                            { label: 'Motorbike Slot', value: parkingLot.motorbikeSlot },
                            { label: 'Bike Slot', value: parkingLot.bikeSlot },
                        ]
                    },
                    {
                        innerRadius: 80,
                        outerRadius: 120,
                        data: [
                            { label: 'Parked Car', value: parkingLot.parkedCar },
                            { label: 'Booked Car', value: parkingLot.bookedCar },
                            { label: 'Empty Car', value: parkingLot.emptyCar },
                            { label: 'Parked Motorbike', value: parkingLot.parkedMotorbike },
                            { label: 'Booked Motorbike', value: parkingLot.bookedMotorbike },
                            { label: 'Empty Motorbike', value: parkingLot.emptyMotorbike },
                            { label: 'Parked Bike', value: parkingLot.parkedBike },
                            { label: 'Booked Bike', value: parkingLot.bookedBike },
                            { label: 'Empty Bike', value: parkingLot.emptyBike}
                        ],
                    },
                ]}
                width={400}
                height={300}
                slotProps={{
                    legend: { hidden: true },
                }}
            />
        </>
    );
}