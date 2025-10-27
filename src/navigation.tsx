'use client';

import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import type { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof NextLink>, 'href'> & {
    href: string;
};

export function Link({ href, ...props }: Props) {
    const locale = useLocale();
    const localizedHref = `/${locale}${href}`;
    return <NextLink href={localizedHref} {...props} />;
}

export { usePathname };
export { useRouter };
export function useRedirect(): (path: string) => void {
    const locale = useLocale();
    const router = useRouter();

    return (path: string) => {
        router.push(`/${locale}${path}`);
    };
}