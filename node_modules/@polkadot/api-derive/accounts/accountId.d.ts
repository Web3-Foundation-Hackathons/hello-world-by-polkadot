import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { Observable } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';
/**
 * @name accountId
 * @param {(Address | AccountId | AccountIndex | string | null)} address - An accounts address in various formats.
 * @description  An [[AccountId]]
 */
export declare function accountId(instanceId: string, api: ApiInterfaceRx): (address?: Address | AccountId | AccountIndex | string | null) => Observable<AccountId>;
