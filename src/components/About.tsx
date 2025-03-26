
import { useState, useEffect } from 'react';
import { Code, User, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-hacker-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNjAgMTAgTSAxMCAwIEwgMTAgNjAgTSAwIDMwIEwgNjAgMzAgTSAzMCAwIEwgMzAgNjAgTSAwIDUwIEwgNjAgNTAgTSA1MCAwIEwgNTAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmMmQ1NSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card p-2 border-hacker-red/20 rounded-md overflow-hidden">
              <div className="w-full aspect-square bg-black relative overflow-hidden rounded-sm">
                {/* Terminal-like interface with blinking cursor */}
                <div className="absolute inset-0 p-5 font-code text-sm text-gray-300 overflow-hidden">
                  <div className="flex gap-2 mb-4">
                    <span className="w-3 h-3 bg-hacker-red rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                  <div className="space-y-3">
                    <p><span className="text-hacker-red">$</span> whoami</p>
                    <p>SyhrlmyZID</p>
                    <p><span className="text-hacker-red">$</span> cat profile.json</p>
                    <div className="text-gray-400">
                      {`{`}
                      <br />
                      &nbsp;&nbsp;{`"nama": "Syahrul M.Y",`}
                      <br />
                      &nbsp;&nbsp;{`"alias": "SyhrlmyZID",`}
                      <br />
                      &nbsp;&nbsp;{`"keahlian": "Prompt Engineer & Front End Developer",`}
                      <br />
                      &nbsp;&nbsp;{`"status": "Pelajar",`}
                      <br />
                      &nbsp;&nbsp;{`"umur": 18`}
                      <br />
                      {`}`}
                    </div>
                    <p><span className="text-hacker-red">$</span> <span className="code-typing">_</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`md:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-hacker-red font-cyber">&gt;</span> Tentang Saya
            </h2>
            <div className="w-20 h-1 bg-hacker-red mb-6"></div>

            <p className="text-gray-300 mb-8 leading-relaxed font-code">
              Hai! Saya Syahrul, seorang Front End Developer dan Prompt Engineer berusia 18 tahun. Saat ini, saya sedang menempuh pendidikan di SMK Al-Madani jurusan Rekayasa Perangkat Lunak. Selain membuat website saya juga suka dalam mempelajari teknologi baru seperti software.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-hacker-red" />
                <div>
                  <p className="text-sm text-gray-400">Nama Lengkap</p>
                  <p className="font-medium">Syahrul Muhamad Yusuf</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-hacker-red" />
                <div>
                  <p className="text-sm text-gray-400">Umur</p>
                  <p className="font-medium">18 Tahun</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-hacker-red" />
                <div>
                  <p className="text-sm text-gray-400">Keahlian</p>
                  <p className="font-medium">Prompt Engineer, Front-End</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-hacker-red" />
                <div>
                  <p className="text-sm text-gray-400">Sekolah</p>
                  <p className="font-medium">SMK Al-Madani Garut</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
