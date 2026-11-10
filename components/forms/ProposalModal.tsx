"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { servicesData } from "@/content/services";

const proposalSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please provide a valid corporate email"),
  organisation: z.string().min(2, "Organisation name is required"),
  serviceSlug: z.string().min(1, "Please select an advisory practice"),
  estimatedCapex: z.string().optional(),
  projectSummary: z.string().min(10, "Please provide a brief outline of the mandate (min 10 characters)"),
  honeypot: z.string().max(0, "Spam detected"),
});

type ProposalFormData = z.infer<typeof proposalSchema>;

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProposalModal({ isOpen, onClose }: ProposalModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProposalFormData>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      honeypot: "",
    },
  });

  const onSubmit = async (data: ProposalFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          organisation: data.organisation,
          enquiryType: "Advisory enquiry (RFP / Proposal)",
          message: `[Request for Proposal]\nPractice Area: ${data.serviceSlug}\nEstimated Capex: ${data.estimatedCapex || "Unspecified"}\n\nProject Scope:\n${data.projectSummary}`,
          honeypot: data.honeypot,
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit request.");
      }

      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Request an Advisory Proposal"
      description="Submit a confidential brief on your project or mandate. A senior partner will review and reply within 24 hours."
      maxWidth="lg"
    >
      {isSuccess ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-12 h-12 bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-400 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
            Brief Received Confidentially
          </h3>
          <p className="text-sm text-rhodium-600 dark:text-rhodium-300 max-w-md mx-auto">
            Thank you for reaching out to Rhodium Impact. Our lead transaction partners will review your mandate parameters and contact you to schedule an initial scoping session.
          </p>
          <div className="pt-4">
            <Button variant="primary" onClick={handleClose}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Honeypot anti-spam field */}
          <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

          {errorMessage && (
            <div className="p-3 bg-red-50 text-red-700 text-sm rounded flex items-center gap-2 border border-red-200">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-navy-900 dark:text-white mb-1">
                Full Name *
              </label>
              <input
                type="text"
                {...register("fullName")}
                className="w-full text-sm px-3 py-2 border rounded bg-white dark:bg-navy-800 border-rhodium-300 dark:border-navy-700 focus:ring-1 focus:ring-teal-700"
                placeholder="e.g. Femi Adesina"
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-900 dark:text-white mb-1">
                Corporate Email *
              </label>
              <input
                type="email"
                {...register("email")}
                className="w-full text-sm px-3 py-2 border rounded bg-white dark:bg-navy-800 border-rhodium-300 dark:border-navy-700 focus:ring-1 focus:ring-teal-700"
                placeholder="femi@sponsor.com"
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-navy-900 dark:text-white mb-1">
                Organisation / Ministry / Fund *
              </label>
              <input
                type="text"
                {...register("organisation")}
                className="w-full text-sm px-3 py-2 border rounded bg-white dark:bg-navy-800 border-rhodium-300 dark:border-navy-700 focus:ring-1 focus:ring-teal-700"
                placeholder="e.g. African Clean Power Ltd"
              />
              {errors.organisation && (
                <p className="text-xs text-red-600 mt-1">{errors.organisation.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy-900 dark:text-white mb-1">
                Advisory Practice Required *
              </label>
              <select
                {...register("serviceSlug")}
                className="w-full text-sm px-3 py-2 border rounded bg-white dark:bg-navy-800 border-rhodium-300 dark:border-navy-700 focus:ring-1 focus:ring-teal-700"
              >
                <option value="">Select practice area...</option>
                {servicesData.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.serviceSlug && (
                <p className="text-xs text-red-600 mt-1">{errors.serviceSlug.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy-900 dark:text-white mb-1">
              Estimated Project Capex / Deal Size (Optional)
            </label>
            <input
              type="text"
              {...register("estimatedCapex")}
              className="w-full text-sm px-3 py-2 border rounded bg-white dark:bg-navy-800 border-rhodium-300 dark:border-navy-700 focus:ring-1 focus:ring-teal-700"
              placeholder="e.g. US$ 75M or NGN 50B"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-navy-900 dark:text-white mb-1">
              Project Description & Key Bankability Challenges *
            </label>
            <textarea
              rows={4}
              {...register("projectSummary")}
              className="w-full text-sm px-3 py-2 border rounded bg-white dark:bg-navy-800 border-rhodium-300 dark:border-navy-700 focus:ring-1 focus:ring-teal-700"
              placeholder="Outline project location, current development phase (e.g. OBC, term sheet, debt syndication), key counterparties, and what advisory assistance you require."
            />
            {errors.projectSummary && (
              <p className="text-xs text-red-600 mt-1">{errors.projectSummary.message}</p>
            )}
          </div>

          <div className="pt-3 flex items-center justify-end gap-3">
            <Button type="button" variant="ghost" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="accent" isLoading={isSubmitting}>
              Submit RFP Brief
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
