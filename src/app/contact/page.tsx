"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from "lucide-react"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours."
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  const contactDetails = [
    { icon: Phone, label: "Phone", values: ["0499 399 621"] },
    { icon: Mail, label: "Email", values: ["clayton@safecomservices.com.au"] },
    { icon: MapPin, label: "Service Area", values: ["Australia Wide"] },
    { icon: Clock, label: "Business Hours", values: ["Mon - Fri: 7:00 AM - 5:00 PM", "Sat: By appointment"] }
  ]

  const expectations = [
    "We'll respond within 24 hours",
    "Schedule a consultation or site visit",
    "Receive a detailed quote",
    "Book your service at your convenience"
  ]

  return (
    <div className="flex flex-col">
      <Toaster />
      
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 bg-primary/5">
              Contact Us
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Let's Discuss Your Height Safety Needs
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to ensure your workplace is safe and compliant? Get in touch for 
              a consultation, quote, or to discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Card className="border-2 border-primary/20 shadow-xl shadow-primary/10">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          required 
                          placeholder="John" 
                          className="border-muted-foreground/20 focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          required 
                          placeholder="Smith" 
                          className="border-muted-foreground/20 focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          placeholder="john@company.com"
                          className="border-muted-foreground/20 focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          required 
                          placeholder="04XX XXX XXX"
                          className="border-muted-foreground/20 focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company" 
                        placeholder="ABC Construction"
                        className="border-muted-foreground/20 focus-visible:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required *</Label>
                      <select
                        id="service"
                        required
                        className="flex h-10 w-full rounded-md border border-muted-foreground/20 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service...</option>
                        <option value="inspection">Inspection & Audit</option>
                        <option value="recertification">Fall Arrest Recertification</option>
                        <option value="compliance">Compliance Checking</option>
                        <option value="consulting">Consulting</option>
                        <option value="installation">Equipment Installation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        required
                        placeholder="Please provide details about your requirements..."
                        className="min-h-[120px] border-muted-foreground/20 focus-visible:ring-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting} 
                      className="w-full shadow-lg shadow-primary/20"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {contactDetails.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{item.label}</div>
                        {item.values.map((value, i) => (
                          <div key={i} className="text-sm text-muted-foreground">{value}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {expectations.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-background to-primary/5 shadow-xl shadow-primary/10">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl md:text-3xl mb-2">
                Prefer to Speak Directly?
              </CardTitle>
              <CardDescription className="text-base max-w-xl mx-auto">
                Give us a call during business hours for immediate assistance 
                with your height safety requirements.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button size="lg" variant="outline" className="border-primary/30" asChild>
                <a href="tel:0499399621">
                  <Phone className="mr-2 h-4 w-4" /> Call 0499 399 621
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}