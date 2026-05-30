'use client';

import { getAccreditationsByProgramme } from '@/lib/data/accreditations';
import { getProgrammeById } from '@/lib/data/programs';
import { universities } from '@/lib/data/universities';

interface AccreditationShowcaseProps {
  programmeId: string;
  title?: string;
}

export function AccreditationShowcase({
  programmeId,
  title = 'Accreditations & Recognition',
}: AccreditationShowcaseProps) {
  const programme = getProgrammeById(programmeId);

  if (!programme) {
    return <div className="text-red-600">Programme not found</div>;
  }

  const accreditations = getAccreditationsByProgramme(programmeId);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">
          Our programmes are accredited by leading international bodies, ensuring quality,
          rigor, and global recognition.
        </p>
      </div>

      {accreditations.length > 0 && (
        <>
          {/* Accreditation Logos Grid */}
          <div>
            <h4 className="font-semibold text-navy mb-4">Recognized By</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {accreditations.map(acc => (
                <div
                  key={acc.id}
                  className="flex flex-col items-center gap-3 p-4 border rounded-lg hover:shadow-md transition bg-gray-50"
                  title={acc.fullName}
                >
                  <div className="h-20 flex items-center justify-center">
                    {/* Placeholder for logo - in real implementation, add actual logos */}
                    <div className="text-center">
                      <p className="text-lg font-bold text-blue-600">
                        {acc.id.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-center text-navy">
                    {acc.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Accreditation Details */}
          <div>
            <h4 className="font-semibold text-navy mb-4">What These Mean</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {accreditations.map(acc => (
                <div
                  key={acc.id}
                  className="border rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600 text-sm">
                        {acc.id[0].toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-navy">{acc.fullName}</h5>
                      <p className="text-xs text-gray-500">
                        {acc.recognition === 'global'
                          ? '🌍 Global Recognition'
                          : acc.recognition === 'regional'
                            ? '🌎 Regional Recognition'
                            : '🗺️ National Recognition'}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {acc.description}
                  </p>
                  <a
                    href={acc.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Metrics */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-navy mb-4">Why This Matters</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-bold text-blue-600">98%</p>
                <p className="text-sm text-gray-600">
                  Global recognition across universities
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-600">Top 5%</p>
                <p className="text-sm text-gray-600">
                  Only elite institutions hold these accreditations
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">30+</p>
                <p className="text-sm text-gray-600">
                  Countries recognize these credentials
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Sample Certificate Section (if available) */}
      {programme.universities.length > 0 && (
        <div>
          <h4 className="font-semibold text-navy mb-4">Your Certificate</h4>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
            <div className="inline-block bg-white border rounded-lg p-6 shadow-sm">
              <p className="text-sm text-gray-600 mb-2">Sample Certificate</p>
              <div className="h-40 flex items-center justify-center bg-gradient-to-br from-navy to-blue-600 rounded text-white font-bold">
                <p>Certificate Preview</p>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                This is what your {programme.name} certificate will look like
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
