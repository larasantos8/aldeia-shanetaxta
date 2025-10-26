import { useTranslations } from "next-intl";

export const dynamic = 'force-static';

export function generateMetadata() {
    return {
        title: 'Aldeia Shanetaxta',
    };
}

export default function Home() {
    const t = useTranslations('Home');

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <p>{t('appDescription')}</p>
        </div>
    );
}