/**
 * Stratexim — i18n content for all three language variants (EN / CZ / DE).
 *
 * This is the single source of truth for every translatable string on the site.
 * Language-independent structure (SVG icons, image filenames, the shared parts of
 * the Organization JSON-LD) lives in the components / Layout, not here.
 */

export type Lang = 'en' | 'cz' | 'de';

/** Home page URL for each language (used by the nav language switcher). */
export const HOME_PATH: Record<Lang, string> = {
  en: '/',
  cz: '/cz/',
  de: '/de/',
};

/** Privacy / legal page URL for each language. */
export const LEGAL_PATH: Record<Lang, string> = {
  en: '/privacy/',
  cz: '/cz/ochrana-udaju/',
  de: '/de/datenschutz/',
};

const NBSP = ' ';

export const translations = {
  /* ======================================================================= */
  /* ENGLISH                                                                  */
  /* ======================================================================= */
  en: {
    htmlLang: 'en',
    canonical: 'https://stratexim.com/',
    meta: {
      title: 'Custom & Technical Textile Manufacturing in the EU | Stratexim',
      description:
        'We design and manufacture custom textiles in the EU — from technical drawing to serial production. Defence, industry, medical, hotels. No fixed minimum.',
      ogTitle: 'Stratexim | Custom Textile Manufacturing in the EU',
      ogDescription:
        'We bring textile ideas to reality. From an idea to a finished product in a few weeks — design, materials, production, quality control and logistics in one textile office in the middle of Europe.',
      ogImageAlt: 'Stratexim — all-in-one textile solution',
      ogLocale: 'en_US',
      ogLocaleAlt: ['cs_CZ', 'de_DE'],
      twTitle: 'Stratexim | Custom Textile Manufacturing in the EU',
      twDescription:
        'From an idea to a finished product — design, materials, production, quality control and logistics in one textile office in the middle of Europe.',
    },
    nav: {
      about: 'About',
      products: 'Products',
      team: 'Team',
      faq: 'FAQ',
      contact: 'Contact',
      menuAria: 'Menu',
    },
    hero: {
      motto: `PRECISION${NBSP}${NBSP}•${NBSP}${NBSP}DURABILITY${NBSP}${NBSP}•${NBSP}${NBSP}INNOVATION`,
      title: `We Bring Textile Ideas to${NBSP}Reality`,
      sub: "We are an experienced textile design office in the middle of Europe — the Czech Republic. Whether you're moving mass production from Asia to the EU and need local capacity, or you just have an idea in your head you want to bring to reality — you've come to the right place.",
      cta: 'CONTACT US',
      scrollAria: 'Scroll down',
    },
    about: {
      kicker: 'WHO WE ARE',
      title: 'A Textile Design Office in the EU',
      lead: 'Our team comes from the defence textile sector, where every parameter matters — and that precision has stayed with us. Today we design and produce textiles for everyone who needs them done properly. All made in Europe, with 20+ years of combined experience behind us.',
      howKicker: 'HOW WE WORK',
      cards: [
        {
          title: 'Consultation & Design',
          body: 'Show us your product or just tell us your idea. We consult it with you and prepare technical drawings, patterns and cuts in professional software.',
        },
        {
          title: 'Materials & Production',
          body: 'We propose the right materials for the job and run the production — from the first prototype to serial runs of tens of thousands of pieces.',
        },
        {
          title: 'Quality & Logistics',
          body: 'Every batch goes through quality control before it ships — and we handle the logistics, so the finished product lands where you need it.',
        },
      ],
    },
    products: {
      kicker: 'WHAT WE MAKE',
      title: 'Textiles We Design & Manufacture',
      lead: "From ballistic vests to hotel bedding — if it's textile, we can design it and make it. Five segments we serve, plus the special-use fabrics behind them.",
      segments: [
        {
          name: 'Defence & Mil-Pol',
          photos: [
            { alt: 'Army uniform', title: 'Army Uniform', desc: 'Comfortable cut, modern PA + stretch fabrics, NIR compliant.' },
            { alt: 'Tactical backpack', title: 'Backpacks', desc: 'Modern design, practical pockets, ventilated back, durable materials.' },
          ],
          blurb: 'For army, police, firefighters and rescue units. Gear that has to work when everything else fails.',
          chips: ['Ballistic vests', 'Plate carriers', 'CBRN suits', 'Uniforms', 'Magazine pouches', 'Backpacks', 'Sleeping bags'],
        },
        {
          name: 'Industry',
          photos: [
            { alt: 'Cut-resistant butcher gloves', title: "Butcher's Cut-Resistant Gloves", desc: 'Textile gloves that keep hands safe in daily work with blades.' },
            { alt: 'Custom bags and cases', title: 'Bags & Cases', desc: 'Custom bags and cases tailored to your products.' },
          ],
          blurb: 'Any textile your business runs on — sewn to spec and delivered on schedule.',
          chips: ['Bags & cases', 'Covers & tarps', 'Workwear', 'Automotive textiles', 'Protective gloves', 'Cut-resistant gloves', 'Hearing protection'],
        },
        {
          name: 'Medical & Protection',
          photos: [
            { alt: 'PU coated mattress protector', title: 'PU-Coated Mattress Protector', desc: 'A waterproof layer that stops leaks before they reach the mattress.' },
            { alt: 'Hospital bedsheets', title: 'Hospital Bedsheets', desc: `100% cotton, washable at 95${NBSP}°C, dry-clean safe.` },
          ],
          blurb: 'Textiles for hygiene-critical environments, built to survive industrial laundry cycles.',
          chips: ['Mattress protectors', 'Medical staff clothing', 'Waterproof sheets', 'Hospital bedding', 'Respirators & face masks', 'Towels'],
        },
        {
          name: 'Fashion & Merch',
          photos: [
            { alt: 'Custom clothing line', title: 'Own Clothing Line', desc: 'Small-batch collections from sketch to hanger — custom labels, trims and packaging.' },
            { alt: 'Branded merch hoodie', title: 'Branded Merch', desc: 'Heavyweight hoodies, tees and beanies with your logo done right.' },
          ],
          blurb: 'You bring a brand or a collection idea — we handle the design, sampling and production. Clothing people actually want to wear.',
          chips: ['Own clothing lines', 'Branded merch', 'Promotional textiles', 'Corporate wear'],
        },
        {
          name: 'Home & Hotels',
          photos: [
            { alt: 'Towels 400–700 GSM', title: 'Towels', desc: 'From 400 to 700 GSM — dense, absorbent, colorful.' },
            { alt: 'Terry bathrobe', title: 'Terry Bathrobes', desc: 'Your guests stay comfy in your wellness.' },
          ],
          blurb: 'Comfortable at home, durable enough for hotel turnover.',
          chips: ['Bedding', 'Bath mats', 'Bathrobes', 'Towels'],
        },
        {
          name: 'Special-Use Fabrics',
          photos: [
            { alt: 'Protective technical fabrics', title: 'Protective Fabrics', desc: 'Cut-resistant, ballistic and flame-resistant weaves.' },
            { alt: 'Membrane and coated fabrics', title: 'Membrane & Coated Fabrics', desc: 'Waterproof, breathable, antibacterial or antistatic — by the metre.' },
          ],
          blurb: 'The materials behind it all — supplied by the metre or built into your product.',
          chips: ['Cut-resistant', 'Stab-proof', 'Ballistic', 'Flame-resistant', 'Membrane', 'Antifungal', 'Hydrophobic', 'Antibacterial', 'Antistatic', 'UV-resistant'],
        },
      ],
    },
    team: {
      kicker: 'LEADERSHIP',
      title: 'Our Founders',
      tagline: '20+ years of combined textile experience',
      bios: [
        'Tomáš handles sales, finance and the day-to-day running of the company. At one of the largest Czech fabric-finishing companies he led the army and technical textiles division, supplied the biggest players on the market and worked closely with the state quality authority (SOJ) — a military unit that strictly inspects every parameter and every process. The fabrics he sold went into uniforms, plate carriers and backpacks for the Czech, Slovak and Ukrainian armies.',
        'Myron owns the technical side of every Stratexim product — from the first idea through development to serial production. In textiles since 2010, he developed product portfolios for the leading Czech military suppliers: backpacks, uniforms, ballistic vests and CBRN suits for the Czech Army, the Ukrainian Armed Forces, police, emergency medical services and other government agencies. With the products he designed, he helped win tenders worth tens of millions of euros.',
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'What does Stratexim make?', a: "Custom textiles across almost every segment — defence & mil-pol, industry, medical, fashion & merch, home & hotels, and special-use fabrics. If it's made of textile, we're happy to look at your project — from a single piece to runs of tens of thousands." },
        { q: 'What is the minimum order quantity?', a: 'We have no fixed minimum — we handle prototypes and small batches as well as production runs of tens of thousands. The exact minimum depends on the product and material.' },
        { q: 'Can you handle large-volume production?', a: 'Yes. We regularly produce runs in the tens of thousands, including contracts for military and government bodies.' },
        { q: 'Where do you manufacture?', a: 'All production takes place in the European Union (Czech Republic). We can also help relocate serial production from Asia to the EU.' },
        { q: 'What materials and fabrics do you offer?', a: 'Fabrics from 80 to 350 gsm, non-wovens, filtration fabrics, NIR fabrics, knits, lamination and other special-use fabrics — supplied by the metre or built directly into your product.' },
        { q: 'How does working with you work?', a: 'Show us a product or tell us your idea → we prepare technical drawings and patterns → we propose materials → we make a prototype and then the series → every batch goes through quality control → we handle logistics to your door.' },
        { q: 'What are your lead times?', a: 'As a rule of thumb, expect about a month for development and a month for production. We always confirm the exact timeline with your quote, based on complexity and volume.' },
        { q: 'Where do you deliver?', a: 'Across the entire European Union, and beyond by arrangement.' },
        { q: 'How do I get a quote?', a: "Fill in the request form on this page or email info@stratexim.com. We'll get back to you with materials, timeline and price within two business days." },
      ],
    },
    contact: {
      kicker: 'GET IN TOUCH',
      title: 'Request a Quote',
      lead: "Show us your product — or just tell us your idea. We'll come back with materials, timeline and price. Get your quotation now.",
      form: {
        languageValue: 'EN',
        companyPh: 'Company / Name *',
        companyAria: 'Company / Name',
        emailPh: 'E-mail *',
        emailAria: 'E-mail',
        segmentPh: 'Segment *',
        segmentAria: 'Segment',
        segmentOptions: ['Defence & Mil-Pol', 'Industry', 'Medical & Protection', 'Fashion & Merch', 'Home & Hotels', 'Special-Use Fabrics', 'Other'],
        volumePh: 'Estimated volume (pcs)',
        volumeAria: 'Estimated volume in pieces',
        messagePh: 'Describe your product or idea *',
        messageAria: 'Describe your product or idea',
        noteBefore: 'By submitting you agree we may contact you about your inquiry. See our ',
        noteLink: 'Privacy Policy',
        noteAfter: '.',
        submit: 'SEND INQUIRY',
        statusOk: "Thank you — we'll get back to you within two business days.",
        statusErr: 'Sending failed. Please e-mail us directly at info@stratexim.com.',
      },
      or: 'or reach us directly:',
      followIntro: 'You can also follow us on LinkedIn!',
      followCta: 'Follow us on LinkedIn',
      linkedinAria: 'Follow Stratexim on LinkedIn',
    },
    footer: {
      rights: 'All rights reserved.',
      companyText: 'STRATEXIM is a brand of Bonimport Global s.r.o. · Company ID 23035650 · VAT CZ23035650 · Čujkovova 1714/21, 700 30 Ostrava, Czech Republic · +420 776 655 106',
      privacyLabel: 'Privacy Policy',
    },
    legal: {
      metaTitle: 'Privacy Policy | Stratexim',
      metaDescription: 'How Stratexim (Bonimport Global s.r.o.) handles personal data submitted through the website inquiry form.',
      back: '← Back to site',
      heading: 'Privacy Policy',
      updated: 'Last updated: 7 July 2026',
    },
    jsonld: {
      orgDescription: 'All-in-one textile solution: technical drawings, materials, production, quality control and logistics. Defence & Mil-Pol, industry, medical, fashion and home textiles, made in the Czech Republic.',
      slogan: 'Precision · Durability · Innovation',
      knowsAbout: ['Custom textile manufacturing', 'Tactical and defence textiles', 'Ballistic vests', 'Plate carriers', 'CBRN suits', 'Workwear and protective fabrics', 'Medical and hospital textiles', 'Hotel and home textiles', 'Own clothing lines and branded merch', 'Technical and special-use fabrics'],
      offerCatalogName: 'Textile segments',
      offerCatalog: ['Defence & Mil-Pol', 'Industry', 'Medical & Protection', 'Fashion & Merch', 'Home & Hotels', 'Special-Use Fabrics'],
      availableLanguage: ['English', 'Czech', 'German'],
    },
  },

  /* ======================================================================= */
  /* CZECH                                                                    */
  /* ======================================================================= */
  cz: {
    htmlLang: 'cs',
    canonical: 'https://stratexim.com/cz/',
    meta: {
      title: 'Zakázkové šití technických textilií a oděvů | Stratexim',
      description:
        'Navrhujeme a šijeme technické textilie a oděvy na míru — od technického nákresu po sériovou výrobu v ČR. Obrana, průmysl, zdravotnictví, hotely.',
      ogTitle: 'Stratexim | Zakázkové šití technických textilií',
      ogDescription:
        'Proměňujeme textilní nápady ve skutečnost. Od nápadu k hotovému produktu během pár týdnů — návrh, materiály, výroba, kontrola kvality a logistika v jedné textilní kanceláři uprostřed Evropy.',
      ogImageAlt: 'Stratexim — komplexní textilní řešení',
      ogLocale: 'cs_CZ',
      ogLocaleAlt: ['en_US', 'de_DE'],
      twTitle: 'Stratexim | Zakázkové šití technických textilií',
      twDescription:
        'Od nápadu k hotovému produktu — návrh, materiály, výroba, kontrola kvality a logistika v jedné textilní kanceláři uprostřed Evropy.',
    },
    nav: {
      about: 'O nás',
      products: 'Produkty',
      team: 'Tým',
      faq: 'FAQ',
      contact: 'Kontakt',
      menuAria: 'Menu',
    },
    hero: {
      motto: `PRECIZNOST${NBSP}${NBSP}•${NBSP}${NBSP}ODOLNOST${NBSP}${NBSP}•${NBSP}${NBSP}INOVACE`,
      title: `Proměňujeme textilní nápady ve${NBSP}skutečnost`,
      sub: 'Jsme zkušená textilní vývojová kancelář uprostřed Evropy — v České republice. Ať už přesouváte sériovou výrobu z Asie do EU a hledáte lokální kapacity, nebo máte v hlavě nápad, který chcete přivést na svět — jste na správném místě.',
      cta: 'KONTAKTUJTE NÁS',
      scrollAria: 'Posunout dolů',
    },
    about: {
      kicker: 'KDO JSME',
      title: 'Textilní vývojová kancelář v ČR',
      lead: 'Náš tým pochází z obranného textilního průmyslu, kde záleží na každém parametru — a tahle preciznost nám zůstala. Dnes navrhujeme a vyrábíme textilie pro každého, kdo je potřebuje udělat pořádně. Vše vyrobeno v Evropě, s více než 20 lety zkušeností za sebou.',
      howKicker: 'JAK PRACUJEME',
      cards: [
        {
          title: 'Konzultace & návrh',
          body: 'Ukažte nám svůj produkt, nebo nám jen řekněte svůj nápad. Zkonzultujeme ho s vámi a připravíme technické nákresy a střihy v profesionálním softwaru.',
        },
        {
          title: 'Materiály & výroba',
          body: 'Navrhneme materiály přesně pro daný účel a zajistíme výrobu — od prvního prototypu po série v desítkách tisíc kusů.',
        },
        {
          title: 'Kvalita & logistika',
          body: 'Každá šarže projde před expedicí kontrolou kvality — a logistiku vyřešíme my, takže hotový produkt dorazí přesně tam, kam potřebujete.',
        },
      ],
    },
    products: {
      kicker: 'CO VYRÁBÍME',
      title: 'Textilie, které navrhujeme a šijeme',
      lead: 'Od neprůstřelných vest po hotelové povlečení — pokud je to textil, umíme ho navrhnout i vyrobit. Pět segmentů, pro které pracujeme, plus speciální tkaniny v jejich základu.',
      segments: [
        {
          name: 'Obrana + IZS',
          photos: [
            { alt: 'Armádní uniforma', title: 'Armádní uniforma', desc: 'Pohodlný střih, moderní tkaniny PA + stretch, NIR compliant.' },
            { alt: 'Taktický batoh', title: 'Batohy', desc: 'Moderní design, praktické kapsy, odvětrávaná záda, kvalitní odolné materiály.' },
          ],
          blurb: 'Pro armádu, policii, hasiče i záchranáře. Vybavení, které musí spolehlivě fungovat v těch nejtěžších podmínkách.',
          chips: ['Neprůstřelné vesty', 'Nosiče plátů', 'CBRN obleky', 'Uniformy', 'Sumky na zásobníky', 'Batohy', 'Spacáky'],
        },
        {
          name: 'Průmysl',
          photos: [
            { alt: 'Protipořezové rukavice', title: 'Řeznické protipořezové rukavice', desc: 'Textilní rukavice, které chrání ruce při každodenní práci s ostřím.' },
            { alt: 'Tašky a brašny na míru', title: 'Tašky a brašny', desc: 'Tašky a brašny na míru přesně pro vaše produkty.' },
          ],
          blurb: 'Jakýkoliv textil, který používáte ve vaší výrobě. Ušitý na míru pro váš produkt a dodaný právě včas.',
          chips: ['Tašky a brašny', 'Obaly a plachty', 'Pracovní oděvy', 'Automotive textilie', 'Ochranné rukavice', 'Protipořezové rukavice', 'Ochrana sluchu'],
        },
        {
          name: 'Zdravotnictví & ochrana',
          photos: [
            { alt: 'Chránič matrace s PU zátěrem', title: 'Chránič matrace s PU zátěrem', desc: 'Nepromokavá vrstva, která zastaví protečení dřív, než dosáhne matrace.' },
            { alt: 'Nemocniční ložní prádlo', title: 'Nemocniční ložní prádlo', desc: `100% bavlna, pratelná na 95${NBSP}°C, možno chemicky čistit.` },
          ],
          blurb: 'Textilie pro prostředí s přísnou hygienou, stavěné tak, aby přežily průmyslové prací cykly.',
          chips: ['Chrániče matrací', 'Oblečení pro nemocniční personál', 'Nepromokavá prostěradla', 'Nemocniční povlečení', 'Respirátory a roušky', 'Ručníky'],
        },
        {
          name: 'Móda & merch',
          photos: [
            { alt: 'Vlastní řada oblečení', title: 'Vlastní řada oblečení', desc: 'Malosériové kolekce od skici po ramínko — vlastní etikety, doplňky i balení.' },
            { alt: 'Firemní merch mikina', title: 'Firemní merch', desc: 'Kvalitní mikiny, trička a čepice s vaším logem, jak má být.' },
          ],
          blurb: 'Vy přinesete značku nebo nápad na kolekci — my zajistíme návrh, vzorkování i výrobu. Oblečení, které lidé opravdu chtějí nosit.',
          chips: ['Vlastní řady oblečení', 'Firemní merch', 'Reklamní textil', 'Firemní oblečení'],
        },
        {
          name: 'Domácí a hotelový textil',
          photos: [
            { alt: 'Ručníky a osušky 400–700 g/m²', title: 'Ručníky a osušky', desc: 'Od 400 do 700 g/m² — husté, savé, barevné.' },
            { alt: 'Froté župan', title: 'Froté župany', desc: 'Aby bylo hostům ve vašem wellness pohodlně.' },
          ],
          blurb: 'Pohodlné na doma, zároveň dost odolné pro hotelové provozy.',
          chips: ['Povlečení', 'Koupelnové předložky', 'Župany', 'Ručníky a osušky'],
        },
        {
          name: 'Speciální tkaniny',
          photos: [
            { alt: 'Ochranné technické tkaniny', title: 'Ochranné tkaniny', desc: 'Neprořezné, balistické a nehořlavé vazby.' },
            { alt: 'Membránové a zátěrované tkaniny', title: 'Membránové a zátěrované tkaniny', desc: 'Nepromokavé, prodyšné, antibakteriální i antistatické — na metry.' },
          ],
          blurb: 'Materiály, které za vším stojí — dodáváme metráží, nebo je zabudujeme přímo do vašeho produktu.',
          chips: ['Neprořezné', 'Odolné proti bodnutí', 'Balistické', 'Nehořlavé', 'Membránové', 'Antifungicidní', 'Hydrofobní', 'Antibakteriální', 'Antistatické', 'UV-odolné'],
        },
      ],
    },
    team: {
      kicker: 'VEDENÍ',
      title: 'Zakladatelé',
      tagline: 'Dohromady přinášíme do vašeho projektu přes 20 let zkušeností',
      bios: [
        'Tomáš má na starosti hlavně obchod, finance a celkový chod firmy. U jednoho z největších českých úpravců tkanin vedl divizi armádních a technických textilií. Dodával speciální produkty největším hráčům na trhu a úzce spolupracoval také se státním odborem pro kontrolu jakosti (SOJ). Jde o armádní útvar, který velice striktně kontroluje každý parametr a každý proces. Z tkanin, které prodával, se šily uniformy, nosiče plátů a batohy pro českou, slovenskou i ukrajinskou armádu.',
        'Myron má na starosti technickou stránku každého našeho produktu — od prvního nápadu přes vývoj až po sériovou výrobu. V textilu se pohybuje od roku 2010. Pro přední české vojenské dodavatele vyvíjel produktová portfolia: batohy, uniformy, neprůstřelné vesty a CBRN obleky pro Armádu ČR, ukrajinské ozbrojené síly, policii, záchrannou službu a další státní složky. S produkty, které navrhl, tak pomohl vyhrát tendry za desítky milionů eur.',
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Často kladené otázky',
      items: [
        { q: 'Co Stratexim vyrábí?', a: 'Textil na zakázku napříč takřka všemi segmenty — obrana a IZS, průmysl, zdravotnictví, móda a merch, domácí a hotelový textil i speciální tkaniny. Pokud je to z textilu, rádi se na váš projekt podíváme — od jednoho kusu po série v desítkách tisíc.' },
        { q: 'Jaký je minimální objem objednávky?', a: 'Nemáme pevně daný minimální odběr — zvládneme prototyp i malou sérii, stejně jako výrobu v desítkách tisíc kusů. Konkrétní minimum se liší podle produktu a materiálu.' },
        { q: 'Zvládnete velkoobjemovou výrobu?', a: 'Ano. Běžně vyrábíme série v řádu desítek tisíc kusů, včetně zakázek pro armádní a státní složky.' },
        { q: 'Kde vyrábíte?', a: 'Veškerá výroba probíhá v Evropské unii (Česká republika). Pomůžeme i s přesunem sériové výroby z Asie do EU.' },
        { q: 'Jaké materiály a tkaniny nabízíte?', a: 'Tkaniny od 80 do 350 g/m², netkané textilie, filtrační tkaniny, NIR tkaniny, pleteniny, laminace a další speciální tkaniny — dodáváme je metráží nebo zabudované přímo do produktu.' },
        { q: 'Jak probíhá spolupráce?', a: 'Ukážete nám produkt nebo řeknete nápad → připravíme technické nákresy a střihy → navrhneme materiály → vyrobíme prototyp a poté sérii → každá šarže projde kontrolou kvality → zajistíme logistiku až k vám.' },
        { q: 'Jaké jsou dodací lhůty?', a: 'Orientačně počítejte přibližně s měsícem na vývoj a měsícem na výrobu. Konkrétní termín vždy potvrdíme spolu s cenovou nabídkou podle složitosti a objemu.' },
        { q: 'Kam dodáváte?', a: 'Dodáváme po celé Evropské unii, po dohodě i mimo ni.' },
        { q: 'Jak získám cenovou nabídku?', a: 'Vyplňte poptávkový formulář na této stránce nebo napište na info@stratexim.com. Ozveme se vám s materiály, termínem a cenou do dvou pracovních dnů.' },
      ],
    },
    contact: {
      kicker: 'OZVĚTE SE NÁM',
      title: 'Nezávazná poptávka',
      lead: 'Ukažte nám svůj produkt — nebo nám jen řekněte svůj nápad. Vrátíme se vám s materiály, termínem a cenou. Napište si o nabídku ještě dnes.',
      form: {
        languageValue: 'CZ',
        companyPh: 'Firma / jméno *',
        companyAria: 'Firma / jméno',
        emailPh: 'E-mail *',
        emailAria: 'E-mail',
        segmentPh: 'Segment *',
        segmentAria: 'Segment',
        segmentOptions: ['Obrana + IZS', 'Průmysl', 'Zdravotnictví & ochrana', 'Móda & merch', 'Domácí a hotelový textil', 'Speciální tkaniny', 'Jiné'],
        volumePh: 'Odhadovaný objem (ks)',
        volumeAria: 'Odhadovaný objem v kusech',
        messagePh: 'Popište svůj produkt nebo nápad *',
        messageAria: 'Popište svůj produkt nebo nápad',
        noteBefore: 'Odesláním souhlasíte, že vás ohledně poptávky můžeme kontaktovat. Více v ',
        noteLink: 'Zásadách ochrany osobních údajů',
        noteAfter: '.',
        submit: 'ODESLAT POPTÁVKU',
        statusOk: 'Děkujeme — ozveme se vám do dvou pracovních dnů.',
        statusErr: 'Odeslání se nezdařilo. Napište nám prosím přímo na info@stratexim.com.',
      },
      or: 'nebo se nám ozvěte přímo:',
      followIntro: 'Sledujte nás také na LinkedInu!',
      followCta: 'Sledovat na LinkedInu',
      linkedinAria: 'Sledovat Stratexim na LinkedInu',
    },
    footer: {
      rights: 'Všechna práva vyhrazena.',
      companyText: 'STRATEXIM je značka společnosti Bonimport Global s.r.o. · IČO 23035650 · DIČ CZ23035650 · Čujkovova 1714/21, 700 30 Ostrava · +420 776 655 106',
      privacyLabel: 'Ochrana osobních údajů',
    },
    legal: {
      metaTitle: 'Zásady ochrany osobních údajů | Stratexim',
      metaDescription: 'Jak Stratexim (Bonimport Global s.r.o.) nakládá s osobními údaji zadanými přes poptávkový formulář na webu.',
      back: '← Zpět na web',
      heading: 'Zásady ochrany osobních údajů',
      updated: 'Poslední aktualizace: 7. července 2026',
    },
    jsonld: {
      orgDescription: 'Komplexní textilní řešení: technické nákresy, materiály, výroba, kontrola kvality a logistika. Obranný, průmyslový, zdravotnický, módní a domácí textil, vyrobeno v České republice.',
      slogan: 'Preciznost · Odolnost · Inovace',
      knowsAbout: ['Zakázková výroba textilu', 'Taktické a obranné textilie', 'Neprůstřelné vesty', 'Nosiče plátů', 'CBRN obleky', 'Pracovní oděvy a ochranné tkaniny', 'Zdravotnický a nemocniční textil', 'Hotelový a domácí textil', 'Vlastní řady oblečení a firemní merch', 'Technické a speciální tkaniny'],
      offerCatalogName: 'Textilní segmenty',
      offerCatalog: ['Obrana + IZS', 'Průmysl', 'Zdravotnictví & ochrana', 'Móda & merch', 'Domácí a hotelový textil', 'Speciální tkaniny'],
      availableLanguage: ['Czech', 'English', 'German'],
    },
  },

  /* ======================================================================= */
  /* GERMAN                                                                   */
  /* ======================================================================= */
  de: {
    htmlLang: 'de',
    canonical: 'https://stratexim.com/de/',
    meta: {
      title: 'Lohnkonfektion & technische Textilien aus der EU | Stratexim',
      description:
        'Lohnkonfektion und Lohnnäherei aus Tschechien — von der technischen Zeichnung bis zur Serienproduktion. Schutz-, Industrie-, Medizin- und Hoteltextilien.',
      ogTitle: 'Stratexim | Lohnkonfektion & technische Textilien aus der EU',
      ogDescription:
        'Lohnkonfektion aus Tschechien — von der Idee zum fertigen Produkt in wenigen Wochen. Entwicklung, Materialien, Produktion, Qualitätskontrolle und Logistik aus einer Hand.',
      ogImageAlt: 'Stratexim — Lohnkonfektion und technische Textilien',
      ogLocale: 'de_DE',
      ogLocaleAlt: ['en_US', 'cs_CZ'],
      twTitle: 'Stratexim | Lohnkonfektion & technische Textilien',
      twDescription:
        'Lohnkonfektion aus Tschechien — Entwicklung, Materialien, Produktion, Qualitätskontrolle und Logistik in einem Textilbüro mitten in Europa.',
    },
    nav: {
      about: 'Über uns',
      products: 'Produkte',
      team: 'Team',
      faq: 'FAQ',
      contact: 'Kontakt',
      menuAria: 'Menü',
    },
    hero: {
      motto: `PRÄZISION${NBSP}${NBSP}•${NBSP}${NBSP}LANGLEBIGKEIT${NBSP}${NBSP}•${NBSP}${NBSP}INNOVATION`,
      title: 'Wir machen Textilideen zur Realität',
      sub: 'Wir sind ein erfahrenes Textil-Designbüro mitten in Europa — in Tschechien. Ob Sie Ihre Serienproduktion aus Asien in die EU verlagern und lokale Kapazitäten brauchen, oder einfach eine Idee im Kopf haben, die Sie verwirklichen möchten — bei uns sind Sie richtig.',
      cta: 'KONTAKTIEREN SIE UNS',
      scrollAria: 'Nach unten scrollen',
    },
    about: {
      kicker: 'WER WIR SIND',
      title: 'Textil-Entwicklungsbüro in der EU',
      lead: 'Unser Team stammt aus der technischen Textilbranche für den Verteidigungssektor, in der jeder Parameter zählt – und genau diese Präzision zeichnet uns bis heute aus. Heute entwickeln und produzieren wir Textilien für alle, die höchste Qualität erwarten. Alle Produkte werden in Europa gefertigt – mit mehr als 20 Jahren Erfahrung.',
      howKicker: 'WIE WIR ARBEITEN',
      cards: [
        {
          title: 'Beratung & Entwicklung',
          body: 'Zeigen Sie uns Ihr Produkt oder schildern Sie uns einfach Ihre Idee. Wir beraten Sie und erstellen technische Zeichnungen und Schnittmuster mit professioneller Software.',
        },
        {
          title: 'Materialien & Produktion',
          body: 'Wir wählen die passenden Materialien für den jeweiligen Einsatzzweck aus und übernehmen die Produktion – vom ersten Prototyp bis hin zu Serien mit Zehntausenden von Stück.',
        },
        {
          title: 'Qualität & Logistik',
          body: 'Jede Charge durchläuft vor dem Versand die Qualitätskontrolle — und die Logistik übernehmen wir, damit das fertige Produkt genau dort ankommt, wo Sie es brauchen.',
        },
      ],
    },
    products: {
      kicker: 'WAS WIR FERTIGEN',
      title: 'Textilien aus unserer Lohnkonfektion',
      lead: 'Von beschusshemmenden Westen bis zur Hotelbettwäsche – wenn es um Textilien geht, entwickeln und fertigen wir sie. Fünf Branchen, für die wir arbeiten – und die Spezialgewebe, auf denen sie basieren.',
      segments: [
        {
          name: 'Verteidigung & BOS',
          photos: [
            { alt: 'Militäruniform', title: 'Militäruniform', desc: 'Bequemer Schnitt, moderne PA+Stretch-Gewebe, NIR-konform.' },
            { alt: 'Taktischer Rucksack', title: 'Rucksäcke', desc: 'Modernes Design, praktische Taschen, belüfteter Rücken, hochwertige Materialien.' },
          ],
          blurb: 'Für Militär, Polizei, Feuerwehr und Rettungsdienste. Ausrüstung, die unter härtesten Bedingungen zuverlässig funktionieren muss.',
          chips: ['Beschusshemmende Westen', 'Plattenträger', 'CBRN-Schutzanzüge', 'Uniformen', 'Magazintaschen', 'Rucksäcke', 'Schlafsäcke'],
        },
        {
          name: 'Industrie',
          photos: [
            { alt: 'Schnittschutzhandschuhe', title: 'Schnittschutzhandschuhe', desc: 'Textilhandschuhe, die die Hände bei der täglichen Arbeit mit Klingen schützen.' },
            { alt: 'Taschen und Etuis nach Maß', title: 'Taschen & Etuis', desc: 'Maßgefertigte Taschen und Etuis, exakt für Ihre Produkte.' },
          ],
          blurb: 'Textilien für Ihre Produktion. Maßgefertigt für Ihr Produkt und just-in-time geliefert.',
          chips: ['Taschen & Umhängetaschen', 'Abdeckungen & Planen', 'Arbeitskleidung', 'Automotive-Textilien', 'Schutzhandschuhe', 'Schnittschutzhandschuhe', 'Gehörschutz'],
        },
        {
          name: 'Medizin & Hygiene',
          photos: [
            { alt: 'Matratzenschoner mit PU-Beschichtung', title: 'PU-beschichteter Matratzenschoner', desc: 'Eine wasserdichte Schicht verhindert, dass Flüssigkeiten bis zur Matratze durchdringen.' },
            { alt: 'Krankenhausbettwäsche', title: 'Krankenhausbettwäsche', desc: `100${NBSP}% Baumwolle, waschbar bei 95${NBSP}°C, chemisch reinigbar.` },
          ],
          blurb: 'Textilien für Bereiche mit hohen Hygieneanforderungen, entwickelt für industrielle Waschzyklen.',
          chips: ['Matratzenschoner', 'Krankenhausbekleidung', 'Wasserdichte Bettlaken', 'Krankenhausbettwäsche', 'Atemschutzmasken & Mund-Nasen-Masken', 'Handtücher'],
        },
        {
          name: 'Fashion & Merch',
          photos: [
            { alt: 'Eigene Modelinie', title: 'Eigene Modelinie', desc: 'Kleinserien – von der Skizze bis zum fertigen Produkt. Mit eigenen Etiketten, Accessoires und Verpackungen.' },
            { alt: 'Firmen-Merch Hoodie', title: 'Firmen-Merch', desc: 'Hochwertige Hoodies, T-Shirts und Mützen mit Ihrem Logo — hochwertig verarbeitet.' },
          ],
          blurb: 'Sie bringen eine Marke oder eine Kollektionsidee mit — wir übernehmen Design, Bemusterung und Produktion. Kleidung, die Menschen wirklich gerne tragen.',
          chips: ['Eigene Bekleidungslinien', 'Firmen-Merch', 'Werbetextilien', 'Corporate Wear'],
        },
        {
          name: 'Heim- & Hoteltextilien',
          photos: [
            { alt: 'Handtücher 400–700 g/m²', title: 'Handtücher & Badetücher', desc: 'Von 400 bis 700 g/m² – dicht gewebt, saugstark und in vielen Farben erhältlich' },
            { alt: 'Frottee-Bademantel', title: 'Frottee-Bademäntel', desc: 'Damit sich Ihre Gäste in Ihrem Wellnessbereich rundum wohlfühlen.' },
          ],
          blurb: 'Bequem für zuhause, robust genug für den Hotelbetrieb.',
          chips: ['Bettwäsche', 'Badmatten', 'Bademäntel', 'Handtücher'],
        },
        {
          name: 'Spezialgewebe',
          photos: [
            { alt: 'Technische Schutzgewebe', title: 'Schutzgewebe', desc: 'Schnittfeste, ballistische und flammhemmende Gewebe.' },
            { alt: 'Membran- und beschichtete Gewebe', title: 'Membran- & beschichtete Gewebe', desc: 'Wasserdicht, atmungsaktiv, antibakteriell sowie antistatisch — als Meterware erhältlich.' },
          ],
          blurb: 'Die Materialien hinter allem — als Meterware geliefert oder direkt in Ihrem Produkt verarbeitet.',
          chips: ['Schnittfest', 'Stichfest', 'Ballistisch', 'Flammhemmend', 'Membran', 'Antimykotisch', 'Hydrophob', 'Antibakteriell', 'Antistatisch', 'UV-beständig'],
        },
      ],
    },
    team: {
      kicker: 'FÜHRUNG',
      title: 'Die Gründer',
      tagline: 'Gemeinsam bringen wir mehr als 20 Jahre Erfahrung in Ihr Projekt ein.',
      bios: [
        'Tomáš verantwortet Vertrieb, Finanzen und die Gesamtleitung des Unternehmens. Zuvor leitete er bei einem der größten tschechischen Textilveredler die Sparte für Militär- und technische Textilien. Er belieferte führende Unternehmen der Branche mit Spezialprodukten und arbeitete eng mit der staatlichen Qualitätskontrollbehörde (SOJ) zusammen. Es handelt sich um eine militärische Prüfstelle, die jeden Parameter und jeden Prozess äußerst streng kontrolliert. Aus den von ihm gelieferten Geweben wurden Uniformen, Plattenträger und Rucksäcke für die tschechischen, slowakischen und ukrainischen Streitkräfte hergestellt.',
        'Myron verantwortet die technische Entwicklung all unserer Produkte – von der ersten Idee über die Entwicklung bis hin zur Serienproduktion. Seit 2010 ist er in der Textilbranche tätig. Für führende tschechische Hersteller von Militärausrüstung entwickelte er Produktportfolios mit Rucksäcken, Uniformen, beschusshemmenden Westen und CBRN-Schutzanzügen für die tschechischen Streitkräfte, die ukrainischen Streitkräfte, die Polizei, Rettungsdienste und weitere staatliche Behörden. Mit den von ihm entwickelten Produkten trug er dazu bei, Ausschreibungen im Wert von mehreren zehn Millionen Euro zu gewinnen.',
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Häufig gestellte Fragen',
      items: [
        { q: 'Was fertigt Stratexim?', a: 'Textilien nach Maß in nahezu allen Segmenten — Verteidigung & BOS, Industrie, Medizin, Fashion & Merch, Heim- & Hoteltextilien sowie Spezialgewebe. Wenn es aus Textil ist, schauen wir uns Ihr Projekt gerne an — vom Einzelstück bis zu Serien von Zehntausenden.' },
        { q: 'Wie hoch ist die Mindestbestellmenge?', a: 'Wir haben keine feste Mindestmenge — wir realisieren Prototypen und Kleinserien ebenso wie Produktionsläufe von Zehntausenden. Das genaue Minimum hängt von Produkt und Material ab.' },
        { q: 'Bewältigen Sie Großserienproduktion?', a: 'Ja. Wir fertigen regelmäßig Serien im Bereich von Zehntausenden Stück, einschließlich Aufträgen für Militär und staatliche Stellen.' },
        { q: 'Wo produzieren Sie?', a: 'Die gesamte Produktion findet in der Europäischen Union (Tschechien) statt. Wir unterstützen auch bei der Verlagerung der Serienproduktion aus Asien in die EU.' },
        { q: 'Welche Materialien und Gewebe bieten Sie an?', a: 'Gewebe von 80 bis 350 g/m², Vliesstoffe, Filtergewebe, NIR-Gewebe, Gestricke, Laminierung und weitere Spezialgewebe — als Meterware oder direkt in Ihr Produkt verarbeitet.' },
        { q: 'Wie läuft die Zusammenarbeit ab?', a: 'Sie zeigen uns ein Produkt oder nennen uns Ihre Idee → wir erstellen technische Zeichnungen und Schnitte → wir schlagen Materialien vor → wir fertigen einen Prototyp und dann die Serie → jede Charge durchläuft die Qualitätskontrolle → wir übernehmen die Logistik bis zu Ihnen.' },
        { q: 'Wie sind die Lieferzeiten?', a: 'Als Richtwert rechnen Sie mit etwa einem Monat für die Entwicklung und einem Monat für die Produktion. Den genauen Termin bestätigen wir mit dem Angebot, je nach Komplexität und Menge.' },
        { q: 'Wohin liefern Sie?', a: 'In die gesamte Europäische Union, nach Absprache auch darüber hinaus.' },
        { q: 'Wie erhalte ich ein Angebot?', a: 'Füllen Sie das Anfrageformular auf dieser Seite aus oder schreiben Sie an info@stratexim.com. Wir melden uns innerhalb von zwei Werktagen mit Materialien, Zeitplan und Preis.' },
      ],
    },
    contact: {
      kicker: 'MELDEN SIE SICH',
      title: 'Angebot anfordern',
      lead: 'Zeigen Sie uns Ihr Produkt — oder erzählen Sie uns einfach Ihre Idee. Sie erhalten von uns einen Materialvorschlag, einen Zeitplan und ein individuelles Angebot. Fordern Sie noch heute ein unverbindliches Angebot an.',
      form: {
        languageValue: 'DE',
        companyPh: 'Firma / Name *',
        companyAria: 'Firma / Name',
        emailPh: 'E-Mail *',
        emailAria: 'E-Mail',
        segmentPh: 'Segment *',
        segmentAria: 'Segment',
        segmentOptions: ['Verteidigung & BOS', 'Industrie', 'Medizin & Hygiene', 'Fashion & Merch', 'Heim- & Hoteltextilien', 'Spezialgewebe', 'Sonstiges'],
        volumePh: 'Geschätzte Bestellmenge (Stück)',
        volumeAria: 'Geschätzte Bestellmenge in Stück',
        messagePh: 'Beschreiben Sie Ihr Produkt oder Ihre Idee *',
        messageAria: 'Beschreiben Sie Ihr Produkt oder Ihre Idee',
        noteBefore: 'Mit dem Absenden stimmen Sie zu, dass wir Sie zu Ihrer Anfrage kontaktieren dürfen. Mehr in unserer ',
        noteLink: 'Datenschutzerklärung',
        noteAfter: '.',
        submit: 'ANFRAGE ABSENDEN',
        statusOk: 'Vielen Dank — wir melden uns innerhalb von zwei Werktagen.',
        statusErr: 'Die Anfrage konnte nicht gesendet werden. Bitte schreiben Sie uns direkt an info@stratexim.com.',
      },
      or: 'oder erreichen Sie uns direkt:',
      followIntro: 'Folgen Sie uns auch auf LinkedIn!',
      followCta: 'Auf LinkedIn folgen',
      linkedinAria: 'Stratexim auf LinkedIn folgen',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      companyText: 'STRATEXIM ist eine Marke der Bonimport Global s.r.o. · ID-Nr. 23035650 · USt-IdNr. CZ23035650 · Čujkovova 1714/21, 700 30 Ostrava, Tschechien · +420 776 655 106',
      privacyLabel: 'Datenschutz & Impressum',
    },
    legal: {
      metaTitle: 'Datenschutzerklärung & Impressum | Stratexim',
      metaDescription: 'Wie Stratexim (Bonimport Global s.r.o.) personenbezogene Daten aus dem Anfrageformular der Website verarbeitet. Mit Impressum.',
      back: '← Zurück zur Website',
      heading: 'Datenschutzerklärung & Impressum',
      updated: 'Zuletzt aktualisiert: 7. Juli 2026',
    },
    jsonld: {
      orgDescription: 'Textil-Komplettlösung: technische Zeichnungen, Materialien, Produktion, Qualitätskontrolle und Logistik. Verteidigungs-, Industrie-, Medizin-, Fashion- und Heimtextilien, gefertigt in Tschechien.',
      slogan: 'Präzision · Langlebigkeit · Innovation',
      knowsAbout: ['Textilproduktion nach Maß', 'Taktische und Verteidigungstextilien', 'Beschusshemmende Westen', 'Plattenträger', 'CBRN-Schutzanzüge', 'Arbeitskleidung und Schutzgewebe', 'Medizin- und Krankenhaustextilien', 'Hotel- und Heimtextilien', 'Eigene Modelinien und Firmen-Merch', 'Technische und Spezialgewebe'],
      offerCatalogName: 'Textilsegmente',
      offerCatalog: ['Verteidigung & BOS', 'Industrie', 'Medizin & Hygiene', 'Fashion & Merch', 'Heim- & Hoteltextilien', 'Spezialgewebe'],
      availableLanguage: ['German', 'English', 'Czech'],
    },
  },
} as const;

export type Translation = (typeof translations)[Lang];
