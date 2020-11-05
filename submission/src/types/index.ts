export interface BlockDetails {
  hash: string
  header: {
    blockHeight: number
    parentHash: string
    extrinsicsRoot: string
    stateRoot: string
    digest: string
  }
}

export enum Choice {
  BlockNumber = 'Block number',
  Hash = 'Hash'
}
