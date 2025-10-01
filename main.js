// ================== NAVIGATION ==================
const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");

if (openNavBtn && closeNavBtn && navItems) {
  openNavBtn.addEventListener("click", () => {
    navItems.style.display = "flex";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block";
  });

  const closeNav = () => {
    navItems.style.display = "none";
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none";
  };

  closeNavBtn.addEventListener("click", closeNav);

  if (window.innerWidth < 1024) {
    document.querySelectorAll("#nav__items li a").forEach((navItem) => {
      navItem.addEventListener("click", closeNav);
    });
  }
}

// ================== TESTIMONIALS (Swiper.js) ==================
if (typeof Swiper !== "undefined") {
  var mySwiper = new Swiper(".swiper.mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}

// ================== WHATSAPP APPOINTMENT FORM ==================
const appointmentForm = document.querySelector("#appointmentForm");

if (appointmentForm) {
  appointmentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name")?.value.trim();
    const phone = document.querySelector("#phone")?.value.trim();
    const date = document.querySelector("#date")?.value.trim();
    const doctor = document.querySelector("#doctor")?.value.trim();
    const message = document.querySelector("#message")?.value.trim();

    if (!name) {
      alert("⚠️ Please enter your name.");
      return;
    }
    if (!phone || !/^\d+$/.test(phone)) {
      alert("⚠️ Please enter a valid phone number (digits only).");
      return;
    }
    if (!date) {
      alert("⚠️ Please select a preferred date.");
      return;
    }
    if (!doctor) {
      alert("⚠️ Please select a doctor.");
      return;
    }

    // ================== OPTION 1: SEND TO RECEPTION (DEFAULT) ==================
    const clinicNumber = "923001234567"; // 🔹 Change to your clinic's WhatsApp number

    const whatsappMessage =
      `🐾 *New Appointment Request* 🐾\n\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `📅 Preferred Date: ${date}\n` +
      `👨‍⚕️ Doctor: ${doctor}\n` +
      `📝 Message: ${message || "N/A"}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${clinicNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    // ================== OPTION 2: SEND DIRECTLY TO DOCTOR (COMMENTED OUT) ==================
    /*
    // Example doctor WhatsApp numbers map
    const doctorNumbers = {
      "Dr. Felix Flexipaws": "923111111111",
      "Dr. Nutra Whiskertail": "923122222222",
      "Dr. Sterling Lifesaver": "923133333333",
      "Dr. Felix FractureFix": "923144444444",
      "Dr. Ivory Smilesworth": "923155555555",
      "Dr. Luna Catologist": "923166666666",
    };

    // Pick doctor number, fallback to clinic if missing
    const targetNumber = doctorNumbers[doctor] || clinicNumber;

    const whatsappMessage2 =
      `🐾 *New Appointment Request* 🐾\n\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `📅 Preferred Date: ${date}\n` +
      `👨‍⚕️ Doctor: ${doctor}\n` +
      `📝 Message: ${message || "N/A"}`;

    const encodedMessage2 = encodeURIComponent(whatsappMessage2);
    const whatsappURL2 = `https://wa.me/${targetNumber}?text=${encodedMessage2}`;
    window.open(whatsappURL2, "_blank");
    */
  });
}
