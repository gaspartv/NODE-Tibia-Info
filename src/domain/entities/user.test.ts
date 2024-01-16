import { randomUUID } from "crypto";
import { CreateUserDto } from "../../adapters/frameworks/express/dtos/users/create";
import { Language } from "../enums/language";
import { UserPolice } from "../enums/user-police";
import { User } from "./user";

describe("User Class Setters", () => {
  it("should create a user", () => {
    const dto: CreateUserDto = {
      email: "test@example.com",
      firstName: "John",
      lastName: "Doe",
      password: "@DiE4729",
      whatsapp: "32988221144",
    };
    const UserEntity = new User({});
    UserEntity.create(dto);
    expect(UserEntity.getId()).toBeDefined();
    expect(UserEntity.getEmail()).toBe(dto.email);
    expect(UserEntity.getFirstName()).toBe(dto.firstName);
    expect(UserEntity.getLastName()).toBe(dto.lastName);
    expect(UserEntity.getWhatsapp()).toBe("55" + dto.whatsapp);
  });

  it("should set the user id with a valid UUID", () => {
    const UserEntity = new User({});
    const validUUID = randomUUID();
    UserEntity.setId(validUUID);
    expect(UserEntity.getId()).toBe(validUUID);
  });

  it("should throw an IdInvalidError for an invalid UUID", () => {
    const UserEntity = new User({});
    const invalidUUID = "invalid-uuid";
    expect(() => UserEntity.setId(invalidUUID)).toThrow("id not a valid uuid");
  });

  it("should created date time", () => {
    const UserEntity = new User({});
    const newDate = new Date();
    UserEntity.setCreatedAt(newDate);
    expect(UserEntity.getCreatedAt()).toBe(newDate);
  });

  it("should update date time", () => {
    const UserEntity = new User({});
    const newDate = new Date();
    UserEntity.setUpdatedAt(newDate);
    expect(UserEntity.getUpdatedAt()).toBe(newDate);
  });

  it("should delete date time", () => {
    const UserEntity = new User({});
    const newDate = new Date();
    UserEntity.setDeletedAt(newDate);
    expect(UserEntity.getDeletedAt()).toBe(newDate);
  });

  it("should delete null", () => {
    const UserEntity = new User({});
    UserEntity.setDeletedAt(null);
    expect(UserEntity.getDeletedAt()).toBeNull();
  });

  it("should ban date time", () => {
    const UserEntity = new User({});
    const newDate = new Date();
    UserEntity.setBannedAt(newDate);
    expect(UserEntity.getBannedAt()).toBe(newDate);
  });

  it("should ban null", () => {
    const UserEntity = new User({});
    UserEntity.setBannedAt(null);
    expect(UserEntity.getBannedAt()).toBeNull();
  });

  it("should code correctly", () => {
    const UserEntity = new User({});
    UserEntity.setCode();
    expect(typeof UserEntity.getCode()).toBe("string");
    expect(UserEntity.getCode().length).toBe(9);
  });

  it("should key correctly", () => {
    const UserEntity = new User({});
    UserEntity.setKey();
    expect(typeof UserEntity.getKey()).toBe("string");
    expect(UserEntity.getKey().length).toBe(24);
  });

  it("should set the user language to EN_US for a valid language", () => {
    const UserEntity = new User({});
    UserEntity.setLanguage(Language.EN_US);
    expect(UserEntity.getLanguage()).toBe(Language.EN_US);
  });

  it("should set the user police to ADMIN for a valid police", () => {
    const UserEntity = new User({});
    UserEntity.setPolice(UserPolice.ADMIN);
    expect(UserEntity.getPolice()).toBe(UserPolice.ADMIN);
  });
});
