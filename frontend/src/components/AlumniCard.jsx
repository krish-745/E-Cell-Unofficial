export default function AlumniCard({ name, title, image, linkedinUrl, email}) {
    return (
      <div className="backdrop-blur-lg bg-black/40 border border-amber-500/30 text-white rounded-xl overflow-hidden shadow-lg p-6 hover:shadow-amber-500/20 hover:bg-black/50 transition duration-300 transform hover:-translate-y-2 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-amber-400/70">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">{name}</h3>
        <p className="text-md text-amber-100 opacity-90 mb-4 text-ellipsis line-clamp-2">
          {title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
        
        {/* Social Media Icons with higher contrast */}
        <div className="flex justify-center space-x-6 mt-4">
          {email && (
            <a href={email} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-orange-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l8 6 8-6V18H4z"/>
              </svg>
            </a>
          )}
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-orange-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24" className="drop-shadow-lg filter brightness-125">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    );
  }  