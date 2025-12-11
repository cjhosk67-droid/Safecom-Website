import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ClipboardCheck, 
  ShieldCheck, 
  FileCheck, 
  Users, 
  Wrench,
  CheckCircle2,
  ArrowRight
} from "lucide-react"

export const metadata = {
  title: "Height Safety Services | Inspections, Audits & Compliance",
  description: "Professional height safety services including inspections, fall arrest recertifications, compliance checking, consulting, and equipment installation."
}

export default function ServicesPage() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Height Safety Inspections & Audits",
      description: "Comprehensive inspections and audits of all height safety systems to ensure they meet Australian standards and workplace safety requirements.",
      features: [
        "Detailed visual and functional inspections",
        "Comprehensive audit reports with photos",
        "Identification of non-compliant systems",
        "Recommendations for repairs or upgrades",
        "Risk assessment documentation",
        "Compliance certification"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Annual Fall Arrest & Equipment Recertifications",
      description: "Professional recertification services for all fall arrest equipment and height safety systems to maintain compliance and ensure ongoing safety.",
      features: [
        "Annual recertification to AS/NZS standards",
        "Inspection of anchor points and static lines",
        "Testing of harnesses and lanyards",
        "Roof anchor point certification",
        "Permanent and temporary system testing",
        "Load testing and certification",
        "Updated compliance documentation"
      ]
    },
    {
      icon: FileCheck,
      title: "Compliance Checking & Verification",
      description: "Thorough compliance assessments ensuring all height safety systems meet current regulations, standards, and workplace health and safety requirements.",
      features: [
        "AS/NZS 1891 & 1657 compliance checks",
        "WHS legislation compliance review",
        "Building code compliance verification",
        "Documentation review and audit",
        "Compliance gap assessment and recommendations",
        "Compliance action plans"
      ]
    },
    {
      icon: Users,
      title: "Consulting & Advisory",
      description: "Expert, unbiased advice and recommendations for height safety projects, system improvements, and workplace safety planning.",
      features: [
        "Safety assessments",
        "Detailed scope of works preparation",
        "System design recommendations",
        "Cost-effective solution planning",
        "Project management support",
        "Ongoing safety advice"
      ]
    },
    {
      icon: Wrench,
      title: "Height Safety Equipment Installation",
      description: "Professional installation of height safety equipment by qualified technicians, ensuring all systems are correctly fitted and fully compliant.",
      features: [
        "Roof anchor point installation",
        "Guardrail and handrail systems",
        "Static line and horizontal lifelines",
        "Ladder safety systems",
        "Roof Access Installations",
        "HVAC Plant Platforms and Screens"
      ]
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
              Comprehensive Height Safety Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Professional height safety solutions tailored to your workplace needs. 
              From inspections and audits to installations and ongoing compliance support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="border-2 overflow-hidden">
                <div className="grid md:grid-cols-[300px_1fr]">
                  <div className="bg-primary/5 p-8 flex flex-col items-center justify-center text-center border-r">
                    <service.icon className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <div>
                    <CardHeader>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3">Service Includes:</h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Compliance with Australian Standards
            </h2>
            <p className="text-lg text-muted-foreground">
              All our services are delivered in accordance with current Australian and 
              New Zealand standards, ensuring your workplace meets all regulatory requirements.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 pt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AS/NZS 1657</CardTitle>
                  <CardDescription>
                    Fixed platforms, walkways, stairways and ladders
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AS/NZS 1891</CardTitle>
                  <CardDescription>
                    Industrial fall-arrest systems and devices
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AS/NZS ISO 22846</CardTitle>
                  <CardDescription>
                    Industrial rope access systems
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AS/NZS 5532</CardTitle>
                  <CardDescription>
                    Manufacturing and supply of structural anchors
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">WHS Regulations</CardTitle>
                  <CardDescription>
                    Work Health and Safety compliance
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Code of Practice</CardTitle>
                  <CardDescription>
                    Prevention of Falls
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Need Height Safety Services?
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                Contact us today to discuss your requirements and receive a detailed quote 
                for any of our professional height safety services.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}