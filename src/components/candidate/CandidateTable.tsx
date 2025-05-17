import React from 'react';
import { Table, ConfigProvider } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { Eye } from 'lucide-react';
import type { IEmployer } from '../../types/employer.type';
//import StatusBadge from '../ui/StatusBadge';
import ChangeStatusModal from '../modal/auth/ChangeStatusModal';

interface EmployerTableProps {
  data: IEmployer[];
}

const CandidateTable: React.FC<EmployerTableProps> = ({ data }) => {
  const columns: ColumnsType<IEmployer> = [
    {
      title: 'Serial No',
      dataIndex: 'serialNo',
      key: 'serialNo',
      width: '10%',
      //className: 'bg-amber-50',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '22.5%',
      //className: 'bg-amber-50',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '22.5%',
      //className: 'bg-amber-50',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      width: '20%',
      //className: 'bg-amber-50',
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      width: '15%',
      //className: 'bg-amber-50',
      //render: (status) => <StatusBadge status={status} />,
      render: (val, record) => {
            const statusStyles = {
              blocked: "bg-red-100 text-red-700 border border-red-300",
              active: "bg-green-100 text-green-700 border border-green-300",
            };
            const bgColor =
              val ? statusStyles.active : statusStyles.blocked;
        
            return (
              <div className="flex items-center gap-2">
                <button
                  className={`${bgColor} w-20 cursor-default px-3 py-0.5 text-sm font-medium rounded-full`}
                >
                  {val ? "Active" : "Blocked"}
                </button>
                <ChangeStatusModal userId={record.id} isActive={val}/> 

              </div>
            );
          }
    },
    {
      title: 'Action',
      key: 'action',
      width: '15%',
      //className: 'bg-amber-50',
      render: () => (
        <div className="flex">
          <button className="text-gray-600 hover:text-gray-900">
            <Eye size={20} />
          </button>
        </div>
      ),
    },
  ];

  const paginationConfig: TablePaginationConfig = {
    position: ['bottomCenter'],
    showSizeChanger: false,
    defaultPageSize: 15,
    total: 150,
    showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: '#FEF3C7', // Amber-50 color
            headerColor: '#000000',
            rowHoverBg: '#F3F4F6', // Gray-100 color
            borderColor: '#E5E7EB', // Gray-200 color
          },
        },
      }}
    >
      <div className="w-full overflow-auto">
        <Table
          columns={columns}
          dataSource={data}
          pagination={paginationConfig}
          rowKey="id"
          sticky
          scroll={{ y: 'calc(100vh - 265px)' }}
          className="employer-table"
        />
      </div>
    </ConfigProvider>
  );
};

export default CandidateTable;