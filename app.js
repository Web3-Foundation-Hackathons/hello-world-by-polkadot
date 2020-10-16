
const inputBlockNumber=process.argv[2];// take input from command line
const { ApiPromise, WsProvider } = require('@polkadot/api');
const wsProvider = new WsProvider('wss://rpc.polkadot.io');
async function getblock()
{
    const api = await ApiPromise.create({ provider: wsProvider });
    await api.isReady;

    console.log("api connected to node. Genesis Hash: " +api.genesisHash.toHex());

    if(inputBlockNumber)
    {
        console.log("You entered block number: "+inputBlockNumber)
        const blockHash = await api.rpc.chain.getBlockHash(inputBlockNumber);
        const signedBlock = await api.rpc.chain.getBlock(blockHash);
        console.log("Block data: ");
        console.log(signedBlock.toHuman());
        console.log("Block extrinsics: ");
        // the hash for each extrinsic in the block
        signedBlock.block.extrinsics.forEach((ex, index) => {
        console.log(index, ex.hash.toHex());
    });
    }
    else// no specific block number entered, dispay new blocks
    { 
        const bhash = await api.rpc.chain.getBlockHash();
        console.log("hash from latest block: "+bhash.toHex())
        const signedBlock = await api.rpc.chain.getBlock(bhash);
        console.log("Block data: ");
        console.log(signedBlock.toHuman());
        const allRecords = await api.query.system.events();

        // map between the extrinsics and events
        signedBlock.block.extrinsics.forEach(({ method: { method, section } }, index) => {
        const events = allRecords
            .filter(({ phase }) =>
            phase.isApplyExtrinsic &&
            phase.asApplyExtrinsic.eq(index)
            )
            .map(({ event }) => `${event.section}.${event.method}`);
                console.log(`${section}.${method}:: ${events.join(', ') || 'no events'}`);
            });
        }
}
//run the async call
getblock().catch(err=>{console.log(err)}).then(()=>{
process.exit(0);
})