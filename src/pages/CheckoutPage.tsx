import { useState } from "react";
import { useNavigate } from "react-router";
import { Check, ArrowLeft } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

export function CheckoutPage() {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [showCouponInput, setShowCouponInput] = useState(false);

  const planDetails = {
    name: "Therapy - Video Trial 1 Session",
    type: "Individual Plan",
    price: 140,
    insuranceDiscount: 20,
    features: [
      "1 Therapy Video/Audio Session (60 mins)",
      "Daily Chat Responses by Therapist",
      "Unlimited License Sessions",
      "Personalized Recovery Pathway",
      "40+ Psychological Assessments",
      "Unlimited Access to Guided Meditations & Self Care Tools",
      "Switch Providers if he fit isn't right",
      "Pay Every Week - Cancel Anytime",
    ],
  };

  const productPrice = planDetails.price;
  const insuranceAmount = planDetails.insuranceDiscount;
  const payableAmount = productPrice - insuranceAmount;

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <div className="max-w-[1000px] mx-auto px-6 py-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#0B2545] hover:text-[#13B5B1] transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>

          <div className="max-w-[600px] mx-auto">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-[#0B2545] text-center mb-8">
              Checkout
            </h1>

            {/* Checkout Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              {/* Plan Header */}
              <div className="bg-gradient-to-r from-[#0B2545] to-[#13B5B1] p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={16} className="text-[#13B5B1]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">
                        {planDetails.name}
                      </h2>
                      <p className="text-white/80 text-sm">{planDetails.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-white">
                      ${planDetails.price}
                    </p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6 border-b border-slate-200">
                <ul className="space-y-3">
                  {planDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#13B5B1] mt-2 flex-shrink-0" />
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coupon Section */}
              <div className="px-6 py-4 bg-[#F1F7F7] border-b border-slate-200">
                {!showCouponInput ? (
                  <button
                    onClick={() => setShowCouponInput(true)}
                    className="text-[#13B5B1] hover:text-[#0B2545] font-medium text-sm transition-colors"
                  >
                    I have a coupon?
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#13B5B1] text-sm"
                    />
                    <button className="px-4 py-2 bg-[#13B5B1] hover:bg-[#0B2545] text-white rounded-lg transition-colors text-sm font-medium">
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-medium">Product Price:</span>
                  <span className="font-semibold">${productPrice}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-medium">Pay Via Insurance:</span>
                  <span className="font-semibold text-[#13B5B1]">
                    ${insuranceAmount}
                  </span>
                </div>
                <div className="h-px bg-slate-200" />
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#0B2545]">
                    Payable:
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    ${payableAmount}
                  </span>
                </div>
              </div>

              {/* Proceed Button */}
              <div className="p-6 pt-0">
                <button className="w-full py-4 bg-gradient-to-r from-[#13B5B1] to-[#0B2545] hover:from-[#0B2545] hover:to-[#13B5B1] text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                  Proceed to payment
                </button>
              </div>
            </div>

            {/* Support Section */}
            <div className="text-center mt-8">
              <p className="text-slate-600 text-sm mb-2">
                Have questions about your plan or insurance coverage?
              </p>
              <button className="text-[#13B5B1] hover:text-[#0B2545] font-semibold text-sm transition-colors">
                Contact Support →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}