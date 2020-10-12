import { shallowMount } from '@vue/test-utils';
import AuthformTemplate from './authform-template.vue';

describe('AuthformTemplate.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(AuthformTemplate);

    expect(wrapper.exists()).toEqual(true);
  });
});
