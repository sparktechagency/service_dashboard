/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, ConfigProvider, Pagination } from "antd";
import { Edit, Eye } from "lucide-react";
import DeleteBlogModal from "../modal/blog/DeleteBlogModal";
import type { IMeta } from "../../types/global.type";
import type { TBlog } from "../../types/blog.type";
import { Link } from "react-router-dom";

type TProps = {
  blogs: TBlog[];
  meta: IMeta,
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
};

type TDataSource = TBlog & {
  key: number;
  serial: number;
}

const BlogTable = ({ blogs, meta, currentPage, setCurrentPage, pageSize, setPageSize }: TProps) => {


    const dataSource: TDataSource[] = blogs?.map((blog, index) => ({
      key: index,
      serial: Number(index+1) + ((currentPage-1)*pageSize),
      _id: blog?._id,
      title: blog?.title,
      category: blog?.category,
      descriptions: blog?.descriptions,
      image: blog?.image,
      createdAt: blog?.createdAt,
    }));



  const columns = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
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
      render: (_val: any, record:TBlog) => (
        <div className="flex items-center gap-2">
          <Link to={`/update-blog/${record?._id}`} className="bg-gray-600 hover:bg-gray-700 p-2 text-white rounded-full">
            <Eye  size={18} />
          </Link>
        </div>
      )
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
      render: (_val: any, record:TBlog) => (
        <div className="flex items-center gap-2">
          <Link to={`/update-blog/${record?._id}`} className="bg-green-600 hover:bg-green-700 p-2 text-white rounded-full">
            <Edit size={18} />
          </Link>
          <DeleteBlogModal blogId={record?._id} />
        </div>
      ),
    },
  ];



  const handlePagination = (page:number, PageSize:number) => {
    setCurrentPage(page);
    setPageSize(PageSize)
  }



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
      <div className="w-full overflow-auto px-4">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowKey="_id"
          sticky
          scroll={{ y: "calc(100vh - 324px)" }}
          className="employer-table"
        />
      </div>
      <div className="p-8 bg-white shadow-md flex justify-center">
        <Pagination
          onChange={handlePagination}
          current={currentPage}
          pageSize={pageSize}
          total={meta?.total}
        />
      </div>
    </ConfigProvider>
  );
};

export default BlogTable;
