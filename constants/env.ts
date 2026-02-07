type Tenv = {
  backendUrl: string | "NA";
};

export const env: Tenv = {
  backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL || "NA",
};
