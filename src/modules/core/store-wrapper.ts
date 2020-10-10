import { Store } from 'vuex';

// ----------------------------------------------------------------------------
// Functions
// ----------------------------------------------------------------------------
function createStoreWrapper<StoreType extends object>(store: Store<any>, moduleName: string) {
  return new Proxy<StoreType>({} as StoreType, {
    get(target: object, prop: string | number | symbol) {
      const resolvedProp = `${moduleName}/${prop.toString()}`;
      const { getters } = store;

      if (resolvedProp in getters) {
        return getters[resolvedProp];
      } else {
        return (...args: unknown[]) => {
          return store.dispatch(resolvedProp, ...args);
        };
      }
    },
  });
}

// ----------------------------------------------------------------------------
// Exports
// ----------------------------------------------------------------------------
export {
  createStoreWrapper,
};
