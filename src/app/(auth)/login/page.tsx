'use client'

import { Suspense, useState } from 'react'
import { LoginForm } from "@/components/login-form"
import { useLayoutEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login')
  const { status } = useSession();

  const router = useRouter();

  useLayoutEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  const backgroundImage =
    activeTab === 'login'
      ? "url('/Vector-login-2.png'), url('/Vector-login-1.png')"
      : "url('/Vector-signup-2.png'), url('/Vector-signup-1.png')"

  return (
    <div
      className="bg-[#E5EDF9] flex min-h-svh flex-col items-center justify-center p-6 md:p-10 transition-all duration-300 ease-in-out"
      style={{
        backgroundImage,
        backgroundSize: "50%, 50%",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "center, center",
      }}
    >
      <div className="w-full max-w-sm md:max-w-3xl">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm activeTab={activeTab} onTabChange={setActiveTab} />
        </Suspense>
      </div>
    </div>
  )
}
