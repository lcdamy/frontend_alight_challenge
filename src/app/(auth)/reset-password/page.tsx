'use client'

import { useState } from 'react'
import { ResetForm } from "@/components/reset-form"

export default function ResetPage() {

    const backgroundImage = "url('/Vector-login-2.png'), url('/Vector-login-1.png')";

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
                <ResetForm />
            </div>
        </div>
    )
}
