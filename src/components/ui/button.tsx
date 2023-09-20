import { cn } from "@/lib/utils/cn"
import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    const Comp = "button"
    return (
      <Comp
        className={cn("flex items-center justify-center font-extrabold px-2 py-1 border-2 border-l-white border-t-white border-r-black border-b-black bg-[#F3F8FB]/60", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
