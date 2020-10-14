import { Component, Vue } from 'vue-property-decorator';
import AuthformTemplate from '@/components/authform-template';
import env from '@/config/env';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import VueRecaptcha from 'vue-recaptcha';


@Component({
  components: {
    AuthformTemplate,
    ValidationObserver,
    ValidationProvider,
    VueRecaptcha,
  },
  name: 'signup',
})
class Signup extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------
  private fullName = '';
  private email = '';
  private password = '';
  private confrimPassword = '';

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

  get siteKey() {
    return env.sitekey;
  }
  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------
  public onCaptchaExpired() {
    (this.$refs.invisibleRecaptcha as unknown as VueRecaptcha).reset();
  }

  public onCaptchaVerified(res: VueRecaptcha) {
    if (res) {
      this.signup();
    }
  }

  public onFormSubmit() {
    (this.$refs.invisibleRecaptcha as unknown as VueRecaptcha).execute();
  }

  private signup() {

    const { confrimPassword, password, fullName, email } = this;

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
    const recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit');
    recaptchaScript.setAttribute('async', '');
    recaptchaScript.setAttribute('defer', '');
    document.head.appendChild(recaptchaScript);
  }
}

export {
  Signup as default,
  Signup,
};
