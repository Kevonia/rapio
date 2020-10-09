import { Component, Vue } from 'vue-property-decorator';
import HeroBanner from '@/components/hero-banner';
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

  public get collections() {
    return [
      {
        id: 1,
        title: 'Trending',
        img: 'https://www.7krave.com/img/category/collection.jpg',
      },
      {
        id: 2,
        title: 'Top rated',
        img: 'https://www.7krave.com/img/category/category.jpg',
      },
      {
        id: 3,
        title: 'Collection',
        img: 'http://metropolitanhost.com/themes/themeforest/html/quickmunch/assets/img/about/blog/1920x700/banner-6.jpg',
      },
      {
        id: 4,
        title: 'Trending',
        img: 'http://metropolitanhost.com/themes/themeforest/html/quickmunch/assets/img/about/blog/1920x700/banner-4.jpg',
      },

    ];

  }


  public get testimonials() {
    return [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        author: 'Kevonia Tomlinson',
      }, {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        author: 'Aaliyah Henry',
      },

    ];

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

  private mounted() {
    // TODO: stuff to do when this component loads.

  }
}

export {
  Home as default,
  Home,
};
