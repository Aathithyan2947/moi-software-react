import { BiSolidUserDetail } from 'react-icons/bi';
import { FaUserEdit } from 'react-icons/fa';
import { ImBin2 } from 'react-icons/im';
import { IoMdPersonAdd } from 'react-icons/io';
import { IoPieChartSharp } from 'react-icons/io5';
import { MdOutlineFestival } from 'react-icons/md';
import { RiBillLine } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
import type { SidebarItems } from '../types';

export const SIDEBAR_MENU_LIST: SidebarItems[] = [
  {
    name: 'Funtions',
    link: '/',
    shortname: 'Funtions',
    icon: MdOutlineFestival,
    id: 1,
  },
  {
    name: 'Funtion Detail',
    link: '/function_detail',
    shortname: 'Detail',
    icon: BiSolidUserDetail,
    id: 2,
  },
  {
    name: 'Bill Design',
    link: '/bill_design',
    shortname: 'Bill',
    icon: RiBillLine,
    id: 3,
  },
  {
    name: 'Payers',
    link: '/payers',
    shortname: 'Payers',
    icon: IoMdPersonAdd,
    id: 4,
  },
  {
    name: 'Reports',
    link: '/reports',
    shortname: 'Reports',
    icon: TbReportAnalytics,
    id: 5,
  },
  {
    name: 'Charts',
    link: '/charts',
    shortname: 'Charts',
    icon: IoPieChartSharp,
    id: 6,
  },
  {
    name: 'Edit Logs',
    link: '/edit_logs',
    shortname: 'Logs',
    icon: FaUserEdit,
    id: 7,
  },
  {
    name: ' Bin',
    link: '/bin',
    shortname: 'Bin',
    icon: ImBin2,
    id: 8,
  },
];

export const FLOATING_SIDBAR_POSITIONS = [
  { topPosition: '54px', topPosition2: '56px' },
  { topPosition: '102px', topPosition2: '112px' },
  { topPosition: '150px', topPosition2: '168px' },
  { topPosition: '198px', topPosition2: '224px' },
  { topPosition: '246px', topPosition2: '280px' },
  { topPosition: '294px', topPosition2: '336px' },
  { topPosition: '342px', topPosition2: '392px' },
  { topPosition: '390px', topPosition2: '448px' },
  { topPosition: '438px', topPosition2: '504px' },
  { topPosition: '486px', topPosition2: '560px' },
];
