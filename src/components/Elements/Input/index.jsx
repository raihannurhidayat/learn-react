import { forwardRef } from "react"
import Input from "./Input"
import Label from "./Label"

const InputForm = forwardRef( ( {name, type, placeholder, label}, ref) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{ label }</Label>
      <Input placeholder={placeholder} type={type} name={name} ref={ref}/>
    </div>
  )
})

export default InputForm