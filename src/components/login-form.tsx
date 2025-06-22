'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

type LoginFormProps = {
  activeTab: 'login' | 'signup'
  onTabChange: (tab: 'login' | 'signup') => void
} & React.ComponentProps<"div">

export function LoginForm({ className, activeTab, onTabChange, ...props }: LoginFormProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key='login-page'
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className={cn("flex flex-col gap-6", className)}
      >
        <Card className="overflow-hidden px-4 py-8 sm:p-8 md:p-16 bg-[#E6EEF8] border-0 shadow-[0_10px_40px_10px_rgba(77,147,231,0.25)]">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <h1 className="text-lg md:text-xl font-semibold">HR Management</h1>
            </div>
          </CardHeader>
          <CardContent className="grid gap-8 md:grid-cols-2 p-0">
            <div className="hidden md:flex items-center justify-center md:border-r md:border-gray-200">
              <Image
                src="/login-signup-image.png"
                alt="Image"
                width={200}
                height={200}
                className="w-40 h-40 md:w-48 md:h-48"
              />
            </div>
            <div className="flex flex-col items-center w-full">
              <Tabs
                value={activeTab}
                onValueChange={(val) => onTabChange(val as 'login' | 'signup')}
                className="w-full max-w-sm bg-transparent"
              >
                <TabsList className="w-full flex bg-transparent">
                  <TabsTrigger value="login" className="flex-1 auth-tab relative cursor-pointer focus:border-none focus:outline-none focus:ring-none data-[state=active]:border-none data-[state=active]:text-[#4B93E7] data-[state=active]:bg-transparent data-[state=active]:shadow-none text-[#9bbff0] data-[state=active]:font-semibold  data-[state=active]:text-[40px] font-light text-[24px] bg-none ">
                    Login
                  </TabsTrigger>
                  <TabsTrigger value="signup" className="flex-1 auth-tab relative cursor-pointer focus:border-none focus:outline-none focus:ring-none  data-[state=active]:border-none data-[state=active]:text-[#4B93E7] data-[state=active]:bg-transparent data-[state=active]:shadow-none text-[#9bbff0] data-[state=active]:font-semibold  data-[state=active]:text-[40px] font-light  text-[24px] bg-none ">
                    Sign Up
                  </TabsTrigger>
                </TabsList>

                <div>

                  <TabsContent value="login" className="mt-[40px]">
                    <motion.form
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.4 }}
                      className="w-full"
                    >
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-3">
                          <div className="relative">
                            <input
                              type="email"
                              id="email_outlined"
                              className="block px-2 pb-2 pt-3 w-full text-xs text-gray-900 bg-[#DDEAFB] rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-[#082777]"
                              placeholder=""
                              required
                            />
                            <label
                              htmlFor="email_outlined"
                              className="absolute text-xs text-[#082777] dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-[#DDEAFB] dark:bg-[#DDEAFB] px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              username
                            </label>
                          </div>
                        </div>

                        <div className="relative">
                          <input
                            type="password"
                            id="password_outlined"
                            className="block px-2 pb-2 pt-3 w-full text-xs text-gray-900 bg-[#DDEAFB] rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-[#082777]"
                            placeholder=""
                            required
                          />
                          <label
                            htmlFor="password_outlined"
                            className="absolute text-xs text-[#082777] dark:text-gray-400 bg-[#DDEAFB] duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg- dark:bg-gray-900 px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          >
                            Password
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="remember" className="text-xs">
                            <input
                              type="checkbox"
                              id="remember"
                              className="leading-tight"
                            />
                            Remember me
                          </Label>
                          <a
                            href="#"
                            className="text-xs text-blue-600 hover:underline"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <Button type="submit" className="w-full cursor-pointer  bg-[rgba(247,172,37)] hover:bg-[rgba(250,178,37)] text-[#F3F8FF]">
                          Login
                        </Button>
                        <Button type="button" className="w-full flex items-center gap-2 bg-[#4B93E7] hover:bg-accent-foreground text-[#F3F8FF]">
                          <span>Login with Google</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                            <path
                              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                              fill="currentColor"
                            />
                          </svg>
                        </Button>
                      </div>
                    </motion.form>
                  </TabsContent>
                  <TabsContent value="signup" className="mt-[40px]">
                    <motion.form
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.4 }}
                      className="w-full"
                    >
                      <div className="flex flex-col gap-6">

                        <div className="relative">
                          <input
                            type="text"
                            id="signup-first-name"
                            className="block px-2 pb-2 pt-3 w-full text-xs text-gray-900 bg-[#DDEAFB] rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-[#082777]"
                            placeholder=""
                            required
                          />
                          <label
                            htmlFor="signup-first-name"
                            className="absolute text-xs text-[#082777] dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-[#DDEAFB] dark:bg-[#DDEAFB] px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          >
                            First Name
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            id="signup-last-name"
                            className="block px-2 pb-2 pt-3 w-full text-xs text-gray-900 bg-[#DDEAFB] rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-[#082777]"
                            placeholder=""
                            required
                          />
                          <label
                            htmlFor="signup-last-name"
                            className="absolute text-xs text-[#082777] dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-[#DDEAFB] dark:bg-[#DDEAFB] px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          >
                            Last Name
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="email"
                            id="signup-email"
                            className="block px-2 pb-2 pt-3 w-full text-xs text-gray-900 bg-[#DDEAFB] rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-[#082777]"
                            placeholder=""
                            required
                          />
                          <label
                            htmlFor="signup-email"
                            className="absolute text-xs text-[#082777] dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-[#DDEAFB] dark:bg-[#DDEAFB] px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          >
                            Email
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="password"
                            id="signup-password"
                            className="block px-2 pb-2 pt-3 w-full text-xs text-gray-900 bg-[#DDEAFB] rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-[#082777]"
                            placeholder=""
                            required
                          />
                          <label
                            htmlFor="signup-password"
                            className="absolute text-xs text-[#082777] dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-[#DDEAFB] dark:bg-[#DDEAFB] px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          >
                            Password
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="password"
                            id="signup-confirm-password"
                            className="block px-2 pb-2 pt-3 w-full text-xs text-gray-900 bg-[#DDEAFB] rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer placeholder:text-[#082777]"
                            placeholder=""
                            required
                          />
                          <label
                            htmlFor="signup-confirm-password"
                            className="absolute text-xs text-[#082777] dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-2 z-10 origin-[0] bg-[#DDEAFB] dark:bg-[#DDEAFB] px-1 peer-focus:px-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          >
                            Confirm Password
                          </label>
                        </div>
                        <Button type="submit" className="w-full cursor-pointer bg-[rgba(247,172,37)] hover:bg-[rgba(250,178,37)]">
                          Sign Up
                        </Button>
                        <Button type="button" className="w-full flex items-center gap-2 bg-[#4B93E7] hover:bg-accent-foreground text-[#F3F8FF]">
                          <span>Sign Up with Google</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                            <path
                              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                              fill="currentColor"
                            />
                          </svg>
                        </Button>
                      </div>
                    </motion.form>
                  </TabsContent>

                </div>
              </Tabs>
            </div>
          </CardContent>
        </Card>
        <div className="text-center text-xs space-y-1 mt-4 text-[#4B93E7]">
          <div>
            <a href="#" className="hover:text-primary underline underline-offset-4 transition-colors">
              Release Notes
            </a>
          </div>
          <div>Version 20.22.11</div>
          <div>© 2023–24 HRM and Services</div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
