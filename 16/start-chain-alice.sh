#!/bin/bash

# Start Alice's node
$HOME/substrate-node-template/target/release/node-template \
  --base-path /tmp/alice \
  --chain local \
  --alice \
  --port 30333 \
  --ws-port 9944 \
  --rpc-port 9933 \
  --node-key 0000000000000000000000000000000000000000000000000000000000000001 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
  --validator