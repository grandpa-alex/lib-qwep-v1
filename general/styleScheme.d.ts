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
export type TypeSSAvatar = {
    avatarSize_1: string;
    avatarSize_2: string;
    avatarSize_3: string;
    avatarFontSize_1: string;
    avatarFontSize_2: string;
    avatarFontSize_3: string;
    avatarFontWeight: string;
};
export type TypeSSRadio = {
    radioSize_L: string;
    radioSize_M: string;
    radioSizeIndicator_L: string;
    radioSizeIndicator_M: string;
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
    base: TypeSSBase;
    mr: TypeSSMR;
    btn: TypeSSBtn;
    inp: TypeSSInp;
    select: TypeSSSelect;
    avatar: TypeSSAvatar;
    radio: TypeSSRadio;
    icon: TypeSSIcon;
    checkbox: TypeSSCheckbox;
    switch: TypeSSSwitch;
    slider: TypeSSSlider;
    typography: TypeSSTypography;
    box: TypeSSBox;
};
export declare const styleScheme: TypeSS;
