import { shallowMount } from '@vue/test-utils';
import Navbar from './navbar.vue';

describe('Navbar.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Navbar);

    expect(wrapper.exists()).toEqual(true);
  });
});
