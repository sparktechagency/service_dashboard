import SubscriberTable from "../../components/subscriber/SubscriberPastTable"


const SubscribersPage = () => {
  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <div className="p-4">
              <h1 className="text-xl font-medium text-gray-800">
                Total Subscribers
              </h1>
            </div>
            <div className="flex-1 overflow-hidden">
              <SubscriberTable/>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  )
}

export default SubscribersPage