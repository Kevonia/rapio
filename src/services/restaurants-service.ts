import { RestaurantsModel } from '@/entities/restaurants/restaurants';
import { AxiosResponse } from 'axios';
import { BaseService } from './base';

class RestaurantsService extends BaseService {
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

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------
  public async getFilter(id: string): Promise<any[]> {

    return await (await this.api.get('/restaurant/filter/' + id)).data[0].restaurant;
  }

  public async getMenuById(id: string): Promise<any[]> {

    return await (await this.api.get('/restaurant/menu/' + id)).data[0].restaurantmenu;
  }

  public async getAll(): Promise<any[]> {

    return await (await this.api.get('/restaurant')).data[0].restaurant;
  }


  public async getPage(path: string): Promise<any[]> {

    return await (await this.api.get('/restaurant?' + path)).data[0].restaurant;
  }

  public async sortBy(data: any): Promise<any[]> {

    return await (await this.api.post('/restaurant/sort', data)).data[0].restaurant;
  }

  public async getCuisine(): Promise<any[]> {

    return await (await this.api.get('/cuisine')).data.cuisine;
  }



  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------

}

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------

const service = new RestaurantsService();

export {
  service as default,
  service as RestaurantsService,
};
