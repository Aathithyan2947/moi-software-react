type ExtensionDataItem = {
  title: string;
  link: string;
};

type ExtensionSection = {
  sub_heading: string;
  data: ExtensionDataItem[];
};

type SidebarFunctionsSection = {
  id: 1;
  root_heading: string;
  extension_data: ExtensionSection[];
};

type SidebarBinSection = {
  id: 8;
  root_heading: string;
  extension_data: ExtensionSection[]; // Change from 'extensive_data' to 'extension_data'
};

export type SidebarConfig = SidebarFunctionsSection | SidebarBinSection;

export const SIDEBAR_CONFIG: Record<number, SidebarConfig> = {
  1: {
    root_heading: 'Functions',
    id: 1,
    extension_data: [
      {
        sub_heading: 'Quick Links',
        data: [{ title: 'Create Function', link: '/create_function' }],
      },
    ],
  },
  8: {
    root_heading: 'Bin',
    id: 8,
    extension_data: [
      {
        sub_heading: 'Quick Links', // Add the 'sub_heading' and 'data' structure
        data: [
          { title: 'Payers Bin', link: '/bin/payers_bin' },
          { title: 'Functions Bin', link: '/bin/functions_bin' },
        ],
      },
    ],
  },
};
