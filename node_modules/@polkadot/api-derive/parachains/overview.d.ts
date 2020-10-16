import { DeriveParachain } from '../types';
import { Observable } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';
export declare function overview(instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveParachain[]>;
