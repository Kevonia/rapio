import { Component, Vue } from 'vue-property-decorator';
import { app, restaurant } from '@/store';


import Menumodal from '@/components/menumodal';


@Component({
  components: {Menumodal},
  name: 'meuns',
})
class Meuns extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------
  private isloading = true;

  private  isComponentModalActive = false;
  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------
  public get menus() {

    return restaurant.Menu;
  }
  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  private async Update() {
    // TODO: stuff to do when this component loads.
    this.isComponentModalActive = true;
  }
  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Lifecycle Hooks
  // --------------------------------------------------------------------------

  private async mounted() {
    // TODO: stuff to do when this component loads.

    await restaurant.fetchMenu(this.$route.params.id);
    this.isloading = false;
  }


}

export {
  Meuns as default,
  Meuns,
};
