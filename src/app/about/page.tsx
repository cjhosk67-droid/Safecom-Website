import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Award, 
  Users, 
  Target,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us | Height Safety Solutions",
  description: "Professional height safety consulting with expertise in inspections, audits, and compliance. Committed to workplace safety across Australia."
}

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Safety is our top priority. We never compromise on quality or thoroughness in our assessments and recommendations."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Our team maintains the highest professional standards with ongoing training and certification in the latest safety practices."
    },
    {
      icon: Users,
      title: "Unbiased Advice",
      description: "We provide unbiased consulting focused solely on your safety needs, not product sales."
    },
    {
      icon: Target,
      title: "Compliance Focus",
      description: "We ensure every system meets or exceeds Australian standards, keeping your workplace compliant and your team protected."
    }
  ]

  const qualifications = [
    "Height Safety Consultants",
    "Experts in AS/NZS 1657 & 1891",
    "WHS Legislation Experts",
    "Working at Heights Certification",
    "Accredited Kattsafe Installer"
  ]

  const experience = [
    "Industrial and commercial building inspections",
    "Warehouse and distribution center audits",
    "Retail and shopping center compliance",
    "Manufacturing facility assessments",
    "Construction site safety evaluations",
    "Government and infrastructure projects"
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">About Us</Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
              Professional Height Safety Consulting and System Specialists
            </h1>
            <p className="text-lg text-muted-foreground">
              With extensive experience in the height safety industry, we're committed to 
              protecting Australian workplaces through comprehensive inspections, expert 
              advice, and professional equipment installations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Our Mission</CardTitle>
              <CardDescription className="text-lg max-w-3xl mx-auto">
                To provide professional height safety consulting services that 
                protect workers, ensure compliance, and give business owners peace of mind. 
                We believe every worker deserves to return home safely every day.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Qualifications & Certifications
              </h2>
              <p className="text-muted-foreground mb-6">
                Our consultants hold all necessary certifications and undergo regular training 
                to stay current with the latest height safety standards and best practices.
              </p>
              <ul className="space-y-3">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Industry Experience
              </h2>
              <p className="text-muted-foreground mb-6">
                We've worked across diverse industries and project types, providing height 
                safety solutions for businesses of all sizes throughout Australia.
              </p>
              <ul className="space-y-3">
                {experience.map((exp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8">
              Our Commitment to Safety
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Unbiased</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    As consultants, we're not tied to any equipment manufacturers 
                    or suppliers. Our recommendations are based solely on your safety needs 
                    and compliance requirements, ensuring you receive honest, unbiased advice.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Detailed Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every inspection and audit includes comprehensive documentation with photos, 
                    detailed findings, and clear recommendations. You'll have complete records 
                    for compliance purposes and future reference.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Ongoing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our relationship doesn't end after the inspection. We're available to answer 
                    questions, provide guidance on implementing recommendations, and support your 
                    ongoing height safety program.
                  </p>
                </CardContent>
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
                Ready to Work Together?
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                Let's discuss how we can help ensure your workplace is safe, compliant, 
                and meets all height safety requirements.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}