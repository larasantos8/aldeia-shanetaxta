export async function getMessages(locale: string) {
    try {
        return (await import(`@/messages/${locale}.json`)).default;
    } catch {
        // Fallback to default locale if messages for locale are not found
        return (await import('@/messages/pt.json')).default;
    }
}