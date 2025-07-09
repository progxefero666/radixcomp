"use client";

import { Theme as RadixTheme } from "@radix-ui/themes";
import { useTheme } from "@/radix/themes/themecontext";

export function AppThemeWrapper({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
    return <RadixTheme appearance={theme}>{children}</RadixTheme>;
}
