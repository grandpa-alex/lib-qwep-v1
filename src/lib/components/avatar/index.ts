import { BaseAvatar, SBaseAvatar, TBaseAvatar } from "./base-avatar/BaseAvatar";
export { BaseAvatar }


export const AvatarStyledComponent = {
    BaseAvatar: SBaseAvatar,
};

export namespace TypeAvatar {
    export namespace BaseBox {
        export type Main = TBaseAvatar.Main;
        export type SRoot = TBaseAvatar.SRoot;
        export type SImg = TBaseAvatar.SImg;
        export type SFallback = TBaseAvatar.SFallback;
        export type Styles = TBaseAvatar.Styles;
    }
}