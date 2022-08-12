import { createContext, useState, useEffect } from 'react'
import { useCrypto } from '../utils/useCrypto'
import { useURL } from '../utils/useURL'
import nacl from 'tweetnacl'
import * as Linking from 'expo-linking'
import { clusterApiUrl, PublicKey } from '@solana/web3.js'
export const MagicEdenContext = createContext()
const _NETWORK = 'devnet'
const NETWORK = clusterApiUrl(_NETWORK)
const onConnectRedirectLink = Linking.createURL('onConnect')
const onDisconnectRedirectLink = Linking.createURL('onDisconnect')

const buildURL = (path, params) =>
  `https://phantom.app/ul/v1/${path}?${params.toString()}`
export const MagicEdenProvider = ({ children }) => {
  const { encode, decode, encrypt, decrypt, getKeyPair } = useCrypto()
  const [connected, setConnected] = useState(false)
  const [deepLink, setDeepLink] = useState('')
  const [dappKeyPair] = useState(getKeyPair())
  const [sharedSecret, setSharedSecret] = useState()
  const [session, setSession] = useState()
  const [phantomWalletPublicKey, setPhantomWalletPublicKey] = useState()

  useEffect(() => {
    console.log('secretkey', sharedSecret)
    console.log('deepLink', deepLink)
    console.log('session', session)
    console.log('dappKeyPair', dappKeyPair)
  }, [sharedSecret])

  // Deep Link
  useEffect(() => {
    const handleDeepLink = ({ url }) => {
      setDeepLink(url)
    }

    const checkDeepLink = async () => {
      const initialURL = await Linking.getInitialURL()

      if (initialURL) {
        setDeepLink(initialURL)
      }
    }

    checkDeepLink()

    const deepLinkSubscription = Linking.addEventListener('url', handleDeepLink)
    return () => deepLinkSubscription.remove()
  }, [])

  // Handle inbounds links
  useEffect(() => {
    if (!deepLink) return

    const { params, getParam, checkPath } = useURL(deepLink)

    if (getParam('errorCode')) {
      console.log(params)
      return
    }

    if (checkPath(/onConnect/)) {
      const sharedSecretDapp = nacl.box.before(
        decode(getParam('phantom_encryption_public_key')),
        dappKeyPair.secretKey,
      )
      const connectData = decrypt(
        getParam('data'),
        getParam('nonce'),
        sharedSecretDapp,
      )

      setSharedSecret(sharedSecretDapp)
      setSession(connectData.session)
      setPhantomWalletPublicKey(new PublicKey(connectData.public_key))

      setConnected(true)
    } else if (checkPath(/onDisconnect/)) {
      setConnected(false)
    }
  }, [deepLink])

  const connect = async () => {
    const params = new URLSearchParams({
      dapp_encryption_public_key: encode(dappKeyPair.publicKey),
      cluster: _NETWORK,
      app_url: 'https://phantom.app',
      redirect_link: onConnectRedirectLink,
    })

    const url = buildURL('connect', params)
    Linking.openURL(url)
  }

  const disconnect = async () => {
    const payload = { session }
    const [nonce, encryptedPayload] = encrypt(payload, sharedSecret)
    const params = new URLSearchParams({
      dapp_encryption_public_key: encode(dappKeyPair.publicKey),
      nonce: encode(nonce),
      redirect_link: onDisconnectRedirectLink,
      payload: encode(encryptedPayload),
    })

    const url = buildURL('disconnect', params)
    Linking.openURL(url)
  }
  return (
    <MagicEdenContext.Provider
      value={{
        connected,
        setConnected,
        deepLink,
        setDeepLink,
        dappKeyPair,
        sharedSecret,
        setSharedSecret,
        session,
        setSession,
        phantomWalletPublicKey,
        setPhantomWalletPublicKey,
        connect,
        disconnect,
      }}
    >
      {children}
    </MagicEdenContext.Provider>
  )
}
