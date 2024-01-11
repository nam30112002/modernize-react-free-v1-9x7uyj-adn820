import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Cookies from 'js-cookie';
import {sendNotificationToAdmin} from "../../../kafka/SendNotificationToAdmin";

export default function CreateVehicle({ onAddVehicle}) {
    const [licensePlate, setLicensePlate] = useState();
    const [vehicleType, setVehicleType] = useState(0);

    const changeLicensePlate = (event) => {
        setLicensePlate(event.target.value);
    }

    const changeVehicleType = (event) => {
        setVehicleType(event.target.value);
    }

    const registerVehicle = async () => {
        let accessToken = Cookies.get('accessToken');
        let data = JSON.stringify({
            "license_plate": licensePlate,
            "vehicle_type": vehicleType
          });
        console.log(data);
        const myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + accessToken);
        myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        await fetch(`${process.env.REACT_APP_BACKEND_URI}/vehicles/`, requestOptions)
            .then((response) => {
                console.log('Response:', response);
                onAddVehicle();
            });
        //await sendNotificationToAdmin(`New vehicle with license plate ${licensePlate} has been registered`);
    }

    return (
        <>
            <div>Enter vehicle information you want to register</div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '20ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="name" label="Biển số xe" onChange={changeLicensePlate}/>
                <TextField id="longitude" label="Loại xe" onChange={changeVehicleType}/>
                <Button variant="contained" onClick={registerVehicle}>
                    Register
                </Button>
            </Box>
        </>
    )
}

