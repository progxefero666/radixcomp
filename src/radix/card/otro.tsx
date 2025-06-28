//src\lib\xuicomp\form\inputtext.tsx


import { forwardRef, useEffect, useState } from "react";
import { ThemeCompStyle } from "../radixtheme";


interface InputTextProps {
    name: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    defaultvalue?: string;
    maxlen?: number;
    autofocus?: boolean; 
    onchange?: (value: string) => void;
}
export const InputText = forwardRef<HTMLInputElement, InputTextProps>(({
                name, label,placeholder,defaultvalue,
                inline, readonly, disabled, 
                maxlen, autofocus, onchange }, ref) => {

        const showInline:boolean = inline ?? false;
        const isReadOnly:boolean = readonly ?? false;
        const isDisabled:boolean = disabled ?? false;

        const handleOnChange = (value: string) => {
            if (onchange) {
                onchange(value);
            }
        }

        const renderReadComp = () => {
            return (
                <div className={ThemeCompStyle.C_READONLY_STYLE}>
                    <p>{defaultvalue}</p>
                </div>          
            )  
        }

        const renderEditComp = () => {
            let cell_style:string = "";
            if(isDisabled){cell_style = ThemeCompStyle.C_DISABLED_STYLE;}
            else          {cell_style = ThemeCompStyle.C_EDIT_STYLE;}

            return (
                <div className={cell_style}>
                    <input  type="text" ref={ref}                                                   
                            name={name}
                            placeholder={placeholder}
                            defaultValue={defaultvalue}
                            onChange={(e) => handleOnChange(e.target.value)}
                            maxLength={maxlen}
                            disabled={disabled}
                            autoFocus={autofocus}  />                    
                </div>
            ) 
        }

        const renderRowSimpleContent = () => {
            return (
                <div className={ThemeCompStyle.C_CELL_STYLE}>
                    {isReadOnly ? renderReadComp() : 
                                  renderEditComp() }
                </div>
            )            
        }
        
        const renderColSimpleContent = () => {
            return (            
                <div className={ThemeCompStyle.C_CELL_STYLE}>
                    {isReadOnly ? renderReadComp() : 
                                  renderEditComp() }                        
                </div>
            )             
        }

        const renderRowLabelContent = () => { 
            return (
                <div className={ThemeCompStyle.C_INCLABEL_ROW_STYLE}>
                    <div className={ThemeCompStyle.C_CELL_STYLE}>
                        {label}
                    </div>
                    {renderRowSimpleContent()}
                </div>
            )        
        }

        const renderColLabelContent = () => {
            return (
                <div className={ThemeCompStyle.C_INCLABEL_COL_STYLE}>
                    {label}      
                    {renderColSimpleContent()}                                       
                </div>
            )        
        }        

        return (
            <>
            {showInline?
                label ? renderRowLabelContent() :
                        renderRowSimpleContent()
            :
                label ? renderColLabelContent() :
                        renderColSimpleContent()
            }                      
            </>
        )
    }

)//end component
