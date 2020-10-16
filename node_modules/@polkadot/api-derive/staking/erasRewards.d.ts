import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex } from '@polkadot/types/interfaces';
import { DeriveEraRewards } from '../types';
import { Observable } from 'rxjs';
export declare function _erasRewards(instanceId: string, api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraRewards[]>;
export declare function erasRewards(instanceId: string, api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraRewards[]>;
