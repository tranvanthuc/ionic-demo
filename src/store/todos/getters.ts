import { State, Todo } from "./index";

export default {
  list: (state: State): Todo[] => state.list,
};
