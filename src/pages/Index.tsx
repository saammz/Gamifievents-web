
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AnimatedButton from '@/components/AnimatedButton';
import FeatureCard from '@/components/FeatureCard';
import Testimonial from '@/components/Testimonial';
import CounterAnimation from '@/components/CounterAnimation';
import FloatingDevice from '@/components/FloatingDevice';
import setupScrollObserver from '@/utils/scrollObserver';
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Trophy, 
  Users, 
  Target, 
  Gift, 
  Zap,
  Award,
  Calendar,
  Layers,
  ShieldCheck,
  Check
} from 'lucide-react';

// Conference/event images
const eventImage = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=800&fit=crop&crop=faces,center&q=90";

// Custom client logos
const clientLogos = [
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNNDAgMjVjMC04LjI4NCA2LjcxNi0xNSAxNS0xNSA4LjI4NCAwIDE1IDYuNzE2IDE1IDE1cy02LjcxNiAxNS0xNSAxNS0xNS02LjcxNi0xNS0xNXoiLz48cGF0aCBkPSJNNzAgMTVoMTVNNzAgMjVoMTVNNzAgMzVoMTVNMTAgMTVoMTVNMTAgMjVoMTVNMTAgMzVoMTVNMTIwIDI1YzAtOC4yODQgNi43MTYtMTUgMTUtMTUgOC4yODQgMCAxNSA2LjcxNiAxNSAxNXMtNi43MTYgMTUtMTUgMTUtMTUtNi43MTYtMTUtMTV6Ii8+PHBhdGggZD0iTTE1MCAxNWgxNU0xNTAgMjVoMTVNMTUwIDM1aDE1Ii8+PC9zdmc+",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgNTAiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0zNSAyNWMwLTguMjg0IDYuNzE2LTE1IDE1LTE1IDguMjg0IDAgMTUgNi43MTYgMTUgMTVzLTYuNzE2IDE1LTE1IDE1LTE1LTYuNzE2LTE1LTE1eiIgZmlsbD0iIzliODdmNSIvPjxwYXRoIGQ9Ik03NSAxNWgyME03NSAyNWgyME03NSAzNWgyME0xMDUgMTBoNXYzMGgtNXpNMTIwIDE1aDIwTTEyMCAyNWgyME0xMjAgMzVoMjBNMTUwIDEwaDV2MzBoLTV6IiBzdHJva2U9IiM3RTY5QUIiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgNTAiIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjE1IiBmaWxsPSIjMDNEQUM1Ii8+PHBhdGggZD0iTTUwIDI1aDMwTTg1IDEwdjMwTTEwMCAxMGMwIDAgMTUgNSAxNSAxNXMtMTUgMTUtMTUgMTUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTEzMCAxMGMwIDAgMTUgNSAxNSAxNXMtMTUgMTUtMTUgMTVNMTUwIDE1aDIwdjIwaC0yMHoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgNTAiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0xMCAxMGg0MHYzMEgxMHoiIHN0cm9rZT0iIzlCODdGNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTMwIDE1djIwTTIwIDE1djIwTTYwIDEwaDIwdjMwSDYwek05MCAxMGgyMHYzMEg5MHpNMTIwIDEwaDIwdjMwSDEyMHpNMTUwIDEwaDIwdjMwSDE1MHoiIHN0cm9rZT0iIzlCODdGNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+",
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgNTAiIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjE1IiBzdHJva2U9IiNGRkIzMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik01MCAxMGg2MHYzMEg1MHoiIGZpbGw9IiNGRkYiIHN0cm9rZT0iI0ZGQjMwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTU1IDE1aDUwdjVINTV6TTU1IDI1aDUwdjVINTV6TTU1IDM1aDUwdjVINTV6TTEyMCAxMGg2MHYzMGgtNjB6IiBmaWxsPSIjRkZGIiBzdHJva2U9IiNGRkIzMDAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xNTAgMjVjMC04LjI4NCA2LjcxNi0xNSAxNS0xNXMxNSA2LjcxNiAxNSAxNS02LjcxNiAxNS0xNSAxNS0xNS02LjcxNi0xNS0xNXoiIGZpbGw9IiNGRkIzMDAiLz48L3N2Zz4="
];

// Feature data
const features = [
  {
    icon: Trophy,
    title: "Points & Achievements",
    description: "Create custom point systems and achievement badges that reward meaningful engagement at your events."
  },
  {
    icon: Users,
    title: "Social Challenges",
    description: "Encourage networking with team-based challenges and collaborative missions for attendees."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track participation metrics and engagement data in real-time to optimize your event on the fly."
  },
  {
    icon: Gift,
    title: "Custom Rewards",
    description: "Offer digital or physical rewards that attendees can unlock by participating in your event activities."
  },
  {
    icon: Target,
    title: "Personalized Experience",
    description: "Deliver personalized challenges based on attendee profiles and previous interactions."
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Gather valuable feedback through gamified surveys with higher completion rates."
  }
];

// Testimonial data
const testimonials = [
  {
    quote: "Gamifievents transformed our annual conference. Attendee engagement increased by 45% and our post-event survey completion rate jumped to 78%.",
    author: "Sarah Johnson",
    role: "Event Director",
    company: "TechConf Global"
  },
  {
    quote: "The analytics dashboard alone is worth the investment. We finally have data-driven insights on which sessions and activities truly engage our audience.",
    author: "Michael Chen",
    role: "VP of Marketing",
    company: "Innovate Summit"
  },
  {
    quote: "Our sponsors love the increased visibility and meaningful interactions they get through the platform's gamified sponsor challenges.",
    author: "Elena Rodriguez",
    role: "Partnerships Lead",
    company: "Industry Connect"
  }
];

// Pricing plans
const pricingPlans = [
  {
    name: "Basic",
    price: 199,
    period: "/month",
    description: "Perfect for small events and meetups",
    features: [
      "Up to 500 attendees",
      "Basic point system",
      "Standard challenges",
      "Email support",
      "Basic analytics"
    ],
    cta: "Get Started",
    highlight: false
  },
  {
    name: "Pro",
    price: 499,
    period: "/month",
    description: "Ideal for conferences and large events",
    features: [
      "Up to 2,500 attendees",
      "Advanced point system",
      "Custom challenges",
      "Sponsor integration",
      "Advanced analytics",
      "Priority support"
    ],
    cta: "Get Started",
    highlight: true
  },
  {
    name: "Enterprise",
    price: null,
    customPrice: "Custom",
    period: "",
    description: "For large-scale events and event series",
    features: [
      "Unlimited attendees",
      "White-label solution",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 support"
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const Index = () => {
  useEffect(() => {
    const observer = setupScrollObserver();
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-purple/10 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-teal/10 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div 
                className="inline-block mb-4 opacity-0"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <span className="badge">Gamification Platform</span>
              </div>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Turn Attendees into <span className="text-gradient">Active Participants</span>
              </h1>
              <p 
                className="text-lg text-foreground/80 mb-8 max-w-lg mx-auto md:mx-0 opacity-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Boost engagement by <span className="font-semibold">40%</span> with gamification that delivers measurable ROI for your events.
              </p>
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <AnimatedButton variant="primary" size="large" href="#cta">
                  Get Started
                </AnimatedButton>
                <AnimatedButton variant="secondary" size="large" href="#features">
                  See Features
                </AnimatedButton>
              </div>
            </div>
            
            <div 
              className="relative rounded-xl overflow-hidden shadow-2xl opacity-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img 
                src={eventImage} 
                alt="People at a conference event" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-white">
                  <div className="bg-purple/90 p-2 rounded-full">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">Engage. Connect. Reward.</span>
                </div>
              </div>
              
              {/* Animation elements */}
              <div className="absolute top-[10%] left-[15%] bg-amber/80 text-white p-2 rounded-full shadow-lg animate-pulse-slow">
                <Trophy size={20} />
              </div>
              <div className="absolute bottom-[20%] right-[10%] bg-teal/80 text-white p-2 rounded-full shadow-lg animate-pulse-slow" style={{ animationDelay: '1s' }}>
                <Gift size={20} />
              </div>
              <div className="absolute top-[45%] left-[30%] bg-purple/80 text-white p-2 rounded-full shadow-lg animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
                <Zap size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-10 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div 
              className="opacity-0"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <p className="text-muted-foreground text-sm mb-1">Average Engagement Boost</p>
              <p className="text-3xl md:text-4xl font-bold text-purple">
                <CounterAnimation end={42} suffix="%" />
              </p>
            </div>
            <div 
              className="opacity-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="text-muted-foreground text-sm mb-1">Events Powered</p>
              <p className="text-3xl md:text-4xl font-bold text-purple">
                <CounterAnimation end={1250} suffix="+" />
              </p>
            </div>
            <div 
              className="opacity-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-muted-foreground text-sm mb-1">Active Users</p>
              <p className="text-3xl md:text-4xl font-bold text-purple">
                <CounterAnimation end={500} suffix="K+" />
              </p>
            </div>
            <div 
              className="opacity-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-muted-foreground text-sm mb-1">ROI Increase</p>
              <p className="text-3xl md:text-4xl font-bold text-purple">
                <CounterAnimation end={38} suffix="%" />
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Value Proposition Grid */}
      <section id="features" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div 
              className="inline-block mb-4 opacity-0"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <span className="badge">Why Gamifievents</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Transform Your <span className="text-gradient">Event Experience</span>
            </h2>
            <p 
              className="text-lg text-foreground/80 max-w-2xl mx-auto opacity-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Create memorable experiences that keep attendees engaged, while collecting valuable data to optimize and prove ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Feature Showcase */}
      <section id="use-cases" className="section bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div 
              className="inline-block mb-4 opacity-0"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <span className="badge">Features</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Powerful Tools for <span className="text-gradient">Event Organizers</span>
            </h2>
            <p 
              className="text-lg text-foreground/80 max-w-2xl mx-auto opacity-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Everything you need to design, launch, and measure engaging gamified experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="opacity-0"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <div className="glass-card p-8 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop&crop=faces,center&q=90"
                  alt="Dashboard Analytics" 
                  className="w-full h-auto rounded-md shadow-md" 
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md shadow-lg p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <TrendingUp className="h-4 w-4 text-purple" />
                    <span>Engagement up 40%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ul className="space-y-6">
                <li 
                  className="flex gap-4 opacity-0"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div className="mt-1 rounded-full p-2 bg-purple/10 text-purple">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
                    <p className="text-foreground/70">
                      Monitor participation, identify engagement trends, and measure ROI with comprehensive dashboards and reports.
                    </p>
                  </div>
                </li>
                <li 
                  className="flex gap-4 opacity-0"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="mt-1 rounded-full p-2 bg-purple/10 text-purple">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customizable Challenges</h3>
                    <p className="text-foreground/70">
                      Create custom challenges, quests, and missions that align with your event goals and audience preferences.
                    </p>
                  </div>
                </li>
                <li 
                  className="flex gap-4 opacity-0"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="mt-1 rounded-full p-2 bg-purple/10 text-purple">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Flexible Reward System</h3>
                    <p className="text-foreground/70">
                      Design reward systems with points, badges, and prizes that incentivize meaningful engagement and participation.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-amber/5 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container-custom">
          <div className="text-center mb-16">
            <div 
              className="inline-block mb-4 opacity-0"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <span className="badge">Success Stories</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p 
              className="text-lg text-foreground/80 max-w-2xl mx-auto opacity-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Join hundreds of event organizers who have transformed their events with Gamifievents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                delay={index * 100}
              />
            ))}
          </div>
          
          {/* Client logos */}
          <div 
            className="mt-20 opacity-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className="text-center text-muted-foreground mb-8">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {clientLogos.map((logo, index) => (
                <img 
                  key={index}
                  src={logo} 
                  alt={`${['TechVision', 'NexaSoft', 'EcoSpark', 'DataPulse', 'BrightWave'][index]} logo`}
                  className="h-10 md:h-12 opacity-80 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section id="pricing" className="section bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div 
              className="inline-block mb-4 opacity-0"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <span className="badge">Pricing</span>
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Transparent <span className="text-gradient">Pricing</span>
            </h2>
            <p 
              className="text-lg text-foreground/80 max-w-2xl mx-auto opacity-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Choose the plan that's right for your event needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-lg ${
                  plan.highlight ? 'ring-2 ring-purple relative' : ''
                } opacity-0`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {plan.price !== null ? (
                      <p className="text-3xl font-bold">
                        <span className="text-sm align-top">$</span>
                        {plan.price}
                        <span className="text-sm text-foreground/60 font-normal">{plan.period}</span>
                      </p>
                    ) : (
                      <p className="text-3xl font-bold">{plan.customPrice}</p>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <AnimatedButton 
                    variant={plan.highlight ? 'primary' : 'secondary'} 
                    className="w-full"
                    href="#cta"
                  >
                    {plan.cta}
                  </AnimatedButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple/[0.03] to-teal/[0.07] -z-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-purple/10 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-teal/10 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Ready to <span className="text-gradient">Transform</span> Your Next Event?
            </h2>
            <p 
              className="text-lg text-foreground/80 mb-8 mx-auto opacity-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Join hundreds of event organizers who have elevated their attendee experience with Gamifievents.
            </p>
            
            <div 
              className="max-w-md mx-auto glass-card p-6 md:p-8 opacity-0"
              data-aos="scale-in"
              data-aos-delay="200"
            >
              <div className="flex flex-col gap-6">
                <div className="text-left">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-2 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-purple/30" 
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="eventSize" className="block text-sm font-medium mb-1">Event Size</label>
                  <select 
                    id="eventSize" 
                    className="w-full px-4 py-2 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-purple/30"
                  >
                    <option value="">Select your event size</option>
                    <option value="small">Small (Up to 500 attendees)</option>
                    <option value="medium">Medium (500-2,500 attendees)</option>
                    <option value="large">Large (2,500+ attendees)</option>
                  </select>
                </div>
                <AnimatedButton 
                  variant="primary" 
                  size="large" 
                  className="w-full"
                >
                  Get Started
                </AnimatedButton>
                <p className="text-center text-xs text-foreground/60">
                  By signing up, you agree to our <a href="#" className="text-purple hover:underline">Terms</a> and <a href="#" className="text-purple hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-foreground text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Gamifievents. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
