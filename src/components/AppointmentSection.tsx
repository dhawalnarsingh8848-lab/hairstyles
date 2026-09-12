import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { salonInfo, salonServices } from '../data/salonData';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  preselectedService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    service: preselectedService || 'Haircut & Styling',
    preferredDate: '',
    preferredTime: '11:00 AM',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Synchronize preselected service when updated from external button
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
      // Clear error on service if any
      setErrors((prev) => {
        const next = { ...prev };
        delete next.service;
        return next;
      });
    }
  }, [preselectedService]);

  // Set default date to today in YYYY-MM-DD
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setFormData((prev) => ({
      ...prev,
      preferredDate: prev.preferredDate || `${yyyy}-${mm}-${dd}`,
    }));
  }, []);

  const handleInputChange = (field: keyof AppointmentFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = 'Please enter a valid phone number (e.g. 071-573336 or mobile).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred appointment date.';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Smooth brief simulated booking processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
  ];

  return (
    <section id="appointment" className="py-24 bg-[#F7F3EB] border-t border-[#EAE3D6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#9E7E3C] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            Book Your Session
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1C1A17] tracking-tight">
            Appointment Booking
          </h2>
          <p className="text-base text-[#5C564A]">
            Request your preferred time slot below. Our salon staff will confirm availability with you.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-[#FFFFFF] border border-[#E5DFD3] rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {isSubmitted ? (
            /* Success Response State with required exact confirmation phrasing */
            <div id="appointment-success-state" className="text-center py-8 px-4 space-y-6">
              <div className="w-16 h-16 bg-[#ECFDF5] border-2 border-[#10B981]/40 text-[#10B981] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-3 max-w-lg mx-auto">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#1C1A17]">
                  Request Received
                </h3>
                
                {/* STRICT REQUIRED PHRASING */}
                <div className="bg-[#FAF8F5] border border-[#E5DFD3] p-5 rounded-2xl text-left space-y-2">
                  <p className="text-base text-[#2C271F] font-semibold leading-relaxed">
                    "Your appointment request has been received. Please contact the salon at {salonInfo.phone} to confirm."
                  </p>
                  <p className="text-xs text-[#7A7365]">
                    Note: An appointment is not final until confirmed via phone call with our reception team.
                  </p>
                </div>

                {/* Submitted Details Summary */}
                <div className="text-xs text-[#6B6355] bg-[#F7F4EC] p-4 rounded-xl space-y-1.5 text-left border border-[#E8E1D5]">
                  <p><strong className="text-[#1C1A17]">Name:</strong> {formData.fullName}</p>
                  <p><strong className="text-[#1C1A17]">Phone:</strong> {formData.phone}</p>
                  <p><strong className="text-[#1C1A17]">Requested Service:</strong> {formData.service}</p>
                  <p><strong className="text-[#1C1A17]">Preferred Date & Time:</strong> {formData.preferredDate} at {formData.preferredTime}</p>
                  {formData.message && <p><strong className="text-[#1C1A17]">Message:</strong> {formData.message}</p>}
                </div>
              </div>

              {/* Call Confirmation Actions with 2x padding ratio */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  id="confirm-call-btn"
                  href={`tel:${salonInfo.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1A17] hover:bg-[#342F28] active:scale-98 rounded-xl shadow-sm transition-all focus-visible:outline-hidden"
                >
                  <Phone className="w-4 h-4 text-[#C5A869]" />
                  <span>Call {salonInfo.phone} to Confirm</span>
                </a>

                <button
                  id="new-request-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      service: 'Haircut & Styling',
                      preferredDate: '',
                      preferredTime: '11:00 AM',
                      message: '',
                    });
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold text-[#5C564A] hover:text-[#1C1A17] bg-[#F5F0E6] hover:bg-[#EBE3D3] active:scale-98 rounded-xl transition-all cursor-pointer focus-visible:outline-hidden"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form id="appointment-form" onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#4A453C]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9E7E3C] absolute left-3.5 top-3.5" />
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      placeholder="e.g. Rajesh Shrestha"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 text-sm bg-[#FAF8F5] border rounded-xl focus:bg-white focus:outline-hidden transition-colors ${
                        errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-[#DDD4C4] focus:border-[#9E7E3C]'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#4A453C]">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#9E7E3C] absolute left-3.5 top-3.5" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      placeholder="e.g. 071-573336 or 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 text-sm bg-[#FAF8F5] border rounded-xl focus:bg-white focus:outline-hidden transition-colors ${
                        errors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#DDD4C4] focus:border-[#9E7E3C]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                    </p>
                  )}
                </div>

              </div>

              {/* Select Service */}
              <div className="space-y-2">
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#4A453C]">
                  Select Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#DDD4C4] rounded-xl focus:bg-white focus:border-[#9E7E3C] focus:outline-hidden transition-colors text-[#1C1A17]"
                >
                  {salonServices.map((svc) => (
                    <option key={svc.id} value={svc.name}>
                      {svc.name}
                    </option>
                  ))}
                  <option value="General Consultation">General Consultation / Other Hair Service</option>
                </select>
                <p className="text-[11px] text-[#827A6C]">
                  Note: Services listed are placeholders. Specific requests and pricing can be confirmed with salon staff.
                </p>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Preferred Date */}
                <div className="space-y-2">
                  <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-[#4A453C]">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border rounded-xl focus:bg-white focus:outline-hidden transition-colors ${
                        errors.preferredDate ? 'border-red-400 focus:border-red-500' : 'border-[#DDD4C4] focus:border-[#9E7E3C]'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.preferredDate}
                    </p>
                  )}
                </div>

                {/* Preferred Time */}
                <div className="space-y-2">
                  <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-[#4A453C]">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#DDD4C4] rounded-xl focus:bg-white focus:border-[#9E7E3C] focus:outline-hidden transition-colors text-[#1C1A17]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#4A453C]">
                  Message (Optional)
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Any specific styling preferences or questions for the salon..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#DDD4C4] rounded-xl focus:bg-white focus:border-[#9E7E3C] focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button with 2x padding ratio */}
              <div className="pt-2">
                <button
                  id="submit-appointment-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#1C1A17] hover:bg-[#342F28] active:scale-99 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-75 focus-visible:outline-hidden"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-[#C5A869]" />
                      <span>Sending Request...</span>
                    </span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#C5A869]" />
                      <span>Request Appointment</span>
                    </>
                  )}
                </button>
              </div>

              {/* Notice */}
              <p className="text-center text-xs text-[#7A7365]">
                Submitting this form sends an appointment request. Confirmation is finalized by phone at{' '}
                <a href={`tel:${salonInfo.phone}`} className="font-semibold text-[#1C1A17] hover:text-[#9E7E3C] underline">
                  {salonInfo.phone}
                </a>.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

