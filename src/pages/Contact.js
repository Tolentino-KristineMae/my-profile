export default function Contact() {
    return (
      <div className="bg-gradient-to-br from-teal-100 to-white rounded-2xl shadow-2xl p-10 max-w-xl mx-auto mt-12 border border-teal-300">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-6 text-center">
          🚀 Let's Connect!
        </h2>
  
        <div className="space-y-6 text-lg text-gray-800">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📧</span>
            <span className="break-words">maemaemaetolentino@gmail.com</span>
          </div>
  
          <div className="flex items-start gap-3">
            <span className="text-2xl">📱</span>
            <span>0916 631 8231 / 0928 638 2716</span>
          </div>
  
          <div className="flex items-start gap-3">
            <span className="text-2xl">💻</span>
            <a
              href="https://github.com/Tolentino-KristineMae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 font-semibold hover:text-teal-900 transition duration-300 ease-in-out underline"
            >
              github.com/Tolentino-KristineMae
            </a>
          </div>
        </div>
  
        <div className="mt-8 text-center text-sm text-gray-500">
          Feel free to message me anytime — I don’t bite (except maybe bugs in code)!
        </div>
      </div>
    );
  }
  