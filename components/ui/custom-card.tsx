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
        gradient: "bg-gradient-to-br from-primary/20 to-secondary/20 border-white/10 text-white",
        outline: "bg-transparent border-primary/50 text-foreground",
        glow: "bg-card text-card-foreground shadow-[0_0_15px_rgba(var(--primary)/0.15)]",
        dark: "bg-muted text-muted-foreground",
      },
      hover: {
        none: "",
        lift: "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        glow: "transition-all duration-300 hover:shadow-[0_0_25px_rgba(var(--primary)/0.25)]",
        border: "transition-all duration-300 hover:border-primary/50",
        scale: "transition-all duration-300 hover:scale-[1.02]",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "none",
    },
  }
)

export interface CustomCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const CustomCard = React.forwardRef<
  HTMLDivElement,
  CustomCardProps
>(({ className, variant, hover, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(cardVariants({ variant, hover, className }))}
    {...props}
  />
))
CustomCard.displayName = "CustomCard"

// Motion variants of the card components
const MotionCard = motion(CustomCard)
const MotionCardHeader = motion(CardHeader)
const MotionCardTitle = motion(CardTitle)
const MotionCardDescription = motion(CardDescription)
const MotionCardContent = motion(CardContent)
const MotionCardFooter = motion(CardFooter)

export {
  CustomCard,
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
