function TestApp() {
  return (
    <div className="min-h-screen bg-red-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-8">
          🐓 Big Pollo - Test Page
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Test Card 1
            </h2>
            <p className="text-gray-600">
              Si puedes ver este estilo, Tailwind está funcionando correctamente.
            </p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Test Button
            </button>
          </div>

          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
              Test Card 2
            </h2>
            <p className="text-yellow-700">
              Los colores amarillos y rojos deberían verse correctamente.
            </p>
            <button className="mt-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600">
              Yellow Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestApp