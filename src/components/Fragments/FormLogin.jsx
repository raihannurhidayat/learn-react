import { useEffect, useRef, useState } from "react"
import { login } from "../../services/auth.service"
import InputForm from "../Elements/Input/index"
import Button from "../Elements/button/index"


const FormLogin = () => {
  const [loginFail, setLoginFail] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    // localStorage.setItem('email', event.target.email.value)
    // localStorage.setItem('password', event.target.password.value)
    // console.log(event.target.email.value)
    // console.log(event.target.password.value)
    // console.log('Login')
    // window.location.href = "/product"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    
    login(data, (status, res) => {
      if(status) {
        localStorage.setItem('token', res)
        window.location.href = "/product"
      } else {
        setLoginFail(res.response.data)
      }
    })
  }

  const usernameRef = useRef(null)

  useEffect(() => {
    usernameRef.current.focus()
  })

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="username"
        label="text"
        placeholder="John dhoe"
        name="username"
        ref={usernameRef}
        />
      <InputForm
        type="password"
        label="password"
        placeholder="*******"
        name="password"
        />

      <Button action="login" variant="bg-blue-600 w-full" type="submit"/>
        {
          loginFail && <p className="text-red-500 text-center mt-5">{ loginFail }</p>
        }
    </form>
  )
}

export default FormLogin