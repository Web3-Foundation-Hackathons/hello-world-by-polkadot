const { ApiPromise, WsProvider } = require('@polkadot/api')

const createApi = async () => {
  // Construct
  const wsProvider = new WsProvider('wss://rpc.polkadot.io')
  return ApiPromise.create({ provider: wsProvider })
}

const run = async () => {
  const api = await createApi()

  const blockHash = await api.rpc.chain.getBlockHash()
  console.log(blockHash.toHex())

  const header = await api.derive.chain.getHeader()
  console.log(header.hash.toHex(), header.parentHash.toHex())
  // console.log('AUTHOR')
  // console.log(
  //   `Block #${header.number} has hash ${header.parentHash} and ${header.author}`
  // )

  const lastSignedBlock = await api.rpc.chain.getBlock()

  console.log('EXTRINSICS')

  // lastSignedBlock.block.extrinsics.forEach((ex, index) => {
  //   // the extrinsics are decoded by the API, human-like view
  //   console.log(index, ex.toHuman())

  //   const {
  //     isSigned,
  //     meta,
  //     method: { args, method, section }
  //   } = ex

  //   // explicit display of name, args & documentation
  //   console.log(
  //     `${section}.${method}(${args.map(a => a.toString()).join(', ')})`
  //   )
  //   console.log(meta.documentation.map(d => d.toString()).join('\n'))

  //   // signer/nonce info
  //   if (isSigned) {
  //     console.log(
  //       `signer=${ex.signer.toString()}, nonce=${ex.nonce.toString()}`
  //     )
  //   }
  // })
}

run()
