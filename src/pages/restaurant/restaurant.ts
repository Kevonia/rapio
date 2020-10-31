import { restaurant } from '@/store';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'restaurant',
})
class Restaurant extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

   private hover = false;
  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }


  get restaurant(){
    return  restaurant.Restaurant;
  }

  
  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

  private async created() {
    // TODO: stuff to do when this component loads.

    console.log( this.$route)
    await restaurant.fetchRestaurant()


  }
  // --------------------------------------------------------------------------
  // [Private] Lifecycle Hooks
  // --------------------------------------------------------------------------

  private async mounted() {
    // TODO: stuff to do when this component loads.
   

  }
}

export {
  Restaurant as default,
  Restaurant,
};
