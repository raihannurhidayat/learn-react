import InputForm from "../Elements/Input/index"
import Button from "../Elements/button/index"


const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        type="text"
        label="Full Name"
        placeholder="Inster your Name here..."
        name="fullname"
      />
      <InputForm
        type="email"
        label="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        type="password"
        label="password"
        placeholder="*******"
        name="password"
      />
      <InputForm
        type="confirm password"
        label="password"
        placeholder="*******"
        name="confirmpassword"
      />

      <Button action="register" variant="bg-blue-600 w-full" />
    </form>
  )
}

export default FormRegister