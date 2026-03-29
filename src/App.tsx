import { motion } from "motion/react";
import { MessageCircle, Phone, MapPin, Clock, CheckCircle2, ArrowRight, Star, User, ShieldCheck, HeartPulse, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "+212662825890";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <HeartPulse size={24} />
            </div>
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-blue-900">Cabinet Dr Lahlou</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#philosophie" className="hover:text-blue-600 transition-colors">Notre Philosophie</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Votre Expérience</a>
            <a href="#soins" className="hover:text-blue-600 transition-colors">Soins</a>
            <a href="#cabinet" className="hover:text-blue-600 transition-colors">Le Cabinet</a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="no-referrer"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Prendre RDV
            </a>
          </div>

          <button className="md:hidden text-slate-900 z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-2xl font-serif">
            <a href="#philosophie" onClick={() => setIsMenuOpen(false)}>Notre Philosophie</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Votre Expérience</a>
            <a href="#soins" onClick={() => setIsMenuOpen(false)}>Soins</a>
            <a href="#cabinet" onClick={() => setIsMenuOpen(false)}>Le Cabinet</a>
            <a href={WHATSAPP_LINK} className="text-blue-600">Prendre RDV</a>
          </div>
        </motion.div>
      )}

      {/* 1. SECTION IMMERSION */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Cabinet dentaire moderne et lumineux" 
            className="w-full h-full object-cover brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="bg-white/40 backdrop-blur-md p-8 md:p-16 rounded-[40px] border border-white/40 shadow-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif text-blue-950 leading-[1.1] mb-6 md:mb-10 tracking-tight">
              Bienvenue dans un espace dédié à votre sourire
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.2 }}
            >
              <a 
                href="#rdv" 
                className="inline-flex items-center gap-3 text-base md:text-lg font-medium text-blue-900 border-b border-blue-900/30 pb-1 hover:border-blue-900 hover:gap-5 transition-all"
              >
                Découvrir l'expérience <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-blue-900 opacity-50">
          <div className="w-px h-12 bg-blue-900"></div>
        </div>
      </section>

      {/* 2. SECTION PHILOSOPHIE */}
      <section id="philosophie" className="py-12 md:py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-medium tracking-widest uppercase text-[10px] md:text-xs mb-3 md:mb-4 block">Notre Philosophie</span>
            <h2 className="text-3xl md:text-5xl font-serif text-blue-950 mb-6 md:mb-8 leading-tight">
              Une approche humaine, douce et à votre écoute.
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
              Nous croyons que chaque patient mérite une attention particulière. Au-delà des soins techniques, nous privilégions le confort, l'écoute et l'hygiène absolue pour transformer votre visite en une expérience sereine.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-blue-600 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-blue-950 text-sm md:text-base">Hygiène Stricte</h4>
                  <p className="text-xs md:text-sm text-slate-500">Protocoles de stérilisation avancés.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HeartPulse className="text-blue-600 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-blue-950 text-sm md:text-base">Sans Douleur</h4>
                  <p className="text-xs md:text-sm text-slate-500">Technologies douces pour votre confort.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
              alt="Dentiste à l'écoute" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs">
              <p className="italic text-blue-900 font-serif text-lg">
                "Votre bien-être est notre priorité absolue. Nous prenons le temps nécessaire pour chaque sourire."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SECTION EXPÉRIENCE PATIENT */}
      <section id="experience" className="py-12 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10 md:mb-20">
          <span className="text-blue-600 font-medium tracking-widest uppercase text-[10px] md:text-xs mb-3 md:mb-4 block">Votre Parcours</span>
          <h2 className="text-3xl md:text-5xl font-serif text-blue-950 leading-tight">Une expérience pensée pour votre sérénité</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {[
            { step: "01", title: "Prise de RDV", desc: "Simple et rapide via WhatsApp ou en ligne." },
            { step: "02", title: "Accueil", desc: "Un espace chaleureux pour vous détendre." },
            { step: "03", title: "Consultation", desc: "Échange transparent et soins personnalisés." },
            { step: "04", title: "Suivi", desc: "Nous restons à vos côtés après les soins." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group"
            >
              <span className="text-6xl font-serif text-blue-100 group-hover:text-blue-200 transition-colors absolute top-4 right-6 z-0">{item.step}</span>
              <div className="relative z-10">
                <h3 className="text-xl font-serif text-blue-950 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SECTION SOINS */}
      <section id="soins" className="py-12 md:py-24 px-6 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-400 font-medium tracking-widest uppercase text-[10px] md:text-xs mb-3 md:mb-4 block">Nos Services</span>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">Des soins d'excellence pour toute la famille</h2>
          </div>
          <a href={WHATSAPP_LINK} className="text-blue-400 hover:text-white transition-colors flex items-center gap-2 group text-xs md:text-base">
            Voir tous les soins <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "Soins Dentaires", desc: "Prévention, caries et détartrage pour une santé durable.", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=500" },
            { title: "Blanchiment", desc: "Retrouvez l'éclat de votre sourire en une séance douce.", img: "https://images.unsplash.com/photo-1593054991678-3a15c8976aa0?auto=format&fit=crop&q=80&w=500" },
            { title: "Orthodontie", desc: "Alignement parfait pour enfants et adultes.", img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=500" },
            { title: "Implants", desc: "Solutions durables et esthétiques pour remplacer vos dents.", img: "https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?auto=format&fit=crop&q=80&w=500" }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. SECTION AVANT / APRÈS */}
      <section className="py-12 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-4">
              <div className="space-y-4 md:space-y-4">
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=500" alt="Avant" className="w-full h-48 md:h-64 object-cover" referrerPolicy="no-referrer" />
                  <div className="bg-slate-100 py-2 text-center text-[10px] md:text-xs font-medium uppercase tracking-widest text-slate-500">Avant</div>
                </div>
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=500" alt="Après" className="w-full h-48 md:h-64 object-cover" referrerPolicy="no-referrer" />
                  <div className="bg-blue-600 py-2 text-center text-[10px] md:text-xs font-medium uppercase tracking-widest text-white">Après</div>
                </div>
              </div>
              <div className="sm:pt-12 space-y-4 md:space-y-4">
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1571772996211-2f02c97da19d?auto=format&fit=crop&q=80&w=500" alt="Avant" className="w-full h-48 md:h-64 object-cover" referrerPolicy="no-referrer" />
                  <div className="bg-slate-100 py-2 text-center text-[10px] md:text-xs font-medium uppercase tracking-widest text-slate-500">Avant</div>
                </div>
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&q=80&w=500" alt="Après" className="w-full h-48 md:h-64 object-cover" referrerPolicy="no-referrer" />
                  <div className="bg-blue-600 py-2 text-center text-[10px] md:text-xs font-medium uppercase tracking-widest text-white">Après</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-blue-600 font-medium tracking-widest uppercase text-xs mb-4 block">Résultats Réels</span>
            <h2 className="text-3xl md:text-5xl font-serif text-blue-950 mb-6 md:mb-8 leading-tight">
              Redécouvrez le plaisir de sourire sans complexe.
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
              Chaque transformation est le fruit d'une expertise minutieuse et d'une écoute attentive de vos besoins esthétiques. Nous ne changeons pas seulement vos dents, nous restaurons votre confiance.
            </p>
            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
              {["Harmonie naturelle", "Blancheur éclatante", "Alignement parfait"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-blue-900 font-medium text-sm md:text-base">
                  <CheckCircle2 size={18} className="text-blue-600" /> {item}
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} className="w-full md:w-auto text-center bg-blue-600 text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 inline-block">
              Discuter de mon projet
            </a>
          </div>
        </div>
      </section>

      {/* 6. SECTION LE DENTISTE */}
      <section className="py-16 px-6 md:section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1613927190316-9748b67b65b2?auto=format&fit=crop&q=80&w=1000" 
              alt="Dr. Lahlou" 
              className="rounded-2xl md:rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div>
            <span className="text-blue-600 font-medium tracking-widest uppercase text-xs mb-4 block">Votre Praticien</span>
            <h2 className="text-3xl md:text-5xl font-serif text-blue-950 mb-4 md:mb-6">Dr. Lahlou</h2>
            <p className="text-blue-600 font-medium mb-6 md:mb-8 text-sm md:text-base">Spécialiste en Esthétique Dentaire & Implantologie</p>
            <div className="space-y-4 md:space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                Diplômé des plus grandes facultés, le Dr. Lahlou a dédié sa carrière à l'excellence clinique et au confort patient. Son approche combine les dernières technologies numériques avec une vision artistique du sourire.
              </p>
              <p>
                "Ma mission est de vous offrir des soins de haute qualité dans un environnement apaisant. Je crois fermement qu'une bonne santé dentaire commence par une relation de confiance entre le patient et son dentiste."
              </p>
            </div>
            <div className="mt-8 md:mt-10 flex gap-3 md:gap-4">
              <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-100 flex-1 md:flex-none">
                <span className="block text-xl md:text-2xl font-serif text-blue-900">15+</span>
                <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">Expérience</span>
              </div>
              <div className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-100 flex-1 md:flex-none">
                <span className="block text-xl md:text-2xl font-serif text-blue-900">5k+</span>
                <span className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">Sourires</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION CABINET */}
      <section id="cabinet" className="py-16 px-6 md:section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
          <span className="text-blue-600 font-medium tracking-widest uppercase text-xs mb-4 block">Immersion</span>
          <h2 className="text-3xl md:text-5xl font-serif text-blue-950 leading-tight">Un plateau technique de pointe</h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="sm:col-span-2 sm:row-span-2 rounded-2xl md:rounded-3xl overflow-hidden group h-64 sm:h-auto">
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" alt="Cabinet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-2xl md:rounded-3xl overflow-hidden group h-48 md:h-auto">
            <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=500" alt="Équipement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-2xl md:rounded-3xl overflow-hidden group h-48 md:h-auto">
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=500" alt="Salle d'attente" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="sm:col-span-2 rounded-2xl md:rounded-3xl overflow-hidden group h-48 md:h-64">
            <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000" alt="Hygiène" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* 8. SECTION AVIS PATIENTS */}
      <section className="py-16 px-6 md:section-padding bg-blue-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-blue-600 font-medium tracking-widest uppercase text-xs mb-4 block">Témoignages</span>
            <h2 className="text-3xl md:text-5xl font-serif text-blue-950 leading-tight">Ce que nos patients disent de nous</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Yassine B.", text: "J'avais une peur bleue du dentiste. Ici, j'ai été rassuré dès l'accueil. Les soins sont d'une douceur incroyable.", rating: 5 },
              { name: "Laila M.", text: "Le résultat de mon blanchiment est bluffant. Très professionnel et le cabinet est d'une propreté irréprochable.", rating: 5 },
              { name: "Karim T.", text: "Une équipe à l'écoute et des technologies modernes. On sent qu'on est entre de bonnes mains. Je recommande vivement.", rating: 5 }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4 md:mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} className="fill-blue-600 text-blue-600" />)}
                </div>
                <p className="text-slate-600 italic mb-6 md:mb-8 leading-relaxed text-sm md:text-base">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm md:text-base">
                    {review.name[0]}
                  </div>
                  <span className="font-medium text-blue-950 text-sm md:text-base">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION PRISE DE RDV */}
      <section id="rdv" className="py-16 px-6 md:section-padding bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="text-blue-600 font-medium tracking-widest uppercase text-xs mb-4 block">Contact</span>
            <h2 className="text-3xl md:text-5xl font-serif text-blue-950 mb-6 md:mb-8 leading-tight">Prêt à transformer votre sourire ?</h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10">
              Prenez rendez-vous dès aujourd'hui pour une consultation personnalisée. Notre équipe vous répondra dans les plus brefs délais.
            </p>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Téléphone</span>
                  <span className="text-base md:text-lg font-medium text-blue-950">+212 5 22 00 00 00</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase tracking-wider">WhatsApp</span>
                  <span className="text-base md:text-lg font-medium text-blue-950">{WHATSAPP_NUMBER}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Adresse</span>
                  <span className="text-base md:text-lg font-medium text-blue-950">123 Boulevard d'Anfa, Casablanca</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-slate-100">
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nom Complet</label>
                  <input type="text" className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Téléphone</label>
                  <input type="tel" className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm" placeholder="Votre numéro" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Type de Soin</label>
                <select className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white text-sm">
                  <option>Consultation Générale</option>
                  <option>Blanchiment</option>
                  <option>Orthodontie</option>
                  <option>Implants</option>
                  <option>Urgence</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message (Optionnel)</label>
                <textarea className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all h-24 md:h-32 text-sm" placeholder="Dites-nous en plus..."></textarea>
              </div>
              <button className="w-full bg-blue-950 text-white py-3.5 md:py-4 rounded-xl font-medium hover:bg-blue-900 transition-all shadow-lg text-sm md:text-base">
                Envoyer ma demande
              </button>
              <div className="text-center">
                <span className="text-slate-400 text-xs md:text-sm">Ou préférez-vous</span>
                <a href={WHATSAPP_LINK} className="block mt-2 text-green-600 font-medium flex items-center justify-center gap-2 text-sm md:text-base">
                  <MessageCircle size={18} /> Prendre RDV via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 10. FOOTER MÉDICAL */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 md:mb-8 text-white">
              <HeartPulse size={28} className="text-blue-500" />
              <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight">Cabinet Dr Lahlou</span>
            </div>
            <p className="max-w-md leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Un cabinet moderne alliant expertise médicale et confort patient au cœur de Casablanca. Votre sourire mérite l'excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                <span className="sr-only">Instagram</span>
                <Star size={16} />
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                <span className="sr-only">Facebook</span>
                <Star size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg md:text-xl mb-6 md:mb-8">Horaires</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Lundi - Vendredi</span>
                <span className="text-white">09:00 - 19:00</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Samedi</span>
                <span className="text-white">09:00 - 14:00</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Dimanche</span>
                <span className="text-red-400">Fermé</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg md:text-xl mb-6 md:mb-8">Légal</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conseil de l'Ordre</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs uppercase tracking-widest text-center">
          <span>© 2026 Cabinet Dr Lahlou. Tous droits réservés.</span>
          <span>Design par Agence Santé Premium</span>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <motion.a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="no-referrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-green-500 text-white p-3.5 md:p-4 rounded-full shadow-2xl flex items-center gap-2 group"
      >
        <MessageCircle size={24} />
        <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-medium whitespace-nowrap">
          Une question ? WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
