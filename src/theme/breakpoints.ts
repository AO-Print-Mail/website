export const breakpoints = {
  bp1: (rule: any) => `@media (min-width: 640px) { ${rule} }`,
  bp2: (rule: any) => `@media (min-width: 768px) { ${rule} }`,
  bp3: (rule: any) => `@media (min-width: 1024px) { ${rule} }`,
  bp4: (rule: any) => `@media (min-width: 1280px) { ${rule} }`,
}
