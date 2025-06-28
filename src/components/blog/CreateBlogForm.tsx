


const CreateBlogForm = () => {
    const dispatch = useAppDispatch();
      const { LoginError } = useAppSelector((state) => state.auth);
      const [login, { isLoading }] = useLoginMutation();
      const { handleSubmit, control } = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "admin@admin.com",
          password: "12345678",
        },
      });
    
    
    
        const onSubmit: SubmitHandler<TFormValues> = (data) => {
          dispatch(SetLoginError(""))
          login(data)
        };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <CustomInput label="Email" name="email" type="text" control={control} placeholder="Enter email address"/>
              <CustomInput label="Password" name="password" type="password" control={control} placeholder="Enter your password"/>
              <div className="flex justify-between items-center">
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2 cursor-pointer" /> Remember
                  me
                </label>
                <Link
                  to="/auth/forgot-password"
                  className="text-sm text-[#3AB0FF] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
      
              <button type="submit" className="w-full flex justify-center items-center gap-x-2 bg-primary hover:bg-[#2b4773] cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100">
                {isLoading ? (
                  <>
                    <CgSpinnerTwo className="animate-spin" fontSize={16} />
                    Processing...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
    </>
  )
}

export default CreateBlogForm