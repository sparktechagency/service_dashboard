import { Modal } from "antd";
import { useState } from "react";
import { CgSpinnerTwo } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

type Tprops = {
    userId: string,
    isActive: boolean
}

const ChangeStatusModal = ({ userId, isActive } : Tprops) => {
  const [modalOpen, setModalOpen] = useState(false);
//   const [ changeStatus, { isLoading, isSuccess }] = useChangeStatusMutation();
const isLoading = false;



//   useEffect(() => {
//     if (isSuccess) {
//       setModalOpen(false);
//     }
//   }, [isSuccess]);


 const handleClick = () => {
    console.log(userId);
    // changeStatus({
    //   id: userId,
    //   data: {
    //     isActive: isActive ? false : true
    //   }
    // })
 }

  return (
    <>
      <button
        className="p-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full"
        onClick={() => {
            setModalOpen(true);
        }}
      >
        <FiEdit size={14} />
      </button>
      <Modal
        title={`Are you sure, you want to ${isActive ? "block" : "active"} this account?`}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        maskClosable={false}
        footer={false}
        closable={false}
      >
       
      
        <div className="flex justify-end px-4 gap-x-3">
           <button onClick={()=>setModalOpen(false)} className="bg-black text-white px-4 py-1 rounded-md">No</button>
           <button onClick={handleClick} disabled={isLoading} className="bg-red-500 hover:bg-red-600 duration-500 text-white px-4 py-1 rounded-md disabled:cursor-not-allowed">
           {isLoading ? (
              <>
                <CgSpinnerTwo className="animate-spin" fontSize={16} />
              </>
            ) : (
              "Yes"
            )}
           </button>
        </div>
      </Modal>
    </>
  );
};

export default ChangeStatusModal;
