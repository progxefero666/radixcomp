//src\radix\radixbuttons.tsx

import {  Button, IconButton } from "@radix-ui/themes";
import { RadixConf } from "@/radix//radixconf";
import {ThemeButtonsStyle, ThemeMenusStyle} from "@/radix/radixtheme";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

/**
 * class RadixButtons
 */
export class RadixButtons {
    //public static readonly VAL: any = "2";

}//end class

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
}

/*
<IconButton>
	<MagnifyingGlassIcon width="18" height="18" />
</IconButton>

<Card key={index.toString()} >
    {renderButton(section)}
</Card>
*/