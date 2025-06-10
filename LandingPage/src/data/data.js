import { Biconomy, BingX, Bitget, BitMart, CoffeeLabubu, CoinW, Gateio, LBank, MEXC, Phantom, Radiyum, Raydium, Solana, Weex } from "../utils";

export const exchanges = [
    { id: 1, name: 'Bitget', img: Bitget },
    { id: 2, name: 'BingX', img: BingX },
    { id: 3, name: 'Gate.io', img: Gateio },
    { id: 4, name: 'BitMart', img: BitMart },
    { id: 5, name: 'LBANK', img: LBank },
    { id: 6, name: 'Weex', img: Weex },
    { id: 7, name: 'Biconomy', img: Biconomy },
    { id: 8, name: 'Raydium', img: Raydium },
    { id: 9, name: 'MEXC Global', img: MEXC },
    { id: 10, name: 'CoinW', img: CoinW }
];

export const steps = [
    {
        id: 1,
        title: 'STEP 1',
        description: 'Download Phantom',
        icon: Phantom
    },
    {
        id: 2,
        title: 'STEP 2',
        description: 'Buy Or Transfer $SOL',
        icon: Solana
    },
    {
        id: 3,
        title: 'STEP 3',
        description: 'Go To Raydium.io / Swap And Search $LABUBU',
        icon: Radiyum
    },
    {
        id: 4,
        title: 'STEP 4',
        description: 'Congrats New $LABUBU HOLDER!',
        icon: CoffeeLabubu
    }
];
