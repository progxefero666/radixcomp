import type { Metadata } from "next";
import { ThemeProvider } from "@/radix/themes/themecontext";
import { AppThemeWrapper } from "@/radix/themes/themewrapper";

// Global styles
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "@/style/smalls.css"
import "@/style/diagrams.css"
//import "@/radix/forms/form.css";


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
