'use client'
import {
    RainbowKitProvider,
    getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { FC, ReactNode } from 'react';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import {
    arbitrum,
    base,
    mainnet,
    optimism,
    polygon,
    zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY!! }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'PixieChess',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID!!,
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

interface ProviderWrapperProps {
    children: ReactNode
}

const ProviderWrapper: FC<ProviderWrapperProps> = ({ children }) => {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
}

export default ProviderWrapper;