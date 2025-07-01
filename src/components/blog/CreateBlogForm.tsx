import { useForm, type SubmitHandler } from "react-hook-form";
import { useCreateBlogMutation } from "../../redux/features/blog/blogApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetBlogCreateError } from "../../redux/features/blog/blogSlice";
import CustomInput from "../form/CustomInput";
import { CgSpinnerTwo } from "react-icons/cg";
import { blogSchema } from "../../schemas/blog.schema";
import type { z } from "zod";
import CustomSelect from "../form/CustomSelect";
import { categoryOptions } from "../../data/category.data";
import CustomQuilEditor from "../form/CustomQuilEditor";
import Error from "../validation/Error";
import ImageUpload from "../form/ImageUpload";
import { useEffect, useState } from "react";

type TFormValues = z.infer<typeof blogSchema>;


const CreateBlogForm = () => {
  const dispatch = useAppDispatch();
  const { BlogCreateError } = useAppSelector((state) => state.blog);
  const [createBlog, { isLoading }] = useCreateBlogMutation();
  const { handleSubmit, control, setValue, clearErrors, setError, formState: { errors } } = useForm({
    resolver: zodResolver(blogSchema),
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
      message: "Image is required",
    });
  };


  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetBlogCreateError(""));
    const formData = new FormData();
    formData.append("image", image as File);
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("descriptions", data.descriptions);
    createBlog(formData);
  };

  return (
    <>
      {BlogCreateError && <Error message={BlogCreateError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
          <CustomInput
            label="Title"
            name="title"
            type="text"
            control={control}
            placeholder="Enter title"
          />
          <CustomSelect
            label="Category"
            name="category"
            control={control}
            options={categoryOptions}
          />
        </div>
        <div className="mb-6 mt-2">
          <ImageUpload
            preview={preview}
            setPreview={setPreview}
            image={image}
            setImage={setImage}
            title="Blog Image"
            setIconError={setIconError}
          />
          {errors?.icon && (
            <p className="mt-1 text-sm text-red-500">{errors?.icon?.message}</p>
          )}
        </div>
        <CustomQuilEditor
          label="Description"
          name="descriptions"
          control={control}
          height={400}
          placeholder="Write a blog..."
        />

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-x-2 bg-primary hover:bg-[#2b4773] cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100"
        >
          {isLoading ? (
            <>
              <CgSpinnerTwo className="animate-spin" fontSize={16} />
              Processing...
            </>
          ) : (
            "Create Blog"
          )}
        </button>
      </form>
    </>
  );
};

export default CreateBlogForm;
