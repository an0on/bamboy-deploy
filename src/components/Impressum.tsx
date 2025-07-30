import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Mail } from 'lucide-react';
import { useState } from 'react';

export const Impressum = () => {
  const [showEmail, setShowEmail] = useState(false);
  
  // Email protection with simple encoding
  const getEmail = () => {
    const parts = ['kontakt', '@', 'bamboy', '.', 'de'];
    return parts.join('');
  };

  const decodeEmail = () => {
    // ROT13 encoding for email protection: spielsuechtig@web.de
    const encoded = 'fcvryfrhrpugvt@jro.qr';
    return encoded.replace(/[a-zA-Z]/g, function(c) {
      return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 via-blue-600 to-green-500 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <motion.button
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ x: -5 }}
        >
          <ArrowLeft size={20} />
          <span>Zurück</span>
        </motion.button>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Impressum</h1>
          <p className="text-white/70 text-lg">Angaben gemäß § 5 DDG und § 18 Abs. 2 MStV</p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-8 text-white">
            {/* Responsible Person */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
                <Shield className="text-blue-300" size={24} />
                <span>Verantwortlich für den Inhalt</span>
              </h2>
              <div className="bg-white/5 rounded-lg p-6 space-y-2">
                <p className="text-lg"><strong>Niels Zimmermann</strong></p>
                <p>Kennenburgerstr. 43</p>
                <div className="mt-4">
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
                <p className="text-white/70 text-sm mt-2">
                  <em>Hinweis: Die E-Mail-Adresse wird aus Spam-Schutzgründen nur auf Anfrage angezeigt.</em>
                </p>
              </div>
            </section>

            {/* Content Responsibility */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <p><strong>Niels Zimmermann</strong>, Anschrift wie oben</p>
              </div>
            </section>

            {/* Liability for Content */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <p className="text-white/80 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine entsprechende Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.
                </p>
              </div>
            </section>

            {/* Liability for Links */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Haftung für Links</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <p className="text-white/80 leading-relaxed">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb übernehmen wir für diese fremden Inhalte auch keine Gewähr. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft – rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
                </p>
              </div>
            </section>

            {/* Copyright */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <p className="text-white/80 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Webseite unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind entsprechend gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen entfernen wir solche Inhalte umgehend.
                </p>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Streitschlichtung</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <p className="text-white/80 leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                </p>
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-200 underline block mt-2"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <p className="text-white/80 mt-4 leading-relaxed">
                  Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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