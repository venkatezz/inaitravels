import React from 'react';
import { motion } from 'framer-motion';
import { Train, Plane, Bus, CheckCircle } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Explore = () => {
  const phoneNumber = "916369284551";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello INAI Travels, I'd like to plan a trip.")}`;

  const destinations = [
    { name: "Ooty", sub: "Queen of Hill Stations", img: "/images/ooty_unique.png", km: "86 km" },
    { name: "Coonoor", sub: "Tea Garden Paradise", img: "/images/coonoor_unique.png", km: "76 km" },
    { name: "Valparai", sub: "Misty Rainforest Town", img: "/images/valparai_unique.png", km: "104 km" },
    { name: "Pollachi", sub: "Gateway to Wildlife", img: "/images/pollachi_unique.png", km: "40 km" },
    { name: "Palakkad", sub: "Kerala Border City", img: "/images/palakkad_unique.png", km: "55 km" },
  ];

  const temples = [
    { name: "Marudamalai Temple", sub: "Lord Murugan, Coimbatore", img: "/images/temple_dest.png" },
    { name: "Isha Yoga Center", sub: "Adiyogi Statue, Velliangiri", img: "/images/isha_yoga.png" },
    { name: "Palani Murugan Temple", sub: "Palani, Hill Temple view", img: "/images/palani_temple.png" },
  ];

  const transports = [
    { icon: <Train size={28} />, name: "Coimbatore Railway Station", sub: "All train pickups & drops" },
    { icon: <Plane size={28} />, name: "Coimbatore Airport (CJB)", sub: "24/7 airport transfers" },
    { icon: <Bus size={28} />, name: "Gandhipuram Bus Stand", sub: "City & inter-city transfers" },
  ];

  return (
    <div className="explore-page">
      <style dangerouslySetInnerHTML={{
        __html: `
        .explore-hero {
          background: linear-gradient(rgba(0,33,71,0.85), rgba(0,33,71,0.85)), url('/images/coimbatore_scenic.png');
          background-size: cover; background-position: center;
          padding: 10rem 0 6rem; text-align: center; color: white;
        }

        .dest-card {
          border-radius:18px; overflow:hidden; position:relative;
          height:180px; cursor:pointer; transition:0.35s;
          box-shadow:0 6px 25px rgba(0,0,0,0.1);
        }
        .dest-card:hover { transform:translateY(-6px) scale(1.02); }
        .dest-card img { width:100%; height:100%; object-fit:cover; transition: 0.5s; }
        .dest-card:hover img { transform: scale(1.1); }
        .dest-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%);
          display:flex; flex-direction:column; justify-content:flex-end; padding:1.25rem;
        }
        .dest-name { color:white; font-size:1.3rem; font-weight:900; margin:0; }
        .dest-sub  { color:rgba(255,255,255,0.9); font-size:0.82rem; margin:0; }
        .dest-km   { position:absolute; top:0.9rem; right:0.9rem; background:var(--accent); color:var(--primary); padding:0.25rem 0.7rem; border-radius:20px; font-weight:800; font-size:0.78rem; }

        /* ── Temples ── */
        .temple-card {
          border-radius:18px; overflow:hidden; position:relative;
          height:190px; transition:0.35s;
          box-shadow:0 6px 25px rgba(0,0,0,0.1);
        }
        .temple-card:hover { transform:translateY(-6px); }
        .temple-card img { width:100%; height:100%; object-fit:cover; transition: 0.5s; }
        .temple-card:hover img { transform: scale(1.08); }
        .temple-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top, rgba(120,40,0,0.8) 0%, transparent 60%);
          display:flex; flex-direction:column; justify-content:flex-end; padding:1.25rem;
        }
        .temple-name { color:white; font-size:1.2rem; font-weight:900; margin:0; }
        .temple-sub  { color:rgba(255,255,255,0.85); font-size:0.82rem; margin:0.2rem 0 0; }

        /* ── Transport ── */
        .transport-card {
          background:white; border-radius:18px; padding:1.25rem;
          border:1px solid #eee; display:flex; gap:1.25rem; align-items:center;
          box-shadow:0 4px 20px rgba(0,0,0,0.05); transition:0.3s;
        }
        .transport-card:hover { border-color:var(--accent); transform:translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
        .t-icon { width:60px; height:60px; background:#f0f4f8; color:var(--primary); border-radius:14px; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:0.3s; }
        .transport-card:hover .t-icon { background:var(--accent); }

        /* ── General ── */
        .sec-label { font-size:0.85rem; font-weight:900; color:var(--primary); text-transform:uppercase; letter-spacing:3px; margin-bottom:0.75rem; opacity:0.8; }
        .section-cta-row { text-align: center; margin-top: 3rem; }
        .btn-big-wa { 
          display: inline-flex; align-items: center; gap: 1rem;
          background: var(--accent); color: var(--primary);
          padding: 1.2rem 2.8rem; border-radius: 15px;
          font-weight: 900; font-size: 1.1rem; text-decoration: none;
          box-shadow: 0 10px 25px rgba(255,204,0,0.3);
          transition: 0.3s;
        }
        .btn-big-wa:hover { transform: translateY(-3px); box-shadow: 0 15px 35px rgba(255,204,0,0.4); }
        
        .compact-section { padding: 2.25rem 0; }
        
        @media (max-width: 768px) {
          .dest-card { height: 150px; }
          .temple-card { height: 160px; }
          .transport-card { padding: 1rem; gap: 1rem; }
          .t-icon { width: 45px; height: 45px; }
          .dest-name { font-size: 1.15rem; }
          .temple-name { font-size: 1.1rem; }
          .btn-big-wa { padding: 1rem 1.5rem; font-size: 0.95rem; width: 100%; justify-content: center; }
          .explore-hero h1 { font-size: 2.4rem !important; }
        }
      `}} />

      <section className="explore-hero">
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 900 }}>Explore South India</h1>
          <p style={{ opacity: 0.9, fontSize: '1.3rem', maxWidth: '750px', margin: '0 auto', fontWeight: 500 }}>
            Discover breathtaking hill stations, sacred temples, and seamless travel connections across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* HILL STATIONS ESCAPE */}
      <section className="compact-section bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <p className="sec-label">NATURE CALLS</p>
              <h2 style={{ fontSize: '2.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Refresh in the <br />
                <span style={{ color: 'var(--primary)', borderBottom: '4px solid var(--accent)' }}>Evergreen Hills</span>
              </h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                From the misty hairpins of Valparai to the sprawling tea estates of Ooty, let us take you through the most scenic routes of South India in absolute comfort.
              </p>
              <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                {["Private Hill Station Packages", "Customizable Sightseeing Tours", "Premium Group Travel Support"].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <CheckCircle size={20} style={{ color: 'var(--whatsapp)', flexShrink: 0 }} />
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1rem' }}>{s}</p>
                  </div>
                ))}
              </div>
              <a href={waLink} className="btn-big-wa" style={{ width: 'auto' }}>
                <WhatsAppIcon size={20} /> PLAN YOUR HILL TRIP
              </a>
            </div>
            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                <img src="/images/hills_dest.png" alt="Tamil Nadu Hill Station" style={{ width: '100%', display: 'block' }} loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="compact-section bg-light">
        <div className="container">
          <div className="section-title" style={{ marginBottom: '1.75rem' }}>
            <p className="sec-label">POPULAR ROUTES</p>
            <h2 style={{ fontSize: '2.4rem' }}>Nearby Escapes</h2>
            <p style={{ fontSize: '1.1rem' }}>Hand-picked routes near Coimbatore for your next perfect getaway.</p>
          </div>
          <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {destinations.map((d, i) => (
              <motion.div key={i} className="dest-card"
                initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <img src={d.img} alt={d.name} loading="lazy" />
                <div className="dest-overlay">
                  <p className="dest-name">{d.name}</p>
                  <p className="dest-sub">{d.sub}</p>
                </div>
                <span className="dest-km">{d.km}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPIRITUAL JOURNEYS */}
      <section className="compact-section bg-white">
        <div className="container">
          <div className="section-title" style={{ marginBottom: '1.75rem' }}>
            <p className="sec-label">SPIRITUAL JOURNEYS</p>
            <h2 style={{ fontSize: '2.4rem' }}>Temple & Divine Tours</h2>
            <p style={{ fontSize: '1.1rem' }}>Peaceful and professional travel to the region's most sacred destinations.</p>
          </div>
          <div className="grid grid-3">
            {temples.map((t, i) => (
              <motion.div key={i} className="temple-card"
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <img src={t.img} alt={t.name} loading="lazy" />
                <div className="temple-overlay">
                  <p className="temple-name">{t.name}</p>
                  <p className="temple-sub">{t.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPORT POINTS */}
      <section className="compact-section bg-light" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '1.75rem' }}>
            <p className="sec-label">EASY TRANSFERS</p>
            <h2 style={{ fontSize: '2.4rem' }}>Airport & City Links</h2>
            <p style={{ fontSize: '1.1rem' }}>Seamless connectivity to every transit hub in Coimbatore with our 24/7 fleet.</p>
          </div>
          <div className="grid grid-3">
            {transports.map((t, i) => (
              <motion.div key={i} className="transport-card"
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className="t-icon">{t.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', fontWeight: 800 }}>{t.name}</h3>
                  <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.95rem' }}>{t.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="section-cta-row">
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-big-wa">
              <WhatsAppIcon size={24} /> BOOK YOUR TRANSFER NOW
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Explore;
