import { useForm, type SubmitHandler } from "react-hook-form";
import { useCreateBlogMutation } from "../../redux/features/blog/blogApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetBlogCreateError } from "../../redux/features/blog/blogSlice";
import { CgSpinnerTwo } from "react-icons/cg";
import { blogSchema } from "../../schemas/blog.schema";
import type { z } from "zod";
import CustomQuilEditor from "../form/CustomQuilEditor";
import Error from "../validation/Error";
import type { policySchema } from "../../schemas/policy.schema";

type TFormValues = z.infer<typeof policySchema>;


const UpdateAboutForm = () => {
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
      {BlogCreateError && <Error message={BlogCreateError} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            "Save Change"
          )}
        </button>
      </form>

      
    </>
  );
};

export default UpdateAboutForm;
