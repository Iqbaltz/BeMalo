export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "mengapa-website-penting-untuk-bisnis-umkm",
    title: "Mengapa Website Penting untuk Bisnis UMKM di Era Digital",
    excerpt:
      "Di era digital saat ini, memiliki website bukan lagi pilihan, melainkan keharusan bagi UMKM yang ingin berkembang dan dipercaya konsumen. Simak penjelasan lengkapnya di sini.",
    content: `
    <p>Di era digital yang serba cepat ini, perilaku konsumen telah berubah secara signifikan. Sebelum membeli produk atau menggunakan jasa, sebagian besar calon pelanggan akan mencari informasi terlebih dahulu melalui internet. Mereka membandingkan harga, membaca ulasan, dan menilai kredibilitas bisnis dari tampilan online yang dimiliki.</p>

    <p>Jika bisnis UMKM Anda belum memiliki website, maka peluang besar bisa terlewat begitu saja. Website bukan hanya sekadar pelengkap, melainkan fondasi penting untuk membangun kepercayaan, meningkatkan visibilitas, dan memperluas pasar. Inilah alasan mengapa website menjadi aset digital yang sangat berharga bagi UMKM.</p>

    <h2>1. Meningkatkan Kredibilitas dan Kepercayaan Konsumen</h2>
    <p>Website berfungsi sebagai identitas resmi bisnis Anda di dunia digital. Informasi seperti profil usaha, produk atau layanan, alamat, kontak, hingga testimoni pelanggan dapat diakses dengan mudah oleh siapa saja. UMKM yang memiliki website profesional akan terlihat lebih serius dan terpercaya dibandingkan bisnis yang hanya mengandalkan media sosial.</p>

    <p>Desain yang rapi, konten yang jelas, serta struktur informasi yang baik akan memberikan kesan bahwa bisnis Anda dikelola secara profesional. Hal ini sangat berpengaruh pada keputusan calon pelanggan.</p>

    <h2>2. Jangkauan Pasar yang Lebih Luas Tanpa Batas Wilayah</h2>
    <p>Berbeda dengan toko fisik yang terbatas oleh lokasi, website memungkinkan bisnis UMKM menjangkau pasar yang jauh lebih luas. Produk Anda dapat ditemukan oleh calon pelanggan dari berbagai kota, bahkan seluruh Indonesia.</p>

    <p>Dengan optimasi SEO yang tepat, website UMKM dapat muncul di hasil pencarian Google ketika orang mencari produk atau jasa yang relevan. Ini memberikan peluang penjualan baru tanpa harus membuka cabang fisik.</p>

    <h2>3. Website Aktif 24 Jam Non-Stop</h2>
    <p>Website bekerja untuk bisnis Anda selama 24 jam sehari dan 7 hari seminggu. Saat toko tutup atau Anda sedang tidak aktif di media sosial, website tetap bisa memberikan informasi, menerima pertanyaan, atau bahkan menghasilkan leads.</p>

    <p>Calon pelanggan dapat mengakses katalog produk, membaca deskripsi, dan menghubungi Anda kapan saja sesuai dengan waktu mereka.</p>

    <h2>4. Media Promosi yang Lebih Efisien dan Terukur</h2>
    <p>Website dapat menjadi pusat dari seluruh aktivitas digital marketing Anda. Iklan, media sosial, hingga WhatsApp marketing dapat diarahkan langsung ke website. Dengan bantuan tools analitik, Anda juga bisa memantau jumlah pengunjung, halaman yang paling sering dilihat, serta perilaku pengguna.</p>

    <p>Data ini sangat berguna untuk membantu UMKM mengambil keputusan bisnis yang lebih tepat dan berbasis data.</p>

    <h2>5. Studi Kasus: Website UMKM Peternakan Ayam</h2>
    <p>Salah satu contoh nyata manfaat website bagi UMKM adalah proyek yang kami kerjakan untuk <a href="https://www.dirgawijayafarm.id/" target="_blank" rel="noopener noreferrer">Dirga Wijaya Farm</a>, sebuah UMKM peternakan ayam.</p>

    <p>Kami membantu membangun landing page profesional yang menampilkan profil usaha, layanan, serta informasi kontak dengan jelas. Hasilnya, bisnis tersebut memiliki tampilan online yang lebih kredibel dan memudahkan calon mitra maupun pelanggan untuk mengenal usaha mereka.</p>

    <p>Website ini juga menjadi sarana utama untuk memperkenalkan usaha peternakan secara digital tanpa harus bergantung sepenuhnya pada media sosial.</p>

    <h2>6. Website Sebagai Investasi Jangka Panjang</h2>
    <p>Banyak UMKM menganggap pembuatan website sebagai biaya, padahal sebenarnya ini adalah investasi jangka panjang. Website yang dikelola dengan baik akan terus memberikan manfaat, mulai dari branding, promosi, hingga peningkatan penjualan.</p>

    <p>Dibandingkan dengan biaya iklan berulang, website memberikan aset digital yang dapat dikembangkan seiring pertumbuhan bisnis Anda.</p>

    <h2>Kesimpulan</h2>
    <p>Memiliki website bukan lagi pilihan, melainkan kebutuhan utama bagi UMKM yang ingin bertahan dan berkembang di era digital. Website membantu meningkatkan kredibilitas, memperluas jangkauan pasar, serta menjadi pusat promosi bisnis yang efektif.</p>

    <p>Jika Anda adalah pelaku UMKM yang ingin mulai memiliki website profesional, <a href="https://bemalo.id" target="_blank" rel="noopener noreferrer">Bemalo</a> siap membantu Anda merancang dan membangun website yang sesuai dengan kebutuhan bisnis Anda. Dengan pendekatan yang tepat, website dapat menjadi alat pertumbuhan yang sangat powerful untuk UMKM.</p>
  `,
    author: "Muhammad Iqbal",
    date: "2026-02-08",
    image: "/images/blog/blog-1.webp",
    tags: ["Bisnis", "UMKM", "Website", "Digital Marketing", "Jasa Website"],
  },
  {
    id: "2",
    slug: "tips-memilih-jasa-pembuatan-website-terpercaya",
    title: "Tips Memilih Jasa Pembuatan Website Terpercaya di Indonesia",
    excerpt:
      "Bingung memilih jasa pembuatan website yang benar-benar profesional? Simak tips penting agar Anda tidak salah memilih partner digital untuk bisnis Anda.",
    content: `
    <p>Di era digital seperti sekarang, website menjadi aset penting bagi bisnis, baik UMKM maupun perusahaan skala besar. Namun, memilih jasa pembuatan website yang tepat bukanlah hal mudah, terutama bagi pemilik bisnis yang tidak memiliki latar belakang teknis. Banyaknya vendor yang menawarkan jasa serupa sering kali membuat calon klien kebingungan.</p>

    <p>Agar Anda tidak salah memilih dan terhindar dari kerugian di kemudian hari, berikut beberapa tips penting dalam memilih jasa pembuatan website terpercaya di Indonesia.</p>

    <h2>1. Tinjau Portofolio Secara Menyeluruh</h2>
    <p>Portofolio adalah cerminan kualitas sebuah jasa pembuatan website. Perhatikan website yang pernah mereka kerjakan: apakah tampilannya profesional, mudah digunakan, responsif di perangkat mobile, dan memiliki loading yang cepat.</p>

    <p>Vendor yang berpengalaman biasanya memiliki beragam portofolio dari berbagai jenis bisnis. Ini menunjukkan bahwa mereka mampu menyesuaikan desain dan fitur sesuai kebutuhan klien.</p>

    <h2>2. Cek Testimoni dan Reputasi Klien</h2>
    <p>Testimoni dari klien sebelumnya dapat memberikan gambaran nyata tentang cara kerja vendor tersebut. Apakah mereka komunikatif, tepat waktu, dan bertanggung jawab setelah website selesai dibuat?</p>

    <p>Jasa pembuatan website yang profesional tidak hanya fokus pada proyek, tetapi juga membangun hubungan jangka panjang dengan klien.</p>

    <h2>3. Pastikan Layanan Support dan Maintenance</h2>
    <p>Website bukan produk sekali jadi. Setelah website live, akan ada kebutuhan update, perbaikan bug, atau penyesuaian konten. Oleh karena itu, penting untuk memilih vendor yang menyediakan layanan support dan maintenance.</p>

    <p>Tanyakan dengan jelas bagaimana sistem dukungan teknis mereka, durasi respons, serta apakah ada biaya tambahan untuk pemeliharaan rutin.</p>

    <h2>4. Transparansi Harga dan Fitur</h2>
    <p>Harga murah memang menggiurkan, namun jangan sampai mengorbankan kualitas. Bandingkan harga dengan fitur yang ditawarkan, seperti keamanan website, SEO basic, performa, dan kemudahan pengelolaan konten.</p>

    <p>Vendor terpercaya akan menjelaskan secara transparan apa saja yang Anda dapatkan, tanpa biaya tersembunyi di kemudian hari.</p>

    <h2>5. Pahami Kebutuhan Bisnis Anda</h2>
    <p>Jasa pembuatan website yang baik tidak hanya mengeksekusi permintaan, tetapi juga membantu Anda memahami solusi terbaik untuk bisnis. Mereka akan bertanya tentang target market, tujuan website, dan rencana pengembangan ke depan.</p>

    <p>Pendekatan konsultatif seperti ini sangat penting agar website yang dibuat benar-benar memberikan dampak positif bagi bisnis.</p>

    <h2>6. Pilih Partner Digital, Bukan Sekadar Vendor</h2>
    <p>Website adalah investasi jangka panjang. Oleh karena itu, pilihlah partner digital yang dapat tumbuh bersama bisnis Anda. Komunikasi yang baik, pemahaman bisnis, dan komitmen jangka panjang menjadi nilai tambah yang sangat penting.</p>

    <h2>Bemalo sebagai Jasa Pembuatan Website Terpercaya</h2>
    <p><a href="https://bemalo.id" target="_blank" rel="noopener noreferrer">Bemalo</a> hadir sebagai jasa pembuatan website terpercaya di Indonesia yang berfokus pada solusi digital untuk UMKM dan bisnis berkembang. Kami tidak hanya membuat website yang menarik secara visual, tetapi juga mengutamakan performa, keamanan, dan kemudahan pengelolaan.</p>

    <p>Dengan pendekatan yang transparan dan konsultatif, Bemalo membantu klien membangun website yang sesuai dengan tujuan bisnis mereka. Mulai dari landing page, company profile, hingga website custom, kami siap menjadi partner digital Anda.</p>

    <h2>Kesimpulan</h2>
    <p>Memilih jasa pembuatan website tidak boleh dilakukan secara terburu-buru. Dengan mempertimbangkan portofolio, testimoni, layanan support, serta transparansi harga, Anda dapat menemukan partner yang tepat.</p>

    <p>Jika Anda sedang mencari jasa pembuatan website yang profesional dan dapat dipercaya, <a href="https://bemalo.id" target="_blank" rel="noopener noreferrer">Bemalo</a> siap membantu Anda mewujudkan website yang mendukung pertumbuhan bisnis secara berkelanjutan.</p>
  `,
    author: "Muhammad Iqbal",
    date: "2026-03-02",
    image: "/images/blog/blog-2.webp",
    tags: [
      "Tips",
      "Jasa Website",
      "Web Development",
      "Bisnis Digital",
      "Indonesia",
    ],
  },
  {
    id: "3",
    slug: "tren-desain-website-2026",
    title: "Tren Desain Website 2026 yang Perlu Anda Tahu",
    excerpt:
      "Desain website terus berevolusi mengikuti teknologi dan perilaku pengguna. Kenali tren desain website 2026 agar bisnis Anda tetap modern, relevan, dan kompetitif di pasar digital.",
    content: `
    <p>Tahun 2026 menandai evolusi penting dalam dunia desain website. Tidak lagi sekadar soal tampilan visual yang menarik, desain web kini sangat berfokus pada <strong>pengalaman pengguna (User Experience/UX)</strong>, performa teknis, serta kemampuan website dalam mendukung tujuan bisnis secara langsung.</p>

    <p>Perubahan perilaku pengguna internet, peningkatan penggunaan perangkat mobile, serta tuntutan kecepatan akses informasi membuat desain website harus lebih adaptif, strategis, dan berorientasi pada hasil. Bagi pelaku bisnis dan UMKM, memahami tren ini sangat penting agar website tidak tertinggal dan tetap mampu bersaing di pasar digital.</p>

    <p>Berikut adalah tren desain website 2026 yang perlu Anda ketahui dan terapkan untuk memastikan kehadiran online bisnis Anda tetap relevan.</p>

    <h2>1. Dark Mode sebagai Standar Desain Modern</h2>
    <p>Dark mode kini bukan lagi fitur tambahan atau opsional. Di tahun 2026, semakin banyak website yang mengadopsi tampilan gelap sebagai pilihan utama karena memberikan kesan elegan, futuristik, serta mengurangi kelelahan mata pengguna — terutama saat mengakses website dalam kondisi cahaya rendah atau di malam hari.</p>

    <p>Implementasi dark mode yang baik di tahun 2026 tidak hanya sekadar mengubah warna latar menjadi gelap. Desainer harus memperhatikan <strong>kontras warna</strong> antar elemen, pemilihan tipografi yang tetap nyaman dibaca, serta memastikan aksesibilitas tidak terganggu. Website yang menyediakan opsi toggle antara light mode dan dark mode memberikan fleksibilitas lebih bagi pengguna.</p>

    <p>Dari sisi teknis, dark mode juga membantu menghemat konsumsi baterai pada perangkat dengan layar OLED, menjadikannya pilihan yang lebih ramah perangkat mobile.</p>

    <h2>2. Mikro-Interaksi yang Halus, Fungsional, dan Bermakna</h2>
    <p>Mikro-interaksi adalah elemen interaktif kecil yang memberikan feedback visual kepada pengguna saat mereka berinteraksi dengan website. Contohnya termasuk animasi hover pada tombol, transisi halus saat berpindah halaman, loading skeleton, hingga efek parallax yang memberikan kedalaman pada tampilan.</p>

    <p>Di tahun 2026, tren mikro-interaksi menekankan pada fungsi, bukan sekadar dekorasi. Setiap animasi harus memiliki tujuan yang jelas: membantu navigasi, memberikan konfirmasi aksi pengguna, atau menarik perhatian ke elemen penting. Animasi yang berlebihan justru dapat memperlambat performa website dan membingungkan pengguna.</p>

    <p>Framework modern seperti <strong>Framer Motion</strong> dan <strong>GSAP</strong> memungkinkan developer menciptakan animasi yang smooth tanpa mengorbankan performa. Kunci utamanya adalah keseimbangan antara estetika dan kecepatan loading.</p>

    <h2>3. Desain Minimalis dengan Tipografi yang Kuat dan Berani</h2>
    <p>Konsep <em>less is more</em> semakin mendominasi lanskap desain web di tahun 2026. Desain minimalis dengan penggunaan whitespace yang cukup membantu pengunjung fokus pada pesan utama tanpa distraksi. Elemen yang tidak perlu dihilangkan, menyisakan hanya konten dan fitur yang benar-benar penting.</p>

    <p>Tipografi besar dan tegas (<strong>bold typography</strong>) menjadi alat utama untuk memperkuat identitas brand dan meningkatkan keterbacaan. Headline yang berukuran besar dengan font yang karakteristik mampu menyampaikan pesan dalam hitungan detik — sesuatu yang sangat penting mengingat rata-rata perhatian pengguna internet yang semakin singkat.</p>

    <p>Pemilihan font juga semakin diperhatikan untuk mencerminkan karakter bisnis. Font sans-serif modern untuk kesan profesional dan teknologi, serif untuk kesan premium dan terpercaya, atau display font untuk kesan kreatif dan dinamis. Kombinasi dua jenis font yang tepat dapat menciptakan hierarki visual yang jelas dan menarik.</p>

    <h2>4. Desain Mobile-First yang Lebih Serius</h2>
    <p>Meskipun konsep mobile-first sudah ada sejak beberapa tahun lalu, di tahun 2026 pendekatannya semakin matang dan menyeluruh. Data menunjukkan bahwa lebih dari <strong>70% traffic website</strong> berasal dari perangkat mobile, sehingga desain responsif bukan lagi nilai tambah melainkan keharusan mutlak.</p>

    <p>Mobile-first di 2026 berarti merancang pengalaman terbaik untuk layar kecil terlebih dahulu, kemudian memperluas ke layar yang lebih besar. Ini mencakup navigasi yang ramah jempol (thumb-friendly), ukuran tombol yang cukup besar untuk disentuh, serta layout yang beradaptasi sempurna di berbagai ukuran layar.</p>

    <p>Progressive Web App (PWA) juga semakin populer, memungkinkan website berfungsi layaknya aplikasi native dengan kemampuan offline, push notification, dan instalasi ke home screen tanpa perlu melalui app store.</p>

    <h2>5. Personalisasi Berbasis Perilaku dan Data Pengguna</h2>
    <p>Website di tahun 2026 semakin personal dan cerdas. Konten, rekomendasi produk, dan call-to-action dapat disesuaikan secara dinamis berdasarkan berbagai faktor: lokasi geografis pengguna, perangkat yang digunakan, waktu akses, serta riwayat perilaku pengunjung sebelumnya.</p>

    <p>Sebagai contoh, pengunjung yang kembali ke website bisa disambut dengan konten yang relevan berdasarkan halaman yang pernah mereka kunjungi. Atau, pengguna dari kota tertentu bisa melihat penawaran lokal yang lebih relevan. Personalisasi ini terbukti efektif meningkatkan <strong>engagement rate</strong> dan <strong>conversion rate</strong> secara signifikan.</p>

    <p>Tren ini banyak diterapkan pada website bisnis, landing page, e-commerce, dan platform layanan digital. Dengan bantuan tools analitik dan AI, personalisasi menjadi lebih mudah diimplementasikan bahkan untuk skala UMKM.</p>

    <h2>6. Fokus pada Kecepatan, Performa, dan Core Web Vitals</h2>
    <p>Google semakin menekankan pentingnya performa website melalui metrik <strong>Core Web Vitals</strong> — yang terdiri dari Largest Contentful Paint (LCP), Interaction to Next Paint (INP), dan Cumulative Layout Shift (CLS). Website yang tidak memenuhi standar ini akan kesulitan mendapatkan peringkat tinggi di hasil pencarian.</p>

    <p>Di tahun 2026, kecepatan loading bukan sekadar faktor SEO, tetapi juga penentu pengalaman pengguna. Riset menunjukkan bahwa <strong>53% pengunjung mobile akan meninggalkan website</strong> jika loading lebih dari 3 detik. Semakin cepat website Anda, semakin tinggi peluang konversi.</p>

    <p>Optimasi yang harus dilakukan mencakup: kompresi dan lazy loading gambar, penggunaan format gambar modern seperti WebP dan AVIF, minifikasi CSS dan JavaScript, implementasi caching yang efektif, serta pemilihan hosting dan CDN yang berkualitas. Teknologi seperti Next.js dan server-side rendering (SSR) juga membantu meningkatkan performa secara drastis.</p>

    <h2>7. Desain Inklusif dan Aksesibilitas (Web Accessibility)</h2>
    <p>Aksesibilitas menjadi bagian yang tidak terpisahkan dari desain web modern di tahun 2026. Website harus dapat diakses dan digunakan oleh <strong>semua orang</strong>, termasuk mereka yang memiliki keterbatasan visual, pendengaran, motorik, atau kognitif.</p>

    <p>Standar <strong>WCAG (Web Content Accessibility Guidelines)</strong> semakin diadopsi secara luas. Penggunaan kontras warna yang memadai, teks alternatif untuk gambar, navigasi yang dapat diakses melalui keyboard, serta struktur heading yang logis menjadi persyaratan mendasar.</p>

    <p>Desain inklusif bukan hanya soal kepatuhan terhadap standar, tetapi juga membuka pasar yang lebih luas. Website yang aksesibel dapat dijangkau oleh lebih banyak pengguna, meningkatkan reputasi brand, dan bahkan menjadi keunggulan kompetitif di mata mesin pencari.</p>

    <h2>8. Integrasi AI dan Chatbot Cerdas</h2>
    <p>Artificial Intelligence (AI) semakin terintegrasi dalam desain website 2026. Chatbot berbasis AI mampu memberikan respons yang lebih natural dan kontekstual, membantu pengunjung menemukan informasi yang mereka butuhkan tanpa harus menavigasi seluruh website.</p>

    <p>Selain chatbot, AI juga digunakan untuk personalisasi konten, optimasi layout berdasarkan perilaku pengguna, hingga pembuatan konten dinamis yang relevan. Bisnis yang mengadopsi teknologi ini dapat memberikan layanan pelanggan yang lebih baik dengan efisiensi operasional yang lebih tinggi.</p>

    <h2>9. Scrollytelling dan Narasi Visual yang Imersif</h2>
    <p>Scrollytelling — teknik bercerita melalui interaksi scroll — menjadi tren yang semakin populer di 2026. Teknik ini menggabungkan teks, gambar, animasi, dan video yang muncul secara progresif saat pengguna men-scroll halaman, menciptakan pengalaman yang imersif dan engaging.</p>

    <p>Pendekatan ini sangat efektif untuk landing page, halaman <em>about us</em>, dan presentasi produk yang ingin menyampaikan cerita brand secara menarik. Namun, penting untuk memastikan bahwa scrollytelling tetap ringan dan tidak mengorbankan kecepatan loading website.</p>

    <h2>Bagaimana Bisnis Dapat Mengikuti Tren Desain Website 2026?</h2>
    <p>Mengikuti tren desain website bukan berarti harus selalu mengubah tampilan secara drastis setiap tahun. Yang terpenting adalah memastikan website Anda <strong>relevan dengan kebutuhan pengguna saat ini</strong>, mudah digunakan, cepat diakses, dan mendukung tujuan bisnis.</p>

    <p>Berikut langkah-langkah praktis yang bisa Anda lakukan:</p>
    <ul>
      <li><strong>Audit website Anda saat ini</strong> — Evaluasi kecepatan, tampilan mobile, dan aksesibilitas website Anda menggunakan tools seperti Google PageSpeed Insights dan Lighthouse.</li>
      <li><strong>Prioritaskan performa</strong> — Pastikan Core Web Vitals website Anda memenuhi standar Google untuk mendukung SEO dan pengalaman pengguna.</li>
      <li><strong>Perbarui desain secara bertahap</strong> — Tidak perlu redesign total. Mulailah dari elemen yang paling berdampak seperti tipografi, kecepatan loading, dan responsivitas mobile.</li>
      <li><strong>Bekerja sama dengan partner digital yang tepat</strong> — Pilih partner yang memahami tren sekaligus kebutuhan spesifik bisnis Anda.</li>
    </ul>

    <h2>Bemalo sebagai Partner Desain Website Modern dan Strategis</h2>
    <p><a href="https://bemalo.id" target="_blank" rel="noopener noreferrer">Bemalo</a> membantu bisnis dan UMKM di Indonesia membangun website modern yang tidak hanya mengikuti tren desain terbaru, tetapi juga mengutamakan UX, performa, skalabilitas, dan optimasi SEO.</p>

    <p>Dengan menggunakan teknologi terkini seperti Next.js dan pendekatan desain yang strategis, Bemalo memastikan setiap website yang dibangun memiliki fondasi teknis yang kuat, tampilan yang profesional, serta kemampuan untuk berkembang seiring pertumbuhan bisnis klien.</p>

    <p>Kami tidak hanya membangun website — kami membangun <strong>aset digital</strong> yang dirancang untuk memberikan dampak nyata bagi bisnis Anda, dari meningkatkan kredibilitas hingga mendatangkan pelanggan baru melalui mesin pencari.</p>

    <h2>Kesimpulan</h2>
    <p>Tren desain website 2026 menekankan keseimbangan antara estetika, pengalaman pengguna, dan performa teknis. Dark mode, mikro-interaksi fungsional, desain minimalis dengan tipografi kuat, pendekatan mobile-first, personalisasi berbasis data, optimasi Core Web Vitals, aksesibilitas, integrasi AI, serta scrollytelling menjadi elemen-elemen kunci yang membentuk standar baru.</p>

    <p>Website yang ketinggalan tren bukan hanya soal tampilan yang usang — tetapi juga berisiko kehilangan peringkat di mesin pencari, kehilangan kepercayaan pengunjung, dan pada akhirnya kehilangan peluang bisnis.</p>

    <p>Jika website Anda mulai terasa ketinggalan zaman atau belum dioptimasi sesuai standar terbaru, sekarang adalah waktu yang tepat untuk melakukan pembaruan. Bersama <a href="https://bemalo.id" target="_blank" rel="noopener noreferrer">Bemalo</a>, Anda dapat membangun website yang modern, relevan, cepat, dan siap bersaing di era digital 2026.</p>
  `,
    author: "Muhammad Iqbal",
    date: "2026-03-09",
    image: "/images/blog/blog-3.webp",
    tags: [
      "Desain Website",
      "Tren Desain",
      "Web Design 2026",
      "UI/UX",
      "Core Web Vitals",
      "Mobile First",
      "Aksesibilitas Web",
    ],
  },
];
