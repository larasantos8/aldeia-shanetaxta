import { getTranslations } from "next-intl/server";
import HeroCard from "./_components/heroCard";
import CultureCards from "./_components/cultureCards";

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
            <CultureCards
                title={t('culture.title')}
                cards={[
                    {
                        image: '/assets/images/history/image-01.png',
                        imageAlt: t('culture.card1'),
                        label: t('culture.card1'),
                        href: '/history',
                    },
                    {
                        image: '/assets/images/resistance/image-01.png',
                        imageAlt: t('culture.card2'),
                        label: t('culture.card2'),
                        href: '/resistance',
                    },
                    {
                        image: '/assets/images/spirituality/image-01.png',
                        imageAlt: t('culture.card3'),
                        label: t('culture.card3'),
                        href: '/spirituality',
                    },
                ]}
            />
        </div>
    );
}