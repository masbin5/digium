
import Image from "next/image";

const waNumber = "6281774178707";

const waLink = (message: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

const services = [
  {
    icon: "⌘",
    title: "Website & Landing Page",
    description:
      "Halaman bisnis untuk menampilkan profil, layanan, galeri, dan tombol WhatsApp dalam satu tempat.",
    note: "Untuk bisnis yang ingin tampil profesional",
  },
  {
    icon: "▤",
    title: "Katalog Digital",
    description:
      "Tampilkan produk, layanan, dan harga dengan rapi agar calon pelanggan lebih mudah melihat pilihan.",
    note: "Cocok untuk toko dan usaha rumahan",
  },
  {
    icon: "▦",
    title: "Menu QR",
    description:
      "Menu digital yang dapat diakses lewat QR Code, praktis untuk kafe, kedai, dan usaha kuliner.",
    note: "Menu lebih praktis diakses",
  },
  {
    icon: "✳",
    title: "Desain Media Sosial",
    description:
      "Konten visual yang konsisten untuk memperkuat identitas bisnis di Instagram dan platform sosial.",
    note: "Bangun brand yang konsisten",
  },
  {
    icon: "⌖",
    title: "Profil Bisnis Google",
    description:
      "Bantuan menyiapkan atau merapikan profil bisnis agar pelanggan lebih mudah menemukan usaha di Google.",
    note: "Untuk bisnis lokal dan area layanan",
  },
  {
    icon: "✦",
    title: "Identitas Visual",
    description:
      "Logo dan elemen visual dasar agar bisnis memiliki tampilan yang lebih mudah dikenali.",
    note: "Mulai membangun identitas brand",
  },
];

const plans = [
  {
    name: "DIGIUM Start",
    price: "Rp199.000",
    description: "Katalog digital sederhana untuk mulai tampil online.",
    features: [
      "Katalog/menu digital satu halaman",
      "Informasi produk dan harga",
      "Tombol kontak WhatsApp",
      "QR Code menuju katalog",
      "1 kali revisi minor",
    ],
    message: "Halo DIGIUM, saya tertarik paket DIGIUM Start.",
  },
  {
    name: "DIGIUM Grow",
    price: "Rp599.000",
    description: "Landing page untuk memperkenalkan bisnis dengan profesional.",
    features: [
      "Landing page sederhana",
      "Profil, layanan, dan galeri",
      "Tombol WhatsApp",
      "Tampilan ramah HP",
      "1 kali revisi minor",
    ],
    message: "Halo DIGIUM, saya tertarik paket DIGIUM Grow.",
    featured: true,
  },
  {
    name: "DIGIUM Social",
    price: "Rp399.000",
    suffix: "/ bulan",
    description: "Konten visual rutin untuk menjaga media sosial bisnis tetap aktif.",
    features: [
      "8 desain konten statis",
      "Penyesuaian identitas brand",
      "Caption sederhana",
      "1 kali revisi per desain",
      "Materi foto dari klien",
    ],
    message: "Halo DIGIUM, saya tertarik paket DIGIUM Social.",
  },
];

const concepts = [
  {
    title: "La Farine",
    category: "Bakery Website · Landing Page",
    className: "food",
    headline: "Roti Segar, Setiap Hari",
    description:
      "Website toko roti dengan tampilan produk bakery yang menarik.",
    link: "https://toko-roti-lafarine.vercel.app/",
  },
  {
    title: "SehatKu",
    category: "Health Website · UI/UX",
    className: "web",
    headline: "Kesehatan dalam Genggaman",
    description:
      "Website informasi kesehatan dengan desain modern dan responsif.",
    link: "https://sehatku-web.vercel.app/",
  },
  {
    title: "Rara BYD Palmerah",
    category: "Automotive · Sales Website",
    className: "laundry",
    headline: "One Lineup. Endless Possibilities.",
    description:
      "Website otomotif untuk menampilkan informasi kendaraan dan menghubungkan calon pelanggan dengan sales.",
    link: "https://www.rarabydpalmerah.com/",
  },
  {
    title: "DuniaWaralaba",
    category: "Business Directory · Web Platform",
    className: "social",
    headline: "Temukan Peluang. Bangun Bisnis.",
    description:
      "Platform direktori waralaba untuk membantu pengguna menjelajahi peluang bisnis.",
    link: "https://duniawaralaba.vercel.app/",
  },
];

export default function Home() {
  const mainMessage =
    "Halo DIGIUM, saya ingin konsultasi layanan digital untuk usaha saya.";

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#" aria-label="DIGIUM beranda">
            <Image
              src="/logo-digium.png"
              alt="DIGIUM"
              width={300}
              height={100}
              priority
              className="brand-logo"
              style={{
                width: "150px",
                height: "50px",
                objectFit: "contain",
              }}
            />
          </a>

          <nav className="nav-links" aria-label="Navigasi utama">
            <a href="#layanan">Layanan</a>
            <a href="#paket">Paket</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#tentang">Tentang</a>
          </nav>

          <a
            className="button button-primary nav-cta"
            href={waLink(mainMessage)}
            target="_blank"
            rel="noreferrer"
          >
            Konsultasi Gratis <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="dot" /> DIGITAL AGENCY UNTUK UMKM
              </div>

              <h1>
                Bantu Usaha Lokal <span>Naik Kelas.</span>
              </h1>

              <p>
                Kami membantu UMKM tampil lebih profesional di dunia digital
                melalui website, katalog digital, dan desain media sosial yang
                simpel, terjangkau, dan tepat sasaran.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={waLink(mainMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Mulai Konsultasi <span>↗</span>
                </a>

                <a className="button button-outline-light" href="#layanan">
                  Lihat Layanan <span>↓</span>
                </a>
              </div>

              <div className="trustline">
                <span><b>✓</b> Solusi sesuai kebutuhan</span>
                <span><b>✓</b> Ramah untuk UMKM</span>
                <span><b>✓</b> Komunikasi langsung</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Ilustrasi katalog digital">
              <div className="preview-card">
                <div className="preview-top">
                  <strong>
                    <i>D</i>IGIUM <small>DIGITAL STUDIO</small>
                  </strong>
                  <span className="online"><b /> Online</span>
                </div>

                <div className="store-cover">
                  <strong>Kenalkan bisnis<br />Anda lebih luas.</strong>
                  <span>Produk lokal, pengalaman terbaik.</span>
                </div>

                <div className="preview-stats">
                  <div><b>01</b><span>Website</span></div>
                  <div><b>02</b><span>Katalog digital</span></div>
                  <div><b>03</b><span>Desain konten</span></div>
                </div>
              </div>

              <div className="floating-tag">
                Solusi digital untuk UMKM <span>✓</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="layanan">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow eyebrow-light">APA YANG KAMI KERJAKAN</div>
              <h2>Mulai digital, tanpa ribet.</h2>
              <p>
                Solusi praktis untuk membantu bisnis lokal punya tampilan
                online yang lebih rapi dan mudah ditemukan pelanggan.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span>{service.note} ↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="tentang">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow eyebrow-light">CARA KERJA DIGIUM</div>
              <h2>Jelas dari awal sampai selesai.</h2>
              <p>
                Proses sederhana supaya pemilik usaha tahu apa yang dikerjakan,
                berapa biayanya, dan apa yang akan diterima.
              </p>
            </div>

            <div className="steps-grid">
              <article className="step">
                <div>01</div>
                <h3>Ceritakan kebutuhan</h3>
                <p>
                  Kami memahami jenis usaha, target pelanggan, dan tujuan yang
                  ingin dicapai.
                </p>
              </article>

              <article className="step">
                <div>02</div>
                <h3>Pilih solusi yang pas</h3>
                <p>
                  Kami menyepakati lingkup pekerjaan, harga, waktu pengerjaan,
                  dan jumlah revisi sebelum mulai.
                </p>
              </article>

              <article className="step">
                <div>03</div>
                <h3>Review dan serah terima</h3>
                <p>
                  Tinjau hasil, sampaikan revisi sesuai kesepakatan, lalu
                  terima hasil akhir.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="paket">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow eyebrow-light">PAKET LAYANAN</div>
              <h2>Pilih langkah pertama bisnismu.</h2>
              <p>
                Harga perkenalan untuk kebutuhan dasar UMKM. Harga final
                menyesuaikan lingkup pekerjaan setelah konsultasi.
              </p>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`price-card${plan.featured ? " featured" : ""}`}
                  key={plan.name}
                >
                  {plan.featured && (
                    <span className="popular">Pilihan untuk mulai</span>
                  )}

                  <h3>{plan.name}</h3>

                  <div className="price">
                    {plan.price} {plan.suffix && <span>{plan.suffix}</span>}
                  </div>

                  <p>{plan.description}</p>

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <a
                    className={`button ${
                      plan.featured ? "button-primary" : "button-outline"
                    }`}
                    href={waLink(plan.message)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tanya Paket <span>↗</span>
                  </a>
                </article>
              ))}
            </div>

            <p className="fine-print">
              Domain, hosting berbayar, iklan, foto/video di lokasi, dan fitur
              tambahan tidak termasuk kecuali tertulis dalam penawaran.
            </p>
          </div>
        </section>

        <section className="section section-soft" id="portofolio">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow eyebrow-light">PORTOFOLIO PROYEK</div>
              <h2>Website yang telah kami kerjakan.</h2>
              <p>
                Jelajahi beberapa proyek website dengan kebutuhan dan karakter
                bisnis yang berbeda. Klik proyek untuk melihat website
                langsung.
              </p>
            </div>

            <div className="portfolio-grid">
              {concepts.map((item) => (
                <a
                  className="portfolio-card"
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lihat website ${item.title}`}
                >
                  <div className={`portfolio-art ${item.className}`}>
                    <strong>
                      {item.headline.split("\n").map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </strong>
                  </div>

                  <div className="portfolio-info">
                    <b>{item.title}</b>
                    <span>{item.category}</span>
                    <span className="portfolio-link">Lihat Website ↗</span>
                  </div>
                </a>
              ))}
            </div>

            <p className="fine-print">
              Setiap tautan akan membuka website proyek di tab baru.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta">
              <div>
                <h2>Siap bawa usahamu ke dunia digital?</h2>
                <p>
                  Ceritakan kebutuhan bisnismu. Kita diskusikan solusi yang
                  sesuai dengan tujuan dan anggaran usaha.
                </p>
              </div>

              <a
                className="button button-primary"
                href={waLink(mainMessage)}
                target="_blank"
                rel="noreferrer"
              >
                Chat DIGIUM di WhatsApp ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow eyebrow-light">PERTANYAAN UMUM</div>
              <h2>Yang perlu kamu tahu.</h2>
            </div>

            <div className="faq">
              <details>
                <summary>Apakah DIGIUM hanya melayani usaha besar?</summary>
                <p>
                  Tidak. DIGIUM dirancang untuk membantu UMKM, bisnis rumahan,
                  dan usaha lokal yang ingin mulai tampil lebih profesional
                  secara digital.
                </p>
              </details>

              <details>
                <summary>Apakah harus punya domain sendiri?</summary>
                <p>
                  Tidak selalu. Untuk beberapa solusi sederhana, kita bisa
                  mendiskusikan opsi gratis terlebih dahulu. Domain sendiri
                  dan hosting berbayar dapat dipertimbangkan jika memang
                  dibutuhkan.
                </p>
              </details>

              <details>
                <summary>Bagaimana cara memulai?</summary>
                <p>
                  Hubungi DIGIUM melalui WhatsApp, ceritakan jenis usaha dan
                  kebutuhanmu, lalu sepakati ruang lingkup, harga, dan jadwal
                  sebelum pekerjaan dimulai.
                </p>
              </details>

              <details>
                <summary>Apakah harga di website sudah final?</summary>
                <p>
                  Harga yang ditampilkan adalah harga perkenalan untuk lingkup
                  dasar. Kebutuhan khusus akan dikonfirmasi dan disepakati
                  sebelum pengerjaan.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <div>
            <a className="brand brand-footer" href="#" aria-label="DIGIUM beranda">
              <Image
                src="/logo-digium-white.png"
                alt="DIGIUM"
                width={300}
                height={100}
                className="brand-logo"
                style={{
                  width: "150px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </a>

            <p>Bantu Usaha Lokal Naik Kelas.</p>
            <p>© {new Date().getFullYear()} DIGIUM Digital Agency.</p>
          </div>

          <div className="footer-links">
            <a href="#layanan">Layanan</a>
            <a href="#paket">Paket</a>
            <a href="#portofolio">Portofolio</a>
            <a
              href={waLink("Halo DIGIUM, saya ingin bertanya tentang layanan.")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={waLink("Halo DIGIUM, saya ingin bertanya tentang layanan.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat DIGIUM melalui WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.2 1.7 6L.2 24l6.4-1.7a11.8 11.8 0 0 0 5.5 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.1 21.7c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.1 4.6Zm5.4-7.3c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.4.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.3s1 2.6 1.1 2.8c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </>
  );
}
