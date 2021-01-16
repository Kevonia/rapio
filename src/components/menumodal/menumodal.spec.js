import { shallowMount } from '@vue/test-utils';
import Menumodal from './menumodal.vue';

describe('Menumodal.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Menumodal);

    expect(wrapper.exists()).toEqual(true);
  });
});
