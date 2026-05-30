'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  universities,
  getUniversityById,
  type University,
} from '@/lib/data/universities';
import {
  programs,
  getProgrammeById,
  type Programme,
} from '@/lib/data/programs';
import {
  getPricingByProgrammeAndUniversity,
  type PricingTier,
} from '@/lib/data/pricing';
import { getAccreditationsByUniversity } from '@/lib/data/accreditations';

interface UniversityComparisonProps {
  programmeId: string;
  title?: string;
  subtitle?: string;
  linkToDetail?: string;
}

type SortOption = 'name' | 'country' | 'duration' | 'tuition' | 'net-cost';

export function UniversityComparison({
  programmeId,
  title = 'Compare Universities',
  subtitle = 'Select and compare universities offering this programme',
  linkToDetail,
}: UniversityComparisonProps) {
  const programme = getProgrammeById(programmeId);

  if (!programme) {
    return <div className="text-red-600">Programme not found</div>;
  }

  const availableUniversities = universities.filter(u =>
    programme.universities.includes(u.id)
  );

  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [filterCountry, setFilterCountry] = useState<string | null>(null);
  const [selectedUniversities, setSelectedUniversities] = useState<Set<string>>(
    new Set()
  );

  // Apply filters
  let filteredUniversities = availableUniversities;
  if (filterCountry) {
    filteredUniversities = filteredUniversities.filter(
      u => u.country === filterCountry
    );
  }

  // Apply sorting
  filteredUniversities = [...filteredUniversities].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'country':
        return a.country.localeCompare(b.country);
      case 'duration': {
        const durationA = programme.duration || '';
        const durationB = programme.duration || '';
        return durationA.localeCompare(durationB);
      }
      case 'tuition': {
        const priceA = getPricingByProgrammeAndUniversity(programmeId, a.id);
        const priceB = getPricingByProgrammeAndUniversity(programmeId, b.id);
        return (priceA?.baseTuition ?? 0) - (priceB?.baseTuition ?? 0);
      }
      case 'net-cost': {
        const priceA = getPricingByProgrammeAndUniversity(programmeId, a.id);
        const priceB = getPricingByProgrammeAndUniversity(programmeId, b.id);
        return (priceA?.netFee ?? 0) - (priceB?.netFee ?? 0);
      }
      default:
        return 0;
    }
  });

  const uniqueCountries = Array.from(
    new Set(availableUniversities.map(u => u.country))
  ).sort();

  const toggleUniversity = (universityId: string) => {
    const newSelected = new Set(selectedUniversities);
    if (newSelected.has(universityId)) {
      newSelected.delete(universityId);
    } else {
      newSelected.add(universityId);
    }
    setSelectedUniversities(newSelected);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 bg-gray-50 p-4 rounded-lg">
        <div className="flex-1">
          <label className="block text-sm font-semibold mb-2">
            Filter by Country
          </label>
          <select
            value={filterCountry ?? ''}
            onChange={e => setFilterCountry(e.target.value || null)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Countries</option>
            {uniqueCountries.map(country => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-semibold mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortOption)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name">University Name</option>
            <option value="country">Country</option>
            <option value="duration">Duration</option>
            <option value="tuition">Tuition (High to Low)</option>
            <option value="net-cost">Net Cost (Low to High)</option>
          </select>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="border-b p-3 text-left font-semibold">University</th>
              <th className="border-b p-3 text-left font-semibold">Country</th>
              <th className="border-b p-3 text-left font-semibold">Duration</th>
              <th className="border-b p-3 text-left font-semibold">Delivery</th>
              <th className="border-b p-3 text-right font-semibold">Tuition</th>
              <th className="border-b p-3 text-right font-semibold">Scholarship</th>
              <th className="border-b p-3 text-right font-semibold">Net Cost</th>
              <th className="border-b p-3 text-left font-semibold">Accreditation</th>
              <th className="border-b p-3 text-center font-semibold">Select</th>
            </tr>
          </thead>
          <tbody>
            {filteredUniversities.map((university, idx) => {
              const pricing = getPricingByProgrammeAndUniversity(
                programmeId,
                university.id
              );
              const accreds = getAccreditationsByUniversity(university.id);
              const isSelected = selectedUniversities.has(university.id);

              return (
                <tr
                  key={university.id}
                  className={`${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-blue-50 transition`}
                >
                  <td className="border-b p-3 font-semibold text-navy">
                    {linkToDetail ? (
                      <Link
                        href={`${linkToDetail}/${university.slug}`}
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        {university.name}
                      </Link>
                    ) : (
                      university.name
                    )}
                  </td>
                  <td className="border-b p-3">{university.country}</td>
                  <td className="border-b p-3">{programme.duration}</td>
                  <td className="border-b p-3 text-sm">
                    {university.deliveryMode.slice(0, 2).join(', ')}
                    {university.deliveryMode.length > 2 && '+'}
                  </td>
                  <td className="border-b p-3 text-right font-semibold">
                    {pricing
                      ? `${pricing.currency} ${pricing.baseTuition.toLocaleString()}`
                      : 'N/A'}
                  </td>
                  <td className="border-b p-3 text-right text-green-600 font-semibold">
                    {pricing
                      ? `-${pricing.currency} ${pricing.scholarshipAmount.toLocaleString()}`
                      : 'N/A'}
                  </td>
                  <td className="border-b p-3 text-right font-bold text-blue-600 text-lg">
                    {pricing
                      ? `${pricing.currency} ${pricing.netFee.toLocaleString()}`
                      : 'N/A'}
                  </td>
                  <td className="border-b p-3">
                    <div className="flex flex-wrap gap-1">
                      {accreds.slice(0, 2).map(a => (
                        <span
                          key={a.id}
                          className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold"
                          title={a.fullName}
                        >
                          {a.id.toUpperCase()}
                        </span>
                      ))}
                      {accreds.length > 2 && (
                        <span className="text-gray-500 text-xs">
                          +{accreds.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="border-b p-3 text-center">
                    <button
                      onClick={() => toggleUniversity(university.id)}
                      className={`px-3 py-1 rounded text-sm font-semibold transition ${
                        isSelected
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {isSelected ? '✓ Selected' : 'Select'}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Selected Summary */}
      {selectedUniversities.size > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-semibold text-navy">
                {selectedUniversities.size} University
                {selectedUniversities.size !== 1 ? 'ies' : ''} Selected
              </p>
              <p className="text-sm text-gray-600">
                {Array.from(selectedUniversities)
                  .map(id => getUniversityById(id)?.name)
                  .filter(Boolean)
                  .join(', ')}
              </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Compare Selected
            </button>
          </div>
        </div>
      )}

      {filteredUniversities.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>No universities found for the selected filters.</p>
        </div>
      )}
    </div>
  );
}
