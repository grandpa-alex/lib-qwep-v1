export type TypeSSMR = {
    margin_1: string;
    margin_2: string;
    margin_3: string;
    margin_4: string;
    margin_5: string;
    margin_6: string;
    margin_7: string;
    margin_8: string;
    margin_9: string;
    margin_10: string;
    margin_11: string;
    margin_12: string;
};

export type TypeSSBase = {
    borderRadiusItem: string;
};

export type TypeSSBtn = {
    btnPadding_X_L: string;
    btnPadding_Y_L: string;
    btnPadding_X_M: string;
    btnPadding_Y_M: string;
    btnHeight_L: string;
    btnHeight_M: string;
    btnIconSize_L: string;
    btnIconSize_M: string;
};

export type TypeSSInp = {
    inpPadding_X_L: string;
    inpPadding_Y_L: string;
    inpPadding_X_M: string;
    inpPadding_Y_M: string;
    inpHeight_L: string;
    inpHeight_M: string;
    inpIconSize_L: string;
    inpIconSize_M: string;
};

export type TypeSSIcon = {
    iconSize_L: string;
    iconSize_M: string;
};

export type TypeSSCheckbox = {
    checkboxSize_L: string;
    checkboxSize_M: string;
    checkboxLoadingSize_L: string
    checkboxLoadingSize_M: string
};

export type TypeSSSwitch = {
    switchSize_L: string;
    switchSize_M: string;
};

export type TypeSSSlider = {
    thumbSize_L: string;
    thumbSize_M: string;
};

export type TypeSSTypography = {
    fontSizeItem: string;
    fontSizeGlobal: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    fontWeightTitle: string;
    fontWeightItem: string;
    fontWeightGlobal: string;
};

export type TypeSS = {
    // base
    base: TypeSSBase;
    //margin
    mr: TypeSSMR;
    //btn
    btn: TypeSSBtn;
    //inp
    inp: TypeSSInp;
    // icon
    icon: TypeSSIcon;
    //checkbox
    checkbox: TypeSSCheckbox;
    // switch
    switch: TypeSSSwitch;
    //slider
    slider: TypeSSSlider;
    //text
    typography: TypeSSTypography;
};

export const styleScheme: TypeSS = {
    // base
    base: {
        borderRadiusItem: '8px',
    },
    //margin
    mr: {
        margin_1: '4px',
        margin_2: '8px',
        margin_3: '16px',
        margin_4: '24px',
        margin_5: '32px',
        margin_6: '40px',
        margin_7: '48px',
        margin_8: '56px',
        margin_9: '64px',
        margin_10: '72px',
        margin_11: '80px',
        margin_12: '88px',
    },
    //btn
    btn: {
        btnPadding_X_L: '14px',
        btnPadding_Y_L: '5px',
        btnPadding_X_M: '12px',
        btnPadding_Y_M: '3px',
        btnHeight_L: '38px',
        btnHeight_M: '32px',
        btnIconSize_L: '16px',
        btnIconSize_M: '14px',
    },
    //inp
    inp: {
        inpPadding_X_L: '14px',
        inpPadding_Y_L: '5px',
        inpPadding_X_M: '12px',
        inpPadding_Y_M: '5px',
        inpHeight_L: '38px',
        inpHeight_M: '32px',
        inpIconSize_L: '18px',
        inpIconSize_M: '16px',
    },
    // icon
    icon: {
        iconSize_L: '26px',
        iconSize_M: '18px',
    },
    //checkbox
    checkbox: {
        checkboxSize_L: '24px',
        checkboxSize_M: '20px',
        checkboxLoadingSize_L: '20px',
        checkboxLoadingSize_M: '16px',
    },
    // switch
    switch: {
        switchSize_L: '58px',
        switchSize_M: '36px',
    },

    // switch
    slider: {
        thumbSize_L: '16px',
        thumbSize_M: '14px',
    },

    //text
    typography: {
        fontSizeItem: '14px',
        fontSizeGlobal: '16px',
        h1: '38px',
        h2: '26px',
        h3: '24px',
        h4: '22px',
        h5: '20px',
        h6: '18px',
        fontWeightTitle: '400',
        fontWeightItem: '700',
        fontWeightGlobal: '400',
    },
};
