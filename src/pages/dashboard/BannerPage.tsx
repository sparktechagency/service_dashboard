import BannerList from "../../components/banner/BannerList"
import CreateBannerModal from "../../components/modal/banner/CreateBannerModal"

const BannerPage = () => {
  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <div className="p-4 flex justify-between">
              <h1 className="text-xl font-medium text-gray-800">
                Banner List
              </h1>
              <CreateBannerModal/>
            </div>
            <div className="flex-1 overflow-hidden">
              <BannerList />
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  )
}

export default BannerPage