/**
 * 将下划线命名的字符串转换为驼峰命名法
 * @param str 下划线命名的字符串
 * @returns 驼峰命名的字符串
 * @example toCamelCase('user_name') => 'userName'
 */
export function toCamelCase(str: string) {
  return str.replace(/_([a-z])/g, (match, char) => char.toUpperCase())
}
