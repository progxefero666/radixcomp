//src\radix\data\pill.tsx

import { RadixConf } from "../radixconf";
import { ThemeCompStyle } from "../radixtheme";
import { TValueProps } from "../radixtypes";


const compStyle={
    borderRadius: '1.5rem',
    padding: '0px 0px 0px 0px ',  
    background: 'rgb(56, 56, 56)',
    color: 'white'    
};
//cstyle?: React.CSSProperties;
interface CompProps {
    color: string;
    text: string;
    icon: string;
}
export const Pill = ({color,text,icon}: CompProps) => {

    const size    = RadixConf.SIZES.size_2;
    const radius  = ThemeCompStyle.CONT_RADIUS;
    const variant = RadixConf.VARIANTS.surface;
    
    return (
        <div style={compStyle}>
            {icon && <span className={`mr-1 ${icon}`}></span>}
            {text}
        </div>
    );
}//end Pill
