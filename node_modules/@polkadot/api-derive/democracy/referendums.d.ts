import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveReferendumExt } from '../types';
import { Observable } from 'rxjs';
export declare function referendums(instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveReferendumExt[]>;
