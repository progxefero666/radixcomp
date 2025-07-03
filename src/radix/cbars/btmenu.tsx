//src\radix\cbars\btmenu.tsx

import { Option } from "@/common/model/option";
import { Flex, Button, } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { ThemeButtonsStyle, ThemeCompStyle, ThemeMenusStyle } from "@/radix/radixtheme";
import { radixTypeComp } from "../radixmodels";

/**
 * MenuButtons Column menu
 */
export interface MenuButtonsProp {
    actoption: string | null;
    options: Option[]
    onselection: (name: string) => void;
}
export default function MenuButtons({options,actoption,onselection}: MenuButtonsProp) {

    const compStyle:radixTypeComp = ThemeCompStyle.CONT_STYLE;

    const isActiveOption = (optionId:string,actoptionId:string|null) => {
        if( (actoptionId!== null) && (actoptionId === optionId) ) {
            return true;
        } 
        return false;
    };
	

    
    const renderButton = (id:string,
                          onclick:(name:string)=>void,
                          text:string,style:any ) => {
        return (
            <Button key={id}
                    onClick={() => onclick(id)}
                    style={style}                                
                    size={compStyle.size}
                    variant={compStyle.variant} >
                {text}
            </Button>
        )
    }

    return (    
        <Flex direction="column" gap="2" style={ThemeCompStyle.CONT_CSS_STYLE} >
            {options.map((section, index) => (
                <div>
                    {isActiveOption(section.id,actoption) ?
                        renderButton(section.id,onselection,section.text,
                                     ThemeMenusStyle.OPT_ACTIVE_COLOR_CSS_STYLE)
                    :
                        renderButton(section.id,onselection,section.text,
                                     ThemeMenusStyle.OPT_COLOR_CSS_STYLE)                    
                    }
                    
                </div>                
            ))}
        </Flex>
    )

}//end

/*
                  <Card key={index.toString()} >
                       {renderButton(section)}
                    </Card>
*/