export interface AuthState {
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const initialState: AuthState = {
  token: null,
  status: "idle",
  error: null,
};
