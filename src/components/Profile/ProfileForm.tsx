"use client";

import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetChangePasswordError } from "../../redux/features/auth/authSlice";
import type { z } from "zod";
import Error from "../validation/Error";
import CustomInput from "../form/CustomInput";
import { CgSpinnerTwo } from "react-icons/cg";
import { updateAdminSchema } from "../../schemas/admin.schema";

type TFormValues = z.infer<typeof updateAdminSchema>;

const ProfileForm = () => {
  const dispatch = useAppDispatch();
  const { ChangePasswordError } = useAppSelector((state) => state.auth);
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const { handleSubmit, control, watch } = useForm({
    resolver: zodResolver(updateAdminSchema),
  });


  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetChangePasswordError(""));
    changePassword(data);
  };


  return (
    <>
      {ChangePasswordError && <Error message={ChangePasswordError} />}
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
          placeholder="e.g., +44 20 1234 5678 or 020 1234 5678"
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
              "Save Changes"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
