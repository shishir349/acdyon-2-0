'use client';

import { useState } from 'react';
import {
  pricing,
  getPricingByProgramme,
  getPricingByProgrammeAndUniversity,
  calculateInstallment,
  type PricingTier,
} from '@/lib/data/pricing';
import { getUniversityById } from '@/lib/data/universities';
import { getProgrammeById } from '@/lib/data/programs';

interface PricingDisplayProps {
  programmeId: string;
  universityId?: string;
  title?: string;
}

type InstallmentPlan = 1 | 3 | 6 | 12;

export function PricingDisplay({
  programmeId,
  universityId,
  title = 'Programme Pricing',
}: PricingDisplayProps) {
  const programme = getProgrammeById(programmeId);

  if (!programme) {
    return <div className="text-red-600">Programme not found</div>;
  }

  const pricingOptions = universityId
    ? getPricingByProgrammeAndUniversity(programmeId, universityId)
      ? [getPricingByProgrammeAndUniversity(programmeId, universityId)!]
      : []
    : getPricingByProgramme(programmeId);

  const [selectedPlan, setSelectedPlan] = useState<InstallmentPlan>(1);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">
          Transparent pricing with flexible payment options
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="space-y-6">
        {pricingOptions.map((pricingTier, idx) => {
          const uni = pricingTier.university
            ? getUniversityById(pricingTier.university)
            : null;

          return (
            <div
              key={`${pricingTier.programme}-${pricingTier.university || 'general'}`}
              className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              {/* Header */}
              <h4 className="text-xl font-bold text-navy mb-2">
                {pricingTier.description}
              </h4>
              {uni && (
                <p className="text-sm text-gray-600 mb-4">
                  {uni.city}, {uni.country}
                </p>
              )}

              {/* Price Summary Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-1">
                    Base Tuition
                  </p>
                  <p className="text-2xl font-bold text-navy">
                    {pricingTier.currency}
                    <br />
                    {pricingTier.baseTuition.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-1">
                    Scholarship
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    -{pricingTier.currency}
                    <br />
                    {pricingTier.scholarshipAmount.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-1">
                    Net Fee
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {pricingTier.currency}
                    <br />
                    {pricingTier.netFee.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Installment Plans */}
              <div className="space-y-3">
                <p className="font-semibold text-navy mb-4">Payment Plans</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    {
                      value: 1 as InstallmentPlan,
                      label: 'Full Payment',
                      subtext: 'Due now',
                    },
                    {
                      value: 3 as InstallmentPlan,
                      label: '3 Installments',
                      subtext: 'Monthly payments',
                    },
                    {
                      value: 6 as InstallmentPlan,
                      label: '6 Installments',
                      subtext: 'Monthly payments',
                    },
                    {
                      value: 12 as InstallmentPlan,
                      label: '12 Installments',
                      subtext: 'Monthly payments',
                    },
                  ].map(plan => {
                    const installment = calculateInstallment(
                      pricingTier.netFee,
                      plan.value
                    );
                    const isSelected = selectedPlan === plan.value;

                    return (
                      <label
                        key={plan.value}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`plan-${pricingTier.programme}-${pricingTier.university}`}
                          value={plan.value}
                          checked={isSelected}
                          onChange={() => setSelectedPlan(plan.value)}
                          className="mr-3 w-4 h-4"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-navy">
                            {plan.label}
                          </p>
                          <p className="text-sm text-gray-600">
                            {plan.value === 1
                              ? `${pricingTier.currency} ${pricingTier.netFee.toLocaleString()}`
                              : `${pricingTier.currency} ${installment.monthlyAmount.toLocaleString()} / month`}
                          </p>
                          <p className="text-xs text-gray-500">
                            {plan.subtext}
                          </p>
                        </div>
                        {plan.value !== 1 && (
                          <div className="text-right">
                            <p className="text-sm text-gray-600">
                              Total: {pricingTier.currency}
                              {(installment.monthlyAmount * plan.value).toLocaleString()}
                            </p>
                          </div>
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <button className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                Proceed with {selectedPlan === 1 ? 'Full Payment' : `${selectedPlan}-Month Plan`}
              </button>

              {/* Additional Info */}
              {pricingTier.scholarshipAmount > 0 && (
                <p className="text-xs text-gray-500 mt-3 text-center">
                  💡 Scholarship already applied to net fee
                </p>
              )}
            </div>
          );
        })}
      </div>

      {pricingOptions.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>Pricing information not available for this selection.</p>
        </div>
      )}
    </div>
  );
}
