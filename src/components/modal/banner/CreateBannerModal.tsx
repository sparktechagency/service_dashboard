import { Modal } from "antd";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ImageUpload from "../../form/ImageUpload";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import CustomInput from "../../form/CustomInput";
import { CgSpinnerTwo } from "react-icons/cg";
import Error from "../../validation/Error";
import { bannerSchema } from "../../../schemas/banner.schema";
import { SetBannerCreateError } from "../../../redux/features/banner/bannerSlice";
import { useCreateBannerMutation } from "../../../redux/features/banner/bannerApi";

type TFormValues = z.infer<typeof bannerSchema>;

const CreateBannerModal = () => {
  const dispatch = useAppDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const { CategoryCreateError } = useAppSelector((state) => state.category);
  const [createBanner, { isLoading, isSuccess, reset }] = useCreateBannerMutation();
  const { handleSubmit, control, setValue, clearErrors, setError, formState: { errors } } = useForm<TFormValues>({
    resolver: zodResolver(bannerSchema),
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  

  useEffect(() => {
    if (image !=null) {
      setValue("icon", "This is icon");
      clearErrors("icon");
    }
  }, [image, setValue, setError, clearErrors]);



  const setIconError = () => {
    setValue("icon", "");
    setError("icon", {
      type: "manual",
      message: "Icon is required",
    });
  };


  //if success
   useEffect(() => {
    if (!isLoading && isSuccess) {
      setValue("name", "");
      setPreview(null)
      setImage(null)
      setModalOpen(false);
    }
  }, [isLoading, isSuccess, reset, setValue]);


  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetBannerCreateError(""));
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", image as File);
    createBanner(formData);
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
          setValue("name", "");
          setImage(null)
          setPreview(null)
        }}
        maskClosable={false}
        footer={false}
      >
        <div className="w-full mx-auto">
          <div className="bg-white rounded-xl overflow-hidden transition-all duration-300">
            <div className="p-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Add Banner
              </h2>
               {CategoryCreateError && <Error message={CategoryCreateError} />}
              <form onSubmit={handleSubmit(onSubmit)}>
                <CustomInput
                  label="Banner Title"
                  name="name"
                  type="text"
                  control={control}
                  placeholder="Enter title"
                />
                <div className="mb-6 mt-2">
                  <ImageUpload preview={preview} setPreview={setPreview} image={image} setImage={setImage} title="Banner Image" setIconError={setIconError}/>
                  {
                    errors?.icon && (
                      <p className="mt-1 text-sm text-red-500">{errors?.icon?.message}</p>
                    )
                  }
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-4 py-2 w-full rounded-lg text-white font-medium 
                  ${
                    isLoading
                      ? "bg-blue-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                  } transition-colors duration-200 flex items-center justify-center gap-x-2 focus:outline-none focus:ring-blue-500`}
                  >
                    {isLoading ? (
                      <>
                         <CgSpinnerTwo className="animate-spin" fontSize={16} />
                        Processing...
                      </>
                    ) : (
                      "Add"
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

export default CreateBannerModal;
