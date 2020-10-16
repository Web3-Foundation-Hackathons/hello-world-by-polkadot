import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex } from '@polkadot/types/interfaces';
import { DeriveEraPrefs } from '../types';
import { Observable } from 'rxjs';
export declare function _eraPrefs(instanceId: string, api: ApiInterfaceRx): (era: EraIndex, withActive: boolean) => Observable<DeriveEraPrefs>;
export declare function eraPrefs(instanceId: string, api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraPrefs>;
export declare function _erasPrefs(instanceId: string, api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraPrefs[]>;
export declare function erasPrefs(instanceId: string, api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraPrefs[]>;
