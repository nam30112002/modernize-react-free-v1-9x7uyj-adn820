import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import ParkingLotsParent from "./parkingLotsComponent/ParkingLotsParent";


const ParkingLots = () => {
  return (
    <PageContainer title="Sample Page">
      <DashboardCard title="Parking Lot">
          <ParkingLotsParent/>
      </DashboardCard>
    </PageContainer>
  );
};

export default ParkingLots;

