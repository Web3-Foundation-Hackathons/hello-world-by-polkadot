import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveCouncilVotes } from '../types';
import { Observable } from 'rxjs';
export declare function votes(instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveCouncilVotes>;
