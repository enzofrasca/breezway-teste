// const POLLING_INTERVAL = 5000; // 5 seconds

export const Home = () => {
  // const { data, error, isLoading, refetch } = useQuery({
  //   queryKey: ["instance"],
  //   queryFn: connectInstance,
  //   refetchInterval: POLLING_INTERVAL,
  // });

  // const status = isLoading ? "connecting" : error ? "error" : "connected";

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <div className='container max-w-7xl mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            QR Code Display
          </h1>
          <p className='mt-4 text-lg text-gray-600'>
            Real-time QR code connection status and monitoring
          </p>
        </div>

        <div className='flex justify-center'>
          {/* <QRDisplay data={data} status={status} /> */}
          <div className='size-40 bg-zinc-600 border-4 border-green-500 rounded-md' />
        </div>
      </div>
    </div>
  )
}
