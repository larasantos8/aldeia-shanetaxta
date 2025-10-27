import { useTranslations } from "next-intl";

export const dynamic = 'force-static';

export function generateMetadata() {
    return {
        title: 'Aldeia Shanetaxta',
    };
}

export default function Home() {
    const t = useTranslations('HomePage');

    return (
        <div>
            <h1>{t('culture.title')}</h1>
            <p>{t('culture.title')}</p>
        </div>
    );
}