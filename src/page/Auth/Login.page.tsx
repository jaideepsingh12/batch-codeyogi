import React, { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../Components/Input";
import { login } from "../../api/auth";
import { User } from "../../modals/User";

interface Props {
  onLoginAuth: (user: User) => void;
}
const Login: React.FC<Props> = (props) => {
  // const [data, setData] = useState({ email: "jaideepsingh12@gmail.com", password: "" });
  // const [touched, setTouched] = useState({ email: false, password: false });
  // const [submiiting, setSubmitting] = useState(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setData({ ...data, [event.target.name]: event.target.value });
  // };

  // const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
  //   setTouched({ ...touched, [event.target.name]: true });
  // };

  // let emailError = "";
  // let passwordError = "";

  // if (!data.email) {
  //   emailError = "email cant be left empty";
  // } else if (!data.email.endsWith("gmail.com")) {
  //   emailError = "email is not valid ";
  // }
  // if (!data.password) passwordError = "password cant be left empty";
  // else if (data.password.length < 8) {
  //   passwordError = "password is too small";
  // }
  const history = useHistory();
  const myForm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object().shape({ email: yup.string().required().email(), password: yup.string().required().min(8) }),
    onSubmit: (data) => {
      // console.log("form submitting", data);
      // setTimeout(() => {
      //   console.log("form submitted successfully");
      //   history.push("/dashboard");
      // }, 5000);
      login(data).then((u) => {
        props.onLoginAuth(u);
        history.push("/dashboard");
      });
    },
  });

  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="w-auto h-12 mx-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Or{" "}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={myForm.handleSubmit}
          // e.preventDefault();
          // if (emailError || passwordError) return;
          // setSubmitting(true);
          // setTimeout(() => {
          //   console.log("login successful:", data);
          //   history.push("/dashboard");
          // }, 5000);
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <Input
                id="email"
                type="email"
                autoComplete="current-email"
                placeholder="email"
                {...myForm.getFieldProps("email")}
                touched={myForm.touched.email}
                error={myForm.errors.email}
              />
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="password"
                {...myForm.getFieldProps("password")}
                touched={myForm.touched.password}
                error={myForm.errors.password}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!myForm.dirty}
              onClick={() => console.log("button clicked")}
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HiLockClosed className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
          </div>
          {myForm.isSubmitting && <FaSpinner className="mt-5 animate-spin"></FaSpinner>}
        </form>
      </div>
    </div>
  );
};
export default memo(Login);
