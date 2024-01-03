// @see https://www.emmanuelgautier.com/blog/snippets/typescript-required-properties
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }
