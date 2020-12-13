#!/bin/bash

# Purge any chain data from previous runs
# You will be prompted to type `y`
$HOME/substrate-node-template/target/release/node-template purge-chain --base-path /tmp/alice --chain local