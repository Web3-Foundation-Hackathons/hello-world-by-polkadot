import { DeriveProposal } from '../types';
import { Observable } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';
export declare function proposals(instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveProposal[]>;
