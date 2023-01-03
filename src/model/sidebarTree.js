import CardsIcon from '@/assets/icons/Sidebar/cards.svg';
import ComponentsIcon from '@/assets/icons/Sidebar/components.svg';
import DashboardsIcon from '@/assets/icons/Sidebar/dashboards.svg';
import InvoiceIcon from '@/assets/icons/Sidebar/invoice.svg';
import PagesIcon from '@/assets/icons/Sidebar/pages.svg';
import UserIcon from '@/assets/icons/Sidebar/user.svg';
import { Routes } from '@/router';

export default [
  {
    title: '',
    group: [
      {
        title: 'Dashboards',
        icon: DashboardsIcon,
        list: [
          { title: 'CRM', route: { name: Routes.CRM } },
          { title: 'Analytics', route: {} },
          { title: 'eCommerce', route: {} },
        ],
      },
    ],
  },
  {
    title: 'apps and pages',
    group: [
      {
        title: 'Pages',
        icon: PagesIcon,
        list: [
          { title: 'Preview', route: { name: Routes.PREVIEW } },
          { title: 'Knowledge Base', route: {} },
          { title: 'Account Setting', route: {} },
          { title: 'Pricing', route: {} },
          { title: 'FAQ', route: {} },
        ],
      },
      {
        title: 'Invoice',
        icon: InvoiceIcon,
        list: [
          { title: 'List', route: {} },
          { title: 'Edit', route: {} },
          { title: 'Add', route: {} },
        ],
      },
      {
        title: 'User',
        icon: UserIcon,
        list: [
          { title: 'User list', route: {} },
          { title: 'User view', route: {} },
          { title: 'Email', route: {} },
        ],
      },
    ],
  },
  {
    title: 'user interface',
    group: [
      {
        title: 'Cards',
        icon: CardsIcon,
        list: [
          { title: 'Basic', route: {} },
          { title: 'Statistics', route: {} },
          { title: 'Advance', route: {} },
          { title: 'Actions', route: {} },
          { title: 'Chart', route: {} },
        ],
      },
      {
        title: 'Components',
        icon: ComponentsIcon,
        list: [
          { title: 'Alert', route: {} },
          { title: 'Avatar', route: {} },
          { title: 'Badge', route: {} },
          { title: 'Button', route: {} },
          { title: 'Chip', route: {} },
          { title: 'Dialog', route: {} },
          { title: 'Expansion Panel  ', route: {} },
          { title: 'List', route: {} },
          { title: 'Menu', route: {} },
          { title: 'Pagination', route: {} },
          { title: 'Snackbar', route: {} },
          { title: 'Stepper', route: {} },
          { title: 'Tabs', route: {} },
          { title: 'Timeline', route: {} },
          { title: 'Tooltip', route: {} },
          { title: 'Treeview', route: {} },
        ],
      },
    ],
  },
];
