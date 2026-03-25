import { AnimatePresence, motion } from "framer-motion";
import {
  Flag,
  HandHeart,
  Megaphone,
  MessageSquareHeart,
  Plus,
  ShieldCheck,
  UserCheck,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

const teamMembers = [
  { role: "Presidenta", name: "Zoe Montiel" },
  { role: "Vicepresidenta", name: "Juana Ortiz" },
  { role: "Tesorera", name: "Pilar Luffi" },
  { role: "Delegado de Deporte", name: "Alexis Garay" },
  { role: "Secretaría de Salud Mental", name: "Micaela Pavez" },
  { role: "Secretaría de Cultura", name: "Gael Videla" },
  { role: "Secretaría de Prensa y Difusión", name: "Eluney Gorrindo" },
];

const roleDetails: Record<
  string,
  { title: string; description: string; helper?: string }
> = {
  Presidenta: {
    title: "PRESIDENTA: ZOE MONTIEL",
    description:
      "Es quien lidera el centro de estudiantes: coordina al equipo, representa a los alumnos ante directivos y toma decisiones importantes.",
  },
  Vicepresidenta: {
    title: "VICEPRESIDENTA: JUANA ORTIZ",
    description:
      "Ayuda al presidente/a y lo reemplaza cuando no está. También colabora en la organización general.",
  },
  Tesorera: {
    title: "TESORERA: PILAR LUFFI",
    helper: "PIA RAMIREZ",
    description:
      "Su función es administrar el dinero, llevar un control de los ingresos y gastos, y asegurarse de que los recursos se usen de manera responsable y transparente en beneficio de todos los estudiantes.",
  },
  "Delegado de Deporte": {
    title: "DELEGADO DE DEPORTE: ALEXIS GARAY",
    helper: "GUADALUPE NAVARRO",
    description:
      "Se encarga de organizar actividades deportivas en la escuela: torneos, competencias, recreación en los recreos, promover que todos participen y fomentar el deporte como algo saludable.",
  },
  "Secretaría de Salud Mental": {
    title: "SECRETARIA DE SALUD MENTAL: MICAELA PAVEZ",
    helper: "JOSEFINA RAMIREZ",
    description:
      "Busca cuidar el bienestar de los estudiantes: propone espacios para hablar, campañas sobre estrés, bullying, ansiedad, y acompaña a quienes lo necesiten.",
  },
  "Secretaría de Cultura": {
    title: "SECRETARIA SOCIO CULTURAL: GAEL VIDELA",
    helper: "MICAELA BERON",
    description:
      "Organiza actividades culturales y sociales: eventos, ferias, celebraciones, música, arte, integración entre estudiantes.",
  },
  "Secretaría de Prensa y Difusión": {
    title: "SECRETARIA DE PRENSA Y DIFUSION: ELUNEY GORRINDO",
    helper: "FEDRA GUINAZU",
    description:
      "Es la que comunica todo: maneja redes sociales, hace carteles, informa sobre actividades, propuestas y eventos del centro de estudiantes.",
  },
};

const sectionClass =
  "max-w-[1100px] mx-auto rounded-2xl p-4 md:p-8 lg:p-9 bg-gray-50 border-2 border-[rgba(191,27,27,0.12)] animate-reveal";

const formatPersonName = (value: string) =>
  value
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

function App() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[number] | null
  >(null);
  const selectedDetail = selectedMember
    ? (roleDetails[selectedMember.role] ?? {
        title: `${selectedMember.role.toUpperCase()}: ${selectedMember.name.toUpperCase()}`,
        description:
          "Estamos preparando la información detallada de este puesto para compartirla pronto.",
      })
    : null;

  return (
    <>
      <main className="min-h-screen bg-white text-[#211515] px-4 py-12 md:px-8 space-y-6 md:space-y-4">
        {/* ── HERO ── */}
        <section className={sectionClass}>
          <div className="inline-flex items-center gap-1.5 bg-red-500 text-[#fff7f2] font-barlow font-bold text-[0.82rem] tracking-[0.06em] rounded-full px-3 py-1">
            <Flag size={24} aria-hidden="true" />
            <span>Agrupación Juvenil Escolar</span>
          </div>
          <h4 className="font-nunito font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-gray-500 mt-6 mb-4">
            Bienvenidos
          </h4>
          <h1 className="font-nunito italic font-bold text-[clamp(2.15rem,8vw,4.35rem)] text-red-500 mt-0 mb-2 inline-flex items-center gap-2.5 md:gap-4">
            <MessageSquareHeart
              className="w-[1.05em] h-[1.05em] shrink-0"
              aria-hidden="true"
            />
            <span>Somos Lista Roja</span>
          </h1>
          <p className="max-w-[60ch] font-barlow text-[clamp(1rem,2.2vw,1.2rem)] text-gray-600 font-semibold m-0 text-justify md:text-left">
            Estamos listos y preparados para representar ideas reales, escuchar
            cada voz y transformar nuestra escuela con propuestas concretas.
          </p>
        </section>

        {/* ── QUIÉNES SOMOS ── */}
        <section className={sectionClass} aria-labelledby="quienes-somos">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_minmax(280px,1fr)] gap-4 md:items-stretch">
            <div className="order-1 md:order-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-red-500 mb-8 md:mb-8 mt-2 md:mt-0">
                <Users size={36} aria-hidden="true" />
                <h2
                  id="quienes-somos"
                  className="font-nunito font-bold text-[clamp(1.6rem,4.3vw,2.35rem)] leading-none m-0"
                >
                  ¿Quiénes somos?
                </h2>
              </div>
              <p className="font-barlow text-[1.05rem] leading-relaxed md:text-2xl m-0 text-gray-600 font-semibold text-justify md:w-5/6">
                Somos alumnos de la escuela que creemos que todos tienen que ser
                escuchados. Nos postulamos porque queremos hacer un cambio de
                verdad, no solo promesas. Buscamos una escuela más unida, con
                más participación y mejores espacios para todos.
              </p>
            </div>
            <img
              className="order-2 md:order-2 w-full rounded-2xl bg-gradient-to-br from-[#ffd8d8] to-[#ffefef] min-h-[220px] object-cover"
              src="/funes-1.png"
              alt="Imagen del equipo Lista Roja"
            />
          </div>
        </section>

        {/* ── INTEGRANTES ── */}
        <section className={sectionClass} aria-labelledby="integrantes-lista">
          <div className="flex items-center gap-2 text-red-500 mb-8 md:mb-8 mt-2 md:mt-0">
            <Megaphone size={36} aria-hidden="true" />
            <h2
              id="integrantes-lista"
              className="font-nunito font-bold text-[clamp(1.6rem,4.3vw,2.35rem)] leading-none m-0"
            >
              Postulantes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {teamMembers.map((member) => (
              <article
                key={member.role}
                className="border border-red-500/25 border-l-[5px] border-l-red-500 rounded-xl bg-white p-3 flex items-center gap-2.5"
              >
                <ShieldCheck
                  size={18}
                  className="text-red-500 shrink-0"
                  aria-hidden="true"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-barlow uppercase tracking-[0.03em] text-[0.9rem] text-red-500 m-0">
                    {member.role}
                  </h3>
                  <p className="font-barlow font-semibold text-base m-0">
                    {member.name}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="ml-auto inline-flex items-center justify-center w-8 h-8 rounded-full border border-red-500 bg-red-500 text-white hover:bg-red-600 transition-colors shrink-0"
                  aria-label={`Ver mas sobre ${member.role}`}
                >
                  <Plus size={18} aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        </section>

        <div className="max-w-[1100px] mx-auto rounded-2xl border-2 border-red-500/20 bg-gradient-to-r from-red-500/10 via-white to-red-500/5 p-4 md:p-8 lg:p-9 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 animate-reveal">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-red-500 text-white shrink-0 mx-auto md:mx-0 md:order-last">
            <HandHeart size={24} className="md:hidden" aria-hidden="true" />
            <HandHeart
              size={36}
              className="hidden md:block"
              aria-hidden="true"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <p className="font-nunito font-bold text-[clamp(1.15rem,3vw,1.5rem)] text-red-500 m-0 leading-tight mb-3 md:mb-3">
              ¡Acompáñanos con tu voto!
            </p>
            <div className="md:hidden space-y-2">
              <p className="font-barlow text-[clamp(1rem,2.2vw,1.2rem)] text-gray-600 font-semibold m-0 text-center">
                Si vos también querés una escuela más unida, participativa y con
                propuestas reales, votá por{" "}
                <span className="font-bold text-red-500">Lista Roja</span>
              </p>
              <p className="font-barlow text-[clamp(1rem,2.2vw,1.2rem)] text-gray-600 font-semibold m-0 text-center">
                Gracias por acompañarnos y confiar en este proyecto.
              </p>
            </div>
            <div className="hidden md:block space-y-1">
              <p className="font-barlow text-[clamp(1rem,2.2vw,1.2rem)] text-gray-600 font-semibold m-0 text-justify md:text-left">
                Si vos también querés una escuela más unida, participativa y con
                propuestas reales, votá por{" "}
                <span className="font-bold text-red-500">Lista Roja</span>
              </p>
              <p className="font-barlow text-[clamp(1rem,2.2vw,1.2rem)] text-gray-600 font-semibold m-0 text-justify md:text-left">
                Gracias por acompañarnos y confiar en este proyecto.
              </p>
            </div>
          </div>
        </div>
      </main>

      {createPortal(
        <AnimatePresence>
          {selectedMember && selectedDetail && (
            <motion.div
              className="modal-overlay fixed inset-0 z-50 p-0 flex items-center justify-center overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="member-modal-title"
              onClick={() => setSelectedMember(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <motion.article
                className="w-full max-w-2xl rounded-2xl bg-white shadow-xl overflow-hidden mx-4 my-8"
                onClick={(event) => event.stopPropagation()}
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start justify-between gap-4 px-3.5 md:px-4 py-3 bg-gray-50">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-red-500/10 text-red-500 shrink-0">
                      <UserCheck size={22} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3
                        id="member-modal-title"
                        className="font-nunito font-bold text-[clamp(1.2rem,4vw,1.7rem)] text-red-500 leading-tight m-0"
                      >
                        {selectedMember.role}
                      </h3>
                      <p className="font-barlow font-semibold text-[1.1rem] md:text-[1.16rem] text-[#2d2020] leading-snug m-0 mt-1">
                        {selectedMember.name}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedMember(null)}
                    className="inline-flex items-center justify-center w-9 h-9 min-w-9 min-h-9 rounded-full border border-red-500 bg-red-500 text-white hover:bg-red-600 hover:border-red-600 transition-colors shrink-0"
                    aria-label="Cerrar detalle"
                  >
                    <X size={16} aria-hidden="true" />
                  </button>
                </div>

                <div className="px-3.5 md:px-4 pt-3 pb-3.5 md:pb-4">
                  {selectedDetail.helper && (
                    <p className="font-barlow font-semibold text-[0.98rem] m-0 mb-3 inline-flex items-center gap-1">
                      <UserRound
                        size={17}
                        className="text-red-500"
                        aria-hidden="true"
                      />
                      <span className="text-red-500">Ayudante:</span>
                      <span className="text-[#2d2020]">
                        {formatPersonName(selectedDetail.helper)}
                      </span>
                    </p>
                  )}

                  <p className="font-barlow text-[1.03rem] leading-relaxed text-[#2d2020] m-0">
                    {selectedDetail.description}
                  </p>
                </div>
              </motion.article>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}

export default App;
