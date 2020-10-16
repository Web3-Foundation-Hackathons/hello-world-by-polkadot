import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex } from '@polkadot/types/interfaces';
import { DeriveEraPoints } from '../types';
import { Observable } from 'rxjs';
export declare function _erasPoints(instanceId: string, api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraPoints[]>;
export declare function erasPoints(instanceId: string, api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraPoints[]>;
