import { Modal } from "antd";
import { useState } from "react";
import { Edit } from "lucide-react";
import EditPlanForm from "../../package/EditPlanForm";


const EditSubscriptionModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
 
  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-green-600 hover:bg-green-700 p-2 text-white rounded-full"
      >
        <Edit size={18} />
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false)
        }}
        maskClosable={false}
        footer={false}
        width={600}
      >
        <div className="">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg">
              <h1 className="text-2xl font-semibold text-gray-900 mb-8">Update Plan</h1>
              <EditPlanForm />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditSubscriptionModal;
