import BlogTable from "../../components/blog/BlogTable"

const BlogsPage = () => {
  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <div className="p-4 flex justify-between">
              <h1 className="text-xl font-medium text-gray-800">
                Blog List
              </h1>
              <button className="bg-primary px-3 py-1.5 text-white cursor-pointer rounded-md hover:bg-[#2b4773] duration-200"> Add New</button>
            </div>
            <div className="flex-1 overflow-hidden">
              <BlogTable />
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  )
}

export default BlogsPage