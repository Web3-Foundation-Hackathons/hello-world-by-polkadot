import { ApiInterfaceRx } from '@polkadot/api/types';
import { Observable } from 'rxjs';
import { SignedBlockExtended } from '../type';
/**
 * @name getBlock
 * @param {( Uint8Array | string )} hash - A block hash as U8 array or string.
 * @description Get a specific block (e.g. rpc.chain.getBlock) and extend it with the author
 * @example
 * <BR>
 *
 * ```javascript
 * const { author, number } = await api.derive.chain.getHeader('0x123...456');
 *
 * console.log(`block #${number} was authored by ${author}`);
 * ```
 */
export declare function getHeader(instanceId: string, api: ApiInterfaceRx): (hash: Uint8Array | string) => Observable<SignedBlockExtended | undefined>;
