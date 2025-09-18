"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 space-y-8">
      <h1 className="text-4xl md:text-5xl font-[var(--font-serif)] text-center">Contact</h1>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => setLoading(false), 800);
        }}
      >
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your Name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your.email@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Say hello..." rows={6} required />
        </div>
        <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
      </form>

      <div className="pt-4 text-sm text-[oklch(0.35_0_0)] text-center">
        <a className="underline mr-4 hover:text-[oklch(0.68_0.19_35)] transition-colors" href="https://linkedin.com/in/prathamesh-ingale" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="underline mr-4 hover:text-[oklch(0.68_0.19_35)] transition-colors" href="https://behance.net/prathamesh-ingale" target="_blank" rel="noreferrer">Behance</a>
        <a className="underline hover:text-[oklch(0.68_0.19_35)] transition-colors" href="https://dribbble.com/prathamesh-ingale" target="_blank" rel="noreferrer">Dribbble</a>
      </div>
    </main>
  );
}


