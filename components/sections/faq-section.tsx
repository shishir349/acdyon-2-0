"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQSection() {
  return (
    <section className="bg-white py-24">
      <div className="container-premium max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="Questions professionals ask before choosing AcdyOn" />
        <Accordion.Root type="single" collapsible className="mt-12 grid gap-3">
          {faqs.map((faq) => (
            <Accordion.Item key={faq.question} value={faq.question} className="rounded-[8px] border border-slate-200 bg-white px-5">
              <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-slate-950">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition duration-300 data-[state=open]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden pb-5 text-sm leading-7 text-slate-600">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
