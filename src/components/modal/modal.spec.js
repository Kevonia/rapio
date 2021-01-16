import { shallowMount } from '@vue/test-utils';
import Modal from './modal.vue';

describe('Modal.vue', () => {
  it('mounts component and check if component exists', () => {
    // Mount component and check if component exists
    const wrapper = shallowMount(Modal);

    expect(wrapper.exists()).toEqual(true);
  });
});
