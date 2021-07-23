import dotenv from "dotenv";

dotenv.config();

const env = {
  flag: process.env.FLAG || "Skills{thisisgitidiotflag}",
  port: process.env.PORT || 8989,
};

export default env;
