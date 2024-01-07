import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Home Page',
    icon: IconLayoutDashboard,
    href: '/homePage',
  },
  {
    id: uniqueId(),
    title: 'User Page',
    icon: IconLayoutDashboard,
    href: '/userPage',
  },
  {
    id: uniqueId(),
    title: 'Vehicle',
    icon: IconLayoutDashboard,
    href: '/vehiclePage',
  },
  {
    id: uniqueId(),
    title: 'Parking Lots',
    icon: IconLayoutDashboard,
    href: '/parkingLots',
  },
  {
    id: uniqueId(),
    title: 'My Profile',
    icon: IconLayoutDashboard,
    href: '/myProfile',
  },

  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/auth/register',
  }
];

export default Menuitems;
