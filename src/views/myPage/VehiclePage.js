import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import VehicleParents from './vehiclePageComponent/VehicleParents';

const VehiclePage = () => {
  
  return (
    <PageContainer title="Vehicle Page" description="this is Vehicle page">

      <DashboardCard title="My Vehicle Page">
        <VehicleParents></VehicleParents>
      </DashboardCard>
    </PageContainer>
  );
};

export default VehiclePage;