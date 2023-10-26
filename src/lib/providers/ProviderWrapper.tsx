'use client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {
  RainbowKitProvider,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { FC, ReactNode } from 'react';
import { WagmiConfig, configureChains, createConfig, mainnet } from 'wagmi';
import {
  goerli, optimism
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [goerli],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY_GOERLI! }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'PixieChess',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID!,
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const apollo = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
    cache: new InMemoryCache(),
});

interface ProviderWrapperProps {
    children: ReactNode
}

const ProviderWrapper: FC<ProviderWrapperProps> = ({ children }) => {
    return (
      <ApolloProvider client={apollo}>
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                  {children}
            </RainbowKitProvider>
        </WagmiConfig>
      </ApolloProvider>
    )
}

export default ProviderWrapper;