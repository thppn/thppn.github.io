// script.js
const preloader = document.getElementById("preloader");

const minTime = 2000; // 2s minimum
const start = Date.now();

window.addEventListener("load", function() {
  const elapsed = Date.now() - start;

  function revealPage() {
    preloader.classList.add("hidden");
    // setTimeout(() => {
    //   content.classList.add("visible");
    // }, 800); // wait until fade-out finishes
    var welcome_options = {
        strings: welcome_translations = [
        "Καλώς ήρθατε",
        "Welcome",
        "欢迎",
        "Willkommen",
        "Bienvenido",
        "Добро пожаловать",
        "欢迎",
        "歡迎",
        "환영합니다",
        "ようこそ",
        "Välkommen",
        "Chào mừng",
        "Hoş geldiniz",
        "Bienvenu",
        "Karibu",
        "Maligayang pagdating",
        "Mabuhay",
        "Selamat datang",
        "Velkommen",
        "Benvenuto",
        "ยินดีต้อนรับ",
        "સ્વાગત",
        "Welkom",
        "Bem-vindo",
        "ಸ್ವಾಗತ",
        "ආයුබෝවන්",
        "ຍິນດີຕ້ອນຮັບ",
        "સ્વાગત",
        "Karibu",
        "Bem-vinda",
        "Tervetuloa",
        "Witamy",
        "Üdvözöljük",
        "Sveiki atvykę",
        "Dobrodošli",
        "Bine ați venit",
        "ברוך הבא",
        "أهلاً وسهلاً",
        "स्वागत है",
        "សូមស្វាគមន៍",
        "ยินดีต้อนรับ",
        "Добредојдовте",
        "Добро дошли",
        "Degemer mat",
        "Tervetuloa",
        "Welkom",
        "Fáilte",
        "Хуш омадед",
        "স্বাগতম",
        "સ્વાગત છે",
        "வரவேற்கிறோம்",
        "Croeso",
        "Failt ort",
        "Wolkom",
        "Добре дошли",
        "Esiet sveicināti",
        "Merħba",
        "Բարի գալուստ",
        "Кош келдіңіз",
        "Сайн байна уу",
        "Добро пожаловать",
        "Қош келдіңіз",
        "స్వాగతం",
        "സ്വാഗതം",
        "Maligayang pagdating",
        "Mabuhay",
        "Selamat datang",
        "Chào mừng",
        "Hoş geldiniz",
        "Καλώς ήρθατε",
        "Velkomin"],
        typeSpeed: 80,
        showCursor: false,
        loop: true
      };
      
      var typed = new Typed('.welcome', welcome_options);
  }

  if (elapsed < minTime) {
    setTimeout(revealPage, minTime - elapsed);
  } else {
    revealPage();
  }
});
