import React, { FC } from 'react'

interface ExplainerProps {
  
}

const Explainer: FC<ExplainerProps> = ({  }) => {
    return (
        <div className={'flex px-24'}>

            <div className="flex flex-col space-y-12 w-1/2">
                <div className="flex flex-col space-y-2 text-6xl font-extrabold">
                    <h2> One Chess Piece,</h2>
                    <h2> Every day. </h2>
                </div>
                <div className="flex flex-col space-y-2 font-bold">
                    <ol className='list-decimal text-xl'>
                        <li>
                            <h4>Every day we will auction off 5 chess pieces with special super powers.</h4>
                        </li>
                        <li>
                            <h4>Assemble your board and get ready to compete against others.</h4>
                        </li>
                        <li>
                            <h4>Have a shot at winning a portion of the treasury in alternate chess tournaments.</h4>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="flex items-center justify-center w-1/2">
                <video className='w-3/4 aspect-video bg-black' src=""></video>
            </div>
        </div>
    )
}

export default Explainer;