import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import TableHead from '@mui/material/TableHead';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildIcon from '@mui/icons-material/Build';
import UpdateParkingLotsForm from './UpdateParkingLotsForm';
import Cookies from "js-cookie";
import InfoIcon from '@mui/icons-material/Info';
import ParkingLotDetail from "./ParkingLotDetail";

export default function ParkingLotsTable({
                                             page,
                                             rowsPerPage,
                                             rows,
                                             handleChangeRowsPerPage,
                                             moveFirstPage,
                                             moveLastPage,
                                             moveBeforePage,
                                             moveNextPage,
                                             deleteParkingLots,
                                             onUpdateParkingLot
                                         }) {
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [updateParkingLot, setUpdateParkingLot] = useState(undefined);
    const [targetParkingLot, setTargetParkingLot] = useState(undefined);
    const [detailParkingLot, setDetailParkingLot] = useState(undefined);
    const [role, setRole] = useState('');

    const emptyRows = page > 0 ? Math.max(0, rowsPerPage - rows.length) : 0;


    const closeForm = () => {
        setIsOpenForm(false);
        setUpdateParkingLot(undefined);
    }

    const openForm = (row) => {
        setUpdateParkingLot(row);
        setIsOpenForm(true);
    }

    const closeDetail = () => {
        setIsOpenDetail(false);
        setTargetParkingLot(undefined);
    }

    const openDetail = async (row) => {
        setTargetParkingLot(row);
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        await fetch('http://127.0.0.1:8001/parking_lots?parking_lot_id=' + row.id, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setDetailParkingLot(result);
            })
            .catch(error => console.log('error', error));
        setIsOpenDetail(true);
    }

    useEffect(() => {
        const role = Cookies.get('role');
        setRole(role);
    }, []);

    return (
        <>
            {(role === 'user') &&
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 500}} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <TableCell>STT</TableCell>
                                <TableCell align="center">Tên bãi đỗ xe</TableCell>
                                <TableCell align="center">Longitude</TableCell>
                                <TableCell align="center">Latitude</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rows).map((row, index) => (
                                <TableRow key={row.id} style={{height: 80}}>
                                    <TableCell component="th" scope="row">
                                        {page * rowsPerPage + index + 1}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.longitude}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.latitude}
                                    </TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{height: 80 * emptyRows}}>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow style={{height: 80}}>
                                <TableCell>Rows Per Page</TableCell>
                                <TableCell>
                                    <div>
                                        <FormControl fullWidth>
                                            <InputLabel></InputLabel>
                                            <Select
                                                sx={{width: 100}}
                                                value={rowsPerPage}
                                                onChange={handleChangeRowsPerPage}
                                            >
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={10}>10</MenuItem>
                                                <MenuItem value={20}>20</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={moveFirstPage}>
                                        <SkipPreviousIcon/>
                                    </IconButton>
                                    <IconButton onClick={moveBeforePage}>
                                        <NavigateBeforeIcon/>
                                    </IconButton>
                                    <IconButton onClick={moveNextPage}>
                                        <NavigateNextIcon/>
                                    </IconButton>
                                    <IconButton onClick={moveLastPage}>
                                        <SkipNextIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            }
            {(role === 'admin') &&
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 500}} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <TableCell>STT</TableCell>
                                <TableCell align="center">Tên bãi đỗ xe</TableCell>
                                <TableCell align="center">Longitude</TableCell>
                                <TableCell align="center">Latitude</TableCell>
                                <TableCell align="center">Thời điểm tạo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rows).map((row, index) => (
                                <TableRow key={row.id} style={{height: 80}}>
                                    <TableCell component="th" scope="row">
                                        {page * rowsPerPage + index + 1}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.longitude}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.latitude}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.created_at}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => deleteParkingLots(row.id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => openForm(row)}>
                                            <BuildIcon/>
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => openDetail(row)}>
                                            <InfoIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{height: 80 * emptyRows}}>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow style={{height: 80}}>
                                <TableCell>Rows Per Page</TableCell>
                                <TableCell>
                                    <div>
                                        <FormControl fullWidth>
                                            <InputLabel></InputLabel>
                                            <Select
                                                sx={{width: 100}}
                                                value={rowsPerPage}
                                                onChange={handleChangeRowsPerPage}
                                            >
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={10}>10</MenuItem>
                                                <MenuItem value={20}>20</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={moveFirstPage}>
                                        <SkipPreviousIcon/>
                                    </IconButton>
                                    <IconButton onClick={moveBeforePage}>
                                        <NavigateBeforeIcon/>
                                    </IconButton>
                                    <IconButton onClick={moveNextPage}>
                                        <NavigateNextIcon/>
                                    </IconButton>
                                    <IconButton onClick={moveLastPage}>
                                        <SkipNextIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                    <UpdateParkingLotsForm open={isOpenForm} close={closeForm} parkingLot={updateParkingLot} onUpdateParkingLot={onUpdateParkingLot}/>
                    <ParkingLotDetail open={isOpenDetail} close={closeDetail} parkingLot={targetParkingLot} detail={detailParkingLot}/>
                </TableContainer>
            }
        </>
    );
}
/*
* {
      "name": "parking-lot1",
      "longitude": 0,
      "latitude": 0,
      "id": 1
    }*/

/*
* {
      "name": "parking-lot1",
      "longitude": 0,
      "latitude": 0,
      "id": 1,
      "is_active": true,
      "created_at": "2024-01-04T10:26:32.979241",
      "updated_at": null,
      "deleted_at": null
    },
* */