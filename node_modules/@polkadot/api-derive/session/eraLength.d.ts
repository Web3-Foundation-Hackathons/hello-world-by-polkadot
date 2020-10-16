import { BlockNumber } from '@polkadot/types/interfaces';
import { Observable } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';
export declare function eraLength(instanceId: string, api: ApiInterfaceRx): () => Observable<BlockNumber>;
