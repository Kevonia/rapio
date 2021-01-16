import { restaurant } from '@/store';
import { Component, Vue } from 'vue-property-decorator';
import { Dictionary } from 'vue-router/types/router';

@Component({
  components: {},
  name: 'restaurant',
})
class Restaurant extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  private hover = false;
  private isloading = true;
  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    super();
  }


  get restaurant() {
    return restaurant.Restaurant;
  }


  get cuisines() {
    return restaurant.Cuisines;
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

  public async navigate(path: string, params?: Dictionary<string>) {
    await this.$router.push({ path, params });
  }



  private async created() {
    // TODO: stuff to do when this component loads.

    await restaurant.fetchsetCuisines();
    const filter = this.$route.query.filter;
    if (filter) {

      await restaurant.getFilter(filter?.toString());

      this.isloading = false;

    } else {
      if (!this.$route.query.order) {
        const page = this.$route.fullPath.split('?')[1];

        if (page != undefined) {
          await restaurant.fetchRestaurantPage(page);
          this.isloading = false;
        } else {
          await restaurant.fetchRestaurant();
          this.isloading = false;
        }
      } else if (this.$route.query.order) {

        const data = {
          order: this.$route.query.order,
          sort: this.$route.query.sort,
        };

        await restaurant.fetchSortBy(data);
        this.isloading = false;

      }
    }





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
