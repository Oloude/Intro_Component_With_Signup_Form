import Input from "./Input"
import { useForm, SubmitHandler } from "react-hook-form"



type Inputs = {
    firstName: string,
    lastName: string,
    email : string,
    password : string
  }
 

function Form() {
  const {
    handleSubmit,
    formState,
    register
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const {errors} = formState

  return (
    <form action=" " onSubmit={handleSubmit(onSubmit)} noValidate className="bg-white rounded-lg p-6 flex flex-col">
        <div className="flex flex-col gap-3 mb-6">
        <Input type="text" placeholder="First Name" error={errors.firstName} errorMessage={errors.firstName?.message} {...register('firstName', {required : 'First name cannot be empty'})}/>
        <Input type="text" placeholder="Last Name" error={errors.lastName} errorMessage={errors.lastName?.message} {...register('lastName', {required : 'First name canot be empty'})}/>
        <Input type="email" placeholder="Email Address" error={errors.email} errorMessage={errors.email?.message} {...register('email', {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Looks like this is not an email",
            }
        })}/>
        <Input type="password" placeholder="Password" error={errors.password} errorMessage={errors.password?.message} {...register('password', {required : 'First name cannot be empty'})}/>
        </div>

        <button className="text-white p-4 border-b-4 border-b-green bg-green bg-opacity-90 rounded-md text-base uppercase mb-4">
        Claim your free trial 
        </button>
        <p className="text-gray font-semibold text-sm text-center">By clicking the button, you are agreeing to our  <span className="text-red">Terms and Services</span></p>
    </form>
  )
}

export default Form