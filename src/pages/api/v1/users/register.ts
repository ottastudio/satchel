import { NextApiRequest, NextApiResponse } from "next";
import { withDB } from "../../../../lib/database";
import { IDatabase } from "../../../../../next-env";

export default withDB(
  async (req: NextApiRequest, res: NextApiResponse, db: IDatabase) => {
    const { body } = req;
    const { User } = db;

    try {
      const resUser = new User(body);
      const user = (await resUser.save()).populate("gender");
      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).send(Error);
    }
  }
);
