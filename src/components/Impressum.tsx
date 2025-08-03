import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Impressum = () => {
  const [showEmail, setShowEmail] = useState(false);
  
  // Email protection with simple encoding
  const getEmail = () => {
    const parts = ['kontakt', '@', 'bamboy', '.', 'de'];
    return parts.join('');
  };

  const decodeEmail = () => {
    // Simple ROT13-like encoding for email protection
    const encoded = 'xbagnxg@onzobl.qr';
    return encoded.replace(/[a-zA-Z]/g, function(c) {
      return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 via-blue-600 to-green-500 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Zurück</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Impressum</h1>
          <p className="text-white/70 text-lg">Angaben gemäß § 5 TMG</p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-8 text-white">
            {/* Company Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
                <Shield className="text-blue-300" size={24} />
                <span>Anbieter</span>
              </h2>
              <div className="bg-white/5 rounded-lg p-6 space-y-2">
                <p><strong>Firmenname:</strong> BAMBOY</p>
                <p><strong>Rechtsform:</strong> Einzelunternehmen</p>
                <p><strong>Inhaber/Geschäftsführer:</strong> Niels Zimmermann</p>
                <p><strong>Anschrift:</strong></p>
                <div className="ml-4">
                  <p>Musterstraße 123</p>
                  <p>12345 Berlin</p>
                  <p>Deutschland</p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
                <Mail className="text-green-300" size={24} />
                <span>Kontakt</span>
              </h2>
              <div className="bg-white/5 rounded-lg p-6 space-y-4">
                <div>
                  <strong>E-Mail:</strong>
                  {!showEmail ? (
                    <motion.button
                      onClick={() => setShowEmail(true)}
                      className="ml-2 px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded border border-blue-400/30 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      E-Mail anzeigen
                    </motion.button>
                  ) : (
                    <motion.span
                      className="ml-2 text-blue-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {decodeEmail()}
                    </motion.span>
                  )}
                </div>
                <p><strong>Telefon:</strong> +49 (0) 30 12345678</p>
                <p className="text-white/70 text-sm">
                  <em>Hinweis: Die E-Mail-Adresse wird aus Spam-Schutzgründen nur auf Anfrage angezeigt.</em>
                </p>
              </div>
            </section>

            {/* Legal Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Rechtliche Informationen</h2>
              <div className="bg-white/5 rounded-lg p-6 space-y-4">
                <div>
                  <strong>Umsatzsteuer-ID:</strong>
                  <p className="text-white/80">DE123456789 (Beispiel - bei Bedarf eintragen)</p>
                </div>
                <div>
                  <strong>Wirtschafts-ID:</strong>
                  <p className="text-white/80">12345678901 (Beispiel - bei Bedarf eintragen)</p>
                </div>
                <div>
                  <strong>Handelsregister:</strong>
                  <p className="text-white/80">Nicht eingetragen (Einzelunternehmen)</p>
                </div>
              </div>
            </section>

            {/* Professional Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Berufsrechtliche Regelungen</h2>
              <div className="bg-white/5 rounded-lg p-6 space-y-4">
                <p><strong>Berufsbezeichnung:</strong> [Berufsbezeichnung eintragen, falls zutreffend]</p>
                <p><strong>Zuständige Kammer:</strong> [Kammer eintragen, falls zutreffend]</p>
                <p><strong>Verliehen in:</strong> Deutschland</p>
                <p className="text-white/70 text-sm">
                  <em>Dieser Abschnitt ist nur relevant für reglementierte Berufe.</em>
                </p>
              </div>
            </section>

            {/* EU Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">EU-Streitschlichtung</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <p className="text-white/80 leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-white/80 mt-4 leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </section>

            {/* Liability Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
              <div className="bg-white/5 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Inhalt des Onlineangebotes</h3>
                  <p className="text-white/80 leading-relaxed">
                    Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit 
                    oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, 
                    welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung 
                    oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter 
                    und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Verweise und Links</h3>
                  <p className="text-white/80 leading-relaxed">
                    Bei direkten oder indirekten Verweisen auf fremde Internetseiten („Links"), die außerhalb 
                    des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich 
                    in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch 
                    möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Urheberrecht</h3>
                  <p className="text-white/80 leading-relaxed">
                    Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, 
                    Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, 
                    Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, 
                    Videosequenzen und Texte zurückzugreifen.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Protection Reference */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Datenschutz</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <p className="text-white/80 leading-relaxed">
                  Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder 
                  geschäftlicher Daten (Emailadressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe 
                  dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die Nutzung und 
                  Bezahlung aller angebotenen Dienste ist – soweit technisch möglich und zumutbar – auch 
                  ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet.
                </p>
                <p className="text-white/80 mt-4">
                  Detaillierte Informationen zum Datenschutz finden Sie in unserer 
                  <Link to="/datenschutz" className="text-blue-300 hover:text-blue-200 underline ml-1">
                    Datenschutzerklärung
                  </Link>.
                </p>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-center pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm">
                Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};