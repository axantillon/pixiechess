'use client'
import { FC } from 'react';
import { Button } from '../ui/button';
import { useBalance } from 'wagmi';

interface TreasuryProps {
  
}

const Treasury: FC<TreasuryProps> = ({  }) => {

    const { data, isError, isLoading } = useBalance({
        address: '0xFAd1409A254EF18bB7f7078153cD7680d5EDbCC4',
    })

    if (isLoading || isError) return <></>

    return (
        <Button className='h-8 space-x-4'>
            <span>Treasury</span>
            <span>Ξ {data?.formatted}</span>
        </Button>
    )
}

export default Treasury;