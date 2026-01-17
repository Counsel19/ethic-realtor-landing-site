"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/components/atoms/Logo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    // Reset form or show success message
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Logo Section */}
      <div className="bg-primary flex items-center justify-center p-8 lg:p-12 min-h-[50vh] lg:min-h-screen">
        <div className="flex flex-col items-center gap-6">
          {/* Logo Icon */}
          <Logo width={500} height={500}  className="h-[500px]"/>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="relative min-h-[50vh] lg:min-h-screen bg-cover bg-center bg-no-repeat">
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/realtor_banner.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/20 " />
        </div>

        {/* Frosted Glass Form Overlay */}
        <div className="relative h-full flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md bg-card/50 rounded-2xl border border-border/50 p-8 shadow-2xl">
            {/* Form Header */}
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Contact us
              </h2>
              <p className="text-muted-foreground">
                Enter your details to begin
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-background border-border"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-foreground"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-background border-border"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-background border-border resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-background text-foreground border border-border hover:bg-muted hover:text-foreground"
                size="lg"
              >
                Contact us
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
