import { shallowMount } from '@vue/test-utils';
import Mininalcard from './mininalcard.vue';

describe('Mininalcard.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Mininalcard);

    expect(wrapper.exists()).toEqual(true);
  });
});
