import { Modal } from "antd";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import CustomInput from "../../form/CustomInput";
import { CgSpinnerTwo } from "react-icons/cg";
import Error from "../../validation/Error";
import { useCreateAdminMutation } from "../../../redux/features/admin/adminApi";
import { adminSchema } from "../../../schemas/admin.schema";
import PasswordStrength from "../../validation/PasswordStrength";

type TFormValues = z.infer<typeof adminSchema>;

const CreateAdminModal = () => {
  const dispatch = useAppDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const { CategoryCreateError } = useAppSelector((state) => state.category);
  const [createAdmin, { isLoading, isSuccess, reset }] =
    useCreateAdminMutation();
  const { handleSubmit, control, setValue, watch, trigger } =
    useForm<TFormValues>({
      resolver: zodResolver(adminSchema),
    });

  const password = watch("password");

  useEffect(() => {
    if (password) {
      // Only trigger validation if confirmPassword has been entered
      const confirmPassword = watch("confirmPassword");
      if (confirmPassword) {
        trigger("confirmPassword");
      }
    }
  }, [password, watch, trigger]);

  //if success
  useEffect(() => {
    if (!isLoading && isSuccess) {
      //setValue("category", "");
      setModalOpen(false);
    }
  }, [isLoading, isSuccess, reset, setValue]);

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="flex items-center gap-2 bg-primary px-3 py-1.5 text-white cursor-pointer rounded-md hover:bg-[#2b4773] duration-200"
      >
        <FaPlus />
        Add New
      </button>
      <Modal
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          //setValue("category", "");
        }}
        maskClosable={false}
        footer={false}
      >
        <div className="w-full mx-auto">
          <div className="bg-white rounded-xl overflow-hidden transition-all duration-300">
            <div className="p-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Create Admin
              </h2>
              {CategoryCreateError && <Error message={CategoryCreateError} />}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <CustomInput
                  label="Name"
                  name="name"
                  type="text"
                  control={control}
                  placeholder="Enter full name"
                />
                <CustomInput
                  label="Email"
                  name="email"
                  type="text"
                  control={control}
                  placeholder="Enter email address"
                />
                <CustomInput
                  label="Phone Number(only UK)"
                  name="phone_number"
                  type="text"
                  control={control}
                  placeholder="Enter phone number"
                />
                <CustomInput
                  label="Password"
                  name="password"
                  type="password"
                  control={control}
                  placeholder="Enter password"
                />
                {password && <PasswordStrength password={password} />}
                <CustomInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  control={control}
                  placeholder="Enter confirm password"
                />

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-4 py-2 w-full bg-primary hover:bg-[#2b4773] disabled:bg-[#2b4773 disabled:cursor-not-allowed rounded-lg text-white font-medium 
 transition-colors duration-200 flex items-center justify-center gap-x-2 focus:outline-none`}
                  >
                    {isLoading ? (
                      <>
                        <CgSpinnerTwo className="animate-spin" fontSize={16} />
                        Processing...
                      </>
                    ) : (
                      "Create Admin"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateAdminModal;
