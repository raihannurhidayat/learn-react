import Input from "./Input"
import Label from "./Label"

const InputForm = ( {name, type, placeholder, label} ) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{ label }</Label>
      <Input placeholder={placeholder} type={type} name={name}/>
    </div>
  )
}

export default InputForm