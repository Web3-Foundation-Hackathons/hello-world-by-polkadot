import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveReferendum } from '../types';
import { Observable } from 'rxjs';
export declare function referendumsActive(instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveReferendum[]>;
