import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Instagram, Twitter, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requestType: "general",
    budget: "",
    message: "",
    number: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const payload = {
      name: formData.name,
      email: formData.email,
      type: formData.requestType, 
      budget: formData.budget,
      number:formData.number,      // optional
      message: formData.message,
    };

    const res = await fetch("https://artisan-hub-vodz.onrender.com/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      toast({
        title: "Thank you for your interest!",
        description: "We received your enquiry and will get back soon.",
        duration: 5000,
      });

      // Clear form + close modal
      
    } else {
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        duration: 5000,
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Network Error!",
      description: "Backend is unreachable.",
      duration: 5000,
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <p className="text-primary uppercase tracking-widest text-sm mb-4 animate-fade-in">Get in Touch</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-in-up">
              Let's <span className="italic">Connect</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl animate-fade-in-delay-1">
              Interested in commissioning a piece, purchasing existing work, or simply want to say hello? I'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
              {/* Form */}
              <div className="lg:col-span-3">
                <h2 className="font-display text-2xl text-foreground mb-8">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="rupanzel"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="flyrider@rupanzel.com"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="number">Your number *</Label>
                      <Input
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                        placeholder="contact number with CountryCode"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="requestType">Inquiry Type</Label>
                      <select
                        id="requestType"
                        name="requestType"
                        value={formData.requestType}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="commission">Commission Request</option>
                        <option value="purchase">Purchase Inquiry</option>
                        <option value="collaboration">Collaboration</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range (Optional)</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-1000">Under $1,000</option>
                        <option value="1000-3000">$1,000 - $3,000</option>
                        <option value="3000-5000">$3,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="over-10000">Over $10,000</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project, vision, or any questions you have..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" variant="artistic" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="font-display text-2xl text-foreground mb-8">Contact Information</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:mimanshashakya@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        mimanshashakya@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Studio Location</p>
                      <p className="text-muted-foreground">
                        Delhi, new delhi<br />
                        By appointment only
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Response Time</p>
                      <p className="text-muted-foreground">
                        I typically respond within 48 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="font-display text-lg text-foreground mb-4">Follow My Journey</h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/stubborn.brush/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    
                  </div>
                </div>

                {/* Commission Note */}
                <div className="mt-12 p-6 bg-secondary rounded-lg border border-border">
                  <h3 className="font-display text-lg text-foreground mb-3">About Commissions</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Custom commissions typically take 4-8 weeks depending on size and complexity. 
                    A 50% deposit is required to begin work, with the balance due upon completion. 
                    I'm happy to discuss your vision and provide a detailed quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
