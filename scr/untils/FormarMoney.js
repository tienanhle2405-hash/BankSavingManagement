export function FormatMoney(amount) {
  if (!amount) return "0";

  return amount.toLocaleString("vi-VN") + " VND";
}