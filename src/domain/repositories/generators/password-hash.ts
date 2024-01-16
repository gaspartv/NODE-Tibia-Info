import * as bcrypt from "bcrypt";
import { HASH_SALT } from "../../../main/config";

export function passwordHash(password: string): string {
  return bcrypt.hashSync(password, HASH_SALT);
}
