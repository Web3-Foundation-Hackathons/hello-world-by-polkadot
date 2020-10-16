import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakingQuery } from '../types';
import { Observable } from 'rxjs';
/**
 * @description From a stash, retrieve the controllerId and all relevant details
 */
export declare function query(instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string) => Observable<DeriveStakingQuery>;
export declare function queryMulti(instanceId: string, api: ApiInterfaceRx): (accountIds: (Uint8Array | string)[]) => Observable<DeriveStakingQuery[]>;
