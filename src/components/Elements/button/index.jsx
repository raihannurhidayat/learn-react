const Button = ({ 
    variant = "bg-slate-400",
    action = "click me",
    type = "button", onClick = () => { } 
  }) => {
    
  return <button className={`mt-3 ${variant} p-4 rounded`} onClick={() => {
    onClick()
  }}
    type={type}>
    {action}
  </button>
}

export default Button