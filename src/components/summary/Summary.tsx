import user from "../../assets/images/user.png";
import restaurant from "../../assets/images/restaurant.png";
import task from "../../assets/images/task.png";


const Summary = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white flex flex-col items-center gap-y-3 py-6 rounded-lg">
            <h1 className="text-xl font-medium">Total Users</h1>
            <div>
                <img src={user} alt="user" />
            </div>
            <h1 className="text-2xl font-semibold">
              852,650
            </h1>
        </div>
        <div className="bg-white font-medium flex flex-col items-center gap-y-3 py-6 rounded-lg">
            <h1 className="text-xl font-medium">Total Users</h1>
            <div className="bg-[#E7E7E7] p-3 rounded-full">
                <img src={restaurant} alt="restaurant" />
            </div>
            <h1 className="text-2xl font-semibold">
              852,650
            </h1>
        </div>
        <div className="bg-white font-medium flex flex-col items-center gap-y-3 py-6 rounded-lg">
            <h1 className="text-xl font-medium">Total Users</h1>
            <div className="bg-[#E7E7E7] p-3 rounded-full">
                <img src={task} alt="restaurant" />
            </div>
            <h1 className="text-2xl font-semibold">
              852,650
            </h1>
        </div>
      </div>
    </>
  )
}

export default Summary