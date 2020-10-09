import { shallowMount } from '@vue/test-utils';
import SiteFooter from './site-footer.vue';

describe('SiteFooter.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(SiteFooter);

    expect(wrapper.exists()).toEqual(true);
  });
});
