import type { IconType } from 'react-icons';

export type hoveredItemType = {
  name: string;
  shortname: string;
  link: string;
  icon: IconType;
  id: number;
  rank: number;
};

export type SidebarProps = {
  hoveredItem: hoveredItemType | null;
  setHoveredItem: React.Dispatch<React.SetStateAction<hoveredItemType | null>>;
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FloatingSideBarPropsType = {
  sideBarOpen: boolean;
  hoveredItem: hoveredItemType;
  setHoveredItem: React.Dispatch<React.SetStateAction<hoveredItemType | null>> | null;
};

type ActionItem = {
  value: string;
  icon: React.ElementType;
};

export type ActionItemProps = {
  data: ActionItem[];
};

export type CustomButtonProps = {
  value: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

export type FunctionData = {
  [key: string]: string | number;
};

export type PageHeaderWithSearchProps = {
  header: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disableSearch?: boolean;
  disableButton?: boolean;
  link?: string;
  handleSubmit?: () => void;
};

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type SidebarItems = {
  name: string;
  shortname: string;
  link: string;
  icon: IconType;
  id: number;
};

export type ChipSelectorProps = {
  label: string;
  pageFetch: number;
  setPageFetch: (value: number) => void;
};

export interface Function {
  _id: string;
  function_name: string;
  function_owner_name: string;
  function_owner_city: string;
  function_owner_address: string;
  function_owner_phno: string;
  function_amt_spent: number;
  function_hero_name: string;
  function_heroine_name: string;
  function_held_place: string;
  function_held_city: string;
  function_start_date: string;
  function_start_time: string;
  function_end_date: string;
  function_end_time: string;
  function_total_days: number;
  function_bill_details: {
    owner_name: string;
    owner_occupation: string;
    wife_name: string;
    wife_occupation: string;
    function_place: string;
    function_city: string;
  };
  created_at: string;
  updated_at: string;
}

export type CreateFunctionInput = Omit<Function, '_id' | 'created_at' | 'updated_at'>;