import { RestaurantsModel } from '@/entities/restaurants/restaurants';
import { RestaurantsService } from '@/services/restaurants-service';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';


const MODULE_NAME = 'restaurantstore';

@Module({ namespaced: true })
class RestaurantsStore {


    // ------------------------------------------------------------------------
    // Getters retrieve properties from the Store.
    // ------------------------------------------------------------------------

    public get Restaurant() {
        return this.restaurantsStore;
    }

    public get Cuisines() {
        return this.CuisinesStore;
    }


    public get Menu() {
        return this.restaurantsMenuStore;
    }

    public static readonly getModule = () => ({
        [MODULE_NAME]: RestaurantsStore as any as VuexModule,
    })

    private restaurantsStore!: RestaurantsModel[];
    private CuisinesStore!: any[];

    private restaurantsMenuStore!: any[];

    // ------------------------------------------------------------------------
    // Actions are publicly accessbile wrappers to perform mutations
    // on the Store. These actions will internally call the appropriate
    // mutations to update the Store.
    //
    // Note: The returned value will be passed to the mutation handler
    // specified as the decorator's "commit" attribute.
    // ------------------------------------------------------------------------

    @Action({ commit: 'setRestaurant' })
    public async fetchRestaurant() {
        const restaurantsS = await RestaurantsService.getAll();
        return restaurantsS;
    }

    @Action({ commit: 'setRestaurant' })
    public async fetchRestaurantPage(path: string) {
        const restaurantsS =  await RestaurantsService.getPage(path);
        return restaurantsS;
    }

    @Action({ commit: 'setRestaurant' })
    public async fetchSortBy(data: any) {
        const restaurantsS = await RestaurantsService.sortBy(data);
        return restaurantsS;
    }

    @Action({ commit: 'setCuisinesStore' })
    public async fetchsetCuisines() {
        const restaurantsS =  await RestaurantsService.getCuisine();
        return restaurantsS;
    }

    @Action({ commit: 'setRestaurant' })
    public async getFilter(id: string) {
        const restaurantsS = await RestaurantsService.getFilter(id);

        return restaurantsS;
    }

    @Action({ commit: 'setMenu' })
    public async fetchMenu(id: string) {
        const restaurantsS = await RestaurantsService.getMenuById(id);

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

    @Mutation
    private setMenu(value: any[]) {
        this.restaurantsMenuStore = value;
    }

    @Mutation
    private setCuisinesStore(value: any[]) {
        this.CuisinesStore = value;
    }


}

export {
    RestaurantsStore as default,
    RestaurantsStore,
};
