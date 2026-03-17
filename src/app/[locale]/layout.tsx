import pt from "@/messages/pt.json";
import en from "@/messages/en.json";
import { NextIntlClientProvider } from "next-intl";
import LanguageSwitcher from "./_components/localeSwitcher/LanguageSwitcher";
import { Metadata } from "next";
import Header from "./_components/header";

const messagesMap = { pt, en } as const;

type Locale = keyof typeof messagesMap;

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
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

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <main>
                {/* <LanguageSwitcher /> */}
                <Header />
                {children}
            </main>
        </NextIntlClientProvider>
    );
}
