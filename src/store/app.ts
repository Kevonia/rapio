import { homeData } from '@/entities/homedata/homedata';
import { HomeService } from '@/services/home-service';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

const MODULE_NAME = 'appstore';

@Module({ namespaced: true })
class AppStore {

  public static readonly getModule = () => ({
    [MODULE_NAME]: AppStore as any as VuexModule,
  })

  private _homeData!: homeData;

  private _chartitems: number = 0;

  // ------------------------------------------------------------------------
  // Getters retrieve properties from the Store.
  // ------------------------------------------------------------------------

  public get homeData() {
    return this._homeData;
  }

  public get chatList() {
    return this._chartitems;
  }

  // ------------------------------------------------------------------------
  // Actions are publicly accessbile wrappers to perform mutations
  // on the Store. These actions will internally call the appropriate
  // mutations to update the Store.
  //
  // Note: The returned value will be passed to the mutation handler
  // specified as the decorator's "commit" attribute.
  // ------------------------------------------------------------------------

  @Action({ commit: 'setHomePage' })
  public async initializeHomePage() {

    const result =  await HomeService.getAll();

    return  result;
  }

  @Action({ commit: 'setChartitems' })
  public async UpdateCart() {

    const result = this._chartitems + 1;

    return  result;
  }
  // ------------------------------------------------------------------------
  // Mutations update the properties in the Store.
  // They are internal
  // ------------------------------------------------------------------------
  @Mutation
  private setHomePage(value: homeData) {
    this._homeData = value;
  }

  @Mutation
  private setChartitems(value: number) {
    this._chartitems = value;
  }
}

export {
  AppStore as default,
  AppStore,
};
