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
import styles from "./_components/accordion/style.module.scss";

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
                <div className={styles.accordionContent}>
                    <p>{tAccordion('items.1.content')}</p>
                    <a
                        href={tAccordion('items.1.link')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mapLink}
                    >
                        {tAccordion('items.1.link')}
                    </a>
                    <Image
                        src="/assets/images/acre.png"
                        alt={tAccordion('mapAlt')}
                        width={1200}
                        height={800}
                        className={styles.mapImage}
                    />
                    <p className={styles.mapDescription}>{tAccordion('items.1.fullText')}</p>
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
                <Footer locale={locale} />
            </main>
        </NextIntlClientProvider>
    );
}
