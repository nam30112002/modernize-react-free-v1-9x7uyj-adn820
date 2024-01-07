import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import CheckAdmin from './userPageComponent/CheckAdmin';
import TableListUser from './userPageComponent/TableListUser';


const UserPage = () => {


  return (
    <PageContainer title="User Page" description="this is user page">
      <DashboardCard>
        <CheckAdmin />
        <TableListUser />
      </DashboardCard>
    </PageContainer>
  );
};

export default UserPage;