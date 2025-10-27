import pt from "@/messages/pt.json";
import en from "@/messages/en.json";
import { NextIntlClientProvider } from "next-intl";
import LanguageSwitcher from "./_components/localeSwitcher/LanguageSwitcher";
import { Metadata } from "next";

const messagesMap = { pt, en } as const;

type Locale = keyof typeof messagesMap;

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    // We don't need the `locale` variable here; avoid unused var warning by not destructuring.
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
    // Next's LayoutProps may supply `params` as a Promise in some cases; accept both.
    params: { locale: string } | Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    const messages = messagesMap[locale as Locale] || pt;

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <main>
                <LanguageSwitcher />
                {children}
            </main>
        </NextIntlClientProvider>
    );
}
