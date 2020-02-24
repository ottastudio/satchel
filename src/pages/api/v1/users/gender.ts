import { NextApiRequest, NextApiResponse } from "next";
import { withDB } from "../../../../lib/database";
import { IDatabase } from "../../../../../next-env";

export default withDB(
  async (req: NextApiRequest, res: NextApiResponse, db: IDatabase) => {
    const { body, method } = req;
    const { Gender } = db;

    switch (method) {
      case "GET":
        const genders = await Gender.find({});
        return res.status(200).send(genders);
      case "POST":
        try {
          const resGender = new Gender(body);
          const gender = await resGender.save();
          return res.status(200).json({ success: true, gender });
        } catch (error) {
          throw error;
        }
      default:
        break;
    }
  }
);
