import { LayoutDashboard, UserCheck} from "lucide-react";
import {
    SettingOutlined
  } from '@ant-design/icons';
import { MdCategory, MdContactPhone, MdOutlinePostAdd, MdSubscriptions } from "react-icons/md";
import { SiBlogger } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";
export const menuItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/admins", label: "Admins", icon: GrUserAdmin },
  { path: "/candidates", label: "Candidates", icon: PiStudentBold },
  { path: "/employers", label: "Employers", icon: UserCheck },
  { 
    path: "",
    label: "Subscriptions",
    icon: MdSubscriptions,
    hasArrow: true,
    children: [
      { path: "/subscribers", label: "Subscribers" },
      { path: "/packages", label: "Packages" },
    ],
  },
  { path: "/category", label: "Category", icon: MdCategory },
  { path: "/job-posts", label: "Job Posts", icon: MdOutlinePostAdd },
  { path: "/contacts", label: "Contact", icon: MdContactPhone },
  { path: "/blogs", label: "Blog", icon: SiBlogger },
  {
    icon: SettingOutlined,
    label: "Settings",
    hasArrow: true,
    children: [
      { path: "/profile", label: "Profile" },
      { path: "/change-password", label: "Change Password" },
      { path: "/about-us", label: "About Us" },
      { path: "/terms-condition", label: "Terms & Conditions" },
      { path: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

