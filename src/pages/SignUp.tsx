
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React, { useState } from "react";
import { format } from "date-fns"



const SignUp = () => {
  const [date, setDate] = React.useState<Date>()

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='login-bg bg-cover bg-bottom flex items-center justify-center px-4 py-10 md:px-0'>
        <Card className="w-full max-w-lg p-4">
          <CardHeader className="text-center text-sm md:text-2xl font-bold">
            <p>Welcome to <span className="cursor-pointer text-4xl font-bold text-pink-800"><a href="/">
              BookStore
            </a></span></p>
            <p>Create Your Account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row md:flex-row gap-4">
                <div>
                  <label>First Name *</label>
                  <Input placeholder="Enter your first name" type="text" />
                </div>
                <div>
                  <label>Last Name *</label>
                  <Input placeholder="Enter your last name" type="text" />
                </div>
              </div>
              <div>
                <label className="mt-8">Email *</label>
                <Input placeholder="Enter your email" type="text" />
              </div>
              <div className="mt-4">
                <label>Mobile Number *</label>
                <Input placeholder="Enter your mobile number" type="text" />
              </div>
              <div className="mt-4">
                <label>Password *</label>
                <Input placeholder="Enter your password" type="password" />
              </div>
              <div className="mt-4 ">
                <label>Date of Birth *</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

              </div>
              <div className="mt-4">
                <label>Gender *</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="transgender">Transgender</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-row md:flex-row gap-4 mt-4">
                <div>
                  <label>Address Line 1 *</label>
                  <Input placeholder="Enter your address" type="text" />
                </div>
                <div>
                  <label>Address Line 2 <span className="text-gray-400">(optional)</span></label>
                  <Input placeholder="Enter your address" type="text" />
                </div>
              </div>
              <div className="flex flex-row md:flex-row gap-4 mt-4">
                <div>
                  <label>City *</label>
                  <Input placeholder="Enter your city" type="text" />
                </div>
                <div>
                  <label>State *</label>
                  <Input placeholder="Enter your state" type="text" />
                </div>
              </div>
              <div className="flex flex-row md:flex-row gap-4 mt-4">
                <div>
                  <label>Country *</label>
                  <Input placeholder="Enter your country" type="text" />
                </div>
                <div>
                  <label>Pincode *</label>
                  <Input placeholder="Enter your pincode" type="text" />
                </div>
              </div>
              <Button type="submit" className="w-full mt-4">Submit</Button>
            </form>
            <p className="mt-2 text-sm">
              Already have an account?{" "}
              <span className="underline text-blue-900">
                <Link to='/login'>Login</Link>
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default SignUp