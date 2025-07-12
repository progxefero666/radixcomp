//src/radix/dialog/dlginputoption.tsx
import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";

import { Label } from "radix-ui";
import { Button, Box, Flex, IconButton, Text, TextField } from "@radix-ui/themes";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Dialog } from "radix-ui";
import { InputItem, Option } from "@/common/models";

interface CompProps {
    items: InputItem[];
    onsave: (values: InputItem[]) => void;
    oncancel: () => void;
    isOpen: boolean;
}

export const DialogForm = ({ items, onsave, oncancel, isOpen }: CompProps) => {

    /*
    <Dialog.Trigger asChild>
        <button className="Button violet">Edit profile</button>
    </Dialog.Trigger>    
    */
    const [values, setValues] = useState<any[]>([]);

    //onSubmit={(event)
    const onSubmit = (event: any) => {
        event.preventDefault();
    }

    return (
        <Dialog.Root open={isOpen} >
            <Dialog.Trigger />
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />

                <Dialog.Content className="DialogContent">

                    <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>

                    <Dialog.Description className="DialogDescription">
                        Make changes to your profile here. Click save when you're done.
                    </Dialog.Description>

                    <form onSubmit={(event) => { onSubmit(event); }}>
                        <fieldset className="Fieldset">
                            <Label.Root htmlFor={items[0].id}>
                                {items[0].label}
                            </Label.Root>
                            <TextField.Root name={items[0].id} id={items[0].id}
                                radius="small" placeholder="input ..." />
                        </fieldset>

                        <fieldset className="Fieldset">
                            <Label.Root htmlFor={items[1].id}>
                                {items[1].label}
                            </Label.Root>
                            <TextField.Root name={items[1].id} id={items[1].id}
                                radius="small" placeholder="input ..." />
                        </fieldset>

                        <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
                            <Dialog.Close asChild>
                                <Button color="green" size="2" onClick={() => onsave(items)} >
                                    Save
                                    <Cross2Icon />
                                </Button>
                            </Dialog.Close>
                        </div>

                    </form>

                    <Dialog.Close asChild>
                        <Button color="yellow" size="2" onClick={oncancel} >
                            Cancel
                            <Cross2Icon />
                        </Button>
                    </Dialog.Close>

                </Dialog.Content>

            </Dialog.Portal>
        </Dialog.Root>
    )

}//end component


// Función controladora para mostrar el modal
export const showDialogForm = (items: InputItem[]): Promise<{ confirmed: boolean }> => {
    return new Promise((resolve) => {

        const modalRoot = document.createElement("div");
        document.body.appendChild(modalRoot);
        const root = createRoot(modalRoot);

        const ModalWrapper = () => {
            const [isOpen, setIsOpen] = useState(true);

            const handleConfirm = (values: any[]) => {
                setIsOpen(false);
                resolve({ confirmed: true });
            };

            const handleCancel = () => {
                setIsOpen(false);
                resolve({ confirmed: false });
            };

            useEffect(() => {
                if (!isOpen) {
                    setTimeout(() => {
                        root.unmount(); // Desmontar el componente
                        document.body.removeChild(modalRoot);
                    }, 0);
                }
            }, [isOpen]);

            return (
                <DialogForm items={items}
                    onsave={handleConfirm}
                    oncancel={handleCancel}
                    isOpen={isOpen} />
            );
        };

        root.render(<ModalWrapper />);

    });
};