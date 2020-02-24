/// <reference types="node" />
/// <reference types="next" />
/// <reference types="next/types/global" />
import { Model, Document } from "mongoose";

// MONGOOSE MODEL AND SCHEMA
declare interface IUserDocument extends Document {
  // USER DOCUMENT
  name: {
    first_name: string;
    last_name: string;
  };
  gender: Schema.Types.ObjectId;
  birthday: Date;
  email: string;
  password: string;
  subscribe: boolean;
  role: number;
  cart: object[];
  accessToken: string;
  refreshToken: string[];
}
declare type IUserModel = Model<IUserDocument>; // MUSER MODEL

declare interface IGenderDocument extends Document {
  // GENDER DOCUMENT
  name: string;
}
declare type IGenderModel = Model<IGenderDocument>; // GENDER MODEL

// DATABASE TYPE => NEW MODEL SHOULD APPEAR HERE!
declare type IDatabase = {
  User: IUserModel;
  Gender: IGenderModel;
};
