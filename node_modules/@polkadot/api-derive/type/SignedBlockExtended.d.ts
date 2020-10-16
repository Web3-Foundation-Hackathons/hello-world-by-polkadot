import { AccountId, SignedBlock } from '@polkadot/types/interfaces';
import { AnyJson, Constructor, Registry } from '@polkadot/types/types';
declare const _SignedBlock: Constructor<SignedBlock>;
/**
 * @name SignedBlockExtended
 * @description
 * A [[Block]] header with an additional `author` field that indicates the block author
 */
export default class BlockExtended extends _SignedBlock {
    #private;
    constructor(registry: Registry, block?: SignedBlock, sessionValidators?: AccountId[]);
    /**
     * @description Convenience method, returns the author for the block
     */
    get author(): AccountId | undefined;
    /**
     * @description Creates a human-friendly JSON representation
     */
    toHuman(isExtended?: boolean): AnyJson;
    /**
     * @description Creates the JSON representation
     */
    toJSON(): AnyJson;
}
export {};
