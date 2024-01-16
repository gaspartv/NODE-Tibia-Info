import AppError from "../errors/app-error";

export function validateImage(imageUri: string | null): string | null {
  if (imageUri) {
    const regex = /\.(jpg|jpeg|png|gif|bmp|tiff|tif|svg|webp|ico)$/;
    if (regex.test(imageUri)) return "/user/avatar/" + imageUri;
    throw new AppError("URI is not valid");
  }
  return null;
}
