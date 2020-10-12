import { Component, Vue } from 'vue-property-decorator';
import AuthformTemplate from '@/components/authform-template';
import env from '@/config/env';

@Component({
  components: {
    AuthformTemplate,
  },
  name: 'login',
})
class Login extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------
  private username = '';
  private password = '';
  private readonly logo = env.brand.logo;

  private isFullPage = true;
  private error = false;
  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------
  get name() {
    return env.name;
  }
  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------
  public login() {
      // TODO: stuff to do when this component loads.
  }

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
  Login as default,
  Login,
};
