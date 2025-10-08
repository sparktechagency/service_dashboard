import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CgSpinnerTwo } from "react-icons/cg";
import type { z } from "zod";
import CustomQuilEditor from "../form/CustomQuilEditor";
import { policySchema } from "../../schemas/policy.schema";
import { useCreateCookieTextMutation } from "../../redux/features/policy/policyApi";

type TFormValues = z.infer<typeof policySchema>;

const CreateCookieForm = () => {
  const [createUpdateCookie, { isLoading }] = useCreateCookieTextMutation();
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(policySchema),
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    createUpdateCookie({
      message: "added",
      data: data,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomQuilEditor
          label="Description"
          name="descriptions"
          control={control}
          height={500}
          placeholder="Write here..."
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
            "Save"
          )}
        </button>
      </form>
    </>
  );
};

export default CreateCookieForm;
