import React, {useState} from "react";
import {Box, Container, styled} from '@mui/material';
import {Outlet} from 'react-router-dom';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import CheckAdmin from "src/views/myPage/userPageComponent/CheckAdmin";
import Notification from "../../socket/Notification";
import KafkaConsumerComponent from "../../kafka/KafkaConsumerComponent";

const MainWrapper = styled('div')(() => ({
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
}));

const PageWrapper = styled('div')(() => ({
    display: 'flex',
    flexGrow: 1,
    paddingBottom: '60px',
    flexDirection: 'column',
    zIndex: 1,
    backgroundColor: 'transparent',
}));

const FullLayout = () => {

    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

    return (
        <MainWrapper
            className='mainwrapper'
        >
            <CheckAdmin/>
            {/* ------------------------------------------- */}
            {/* Sidebar */}
            {/* ------------------------------------------- */}
            <Sidebar isSidebarOpen={isSidebarOpen}
                     isMobileSidebarOpen={isMobileSidebarOpen}
                     onSidebarClose={() => setMobileSidebarOpen(false)}/>
            {/* ------------------------------------------- */}
            {/* Main Wrapper */}
            {/* ------------------------------------------- */}
            <PageWrapper
                className="page-wrapper"
            >
                {/* ------------------------------------------- */}
                {/* Header */}
                {/* ------------------------------------------- */}
                <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                        toggleMobileSidebar={() => setMobileSidebarOpen(true)}/>
                {/* ------------------------------------------- */}
                {/* PageContent */}
                {/* ------------------------------------------- */}
                <Container sx={{
                    paddingTop: "20px",
                    maxWidth: '1200px',
                }}
                >
                    {/* ------------------------------------------- */}
                    {/* Page Route */}
                    {/* ------------------------------------------- */}
                    <Box sx={{minHeight: 'calc(100vh - 170px)'}}>
                        <Outlet/>
                    </Box>
                    {/*<KafkaConsumerComponent/>*/}
                    {/*<Notification/>*/}
                    {/* ------------------------------------------- */}
                    {/* Notification */}
                    {/* ------------------------------------------- */}
                    {/* End Page */}
                    {/* ------------------------------------------- */}
                </Container>
            </PageWrapper>
        </MainWrapper>
    );
};

export default FullLayout;
