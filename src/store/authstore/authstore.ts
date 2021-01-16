import { UserPost } from '@/entities/user-post/user-post';
import { AuthService } from '@/services/auth-service';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';


const MODULE_NAME = 'authstore';

@Module({ namespaced: true })
class AuthStore {


    // ------------------------------------------------------------------------
    // Getters retrieve properties from the Store.
    // ------------------------------------------------------------------------

    public get logined() {
        return this._logined;
    }

    public get registered() {
        return this._registered;
    }

    public static readonly getModule = () => ({
        [MODULE_NAME]: AuthStore as any as VuexModule,
    })

    private _registered: boolean = false;

    private _logined: any;

    // ------------------------------------------------------------------------
    // Actions are publicly accessbile wrappers to perform mutations
    // on the Store. These actions will internally call the appropriate
    // mutations to update the Store.
    //
    // Note: The returned value will be passed to the mutation handler
    // specified as the decorator's "commit" attribute.
    // ------------------------------------------------------------------------

    @Action({ commit: 'setRegisted' })
    public async AddUser(data: UserPost) {

        const results = await AuthService.addUser(data);
        return results;
    }

    @Action({ commit: 'setLogined' })
    public async login(data: any) {

        const results = await AuthService.login(data);
        return results;
    }


    // ------------------------------------------------------------------------
    // Mutations update the properties in the Store.
    // They are internal
    // ------------------------------------------------------------------------

    @Mutation
    private setRegisted(value: boolean) {
        this._registered = value;
    }

    @Mutation
    private setLogined(value: any) {
        this._logined = value;
    }
}

export {
    AuthStore as default,
    AuthStore,
};
