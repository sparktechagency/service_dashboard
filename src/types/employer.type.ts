export type StatusType = 'Active' | 'Reported' | 'Block';

export interface IEmployer {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  serialNo: string;
  companyName: string;
  category: string;
  location: string;
  status: StatusType;
  subscription_status: "Active" | "None" | "Expired";
}