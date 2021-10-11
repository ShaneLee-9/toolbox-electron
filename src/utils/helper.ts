export function getStrictType (obj: any): string {
  return Object.prototype.toString.call(obj).match(/\[object\s(.*)\]/)![1]
}
