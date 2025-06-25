import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import ServerErrorCard from "../card/ServerErrorCard";
import ListLoading from "../loader/ListLoading";
import CategoryTable from "./CategoryTable";

const CategoryList = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery(undefined);
  console.log(data?.data);

  if (isLoading) {
    return <ListLoading />;
  }

  if (!isLoading && !isError) {
    return <CategoryTable />;
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />;
  }
};

export default CategoryList;
