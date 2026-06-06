import { useState } from 'react';
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Menu,
  Play,
  Search,
  Star,
  User,
  X,
} from 'lucide-react';

const videoUrl =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4';

const navLinks = ['Movies', 'TV Series', "Editor's Pick", 'Interviews', 'User Reviews'];

function animationDelay(delay: number) {
  return { animationDelay: `${delay}ms` };
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative h-screen min-h-screen overflow-hidden bg-black text-white">
      <video
        className="fixed inset-0 z-0 h-full w-full object-cover"
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="bottom-blur-overlay pointer-events-none fixed inset-0 z-[1]" />

      <nav className="relative z-50 flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 md:py-6">
        <a
          href="#"
          className="animate-blur-fade-up flex h-8 items-center text-sm font-semibold tracking-[0.16em] md:h-10 md:text-base"
          style={animationDelay(0)}
        >
          CINEMATIC
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              className="animate-blur-fade-up text-sm text-white transition-colors hover:text-gray-300"
              style={animationDelay(100 + index * 50)}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="liquid-glass animate-blur-fade-up hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-gray-300 sm:flex md:px-6"
            style={animationDelay(350)}
          >
            Search
            <Search size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="liquid-glass animate-blur-fade-up hidden h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-gray-300 sm:flex"
            aria-label="Profile"
            style={animationDelay(400)}
          >
            <User size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="liquid-glass animate-blur-fade-up relative flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            style={animationDelay(350)}
          >
            <Menu
              size={20}
              className={`absolute transition duration-500 ease-out ${
                isMenuOpen ? 'rotate-180 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
              aria-hidden="true"
            />
            <X
              size={20}
              className={`absolute transition duration-500 ease-out ${
                isMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-50 opacity-0'
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>

      <div
        className={`absolute inset-x-0 top-[72px] z-40 bg-gray-900/95 px-4 py-4 shadow-2xl backdrop-blur-lg transition duration-500 ease-out sm:px-6 lg:hidden ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        } border-y border-gray-800`}
      >
        <div className="mx-auto flex max-w-7xl flex-col">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              className={`rounded-lg px-3 py-3 text-sm transition duration-500 ease-out hover:bg-gray-800/50 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link}
            </a>
          ))}

          <div className="mt-3 flex gap-3 border-t border-gray-800 pt-4 sm:hidden">
            <button
              type="button"
              className="liquid-glass flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            >
              Search
              <Search size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="Profile"
            >
              <User size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <section className="relative z-10 flex h-[calc(100vh-72px)] flex-1 flex-col justify-end px-4 pb-8 sm:px-6 md:h-[calc(100vh-96px)] md:px-12 md:pb-16">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end">
          <div className="flex-1">
            <div
              className="animate-blur-fade-up mb-6 flex flex-wrap items-center gap-3 text-xs sm:gap-6 sm:text-sm md:mb-8"
              style={animationDelay(300)}
            >
              <span className="flex items-center gap-2 font-medium">
                <Star size={16} className="fill-white sm:h-5 sm:w-5" aria-hidden="true" />
                8.7/10 IMDB
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="sm:h-5 sm:w-5" aria-hidden="true" />
                132 min
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="sm:h-5 sm:w-5" aria-hidden="true" />
                April, 2025
              </span>
            </div>

            <h1
              className="animate-blur-fade-up mb-4 text-3xl font-normal leading-[0.95] sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl"
              style={{ ...animationDelay(400), letterSpacing: '-0.04em' }}
            >
              Step Through. Work Smarter.
            </h1>

            <p
              className="animate-blur-fade-up mb-6 max-w-2xl text-base text-gray-400 sm:text-lg md:mb-12 md:text-xl"
              style={animationDelay(500)}
            >
              A voyage through forgotten realms, where past and future intertwine.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button
                type="button"
                className="animate-blur-fade-up flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-200 sm:px-8 sm:py-3"
                style={animationDelay(600)}
              >
                <Play size={18} className="fill-black" aria-hidden="true" />
                Watch Now
              </button>

              <button
                type="button"
                className="liquid-glass animate-blur-fade-up rounded-full px-6 py-2.5 text-sm font-medium transition-colors hover:text-gray-300 sm:px-8 sm:py-3"
                style={animationDelay(700)}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="flex gap-3 md:w-auto md:justify-end">
            <button
              type="button"
              className="liquid-glass animate-blur-fade-up flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors hover:text-gray-300 sm:px-6 sm:py-3"
              style={animationDelay(800)}
            >
              <ChevronLeft size={18} aria-hidden="true" />
              Previous
            </button>

            <button
              type="button"
              className="liquid-glass animate-blur-fade-up flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors hover:text-gray-300 sm:px-6 sm:py-3"
              style={animationDelay(900)}
            >
              Next
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
