"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useReadContract } from 'wagmi'
import { wagmiContractConfig } from './contract'


export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    data: count,
    isLoading,
  } = useReadContract({
    ...wagmiContractConfig,
    functionName: "getCount",
    args: [],
  });

  // const { data: hash, writeContract } = useWriteContract()

  // writeContract({
  //   ...wagmiContractConfig,
  //   functionName: 'mint',
  //   args: [],
  // })

  if (isLoading) return <div className='flex justify-center items-center h-screen'>
    <span className="loader "></span></div>

  console.log(count);
  return (
    <div className="min-h-screen bg-[#001419] text-white flex flex-col p-4 ">
      {/* Header */}
      <header className="flex justify-between items-center  mb-20 border border-[#24A0B5] py-3 px-3 rounded-2xl">
        <h1 className="text-md md:text-xl font-light tracking-wide">CHAINCOUNTER</h1>
        <ConnectButton  />
      </header>

      {/* Counter Display */}
      <div className="flex-1 flex items-center justify-center mb-20">
        <div className="border border-[#2A9D8F]/30 rounded-3xl w-[200px] h-[200px] flex items-center justify-center">
          <span className="text-8xl font-semibold">{count}</span>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto w-full">
        <button
          className="border border-[#2A9D8F]/30 text-white hover:bg-[#2A9D8F] hover:text-white transition-colors rounded-lg p-4 flex items-center justify-center"
        >
           Reset Count
        </button>  
        <button
          className="border border-[#2A9D8F] text-white hover:bg-[#2A9D8F] hover:text-white transition-colors rounded-lg p-4 flex items-center justify-center"
        >
          Increase Count
        </button>
        <button
          className="border border-[#2A9D8F]/30 text-white hover:bg-[#2A9D8F] hover:text-white transition-colors rounded-lg p-4 flex items-center justify-center"
        >
          Decrease Count
        </button>
        <button
          className="border border-[#2A9D8F]/30 text-white hover:bg-[#2A9D8F] hover:text-white transition-colors rounded-lg p-4 flex items-center justify-center"
        >
         Count
        </button>
      </div>
    </div>
  )
}
