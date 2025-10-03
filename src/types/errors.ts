/**
 * Custom error types for better error handling across the application
 */

export enum ErrorType {
  WALLET_CONNECTION = 'WALLET_CONNECTION',
  TRANSACTION_FAILED = 'TRANSACTION_FAILED',
  TRANSACTION_REJECTED = 'TRANSACTION_REJECTED',
  NETWORK_ERROR = 'NETWORK_ERROR',
  CONTRACT_ERROR = 'CONTRACT_ERROR',
  INSUFFICIENT_BALANCE = 'INSUFFICIENT_BALANCE',
  NOT_WHITELISTED = 'NOT_WHITELISTED',
  ALREADY_CLAIMED = 'ALREADY_CLAIMED',
  AIRDROP_EXPIRED = 'AIRDROP_EXPIRED',
  INVALID_PROOF = 'INVALID_PROOF',
  UNAUTHORIZED = 'UNAUTHORIZED',
  UNKNOWN = 'UNKNOWN',
}

export class AppError extends Error {
  type: ErrorType
  originalError?: Error
  userMessage: string

  constructor(
    type: ErrorType,
    userMessage: string,
    originalError?: Error
  ) {
    super(userMessage)
    this.type = type
    this.userMessage = userMessage
    this.originalError = originalError
    this.name = 'AppError'
  }
}

export const parseContractError = (error: any): AppError => {
  const errorMessage = error?.message?.toLowerCase() || ''

  // User rejected transaction
  if (
    errorMessage.includes('user rejected') ||
    errorMessage.includes('user denied') ||
    error?.code === 'ACTION_REJECTED'
  ) {
    return new AppError(
      ErrorType.TRANSACTION_REJECTED,
      'Transaction was rejected. Please try again.',
      error
    )
  }

  // Insufficient balance
  if (
    errorMessage.includes('insufficient') ||
    errorMessage.includes('balance')
  ) {
    return new AppError(
      ErrorType.INSUFFICIENT_BALANCE,
      'Insufficient balance to complete transaction.',
      error
    )
  }

  // Not whitelisted
  if (
    errorMessage.includes('not allowed') ||
    errorMessage.includes('not whitelisted')
  ) {
    return new AppError(
      ErrorType.NOT_WHITELISTED,
      'Your address is not whitelisted for this airdrop.',
      error
    )
  }

  // Already claimed
  if (errorMessage.includes('already claimed')) {
    return new AppError(
      ErrorType.ALREADY_CLAIMED,
      'You have already claimed this airdrop.',
      error
    )
  }

  // Expired
  if (errorMessage.includes('expired')) {
    return new AppError(
      ErrorType.AIRDROP_EXPIRED,
      'This airdrop has expired.',
      error
    )
  }

  // Invalid proof
  if (errorMessage.includes('invalid proof') || errorMessage.includes('merkle')) {
    return new AppError(
      ErrorType.INVALID_PROOF,
      'Invalid merkle proof. Please check your eligibility.',
      error
    )
  }

  // Network errors
  if (
    errorMessage.includes('network') ||
    errorMessage.includes('timeout') ||
    errorMessage.includes('connection')
  ) {
    return new AppError(
      ErrorType.NETWORK_ERROR,
      'Network error. Please check your connection and try again.',
      error
    )
  }

  // Contract errors
  if (errorMessage.includes('revert') || errorMessage.includes('execution')) {
    return new AppError(
      ErrorType.CONTRACT_ERROR,
      'Transaction failed. Please try again or contact support.',
      error
    )
  }

  // Default unknown error
  return new AppError(
    ErrorType.UNKNOWN,
    'An unexpected error occurred. Please try again.',
    error
  )
}
