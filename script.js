    document.addEventListener("keydown", e=>{
    if(e.key==="Escape") closeProyekModal();
    });
    document.body.style.overflow="auto";

    if(window.innerWidth < 768){
    particles = particles.slice(0,15);
    }

    const hamburger =
        document.getElementById("hamburger");
    const navLinks =
        document.querySelector(".nav-links");
        hamburger.onclick = () =>{
        navLinks.classList.toggle("active");
    };

    /* DARK MODE */
      const toggle=document.getElementById("theme-toggle");
        if(localStorage.getItem("theme")==="dark"){
        document.body.classList.add("dark");
          toggle.textContent="☀️";
      }
          toggle.onclick=()=>{
        document.body.classList.toggle("dark");
      const dark=document.body.classList.contains("dark");
          toggle.textContent=dark?"☀️":"🌙";
        localStorage.setItem("theme",dark?"dark":"light");
      };
    /* TYPING */
      const text="Rakhella Rudiana Putri";
      let i=0;
        function typing(){
        if(i<text.length){
      document.querySelector(".typing").textContent+=text.charAt(i);
        i++;
        setTimeout(typing,60);
      }}
        typing();

    /* PARTICLES */
      const canvas=document.getElementById("particles");
      const ctx=canvas.getContext("2d");
        canvas.width=innerWidth;
        canvas.height=innerHeight;
      let particles=[];
      for(let i=0;i<40;i++){
      particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2+1,
        dx:Math.random()-0.3,
        dy:Math.random()-0.3
      });
      }
      function animate(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      particles.forEach(p=>{
        p.x+=p.dx;
        p.y+=p.dy;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle="rgba(99,102,241,0.4)";
      ctx.fill();
      });
      requestAnimationFrame(animate);
      }
      animate();

  /* HERO AUTO SLIDER */
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    function showNextSlide(){
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }
    setInterval(showNextSlide, 3000); // ganti setiap 3 detik

  /* REALTIME DATE & TIME */
    function updateDateTime(){
      const now = new Date();
      const hari = [
        "Minggu","Senin","Selasa",
        "Rabu","Kamis","Jumat","Sabtu"
      ];
      const bulan = [
        "Januari","Februari","Maret","April",
        "Mei","Juni","Juli","Agustus",
        "September","Oktober","November","Desember"
      ];
      const dayName = hari[now.getDay()];
      const date = now.getDate();
      const month = bulan[now.getMonth()];
      const year = now.getFullYear();
      const time = now.toLocaleTimeString("id-ID");
      document.getElementById("datetime").textContent =
        `${dayName}, ${date} ${month} ${year} | ${time}`;
      document.getElementById("year").textContent = year;
    }
    setInterval(updateDateTime,1000);
    updateDateTime();

/* DATA SEKOLAH */
const schoolData = {
  ukts: {
    address: "Jl. Walter Monginsidi No.36-38, Gilingan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57134",
    phone: "Telp: (0271) 637145",
    image: "img/ukts.jpg"
  },
  sma: {
    address: "Jl. Honggowongso No.135, Kratonan, Kec. Serengan, Kota Surakarta, Jawa Tengah 57153",
    phone: "Telp: (0271) 636238",
    image: "img/smak 1 ska.jpg"
  },
  smp: {
    address: "Jl. Abdul Rahman Saleh No.1, Setabelan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57139",
    phone: "Telp: (0271) 641305",
    image: "img/smpk 1 ska.jpg"
  },
};
/* OPEN MODAL DINAMIS */
document.querySelectorAll(".edu-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    const key = card.dataset.school;
    const data = schoolData[key];

    document.getElementById("edu-address").textContent = data.address;
    document.getElementById("edu-phone").textContent = data.phone;
    document.getElementById("edu-image").src = data.image;
    document.getElementById("edu-modal").style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});
/* CLOSE */
function closeEduModal(){
  document.getElementById("edu-modal").style.display = "none";
  document.body.style.overflow = "auto";
}

/* DATA PENGALAMAN */
const pengalamanData = {
  aplikasi_kependudukan: {
    description: "APLIKASI KEPENDUDUKAN RT 005 RW 020 JEBRES SURAKARTA BERBASIS WEB untuk pengelolaan data penduduk, perpindahan penduduk, laporan pengaduan, dan data iuran warga.",
    image: "img/projek 1 - APLIKASI KEPENDUDUKAN RT 005 RW 020 JEBRES SURAKARTA BERBASIS WEB.jpg"
  },
  siweb_kamar_rawat_inap: {
    description: "SISTEM INFORMASI WEB KELAS KAMAR RAWAT INAP memanajemen kamar dan kelas pasien dengan harga yang tertera, serta menyediakan informasi tentang fasilitas dan layanan yang tersedia di rumah sakit.",
    image: "img/projek 2 - SISTEM INFORMASI WEB KELAS KAMAR RAWAT INAP.jpg"
  },
  pbo_kelas_makanan: {
    description: "PEMROGRAMAN BERORIENTASI OBJEK KELAS MAKANAN DAN MINUMAN dengan class seperti objek, atribut, dan metode untuk menampilkan informasi makanan dan minuman.",
    image: "img/projek 3 - PBO KELAS MAKANAN.jpg"
  },
};
/* EVENT LISTENER PENGALAMAN */
document.querySelectorAll(".pengalaman-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    const key = card.dataset.project;
    const data = pengalamanData[key];

    document.getElementById("pengalaman-description").textContent = data.description;
    document.getElementById("pengalaman-image").src = data.image;
    document.getElementById("pengalaman-modal").style.display = "flex";
  });
});
/* CLOSE PENGALAMAN MODAL */
function closePengalamanModal(){
  document.getElementById("pengalaman-modal").style.display = "none";
}

/* DATA SERTIFIKAT */
const certificateData = {
  ukrim_2025: {
    title: "Lomba Programming Universitas Kristen Immanuel Yogyakarta",
    year: "Juni 2025",
    description: "Sertifikat partisipasi dan pelatihan kegiatan programming tingkat nasional.",
    images: [
      "img/sertifikat 1 - programming.png",
      "img/SERTIFIKAT PROGRAMMING UKRIM.png"
    ]
  },
  ukrim_2024: {
    title: "Lomba Infografis Universitas Kristen Immanuel Yogyakarta",
    year: "Mei 2024",
    description: "Sertifikat pelatihan dan partisipasi dalam lomba infografis.",
    images: [
      "img/SERTIFIKAT INFOGRAFIS UKRIM.png"
    ]
  },
  ukts_2025: {
    title: "Webinar Universitas Kristen Teknologi Solo",
    year: "Mei 2025",
    description: "Sertifikat webinar memahami pinjaman online (P2 Lending) goes to campus.",
    images: [
      "img/Sertifikat webinar memahami pinjaman online (P2 Lending) goes to campus.jpeg"
    ]
  }
};
/* EVENT LISTENER SERTIFIKAT */
document.querySelectorAll(".sertifikat-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    const key = card.dataset.cert;
    const data = certificateData[key];
    document.getElementById("sertifikat-title").textContent = data.title;
    document.getElementById("sertifikat-year").textContent = data.year;
    document.getElementById("sertifikat-description").textContent = data.description;
    const img1 = document.getElementById("sertifikat-image-1");
    const img2 = document.getElementById("sertifikat-image-2");
    if(data.images.length === 1){
      img1.src = data.images[0];
      img1.style.display = "block";
      img2.style.display = "none";
    } else {
      img1.src = data.images[0];
      img2.src = data.images[1];
      img1.style.display = "block";
      img2.style.display = "block";
    }
    document.getElementById("sertifikat-modal").style.display = "flex";
  });
});
/* CLOSE SERTIFIKAT MODAL */
function closeSertifikatModal(){
  document.getElementById("sertifikat-modal").style.display = "none";
}
