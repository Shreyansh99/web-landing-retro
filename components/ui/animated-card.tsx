'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const cardVariants = cva(
  "rounded-lg border shadow",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        glass: "bg-black/20 backdrop-blur-md border-white/10 text-white",
        gradient: "bg-gradient-to-br from-accent-navy/50 to-accent-deepBlue/30 border-white/10 text-white",
        outline: "bg-transparent border-accent-blue/50 text-foreground",
        glow: "bg-card text-card-foreground shadow-[0_0_15px_rgba(0,102,204,0.15)]",
        dark: "bg-muted text-muted-foreground",
        deepBlue: "bg-accent-navy/80 text-white border-accent-blue/30",
      },
      hover: {
        none: "",
        lift: "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        glow: "transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,102,204,0.25)]",
        border: "transition-all duration-300 hover:border-accent-blue/50",
        scale: "transition-all duration-300 hover:scale-[1.02]",
        shine: "before:absolute before:inset-0 before:-translate-x-full hover:before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent overflow-hidden relative",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "none",
    },
  }
)

export interface AnimatedCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const AnimatedCard = React.forwardRef<
  HTMLDivElement,
  AnimatedCardProps
>(({ className, variant, hover, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(cardVariants({ variant, hover, className }))}
    {...props}
  />
))
AnimatedCard.displayName = "AnimatedCard"

// Motion variants of the card components
const MotionCard = motion(AnimatedCard)
const MotionCardHeader = motion(CardHeader)
const MotionCardTitle = motion(CardTitle)
const MotionCardDescription = motion(CardDescription)
const MotionCardContent = motion(CardContent)
const MotionCardFooter = motion(CardFooter)

export {
  AnimatedCard,
  MotionCard,
  MotionCardHeader,
  MotionCardTitle,
  MotionCardDescription,
  MotionCardContent,
  MotionCardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
}
