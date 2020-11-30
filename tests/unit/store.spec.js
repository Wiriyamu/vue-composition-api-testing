import * as store from "@/store/index.js";
import axios from "axios";

jest.mock("axios");
window.console.warn = jest.fn();

afterEach(() => {
  jest.resetAllMocks();
});

describe("Store", () => {
  it("should NOT allow mutate state", () => {
    store.state.users = {};

    expect(store.state.users).toEqual([]);
    expect(window.console.warn).toHaveBeenCalledTimes(1);
    expect(window.console.warn.mock.calls[0][0]).toEqual(
      'Set operation on key "users" failed: target is readonly.'
    );
  });

  it("should return state.users equals empty array", () => {
    expect(Array.isArray(store.state.users)).toBe(true);
    expect(store.state.users).toEqual([]);
  });

  it("should get all users from API", async () => {
    expect(store.state.users).toEqual([]);

    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Willian Silva",
          username: "Wiriyamu",
          email: "will.devfrontend@gmail.com",
        },
        {
          id: 2,
          name: "Evan You",
          username: "yy2206",
          email: "youevan@april.biz",
        },
      ],
    });

    await store.actions.getUsers();
    expect(store.state.users).not.toEqual([]);
    expect(store.state.users).toHaveLength(2);
  });
});
