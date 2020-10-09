import { shallowMount } from '@vue/test-utils';
import HeroBanner from './hero-banner.vue';

describe('HeroBanner.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(HeroBanner);

    expect(wrapper.exists()).toEqual(true);
  });
});
