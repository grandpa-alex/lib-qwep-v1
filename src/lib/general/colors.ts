export type Hex = `#${string}`;

export const colorSchemes = ['light', 'dark'];

export type TypeColorScheme = {
    primary: Hex;
    secondary: Hex;

    //items
    primaryItem: Hex;
    primaryItemActive: Hex;
    successItem: Hex;
    successItemActive: Hex;
    infoItem: Hex;
    infoItemActive: Hex;
    errorItem: Hex;
    errorItemActive: Hex;
    warningItem: Hex;
    warningItemActive: Hex;
    //base

    background: Hex;
    backgroundBox: Hex;
    backgroundTooltip: Hex;
    disabled: Hex;

    //text
    title: Hex;
    text: Hex;
    textItem: Hex;
    link: Hex;
    linkActive: Hex;
    prompt: Hex;

    //general
    alpha: Hex;
    omaga: Hex;
};

export const colorsLight: TypeColorScheme = {
    primary: '#218EE1',
    secondary: '#E5F1FF',

    //items
    primaryItem: '#218EE1',
    primaryItemActive: '#007ad8',
    successItem: '#6EBA6E',
    successItemActive: '#3b8c3b',
    infoItem: '#59aeee',
    infoItemActive: '#2378b8',
    errorItem: '#f77f76',
    errorItemActive: '#d18730',
    warningItem: '#F0BC7F',
    warningItemActive: '#d18730',
    //base
    background: '#ffffff',
    backgroundBox: '#ffffee',
    backgroundTooltip: '#1f1f1fc8',
    disabled: '#dadada',

    //text
    title: '#1A242A',
    text: '#1A242A',
    textItem: '#F5F5F5',
    link: '#7677C3',
    linkActive: '#7677ff',
    prompt: '#4f4f4f',

    //general
    alpha: '#ffffff',
    omaga: '#000000',
};

export const colorsDark: TypeColorScheme = {
    primary: '#218EE1',
    secondary: '#E5F1FF',

    //items
    primaryItem: '#218EE1',
    primaryItemActive: '#007ad8',
    successItem: '#6EBA6E',
    successItemActive: '#3b8c3b',
    infoItem: '#59aeee',
    infoItemActive: '#2378b8',
    errorItem: '#f77f76',
    errorItemActive: '#',
    warningItem: '#F0BC7F',
    warningItemActive: '#d18730',
    //base

    background: '#ffffff',
    backgroundBox: '#ffff00',
    backgroundTooltip: '#1f1f1fc8',
    disabled: '#dadada',

    //text
    title: '#1A242A',
    text: '#1A242A',
    textItem: '#F5F5F5',
    link: '#7677C3',
    linkActive: '#7677ff',
    prompt: '#4f4f4f',

    //general
    alpha: '#ffffff',
    omaga: '#000000',
};
