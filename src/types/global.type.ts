

export type IAuthUser = {
  id: string;
  iat: number;
  email: string;
  role: "USER" | "EMPLOYER";
};
  