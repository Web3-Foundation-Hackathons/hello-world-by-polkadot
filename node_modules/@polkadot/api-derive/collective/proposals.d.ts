import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveCollectiveProposal } from '../types';
import { Observable } from 'rxjs';
export declare function proposals(instanceId: string, api: ApiInterfaceRx, section: 'council' | 'technicalCommittee'): () => Observable<DeriveCollectiveProposal[]>;
