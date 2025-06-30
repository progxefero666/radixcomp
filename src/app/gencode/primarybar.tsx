//src\app\codegen\primarybar.tsx


import { useEffect, useMemo, useState } from "react";
import { Option } from "@/common/model/option";
import { AppConstants } from "@/app_front/appconstants";

    const LAYOUT_PRIMARY_BAR: string =
        "w-full min-h-screen flex flex-col px-2 mb-2";

    const LAYOUT_SECONDARY_BAR: string =        
        "w-full min-h-screen flex flex-col p-2";

        
export interface PagePrimaryBarProps {
    sections: Option[];
    actsection: string;
    chargesection: (section:string) => void
}

export interface PageSecondaryBarProps {
    actsection: string;
}

export function PagePrimaryBar({sections,chargesection,actsection}: PagePrimaryBarProps) {

    return (
        <div className={LAYOUT_PRIMARY_BAR}>
            {/*
                        <TwDaisyMenu onselection={chargesection}
                options={sections}
                optactname={actsection}
                optcolor={AppThemeMenus.MENU_OPT_COLOR}
                optactcolor={AppThemeMenus.MENU_OPT_ACT_COLOR} />
            */}

        </div>
    )

}//end comp
