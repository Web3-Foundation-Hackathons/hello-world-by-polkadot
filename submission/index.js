// Import
const { ApiPromise, WsProvider } = require('@polkadot/api')

const createApi = async () => {
  // Construct
  const wsProvider = new WsProvider('wss://rpc.polkadot.io')
  return ApiPromise.create({ provider: wsProvider })
}

const apiConsts = async () => {
  const api = await createApi()

  const prints = [
    { txt: 'Genesis Hash', fun: () => api.genesisHash.toHex() },
    {
      txt: 'The length of an epoch (session) in Babe',
      fun: () => api.consts.babe.epochDuration.toNumber()
    },
    {
      txt: 'The amount required to create a new account',
      fun: () => api.consts.balances.existentialDeposit.toNumber()
    },
    {
      txt: 'The amount required per byte on an extrinsic',
      fun: () => api.consts.transactionPayment.transactionByteFee.toNumber()
    }
  ]

  console.log('CONSTS (NOT CALLS, IMMEDIATELY AVAILABLE', '\n')
  prints.map(({ txt, fun }) => {
    console.log(txt)
    console.log(fun(), '\n')
  })
}

const apiQuery = async () => {
  const api = await createApi()
  const ADDR = '1exaAg2VJRQbyUBAeXcktChCAqjVP9TUxF3zo23R2T6EGdE'
  const ADDR1 = '14ynqnj2wq9uPGUoXSMCU77aeFjYU7TELemtB7Aw6kWHfz2d'

  // Retrieve timestamp
  // retrieve the account balance & nonce via the system module
  const [now, { nonce, data: balance }] = await Promise.all([
    api.query.timestamp.now(),
    api.query.system.account(ADDR)
  ])

  console.log('QUERY API CALLS', '\n')
  console.log(
    `${now}: ${ADDR} has a balance of ${balance.free} and a nonce of ${nonce}`
  )
  console.log()
  console.log('QUERY SUBSCRIPTION')
  // const unsub = await api.query.timestamp.now(moment => {
  //   console.log(`The last block has a timestamp of ${moment}`)
  // })

  // subscribe to balances changes for one account
  // const unsub = await api.query.system.account(
  //   ADDR,
  //   ({ nonce, data: balance }) => {
  //     console.log(
  //       `free balance is ${balance.free} with ${balance.reserved} reserved and a nonce of ${nonce}`
  //     )
  //   }
  // )

  // subscribe to balances changes for two accounts
  const unsub = await api.query.system.account.multi(
    [ADDR, ADDR1],
    ([{ data: balance }, { data: balance1 }]) => {
      console.log(`Balance of ${ADDR} is ${balance.free}`)
      console.log(`Balance of ${ADDR1} is ${balance1.free}`)
    }
  )
}

const apiRpc = async () => {
  const api = await createApi()

  const [chain, { number, hash }] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.chain.getHeader()
  ])

  console.log('RPC QUERIES', '\n')
  console.log(`${chain}: last block  #${number} and hash ${hash}`, '\n', '\n')

  console.log('RPC SUBSCRIPTION')

  let count = 0

  // Subscribe to the new headers, unsubscribe after 10 blocks
  // const unsubHeads = await api.rpc.chain.subscribeNewHeads(lastHeader => {
  //   console.log(
  //     `${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash}`
  //   )

  //   if (++count === 10) {
  //     unsubHeads()
  //   }
  // })
  const unsubHeads = await api.derive.chain.subscribeNewHeads(lastHeader => {
    console.log(
      `${chain}: last block #${lastHeader.number} has hash ${lastHeader.hash} and was authored by ${lastHeader.author}`
    )

    if (++count === 5) {
      unsubHeads()
    }
  })
}

// apiConsts()
apiQuery()
// apiRpc()
