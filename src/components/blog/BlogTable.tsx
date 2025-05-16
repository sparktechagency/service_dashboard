import { Table, ConfigProvider } from "antd";
import type { TablePaginationConfig } from "antd/es/table";
import { Edit, Eye } from "lucide-react";
import DeleteCategoryModal from "../modal/category/DeleteCategoryModal";
import { blogData } from "../../data/blog.data";

const BlogTable = () => {
  const columns = [
    {
      title: "Serial No",
      dataIndex: "serialNo",
      key: "serialNo",
      width: "10%",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "22.5%",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: "17.5%",
      render: (val: string) => (
        <>
          <img src={val} alt="icon" className="w-12 h-12 rounded-md" />
        </>
      ),
    },
     {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "25.5%",
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
      )
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="bg-green-600 hover:bg-green-700 p-2 text-white rounded-full">
            <Edit size={18} />
          </button>
          <DeleteCategoryModal />
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
          dataSource={blogData}
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

export default BlogTable;
