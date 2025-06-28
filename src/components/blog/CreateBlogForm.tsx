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

type TFormValues = z.infer<typeof blogSchema>;

const CreateBlogForm = () => {
  const dispatch = useAppDispatch();
  const { BlogCreateError } = useAppSelector((state) => state.blog);
  const [createBlog, { isLoading }] = useCreateBlogMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(blogSchema),
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    dispatch(SetBlogCreateError(""));
    createBlog(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
