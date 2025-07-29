'use client'
import React from 'react'
import ConnectRNSDomainButton from './ConnectRNSDomainButton'
import ConnectWalletButton from './ConnectWalletButton'

type props = {
    className?: string
    connectWalletTitle?: string
    connectRNSTitle?: string
    width?: number
}

const Connect = ({ className, connectWalletTitle = 'Connect wallet', connectRNSTitle = "Use RNS domain", width = 200 }: props) => {
    return (
        <div className={className}>
            <ConnectWalletButton title={connectWalletTitle} width={width} />
            <ConnectRNSDomainButton title={connectRNSTitle} width={width} />
        </div>
    )
}

export default Connect
