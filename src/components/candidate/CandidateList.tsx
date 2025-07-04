import React, { useState } from "react";
import { useGetBlogsQuery } from "../../redux/features/blog/blogApi";
import ServerErrorCard from "../card/ServerErrorCard";
import ListLoading from "../loader/ListLoading";
import BlogTable from "../blog/BlogTable";
import { FaSearch } from "react-icons/fa";

const CandidateList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading, isError } = useGetBlogsQuery([
    { name: "page", value: currentPage },
    { name: "limit", value: pageSize },
  ]);

  const blogs = data?.data?.data || [];
  const meta = data?.data?.meta || {};

  let content: React.ReactNode;

  if (isLoading) {
    content = <ListLoading />;
  }

  if (!isLoading && !isError) {
    content = (
      <div className="flex-1 overflow-hidden">
        <BlogTable
          blogs={blogs}
          meta={meta}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
        ;
      </div>
    );
  }

  if (!isLoading && isError) {
    content = <ServerErrorCard />;
  }


   return (
      <>
        <div className="p-4 flex justify-between">
          <h1 className="text-xl font-medium text-gray-800">
            Total Candidate List
          </h1>
          <div className="flex items-center gap-12">
            <h1 className="text-lg">
              Total: <span className="font-bold"> {20} </span>
            </h1>
            <div className="relative w-72">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-700">
                <FaSearch size={16} />
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
       {content}
      </>
    );

};

export default CandidateList;
