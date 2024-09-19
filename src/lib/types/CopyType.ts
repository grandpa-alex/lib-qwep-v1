export type Copy<T> = T extends object ? (T extends infer O ? { [K in keyof O]: Copy<O[K]> } : never) : T;
