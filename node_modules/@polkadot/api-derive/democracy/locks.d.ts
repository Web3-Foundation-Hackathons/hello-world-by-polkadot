import { AccountId } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveDemocracyLock } from '../types';
import { Observable } from 'rxjs';
export declare function locks(instanceId: string, api: ApiInterfaceRx): (accountId: string | AccountId) => Observable<DeriveDemocracyLock[]>;
