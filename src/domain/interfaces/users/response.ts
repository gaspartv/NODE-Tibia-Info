import { Language } from "../../enums/language";
import { UserPolice } from "../../enums/user-police";

export interface UserResponseDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  bannedAt: Date | null;
  code: string;
  key: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  imageUri: string | null;
  whatsapp: string | null;
  isAdmin: boolean;
  isEditor: boolean;
  isActive: boolean;
  darkMode: boolean;
  language: Language;
  police: UserPolice;
}
