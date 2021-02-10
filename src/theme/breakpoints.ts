export const breakpoints = {
  s: (rule: any) => `@media (min-width: 360px) { ${rule} }`,
  m: (rule: any) => `@media (min-width: 640px) { ${rule} }`,
  l: (rule: any) => `@media (min-width: 1000px) { ${rule} }`,
  xl: (rule: any) => `@media (min-width: 1300px) { ${rule} }`,
}
