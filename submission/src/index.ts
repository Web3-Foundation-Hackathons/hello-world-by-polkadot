import { ApiPromise, WsProvider } from '@polkadot/api'
import { BlockDetails, Choice } from './types/index.js'
import { getAttributeInput, getValueInput } from './lib/index.js'

const provider = new WsProvider('wss://rpc.polkadot.io')
const api = await ApiPromise.create({ provider })

const { attribute } = await getAttributeInput()
const { value } = await getValueInput(attribute)

let blockDetails: BlockDetails
let signedBlock

if (attribute === Choice.BlockNumber) {
  const blockHash = await api.rpc.chain.getBlockHash(+value)
  signedBlock = await api.rpc.chain.getBlock(blockHash)
} else {
  signedBlock = await api.rpc.chain.getBlock(value)
}

const {
  block: {
    hash,
    header: { number, parentHash, stateRoot, extrinsicsRoot, digest }
  }
} = signedBlock

blockDetails = {
  hash: hash.toHex(),
  header: {
    blockHeight: number.toNumber(),
    parentHash: parentHash.toHex(),
    extrinsicsRoot: extrinsicsRoot.toHex(),
    stateRoot: stateRoot.toHex(),
    digest: digest.toHex()
  }
}

console.log(`Details of block with ${attribute} ${value}:`, '\n')
console.log(blockDetails)
