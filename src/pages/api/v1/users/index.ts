import { NextApiResponse, NextApiRequest } from "next";
import { withDB } from "../../../../lib/database";
import { IDatabase } from "../../../../../next-env";

export default withDB(
  async (_req: NextApiRequest, res: NextApiResponse, db: IDatabase) => {
    const { User } = db;
    const users = await User.find({}).populate("gender");
    return res.status(200).send(users);
  }
);
