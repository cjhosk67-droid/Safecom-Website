import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ShieldCheck, 
  ClipboardCheck, 
  FileCheck, 
  Users, 
  Wrench, 
  CheckCircle2,
  ArrowRight,
  Building2,
  Home as HomeIcon,
  HardHat,
  Ruler,
  Wind,
  GraduationCap,
  Landmark,
  ArrowUpFromLine,
  Footprints,
  Anchor,
  Layers,
  DoorOpen
} from "lucide-react"

export default function Home() {
  const consultingServices = [
    {
      icon: ClipboardCheck,
      title: "Inspections & Audits",
      description: "Comprehensive height safety system inspections and detailed audit reports ensuring full compliance with Australian standards."
    },
    {
      icon: ShieldCheck,
      title: "Fall Arrest Recertifications",
      description: "Annual recertification of all fall arrest equipment and systems to maintain safety compliance and extend equipment lifespan."
    },
    {
      icon: FileCheck,
      title: "Compliance Checking",
      description: "Thorough compliance assessments of all height safety systems against current AS/NZS standards and regulations."
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Expert advice, recommendations, and detailed scope of works for height safety projects and system improvements."
    },
    {
      icon: Ruler,
      title: "Design & Scope of Works",
      description: "Comprehensive design documentation and detailed scope of works for height safety system planning and implementation."
    }
  ]

  const installationServices = [
    {
      icon: Wrench,
      title: "Fall Arrest Systems",
      description: "Complete fall arrest system installation including static lines, rail systems, and retractable lifelines."
    },
    {
      icon: ShieldCheck,
      title: "Guardrails & Edge Protection",
      description: "Installation of permanent and temporary guardrail systems to prevent falls and ensure worker safety."
    },
    {
      icon: ArrowUpFromLine,
      title: "Roof Access Ladders",
      description: "Installation of compliant access ladders and safe roof access solutions for maintenance personnel."
    },
    {
      icon: DoorOpen,
      title: "Roof Access Solutions",
      description: "Installation of fold down ladders and roof hatches for safe and convenient roof access entry points."
    },
    {
      icon: Footprints,
      title: "Roof Walkway Systems",
      description: "Installation of walkway systems providing safe passage across rooftops and elevated areas."
    },
    {
      icon: Layers,
      title: "Plant Platforms",
      description: "Installation of safe plant platforms for accessing rooftop equipment, HVAC units, and machinery."
    },
    {
      icon: Anchor,
      title: "Rope Access Systems",
      description: "Professional rope access system installation for facade maintenance and window cleaning operations."
    }
  ]

  const industries = [
    {
      icon: Building2,
      title: "Facility Management",
      description: "Streamlined compliance management for commercial buildings, industrial sites, and multi-tenant properties."
    },
    {
      icon: HomeIcon,
      title: "Body Corporate",
      description: "Simplified height safety solutions for residential complexes, strata properties, and community facilities."
    },
    {
      icon: HardHat,
      title: "Commercial & Boutique Builders",
      description: "Expert consulting and installation services tailored for custom builds and specialty construction projects."
    },
    {
      icon: Ruler,
      title: "Architects",
      description: "Collaborative height safety design consultation and compliance verification for architectural projects."
    },
    {
      icon: Wind,
      title: "HVAC Industry",
      description: "Safe access solutions and fall protection systems for rooftop HVAC equipment maintenance and servicing."
    },
    {
      icon: GraduationCap,
      title: "Schools",
      description: "Comprehensive safety solutions for educational facilities, ensuring safe roof access and maintenance compliance."
    },
    {
      icon: Landmark,
      title: "Councils",
      description: "Municipal building compliance management and height safety solutions for public facilities and infrastructure."
    }
  ]

  const benefits = [
    "Fully licensed and insured professionals",
    "Compliance with AS/NZS 1891 & 4488 standards",
    "Comprehensive documentation and reporting",
    "Unbiased assessments",
    "Australia-wide service coverage",
    "Quick turnaround times"
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=2074&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-primary/40" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <Badge variant="outline" className="px-4 py-1 border-white/30 bg-white/10 text-white">
              Professional Height Safety Consulting
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl text-white">
              Height Safety Consultants and System Specialists
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Trusted by Facility Managers, Body Corporate, Architects, HVAC Professionals, Schools, Councils, Commercial and Boutique Builders. 
              Comprehensive inspections, audits, and compliance services to protect your workforce and assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="shadow-lg shadow-primary/20">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white border-none">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-white/95 dark:bg-black/90" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized height safety solutions tailored for your industry
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                <CardHeader>
                  <industry.icon className="h-12 w-12 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 bg-primary/5 mb-4">
              Consulting Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Height Safety Consulting & Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert consulting services to ensure your height safety systems 
              meet all compliance requirements and keep your team protected.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {consultingServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                <CardHeader>
                  <service.icon className="h-10 w-10 mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Installation */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-white/95 dark:bg-black/90" />
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 bg-primary/5 mb-4">
              Installation Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Equipment Installation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional installation of height safety equipment by qualified technicians, 
              ensuring all systems are correctly fitted and certified.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {installationServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                <CardHeader>
                  <service.icon className="h-10 w-10 mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="shadow-lg shadow-primary/20">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-muted/30 to-primary/5">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Why Choose Safecom Services?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Backed by years of hands-on experience in the height safety industry, 
                we bring deep technical knowledge and practical expertise to every project. 
                Our consulting delivers unbiased assessments that prioritize 
                your team's safety and your organization's compliance.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <Card className="border-2 border-primary/20 shadow-xl shadow-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Safety First, Always</CardTitle>
                  <CardDescription className="text-base">
                    Our commitment to excellence ensures your workplace meets and exceeds 
                    all safety standards.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <div className="font-semibold">Qualified Professionals</div>
                      <div className="text-sm text-muted-foreground">
                        All consultants are fully qualified and experienced
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <FileCheck className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <div className="font-semibold">Detailed Reporting</div>
                      <div className="text-sm text-muted-foreground">
                        Comprehensive documentation for all inspections
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-primary/50" />
        <div className="container relative z-10">
          <Card className="border-2 border-white/20 bg-white/10 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl mb-4 text-white">
                Ready to Ensure Your Workplace Safety?
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto text-white/90">
                Contact us today for a comprehensive height safety inspection or to discuss 
                your compliance requirements. We're here to help keep your team safe.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shadow-lg shadow-primary/20">
                <Link href="/contact">
                  Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white border-none">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}