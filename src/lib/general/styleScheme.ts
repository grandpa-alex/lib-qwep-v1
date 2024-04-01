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
    checkboxLoadingSize_L: string;
    checkboxLoadingSize_M: string;
};

export type TypeSSSwitch = {
    switchSize_X_L: string;
    switchSize_Y_L: string;
    switchSize_X_M: string;
    switchSize_Y_M: string;
    switchThumbSize_L: string;
    switchThumbSize_M: string;
    switchThumbTranslateX_L: string;
    switchThumbTranslateX_M: string;
};

export type TypeSSSelect = {
    selectPadding_X_L: string;
    selectPadding_Y_L: string;
    selectPadding_X_M: string;
    selectPadding_Y_M: string;
    selectHeight_L: string;
    selectHeight_M: string;
    selectIconSize_L: string;
    selectIconSize_M: string;
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

export type TypeSSBox = {
    boxBorderRadius_1: string;
    boxBorderRadius_2: string;
    boxBorderRadius_3: string;

    boxShadow_1: string;
    boxShadow_2: string;
    boxShadow_3: string;

    boxWidth_1: string;
    boxWidth_2: string;
    boxWidth_3: string;
    boxWidth_4: string;
    boxWidth_5: string;
    boxWidth_6: string;

    boxPadding_1: string;
    boxPadding_2: string;
    boxPadding_3: string;
    boxPadding_4: string;
    boxPadding_5: string;
    boxPadding_6: string;

    boxGap_1: string;
    boxGap_2: string;
    boxGap_3: string;
    boxGap_4: string;
    boxGap_5: string;
    boxGap_6: string;
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
    //select
    select: TypeSSSelect;
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

    //box
    box: TypeSSBox;
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
        inpIconSize_L: '16px',
        inpIconSize_M: '14px',
    },
    //inp
    select: {
        selectPadding_X_L: '14px',
        selectPadding_Y_L: '5px',
        selectPadding_X_M: '12px',
        selectPadding_Y_M: '5px',
        selectHeight_L: '38px',
        selectHeight_M: '32px',
        selectIconSize_L: '16px',
        selectIconSize_M: '14px',
    },
    // icon
    icon: {
        iconSize_L: '28px',
        iconSize_M: '20px',
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
        switchSize_X_L: '36px',
        switchSize_Y_L: '20px',
        switchSize_X_M: '30px',
        switchSize_Y_M: '18px',
        switchThumbSize_L: '18px',
        switchThumbSize_M: '16px',
        switchThumbTranslateX_L: '17px',
        switchThumbTranslateX_M: '13px',
    },

    // switch
    slider: {
        thumbSize_L: '16px',
        thumbSize_M: '14px',
    },

    //text
    typography: {
        fontSizeItem: '14px',
        fontSizeGlobal: '14px',
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

    //box
    box: {
        boxBorderRadius_1: '8px',
        boxBorderRadius_2: '12px',
        boxBorderRadius_3: '22px',

        boxShadow_1: '2px 3px 6px 0px',
        boxShadow_2: '3px 4px 12px 3px',
        boxShadow_3: '4px 5px 18px 5px',

        boxWidth_1: '120px',
        boxWidth_2: '260px',
        boxWidth_3: '300px',
        boxWidth_4: '460px',
        boxWidth_5: '680px',
        boxWidth_6: '720px',

        boxPadding_1: '8px',
        boxPadding_2: '12px',
        boxPadding_3: '24px',
        boxPadding_4: '36px',
        boxPadding_5: '44px',
        boxPadding_6: '56px',

        boxGap_1: '8px',
        boxGap_2: '12px',
        boxGap_3: '18px',
        boxGap_4: '22px',
        boxGap_5: '30px',
        boxGap_6: '44px',
    },
};
