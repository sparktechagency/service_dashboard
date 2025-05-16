import { BookA, LayoutDashboard, UserCheck} from "lucide-react";
import {
    SettingOutlined
  } from '@ant-design/icons';
export const menuItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/employers", label: "Employers", icon: UserCheck },
  { path: "/candidates", label: "Candidates", icon: BookA },
  { 
    path: "",
    label: "Subscriptions",
    icon: BookA,
    hasArrow: true,
    children: [
      { path: "/subscribers", label: "Subscribers" },
      { path: "/packages", label: "Packages" },
    ],
  },
  { path: "/category", label: "Category", icon: BookA },
  { path: "/job-posts", label: "Job Posts", icon: BookA },
  { path: "/contacts", label: "Contact", icon: BookA },
  { path: "/blogs", label: "Blog", icon: BookA },
  {
    icon: SettingOutlined,
    label: "Settings",
    hasArrow: true,
    children: [
      // { path: "/profile", label: "Profile" },
      { path: "/about-us", label: "About Us" },
      { path: "/terms-condition", label: "Terms & Conditions" },
      { path: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

  //  <SidebarLink icon={<LayoutDashboard size={18} />} href="/" label="Dashboard" active />
  //         <SidebarLink icon={<UserCheck size={18} />} href="/employers" label="Employers" />
  //         <SidebarLink icon={<BookA size={18} />} href="/candidates" label="Candidates" />
  //         <SidebarLink icon={<ChartBarStacked size={18} />} href="/category" label="Category" />
  //         <SidebarLink icon={<Mail size={18} />} href="/contacts" label="Contact" />
  //         <SidebarLink icon={<Rss size={18} />} href="/blogs" label="Blog" />
  //         <SidebarLink icon={<Users size={18} />} href="#" label="Team" />