import { TypeSS } from './styleScheme';

type KeyOfSS = keyof TypeSS;
export declare const useStyleScheme: <K extends KeyOfSS>(keys: K[], $styles?: Partial<TypeSS>) => Pick<TypeSS, K>;
export {};
