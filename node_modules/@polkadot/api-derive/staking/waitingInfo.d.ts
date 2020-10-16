import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakingWaiting } from '../types';
import { Observable } from 'rxjs';
export declare function waitingInfo(instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveStakingWaiting>;
