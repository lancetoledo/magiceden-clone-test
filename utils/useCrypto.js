import { Buffer } from 'buffer'
global.Buffer = global.Buffer || Buffer

import nacl from 'tweetnacl'
import bs58 from 'bs58'

export const useCrypto = () => {
    const encode = (payload) => {
        return bs58.encode(payload)
    }

    const decode = (payload) => {
        return bs58.decode(payload)
    }

    const decrypt = (data, nonce, sharedSecret) => {
        if (!sharedSecret) throw new Error('Missing shared secret')

        const decryptedData = nacl.box.open.after(bs58.decode(data), bs58.decode(nonce), sharedSecret)
        if (!decryptedData) throw new Error('Unable to decrypt data')

        return JSON.parse(Buffer.from(decryptedData).toString('utf8'))
    }

    const encrypt = (payload, sharedSecret) => {
        if (!sharedSecret) throw new Error('Missing shared secret')

        const nonce = nacl.randomBytes(24)
        const encryptedPayload = nacl.box.after(Buffer.from(JSON.stringify(payload)), nonce, sharedSecret)

        return [nonce, encryptedPayload]
    }

    const getKeyPair = () => nacl.box.keyPair()

    return { encode, decode, encrypt, decrypt, getKeyPair }
}
