import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId } from '@polkadot/types/interfaces';
import { DeriveStakingValidators } from '../types';
import { Observable } from 'rxjs';
export declare function nextElected(instanceId: string, api: ApiInterfaceRx): () => Observable<AccountId[]>;
/**
 * @description Retrieve latest list of validators
 */
export declare function validators(instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveStakingValidators>;
