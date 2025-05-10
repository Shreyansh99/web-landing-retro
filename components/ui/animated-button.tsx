'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        deepBlue: "bg-accent-deepBlue text-white shadow-md hover:bg-accent-navy",
        glowBlue: "bg-accent-blue text-white shadow-[0_0_15px_rgba(0,102,204,0.5)] hover:shadow-[0_0_25px_rgba(0,102,204,0.65)] hover:bg-accent-lightBlue",
        gradientBlue: "text-white shadow-md bg-gradient-to-r from-accent-navy via-accent-deepBlue to-accent-blue bg-[length:200%_100%]",
        neon: "border border-accent-blue text-accent-blue bg-transparent shadow-[0_0_10px_rgba(0,153,255,0.2)] hover:shadow-[0_0_15px_rgba(0,153,255,0.4)] hover:bg-accent-blue/10",
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
        pulse: "animate-pulse",
        shimmer: "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        ripple: "",
        bounce: "",
        glow: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
)

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, animation, asChild = false, children, href, icon, iconPosition = 'left', ...props }, ref) => {

    const getAnimationProps = () => {
      switch (animation) {
        case 'bounce':
          return {
            whileHover: { y: -3 },
            whileTap: { y: 1 }
          }
        case 'ripple':
          return {
            whileTap: {
              scale: 0.97,
              transition: { duration: 0.1 }
            },
            whileHover: {
              boxShadow: '0 0 8px rgba(0, 102, 204, 0.6)'
            }
          }
        case 'glow':
          return {
            whileHover: {
              boxShadow: [
                '0 0 5px rgba(0, 102, 204, 0.5)',
                '0 0 20px rgba(0, 102, 204, 0.5)',
                '0 0 5px rgba(0, 102, 204, 0.5)'
              ],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse' as const
              }
            }
          }
        case 'shimmer':
          return {}
        case 'pulse':
          return {}
        default:
          return {
            whileHover: { scale: 1.03 },
            whileTap: { scale: 0.97 }
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
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton, buttonVariants }
