import { EventRecord, Hash, SignedBlock } from '@polkadot/types/interfaces';
import { Observable } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';
interface Result {
    block: SignedBlock;
    events: EventRecord[];
}
export declare function events(instanceId: string, api: ApiInterfaceRx): (at: Hash) => Observable<Result>;
export {};
