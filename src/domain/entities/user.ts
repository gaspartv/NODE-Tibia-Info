import { randomUUID } from "node:crypto";
import { CreateUserDto } from "../../adapters/frameworks/express/dtos/users/create";
import { UpdateUserDto } from "../../adapters/frameworks/express/dtos/users/update";
import { Language } from "../enums/language";
import { UserPolice } from "../enums/user-police";
import AppError from "../errors/app-error";
import { UserResponseDto } from "../interfaces/users/response";
import { codeGenerator } from "../repositories/generators/code";
import { Format } from "../utils/format-phone";
import { validateBoolean } from "../validators/boolean";
import { validateDate } from "../validators/date";
import { validateEmail } from "../validators/email";
import { validateImage } from "../validators/image";
import { validateName } from "../validators/name";
import { validateNullDate } from "../validators/null-date";
import { validatePassword } from "../validators/password";
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
    this.id = validateUUID(id);
  }
  setCreatedAt(createdAt: Date): void {
    this.createdAt = validateDate(createdAt);
  }
  setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = validateDate(updatedAt);
  }
  setDeletedAt(deletedAt: Date | null): void {
    this.deletedAt = validateNullDate(deletedAt);
  }
  setBannedAt(bannedAt: Date | null): void {
    this.bannedAt = validateNullDate(bannedAt);
  }
  setCode(): void {
    this.code = codeGenerator();
  }
  setKey(): void {
    this.key = "tibia-info.com " + codeGenerator();
  }
  setFirstName(firstName: string): void {
    this.firstName = validateName(firstName);
  }
  setLastName(lastName: string): void {
    this.lastName = validateName(lastName);
  }
  setEmail(email: string): void {
    this.email = validateEmail(email);
  }
  setPasswordHash(password: string): void {
    this.passwordHash = validatePassword(password);
  }
  setImageUri(imageUri: string | null): void {
    this.imageUri = validateImage(imageUri);
  }
  setWhatsapp(whatsapp: string): void {
    this.whatsapp = Format.phone(whatsapp);
  }
  setIsAdmin(isAdmin: boolean): void {
    this.isAdmin = validateBoolean(isAdmin);
  }
  setIsEditor(isEditor: boolean): void {
    this.isEditor = validateBoolean(isEditor);
  }
  setIsActive(isActive: boolean): void {
    this.isActive = validateBoolean(isActive);
  }
  setDarkMode(darkMode: boolean): void {
    this.darkMode = validateBoolean(darkMode);
  }
  setLanguage(language: Language): void {
    if (Object.values(Language).includes(language)) {
      switch (language) {
        case Language.EN_US:
          this.language = Language.EN_US;
          break;
        default:
          this.language = Language.PT_BR;
      }
    } else {
      throw new AppError("police needs to be normal, viewer, admin or super");
    }
  }
  setPolice(police: UserPolice): void {
    if (Object.values(UserPolice).includes(police)) {
      switch (police) {
        case UserPolice.ADMIN:
          this.police = UserPolice.ADMIN;
          break;
        case UserPolice.SUPER:
          this.police = UserPolice.SUPER;
          break;
        default:
          this.police = UserPolice.NORMAL;
      }
    } else {
      throw new AppError("police needs to be normal, viewer, admin or super");
    }
  }

  create(dto: CreateUserDto): void {
    this.setId(randomUUID());
    this.setCreatedAt(new Date());
    this.setUpdatedAt(new Date());
    this.setDeletedAt(null);
    this.setBannedAt(null);
    this.setCode();
    this.setKey();
    this.setFirstName(dto.firstName);
    this.setLastName(dto.lastName);
    this.setEmail(dto.email);
    this.setPasswordHash(dto.password);
    this.setImageUri(null);
    this.setWhatsapp(dto.whatsapp);
    this.setIsAdmin(false);
    this.setIsEditor(false);
    this.setIsActive(false);
    this.setDarkMode(false);
    this.setLanguage(Language.PT_BR);
    this.setPolice(UserPolice.NORMAL);
  }

  update(dto: UpdateUserDto) {
    this.setUpdatedAt(new Date());
    if (dto.firstName) this.setFirstName(dto.firstName);
    if (dto.lastName) this.setLastName(dto.lastName);
    if (dto.email) this.setEmail(dto.email);
    if (dto.whatsapp) this.setWhatsapp(dto.whatsapp);
  }
}
