import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { services } from "@/lib/constants";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
