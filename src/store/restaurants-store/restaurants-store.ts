import { RestaurantsModel } from '@/entities/restaurants/restaurants';
import { RestaurantsService } from '@/services/restaurants-service';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';


const MODULE_NAME = 'restaurantstore';

@Module({ namespaced: true })
class RestaurantsStore {

    private restaurantsStore!: RestaurantsModel[];


    public static readonly getModule = () => ({
        [MODULE_NAME]: RestaurantsStore as any as VuexModule,
    })


    // ------------------------------------------------------------------------
    // Getters retrieve properties from the Store.
    // ------------------------------------------------------------------------

    public get Restaurant() {
        return this.restaurantsStore;
    }

    // ------------------------------------------------------------------------
    // Actions are publicly accessbile wrappers to perform mutations
    // on the Store. These actions will internally call the appropriate
    // mutations to update the Store.
    //
    // Note: The returned value will be passed to the mutation handler
    // specified as the decorator's "commit" attribute.
    // ------------------------------------------------------------------------

    @Action({ commit: 'setRestaurant' })
    public fetchRestaurant() {
       const   restaurantsS= RestaurantsService.getAll()
        return restaurantsS;
    }


    // ------------------------------------------------------------------------
    // Mutations update the properties in the Store.
    // They are internal
    // ------------------------------------------------------------------------

    @Mutation
    private setRestaurant(value: RestaurantsModel[]) {
        this.restaurantsStore = value;
    }
}

export {
    RestaurantsStore as default,
    RestaurantsStore,
};
