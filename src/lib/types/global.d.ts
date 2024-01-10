// @see https://bobbyhadz.com/blog/typescript-make-types-global
export {}

declare global {
  // @see https://www.emmanuelgautier.com/blog/snippets/typescript-required-properties
  type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }
}
