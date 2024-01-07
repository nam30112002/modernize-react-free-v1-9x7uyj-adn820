import React, { useState, useEffect, Fragment } from "react";
import CreateVehicle from "./CreateVehicle";
import VehicleTable from "./VehicleTable";
import Cookies from 'js-cookie';
import VehicleOnDate from './VehicleOnDate';

export default function VehicleParents() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [numberOfTotalPage, setNumberOfTotalPage] = useState(0);
    const [rows, setRows] = useState([]);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    const moveFirstPage = () => {
        setPage(0);
    }

    const moveLastPage = () => {
        setPage(numberOfTotalPage - 1);
    }

    const moveBeforePage = () => {
        setPage(Math.max(page - 1, 0));
    }

    const moveNextPage = () => {
        let x = Math.min(page + 1, numberOfTotalPage - 1);
        setPage(x);
    }

    const getVehicles = () => {
        let accessToken = Cookies.get('accessToken');
        const myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + accessToken);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const role = Cookies.get('role');

        /*
        * {
            "license_plate": "62YDYESR",
            "vehicle_type": "car",
            "id": 1,
            "created_at": "2024-01-04T10:44:11.525389",
            "updated_at": null,
            "is_tracked": false,
            "owner": {
                "id": 3,
                "username": "user2",
                "is_active": true
            }
        }*/

        if(role === 'admin') {
            fetch(`${process.env.REACT_APP_BACKEND_URI}/admin/vehicles/?page=${page + 1}&size=${rowsPerPage}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    try {
                        console.log(result);
                        setRows(result.items);
                        setNumberOfTotalPage(result.pages);
                    } catch (error) {
                        console.error('Error parsing JSON:', error);
                    }
                })
                .catch(error => console.log('error', error));
        }
        else{
            fetch(`${process.env.REACT_APP_BACKEND_URI}/vehicles/?page=${page + 1}&size=${rowsPerPage}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    try {
                        console.log(result);
                        setRows(result.items);
                        setNumberOfTotalPage(result.pages);
                    } catch (error) {
                        console.error('Error parsing JSON:', error);
                    }
                })
                .catch(error => console.log('error', error));
        }
    }

    useEffect(() => {
        getVehicles();
    }, [page, rowsPerPage]);

    const deleteVehicles = (id) => {
        let accessToken = Cookies.get('accessToken');
        const myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + accessToken);
        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_BACKEND_URI}/vehicles/` + id, requestOptions)
            .then((response) => {
                if (response.status !== 204) {
                    console.log(`Looks like there was a problem. Status Code: ${response.status}`);
                }
                getVehicles();
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <CreateVehicle onAddVehicle={getVehicles}/>
            <VehicleOnDate/>
            <VehicleTable
                page={page} 
                rowsPerPage={rowsPerPage}
                rows={rows}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                moveFirstPage={moveFirstPage}
                moveLastPage={moveLastPage}
                moveBeforePage={moveBeforePage}
                moveNextPage={moveNextPage}
                deleteVehicles={deleteVehicles}
                onUpdateVehicle={getVehicles}
            ></VehicleTable>
        </>
    )
}