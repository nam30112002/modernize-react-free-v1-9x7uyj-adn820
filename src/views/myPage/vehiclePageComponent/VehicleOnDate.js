import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import VehicleChart from '../homePageComponent/VehicleChart';
import { now } from 'lodash';

function VehicleOnDate(props) {

  const [time, setTime] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [data, setData] = useState([]);

  const changeDay = (e) => {
    setDay(e.target.value);
  }
  const changeMonth = (e) => {
    setMonth(e.target.value);
  }
  const changeYear = (e) => {
    setYear(e.target.value);
  }

  const handleDate = async () => {
    //2024-01-07T04:20:00Z
    const dateString = `${year}-${month}-${day}T23:59:59Z`;
    setTime(`${year}-${month}-${day}`);
    const date = new Date(dateString);
    const utcTimestamp = date.getTime()/1000;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const range = 24;
    //http://127.0.0.1:8001/vehicles?final_time=123456789&hour_range=24
    await fetch('http://127.0.0.1:8001/vehicles?final_time=' + utcTimestamp + '&hour_range=' + range, requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.reverse());
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
      const todo = async () => {
        const today = new Date();
        const todayString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        setTime(todayString);
        setDay(today.getDate());
        setMonth(today.getMonth() + 1);
        setYear(today.getFullYear());
        console.log(todayString);
        const dateString = `${todayString}T23:59:59Z`;
        const date = new Date(todayString);
        const utcTimestamp = date.getTime()/1000;
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        const range = 24;
        //http://127.0.0.1:8001/vehicles?final_time=123456789&hour_range=24
        await fetch('http://127.0.0.1:8001/vehicles?final_time=' + utcTimestamp + '&hour_range=' + range, requestOptions)
          .then(response => response.json())
          .then(result => {
            setData(result.reverse());
          })
          .catch(error => console.log('error', error));
      }
      todo();
  }, [])


  return (
    <Box>
      <TextField id="outlined-basic" label="Day" variant="outlined" value={day} onChange={(e) => changeDay(e)}/>
      <TextField id="outlined-basic" label="Month" variant="outlined" value={month} onChange={(e) => changeMonth(e)}/>
      <TextField id="outlined-basic" label="Year" variant="outlined" value={year} onChange={(e) => changeYear(e)}/>
      <Button variant="contained" onClick={() => handleDate()}>Check</Button>
      <VehicleChart data={data} time={time} />
    </Box>
  );
}

export default VehicleOnDate;