

export type IAuthUser = {
  id: string;
  iat: number;
  email: string;
  role: "USER" | "EMPLOYER" | "ADMIN" | "SUPER_ADMIN";
};
  