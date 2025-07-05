import { EyeOutlined } from "@ant-design/icons"
import { ConfigProvider, Table, type TablePaginationConfig } from "antd"
import { subscriberData } from "../../data/subscriber.data"
import { useNavigate } from "react-router-dom"


const SubscriberPastTable = () => {
  const navigate = useNavigate();
   const columns = [
    {
      title: "Serial No",
      dataIndex: "serialNo",
      key: "serialNo",
      width: 100,
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
      width: 150,
    },
    {
      title: "Package",
      dataIndex: "package",
      key: "package",
      width: 150,
    },
    {
      title: "Package Price",
      dataIndex: "packagePrice",
      key: "packagePrice",
      width: 120,
    },
    {
      title: "Date form",
      dataIndex: "dateForm",
      key: "dateForm",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (status: string) => (
        <span
          className={`status-badge ${
            status === "Active" ? "status-active" : status === "Pending" ? "status-pending" : "status-expired"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Visit Profile",
      key: "action",
      width: 100,
      render: () => (
        <button onClick={()=>navigate(`/subscribers/details/${Math.random()}`)} className="text-gray-500 hover:text-gray-700">
          <EyeOutlined />
        </button>
      ),
    },
  ]

    
      const paginationConfig: TablePaginationConfig = {
        position: ['bottomCenter'],
        showSizeChanger: false,
        defaultPageSize: 15,
        total: 150,
        showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
      };
      
  return (
    <>
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
          dataSource={subscriberData}
          pagination={paginationConfig}
          rowKey="id"
          sticky
          scroll={{ y: 'calc(100vh - 265px)' }}
          className="employer-table"
        />
      </div>
    </ConfigProvider>
    </>
  )
}

export default SubscriberPastTable;