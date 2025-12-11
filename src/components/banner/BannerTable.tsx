import { Table, ConfigProvider } from "antd";
import icon_placeholder from "../../assets/images/icon_placeholder.jpg";
import type { IBanner, IBannerDataSource } from "../../types/banner.type";
import DeleteBannerModal from "../modal/banner/DeleteBannerModal";
import EditBannerModal from "../modal/banner/EditBannerModal";



type TProps = {
  banners: IBanner[];
  loading: boolean;
}


const BannerTable = ( { banners, loading }: TProps) => {

  const dataSource: IBannerDataSource[] = banners?.map((banner, index)=> ({
        key: index,
        serial: Number(index+1),
        _id: banner?._id,
        name: banner?.name,
        image: banner?.image,
        url: banner?.url
  }))

  const columns = [
    {
      title: "Serial No",
      dataIndex: "serial",
      key: "serial",
      width: "10%",
    },
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
      width: "22.5%",
    },
    {
      title: "Icon",
      dataIndex: "image",
      key: "image",
      width: "17.5%",
      render: (val: string) => (
        <>
           <img
            src={val || icon_placeholder}
            alt="profile"
            className="w-[45px] h-[45px] rounded-lg"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = icon_placeholder;
            }}
          />
        </>
      ),
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      width: "22.5%",
      render: (val: string) => (
         <>
          <a
            href={val || "https://machmakers.co.uk"}
            target="_blank"
            className="font-medium text-blue-500 hover:underline"
          >
            Click Here
          </a>
         </>
      )
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "_id",
      width: "15%",
      render: (bannerId: string, record: IBanner) => (
        <div className="flex items-center gap-2">
          <EditBannerModal banner={record}/>
          <DeleteBannerModal bannerId={bannerId} />
        </div>
      ),
    },
  ];




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
          dataSource={dataSource}
          rowKey="_id"
          sticky
          scroll={{ y: "calc(100vh - 265px)" }}
          className="employer-table"
          loading={loading}
        />
      </div>
    </ConfigProvider>
  );
};

export default BannerTable;
