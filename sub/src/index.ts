import { ApiPromise, WsProvider } from '@polkadot/api'
import { BlockDetails, Choice } from './types/index.js'
import { getAttributeInput, getValueInput } from './lib/index.js'

const provider = new WsProvider('wss://rpc.polkadot.io')
const api = await ApiPromise.create({ provider })

const { attribute } = await getAttributeInput()
const { value } = await getValueInput(attribute)

if (attribute === Choice.BlockNumber) {
  const blockHash = await api.rpc.chain.getBlockHash(+value)
  const {
    block: {
      hash,
      header: { number, parentHash, stateRoot, extrinsicsRoot, digest }
    }
  } = await api.rpc.chain.getBlock(blockHash)
  const blockDetails: BlockDetails = {
    hash: hash.toHex(),
    header: {
      blockHeight: number.toNumber(),
      parentHash: parentHash.toHex(),
      extrinsicsRoot: extrinsicsRoot.toHex(),
      stateRoot: stateRoot.toHex(),
      digest: digest.toHex()
    }
  }
  console.log(blockDetails)
  // console.log(`${{}}`)
}
