import AppError from "../errors/app-error";

export class Format {
  static phone(phone: string): string {
    const whatsappVerify = Number(phone);
    if (
      phone.length < 10 ||
      phone.length > 13 ||
      Number.isNaN(whatsappVerify)
    ) {
      throw new AppError(
        "invalid whatsapp. Exempla: 55xx9xxxxxxxx - Between 10 and 13 numbers entered",
      );
    }
    let phoneFormat = phone;
    if (phone.toString()[0] !== "5" && phone[1].toString() !== "5") {
      phoneFormat = "55" + phone.toString();
    }
    if (phoneFormat.length === 12) {
      phoneFormat =
        phoneFormat.substring(0, 4) + "9" + phoneFormat.substring(4);
    }
    return phoneFormat;
  }
}
