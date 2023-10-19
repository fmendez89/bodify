import { ClientProviders } from "@/components/ClientProviders/ClientProviders";

import "normalize.css/normalize.css";
import "@/styles/globals.css";
import "@/styles/chrome-bug.css";

export const metadata = {
    title: "Carla Te Casa",
    description: "Crea tu plan de boda en un solo lugar",
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#fffdfa",
    applicationName: "Carla Te Casa",
    appleWebApp: { title: "Carla Te Casa" },
    icons: {
        icon: [
            { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", href: "/favicon-32x32.png" },
            { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", href: "/favicon-16x16.png" },
        ],
        apple: [
            { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png", href: "/apple-touch-icon.png" },
        ],
    },
    manifest: "/site.webmanifest",
    other: {
        "msapplication-TileColor": "#fffdfa",
        google: "notranslate",
        charSet: "UTF-8",
    },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClientProviders>
            <head />
            <body>{children}</body>
        </ClientProviders>
    );
}
