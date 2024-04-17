export type Hex = `#${string}`;

export const TypeDafaultColorSchemes = ['light', 'dark'];

export type TypeColorScheme = {
    primary: Hex;
    secondary: Hex;

    //other 
    lightElem: Hex;

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
    shadowColor: Hex;
    

    //sec base
    backgroundSuccess: Hex;
    backgroundError: Hex;
    backgroundInfo: Hex;
    backgroundwarning: Hex;

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
} & {
    [key: string]: Hex;
};


export const colorsLight: TypeColorScheme = {
    primary: '#2563EB',
    secondary: '#E5F1FF',

    //other 
    lightElem: '#A9C1CF',


    //items
    primaryItem: '#2563EB',
    primaryItemActive: '#1D4ED8',
    successItem: '#16A34A',
    successItemActive: '#15803D',
    infoItem: '#1E40AF',
    infoItemActive: '#18338C',
    errorItem: '#DC2626',
    errorItemActive: '#B91C1C',
    warningItem: '#EA580C',
    warningItemActive: '#C2410C',
    //base
    background: '#ffffff',
    backgroundBox: '#ffffff',
    backgroundTooltip: '#1f1f1fc8',
    disabled: '#B9BCBE',
    shadowColor: '#002B4D',
    //sec base
    backgroundSuccess: '#DCFCE7',
    backgroundError: '#FEE2E2',
    backgroundInfo: '#DBEAFE',
    backgroundwarning: '#FFEDD5',

    //text
    title: '#1A242A',
    text: '#1A242A',
    textItem: '#F5F5F5',
    link: '#2563EB',
    linkActive: '#1D4ED8',
    prompt: '#4f4f4f',

    //general
    alpha: '#ffffff',
    omaga: '#000000',
};

export const colorsDark: TypeColorScheme = {
    primary: '#3B82F6',
    secondary: '#171821',

    //other 
    lightElem: '#A9C1CF',

    //items
    primaryItem: '#3B82F6',
    primaryItemActive: '#2563EB',
    successItem: '#4ADE80',
    successItemActive: '#22C55E',
    infoItem: '#60A5FA',
    infoItemActive: '#3B82F6',
    errorItem: '#F87171',
    errorItemActive: '#EF4444',
    warningItem: '#FB923C',
    warningItemActive: '#F97316',

    //base
    background: '#171821',
    backgroundBox: '#21222D',
    backgroundTooltip: '#171821',
    disabled: '#B9BCBE',
    shadowColor: '#00000000',

    //sec base
    backgroundSuccess: '#4ADE80',
    backgroundError: '#F87171',
    backgroundInfo: '#60A5FA',
    backgroundwarning: '#FB923C',

    //text
    title: '#F0F4FE',
    text: '#F0F4FE',
    textItem: '#F0F4FE',
    link: '#2563EB',
    linkActive: '#1D4ED8',
    prompt: '#94A3B8',

    //general
    alpha: '#ffffff',
    omaga: '#000000',
};

// D
// primary: '#2563EB',
//     secondary: '#171821',

//     //items
//     primaryItem: '#2563EB',
//     primaryItemActive: '#1D4ED8',
//     successItem: '#4ADE80',
//     successItemActive: '#22C55E',
//     infoItem: '#60A5FA',
//     infoItemActive: '#3B82F6',
//     errorItem: '#F87171',
//     errorItemActive: '#EF4444',
//     warningItem: '#FB923C',
//     warningItemActive: '#F97316,

//     //base
//     background: '#171821',
//     backgroundBox: '#21222D',
//     backgroundTooltip: '#171821',
//     disabled: '#B9BCBE',
//     shadowColor: '#9CACB9',

// backgroundSuccess: '#4ADE80'
// backgroundError: '#F87171'
// backgroundInfo: '#60A5FA'
// backgroundwarning: '#FB923C'

// //icons
// primaryicon: '#2563EB'
// secondaryIconGreen: '#22C55E'
// secondaryIconYellow: '#EAB308'
// secondaryIconViolet: '#5E5CE6'

// backgroundIconBlue: '#2563EB'
// backgroundIconGreen: '#22C55E'
// backgroundIconYelloe: '#EAB308'
// backgroundIconViolet: '#5E5CE6'

//     //text
//     title: '#F0F4FE',
//     text: '#F0F4FE',
//     textItem: '#94A3B8',
//     link: '#2563EB',
//     linkActive: '1D4ED8',
//     prompt: '#94A3B8',

//     //general
//     alpha: '#ffffff',
//     omaga: '#000000',

//L

// primary: '#2563EB',
//     secondary: '#E5F1FF',

//     //items
//     primaryItem: '#2563EB',
//     primaryItemActive: '#1D4ED8',
//     successItem: '#16A34A',
//     successItemActive: '#15803D',
//     infoItem: '#1E40AF',
//     infoItemActive: '#18338C',
//     errorItem: '#DC2626',
//     errorItemActive: '#B91C1C',
//     warningItem: '#EA580C',
//     warningItemActive: '#C2410C,

//     //base
//     background: '#ffffff',
//     backgroundBox: '#ffffff',
//     backgroundTooltip: '#1f1f1fc8',
//     disabled: '#B9BCBE',
//     shadowColor: '#002B4D',

// backgroundSuccess: '#DCFCE7'
// backgroundError: '#FEE2E2'
// backgroundInfo: '#DBEAFE'
// backgroundwarning: '#FFEDD5'

// //icons
// primaryIcon: '#2563EB'
// secondaryIconGreen: '#16A34A'
// secondaryIconYellow: '#CA8A04'
// secondaryIconViolet: '#92179D'

// backgroundIconBlue: '#EFF6FF'
// backgroundIconGreen: '#FEFCE8'
// backgroundIconYellow: '#F0FDF4'
// backgroundIconViolet: '#FCF2FD'

//     //text
//     title: '#1A242A',
//     text: '#1A242A',
//     textItem: '#F5F5F5',
//     link: '#2563EB',
//     linkActive: '1D4ED8',
//     prompt: '#4f4f4f',

//     //general
//     alpha: '#ffffff',
//     omaga: '#000000',
