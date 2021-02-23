import { action } from "easy-peasy";

export default {
  data: [],
  addData: action((state, data) => {
    state.data.push({ data: data });
  }),
};
