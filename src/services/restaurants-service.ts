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
  public async getAll(): Promise<any[]> {

    return await (await this.api.get('/restaurant')).data[0].restaurant;
  }


  public async getPage(path: string): Promise<any[]> {

    return await (await this.api.get('/restaurant'+path)).data[0].restaurant;
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
