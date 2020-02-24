import { Schema, models, model } from "mongoose";
import { IGenderModel, IGenderDocument } from "../../../../next-env";

const genderSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
);

export const Gender: IGenderModel =
  models.Gender || model<IGenderDocument>("Gender", genderSchema);
