import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex } from '@polkadot/types/interfaces';
import { DeriveEraExposure } from '../types';
import { Observable } from 'rxjs';
export declare function _eraExposure(instanceId: string, api: ApiInterfaceRx): (era: EraIndex, withActive: boolean) => Observable<DeriveEraExposure>;
export declare function eraExposure(instanceId: string, api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraExposure>;
export declare function _erasExposure(instanceId: string, api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraExposure[]>;
export declare function erasExposure(instanceId: string, api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraExposure[]>;
