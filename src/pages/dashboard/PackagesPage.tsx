import { useNavigate } from "react-router-dom";
import PackageList from "../../components/subscription/PackageList";
import { FaPlus } from "react-icons/fa";

const PackagesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="bg-white rounded-lg shadow h-full overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <div className="p-4 flex justify-between">
              <h1 className="text-xl font-medium text-gray-800">
                Subscription List
              </h1>
              <button
                onClick={() => navigate("/add-plan")}
                className="flex items-center gap-2 bg-primary px-3 py-1.5 text-white cursor-pointer rounded-md hover:bg-[#2b4773] duration-200"
              >
                <FaPlus />
                Add New Plan
              </button>
            </div>
            <div className="flex-1 overflow-hidden p-4">
              <PackageList />
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  )
}

export default PackagesPage;