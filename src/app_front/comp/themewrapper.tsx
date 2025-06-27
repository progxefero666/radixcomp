"use client";

import { Theme as RadixTheme } from "@radix-ui/themes";
import { useTheme } from "@/app_front/context/themecontext";

export function AppThemeWrapper({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
    return <RadixTheme appearance={theme}>{children}</RadixTheme>;
}
