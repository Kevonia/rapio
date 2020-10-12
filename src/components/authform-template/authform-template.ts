import { Component, Vue } from 'vue-property-decorator';
import Mininalcard from '@/components/mininalcard';
import env from '@/config/env';

const { logo } = env.brand;

@Component({
  components: {
    Mininalcard,
  },
  name: 'authform-template',
})
class AuthformTemplate extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  get logo(){
    return logo;
  }

  get name() {
    return env.name;
  }

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Lifecycle Hooks
  // --------------------------------------------------------------------------

  private mounted() {
    // TODO: stuff to do when this component loads.

  }
}

export {
  AuthformTemplate as default,
  AuthformTemplate,
};
