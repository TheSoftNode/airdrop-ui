'use client'
import React, { useState } from 'react'
import MetamaskIcon from '../icons/MetamaskIcon'
import ConnectWalletDialog from '../dialog/ConnectWalletDialog'
import Button from '../common/Button'

type props = {
  title?: string
  width?: number
}

const ConnectWalletButton = ({ title = 'Connect wallet', width = 200 }: props) => {
  const [dialog, setDialog] = useState<boolean>(false)

  return (
    <>
      {dialog && (
        <ConnectWalletDialog
          closeDialog={() => setDialog(false)}
          open={dialog}
        />
      )}
      <Button
        variant='primary'
        outline
        onClick={() => setDialog(true)}
        width={width}
        className="min-w-0 text-xs sm:text-sm whitespace-nowrap"
      >
        <span className='flex justify-center items-center gap-1 sm:gap-2'>
          <MetamaskIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="truncate">{title}</span>
        </span>
      </Button>
    </>
  )
}

export default ConnectWalletButton
