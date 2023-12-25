import { cn } from "@/lib/utils"

const Button = ({ className, children, disabled, type = "button" }) => {
  return (
    <button
      className={cn(
        "w-auto rounded-full bg-black border-tansparent px-5 py-2 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition",
        className
      )}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
