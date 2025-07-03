import { Table, ConfigProvider } from "antd";
import type { TablePaginationConfig } from "antd/es/table";
import { Eye, Reply } from "lucide-react";
//import DeleteCategoryModal from "../modal/category/DeleteCategoryModal";
import { contactData } from "../../data/contact.data";

const ContactTable = () => {
  const columns = [
    {
      title: "Serial No",
      dataIndex: "serialNo",
      key: "serialNo",
      width: "10%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "15.5%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "17.5%",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      width: "17.5%",
      render: (text:string)=> (
        <>
         <p className="truncate">{text}</p>
        </>
      )
    },
    {
      title: "View",
      key: "action",
      width: "15%",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="bg-gray-600 hover:bg-gray-700 p-2 text-white rounded-full">
            <Eye  size={18} />
          </button>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 p-2 text-white rounded-full">
            <Reply  size={18} />
          </button>
          {/* <DeleteCategoryModal /> */}
        </div>
      ),
    },
  ];

  const paginationConfig: TablePaginationConfig = {
    position: ["bottomCenter"],
    showSizeChanger: false,
    defaultPageSize: 15,
    total: 150,
    showTotal: (total, range) =>
      `Showing ${range[0]}-${range[1]} out of ${total}`,
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "#FEF3C7", // Amber-50 color
            headerColor: "#000000",
            rowHoverBg: "#F3F4F6", // Gray-100 color
            borderColor: "#E5E7EB", // Gray-200 color
          },
        },
      }}
    >
      <div className="w-full overflow-auto">
        <Table
          columns={columns}
          dataSource={contactData}
          pagination={paginationConfig}
          rowKey="id"
          sticky
          scroll={{ y: "calc(100vh - 265px)" }}
          className="employer-table"
        />
      </div>
    </ConfigProvider>
  );
};

export default ContactTable;
