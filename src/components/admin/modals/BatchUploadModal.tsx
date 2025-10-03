'use client'

import { useState } from 'react'
import { X, Upload, FileText, AlertCircle, CheckCircle2 } from 'lucide-react'
import useAirdrop from '@/hooks/useAirdrop'
import { toast } from '@/utils/toast'

interface BatchUploadModalProps {
  airdropAddress: string
  onClose: () => void
  onSuccess: () => void
}

export default function BatchUploadModal({ airdropAddress, onClose, onSuccess }: BatchUploadModalProps) {
  const [file, setFile] = useState<File | null>(null)
  const [addresses, setAddresses] = useState<string[]>([])
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const { allowedAddress } = useAirdrop()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    if (!selectedFile.name.endsWith('.csv')) {
      toast.error('Please upload a CSV file')
      return
    }

    setFile(selectedFile)

    // Read and parse CSV
    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      const lines = text.split('\n')
      const parsedAddresses = lines
        .map(line => line.trim())
        .filter(line => line.startsWith('0x'))

      setAddresses(parsedAddresses)
    }
    reader.readAsText(selectedFile)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (addresses.length === 0) return

    setProcessing(true)
    let successful = 0

    for (let i = 0; i < addresses.length; i++) {
      try {
        await allowedAddress(airdropAddress, addresses[i])
        successful++
        setProgress(Math.round(((i + 1) / addresses.length) * 100))
      } catch (error) {
        console.error(`Failed to whitelist ${addresses[i]}:`, error)
      }
    }

    setProcessing(false)
    toast.success(`Successfully whitelisted ${successful}/${addresses.length} addresses`)
    onSuccess()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <div>
            <h2 className="text-xl font-bold text-white">Batch Upload Addresses</h2>
            <p className="text-sm text-zinc-500 mt-1">Upload a CSV file with wallet addresses</p>
          </div>
          <button
            onClick={onClose}
            disabled={processing}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all disabled:opacity-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Instructions */}
          <div className="rounded-lg bg-custom-cyan/10 border border-custom-cyan/30 p-4">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-custom-cyan flex-shrink-0 mt-0.5" />
              <div className="text-sm text-zinc-300 space-y-2">
                <p className="font-medium">CSV Format:</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li>One address per line</li>
                  <li>Addresses must start with "0x"</li>
                  <li>No headers or column names needed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label
              htmlFor="csv-upload"
              className="block w-full p-8 border-2 border-dashed border-zinc-700 rounded-lg hover:border-custom-orange/50 transition-all cursor-pointer group"
            >
              <input
                id="csv-upload"
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="hidden"
                disabled={processing}
              />
              <div className="text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-zinc-600 group-hover:text-custom-orange transition-colors" />
                {file ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-custom-green">
                      <CheckCircle2 className="w-5 h-5" />
                      <p className="font-medium">{file.name}</p>
                    </div>
                    <p className="text-sm text-zinc-400">{addresses.length} addresses found</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-white font-medium">Click to upload CSV file</p>
                    <p className="text-sm text-zinc-500">or drag and drop</p>
                  </div>
                )}
              </div>
            </label>
          </div>

          {/* Preview */}
          {addresses.length > 0 && !processing && (
            <div className="rounded-lg bg-black border border-zinc-800 p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-zinc-400">Preview (first 5 addresses)</p>
                <span className="text-xs text-zinc-500">{addresses.length} total</span>
              </div>
              <div className="space-y-2 font-mono text-xs text-zinc-300">
                {addresses.slice(0, 5).map((addr, i) => (
                  <div key={i} className="p-2 rounded bg-zinc-900 border border-zinc-800">
                    {addr}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Progress */}
          {processing && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Processing...</span>
                <span className="text-white font-medium">{progress}%</span>
              </div>
              <div className="h-2 bg-black rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-custom-orange to-custom-pink rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={processing}
              className="flex-1 px-4 py-3 rounded-lg bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-all disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={addresses.length === 0 || processing}
              className="flex-1 px-4 py-3 rounded-lg bg-custom-orange text-black font-semibold hover:bg-custom-orange/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {processing ? `Processing...` : `Whitelist ${addresses.length} Addresses`}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
