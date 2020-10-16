import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveCollectiveProposals } from '../types';
import { Observable } from 'rxjs';
export declare function proposals(instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveCollectiveProposals>;
