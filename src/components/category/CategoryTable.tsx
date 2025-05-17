import { Table, ConfigProvider } from "antd";
import type { TablePaginationConfig } from "antd/es/table";
import { categoryData } from "../../data/category.data";
import DeleteCategoryModal from "../modal/category/DeleteCategoryModal";
import EditCategoryModal from "../modal/category/EditCategoryModal";

const CategoryTable = () => {
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
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
      width: "17.5%",
      render: (val: string) => (
        <>
          <img src={val} alt="icon" className="w-12 h-12 rounded-md" />
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
      render: () => (
        <div className="flex items-center gap-2">
          <EditCategoryModal/>
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
          dataSource={categoryData}
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

export default CategoryTable;
