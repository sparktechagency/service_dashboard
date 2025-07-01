import { useState } from "react";
import { useGetBlogsQuery } from "../../redux/features/blog/blogApi";
import ServerErrorCard from "../card/ServerErrorCard";
import ListLoading from "../loader/ListLoading";
import BlogTable from "./BlogTable";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading, isError } = useGetBlogsQuery([
    { name: "page", value: currentPage },
    { name: "limit", value: pageSize },
  ]);


  const blogs = data?.data?.data || [];
  const meta = data?.data?.meta || {};


  if (isLoading) {
    return <ListLoading />;
  }

  if (!isLoading && !isError) {
    return <BlogTable blogs={blogs} meta={meta} currentPage={currentPage} setCurrentPage={setCurrentPage} pageSize={pageSize} setPageSize={setPageSize}/>;
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />;
  }
};

export default BlogList;
