import { Flag, Megaphone, ShieldCheck, Users } from "lucide-react";
import "./App.css";

const teamMembers = [
  { role: "Presidenta", name: "Zoe Montiel" },
  { role: "Vicepresidenta", name: "Juana Ortiz" },
  { role: "Secretaria", name: "Josefina Ramirez" },
  { role: "Tesorera", name: "Pilar Luffi" },
  { role: "Delegado de Deporte", name: "Alexis Garay" },
  { role: "Secretaria de Salud Mental", name: "Micaela Pavez" },
  { role: "Secretaria de Cultura", name: "Gael Videla" },
  { role: "Secretaria de Prensa y Difusion", name: "Eluney Gorrindo" },
];

const sectionClass =
  "max-w-[1100px] mx-auto rounded-2xl p-6 md:p-8 lg:p-9 bg-gray-50 border-2 border-[rgba(191,27,27,0.12)] animate-reveal";

function App() {
  return (
    <main className="min-h-screen bg-white text-[#211515] px-4 py-12 md:px-8 space-y-4">
      {/* ── HERO ── */}
      <section className={sectionClass}>
        <div className="inline-flex items-center gap-1.5 bg-[#8a1010] text-[#fff7f2] font-barlow font-bold text-[0.82rem] tracking-[0.06em] rounded-full px-3 py-1">
          <Flag size={18} aria-hidden="true" />
          <span>Agrupacion Juvenil Escolar</span>
        </div>
        <h4 className="font-nunito font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-red-500 mt-6 mb-0">
          Bienvenidos
        </h4>
        <h1 className="font-nunito font-bold text-[clamp(2.4rem,9vw,5rem)] leading-none text-red-500 mt-0 mb-2">
          Somos Lista Roja
        </h1>
        <p className="max-w-[60ch] font-barlow text-[clamp(1rem,2.2vw,1.2rem)] m-0">
          Estamos listos para representar ideas reales, escuchar cada voz y
          transformar la escuela con propuestas concretas.
        </p>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section className={sectionClass} aria-labelledby="quienes-somos">
        <div className="flex items-center gap-2 text-red-500 mb-4">
          <Users size={36} aria-hidden="true" />
          <h2
            id="quienes-somos"
            className="font-nunito font-bold text-[clamp(1.8rem,5vw,2.7rem)] leading-none m-0"
          >
            Quienes Somos
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,1fr)_1.2fr] gap-4 md:gap-6 md:items-stretch">
          <img
            className="w-full rounded-2xl border-2 border-[rgba(191,27,27,0.24)] bg-gradient-to-br from-[#ffd8d8] to-[#ffefef] min-h-[220px] object-cover"
            src="/funes-1.png"
            alt="Imagen del equipo Lista Roja"
          />
          <p className="font-barlow text-[1.05rem] leading-relaxed m-0 self-center">
            Somos alumnos de la escuela que creemos que todos tienen que ser
            escuchados. Nos postulamos porque queremos hacer un cambio de
            verdad, no solo promesas. Buscamos una escuela mas unida, con mas
            participacion y mejores espacios para todos.
          </p>
        </div>
      </section>

      {/* ── INTEGRANTES ── */}
      <section className={sectionClass} aria-labelledby="integrantes-lista">
        <div className="flex items-center gap-2 text-red-500 mb-4">
          <Megaphone size={36} aria-hidden="true" />
          <h2
            id="integrantes-lista"
            className="font-nunito font-bold text-[clamp(1.8rem,5vw,2.7rem)] leading-none m-0"
          >
            Postulantes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {teamMembers.map((member) => (
            <article
              key={member.role}
              className="border border-[rgba(95,3,3,0.14)] border-l-[5px] border-l-[#bf1b1b] rounded-xl bg-white p-3 grid grid-cols-[auto_1fr] gap-x-2.5 gap-y-1 items-center"
            >
              <ShieldCheck
                size={18}
                className="text-[#bf1b1b] row-span-2"
                aria-hidden="true"
              />
              <h3 className="font-barlow uppercase tracking-[0.03em] text-[0.9rem] text-[#3f0000] m-0">
                {member.role}
              </h3>
              <p className="font-barlow font-semibold text-base m-0">
                {member.name}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
