//src\common\types.ts

// GENERAL types

export type TSelected = {
    id: string,
    value: boolean
};

export type TSelection = {
    id: string,
    items: TSelected[]
};

export type TOption = {
    name: string,
    text: string,
    selected: boolean
};

export type TMenu = {
    name?: string,
    items: TOption[]
};
