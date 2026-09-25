import type { Metadata } from "next";
import ServicesOverview from "@/components/sections/ServicesOverview";
import { OG_IMAGES } from "@/lib/og";

export const metadata: Metadata = {
  title:
    "Auto Detailing Services | Waterford Auto Shine | Waterford Township, MI",
  description:
    "Professional exterior detailing, interior detailing, and full detail packages in Waterford Township, MI. Premium hand wash and auto detailing for cars, trucks, and SUVs.",
  alternates: {
    canonical: "https://www.waterfordautoshine.com/services",
  },
  openGraph: {
    images: OG_IMAGES,
    title: "Auto Detailing Services | Waterford Auto Shine",
    description:
      "Professional exterior detailing, interior detailing, and full detail packages in Waterford Township, MI.",
    url: "https://www.waterfordautoshine.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesOverview />;
}
