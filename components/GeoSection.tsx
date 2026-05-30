'use client';

import { useGeoCountry, type CountryCode } from '@/hooks/useGeoCountry';
import { ReactNode, Suspense } from 'react';

interface GeoSectionProps {
  showFor?: CountryCode[];
  hideFor?: CountryCode[];
  children: ReactNode;
}

function GeoSectionContent({
  showFor,
  hideFor,
  children,
}: GeoSectionProps) {
  const country = useGeoCountry();

  if (!country) return null;

  // Show if:
  // 1. showFor is specified and country is in it, OR
  // 2. showFor is NOT specified and hideFor is NOT specified, OR
  // 3. showFor is NOT specified but hideFor IS specified and country is NOT in it

  const isInShowFor = showFor ? showFor.includes(country) : true;
  const isNotInHideFor = hideFor ? !hideFor.includes(country) : true;

  const shouldShow = isInShowFor && isNotInHideFor;

  return shouldShow ? <>{children}</> : null;
}

export function GeoSection({
  showFor,
  hideFor,
  children,
}: GeoSectionProps) {
  return (
    <Suspense fallback={null}>
      <GeoSectionContent showFor={showFor} hideFor={hideFor}>
        {children}
      </GeoSectionContent>
    </Suspense>
  );
}
