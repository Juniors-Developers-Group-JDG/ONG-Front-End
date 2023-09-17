export default function Toast({
  status,
  message,
}: {
  status: boolean
  message: string
}) {
  return (
    <div
      className={
        'fixed bottom-5 left-5 flex items-center gap-4 rounded-md p-5 pr-10 text-white ' +
        (status ? 'bg-green-500' : 'bg-red-500')
      }
    >
      {status ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
      <div>
        <h2 className="text-lg font-medium">{status ? 'Sucesso!' : 'Erro!'}</h2>
        <span>{message}</span>
      </div>
    </div>
  )
}
