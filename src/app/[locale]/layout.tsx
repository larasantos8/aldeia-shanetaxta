import pt from "@/messages/pt.json";
import en from "@/messages/en.json";
import { NextIntlClientProvider } from "next-intl";
import { Metadata } from "next";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Voices from "./_components/voices";
import Accordion from "./_components/accordion";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const messagesMap = { pt, en } as const;

type Locale = keyof typeof messagesMap;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    await params;
    
    return {
        title: "Aldeia Shanetaxta",
        description: "Aldeia Shanetaxta - Cultura e tradição",
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string } | Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    const messages = messagesMap[locale as Locale] || pt;
    
    const tAccordion = await getTranslations({ locale, namespace: 'Accordion' });

    const accordionItems = [
        {
            title: tAccordion('items.0.title'),
            content: <p>{tAccordion('items.0.content')}</p>
        },
        {
            title: tAccordion('items.1.title'),
            content: (
                <div>
                    <p>{tAccordion('items.1.content')}</p>
                    <a 
                        href={tAccordion('items.1.link')} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#8B4513', textDecoration: 'underline', display: 'block', marginTop: '8px', marginBottom: '16px' }}
                    >
                        {tAccordion('items.1.link')}
                    </a>
                    <Image
                        src="/assets/images/acre.png"
                        alt="Mapa do Acre"
                        width={1200}
                        height={800}
                        style={{ width: '100%', height: 'auto', marginBottom: '16px' }}
                    />
                    <p style={{ marginTop: '16px' }}>{tAccordion('items.1.fullText')}</p>
                </div>
            )
        }
    ];

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <main>
                <Header />
                {children}
                <div className="wrapper">
                    <Voices locale={locale} />
                    <Accordion items={accordionItems} />
                </div>
                <Footer />
            </main>
        </NextIntlClientProvider>
    );
}
