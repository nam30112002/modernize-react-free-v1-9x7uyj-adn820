import React, { useState, useEffect, Fragment } from "react";
import CreateParkingLots from "./CreateParkingLots";
import ParkingLotsTable from "./ParkingLotsTable";
import Cookies from 'js-cookie';

export default function ParkingLotsParent() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [numberOfTotalPage, setNumberOfTotalPage] = useState(0);
    const [rows, setRows] = useState([]);
    const [parkingLotId, setParkingLotId] = useState(0);
    
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

    const getParkingSpace = (pl_id) => {
        let accessToken = Cookies.get('accessToken');
        const myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + accessToken);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        if(Cookies.get('role') === 'admin'){
            //fetch(`${process.env.REACT_APP_BACKEND_URI}/admin/parking_lots/?page=${page + 1}&size=${rowsPerPage}`, requestOptions)
            fetch(`${process.env.REACT_APP_BACKEND_URI}/parking_spaces/?show_deleted=false&show_free_only=false&page=${page + 1}&size=${rowsPerPage}`, requestOptions)
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
        getParkingSpace(parkingLotId);
    }, [page, rowsPerPage]);

    const deleteParkingSpace = (id) => {
        let accessToken = Cookies.get('accessToken');
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + accessToken);
        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_BACKEND_URI}/parking-lots/` + id, requestOptions)
            .then((response) => {
                if (response.status !== 204) {
                    console.log(`Looks like there was a problem. Status Code: ${response.status}`);
                }
                getParkingLots();
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <CreateParkingLots onAddParkingLot={getParkingLots} initLongitude={longitude} initLatitude={latitude}/>
            <ParkingLotsTable
                page={page} 
                rowsPerPage={rowsPerPage}
                rows={rows}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                moveFirstPage={moveFirstPage}
                moveLastPage={moveLastPage}
                moveBeforePage={moveBeforePage}
                moveNextPage={moveNextPage}
                deleteParkingLots={deleteParkingLots}
                onUpdateParkingLot={getParkingLots}
            ></ParkingLotsTable>
        </>
    )
}