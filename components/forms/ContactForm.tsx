"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid corporate email is required"),
  organisation: z.string().min(2, "Organisation is required"),
  phone: z.string().optional(),
  enquiryType: z.enum([
    "Advisory enquiry",
    "Partnership",
    "Training & Capacity Building",
    "Media & Press",
    "Careers",
    "Other",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to confidential data processing",
  }),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      enquiryType: "Advisory enquiry",
      consent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit enquiry.");
      }

      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-rhodium-50 dark:bg-navy-950 p-8 rounded-xl border border-rhodium-200 dark:border-navy-800 text-center space-y-4">
        <div className="w-12 h-12 bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
          Message Received
        </h3>
        <p className="text-sm text-rhodium-600 dark:text-rhodium-300 max-w-md mx-auto">
          Thank you for contacting Rhodium Impact Consulting Ltd. Your enquiry has been routed to our transaction advisory desk and our partners will reply within 24 hours.
        </p>
        <Button variant="outline" size="sm" onClick={() => setIsSuccess(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

      {errorMessage && (
        <div className="p-3 bg-red-50 text-red-700 text-xs sm:text-sm rounded flex items-center gap-2 border border-red-200">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="e.g. Femi Adesina"
            className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1.5">
            Organisation / Fund *
          </label>
          <input
            type="text"
            {...register("organisation")}
            placeholder="e.g. Sovereign Wealth Authority"
            className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
          />
          {errors.organisation && (
            <p className="text-xs text-red-600 mt-1">{errors.organisation.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1.5">
            Corporate Email *
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="femi@organisation.com"
            className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1.5">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            {...register("phone")}
            placeholder="+234 ..."
            className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1.5">
          Nature of Enquiry *
        </label>
        <select
          {...register("enquiryType")}
          className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
        >
          <option value="Advisory enquiry">Advisory Enquiry (Transaction / Mandate)</option>
          <option value="Partnership">Institutional Partnership</option>
          <option value="Training & Capacity Building">Training & Executive Masterclasses</option>
          <option value="Media & Press">Media & Press Enquiries</option>
          <option value="Careers">Careers & Expert Network Application</option>
          <option value="Other">Other General Enquiries</option>
        </select>
        {errors.enquiryType && (
          <p className="text-xs text-red-600 mt-1">{errors.enquiryType.message}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1.5">
          Detailed Message *
        </label>
        <textarea
          rows={5}
          {...register("message")}
          placeholder="Please describe your transaction mandate, project stage, or questions for our senior partners."
          className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="consent"
          {...register("consent")}
          className="mt-1 h-4 w-4 rounded border-rhodium-300 text-teal-700 focus:ring-teal-700"
        />
        <label htmlFor="consent" className="text-xs text-rhodium-600 dark:text-rhodium-400 leading-normal">
          I consent to Rhodium Impact processing this confidential enquiry in accordance with the NDPR and our Privacy Policy.
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-600">{errors.consent.message}</p>
      )}

      <div className="pt-2">
        <Button type="submit" variant="accent" size="lg" isLoading={isSubmitting} className="w-full sm:w-auto">
          Transmit Confidential Enquiry
        </Button>
      </div>
    </form>
  );
}
