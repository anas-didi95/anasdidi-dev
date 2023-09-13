export type TRoutes = {
  label: string;
  path: string;
};

export const useRoutes = (): TRoutes[] => [
  { label: "Articles", path: "/articles" },
  { label: "Tags", path: "/tags" },
  { label: "About Me", path: "/about-me" },
];
