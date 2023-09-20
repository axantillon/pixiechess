'use client'
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { FC } from 'react';
import { useAccount, useEnsName } from 'wagmi';
import { Button } from '../ui/button';

interface ConnectWalletProps {
  
}

const ConnectWallet: FC<ConnectWalletProps> = ({  }) => {
    
    const { address, isConnected } = useAccount();
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();

    const { data: ensName } = useEnsName({ address })
    
    return (
        <Button>
            {isConnected ? <>
                {openAccountModal &&
                    <div suppressHydrationWarning onClick={() => openAccountModal()} className="cursor-pointer">
                        {ensName || address}
                    </div>
                }
            </>:<>
                {openConnectModal &&
                    <div onClick={() => openConnectModal()} className="cursor-pointer">
                        Connect Wallet
                    </div>
                }
            </>}
        </Button>
    )
}

export default ConnectWallet;