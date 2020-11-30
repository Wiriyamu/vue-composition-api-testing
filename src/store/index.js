import { reactive, readonly } from "vue";
import cloneDeep from "lodash/cloneDeep";
import axios from "axios";

const initialState = {
  users: [],
};

const _state = reactive(cloneDeep(initialState));

const state = readonly(_state);

const actions = {
  async getUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    _state.users = data;
  },
};

export { state, actions };
