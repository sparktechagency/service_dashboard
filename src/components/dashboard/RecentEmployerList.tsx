
import { useState } from "react"
import { Table} from "antd"
import type { ColumnsType } from "antd/es/table"
import { useNavigate } from "react-router-dom"

interface EmployerData {
  key: string
  serialNo: string
  companyName: string
  category: string
  location: string
  dayTag?: string
}

const RecentEmployerList = () =>{
  const navigate = useNavigate();
  const [data] = useState<EmployerData[]>([
    {
      key: "1",
      serialNo: "01",
      companyName: "Eye Q India",
      category: "IT",
      location: "H No/R No/ City",
    },
    {
      key: "2",
      serialNo: "02",
      companyName: "Barone LLC.",
      category: "Agro",
      location: "H No/R No/ City",
      dayTag: "Day 23",
    },
    {
      key: "3",
      serialNo: "03",
      companyName: "Narayana Nethralaya",
      category: "IT",
      location: "H No/R No/ City",
      dayTag: "Day 23",
    },
    {
      key: "4",
      serialNo: "04",
      companyName: "Envoy Shipm...",
      category: "IT",
      location: "H No/R No/ City",
      dayTag: "Day 23",
    },
    {
      key: "5",
      serialNo: "05",
      companyName: "UD Suryatmi",
      category: "IT",
      location: "H No/R No/ City",
    },
    {
      key: "6",
      serialNo: "07",
      companyName: "Eye Q India",
      category: "IT",
      location: "H No/R No/ City",
    },
  ])

  const columns: ColumnsType<EmployerData> = [
    {
      title: "Serial No",
      dataIndex: "serialNo",
      key: "serialNo",
      width: "15%",
      className: "text-center sm:text-left",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
      width: "30%",
      render: (text) => (
        <div className="flex items-center">
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "25%",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: "30%",
    },
  ]

  return (
    <div className="w-full mx-auto bg-white p-4 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Recent Employer List</h1>
        <button onClick={()=>navigate('/employers')} className="text-sm text-blue-600 hover:underline">View All</button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        //rowClassName={(record, index) => (index % 2 === 0 ? "bg-amber-50" : "bg-white hover:bg-blue-50")}
        className="employer-table"
        scroll={{ x: "max-content" }}
      />
    </div>
  )
}

export default RecentEmployerList;