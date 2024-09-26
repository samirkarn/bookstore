import React from 'react'
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

const SellerLogin = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='relative bg-sell h-screen bg-center bg-cover flex justify-center items-center px-4 md:px-0'>
        <div className='absolute inset-0 bg-black opacity-80'></div>
        <Card className="relative z-50 w-full max-w-lg p-4">
          <CardHeader className="text-center text-sm md:text-2xl font-bold">
            <p className="cursor-pointer text-4xl font-bold text-pink-800 mb-6"><a href="/">
              BookStore
            </a></p>
            <p>Welcome Back, Seller!</p>
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
              <Link to="/dashboard">
                <Button type="submit" className="w-full mt-4">Submit</Button>
              </Link>
            </form>
            <p className="mt-2 text-sm">
              Don't have an account?{" "}
              <span className="underline text-blue-900">
                <Link to='/seller-signup'>Create an account</Link>
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
  )
}

export default SellerLogin