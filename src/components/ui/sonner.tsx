"use client"

import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      position="top-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-zinc-900 group-[.toaster]:text-white group-[.toaster]:border group-[.toaster]:border-zinc-700 group-[.toaster]:shadow-xl group-[.toaster]:backdrop-blur-sm",
          description: "group-[.toast]:text-zinc-400",
          actionButton:
            "group-[.toast]:bg-white group-[.toast]:text-black group-[.toast]:hover:bg-zinc-200",
          cancelButton:
            "group-[.toast]:bg-zinc-800 group-[.toast]:text-zinc-300 group-[.toast]:hover:bg-zinc-700",
          success: "group-[.toaster]:border-custom-green group-[.toaster]:bg-custom-green/10",
          error: "group-[.toaster]:border-red-500 group-[.toaster]:bg-red-500/10",
          warning: "group-[.toaster]:border-custom-orange group-[.toaster]:bg-custom-orange/10",
          info: "group-[.toaster]:border-custom-cyan group-[.toaster]:bg-custom-cyan/10",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
