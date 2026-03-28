export type Zone = {
  id: string;
  risk: "low" | "medium" | "high";
  center: [number, number];
  radius: number;
};

export type User = {
  id: number;
  location: [number, number];
  elderly?: boolean;
  needsHelp?: boolean;
};

export type Route = {
  path: [number, number][];
};

export type Log = string;