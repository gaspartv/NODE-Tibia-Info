import { Language } from "../enums/language";
import { UserPolice } from "../enums/user-police";
import AppError from "../errors/app-error";
import DateInvalidError from "../errors/date-invalid";
import IdInvalidError from "../errors/id-invalid";
import { UserResponseDto } from "../interfaces/users/response";
import { codeGenerator } from "../utils/code-generator";
import { validateUUID } from "../validators/uuid";

interface UserInterface {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  bannedAt?: Date | null;
  code?: string;
  key?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  passwordHash?: string;
  imageUri?: string | null;
  whatsapp?: string | null;
  isAdmin?: boolean;
  isEditor?: boolean;
  isActive?: boolean;
  darkMode?: boolean;
  language?: Language;
  police?: UserPolice;
}

export class User {
  private id: string;
  private createdAt: Date;
  private updatedAt: Date;
  private deletedAt: Date | null;
  private bannedAt: Date | null;
  private code: string;
  private key: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private passwordHash: string;
  private imageUri: string | null;
  private whatsapp: string | null;
  private isAdmin: boolean;
  private isEditor: boolean;
  private isActive: boolean;
  private darkMode: boolean;
  private language: Language;
  private police: UserPolice;

  constructor(user: UserInterface) {
    this.id = user.id;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.deletedAt = user.deletedAt;
    this.bannedAt = user.bannedAt;
    this.code = user.code;
    this.key = user.key;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.passwordHash = user.passwordHash;
    this.imageUri = user.imageUri;
    this.whatsapp = user.whatsapp;
    this.isAdmin = user.isAdmin;
    this.isEditor = user.isEditor;
    this.isActive = user.isActive;
    this.darkMode = user.darkMode;
    this.language = user.language;
    this.police = user.police;
  }

  get(): UserResponseDto {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
      bannedAt: this.bannedAt,
      code: this.code,
      key: this.key,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      passwordHash: this.passwordHash,
      imageUri: this.imageUri,
      whatsapp: this.whatsapp,
      isAdmin: this.isAdmin,
      isEditor: this.isEditor,
      isActive: this.isActive,
      darkMode: this.darkMode,
      language: this.language,
      police: this.police,
    };
  }
  getId(): string {
    return this.id;
  }
  getCreatedAt(): Date {
    return this.createdAt;
  }
  getUpdatedAt(): Date {
    return this.updatedAt;
  }
  getDeletedAt(): Date | null {
    return this.deletedAt;
  }
  getBannedAt(): Date | null {
    return this.bannedAt;
  }
  getCode(): string {
    return this.code;
  }
  getKey(): string {
    return this.key;
  }
  getFirstName(): string {
    return this.firstName;
  }
  getLastName(): string {
    return this.lastName;
  }
  getEmail(): string {
    return this.email;
  }
  getPasswordHash(): string {
    return this.passwordHash;
  }
  getImageUri(): string | null {
    return this.imageUri;
  }
  getWhatsapp(): string | null {
    return this.whatsapp;
  }
  getIsAdmin(): boolean {
    return this.isAdmin;
  }
  getIsEditor(): boolean {
    return this.isEditor;
  }
  getIsActive(): boolean {
    return this.isActive;
  }
  getDarkMode(): boolean {
    return this.darkMode;
  }
  getLanguage(): Language {
    return this.language;
  }
  getPolice(): UserPolice {
    return this.police;
  }

  setId(id: string): void {
    if (validateUUID(id)) {
      this.id = id;
    } else {
      throw new IdInvalidError();
    }
  }
  setCreatedAt(createdAt: Date): void {
    if (createdAt instanceof Date) {
      this.createdAt = createdAt;
    } else {
      throw new DateInvalidError();
    }
  }
  setUpdatedAt(updatedAt: Date): void {
    if (updatedAt instanceof Date) {
      this.updatedAt = updatedAt;
    } else {
      throw new DateInvalidError();
    }
  }
  setDeletedAt(deletedAt: Date | null): void {
    if (deletedAt instanceof Date || null) {
      this.deletedAt = deletedAt;
    } else {
      throw new DateInvalidError();
    }
  }
  setBannedAt(bannedAt: Date | null): void {
    if (bannedAt instanceof Date || null) {
      this.bannedAt = bannedAt;
    } else {
      throw new DateInvalidError();
    }
  }
  setCode(): void {
    this.code = codeGenerator();
  }
  setKey(): void {
    this.key = "tibia-info.com " + codeGenerator();
  }
  setFirstName(firstName: string): void {
    const regex = /^[a-zA-Z]+$/;
    if (regex.test(firstName)) {
      this.firstName =
        firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    } else {
      throw new AppError("firstName must be a string", 400);
    }
  }
  setLastName(lastName: string): void {
    const regex = /^[a-zA-Z]+$/;
    if (regex.test(lastName)) {
      this.lastName =
        lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    } else {
      throw new AppError("lastName must be a string", 400);
    }
  }
  setEmail(email: string): void {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      this.email = email;
    } else {
      throw new AppError("invalid email");
    }
  }
  setPasswordHash(): string {
    return this.passwordHash;
  }
  setImageUri(): string | null {
    return this.imageUri;
  }
  setWhatsapp(): string | null {
    return this.whatsapp;
  }
  setIsAdmin(): boolean {
    return this.isAdmin;
  }
  setIsEditor(): boolean {
    return this.isEditor;
  }
  setIsActive(): boolean {
    return this.isActive;
  }
  setDarkMode(): boolean {
    return this.darkMode;
  }
  setLanguage(): Language {
    return this.language;
  }
  setPolice(): UserPolice {
    return this.police;
  }
}
