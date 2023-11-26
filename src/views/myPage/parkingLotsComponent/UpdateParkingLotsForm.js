import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Cookies from 'js-cookie';
import {useSelector} from "react-redux";
import {selectIdPL} from "../../../store/UpdatePLSlice";

export default function UpdateParkingLotsForm(props) {
    const [timeLoad, setTimeLoad] = useState(1);
    const [updateParkingLot, setUpdateParkingLot] = useState();
    
    useEffect(() => {
        
    },[])

    return (
        <Dialog open={props.open}>
            <DialogTitle>Thông tin bãi đỗ xe </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter the information you want to edit
                </DialogContentText>
                <TextField autoFocus margin="dense" id="name" label="Name" type="email" fullWidth variant="standard" defaultValue={props.dataUpdate ? props.dataUpdate.name : ""}/>
                <TextField margin="dense" id="name" label="Longitude" type="email" fullWidth variant="standard"  />
                <TextField margin="dense" id="name" label="Latitude" type="email" fullWidth variant="standard"  />
                <TextField margin="dense" id="name" label="Slot trống ô tô" type="number" fullWidth variant="standard" />
                <TextField margin="dense" id="name" label="Slot trống xe máy" type="number" fullWidth variant="standard"  />
                <TextField margin="dense" id="name" label="Slot trống xe đạp" type="number" fullWidth variant="standard"  />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.update}>Save</Button>
                <Button onClick={props.close}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

/*
<TextField autoFocus margin="dense" id="name" label="Name" type="email" fullWidth variant="standard" defaultValue={props.data.name} />
    <TextField margin="dense" id="name" label="Longitude" type="email" fullWidth variant="standard" defaultValue={props.data.longitude} />
    <TextField margin="dense" id="name" label="Latitude" type="email" fullWidth variant="standard" defaultValue={props.data.latitude} />
    <TextField margin="dense" id="name" label="Slot trống ô tô" type="number" fullWidth variant="standard" defaultValue={props.data.available_spaces.car} />
    <TextField margin="dense" id="name" label="Slot trống xe máy" type="number" fullWidth variant="standard" defaultValue={props.data.available_spaces.motorbike} />
    <TextField margin="dense" id="name" label="Slot trống xe đạp" type="number" fullWidth variant="standard" defaultValue={props.data.available_spaces.bicycle} />
*/