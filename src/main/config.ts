import dotenv from "dotenv";

dotenv.config();

export const PORT = Number(process.env.PORT) || 8001;
export const HASH_SALT = Number(process.env.HASH_SALT);
