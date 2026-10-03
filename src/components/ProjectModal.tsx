import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultCategory?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
  defaultCategory = '',
}) => {
  const [step, setStep] = useState(1);
  const [brandName, setBrandName] = useState('');
  const [category, setCategory] = useState(defaultCategory || 'D2C Consumer Product');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : ['Product Films', 'Social Ads']
  );
  const [timeline, setTimeline] = useState('Immediate (5–7 business days)');
  const [productDetails, setProductDetails] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setSelectedServices((prev) => (prev.includes(defaultService) ? prev : [...prev, defaultService]));
    }
  }, [defaultService]);

  useEffect(() => {
    if (defaultCategory) {
      setCategory(defaultCategory);
    }
  }, [defaultCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const availableCategories = [
    'Protein & Fitness',
    'Food & Beverage',
    'Beauty & Skincare',
    'Coffee & Specialty Roast',
    'Fashion & Apparel',
    'Lifestyle & Home',
    'Consumer Electronics / Tech',
    'D2C Brand (General)',
  ];

  const serviceOptions = [
    'Product Films (Cinematic Commercials)',
    'Product Photography (Studio & Macro)',
    'Social Ads (9:16 Paid Social Suite)',
    'Campaign Concepts (Hooks & Storyboards)',
    'Lifestyle Creative (Photorealistic Environments)',
    'Product Launches (Full Omnichannel Kit)',
  ];

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setBrandName('');
    setProductDetails('');
    setClientName('');
    setClientEmail('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0d0e12] border border-white/10 shadow-2xl my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090a0d]">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <span className="text-[#E2B874] font-semibold">AD CREATIVE</span>
            <span>·</span>
            <span>Project Intake Brief</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            /* Confirmation State */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#E2B874]/10 border border-[#E2B874] flex items-center justify-center mx-auto text-[#E2B874]">
                <CheckCircle2 size={32} />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E2B874]">
                  Creative Brief Received
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                  We&apos;re Reviewing Your Product.
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto font-light">
                  Thank you, <span className="text-white font-medium">{clientName || 'Partner'}</span>. Our Creative Director will review <span className="text-[#E2B874] font-medium">{brandName || 'your brand'}</span> and reply to <span className="text-white underline">{clientEmail}</span> within 24 hours with preliminary visual concepts and proposal options.
                </p>
              </div>

              <div className="p-4 bg-[#14161f] border border-white/5 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-neutral-400 font-mono">
                  <span>Intake ID:</span>
                  <span className="text-white">AC-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between text-neutral-400 font-mono">
                  <span>Target Turnaround:</span>
                  <span className="text-[#E2B874]">{timeline}</span>
                </div>
                <div className="flex justify-between text-neutral-400 font-mono">
                  <span>Selected Scope:</span>
                  <span className="text-white">{selectedServices.length} Service(s)</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#E2B874] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#ebd09b] transition-colors"
              >
                Back to Studio Portfolio
              </button>
            </div>
          ) : (
            /* Multi-Step Intake Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Stepper Progress */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
                <span className="text-white font-medium">Step {step} of 3</span>
                <span className="text-[#E2B874]">
                  {step === 1 && 'Brand & Category'}
                  {step === 2 && 'Creative Scope'}
                  {step === 3 && 'Details & Contact'}
                </span>
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Brand or Product Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Protein, Lumina Skincare, Sol Coffee..."
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#13141a] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#E2B874]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Product Category *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableCategories.map((cat) => (
                        <button
                          type="button"
                          key={cat}
                          onClick={() => setCategory(cat)}
                          className={`p-3 text-left text-xs transition-colors border ${
                            category === cat
                              ? 'border-[#E2B874] bg-[#1a1c25] text-white font-medium'
                              : 'border-white/5 bg-[#121319] text-neutral-400 hover:text-white'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      disabled={!brandName.trim()}
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-[#E2B874] disabled:opacity-40 text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#ebd09b] transition-colors flex items-center gap-2"
                    >
                      <span>Continue to Scope</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Select Deliverables Needed *
                    </label>
                    <div className="space-y-2">
                      {serviceOptions.map((srv) => {
                        const isChecked = selectedServices.some((s) => srv.includes(s) || s.includes(srv));
                        return (
                          <div
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-3 border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                              isChecked
                                ? 'border-[#E2B874] bg-[#1a1c25] text-white'
                                : 'border-white/5 bg-[#121319] text-neutral-400 hover:text-white'
                            }`}
                          >
                            <span>{srv}</span>
                            <div
                              className={`w-4 h-4 border flex items-center justify-center ${
                                isChecked
                                  ? 'border-[#E2B874] bg-[#E2B874] text-black'
                                  : 'border-white/20'
                              }`}
                            >
                              {isChecked && <Check size={12} />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Target Launch Window
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Immediate (5–7 days)', 'Next 30 Days', 'Exploring / Planning'].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setTimeline(t)}
                          className={`p-2.5 text-xs text-center border transition-colors ${
                            timeline === t
                              ? 'border-[#E2B874] bg-[#1a1c25] text-white font-medium'
                              : 'border-white/5 bg-[#121319] text-neutral-400 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-neutral-400 hover:text-white uppercase font-mono"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      disabled={selectedServices.length === 0}
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-[#E2B874] disabled:opacity-40 text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#ebd09b] transition-colors flex items-center gap-2"
                    >
                      <span>Final Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Founder or Marketing Lead"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-4 py-3 bg-[#13141a] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#E2B874]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="founder@brand.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-[#13141a] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#E2B874]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Tell us about what you&apos;re launching / aesthetic goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share product links, target audience, preferred mood (e.g., dark macro lighting, energetic water splash, clean luxury)..."
                      value={productDetails}
                      onChange={(e) => setProductDetails(e.target.value)}
                      className="w-full px-4 py-3 bg-[#13141a] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#E2B874]"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-neutral-400 hover:text-white uppercase font-mono"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      disabled={!clientName.trim() || !clientEmail.trim()}
                      className="px-8 py-3 bg-[#E2B874] disabled:opacity-40 text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#ebd09b] transition-colors flex items-center gap-2"
                    >
                      <span>Submit Creative Brief</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
