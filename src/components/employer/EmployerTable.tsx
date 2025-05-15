import React from 'react';
import { Table, ConfigProvider } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { Eye } from 'lucide-react';
import StatusBadge from './StatusBadge';
import type { IEmployer } from '../../types/employer.type';

interface EmployerTableProps {
  data: IEmployer[];
}

const EmployerTable: React.FC<EmployerTableProps> = ({ data }) => {
  const columns: ColumnsType<IEmployer> = [
    {
      title: 'Serial No',
      dataIndex: 'serialNo',
      key: 'serialNo',
      width: '10%',
      className: 'bg-amber-50',
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
      width: '22.5%',
      className: 'bg-amber-50',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '17.5%',
      className: 'bg-amber-50',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      width: '20%',
      className: 'bg-amber-50',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '15%',
      className: 'bg-amber-50',
      render: (status) => <StatusBadge status={status} />,
    },
    {
      title: 'Action',
      key: 'action',
      width: '15%',
      className: 'bg-amber-50',
      render: () => (
        <div className="flex justify-center">
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

export default EmployerTable;