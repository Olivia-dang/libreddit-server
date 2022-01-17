import { Options } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import path from "path";

const microConfig: Options = {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "libreddit",
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  type: "postgresql",
  debug: !__prod__,
};
export default microConfig;
