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
  setHoveredItem: React.Dispatch<
    React.SetStateAction<hoveredItemType | null>
  > | null;
};

type ActionItem = {
  value: string;
  icon: React.ElementType; // so we can render it as <Icon />
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
  [key: string]: string | number; // index signature added
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
