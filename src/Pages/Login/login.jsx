import { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import Container from "../../container/Container/Container";
import "./login.css";

const Login = () => {
  const { signIn, } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    setError("");
    setSuccess("");

  
    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log("logged", user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, {replace: true})
      setSuccess("User Logged in Successfully");
      form.reset();
    })
    .catch((error) => {
      console.log(error.message);
      setError(error.message);
    });
  };

 

  return (
    <Container>
      <div className="login-bg rounded-xl">
        <div>
          <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
              <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Log In</h1>
                <p className="text-sm text-gray-400">
                  Sign in to access your account
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                noValidate=""
                action=""
                className="space-y-6 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Enter Your Email Here"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                      data-temp-mail-org="0"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm mb-2">
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      placeholder="*******"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-rose-500 w-full rounded-md py-3 text-white"
                  >
                    Continue
                  </button>
                </div>
              </form>
              <div className="space-y-1">
                <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
                  Forgot password?
                </button>
              </div>
              <div>
              <p className="mt-3 text-primary font-semibold flex justify-center font-sans text-sm leading-normal text-inherit antialiased">
                {success && success}
              </p>
              <p className="mt-3 text-red-700 font-semibold flex justify-center font-sans text-sm leading-normal text-inherit antialiased">
                {error && error}
              </p>
            </div>
  
              <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                <p className="px-3 text-sm dark:text-gray-400">
                  Login with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              </div>
              <p className="px-6 text-sm font-bold text-center text-black">
                Don't have an account yet?{" "}
                <Link
                  to="/signup"
                  className="hover:underline text-primary font-bold hover:text-rose-500"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </Container>
  );
};

export default Login;
