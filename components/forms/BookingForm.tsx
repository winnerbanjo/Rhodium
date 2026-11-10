"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { servicesData } from "@/content/services";
import { sectorsData } from "@/content/sectors";
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Building,
  User,
  Mail,
  Phone,
  FileText,
  Globe,
} from "lucide-react";

const bookingFormSchema = z.object({
  serviceSlug: z.string().min(1, "Please select an advisory service"),
  projectStage: z.enum(["Prepare", "Structure", "Close", "Operate", "Other"]),
  sector: z.string().min(1, "Please select an infrastructure sector"),
  country: z.string().min(2, "Country is required"),
  description: z.string().min(10, "Please provide a brief project summary (min 10 characters)"),
  preferredDate: z.string().min(1, "Please pick a preferred date"),
  preferredTimeSlot: z.string().min(1, "Please pick a preferred time slot"),
  fullName: z.string().min(2, "Full name is required"),
  organisation: z.string().min(2, "Organisation name is required"),
  email: z.string().email("Valid corporate email is required"),
  phone: z.string().min(5, "Contact telephone is required"),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

interface BookingFormProps {
  initialService?: string;
  initialSector?: string;
}

export function BookingForm({ initialService, initialSector }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<{
    bookingRef: string;
    details: BookingFormData;
  } | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      serviceSlug: initialService || "",
      projectStage: "Prepare",
      sector: initialSector || "",
      country: "Nigeria",
      description: "",
      preferredDate: "",
      preferredTimeSlot: "10:00 - 11:00",
      fullName: "",
      organisation: "",
      email: "",
      phone: "",
      honeypot: "",
    },
  });

  const selectedDate = watch("preferredDate");
  const selectedSlot = watch("preferredTimeSlot");
  const selectedStage = watch("projectStage");

  // Sample available time slots (West Africa Time / WAT)
  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:30 - 12:30",
    "14:00 - 15:00",
    "15:30 - 16:30",
    "17:00 - 18:00",
  ];

  const handleNextStep = async () => {
    let isValid = false;
    if (currentStep === 1) {
      isValid = await trigger(["serviceSlug", "projectStage", "sector", "country", "description"]);
      if (isValid) setCurrentStep(2);
    } else if (currentStep === 2) {
      isValid = await trigger(["preferredDate", "preferredTimeSlot"]);
      if (isValid) setCurrentStep(3);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      if (!response.ok) {
        throw new Error(resData.error || "Failed to schedule consultation.");
      }

      setBookingResult({
        bookingRef: resData.bookingRef,
        details: data,
      });
    } catch (err: any) {
      setApiError(err.message || "Failed to process booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confirmation Screen
  if (bookingResult) {
    return (
      <div className="bg-white dark:bg-navy-900 rounded-xl p-8 sm:p-12 border border-rhodium-200 dark:border-navy-800 shadow-card text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
            Booking Confirmed • Reference: {bookingResult.bookingRef}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 dark:text-white">
            Consultation Request Received
          </h2>
          <p className="text-sm text-rhodium-600 dark:text-rhodium-300 max-w-lg mx-auto">
            Thank you, <strong>{bookingResult.details.fullName}</strong>. We have allocated your preliminary consultation session for:
          </p>
        </div>

        {/* Booking details card */}
        <div className="max-w-md mx-auto bg-rhodium-50 dark:bg-navy-950 p-6 rounded-lg border border-rhodium-200 dark:border-navy-800 text-left text-xs sm:text-sm space-y-2.5">
          <div className="flex justify-between border-b border-rhodium-200 dark:border-navy-800 pb-2">
            <span className="text-rhodium-500">Date & Time:</span>
            <span className="font-semibold text-navy-900 dark:text-white">
              {bookingResult.details.preferredDate} ({bookingResult.details.preferredTimeSlot} WAT)
            </span>
          </div>
          <div className="flex justify-between border-b border-rhodium-200 dark:border-navy-800 pb-2">
            <span className="text-rhodium-500">Practice Area:</span>
            <span className="font-semibold text-navy-900 dark:text-white truncate max-w-[200px]">
              {bookingResult.details.serviceSlug}
            </span>
          </div>
          <div className="flex justify-between border-b border-rhodium-200 dark:border-navy-800 pb-2">
            <span className="text-rhodium-500">Project Stage:</span>
            <span className="font-semibold text-navy-900 dark:text-white">
              {bookingResult.details.projectStage}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-rhodium-500">Confirmation Sent To:</span>
            <span className="font-semibold text-teal-700 dark:text-teal-400">
              {bookingResult.details.email}
            </span>
          </div>
        </div>

        <p className="text-xs text-rhodium-500 max-w-md mx-auto">
          A lead transaction adviser will review your submission and dispatch an official video conference invitation (Google Meet / Microsoft Teams) and preliminary preparation questions.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <Button href="/" variant="primary">
            Return to Homepage
          </Button>
          <Button href="/services" variant="outline">
            Review Practice Areas
          </Button>
        </div>
      </div>
    );
  }

  // Get tomorrow's date formatted as YYYY-MM-DD for min date picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split("T")[0];

  return (
    <div className="bg-white dark:bg-navy-900 rounded-xl border border-rhodium-200 dark:border-navy-800 shadow-card p-6 sm:p-10">
      {/* Stepper Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-rhodium-500 mb-3">
          <span className={currentStep >= 1 ? "text-teal-700 dark:text-teal-400 font-bold" : ""}>
            1. Project Scope
          </span>
          <span className={currentStep >= 2 ? "text-teal-700 dark:text-teal-400 font-bold" : ""}>
            2. Schedule Slot
          </span>
          <span className={currentStep >= 3 ? "text-teal-700 dark:text-teal-400 font-bold" : ""}>
            3. Client Details
          </span>
        </div>
        <div className="h-1.5 w-full bg-rhodium-100 dark:bg-navy-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-700 transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      {apiError && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 text-sm flex items-center gap-2 border border-red-200">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{apiError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

        {/* STEP 1: Project Details */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-rhodium-100 dark:border-navy-800 pb-4">
              <h3 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
                Project & Mandate Parameters
              </h3>
              <p className="text-xs text-rhodium-500 mt-1">
                Tell us about the transaction structure, sector, and lifecycle phase.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1.5">
                  Advisory Practice Required *
                </label>
                <select
                  {...register("serviceSlug")}
                  className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
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

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1.5">
                  Infrastructure Sector *
                </label>
                <select
                  {...register("sector")}
                  className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
                >
                  <option value="">Select sector...</option>
                  {sectorsData.map((sec) => (
                    <option key={sec.id} value={sec.name}>
                      {sec.name}
                    </option>
                  ))}
                  <option value="Other Infrastructure">Other Physical Infrastructure</option>
                </select>
                {errors.sector && (
                  <p className="text-xs text-red-600 mt-1">{errors.sector.message}</p>
                )}
              </div>
            </div>

            {/* Project Stage Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-2">
                Current Asset Lifecycle Stage *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(["Prepare", "Structure", "Close", "Operate"] as const).map((stage) => {
                  const isChecked = selectedStage === stage;
                  return (
                    <label
                      key={stage}
                      className={`flex flex-col items-center justify-center p-3 rounded-lg border cursor-pointer text-center transition-all ${
                        isChecked
                          ? "border-teal-700 bg-teal-50/50 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 font-bold"
                          : "border-rhodium-200 dark:border-navy-800 hover:bg-rhodium-50 dark:hover:bg-navy-800 text-rhodium-700 dark:text-rhodium-300"
                      }`}
                    >
                      <input
                        type="radio"
                        value={stage}
                        {...register("projectStage")}
                        className="hidden"
                      />
                      <span className="text-sm">{stage}</span>
                      <span className="text-[10px] text-rhodium-400 mt-0.5">
                        {stage === "Prepare" && "Feasibility & Concept"}
                        {stage === "Structure" && "Models & Term Sheets"}
                        {stage === "Close" && "CPs & Syndication"}
                        {stage === "Operate" && "Refinancing & Audits"}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1.5">
                Target Country / Jurisdiction *
              </label>
              <input
                type="text"
                {...register("country")}
                placeholder="e.g. Nigeria, Ghana, Kenya"
                className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
              />
              {errors.country && (
                <p className="text-xs text-red-600 mt-1">{errors.country.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1.5">
                Brief Description of the Mandate / Bankability Challenges *
              </label>
              <textarea
                rows={4}
                {...register("description")}
                placeholder="Outline estimated capex, key counterparties (offtaker, concession authority), and where the project currently faces friction."
                className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
              />
              {errors.description && (
                <p className="text-xs text-red-600 mt-1">{errors.description.message}</p>
              )}
            </div>

            <div className="flex justify-end pt-4">
              <Button type="button" variant="accent" onClick={handleNextStep} rightIcon={<ArrowRight className="w-4 h-4" />}>
                Proceed to Scheduling
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: Scheduling & Calendar Slot */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-rhodium-100 dark:border-navy-800 pb-4">
              <h3 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
                Preferred Consultation Slot
              </h3>
              <p className="text-xs text-rhodium-500 mt-1">
                Select your preferred consultation date and 60-minute time slot (West Africa Time / UTC+1).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Date Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white">
                  Pick Preferred Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={minDateStr}
                    {...register("preferredDate")}
                    className="w-full text-sm px-3.5 py-3 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
                  />
                </div>
                {errors.preferredDate && (
                  <p className="text-xs text-red-600 mt-1">{errors.preferredDate.message}</p>
                )}
                <p className="text-[11px] text-rhodium-400">
                  Advisory sessions are held Monday to Friday, 09:00 – 18:00 WAT.
                </p>
              </div>

              {/* Time Slots */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white">
                  Available Time Slots (WAT) *
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setValue("preferredTimeSlot", slot)}
                        className={`py-2.5 px-3 rounded text-xs font-medium border flex items-center justify-center gap-1.5 transition-all ${
                          isSelected
                            ? "bg-teal-700 text-white border-teal-700 font-bold shadow-sm"
                            : "bg-rhodium-50 dark:bg-navy-950 text-rhodium-700 dark:text-rhodium-300 border-rhodium-200 dark:border-navy-800 hover:bg-rhodium-100"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" />
                        <span>{slot}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.preferredTimeSlot && (
                  <p className="text-xs text-red-600 mt-1">{errors.preferredTimeSlot.message}</p>
                )}
              </div>
            </div>

            {/* Cal.com / Calendly abstraction note */}
            <div className="p-4 rounded-lg bg-rhodium-50 dark:bg-navy-950 border border-rhodium-200 dark:border-navy-800 text-xs text-rhodium-500">
              <span className="font-semibold text-navy-900 dark:text-white">Need immediate calendar sync?</span> An automated Google Calendar / Teams invitation with video link is dispatched upon request approval.
            </div>

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={handlePrevStep} leftIcon={<ArrowLeft className="w-4 h-4" />}>
                Back
              </Button>
              <Button type="button" variant="accent" onClick={handleNextStep} rightIcon={<ArrowRight className="w-4 h-4" />}>
                Proceed to Client Details
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: Client Contact Details */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-rhodium-100 dark:border-navy-800 pb-4">
              <h3 className="text-xl font-serif font-bold text-navy-900 dark:text-white">
                Contact & Institutional Details
              </h3>
              <p className="text-xs text-rhodium-500 mt-1">
                Where should we send the confirmation and calendar invite?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  Organisation / Ministry / Fund *
                </label>
                <input
                  type="text"
                  {...register("organisation")}
                  placeholder="e.g. Ministry of Finance / IPP Sponsor"
                  className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
                />
                {errors.organisation && (
                  <p className="text-xs text-red-600 mt-1">{errors.organisation.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  Direct Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  placeholder="+234 ..."
                  className="w-full text-sm px-3.5 py-2.5 rounded border border-rhodium-300 dark:border-navy-700 bg-white dark:bg-navy-950 text-navy-900 dark:text-white focus:ring-2 focus:ring-teal-700"
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Summary preview */}
            <div className="p-4 rounded-lg bg-rhodium-50 dark:bg-navy-950 border border-rhodium-200 dark:border-navy-800 text-xs space-y-1">
              <span className="font-bold text-navy-900 dark:text-white block">
                Session Summary:
              </span>
              <p className="text-rhodium-600 dark:text-rhodium-300">
                Preliminary consultation on <strong>{selectedDate || "selected date"}</strong> at <strong>{selectedSlot} (WAT)</strong> covering <strong>{watch("serviceSlug")}</strong>.
              </p>
            </div>

            <div className="flex justify-between pt-4">
              <Button type="button" variant="outline" onClick={handlePrevStep} leftIcon={<ArrowLeft className="w-4 h-4" />}>
                Back
              </Button>
              <Button type="submit" variant="accent" size="lg" isLoading={isSubmitting}>
                Confirm & Request Consultation
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
