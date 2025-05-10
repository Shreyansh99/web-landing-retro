'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs'
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CustomButton } from '@/components/ui/custom-button'
import { 
  CustomCard, 
  MotionCard, 
  MotionCardHeader, 
  MotionCardTitle, 
  MotionCardDescription, 
  MotionCardContent, 
  MotionCardFooter 
} from '@/components/ui/custom-card'
import { ScrollReveal } from '@/components/animations'
import { 
  ArrowRight, 
  ChevronDown, 
  Code, 
  Layers, 
  Lightbulb, 
  Palette, 
  Settings, 
  Sparkles, 
  Zap 
} from 'lucide-react'

export default function ShadcnShowcase() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  return (
    <section className="py-24 bg-dark-200 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/10 blur-[100px] rounded-full"></div>
      
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Modern UI <span className="text-gradient">Components</span></h2>
            <p className="text-xl text-gray-300">
              Explore our collection of beautiful, accessible, and customizable UI components.
            </p>
          </div>
        </ScrollReveal>
        
        <Tabs defaultValue="buttons" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="tooltips">Tooltips & Hovers</TabsTrigger>
            <TabsTrigger value="dialogs">Dialogs & Menus</TabsTrigger>
          </TabsList>
          
          {/* Buttons Tab */}
          <TabsContent value="buttons" className="space-y-8">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MotionCard 
                  variant="glass" 
                  hover="lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MotionCardHeader>
                    <MotionCardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Animated Buttons
                    </MotionCardTitle>
                    <MotionCardDescription>
                      Buttons with smooth animations and interactions.
                    </MotionCardDescription>
                  </MotionCardHeader>
                  <MotionCardContent className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <CustomButton 
                        variant="default" 
                        animation="scale"
                        icon={<Zap className="h-4 w-4" />}
                      >
                        Scale Effect
                      </CustomButton>
                      
                      <CustomButton 
                        variant="secondary" 
                        animation="bounce"
                      >
                        Bounce Effect
                      </CustomButton>
                      
                      <CustomButton 
                        variant="outline" 
                        animation="subtle"
                      >
                        Subtle Effect
                      </CustomButton>
                    </div>
                  </MotionCardContent>
                </MotionCard>
                
                <MotionCard 
                  variant="glass" 
                  hover="lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <MotionCardHeader>
                    <MotionCardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5 text-accent" />
                      Styled Buttons
                    </MotionCardTitle>
                    <MotionCardDescription>
                      Buttons with different styles and variants.
                    </MotionCardDescription>
                  </MotionCardHeader>
                  <MotionCardContent className="space-y-4">
                    <div className="flex flex-wrap gap-4">
                      <CustomButton 
                        variant="gradient" 
                        animation="shine"
                        size="lg"
                      >
                        Gradient Button
                      </CustomButton>
                      
                      <CustomButton 
                        variant="glow" 
                        size="lg"
                      >
                        Glow Effect
                      </CustomButton>
                      
                      <CustomButton 
                        variant="glass" 
                        size="lg"
                        icon={<ArrowRight className="h-4 w-4" />}
                        iconPosition="right"
                      >
                        Glass Effect
                      </CustomButton>
                    </div>
                  </MotionCardContent>
                </MotionCard>
              </div>
            </ScrollReveal>
          </TabsContent>
          
          {/* Cards Tab */}
          <TabsContent value="cards" className="space-y-8">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MotionCard 
                  variant="default" 
                  hover="lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MotionCardHeader>
                    <MotionCardTitle>Default Card</MotionCardTitle>
                    <MotionCardDescription>
                      Standard card with hover lift effect
                    </MotionCardDescription>
                  </MotionCardHeader>
                  <MotionCardContent>
                    <p>This card uses the default styling with a subtle lift animation on hover.</p>
                  </MotionCardContent>
                  <MotionCardFooter>
                    <CustomButton variant="default" size="sm">Learn More</CustomButton>
                  </MotionCardFooter>
                </MotionCard>
                
                <MotionCard 
                  variant="gradient" 
                  hover="glow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <MotionCardHeader>
                    <MotionCardTitle>Gradient Card</MotionCardTitle>
                    <MotionCardDescription>
                      Gradient background with glow effect
                    </MotionCardDescription>
                  </MotionCardHeader>
                  <MotionCardContent>
                    <p>This card features a subtle gradient background and glows on hover.</p>
                  </MotionCardContent>
                  <MotionCardFooter>
                    <CustomButton variant="glass" size="sm">Explore</CustomButton>
                  </MotionCardFooter>
                </MotionCard>
                
                <MotionCard 
                  variant="glass" 
                  hover="scale"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <MotionCardHeader>
                    <MotionCardTitle>Glass Card</MotionCardTitle>
                    <MotionCardDescription>
                      Glassmorphism with scale effect
                    </MotionCardDescription>
                  </MotionCardHeader>
                  <MotionCardContent>
                    <p>This card has a glass-like appearance and scales slightly on hover.</p>
                  </MotionCardContent>
                  <MotionCardFooter>
                    <CustomButton variant="outline-glow" size="sm">View Details</CustomButton>
                  </MotionCardFooter>
                </MotionCard>
              </div>
            </ScrollReveal>
          </TabsContent>
          
          {/* Tooltips Tab */}
          <TabsContent value="tooltips" className="space-y-8">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MotionCard 
                  variant="glass" 
                  hover="lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MotionCardHeader>
                    <MotionCardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Tooltips
                    </MotionCardTitle>
                    <MotionCardDescription>
                      Informative tooltips for enhanced user experience.
                    </MotionCardDescription>
                  </MotionCardHeader>
                  <MotionCardContent>
                    <div className="flex flex-wrap gap-6 justify-center py-8">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <CustomButton variant="outline">Hover Me</CustomButton>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>This is a helpful tooltip!</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <CustomButton variant="secondary" icon={<Code className="h-4 w-4" />}>
                              With Icon
                            </CustomButton>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Tooltips can contain rich content</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </MotionCardContent>
                </MotionCard>
                
                <MotionCard 
                  variant="glass" 
                  hover="lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <MotionCardHeader>
                    <MotionCardTitle className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-accent" />
                      Hover Cards
                    </MotionCardTitle>
                    <MotionCardDescription>
                      Rich hover cards for detailed information.
                    </MotionCardDescription>
                  </MotionCardHeader>
                  <MotionCardContent>
                    <div className="flex flex-wrap gap-6 justify-center py-8">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <CustomButton variant="default">User Profile</CustomButton>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="flex justify-between space-x-4">
                            <div className="space-y-1">
                              <h4 className="text-sm font-semibold">John Doe</h4>
                              <p className="text-sm">
                                Senior Developer with 5+ years of experience in React and Next.js
                              </p>
                              <div className="flex items-center pt-2">
                                <CustomButton variant="outline" size="sm">
                                  View Profile
                                </CustomButton>
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </MotionCardContent>
                </MotionCard>
              </div>
            </ScrollReveal>
          </TabsContent>
          
          {/* Dialogs Tab */}
          <TabsContent value="dialogs" className="space-y-8">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MotionCard 
                  variant="glass" 
                  hover="lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <MotionCardHeader>
                    <MotionCardTitle className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-primary" />
                      Dialog
                    </MotionCardTitle>
                    <MotionCardDescription>
                      Modal dialogs for important interactions.
                    </MotionCardDescription>
                  </MotionCardHeader>
                  <MotionCardContent>
                    <div className="flex flex-wrap gap-6 justify-center py-8">
                      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                          <CustomButton variant="default">Open Dialog</CustomButton>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Contact Us</DialogTitle>
                            <DialogDescription>
                              Fill out this form to get in touch with our team.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <p className="text-sm text-muted-foreground">
                              This is an example dialog component that can be used for forms, alerts, or confirmations.
                            </p>
                          </div>
                          <div className="flex justify-end">
                            <CustomButton variant="outline" size="sm" onClick={() => setIsDialogOpen(false)}>
                              Close
                            </CustomButton>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </MotionCardContent>
                </MotionCard>
                
                <MotionCard 
                  variant="glass" 
                  hover="lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <MotionCardHeader>
                    <MotionCardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-accent" />
                      Dropdown Menu
                    </MotionCardTitle>
                    <MotionCardDescription>
                      Contextual dropdown menus for actions.
                    </MotionCardDescription>
                  </MotionCardHeader>
                  <MotionCardContent>
                    <div className="flex flex-wrap gap-6 justify-center py-8">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <CustomButton variant="secondary">
                            Options <ChevronDown className="ml-2 h-4 w-4" />
                          </CustomButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>New Project</DropdownMenuItem>
                          <DropdownMenuItem>Settings</DropdownMenuItem>
                          <DropdownMenuItem>Profile</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </MotionCardContent>
                </MotionCard>
              </div>
            </ScrollReveal>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16">
          <ScrollReveal>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>What are Shadcn UI components?</AccordionTrigger>
                <AccordionContent>
                  Shadcn UI provides a collection of accessible, customizable, and reusable components built with Radix UI and Tailwind CSS. They're not a component library but rather a set of components you can copy and paste into your projects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Are these components customizable?</AccordionTrigger>
                <AccordionContent>
                  Yes, all components are fully customizable. You can modify their appearance, behavior, and functionality to match your design system. The components are built with Tailwind CSS, making it easy to adjust their styling.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are these components accessible?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! Accessibility is a core focus. The components are built on top of Radix UI primitives, which provide robust accessibility features like keyboard navigation, focus management, and ARIA attributes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
