import { DefaultState } from "@/constants";

export const REQUEST = (state: DefaultState): void => {
  state.loading = true;
  state.error = null;
};

export const SUCCESS = (state: DefaultState): void => {
  state.status = true;
  state.loading = false;
  state.error = null;
};

export const FAILURE = (state: DefaultState, error: null): void => {
  state.loading = false;
  state.status = false;
  state.error = error;
};
