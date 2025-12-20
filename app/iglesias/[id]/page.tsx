import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { zonas } from "@/data";
import { notFound } from "next/navigation";
import { Clock, MapPin, Phone, Mail, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return zonas.flatMap((zona) =>
        zona.iglesias.map((iglesia) => ({
            id: iglesia.id.toString(),
        }))
    );
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params;
    const parsedId = parseInt(id);
    const iglesia = zonas
        .flatMap((z) => z.iglesias)
        .find((i) => i.id === parsedId);

    if (!iglesia) {
        return {
            title: "Iglesia no encontrada",
        };
    }

    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: `${iglesia.name} | Iglesia Cristiana MMM Chile`,
        description: `Visita nuestra iglesia en ${iglesia.city}. Pastor ${iglesia.pastor}. Horarios: ${iglesia.services.join(", ")}. Predicamos el evangelio de Jesucristo.`,
        keywords: [`iglesia cristiana ${iglesia.city}`, `MMM ${iglesia.name}`, "iglesia evangélica", "iglesia pentecostal", "Chile"],
        openGraph: {
            title: `${iglesia.name} | Iglesia Cristiana MMM Chile`,
            description: `Ubicada en ${iglesia.address}. Te invitamos a nuestros servicios cristianos.`,
            url: `https://mmmchile.cl/iglesias/${iglesia.id}`,
            images: iglesia.image ? [iglesia.image, ...previousImages] : previousImages,
        },
    };
}

export default async function IglesiaPage({ params }: Props) {
    const { id } = await params;
    const parsedId = parseInt(id);
    const iglesia = zonas
        .flatMap((z) => z.iglesias)
        .find((i) => i.id === parsedId);

    if (!iglesia) {
        notFound();
    }

    return (
        <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden pt-20">
            <div className="layout-container flex h-full grow flex-col">
                <main
                    className="flex-1"
                    style={{
                        backgroundColor: "var(--secondary-color)",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div>

                    <div className="container mx-auto px-6 py-12 relative z-10">
                        <Link
                            href="/iglesias"
                            className="text-[var(--primary-color)] hover:underline mb-8 inline-block flex items-center gap-2"
                        >
                            <span>← Volver a Iglesias</span>
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
                            {/* Image Section */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] bg-gray-800">
                                <Image
                                    src={iglesia.image || "/images/lema-mobile.png"}
                                    alt={iglesia.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Info Section */}
                            <div className="flex flex-col gap-6 text-white">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-2">
                                        {iglesia.name}
                                    </h1>
                                    <p className="text-[var(--primary-color)] text-xl font-semibold flex items-center gap-2">
                                        <User className="size-6 text-[var(--primary-color)]" />
                                        Pastor: {iglesia.pastor}
                                    </p>
                                </div>

                                <div className="space-y-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="size-6 text-[var(--primary-color)] mt-1 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-300">Dirección</p>
                                            <p className="text-white">{iglesia.address}</p>
                                            <p className="text-gray-400 text-sm">{iglesia.city}, {iglesia.region}</p>
                                        </div>
                                    </div>

                                    {iglesia.phone && (
                                        <div className="flex items-start gap-3">
                                            <Phone className="size-6 text-[var(--primary-color)] mt-1 shrink-0" />
                                            <div>
                                                <p className="font-semibold text-gray-300">Teléfono</p>
                                                <p className="text-white">{iglesia.phone}</p>
                                            </div>
                                        </div>
                                    )}

                                    {iglesia.email && (
                                        <div className="flex items-start gap-3">
                                            <Mail className="size-6 text-[var(--primary-color)] mt-1 shrink-0" />
                                            <div>
                                                <p className="font-semibold text-gray-300">Email</p>
                                                <p className="text-white">{iglesia.email}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                    <div className="flex items-start gap-3 mb-4">
                                        <Clock className="size-6 text-[var(--primary-color)] mt-1 shrink-0" />
                                        <p className="font-semibold text-gray-300 text-lg">Horarios de Servicios</p>
                                    </div>
                                    {iglesia.services.length > 0 ? (
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {iglesia.services.map((service, idx) => (
                                                <li key={idx} className="bg-white/10 p-3 rounded-lg text-sm">
                                                    {service}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-400 italic">Contáctenos para conocer los horarios de servicios.</p>
                                    )}
                                </div>

                                <div className="mt-4">
                                    {iglesia.phone && (
                                        <a
                                            href={`tel:${iglesia.phone}`}
                                            className="w-full sm:w-auto inline-flex justify-center items-center rounded-lg bg-[var(--primary-color)] px-8 py-4 text-lg font-semibold text-white hover:bg-blue-600 transition-colors duration-200"
                                        >
                                            Llamar ahora
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Description Section */}
                        {iglesia.description && (
                            <div className="mt-16 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                                <h2 className="text-3xl font-bold text-white mb-6">Sobre nuestra iglesia</h2>
                                <p className="text-gray-200 text-lg leading-relaxed">
                                    {iglesia.description}
                                </p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
