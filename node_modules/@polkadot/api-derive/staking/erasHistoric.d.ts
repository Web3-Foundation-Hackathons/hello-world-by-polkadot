import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex } from '@polkadot/types/interfaces';
import { Observable } from 'rxjs';
export declare function erasHistoric(instanceId: string, api: ApiInterfaceRx): (withActive: boolean) => Observable<EraIndex[]>;
