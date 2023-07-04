export type Maybe<T> = T | null;

export type Error = any;

export type HTTPResponse<T> = Maybe<T | Error>;

export type Scalars = {
  ID: string;
  String: string;
  QueryString: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export * from './requests';
export * from './user';
export * from './role';
export * from './region';
