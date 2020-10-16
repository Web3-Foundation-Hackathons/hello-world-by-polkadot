import { SignOptions } from '@polkadot/keyring/types';
import { IKeyringPair, Registry } from '../types';
export declare function sign(registry: Registry, signerPair: IKeyringPair, u8a: Uint8Array, options?: SignOptions): Uint8Array;
