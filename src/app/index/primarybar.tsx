// src/app/index/primarybar.tsx

import React from "react";
import { Flex} from "@radix-ui/themes";
import { Option } from "@/common/model/option";
import MenuButtons from "@/radix/cbars/btmenu";
import { AppConfig } from "@/app/index/appconfig";


const primaryBarStyle = {
    background: 'rgb(24, 24, 27)',
};
interface PrimaryBarProps {
    module: string;
    onselection: (sectionId:string) => void;
}
export default function PrimaryBar({onselection,module}: PrimaryBarProps) {

    return (
        <Flex width="100%"  height="100vh" align="center" 
              direction="column" py="4" style={primaryBarStyle} >

            <MenuButtons options={AppConfig.MODULES}
                onclick={onselection} 
                actoption={module} />	

        </Flex>
    );

}//end PrimaryBar
