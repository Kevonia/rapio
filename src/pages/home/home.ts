import { Component, Vue } from 'vue-property-decorator';
import HeroBanner from '@/components/hero-banner';
import { app } from '@/store';

import env from '@/config/env';

const { beer, truck, cutlery, like } = env.brand;

@Component({
  components: {
    HeroBanner,
  },
  name: 'home',
})
class Home extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------
   private isLoading = true;
   private currentTestimonials = 0;
  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------


  constructor() {
    super();
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------
  public get menu() {
    return [
      {
        id: 1,
        name: 'Breakfast',
        link: '#',
        icon: 'bread-slice',
      },
      {
        id: 2,
        name: 'Lunch',
        link: '#',
        icon: 'hamburger',
      },
      {
        id: 3,
        name: 'Dinner',
        link: '#',
        icon: 'utensils',
      },
      {
        id: 4,
        name: 'Dessert',
        link: '#',
        icon: 'ice-cream',
      },
      {
        id: 5,
        name: 'Coffee',
        link: '#',
        icon: 'coffee',
      },
      {
        id: 6,
        name: 'Drinks',
        link: '#',
        icon: 'beer',
      },
    ];

  }


  public get Icon1() {
    return beer;
  }
  public get Icon2() {
    return truck;
  }

  public get Icon3() {
    return cutlery;
  }

  public get Icon4() {
    return like;
  }




  public get collections() {
    return app.homeData?.collections;
  }


  public get testimonials() {
    return app.homeData?.testimonials;
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

  private async created() {
    // TODO: stuff to do when this component loads.
    await app.initializeHomePage();

    this.isLoading = false;
    this.currentTestimonials = 1;

  }

  private async mounted() {
    // TODO: stuff to do when this component loads.

  }
}

export {
  Home as default,
  Home,
};
