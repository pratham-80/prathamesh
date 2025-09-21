"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        throw error;
      }

      setMessage("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 space-y-8">
      <h1 className="text-4xl md:text-5xl font-[var(--font-serif)] leading-[1.2] text-center">Contact</h1>
      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required 
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your.email@example.com" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required 
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message" 
            placeholder="Say hello..." 
            rows={6} 
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required 
          />
        </div>
        <div className="flex justify-center">
          <Button 
            type="submit" 
            disabled={loading} 
            className="normal-case rounded-lg"
            style={{WebkitAppearance: 'none', borderRadius: '8px'}}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>

      {message && (
        <div className={`text-center p-4 rounded-lg ${
          message.includes("Thank you") 
            ? "bg-green-100 text-green-800" 
            : "bg-red-100 text-red-800"
        }`}>
          {message}
        </div>
      )}

      <div className="pt-4 text-center">
        <p className="text-sm text-[oklch(0.35_0_0)] mb-2">Let&apos;s chat, collaborate, or just say hi 👋</p>
        <a className="text-sm underline hover:text-[oklch(0.68_0.19_35)] transition-colors" href="mailto:ingleprathmesh80@gmail.com">📩 ingleprathmesh80@gmail.com</a>
      </div>
    </main>
  );
}


