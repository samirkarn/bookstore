import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='login-bg h-screen bg-cover bg-bottom flex items-center justify-center px-4 md:px-0'>
        <Card className="w-full max-w-lg p-4">
          <CardHeader className="text-center text-sm md:text-2xl font-bold">
            <p>Welcome to <span className="cursor-pointer text-4xl font-bold text-pink-800"><a href="/">
                BookStore
                </a></span></p>
            <p>The world of books at your fingertips</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email</label>
                <Input placeholder="Enter your email" type="text" />
              </div>
              <div className="mt-4">
                <label>Password</label>
                <Input placeholder="Enter your password" type="password" />
              </div>
              <p className="underline text-blue-900 text-right text-sm mt-2">Forget Password</p>
              <Button type="submit" className="w-full mt-4">Submit</Button>
            </form>
            <p className="mt-2 text-sm">
              Don't have an account?{" "}
              <span className="underline text-blue-900">
                <Link to='/create-an-account'>Create an account</Link>
              </span>
            </p>

            <div className="flex flex-row items-center justify-center my-10">
              <hr className="flex-grow border-gray-400" />
              <p className="mx-4">Or</p>
              <hr className="flex-grow border-gray-400" />
            </div>

            <div className="flex gap-3 justify-center">
              <a href="#">
                <FcGoogle className="text-4xl" />
              </a>
              <a href="#">
                <FaApple className="text-4xl" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
