import { ApiInterfaceRx } from '@polkadot/api/types';
import { ReferendumInfoFinished } from '@polkadot/types/interfaces';
import { Observable } from 'rxjs';
export declare function referendumsFinished(instanceId: string, api: ApiInterfaceRx): () => Observable<ReferendumInfoFinished[]>;
