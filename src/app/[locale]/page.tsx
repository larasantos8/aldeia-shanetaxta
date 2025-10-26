import Image from "next/image";
import styles from "../page.module.css";
import { getDictionary } from "@/lib/i18n";

export async function generateStaticParams() {
    return [
        { locale: 'pt' },
        { locale: 'en' }
    ]
}

export default async function Home({
    params: { locale }
}: {
    params: { locale: string }
}) {
    const dict = await getDictionary(locale);

    return (
        <div className={styles.page}>
            <h1>{dict.welcome}</h1>
            <p>{dict.appDescription}</p>
        </div>
    );
}