import { State, User } from "./index";
import { DEFAULT_GETTERS } from "@/constants";

export default {
  ...DEFAULT_GETTERS,
  user: (state: State): User | null => state.user,
  token: (state: State): string | null => state.user && state.user.token,
};
