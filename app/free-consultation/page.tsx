"use client";

import { useState } from "react";
import CTA from "@/components/CTA";

const services = [
  "SEO",
  "Google Ads",
  "Meta Ads / Facebook Ads",
  "Social Media Marketing",
  "Lead Generation",
  "Website Development",
  "SaaS App Development",
  "Mobile App Development",
  "Automation Services",
  "AI Marketing Services",
  "Branding & Creative Design",
  "YouTube Marketing",
  "Other Requirement",
];

export default function FreeConsultationPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "919602408560";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const text = `New MeriAsk Inquiry\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nRequirement: ${form.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.error("Lead save failed:", error);
    } finally {
      setIsSubmitting(false);
      window.open(whatsappUrl, "_blank");
      setForm({ name: "", phone: "", service: "", message: "" });
    }
  }

  return (
    <main>
      <section className="pageHero consultationHero">
        <div className="glow gold"></div>
        <div className="glow purple"></div>
        <div className="container">
          <span className="eyebrow">Free Business Growth Consultation</span>
          <h1 className="h1">Let&apos;s Build Your <span className="grad">Growth Plan</span></h1>
          <p className="lead">
            Share your business requirement and MeriAsk will help you choose the right strategy for leads, sales, branding,
            website, SaaS apps, automation and AI-powered growth.
          </p>
        </div>
      </section>

      <section className="section noTop">
        <div className="container split consultationSplit">
          <div className="panel premiumPanel consultationInfo">
            <span className="eyebrow">What you get</span>
            <h2 className="sectionTitle">A clear direction before spending money.</h2>
            <p className="sectionLead">
              We understand your business goal, current problem, target customers and budget. Then we suggest the best
              digital growth path — SEO, ads, social media, website, automation, SaaS app or complete funnel.
            </p>
            <div className="list">
              <div>Business audit and service recommendation</div>
              <div>Lead generation and sales funnel direction</div>
              <div>Website, SaaS, AI and automation planning</div>
              <div>Budget-friendly next step for your business</div>
            </div>
          </div>

          <div className="panel productPanel leadPanel">
            <span className="eyebrow">Lead Focus</span>
            <h2>Submit Your Requirement</h2>
            <p className="miniText">Form submit karte hi lead Google Sheet me save hogi aur WhatsApp inquiry message ready ho jayega.</p>

            <form onSubmit={handleSubmit} className="form premiumForm">
              <input
                className="input"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className="input"
                placeholder="Phone / WhatsApp"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
              <select
                className="select"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                required
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              <textarea
                className="textarea"
                placeholder="Tell us about your business requirement"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <button className="btn primary fullBtn" type="submit" disabled={isSubmitting}>{isSubmitting ? "Saving Lead..." : "Submit Inquiry on WhatsApp"}</button>
            </form>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
