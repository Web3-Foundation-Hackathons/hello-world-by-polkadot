import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakingKeys } from './types';
import { Observable } from 'rxjs';
export declare function keys(instanceId: string, api: ApiInterfaceRx): (stashId: Uint8Array | string) => Observable<DeriveStakingKeys>;
export declare function keysMulti(instanceId: string, api: ApiInterfaceRx): (stashIds: (Uint8Array | string)[]) => Observable<DeriveStakingKeys[]>;
