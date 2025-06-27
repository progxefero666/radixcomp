import type { Metadata } from "next";
import { ThemeProvider } from "@/app_front/context/themecontext";
import { AppThemeWrapper } from "@/app_front/comp/themewrapper";

// Global styles
import "./globals.css";
import "@radix-ui/themes/styles.css";


// metadata for the application
export const metadata: Metadata = {
    title: "Radix UI Sandbox",
    description: "A sandbox for Radix UI Primitives",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={"antialiased"}>
                <ThemeProvider>
                    <AppThemeWrapper>{children}</AppThemeWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
