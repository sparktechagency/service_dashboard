import { useGetBannersQuery } from "../../redux/features/banner/bannerApi";
import ServerErrorCard from "../card/ServerErrorCard";
import ListLoading from "../loader/ListLoading";
import BannerTable from "./BannerTable";

const BannerList = () => {
  const { data, isLoading, isFetching, isError } = useGetBannersQuery(undefined);
  const banners = data?.data || [];

  if (isLoading) {
    return <ListLoading />;
  }

  if (!isLoading && !isError) {
    return <BannerTable banners={banners} loading={isFetching}/>;
  }

  if (!isLoading && isError) {
    return <ServerErrorCard />;
  }
};

export default BannerList;
