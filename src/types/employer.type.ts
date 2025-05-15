export type StatusType = 'Active' | 'Reported' | 'Block';

export interface IEmployer {
  id: string;
  serialNo: string;
  companyName: string;
  category: string;
  location: string;
  status: StatusType;
}