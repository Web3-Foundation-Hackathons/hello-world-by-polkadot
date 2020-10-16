import { ApiInterfaceRx } from '@polkadot/api/types';
import BN from 'bn.js';
import { Observable } from 'rxjs';
export declare function referendumIds(instanceId: string, api: ApiInterfaceRx): () => Observable<BN[]>;
