"use client";

import { Inter } from "next/font/google";
import { I18nProvider, useLocale } from "react-aria";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });

function AppHtml({ children }: { children: React.ReactNode }) {
    const { locale, direction } = useLocale();

    return (
        <html lang={locale} dir={direction} className={inter.className}>
            {children}
        </html>
    );
}

export function ClientProviders({ children }: { children?: React.ReactNode }) {
    return (
        <I18nProvider>
            <AppHtml>{children}</AppHtml>
        </I18nProvider>
    );
}
