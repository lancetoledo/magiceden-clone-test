import { createSlice } from '@reduxjs/toolkit'

export const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        collectionID: 1,
        nftID: 0,
        currentCollection: {},
        currentNFT: {},
        collections: [
            {
                id: 1,
                name: 'Just Ape.',
                creator: 'Just Ape.',
                image: require('../../assets/just-ape.gif'),
                description: 'Just ape. A collection of 10,000 Apes that take us back to basics. None of the fluff, all of the value.',
                nfts: [
                    {
                        id: 2307,
                        image: require('../../assets/ape-2307.png'),
                        name: 'Ape #2307',
                        price: '20',
                    },
                    {
                        id: 4789,
                        image: require('../../assets/ape-4789.png'),
                        name: 'Ape #4789',
                        price: '29.8',
                    },
                    {
                        id: 6083,
                        image: require('../../assets/ape-6083.png'),
                        name: 'Ape #6083',
                        price: '19',
                    },
                    {
                        id: 9507,
                        image: require('../../assets/ape-9507.png'),
                        name: 'Ape #9507',
                        price: '50',
                    },
                ],
            },
            {
                id: 2,
                name: 'Okay Bears',
                creator: 'Okay Bears',
                image: require('../../assets/okay-bears.png'),
                description: 'Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.',
                nfts: [
                    {
                        id: 9885,
                        image: require('../../assets/okay-bear-9885.png'),
                        name: 'Okay Bear #9429',
                        price: '50,000',
                    },
                    {
                        id: 4964,
                        image: require('../../assets/okay-bear-4964.png'),
                        name: 'Okay Bear #1362',
                        price: '22,222',
                    },
                    {
                        id: 3233,
                        image: require('../../assets/okay-bear-3233.png'),
                        name: 'Okay Bear #99',
                        price: '20,000',
                    },
                    {
                        id: 3045,
                        image: require('../../assets/okay-bear-3045.png'),
                        name: 'Okay Bear #6434',
                        price: '15,000',
                    },
                ],
            },
            {
                id: 3,
                name: 'Vandal City',
                creator: 'Vandal City',
                image: require('../../assets/vandal-city.png'),
                description: 'A collection of 10,000 Bandits, Outcasts, & Misfits of the Metaverse. Vandal City is the epicenter of Web3 innovation, fostering top tier utilities and art.',
                nfts: [
                    {
                        id: 9429,
                        image: require('../../assets/vandal-9429.png'),
                        name: 'Vandal #9429',
                        price: '3.89',
                    },
                    {
                        id: 1362,
                        image: require('../../assets/vandal-1362.png'),
                        name: 'Vandal #1362',
                        price: '3.7',
                    },
                    {
                        id: 99,
                        image: require('../../assets/vandal-99.png'),
                        name: 'Vandal #99',
                        price: '5.75',
                    },
                    {
                        id: 6434,
                        image: require('../../assets/vandal-6434.png'),
                        name: 'Vandal #6434',
                        price: '10.99',
                    },
                ],
            },
        ],
    },
    reducers: {
        getCollection: (state) => {
            state.currentCollection = state.collections.find((collection) => collection.id === state.collectionID)
        },
        getNFT: (state) => {
            state.currentNFT = state.currentCollection.nfts.find((nft) => nft.id === state.nftID)
        },
        updateCollectionID: (state, action) => {
            state.collectionID = action.payload.id
        },
        updateNFTID: (state, action) => {
            state.nftID = action.payload.id
        },
    },
})

export const { updateCollectionID, getCollection, updateNFTID, getNFT } = collectionSlice.actions

export default collectionSlice.reducer
