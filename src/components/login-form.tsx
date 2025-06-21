import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image';


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-16">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={16}
              height={16}
            />
            <h1>HR Management</h1>
          </div>
        </CardHeader>
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="flex items-center justify-center md:border-r md:border-gray-200">
            <Image
              src="/login-signup-image.png"
              alt="Image"
              width={160}
              height={160}
            />
          </div>

          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form className="p-6 md:p-8">
                <div className="flex flex-col gap-6">

                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" type="button" className="w-full">
                    <span>Login with Google</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                    <div className="grid gap-3">
                    <Label htmlFor="signup-first-name">First Name</Label>
                    <Input
                      id="signup-first-name"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="signup-last-name">Last Name</Label>
                    <Input
                      id="signup-last-name"
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                    </div>

                  <div className="grid gap-3">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" required />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                    <Input id="signup-confirm-password" type="password" required />
                  </div>

                  <Button type="submit" className="w-full">
                    Sign Up
                  </Button>
                  <Button variant="outline" type="button" className="w-full">
                    <span>Sign Up with Google</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>


        </CardContent>
      </Card>
      <div className="text-center text-xs text-muted-foreground space-y-1 mt-4">
        <div>
          <a
            href="#"
            className="hover:text-primary underline underline-offset-4 transition-colors"
          >
            Release Notes
          </a>
        </div>
        <div>Version 20.22.11</div>
        <div>© 2023–24 HRM and Services</div>
      </div>
    </div>
  )
}
