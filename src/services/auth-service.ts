import { AxiosResponse } from 'axios';
import { BaseService } from './base';

class AuthService extends BaseService {
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
  public async addUser(data: any): Promise<any> {
    // define custom request options [NB: default config found in @/services/base]
    return await (await this.api.post('/auth/add', data)).data;
  }

  public async login(data: any): Promise<any> {
    // define custom request options [NB: default config found in @/services/base]
    return await (await this.api.post('/auth/login', data)).data;
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

const service  = new AuthService();

export {
  service as default,
  service as AuthService,
};
