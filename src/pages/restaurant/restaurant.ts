import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  name: 'restaurant',
})
class Restaurant extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------
   private ratings = 4.5;

   private hover = false;
  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
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

  // --------------------------------------------------------------------------
  // [Private] Lifecycle Hooks
  // --------------------------------------------------------------------------

  private mounted() {
    // TODO: stuff to do when this component loads.

  }
}

export {
  Restaurant as default,
  Restaurant,
};
