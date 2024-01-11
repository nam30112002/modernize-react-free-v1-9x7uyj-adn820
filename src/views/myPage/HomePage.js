import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import UserChart from "./homePageComponent/UserChart";
import VehicleOnDate from './vehiclePageComponent/VehicleOnDate';
import TotalParkingLotChart from './homePageComponent/TotalParkingLotChart';



const HomePage = () => {
    return (
        <PageContainer title="Sample Page" description="this is Sample page">
            <DashboardCard title="User Charts">
                <UserChart />
            </DashboardCard>
            <DashboardCard title="Vehicle Chart Daily">
                <VehicleOnDate />
            </DashboardCard>
            <DashboardCard title="Parking Chart">
                <TotalParkingLotChart />
            </DashboardCard>
        </PageContainer>
    );
};

export default HomePage;