import InputForm from "../Elements/Input/index"
import Button from "../Elements/button/index"


const FormLogin = () => {

  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    console.log(event.target.email.value)
    console.log(event.target.password.value)
    console.log('Login')
    window.location.href = "/product"
  }

  return (
    <form onSubmit={handleLogin}>
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

      <Button action="login" variant="bg-blue-600 w-full" type="submit"/>
    </form>
  )
}

export default FormLogin