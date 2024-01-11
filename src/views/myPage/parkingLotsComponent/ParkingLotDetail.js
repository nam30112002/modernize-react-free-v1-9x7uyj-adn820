import React, {useEffect, useState} from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {Typography} from "@mui/material";
import ParkingLotChart from "../homePageComponent/ParkingLotChart";

function ParkingLotDetail({
                              open,
                              close,
                              parkingLot,
                              detail
                          }) {
    useEffect(() => {
        console.log(parkingLot);

    }, []);

    return (
        <Dialog open={open} maxWidth={800}>
            <DialogTitle>Chi tiết bãi đỗ xe </DialogTitle>
            <DialogContent>
                <Typography variant="body1" gutterBottom>Tên bãi đỗ xe: {parkingLot?.name} </Typography>
                <Typography variant="body1" gutterBottom>Longitude: {parkingLot?.longitude} </Typography>
                <Typography variant="body1" gutterBottom>Latitude: {parkingLot?.latitude} </Typography>
                <ParkingLotChart detailParkingLot={detail}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ParkingLotDetail;