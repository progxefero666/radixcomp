//src\app\workflows\pagecomp\wfsecomdbar.tsx

import { Flex } from "@radix-ui/themes";



const secondBarStyle = {
    background: 'rgb(24, 24, 27)',
};


interface CompProps {section: string|null;}
export function SecondBar({section}: CompProps) {

    const onSelection = (sectionId: string) => {
        //not implemented yet
    }
    return (
        <Flex width="100%" direction="column" gapY="2" style={secondBarStyle} >
            <p>Second Bar</p>
        </Flex>
    );

}//end PrimaryBar
