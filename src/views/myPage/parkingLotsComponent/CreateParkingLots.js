import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Cookies from 'js-cookie';

export default function CreateParkingLots() {
    const [name, setName] = useState();
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [carSlot, setCarSlot] = useState();
    const [motorbikeSlot, setMotorBikeSlot] = useState();
    const [bicycleSlot, setBicyleSlot] = useState();

    const changeName = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const changeLongitude = (event) => {
        setLongitude(event.target.value);
    }

    const changeLatitude = (event) => {
        setLatitude(event.target.value);
    }

    const changeCarSlot = (event) => {
        setCarSlot(event.target.value);
    }

    const changeMotorbikeSlot = (event) => {
        setMotorBikeSlot(event.target.value);
    }

    const changeBicycleSlot = (event) => {
        setBicyleSlot(event.target.value);
    }

    const registerParkingLot = () => {
        let accessToken = Cookies.get('accessToken');
        let data = JSON.stringify({
            "name": name,
            "longitude": longitude,
            "latitude": latitude,
            "available_spaces": {
              "car": carSlot,
              "motorbike": motorbikeSlot,
              "bicycle": bicycleSlot
            }
          });
        console.log(data);
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + accessToken);
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_BACKEND_URI}/parking-lots/`, requestOptions)
            .then((response) => {
                console.log('Response:', response);
            });
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
                <TextField id="standard-basic" label="Tên bãi đỗ xe" variant="standard" onChange={changeName}/>
                <TextField id="standard-basic" label="Longitude" variant="standard" onChange={changeLongitude}/>
                <TextField id="standard-basic" label="Latitude" variant="standard" onChange={changeLatitude}/>
                <TextField id="standard-basic" label="Slot trống ô tô" variant="standard" onChange={changeCarSlot}/>
                <TextField id="standard-basic" label="Slot trống xe máy" variant="standard" onChange={changeMotorbikeSlot}/>
                <TextField id="standard-basic" label="Slot trống xe đạp" variant="standard" onChange={changeBicycleSlot}/>
                <Button variant="contained" onClick={registerParkingLot}>
                    Register
                </Button>
            </Box>
        </>
    )
}

