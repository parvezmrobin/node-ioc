/**
 * Parvez M Robin
 * parvezmrobin@gmail.com
 * August 07, 2021
 */

import { ContainerModule, interfaces } from 'inversify';
import Newable = interfaces.Newable;

export interface ModuleMembers {
  providers: Newable<unknown>[];
  exports: Newable<unknown>[];
}

export default class Module extends ContainerModule {
  constructor(moduleMembers: ModuleMembers) {
    super((bind) => {
      for (const provider of moduleMembers.providers) {
        const binding = bind(provider).toSelf();
        if (moduleMembers.exports.includes(provider)) {
          continue;
        }

        /**
         * When this provider is not public, it should only be bound
         * if the parent is in the providers list.
         */
        binding.when((request) => {
          const parentImplementation =
            request.parentRequest?.bindings[0].implementationType;

          if (typeof parentImplementation !== 'function') {
            throw new Error(
              `Not Implemented for ${typeof parentImplementation}`,
            );
          }

          const isCalledByPublic =
            !moduleMembers.providers.includes(parentImplementation);

          if (isCalledByPublic) {
            throw new Error(
              `${request.bindings[0].implementationType?.name} is not in public scope.\n` +
                `It cannot be loaded in ${parentImplementation.name}.\n` +
                'Consider making it public by passing it in exports parameter in Module constructor',
            );
          }

          return true;
        });
      }
    });
  }
}
