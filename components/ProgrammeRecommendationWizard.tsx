'use client';

import { useState } from 'react';
import { programs, getProgrammeById, type Programme } from '@/lib/data/programs';
import { getPricingByProgramme } from '@/lib/data/pricing';

interface WizardState {
  step: number;
  goal: string | null;
  budget: string | null;
  duration: string | null;
  studyPreference: string | null;
}

interface RecommendationResult {
  programme: Programme;
  reason: string;
}

export function ProgrammeRecommendationWizard() {
  const [state, setState] = useState<WizardState>({
    step: 1,
    goal: null,
    budget: null,
    duration: null,
    studyPreference: null,
  });

  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(
    null
  );

  const getRecommendation = () => {
    // Start with all programmes
    let recommended = [...programs];
    const reasons: string[] = [];

    // Filter by goal
    if (state.goal === 'leadership') {
      recommended = recommended.filter(p => p.category === 'DBA');
      reasons.push('Based on your leadership development goal');
    } else if (state.goal === 'research') {
      recommended = recommended.filter(p => p.category === 'PhD');
      reasons.push('Based on your research focus');
    } else if (state.goal === 'ai-skills') {
      recommended = recommended.filter(p => p.type === 'course');
      reasons.push('Based on your AI skills development goal');
    } else if (state.goal === 'recognition') {
      recommended = recommended.filter(p =>
        ['Honorary Doctorate', 'Honorary Professorship'].includes(p.category)
      );
      reasons.push('Based on your recognition goal');
    }

    // Filter by budget
    if (state.budget === 'low') {
      const lowBudgetProgrammes = recommended.filter(p => {
        const pricingOptions = getPricingByProgramme(p.id);
        return pricingOptions.length > 0 && pricingOptions[0].netFee < 5000;
      });
      if (lowBudgetProgrammes.length > 0) {
        recommended = lowBudgetProgrammes;
        reasons.push('Fits your budget under $5,000');
      }
    } else if (state.budget === 'medium') {
      const mediumBudgetProgrammes = recommended.filter(p => {
        const pricingOptions = getPricingByProgramme(p.id);
        return (
          pricingOptions.length > 0 &&
          pricingOptions[0].netFee >= 5000 &&
          pricingOptions[0].netFee <= 35000
        );
      });
      if (mediumBudgetProgrammes.length > 0) {
        recommended = mediumBudgetProgrammes;
        reasons.push('Fits your budget $5,000 - $35,000');
      }
    } else if (state.budget === 'high') {
      const highBudgetProgrammes = recommended.filter(p => {
        const pricingOptions = getPricingByProgramme(p.id);
        return pricingOptions.length > 0 && pricingOptions[0].netFee > 35000;
      });
      if (highBudgetProgrammes.length > 0) {
        recommended = highBudgetProgrammes;
        reasons.push('Premium programme over $35,000');
      }
    }

    // Filter by duration preference
    if (state.duration === 'short') {
      const shortProgrammes = recommended.filter(
        p => p.duration.includes('4 months') || p.duration.includes('weeks')
      );
      if (shortProgrammes.length > 0) {
        recommended = shortProgrammes;
        reasons.push('Completes in 4 months or less');
      }
    } else if (state.duration === 'medium') {
      const mediumProgrammes = recommended.filter(
        p =>
          p.duration.includes('2') ||
          p.duration.includes('3') ||
          p.duration.includes('years')
      );
      if (mediumProgrammes.length > 0) {
        recommended = mediumProgrammes;
        reasons.push('Takes 2-3 years');
      }
    }

    // Filter by study preference
    if (state.studyPreference) {
      const studyProgrammes = recommended.filter(p =>
        p.deliveryMode.includes(state.studyPreference!)
      );
      if (studyProgrammes.length > 0) {
        recommended = studyProgrammes;
        reasons.push(`Available in ${state.studyPreference} format`);
      }
    }

    // If we have matches, recommend the first one
    if (recommended.length > 0) {
      setRecommendation({
        programme: recommended[0],
        reason: reasons.join(' • '),
      });
    } else {
      // Fallback to first available programme
      setRecommendation({
        programme: programs[0],
        reason: 'Our most popular programme',
      });
    }

    setState(prev => ({ ...prev, step: 5 })); // Go to results
  };

  const resetWizard = () => {
    setState({
      step: 1,
      goal: null,
      budget: null,
      duration: null,
      studyPreference: null,
    });
    setRecommendation(null);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Indicator */}
      {state.step < 5 && (
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className={`flex-1 mx-1 h-2 rounded-full ${
                  state.step >= i ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            Step {state.step} of 4
          </p>
        </div>
      )}

      {/* Step 1: Goal */}
      {state.step === 1 && (
        <div className="space-y-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">What's Your Goal?</h2>
            <p className="text-gray-600">
              Help us understand what you're looking to achieve
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 mt-6">
            {[
              {
                value: 'leadership',
                label: 'Leadership Development',
                icon: '👔',
                desc: 'Advance your executive skills with a DBA',
              },
              {
                value: 'research',
                label: 'Advanced Research',
                icon: '🔬',
                desc: 'Pursue doctoral research with a PhD',
              },
              {
                value: 'ai-skills',
                label: 'AI & Tech Skills',
                icon: '🤖',
                desc: 'Master AI and automation in 4-16 weeks',
              },
              {
                value: 'recognition',
                label: 'Professional Recognition',
                icon: '🏆',
                desc: 'Honorary Doctorate or Professorship',
              },
            ].map(option => (
              <button
                key={option.value}
                onClick={() =>
                  setState(prev => ({ ...prev, goal: option.value, step: 2 }))
                }
                className="w-full p-4 border-2 border-gray-200 rounded-lg text-left hover:border-blue-600 hover:bg-blue-50 transition group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <p className="font-bold text-navy group-hover:text-blue-600">
                      {option.label}
                    </p>
                    <p className="text-sm text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Budget */}
      {state.step === 2 && (
        <div className="space-y-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">What's Your Budget?</h2>
            <p className="text-gray-600">
              We'll recommend programmes that fit your investment level
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 mt-6">
            {[
              {
                value: 'low',
                label: 'Budget-Friendly',
                icon: '💰',
                amount: 'Under $5,000',
              },
              {
                value: 'medium',
                label: 'Standard Investment',
                icon: '💳',
                amount: '$5,000 - $35,000',
              },
              {
                value: 'high',
                label: 'Premium',
                icon: '💎',
                amount: '$35,000+',
              },
            ].map(option => (
              <button
                key={option.value}
                onClick={() =>
                  setState(prev => ({ ...prev, budget: option.value, step: 3 }))
                }
                className="w-full p-4 border-2 border-gray-200 rounded-lg text-left hover:border-blue-600 hover:bg-blue-50 transition group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <p className="font-bold text-navy group-hover:text-blue-600">
                        {option.label}
                      </p>
                      <p className="text-sm text-gray-500">{option.amount}</p>
                    </div>
                  </div>
                  <span className="text-xl">→</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => setState(prev => ({ ...prev, step: 1 }))}
            className="text-sm text-gray-600 hover:text-gray-800 mt-4"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 3: Duration */}
      {state.step === 3 && (
        <div className="space-y-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Preferred Duration?</h2>
            <p className="text-gray-600">
              How long are you willing to invest?
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 mt-6">
            {[
              {
                value: 'short',
                label: 'Quick Upskill',
                icon: '⚡',
                duration: '4 months or less',
              },
              {
                value: 'medium',
                label: 'Standard Timeline',
                icon: '📅',
                duration: '2-3 years',
              },
              {
                value: 'long',
                label: 'Deep Dive',
                icon: '🎓',
                duration: '3+ years',
              },
            ].map(option => (
              <button
                key={option.value}
                onClick={() =>
                  setState(prev => ({ ...prev, duration: option.value, step: 4 }))
                }
                className="w-full p-4 border-2 border-gray-200 rounded-lg text-left hover:border-blue-600 hover:bg-blue-50 transition group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <p className="font-bold text-navy group-hover:text-blue-600">
                        {option.label}
                      </p>
                      <p className="text-sm text-gray-500">{option.duration}</p>
                    </div>
                  </div>
                  <span className="text-xl">→</span>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => setState(prev => ({ ...prev, step: 2 }))}
            className="text-sm text-gray-600 hover:text-gray-800 mt-4"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 4: Study Preference */}
      {state.step === 4 && (
        <div className="space-y-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">How Do You Prefer to Study?</h2>
            <p className="text-gray-600">
              Choose your learning format
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 mt-6">
            {[
              {
                value: 'Online',
                label: '100% Online',
                icon: '💻',
                desc: 'Complete flexibility, study anywhere',
              },
              {
                value: 'Part-Time',
                label: 'Part-Time On-Campus',
                icon: '🏫',
                desc: 'Learn while working',
              },
              {
                value: 'Hybrid',
                label: 'Hybrid',
                icon: '🌐',
                desc: 'Mix of online and in-person sessions',
              },
            ].map(option => (
              <button
                key={option.value}
                onClick={() => {
                  setState(prev => ({
                    ...prev,
                    studyPreference: option.value,
                  }));
                  // Immediately get recommendation
                  setTimeout(() => getRecommendation(), 100);
                }}
                className="w-full p-4 border-2 border-gray-200 rounded-lg text-left hover:border-blue-600 hover:bg-blue-50 transition group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{option.icon}</span>
                  <div className="flex-1">
                    <p className="font-bold text-navy group-hover:text-blue-600">
                      {option.label}
                    </p>
                    <p className="text-sm text-gray-600">{option.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => setState(prev => ({ ...prev, step: 3 }))}
            className="text-sm text-gray-600 hover:text-gray-800 mt-4"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 5: Recommendation Result */}
      {state.step === 5 && recommendation && (
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600 mb-2">
              ✓ Perfect Match Found
            </p>
            <h2 className="text-3xl font-bold mb-4">
              {recommendation.programme.name}
            </h2>
            <p className="text-gray-600">{recommendation.reason}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              {recommendation.programme.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs text-gray-600 font-semibold mb-1">
                  Duration
                </p>
                <p className="text-lg font-bold text-navy">
                  {recommendation.programme.duration}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 font-semibold mb-1">
                  Format
                </p>
                <p className="text-lg font-bold text-navy">
                  {recommendation.programme.deliveryMode[0]}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-navy mb-2">
                Key Outcomes
              </p>
              <ul className="text-sm space-y-1">
                {recommendation.programme.outcomes.slice(0, 3).map((outcome, i) => (
                  <li key={i} className="text-gray-700">
                    ✓ {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition">
              Learn More & Explore
            </button>
            <button
              onClick={resetWizard}
              className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Try Different Options
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
