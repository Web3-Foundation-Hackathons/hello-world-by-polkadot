import { AugmentedConst, QueryableConsts, QueryableModuleConsts } from '@polkadot/api/types/consts';
import { Codec } from '@polkadot/types/types';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
export interface ModuleStorage {
    [key: string]: StorageEntry;
}
export declare type Constants = QueryableConsts<'rxjs'>;
export declare type ConstantCodec = Codec & AugmentedConst<'rxjs'>;
export declare type ModuleConstants = QueryableModuleConsts;
export interface Storage {
    [key: string]: ModuleStorage;
    substrate: ModuleStorage;
}
