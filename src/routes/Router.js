import React, {lazy} from 'react';
import {Navigate} from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';


/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const UserPage = Loadable(lazy(() => import('../views/myPage/UserPage')));
const ProfilePage = Loadable(lazy(() => import('../views/myPage/ProfilePage')));
const VehiclePage = Loadable(lazy(() => import('../views/myPage/VehiclePage')));
const ParkingLots = Loadable(lazy(() => import('../views/myPage/ParkingLots')));
const SamplePage1 = Loadable(lazy(() => import('../views/sample-page/SamplePage1')));
const UserChart = Loadable(lazy(() => import('../views/myPage/homePageComponent/UserChart')));
const VehicleChart = Loadable(lazy(() => import('../views/myPage/homePageComponent/VehicleChart')));
const ParkingLotChart = Loadable(lazy(() => import('../views/myPage/homePageComponent/ParkingLotChart')));
const Notification = Loadable(lazy(() => import('../socket/Notification')));
const HomePage = Loadable(lazy(() => import('../views/myPage/HomePage')));
const ParkingSpaceParent = Loadable(lazy(() => import('../views/myPage/parkingSpaceComponent/ParkingSpaceParent')));

const Router = [
    {
        path: '/',
        element: <FullLayout/>,
        children: [
            {path: '/', element: <Navigate to="/auth/login"/>},
            {path: '/dashboard', exact: true, element: <Dashboard/>},
            {path: '/sample-page', exact: true, element: <SamplePage/>},
            {path: '/icons', exact: true, element: <Icons/>},
            {path: '/userPage', exact: true, element: <UserPage/>},
            {path: '/myProfile', exact: true, element: <ProfilePage/>},
            {path: '/vehiclePage', exact: true, element: <VehiclePage/>},
            {path: '/parkingLots', exact: true, element: <ParkingLots/>},
            {path: '/ui/typography', exact: true, element: <TypographyPage/>},
            {path: '/ui/shadow', exact: true, element: <Shadow/>},
            {path: '/test', exact: true, element: <SamplePage1/>},
            {path: '/userChart', exact: true, element: <UserChart/>},
            {path: '/vehicleChart', exact: true, element: <VehicleChart/>},
            {path: '/parkingLotChart', exact: true, element: <ParkingLotChart/>},
            {path: '/notification', exact: true, element: <Notification/>},
            {path: '/homePage', exact: true, element: <HomePage/>},
            {path: '/parkingSpace', exact: true, element: <ParkingSpaceParent/>},
            {path: '*', element: <Navigate to="/auth/404"/>},
        ],
    },
    {
        path: '/auth',
        element: <BlankLayout/>,
        children: [
            {path: '404', element: <Error/>},
            {path: '/auth/register', element: <Register/>},
            {path: '/auth/login', element: <Login/>},
            {path: '*', element: <Navigate to="/auth/404"/>},
        ],
    },
];

export default Router;
