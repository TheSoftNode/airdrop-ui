'use client'
import React, { useState } from 'react'
import Button from '../common/Button'
import RifIcon from '../icons/RifIcon'
import ConnectRNSDomainDialog from '../dialog/ConnectRNSDomainDialog'

type props = {
  title?: string
  width?: number
}

const ConnectRNSDomainButton = ({ title = 'Use RNS domain', width = 200 }: props) => {
  const [dialog, setDialog] = useState<boolean>(false)

  return (
    <>
      {dialog && (
        <ConnectRNSDomainDialog
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
          <RifIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="truncate">{title}</span>
        </span>
      </Button>
    </>
  )
}

export default ConnectRNSDomainButton