import { H256 } from '@polkadot/types/interfaces';
import { AnyJson, AnyNumber, Codec, Constructor, ICompact, InterfaceTypes, Registry } from '../types';
import BN from 'bn.js';
import { compactAddLength, compactFromU8a, compactToU8a } from '@polkadot/util';
import { UIntBitLength } from './AbstractInt';
export interface CompactEncodable extends Codec {
    bitLength(): number;
    toBn(): BN;
    toNumber(): number;
}
/**
 * @name Compact
 * @description
 * A compact length-encoding codec wrapper. It performs the same function as Length, however
 * differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
 * used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
 * a number and making the compact representation thereof
 */
export default class Compact<T extends CompactEncodable> implements ICompact<T> {
    #private;
    readonly registry: Registry;
    constructor(registry: Registry, Type: Constructor<T> | keyof InterfaceTypes, value?: Compact<T> | AnyNumber);
    static with<T extends CompactEncodable>(Type: Constructor<T> | keyof InterfaceTypes): Constructor<Compact<T>>;
    /**
     * Prepend a Uint8Array with its compact length.
     *
     * @param u8a - The Uint8Array to be prefixed
     */
    static addLengthPrefix: typeof compactAddLength;
    static decodeU8a: typeof compactFromU8a;
    static encodeU8a: typeof compactToU8a;
    static stripLengthPrefix(u8a: Uint8Array, bitLength?: UIntBitLength): Uint8Array;
    /** @internal */
    static decodeCompact<T extends CompactEncodable>(registry: Registry, Type: Constructor<T>, value: Compact<T> | AnyNumber): CompactEncodable;
    /**
     * @description The length of the value when encoded as a Uint8Array
     */
    get encodedLength(): number;
    /**
     * @description returns a hash of the contents
     */
    get hash(): H256;
    /**
     * @description Checks if the value is an empty value
     */
    get isEmpty(): boolean;
    /**
     * @description Returns the number of bits in the value
     */
    bitLength(): number;
    /**
     * @description Compares the value of the input to see if there is a match
     */
    eq(other?: unknown): boolean;
    /**
     * @description Returns a BigInt representation of the number
     */
    toBigInt(): BigInt;
    /**
     * @description Returns the BN representation of the number
     */
    toBn(): BN;
    /**
     * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
     */
    toHex(isLe?: boolean): string;
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */
    toHuman(isExtended?: boolean): AnyJson;
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */
    toJSON(): AnyJson;
    /**
     * @description Returns the number representation for the value
     */
    toNumber(): number;
    /**
     * @description Returns the base runtime type name for this instance
     */
    toRawType(): string;
    /**
     * @description Returns the string representation of the value
     */
    toString(): string;
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    toU8a(isBare?: boolean): Uint8Array;
    /**
     * @description Returns the embedded [[UInt]] or [[Moment]] value
     */
    unwrap(): T;
}
