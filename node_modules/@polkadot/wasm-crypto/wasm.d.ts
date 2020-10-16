/* tslint:disable */
/* eslint-disable */
/**
* Generate a bip39 phrase
*
* words: number of words, either 12, 15, 18 21 or 24
*
* Returns the bip 39 phrase
* @param {number} words
* @returns {string}
*/
export function ext_bip39_generate(words: number): string;
/**
* Create entropy from a bip39 phrase
*
* * phrase: mnemonic phrase
*
* Returns the entropy
* @param {string} phrase
* @returns {Uint8Array}
*/
export function ext_bip39_to_entropy(phrase: string): Uint8Array;
/**
* Create a mini-secret from a bip39 phrase
*
* * phrase: mnemonic phrase
*
* Returns the 32-byte mini-secret via entropy
* @param {string} phrase
* @param {string} password
* @returns {Uint8Array}
*/
export function ext_bip39_to_mini_secret(phrase: string, password: string): Uint8Array;
/**
* Creates a BTC/ETH compatible seed from a bip-39 phrase
*
* @phrase: mnemonic phrase
*
* Returns a 32-byte seed
* @param {string} phrase
* @param {string} password
* @returns {Uint8Array}
*/
export function ext_bip39_to_seed(phrase: string, password: string): Uint8Array;
/**
* Validates a bip39 phrase
*
* * phrase: mnemonic phrase
*
* Returns the true/false
* @param {string} phrase
* @returns {boolean}
*/
export function ext_bip39_validate(phrase: string): boolean;
/**
* Generate a key pair.
*
* * seed: UIntArray with 32 element
*
* returned vector is the concatenation of first the private key (64 bytes)
* followed by the public key (32) bytes.
* @param {Uint8Array} seed
* @returns {Uint8Array}
*/
export function ext_ed_from_seed(seed: Uint8Array): Uint8Array;
/**
* Sign a message
*
* The combination of both public and private key must be provided.
* This is effectively equivalent to a keypair.
*
* * pubkey: UIntArray with 32 element
* * private: UIntArray with 64 element
* * message: Arbitrary length UIntArray
*
* * returned vector is the signature consisting of 64 bytes.
* @param {Uint8Array} pubkey
* @param {Uint8Array} seckey
* @param {Uint8Array} message
* @returns {Uint8Array}
*/
export function ext_ed_sign(pubkey: Uint8Array, seckey: Uint8Array, message: Uint8Array): Uint8Array;
/**
* Verify a message and its corresponding against a public key;
*
* * signature: UIntArray with 64 element
* * message: Arbitrary length UIntArray
* * pubkey: UIntArray with 32 element
* @param {Uint8Array} signature
* @param {Uint8Array} message
* @param {Uint8Array} pubkey
* @returns {boolean}
*/
export function ext_ed_verify(signature: Uint8Array, message: Uint8Array, pubkey: Uint8Array): boolean;
/**
* blake2b hash for the specified input
*
* * data: Arbitrary data to be hashed
* * key: Key to add to the hashing (normally empty)
* * size: Size in bytes of the resulting output
*
* Returns a vector with the hash result
* @param {Uint8Array} data
* @param {Uint8Array} key
* @param {number} size
* @returns {Uint8Array}
*/
export function ext_blake2b(data: Uint8Array, key: Uint8Array, size: number): Uint8Array;
/**
* Create a keccak256 hash for the specified input
*
*
* Returns the hash as a vector
* @param {Uint8Array} data
* @returns {Uint8Array}
*/
export function ext_keccak256(data: Uint8Array): Uint8Array;
/**
* pbkdf2 kdf from an input, salt for the number of specified rounds
*
* * data: Arbitrary data to be hashed
* * salt: Salt for this hash
* * rounds: The number of rounds to perform
*
* Returns a vector with the hashed result
* @param {Uint8Array} data
* @param {Uint8Array} salt
* @param {number} rounds
* @returns {Uint8Array}
*/
export function ext_pbkdf2(data: Uint8Array, salt: Uint8Array, rounds: number): Uint8Array;
/**
* scrypt kdf from input, salt and config
*
* * password: Password to hash
* * salt: Salt for this hash
* * log2_n: log2(n)
* * r: r
* * p: p
*
* Returns vector with the hashed result
* @param {Uint8Array} password
* @param {Uint8Array} salt
* @param {number} log2_n
* @param {number} r
* @param {number} p
* @returns {Uint8Array}
*/
export function ext_scrypt(password: Uint8Array, salt: Uint8Array, log2_n: number, r: number, p: number): Uint8Array;
/**
* sha512 hash for the specified input
*
* * data: Arbitrary data to be hashed
*
* Returns a vecor with the hash result
* @param {Uint8Array} data
* @returns {Uint8Array}
*/
export function ext_sha512(data: Uint8Array): Uint8Array;
/**
* twox hash for the specified input and rounds
*
* * data: Arbitrary data to be hashed
* * rounds: Number of 8-byte rounds to add to the output
*
* Returns a vecor with the hash result
* @param {Uint8Array} data
* @param {number} rounds
* @returns {Uint8Array}
*/
export function ext_twox(data: Uint8Array, rounds: number): Uint8Array;
/**
* Perform a derivation on a secret
*
* * secret: UIntArray with 64 bytes
* * cc: UIntArray with 32 bytes
*
* returned vector the derived keypair as a array of 96 bytes
* @param {Uint8Array} pair
* @param {Uint8Array} cc
* @returns {Uint8Array}
*/
export function ext_sr_derive_keypair_hard(pair: Uint8Array, cc: Uint8Array): Uint8Array;
/**
* Perform a derivation on a secret
*
* * secret: UIntArray with 64 bytes
* * cc: UIntArray with 32 bytes
*
* returned vector the derived keypair as a array of 96 bytes
* @param {Uint8Array} pair
* @param {Uint8Array} cc
* @returns {Uint8Array}
*/
export function ext_sr_derive_keypair_soft(pair: Uint8Array, cc: Uint8Array): Uint8Array;
/**
* Perform a derivation on a publicKey
*
* * pubkey: UIntArray with 32 bytes
* * cc: UIntArray with 32 bytes
*
* returned vector is the derived publicKey as a array of 32 bytes
* @param {Uint8Array} pubkey
* @param {Uint8Array} cc
* @returns {Uint8Array}
*/
export function ext_sr_derive_public_soft(pubkey: Uint8Array, cc: Uint8Array): Uint8Array;
/**
* Generate a key pair.
*
* * seed: UIntArray with 32 element
*
* returned vector is the concatenation of first the private key (64 bytes)
* followed by the public key (32) bytes.
* @param {Uint8Array} seed
* @returns {Uint8Array}
*/
export function ext_sr_from_seed(seed: Uint8Array): Uint8Array;
/**
* Sign a message
*
* The combination of both public and private key must be provided.
* This is effectively equivalent to a keypair.
*
* * pubkey: UIntArray with 32 element
* * private: UIntArray with 64 element
* * message: Arbitrary length UIntArray
*
* * returned vector is the signature consisting of 64 bytes.
* @param {Uint8Array} pubkey
* @param {Uint8Array} secret
* @param {Uint8Array} message
* @returns {Uint8Array}
*/
export function ext_sr_sign(pubkey: Uint8Array, secret: Uint8Array, message: Uint8Array): Uint8Array;
/**
* Verify a message and its corresponding against a public key;
*
* * signature: UIntArray with 64 element
* * message: Arbitrary length UIntArray
* * pubkey: UIntArray with 32 element
* @param {Uint8Array} signature
* @param {Uint8Array} message
* @param {Uint8Array} pubkey
* @returns {boolean}
*/
export function ext_sr_verify(signature: Uint8Array, message: Uint8Array, pubkey: Uint8Array): boolean;

export function isReady(): boolean;
export function waitReady(): Promise<boolean>;

