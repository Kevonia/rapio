import { Component, Vue } from 'vue-property-decorator';
import AuthformTemplate from '@/components/authform-template';
import env from '@/config/env';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import VueRecaptcha from 'vue-recaptcha';
import { auth } from '@/store';


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
  private isLoading = false;

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

  private async signup() {


    this.isLoading = true;
    const { confrimPassword, password, fullName, email } = this;

    const user = {
      confrimPassword, password, fullName, email,
    };



    const data = await auth.AddUser(user);

    if (data.msg) {
      this.$buefy.toast.open({
        message: 'Account Created',
        type: 'is-success',
      });


      this.isLoading = false;
    } else {
      this.isLoading = false;
    }



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
