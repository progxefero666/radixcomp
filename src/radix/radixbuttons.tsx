//src\radix\radixbuttons.tsx

import { Link,Button,IconButton } from "@radix-ui/themes";
import { RadixConf } from "@/radix//radixconf";
import {ButtonsStyle, MenusStyle} from "@/radix/radixtheme";
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
                color={ButtonsStyle.BTN_HOME_COLOR}
                className={ButtonsStyle.BTN_HOME_STYLE}
                size={ButtonsStyle.BTN_DEF_SIZE} >
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
            size={MenusStyle.OPT_SIZE} >
            {text}
        </Button>
    )
};//end