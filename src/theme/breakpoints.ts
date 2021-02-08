export const breakpoints = {
  ph: (rule: any) => `@media (min-width: 360px) { ${rule} }`,
  tb: (rule: any) => `@media (min-width: 640px) { ${rule} }`,
  sdk: (rule: any) => `@media (min-width: 1000px) { ${rule} }`,
  ldk: (rule: any) => `@media (min-width: 1300px) { ${rule} }`,
}
