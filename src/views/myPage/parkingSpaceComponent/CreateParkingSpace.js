import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Cookies from 'js-cookie';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function CreateParkingSpace({reset}) {
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [vehicleType, setVehicleType] = useState('car');
    const [id, setId] = useState(0);
    const [role, setRole] = useState('');

    const changeLongitude = (event) => {
        setLongitude(event.target.value);
    }

    const changeLatitude = (event) => {
        setLatitude(event.target.value);
    }

    const changeVehicleType = (event) => {
        setVehicleType(event.target.value);
    }
    const changeId = (event) => {
        setId(event.target.value);
    }

    const registerParkingSpace = () => {
        let accessToken = Cookies.get('accessToken');
        let data = JSON.stringify({
            "longitude": longitude,
            "latitude": latitude,
            "parking_lot_id": id,
            "vehicle_type": vehicleType
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

        fetch(`${process.env.REACT_APP_BACKEND_URI}/parking_spaces/`, requestOptions)
            .then((response) => {
                console.log('Response:', response);
                reset();
            });
    }
    useEffect(() => {
        let role = Cookies.get('role');
        setRole(role);
    }, []);

    return (
        <>
            {(role === 'admin') && <>
                <div>Enter parking space information you want to register</div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '20ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="longitude" label="Longitude" defaultValue={0} onChange={changeLongitude} />
                    <TextField id="latitude" label="Latitude" defaultValue={0} onChange={changeLatitude} />
                    <TextField id="latitude" label="Id" defaultValue={0} onChange={changeId} />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Loại xe</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={vehicleType}
                            label="Loại xe"
                            onChange={changeVehicleType}
                        >
                            <MenuItem value={10}>car</MenuItem>
                            <MenuItem value={20}>truck</MenuItem>
                            <MenuItem value={30}>motorbike</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" onClick={registerParkingSpace}>
                        Register
                    </Button>
                </Box>
            </>
            }
        </>
    )
}
