"use client";

import { Inter } from "next/font/google";
import { I18nProvider, SSRProvider, useLocale } from "react-aria";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useSupabase } from "@/contexts/SupabaseClientContext";

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
    const { supabase } = useSupabase();

    return (
        <SSRProvider>
            <I18nProvider>
                <SessionContextProvider supabaseClient={supabase}>
                    <AppHtml>{children}</AppHtml>
                </SessionContextProvider>
            </I18nProvider>
        </SSRProvider>
    );
}
