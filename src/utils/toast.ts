import { toast as sonnerToast } from 'sonner'
import { AppError, ErrorType } from '@/types/errors'

/**
 * Toast notification utilities with consistent styling
 */

export const toast = {
  success: (message: string, description?: string) => {
    sonnerToast.success(message, {
      description,
      duration: 4000,
    })
  },

  error: (message: string, description?: string) => {
    sonnerToast.error(message, {
      description,
      duration: 5000,
    })
  },

  warning: (message: string, description?: string) => {
    sonnerToast.warning(message, {
      description,
      duration: 4000,
    })
  },

  info: (message: string, description?: string) => {
    sonnerToast.info(message, {
      description,
      duration: 3000,
    })
  },

  loading: (message: string) => {
    return sonnerToast.loading(message)
  },

  promise: <T,>(
    promise: Promise<T>,
    messages: {
      loading: string
      success: string | ((data: T) => string)
      error: string | ((error: any) => string)
    }
  ) => {
    return sonnerToast.promise(promise, messages)
  },

  // Helper to handle AppError
  handleError: (error: AppError | Error) => {
    if (error instanceof AppError) {
      const icon = getErrorIcon(error.type)
      sonnerToast.error(error.userMessage, {
        description: error.type !== ErrorType.UNKNOWN ? `Error: ${error.type}` : undefined,
        duration: 5000,
      })
    } else {
      sonnerToast.error('An unexpected error occurred', {
        description: error.message,
        duration: 5000,
      })
    }
  },
}

const getErrorIcon = (errorType: ErrorType): string => {
  switch (errorType) {
    case ErrorType.WALLET_CONNECTION:
      return '🔌'
    case ErrorType.TRANSACTION_REJECTED:
      return '🚫'
    case ErrorType.NETWORK_ERROR:
      return '🌐'
    case ErrorType.INSUFFICIENT_BALANCE:
      return '💰'
    case ErrorType.NOT_WHITELISTED:
      return '🔒'
    case ErrorType.ALREADY_CLAIMED:
      return '✅'
    case ErrorType.AIRDROP_EXPIRED:
      return '⏰'
    default:
      return '⚠️'
  }
}

// Transaction-specific toasts
export const transactionToasts = {
  waitingForWallet: () => toast.loading('Waiting for wallet confirmation...'),

  waitingForTx: (txHash?: string) => {
    const description = txHash
      ? `Transaction: ${txHash.slice(0, 6)}...${txHash.slice(-4)}`
      : 'Please wait...'
    return toast.loading('Transaction pending', description)
  },

  txSuccess: (message: string, txHash?: string) => {
    const description = txHash
      ? `View transaction: ${txHash.slice(0, 6)}...${txHash.slice(-4)}`
      : undefined
    toast.success(message, description)
  },

  txError: (error: any) => {
    if (error.code === 'ACTION_REJECTED') {
      toast.warning('Transaction rejected', 'You rejected the transaction')
    } else {
      toast.error('Transaction failed', error.message?.slice(0, 100))
    }
  },
}
