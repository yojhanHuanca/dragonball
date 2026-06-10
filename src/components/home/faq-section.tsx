import { SectionHeading } from "@/components/home/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/data/home"

export function FaqSection() {
  return (
    <section id="faq" className="bg-muted/40 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes."
          description="Informacion esencial para entender como esta preparada la homepage."
        />
        <Accordion type="single" collapsible className="rounded-lg border border-border bg-background px-5">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
