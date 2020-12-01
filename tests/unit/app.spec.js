import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("@/App.vue", () => {
  it("should render correctly data defults", () => {
    const wrapper = mount(App);

    expect(wrapper.vm.data.showUsers).toBe(false);
    expect(wrapper.vm.data.textButton).toBe("View List Users");
  });

  it("should show my users list", async () => {
    const wrapper = mount(App);

    expect(wrapper.vm.data.showUsers).toBe(false);

    await wrapper.find("button").trigger("click");

    expect(wrapper.vm.data.showUsers).toBe(true);
    expect(wrapper.find("button").text()).toBe("Hide List Users");
  });

  it("should hide my users list", async () => {
    const wrapper = mount(App);

    expect(wrapper.vm.data.showUsers).toBe(false);

    await wrapper.find("button").trigger("click");
    await wrapper.find("button").trigger("click");

    expect(wrapper.find("button").text()).toBe("View List Users");
  });
});
