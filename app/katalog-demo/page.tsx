"use client";

import { useMemo, useState } from "react";
import "./catalog.css";

const STORE = {
  name: "La Farine",
  tagline: "Freshly baked, made with love.",
  description:
    "Nikmati roti dan pastry fresh setiap hari, dibuat dengan bahan pilihan.",
  whatsapp: "6281774178707", // GANTI dengan nomor WhatsApp klien
  currency: "id-ID",
};

const CATEGORIES = ["Semua", "Roti", "Pastry", "Minuman"];

const PRODUCTS = [
  {
    id: 1,
    name: "Croissant Butter",
    category: "Pastry",
    price: 18000,
    description: "Pastry renyah dengan aroma butter yang harum.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Roti Susu",
    category: "Roti",
    price: 15000,
    description: "Roti lembut dengan rasa susu yang creamy.",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484c3?auto=format&fit=crop&w=800&q=85",
    tag: "Favorit",
  },
  {
    id: 3,
    name: "Chocolate Danish",
    category: "Pastry",
    price: 22000,
    description: "Pastry berlapis dengan cokelat yang lezat.",
    image:
      "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },
  {
    id: 4,
    name: "Sourdough Bread",
    category: "Roti",
    price: 35000,
    description: "Roti artisan dengan tekstur dan aroma khas.",
    image:
      "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=800&q=85",
    tag: "Artisan",
  },
  {
    id: 5,
    name: "Iced Latte",
    category: "Minuman",
    price: 24000,
    description: "Perpaduan espresso dan susu yang seimbang.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },
  {
    id: 6,
    name: "Cinnamon Roll",
    category: "Pastry",
    price: 20000,
    description: "Roti gulung kayu manis dengan topping manis.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=85",
    tag: "",
  },
];

type CartItem = {
  id: number;
  quantity: number;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat(STORE.currency, {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace(/\u00a0/g, " ");
}

export default function KatalogDemo() {
  const [category, setCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchCategory =
        category === "Semua" || product.category === category;

      const matchSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [category, search]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce((sum, item) => {
    const product = PRODUCTS.find((product) => product.id === item.id);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0);

  function addToCart(id: number) {
    setCart((current) => {
      const existing = current.find((item) => item.id === id);

      if (existing) {
        return current.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...current, { id, quantity: 1 }];
    });
  }

  function changeQuantity(id: number, change: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function checkoutWhatsApp() {
    if (cart.length === 0) return;

    const orderLines = cart
      .map((item) => {
        const product = PRODUCTS.find((product) => product.id === item.id);
        if (!product) return "";

        return `- ${product.name} x${item.quantity} = ${formatPrice(
          product.price * item.quantity,
        )}`;
      })
      .filter(Boolean)
      .join("\n");

    const message = [
      `Halo ${STORE.name}! Saya mau pesan:`,
      "",
      orderLines,
      "",
      `Total sementara: ${formatPrice(totalPrice)}`,
      "",
      "Mohon konfirmasi ketersediaan dan detail pemesanannya. Terima kasih!",
    ].join("\n");

    const url = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="catalog-page">
      <header className="catalog-header">
        <a className="store-brand" href="#home">
          <span className="store-logo">LF</span>
          <span>
            <strong>{STORE.name}</strong>
            <small>ARTISAN BAKERY</small>
          </span>
        </a>

        <button
          className="cart-button"
          onClick={() => setShowCart(!showCart)}
          aria-label="Lihat keranjang"
        >
          <span>Keranjang</span>
          <span className="cart-count">{totalItems}</span>
        </button>
      </header>

      <section className="catalog-hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">FRESH FROM OUR OVEN</span>
          <h1>
            Sesuatu yang
            <br />
            <em>manis</em> untuk harimu.
          </h1>
          <p>{STORE.description}</p>
          <a className="primary-button" href="#produk">
            Jelajahi Menu <span>↘</span>
          </a>
          <div className="hero-note">
            <span className="status-dot" />
            Freshly baked every day
          </div>
        </div>

        <div className="hero-image">
          <img
            src={PRODUCTS[0].image}
            alt="Croissant fresh dari La Farine"
          />
          <div className="image-label">
            <span>OUR SIGNATURE</span>
            <strong>Made fresh, made with love.</strong>
          </div>
        </div>
      </section>

      <section className="catalog-section" id="produk">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PILIHAN HARI INI</span>
            <h2>Menu favoritmu.</h2>
            <p>Dibuat dengan bahan pilihan, khusus untuk kamu.</p>
          </div>
          <span className="product-total">
            {filteredProducts.length} produk
          </span>
        </div>

        <div className="catalog-tools">
          <div className="category-list">
            {CATEGORIES.map((item) => (
              <button
                key={item}
                className={`category-button ${
                  category === item ? "active" : ""
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cari menu..."
              aria-label="Cari produk"
            />
          </label>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.tag && (
                  <span className="product-tag">{product.tag}</span>
                )}
                <button
                  className="quick-add"
                  onClick={() => addToCart(product.id)}
                  aria-label={`Tambah ${product.name} ke keranjang`}
                >
                  +
                </button>
              </div>

              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <div className="product-bottom">
                  <strong>{formatPrice(product.price)}</strong>
                  <button
                    className="add-button"
                    onClick={() => addToCart(product.id)}
                  >
                    + Tambah
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <span>⌕</span>
            <h3>Menu belum ditemukan</h3>
            <p>Coba kata kunci atau kategori yang lain.</p>
            <button
              className="text-button"
              onClick={() => {
                setSearch("");
                setCategory("Semua");
              }}
            >
              Tampilkan semua menu
            </button>
          </div>
        )}
      </section>

      <section className="catalog-promo">
        <div>
          <span className="eyebrow">A LITTLE TREAT</span>
          <h2>Hari yang baik dimulai dari gigitan pertama.</h2>
          <p>Pilih menu favoritmu dan hubungi kami untuk pemesanan.</p>
        </div>
        <span className="promo-decoration">✳</span>
      </section>

      <footer className="catalog-footer">
        <a className="store-brand" href="#home">
          <span className="store-logo">LF</span>
          <span>
            <strong>{STORE.name}</strong>
            <small>ARTISAN BAKERY</small>
          </span>
        </a>
        <p>Freshly baked, made with love.</p>
        <span>© {new Date().getFullYear()} {STORE.name}</span>
      </footer>

      {totalItems > 0 && (
        <button
          className="floating-cart"
          onClick={() => setShowCart(!showCart)}
        >
          <span>🛍</span>
          <span>
            {totalItems} item · {formatPrice(totalPrice)}
          </span>
          <strong>Lihat pesanan ↗</strong>
        </button>
      )}

      {showCart && (
        <div
          className="cart-overlay"
          onClick={() => setShowCart(false)}
          role="presentation"
        >
          <section
            className="cart-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cart-heading">
              <div>
                <span className="eyebrow">YOUR SELECTION</span>
                <h2 id="cart-title">Keranjang pesanan</h2>
              </div>
              <button
                className="close-cart"
                onClick={() => setShowCart(false)}
                aria-label="Tutup keranjang"
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <span>🛍</span>
                <p>Keranjangmu masih kosong.</p>
                <button
                  className="primary-button"
                  onClick={() => setShowCart(false)}
                >
                  Pilih menu
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => {
                    const product = PRODUCTS.find(
                      (product) => product.id === item.id,
                    );

                    if (!product) return null;

                    return (
                      <div className="cart-item" key={item.id}>
                        <img src={product.image} alt={product.name} />
                        <div className="cart-item-info">
                          <strong>{product.name}</strong>
                          <span>{formatPrice(product.price)}</span>
                          <div className="quantity-control">
                            <button
                              onClick={() => changeQuantity(item.id, -1)}
                              aria-label={`Kurangi ${product.name}`}
                            >
                              −
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => changeQuantity(item.id, 1)}
                              aria-label={`Tambah ${product.name}`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <strong className="cart-line-total">
                          {formatPrice(product.price * item.quantity)}
                        </strong>
                      </div>
                    );
                  })}
                </div>

                <div className="cart-summary">
                  <span>Total sementara</span>
                  <strong>{formatPrice(totalPrice)}</strong>
                </div>

                <p className="cart-note">
                  Biaya pengiriman, jika ada, dikonfirmasi oleh toko melalui
                  WhatsApp.
                </p>

                <button
                  className="checkout-button"
                  onClick={checkoutWhatsApp}
                >
                  Pesan via WhatsApp <span>↗</span>
                </button>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}