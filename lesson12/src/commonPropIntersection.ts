type Intersection<T, U> = {
  [K in keyof T & keyof U]: T[K] extends U[K] ? T[K] : never;
};

type CommonProp = Intersection<{ a: number; b: string }, { b: string; c: boolean }>;
