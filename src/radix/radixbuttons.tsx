//src\radix\radixbuttons.tsx

import { Link,Button,IconButton } from "@radix-ui/themes";
import { RadixConf } from "@/radix//radixconf";
import {ThemeButtonsStyle, ThemeMenusStyle} from "@/radix/radixtheme";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

/**
 * class RadixButtons
 */
export class RadixButtons {
    //public static readonly VAL: any = "2";
    
}//end class

export const renderHomeButton = (isPageIndex:boolean) => {
    return (
        <Link href="/" >
            <Button
                variant={isPageIndex ? RadixConf.VARIANTS.solid :
                                        RadixConf.VARIANTS.soft}
                color={ThemeButtonsStyle.BTN_HOME_COLOR}
                className={ThemeButtonsStyle.BTN_HOME_STYLE}
                size={ThemeButtonsStyle.BTN_DEF_SIZE} >
                Home
            </Button>
        </Link>
    )
}


export const renderOptionButton = (id: string, onclick: (name: string) => void,
    text: string, style: any) => {
    return (
        <Button key={id} 
            onClick={() => onclick(id)}
            style={style}
            size={ThemeMenusStyle.OPT_SIZE} >
            {text}
        </Button>
    )
};//end