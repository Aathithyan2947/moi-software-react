import {
  TbLayoutSidebarRightCollapse,
  TbLayoutSidebarRightExpand,
} from 'react-icons/tb';
import react from '../../../assets/react.svg';

import { Link, useLocation } from 'react-router-dom';

import { SIDEBAR_MENU_LIST } from '../../../helpers/enum';
import { isSidebarItemActive } from '../../../helpers/pathMatcher';
import type { SidebarProps } from '../../../types';

function Sidebar({
  hoveredItem,
  setHoveredItem,
  sideBarOpen,
  setSideBarOpen,
}: SidebarProps) {
  const toggleSidebar = () => setSideBarOpen((prev) => !prev);
  const location = useLocation();
  const path = location.pathname;

  return (
    <article
      className={`${
        sideBarOpen ? 'w-56' : 'w-[60px] overflow-hidden'
      } pt-2 min-h-[100vh] bg-sidebarBlue text-sidebarText overflow-hidden fixed top-0 left-0 transition-all duration-300 shadow-lg`}
      onDoubleClick={toggleSidebar}
    >
      <div className='flex items-center h-12'>
        {sideBarOpen ? (
          <div className='flex gap-4'>
            <button onClick={toggleSidebar} className='text-2xl pl-4 px-2'>
              <TbLayoutSidebarRightExpand />
            </button>
            <div className='-ml-2'>
              <h1 className='text-bold text-xl text-white'>
                Visai Innovations
              </h1>
            </div>
          </div>
        ) : (
          <>
            <div className='-ml-2 hidden'>
              <img
                src={react}
                width={50}
                height={50}
                alt={'Main Logo Favicon'}
                className='w-[50px] h-[50px]'
              />
            </div>

            <button onClick={toggleSidebar} className='text-2xl pl-4 px-2'>
              <TbLayoutSidebarRightCollapse />
            </button>
          </>
        )}
      </div>
      <div>
        {SIDEBAR_MENU_LIST.map((item, ind) => {
          const Icon = item.icon;
          const isActive = isSidebarItemActive(path, item.link);
          return (
            <div
              className={`${
                sideBarOpen ? '' : 'mb-2'
              } w-full font-normal hover:font-medium`}
              key={item?.id}
              onMouseEnter={() => setHoveredItem({ ...item, rank: ind })}
              onMouseLeave={() => {
                if (setHoveredItem && item?.id !== 1 && item?.id !== 8) {
                  setHoveredItem(null);
                }
              }}
            >
              <Link to={item.link}>
                <button
                  className={`${
                    isActive
                      ? 'bg-opacity-50 text-white bg-darkBlue1 cursor-pointer font-medium'
                      : ''
                  } flex items-center h-12 min-w-fit w-full  text-sm hover:scale-105 transition-all duration-300 ${
                    hoveredItem?.id === item?.id
                      ? 'text-white bg-darkBlue1 font-medium'
                      : ''
                  }`}
                >
                  <p
                    className={`${isActive ? 'bg-darkBlue' : ''} h-full w-1`}
                  ></p>

                  <div
                    className={`${
                      sideBarOpen ? 'flex gap-3' : ''
                    } pt-1.5 w-full`}
                  >
                    <p
                      title={item.name}
                      className={`${
                        sideBarOpen ? 'text-xl' : 'text-[22px]'
                      } ml-4`}
                    >
                      {<Icon />}
                    </p>

                    <p
                      className={`${
                        sideBarOpen ? 'text-start' : 'text-[9px] text-center'
                      } transition-all w-full duration-200 truncate`}
                    >
                      {sideBarOpen ? item.name : item?.shortname ?? item?.name}
                    </p>
                  </div>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Sidebar;
