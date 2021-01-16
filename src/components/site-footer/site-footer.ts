import { Component, Vue } from 'vue-property-decorator';

import env from '@/config/env';
import { HomeService } from '@/services/home-service';

const { logo } = env.brand;

@Component({
  components: {
  },
  name: 'site-footer',
})
class SiteFooter extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------
  public email: string = '';

  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------
  get logo() {
    return logo;
  }
  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------
  public async Subscribe() {

    const email = {
      email: this.email
    };
    const mail = await HomeService.getMailChip(email);

    if (mail) {
      this.$buefy.toast.open({
        message: 'Thank you for Subscribing To Our Mailing List',
        type: 'is-success'
      })
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

  }
}

export {
  SiteFooter as default,
  SiteFooter,
};
