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
import Cookies from "js-cookie";

export default function ParkingSpaceTable({
    page,
    rowsPerPage,
    rows,
    handleChangeRowsPerPage,
    moveFirstPage,
    moveLastPage,
    moveBeforePage,
    moveNextPage,
    deleteParkingSpace
}) {
    const [role, setRole] = useState('');

    const emptyRows = page > 0 ? Math.max(0, rowsPerPage - rows.length) : 0;

    useEffect(() => {
        const role = Cookies.get('role');
        setRole(role);
    }, []);

    return (
        <>
            {(role === 'admin') &&
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 500}} aria-label="custom pagination table">
                        <TableHead>
                            <TableRow>
                                <TableCell>STT</TableCell>
                                <TableCell align="center">Longitude</TableCell>
                                <TableCell align="center">Latitude</TableCell>
                                <TableCell align="center">Loại xe</TableCell>
                                <TableCell align="center">Trạng thái</TableCell>
                                <TableCell align="center">Xe ở trong</TableCell>
                                <TableCell align="center">ID Bãi đỗ</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rows).map((row, index) => (
                                <TableRow key={row.id} style={{height: 80}}>
                                    <TableCell component="th" scope="row">
                                        {page * rowsPerPage + index + 1}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.longitude}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.latitude}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.vehicle_type}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.state}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.vehicle ? row.vehicle : ''}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.parking_lot_id}
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => deleteParkingSpace(row.id)}>
                                            <DeleteIcon/>
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
                </TableContainer>
            }
        </>
    );
}

/*{
      "longitude": 0,
      "latitude": 100,
      "parking_lot_id": 1,
      "vehicle_type": "car",
      "id": 1,
      "state": "free",
      "vehicle": null
} */
