import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakingElected } from '../types';
import { Observable } from 'rxjs';
export declare function electedInfo(instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveStakingElected>;
