import { MetadataV11, MetadataV12 } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';
/**
 * @internal
 **/
export default function toV12(registry: Registry, { extrinsic, modules }: MetadataV11): MetadataV12;
