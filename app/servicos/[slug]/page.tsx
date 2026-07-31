import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { services } from "@/lib/constants";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = services.find((item) => item.id === slug);

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
