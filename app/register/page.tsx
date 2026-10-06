import type { Metadata } from "next";
import RegistrationPage from "@/components/registration/RegistrationPage";

export const metadata: Metadata = {
  title: "Programme Registration",
  description:
    "Register for an AcdyOn doctoral pathway — DBA, PhD, or Honorary Doctorate — and pay your application fee securely.",
};

// Header/footer/theme come from app/layout.tsx, so the page renders content only.
export default function Page() {
  return <RegistrationPage />;
}
