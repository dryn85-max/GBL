/* ============================================
   INTERNATIONALIZATION (i18n)
   English / Spanish language support
   ============================================ */

const translations = {
  en: {
    // Navigation
    'nav.howItWorks': 'How It Works',
    'nav.about': 'About',
    'nav.forClubs': 'For Golf Clubs',
    'nav.trust': 'Trust & Quality',
    'nav.sendParcel': 'Send Your Parcel',
    'nav.contact': 'Contact',

    // Hero
    'hero.tagline': 'International Equipment Delivery',
    'hero.headline': 'Ship your golf gear<br><em>straight from the club</em>',
    'hero.sub': "Finish your round and leave your bag with us. We'll deliver it safely to your doorstep — anywhere in the world.",
    'hero.btnSend': 'Send Your Parcel',
    'hero.btnHow': 'How It Works',
    'hero.insured': 'Insured Delivery',
    'hero.secure': 'Secure Payment',
    'hero.tracking': 'Real-Time Tracking',

    // How It Works
    'how.label': 'How It Works',
    'how.title': 'Five simple steps.<br>Zero hassle.',
    'how.subtitle': 'From QR scan to doorstep delivery — the entire process takes just a few minutes of your time.',
    'how.step1.title': 'Scan the QR Code',
    'how.step1.desc': "Find the Golf Bridge QR code in your golf club's locker room or pro shop. Scan it with your phone camera — no app needed.",
    'how.step2.title': 'Enter Your Details',
    'how.step2.desc': 'Fill in your delivery address and contact information. The system automatically calculates a fixed delivery price based on your destination — no hidden fees.',
    'how.step3.title': 'Pay Securely',
    'how.step3.desc': "Complete your payment via Stripe's secure checkout. All prices are in EUR with VAT included. Add optional insurance for extra peace of mind.",
    'how.step4.title': 'Deposit Your Bag',
    'how.step4.desc': "Receive your assigned locker number and access code instantly via email. Place your golf bag in the secure locker — and you're done.",
    'how.step5.title': 'Track Your Delivery',
    'how.step5.desc': "Our team collects your bag from the club and ships it via professional carriers. You'll receive a tracking number by email to follow your equipment all the way home.",
    'how.locker.title': 'This is what your locker looks like',
    'how.locker.desc': "After payment you'll receive a locker number and access code by email. Find your numbered locker at the club, deposit your bag, and you're done.",

    // About
    'about.label': 'About the Service',
    'about.title': 'Play anywhere.<br>We handle the rest.',
    'about.p1': 'Golf Bridge Logistics is an international sports equipment delivery service designed specifically for golfers playing abroad. We take the hassle out of transporting your clubs home after your trip.',
    'about.p2': "Simply leave your golf bag at the club's secure locker, and we'll arrange professional pickup, careful packaging, and reliable delivery to your doorstep — whether you're heading home to the UK, Europe, or anywhere in the world.",
    'about.feat1': 'Worldwide delivery coverage',
    'about.feat2': 'Optional insurance on equipment',
    'about.feat3': 'No airline fees or baggage stress',
    'about.feat4': 'Fast, transparent pricing in EUR',

    // For Golf Clubs
    'clubs.label': 'For Golf Clubs',
    'clubs.title': 'A premium service<br>your members will love.',
    'clubs.subtitle': 'Partner with Golf Bridge Logistics to offer your members a world-class equipment delivery service — at zero cost to your club.',
    'clubs.b1.title': 'Elevate Member Experience',
    'clubs.b1.desc': "Give your members a convenient way to ship equipment home after their round. A service they'll remember and recommend.",
    'clubs.b2.title': 'Zero Cost, Zero Effort',
    'clubs.b2.desc': 'We handle everything — logistics, payments, customer support. All you need is a small area for the QR poster and lockers.',
    'clubs.b3.title': 'Simple QR Setup',
    'clubs.b3.desc': 'We provide branded QR code posters for your locker rooms. Members simply scan, order, and deposit — fully self-service.',
    'clubs.partner': 'Become a Partner',

    // Trust & Quality
    'trust.label': 'Trust & Quality',
    'trust.title': 'Your equipment is<br>in safe hands.',
    'trust.subtitle': 'Every detail of our service is built around security, reliability, and transparency.',
    'trust.c1.title': 'Optional Insurance',
    'trust.c1.desc': 'Protect your equipment with our affordable insurance option, calculated at 4% of your declared value.',
    'trust.c2.title': 'Secure Payments',
    'trust.c2.desc': 'All transactions are processed through Stripe — a world-leading payment platform trusted by millions of businesses.',
    'trust.c3.title': 'Professional Carriers',
    'trust.c3.desc': 'We partner with trusted international carriers like FedEx and Nova Post to ensure reliable, timely delivery.',
    'trust.c4.title': 'Real-Time Tracking',
    'trust.c4.desc': 'Receive your tracking number by email and follow your equipment every step of the way — from club to doorstep.',

    // Send Your Parcel form
    'form.label': 'Send Your Parcel',
    'form.title': 'Ready to ship?<br>Fill in your details.',
    'form.subtitle': "Enter your information below and we'll handle everything — from pickup at the golf club to delivery at your doorstep.",
    'form.firstName': 'First Name <span class="required">*</span>',
    'form.firstNamePh': 'John',
    'form.lastName': 'Last Name <span class="required">*</span>',
    'form.lastNamePh': 'Smith',
    'form.country': 'Country <span class="required">*</span>',
    'form.selectCountry': 'Select country',
    'form.countries.GB': 'United Kingdom',
    'form.countries.ES': 'Spain',
    'form.countries.PT': 'Portugal',
    'form.countries.FR': 'France',
    'form.countries.DE': 'Germany',
    'form.countries.IE': 'Ireland',
    'form.countries.NL': 'Netherlands',
    'form.countries.BE': 'Belgium',
    'form.countries.IT': 'Italy',
    'form.countries.AT': 'Austria',
    'form.countries.CH': 'Switzerland',
    'form.city': 'City <span class="required">*</span>',
    'form.cityPh': 'London',
    'form.postcode': 'Postcode <span class="required">*</span>',
    'form.street': 'Street <span class="required">*</span>',
    'form.streetPh': 'Baker Street',
    'form.houseApt': 'House / Apartment <span class="required">*</span>',
    'form.houseAptPh': '221B, Apt 3, Floor 2',
    'form.deliveryType': 'Delivery Type <span class="required">*</span>',
    'form.homeAddress': 'Home Address',
    'form.pickupPoint': 'Carrier Pickup Point',
    'form.email': 'Email Address <span class="required">*</span>',
    'form.phone': 'Phone Number <span class="required">*</span>',
    'form.insuranceTitle': 'Optional Equipment Insurance',
    'form.insuranceNote': 'Protect your golf equipment during transit. Insurance fee is 4% of your declared value.',
    'form.declaredValue': 'Declared Equipment Value (EUR)',
    'form.declaredValuePh': 'e.g. 1500',
    'form.submit': 'Submit Order Request',
    'form.footerNote': "Your data is secure. We'll contact you to confirm your order and arrange payment.",

    // Contact
    'contact.label': 'CONTACT US',
    'contact.title': 'Have a Question?',
    'contact.subtitle': "Drop us a message and we'll get back to you as soon as possible.",
    'contact.name': 'Your Name <span class="required">*</span>',
    'contact.namePh': 'John Smith',
    'contact.subject': 'Subject <span class="required">*</span>',
    'contact.subjectPh': 'e.g. Shipping to Portugal',
    'contact.message': 'Your Message <span class="required">*</span>',
    'contact.messagePh': 'Tell us how we can help you...',
    'contact.send': 'Send Message',
    'contact.note': 'This will open your email app with a pre-filled message to info@golf-bridge-logistics.com',

    // Footer
    'footer.slogan': 'You play. We deliver.',
    'footer.copy': '© 2026 Golf Bridge Logistics. All rights reserved.',
  },

  es: {
    // Navegación
    'nav.howItWorks': 'Cómo Funciona',
    'nav.about': 'Nosotros',
    'nav.forClubs': 'Para Clubes',
    'nav.trust': 'Confianza y Calidad',
    'nav.sendParcel': 'Enviar Tu Bolsa',
    'nav.contact': 'Contacto',

    // Hero
    'hero.tagline': 'Envío Internacional de Equipamiento',
    'hero.headline': 'Envía tu equipo de golf<br><em>directamente desde el club</em>',
    'hero.sub': 'Termina tu partida y déjanos tu bolsa. La entregaremos de forma segura en tu puerta — en cualquier parte del mundo.',
    'hero.btnSend': 'Enviar Tu Bolsa',
    'hero.btnHow': 'Cómo Funciona',
    'hero.insured': 'Envío Asegurado',
    'hero.secure': 'Pago Seguro',
    'hero.tracking': 'Seguimiento en Tiempo Real',

    // Cómo Funciona
    'how.label': 'Cómo Funciona',
    'how.title': 'Cinco sencillos pasos.<br>Sin complicaciones.',
    'how.subtitle': 'Desde escanear el QR hasta la entrega en tu puerta — todo el proceso lleva solo unos minutos de tu tiempo.',
    'how.step1.title': 'Escanea el Código QR',
    'how.step1.desc': 'Busca el código QR de Golf Bridge en el vestuario o la tienda de tu club de golf. Escanéalo con la cámara de tu teléfono — no necesitas ninguna app.',
    'how.step2.title': 'Introduce Tus Datos',
    'how.step2.desc': 'Rellena tu dirección de entrega e información de contacto. El sistema calcula automáticamente un precio fijo de envío según tu destino — sin costes ocultos.',
    'how.step3.title': 'Paga de Forma Segura',
    'how.step3.desc': 'Completa tu pago a través del checkout seguro de Stripe. Todos los precios son en EUR con IVA incluido. Añade un seguro opcional para mayor tranquilidad.',
    'how.step4.title': 'Deposita Tu Bolsa',
    'how.step4.desc': 'Recibe tu número de taquilla y código de acceso al instante por email. Coloca tu bolsa de golf en la taquilla segura — y listo.',
    'how.step5.title': 'Sigue Tu Envío',
    'how.step5.desc': 'Nuestro equipo recoge tu bolsa del club y la envía con transportistas profesionales. Recibirás un número de seguimiento por email para rastrear tu equipamiento hasta casa.',
    'how.locker.title': 'Así es tu taquilla',
    'how.locker.desc': 'Tras el pago recibirás un número de taquilla y código de acceso por email. Busca tu taquilla numerada en el club, deposita tu bolsa y listo.',

    // Nosotros
    'about.label': 'Sobre el Servicio',
    'about.title': 'Juega en cualquier lugar.<br>Nosotros nos encargamos del resto.',
    'about.p1': 'Golf Bridge Logistics es un servicio de envío internacional de equipamiento deportivo diseñado específicamente para golfistas que juegan en el extranjero. Eliminamos la molestia de transportar tus palos a casa después del viaje.',
    'about.p2': 'Simplemente deja tu bolsa de golf en la taquilla segura del club, y nosotros organizamos la recogida profesional, el embalaje cuidadoso y la entrega fiable en tu puerta — ya sea en el Reino Unido, Europa o cualquier lugar del mundo.',
    'about.feat1': 'Cobertura de envío mundial',
    'about.feat2': 'Seguro opcional para equipamiento',
    'about.feat3': 'Sin tasas de aerolínea ni estrés por equipaje',
    'about.feat4': 'Precios rápidos y transparentes en EUR',

    // Para Clubes de Golf
    'clubs.label': 'Para Clubes de Golf',
    'clubs.title': 'Un servicio premium<br>que tus socios adorarán.',
    'clubs.subtitle': 'Asóciate con Golf Bridge Logistics para ofrecer a tus socios un servicio de envío de equipamiento de primer nivel — sin coste para tu club.',
    'clubs.b1.title': 'Mejora la Experiencia del Socio',
    'clubs.b1.desc': 'Ofrece a tus socios una forma cómoda de enviar su equipamiento a casa después de jugar. Un servicio que recordarán y recomendarán.',
    'clubs.b2.title': 'Sin Coste, Sin Esfuerzo',
    'clubs.b2.desc': 'Nos encargamos de todo — logística, pagos, atención al cliente. Solo necesitas un pequeño espacio para el póster QR y las taquillas.',
    'clubs.b3.title': 'Configuración QR Sencilla',
    'clubs.b3.desc': 'Proporcionamos pósters con código QR personalizados para tus vestuarios. Los socios simplemente escanean, piden y depositan — totalmente autoservicio.',
    'clubs.partner': 'Convertirse en Socio',

    // Confianza y Calidad
    'trust.label': 'Confianza y Calidad',
    'trust.title': 'Tu equipamiento está<br>en buenas manos.',
    'trust.subtitle': 'Cada detalle de nuestro servicio está diseñado en torno a la seguridad, fiabilidad y transparencia.',
    'trust.c1.title': 'Seguro Opcional',
    'trust.c1.desc': 'Protege tu equipamiento con nuestra opción de seguro asequible, calculado al 4% del valor declarado.',
    'trust.c2.title': 'Pagos Seguros',
    'trust.c2.desc': 'Todas las transacciones se procesan a través de Stripe — una plataforma de pago líder mundial en la que confían millones de empresas.',
    'trust.c3.title': 'Transportistas Profesionales',
    'trust.c3.desc': 'Colaboramos con transportistas internacionales de confianza como FedEx y Nova Post para garantizar entregas fiables y puntuales.',
    'trust.c4.title': 'Seguimiento en Tiempo Real',
    'trust.c4.desc': 'Recibe tu número de seguimiento por email y sigue tu equipamiento en cada paso — desde el club hasta tu puerta.',

    // Formulario Enviar Tu Bolsa
    'form.label': 'Enviar Tu Bolsa',
    'form.title': '¿Listo para enviar?<br>Rellena tus datos.',
    'form.subtitle': 'Introduce tu información a continuación y nos encargaremos de todo — desde la recogida en el club de golf hasta la entrega en tu puerta.',
    'form.firstName': 'Nombre <span class="required">*</span>',
    'form.firstNamePh': 'Juan',
    'form.lastName': 'Apellido <span class="required">*</span>',
    'form.lastNamePh': 'García',
    'form.country': 'País <span class="required">*</span>',
    'form.selectCountry': 'Seleccionar país',
    'form.countries.GB': 'Reino Unido',
    'form.countries.ES': 'España',
    'form.countries.PT': 'Portugal',
    'form.countries.FR': 'Francia',
    'form.countries.DE': 'Alemania',
    'form.countries.IE': 'Irlanda',
    'form.countries.NL': 'Países Bajos',
    'form.countries.BE': 'Bélgica',
    'form.countries.IT': 'Italia',
    'form.countries.AT': 'Austria',
    'form.countries.CH': 'Suiza',
    'form.city': 'Ciudad <span class="required">*</span>',
    'form.cityPh': 'Madrid',
    'form.postcode': 'Código Postal <span class="required">*</span>',
    'form.street': 'Calle <span class="required">*</span>',
    'form.streetPh': 'Calle Gran Vía',
    'form.houseApt': 'Número / Piso <span class="required">*</span>',
    'form.houseAptPh': '28, Piso 3, Puerta B',
    'form.deliveryType': 'Tipo de Entrega <span class="required">*</span>',
    'form.homeAddress': 'Dirección de Casa',
    'form.pickupPoint': 'Punto de Recogida',
    'form.email': 'Correo Electrónico <span class="required">*</span>',
    'form.phone': 'Número de Teléfono <span class="required">*</span>',
    'form.insuranceTitle': 'Seguro Opcional de Equipamiento',
    'form.insuranceNote': 'Protege tu equipo de golf durante el transporte. La tarifa del seguro es el 4% del valor declarado.',
    'form.declaredValue': 'Valor Declarado del Equipamiento (EUR)',
    'form.declaredValuePh': 'ej. 1500',
    'form.submit': 'Enviar Solicitud de Pedido',
    'form.footerNote': 'Tus datos están seguros. Te contactaremos para confirmar tu pedido y organizar el pago.',

    // Contacto
    'contact.label': 'CONTÁCTANOS',
    'contact.title': '¿Tienes una Pregunta?',
    'contact.subtitle': 'Envíanos un mensaje y te responderemos lo antes posible.',
    'contact.name': 'Tu Nombre <span class="required">*</span>',
    'contact.namePh': 'Juan García',
    'contact.subject': 'Asunto <span class="required">*</span>',
    'contact.subjectPh': 'ej. Envío a Portugal',
    'contact.message': 'Tu Mensaje <span class="required">*</span>',
    'contact.messagePh': 'Cuéntanos cómo podemos ayudarte...',
    'contact.send': 'Enviar Mensaje',
    'contact.note': 'Esto abrirá tu aplicación de correo con un mensaje pre-rellenado a info@golf-bridge-logistics.com',

    // Pie de página
    'footer.slogan': 'Tú juegas. Nosotros entregamos.',
    'footer.copy': '© 2026 Golf Bridge Logistics. Todos los derechos reservados.',
  }
};


/* ============================================
   Language switcher logic
   ============================================ */

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Translate elements with data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Translate elements with data-i18n-html (innerHTML — for content with <span>, <br>, <em>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Translate elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Translate elements with data-i18n-after (text after SVG child)
  document.querySelectorAll('[data-i18n-after]').forEach(el => {
    const key = el.getAttribute('data-i18n-after');
    if (t[key] !== undefined) {
      // Preserve the SVG, replace text nodes after it
      const svg = el.querySelector('svg');
      if (svg) {
        // Remove all text nodes after SVG
        const nodes = Array.from(el.childNodes);
        nodes.forEach(node => {
          if (node.nodeType === 3) el.removeChild(node); // text nodes
        });
        el.appendChild(document.createTextNode('\n  ' + t[key] + '\n'));
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update page title
  if (lang === 'es') {
    document.title = 'Golf Bridge Logistics — Tú juegas. Nosotros entregamos.';
  } else {
    document.title = 'Golf Bridge Logistics — You play. We deliver.';
  }

  // Save preference
  try { localStorage.setItem('gbl-lang', lang); } catch(e) {}
}

// Initialize switcher
document.addEventListener('DOMContentLoaded', () => {
  // Attach click handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Restore saved language
  let savedLang = 'en';
  try { savedLang = localStorage.getItem('gbl-lang') || 'en'; } catch(e) {}
  if (savedLang !== 'en') setLanguage(savedLang);
});
