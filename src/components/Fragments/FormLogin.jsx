import InputForm from "../Elements/Input/index"
import Button from "../Elements/button/index"


const FormLogin = () => {
  return (
    <form action="">
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

      <Button action="login" variant="bg-blue-600 w-full" />
    </form>
  )
}

export default FormLogin