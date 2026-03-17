import { getTranslations } from "next-intl/server";
import HeroCard from "./_components/heroCard";

// export const dynamic = 'force-static'; // Comentado temporariamente para desenvolvimento

export function generateMetadata() {
    return {
        title: 'Aldeia Shanetaxta',
    };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HomePage' });
    
    return (
        <div>
            <HeroCard
                image="/assets/images/about/image-01.png"
                imageAlt={t('hero.imageAlt')}
                subtitle={t('hero.subtitle')}
                title={t('hero.title')}
                ctaText={t('hero.ctaText')}
                ctaLink="/about"
            />
        </div>
    );
}