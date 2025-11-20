/**
 * 邀请码配置文件
 * 用于验证用户邀请码的有效性
 */

// 有效的邀请码列表
export const VALID_INVITE_CODES = [
  "JINGQI2025",
  "AI888888",
  "KEFU001",
  "DEMO123",
  "TEST001",
  "WELCOME",
  "CHUNYANG",
  "VIP2025",
  "TRIAL001",
  "START2025",
];

/**
 * 验证邀请码是否有效
 * @param {string} code - 要验证的邀请码
 * @returns {boolean} - 是否有效
 */
export function validateInviteCode(code) {
  if (!code || typeof code !== "string") {
    return false;
  }

  const normalizedCode = code.trim().toUpperCase();
  return VALID_INVITE_CODES.includes(normalizedCode);
}

/**
 * 获取邀请码示例
 * @returns {string} - 示例邀请码
 */
export function getExampleInviteCode() {
  return VALID_INVITE_CODES[0];
}
