import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId } from '@polkadot/types/interfaces';
import { DeriveSocietyMember } from '../types';
import { Observable } from 'rxjs';
/**
 * @description Get the member info for a society
 */
export declare function member(instanceId: string, api: ApiInterfaceRx): (accountId: AccountId) => Observable<DeriveSocietyMember>;
