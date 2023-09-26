const Button = ({ variant="bg-slate-400" , action="click me"}) => {
  return <button className={`mt-3 ${variant} p-4 rounded`}>
    {action}
  </button>
}

export default Button