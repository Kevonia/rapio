import { app } from '@/store';
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
  },
  name: 'menumodal',
})
class Menumodal extends Vue {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------
  private isOpen = 0;

  private price = 0;

  private baseprice = 0;

  private Option1:any=[];
  
  

  private numberofItems = 1;

  private sidestotal = 0;

  public get total() {

    return (this.price * this.numberofItems) + this.sidestotal;
  }

  private Order: any = [];
  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  private collapses = [
    {
      title: 'Select Size',
      fieldtype: 'radio',
      data: [
        {
          name: 'Lagre',
          price: '605',
        },
        {
          name: 'medium',
          price: '505',
        },
      ],
    },
    {
      title: 'Select Part',
      fieldtype: 'radio',
      text: 'Text 2',
      data: [
        {
          name: 'Leg & Thigh',
          price: '0',
        },
        {
          name: 'Breast & Wing',
          price: '0',
        },
      ],
    },
    {
      title: 'Select Rice',
      fieldtype: 'radio',
      text: 'Text 3',
      data: [
        {
          name: 'Rice & Peas',
          price: '0',
        },
        {
          name: 'Rice ',
          price: '0',
        },
      ],
    },
    {
      title: 'Side Orders',
      fieldtype: 'counter',
      data: [
        {
          name: 'Fried Ripe Plantain',
          price: '250',
        },
        {
          name: 'Garlic Mashed Potatoes',
          price: '300',
        },
        {
          name: 'Mac & Cheese',
          price: '450',
        },
        {
          name: 'potato Wedge',
          price: '500',
        },
      ],
    },
    {
      title: 'Special Instructions ',
      fieldtype: 'text',
      text: 'Text 3',
    },
  ];

  constructor() {
    super();
  }



  private Update(price: number, name: string) {

    if (price != 0) {
      this.price = price;
    }

  }


  private AddSide(name: string, price: number) {
    // this.Order.push({name,price})

    let sum = 0
    this.Order.forEach((element: any[]) => {
      sum = Number(sum) + Number(element[1]);
    });

    this.sidestotal = sum;

  }

  private updateCart(){
       
    app.UpdateCart();
 
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
  Menumodal as default,
  Menumodal,
};
