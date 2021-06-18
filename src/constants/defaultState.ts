
export interface DefaultState {
  status: boolean,
  loading: boolean,
  message: string,
}

export const DEFAULT_GETTERS = {
  status: (state: DefaultState): boolean => state.status,
  loading: (state: DefaultState): boolean => state.loading,
  message: (state: DefaultState): string => state.message,
};

export const DEFAULT_STATE = {
  status: false,
  error: null,
  message: "",
  loading: false,
};
