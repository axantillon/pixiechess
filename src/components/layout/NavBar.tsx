import { FC } from 'react';
import ConnectWallet from '../misc/ConnectWallet';
import { Button } from '../ui/button';
import { FaXTwitter } from 'react-icons/fa6';

interface NavBarProps {
  
}

const NavBar: FC<NavBarProps> = ({  }) => {
    return (
        <div className={'w-screen h-20 px-4 py-2 flex justify-between items-center'}>
            <div className="flex space-x-2">
                {/* <Image src={Logo} alt='logo' width={100} height={100} /> */}

                <Button className='h-8 space-x-4'>
                    <span>Treasury</span>
                    <span>Ξ1274.24</span>
                </Button>
                <Button>
                    <FaXTwitter />
                </Button>
            </div>

            <div className="flex justify-end space-x-2">
                <Button className='px-6'>
                    <span> Play </span>
                </Button>
                <ConnectWallet />
            </div>
        </div>
    )
}

export default NavBar;