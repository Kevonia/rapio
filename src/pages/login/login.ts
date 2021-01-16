import { Component, Vue } from 'vue-property-decorator';
import AuthformTemplate from '@/components/authform-template';
import env from '@/config/env';
import { auth } from '@/store';
import { Dictionary } from 'vue-router/types/router';

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
  private email = '';
  private password = '';
  private readonly logo = env.brand.logo;

  private isLoading = false;

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
  public async login() {
    // TODO: stuff to do when this component loads.


    this.isLoading = true;

    try {
      const { password, email } = this;
      const data = {
        password,
        email,
      };
      await auth.login(data);
      this.isLoading = false;

      this.navigate('/');
    } catch (error) {

      this.isLoading = false;
      this.$buefy.toast.open({
        duration: 5000,
        message: `Invaild username or password`,
        position: 'is-top',
        type: 'is-danger',
      });
    }

  }

  public async navigate(path: string, params?: Dictionary<string>) {
    await this.$router.push({ path, params });
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
