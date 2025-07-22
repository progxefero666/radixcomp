//src\radix\cbars\btbar.tsx


import { Flex, Button, } from "@radix-ui/themes";
import { ButtonsStyle } from "../radixtheme";
import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";

/**
 * MenuButtons Column menu
 */
export interface BarButtonsProp {
    barconfig:BarButtonsCfg;
    onclick: (operation: string) => void;
}
export default function BarButtons({barconfig, onclick}: BarButtonsProp) {

    const size: any = ButtonsStyle.DEF_SIZE;

    const renderMainContent = () => {
        return (
            <>
                {barconfig.operations.map((operation, index) => (
                    <Button key={operation}
                        variant={ButtonsStyle.DEF_VAR}
                        color={barconfig.color[index]!}
                        size={size}
                        onClick={() => onclick(operation)}>
                        {barconfig.texts[index]}
                    </Button>
                ))}
            </>
        )        
    }

    return (    
        <Flex direction="row" gap="2">
            {renderMainContent()}
        </Flex>
    )

}//end
