export function getStrictType (obj: unknown): string {
  return Object.prototype.toString.call(obj).match(/\[object\s(.*)\]/)![1]
}
