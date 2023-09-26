import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";


const RegisterPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <AuthLayouts title="register">
        <FormRegister />
      </AuthLayouts>
    </div>
  )
}

export default RegisterPage;