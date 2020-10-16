import { EraIndex } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveOwnExposure } from '../types';
import { Observable } from 'rxjs';
export declare function _ownExposure(instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, era: EraIndex, withActive: boolean) => Observable<DeriveOwnExposure>;
export declare function ownExposure(instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, era: EraIndex) => Observable<DeriveOwnExposure>;
export declare function _ownExposures(instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveOwnExposure[]>;
export declare function ownExposures(instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveOwnExposure[]>;
