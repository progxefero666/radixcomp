//src\libcomp\inputfiles.tsx

import { forwardRef, ChangeEvent } from "react";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";
import { RadixConfTexts } from "../radixconf";
export interface InputFilesProps {
    autocommit?: boolean;
    disabled?: boolean;
    inline?: boolean;
    readonly?: boolean;
    name: string;
    classname?: string;
    label?: string;
    onchange?: (result: File, name?: string) => void;
    formats: string;
    multiple: boolean;
}
export const InputFiles = forwardRef<HTMLInputElement, InputFilesProps>
        (({name,formats,multiple,classname,label,onchange }, ref) => {

        const handleOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
            if (!event.target.files) {
                return;
            }
            if (onchange) {
                const files: FileList = event.target.files;
                if (files && onchange) {
                    if (name){onchange(files[0],name);}
                    else     {onchange(files[0]);}

                }
            }
        };

        const renderContent = () => (
            <Text size={RadixConfTexts.TEXT_DEF_SIZE} >
                {label && <label className="w-full">{label}</label>}
                <input
                    name={name}
                    ref={ref}
                    type="file"
                    className="w-full"
                    multiple={multiple}
                    accept={formats}
                    onChange={handleOnChange} />
            </Text>
        );

        return classname ? (
            <div className={classname}>{renderContent()}</div>
        ) : (
            renderContent()
        );

    });