export const toTitleCase = (s: string) => {
  return s.replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()));
};
