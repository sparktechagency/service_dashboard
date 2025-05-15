
const EmployersPage = () => {
  return (
    <>
      <div className="flex-1 overflow-hidden p-4">
          <div className="bg-white rounded-lg shadow h-full overflow-hidden">
<div className="w-full h-full flex flex-col">
      <div className="p-4">
        <h1 className="text-xl font-medium text-gray-800">Total New Employer List</h1>
      </div>
      <div className="flex-1 overflow-hidden">
        <EmployerTable data={employers} />
      </div>
    </div>          </div>
        </div>
    </>
  )
}

export default EmployersPage