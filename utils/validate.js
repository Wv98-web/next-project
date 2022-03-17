// 正则
export const reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
export const reg_email =
  /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
export const reg_phone =
  /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
export const reg_username =
  /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$|^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

// 登录账号验证
export function validate_username(value) {
  return reg_username.test(value);
}
// 密码验证
export const validate_password = reg_password;
// 验证邮箱
export function validate_email(value) {
  return reg_email.test(value);
}
// 密码验证
export function validate_pass(value) {
  return reg_password.test(value);
}
/**
 * 检验手机号
 */
export function validate_phone(value) {
  return reg_phone.test(value);
}
