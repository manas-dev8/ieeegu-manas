"use client";

import { Suspense } from "react";
import { RegistrationSuccessContent } from "../../components/registration-success-content";
import { LoadingSpinner } from "../../components/ui/loading-spinner";

export default function RegistrationSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
            <p className="mt-4 text-slate-600">Loading registration details...</p>
          </div>
        </div>
      }>
        <RegistrationSuccessContent />
      </Suspense>
    </div>
  );
}
