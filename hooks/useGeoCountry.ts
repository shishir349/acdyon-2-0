'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export type CountryCode = 'in' | 'uk' | 'us' | 'ae' | 'sa' | 'qa' | 'ca' | 'eu';

export function useGeoCountry(): CountryCode | null {
  const searchParams = useSearchParams();
  const [country, setCountry] = useState<CountryCode | null>(null);

  useEffect(() => {
    // Query parameter for testing geo-specific content
    const queryCountry = searchParams.get('country');
    if (queryCountry && isValidCountry(queryCountry)) {
      setCountry(queryCountry as CountryCode);
      return;
    }

    // Default to India for static export
    // For production deployment with SSR/API, add IP-based detection here
    setCountry('in');
  }, [searchParams]);

  return country;
}

function isValidCountry(code: any): code is CountryCode {
  const validCountries: CountryCode[] = [
    'in',
    'uk',
    'us',
    'ae',
    'sa',
    'qa',
    'ca',
    'eu',
  ];
  return validCountries.includes(code);
}

function mapCountryToCode(country: string): CountryCode {
  const countryMap: { [key: string]: CountryCode } = {
    // Full names
    India: 'in',
    'United Kingdom': 'uk',
    'United States': 'us',
    'United Arab Emirates': 'ae',
    'Saudi Arabia': 'sa',
    Qatar: 'qa',
    Canada: 'ca',

    // Country codes
    IN: 'in',
    GB: 'uk',
    US: 'us',
    AE: 'ae',
    SA: 'sa',
    QA: 'qa',
    CA: 'ca',

    // Europe
    FR: 'eu',
    DE: 'eu',
    IT: 'eu',
    ES: 'eu',
    NL: 'eu',
    BE: 'eu',
    CH: 'eu',
    AT: 'eu',
    SE: 'eu',
    NO: 'eu',
    DK: 'eu',
    IE: 'eu',
    Poland: 'eu',
    Germany: 'eu',
    France: 'eu',
    Italy: 'eu',
    Spain: 'eu',
  };

  return countryMap[country] || 'in'; // Default to India
}
