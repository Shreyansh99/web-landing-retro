'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "relative overflow-hidden text-white shadow-md hover:shadow-lg bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_100%]",
        glow: "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary)/0.5)] hover:shadow-[0_0_25px_rgba(var(--primary)/0.65)] hover:bg-primary/90",
        'outline-glow': "border border-primary text-primary bg-transparent shadow-[0_0_10px_rgba(var(--primary)/0.15)] hover:shadow-[0_0_15px_rgba(var(--primary)/0.25)] hover:bg-primary/10",
        'glass': "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-md px-8 text-base",
        icon: "h-9 w-9",
      },
      animation: {
        none: "",
        subtle: "transition-all duration-300",
        bounce: "transition-all duration-300",
        scale: "transition-all duration-300",
        shine: "transition-all duration-300 overflow-hidden",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "subtle",
    },
  }
)

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant, size, animation, asChild = false, children, href, icon, iconPosition = 'left', ...props }, ref) => {

    const getAnimationProps = () => {
      switch (animation) {
        case 'bounce':
          return {
            whileHover: { y: -3 },
            whileTap: { y: 1 }
          }
        case 'scale':
          return {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.97 }
          }
        case 'shine':
          return {
            whileHover: {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }
            }
          }
        case 'subtle':
        default:
          return {
            whileHover: { y: -2 },
            whileTap: { y: 1 }
          }
      }
    }

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </>
    )

    if (href) {
      // We need to be careful with event handlers when using motion components
      // Only pass specific props that we know are safe

      return (
        <motion.a
          href={href}
          className={cn(buttonVariants({ variant, size, animation, className }))}
          {...getAnimationProps()}
        >
          {content}
        </motion.a>
      )
    }

    // Instead of spreading all props, we'll extract only the ones we need
    const {
      onClick,
      disabled,
      type,
      name,
      value,
      id,
      form,
      tabIndex,
      autoFocus,
      title
    } = props;

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        type={type}
        name={name}
        value={value}
        id={id}
        form={form}
        tabIndex={tabIndex}
        autoFocus={autoFocus}
        title={title}
        {...getAnimationProps()}
      >
        {content}
      </motion.button>
    )
  }
)
CustomButton.displayName = "CustomButton"

export { CustomButton, buttonVariants }
