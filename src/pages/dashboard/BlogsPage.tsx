import { useNavigate } from "react-router-dom"
import BlogList from "../../components/blog/BlogList";

const BlogsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <div className="p-4 flex justify-between">
              <h1 className="text-xl font-medium text-gray-800">
                Blog List
              </h1>
              <button onClick={()=>navigate("/create-blog")} className="bg-primary px-3 py-1.5 text-white cursor-pointer rounded-md hover:bg-[#2b4773] duration-200"> Add New</button>
            </div>
            <div className="flex-1 overflow-hidden">
              <BlogList />
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  )
}

export default BlogsPage