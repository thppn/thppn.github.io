const preloader = document.getElementById("preloader");

const minTime = 2000; // 2s minimum
const start = Date.now();

const welcome_translations = {
  "US": "Welcome",
  "FR": "Bienvenu",
  "IT": "Benvenuto",
  "DE": "Willkommen",
  "ES": "Bienvenido",
  "RU": "Добро пожаловать",
  "CN": "欢迎",
  "TW": "歡迎",
  "KR": "환영합니다",
  "JP": "ようこそ",
  "SE": "Välkommen",
  "NO": "Velkommen",
  "NL": "Welkom",
  "PT": "Bem-vindo",
  "BR": "Bem-vinda",
  "FI": "Tervetuloa",
  "PL": "Witamy",
  "HU": "Üdvözöljük",
  "LT": "Sveiki atvykę",
  "RS": "Dobrodošli",
  "RO": "Bine ați venit",
  "IL": "ברוך הבא",
  "SA": "أهلاً وسهلاً",
  "IN": "स्वागत है",
  "BD": "স্বাগতম",
  "GU": "સ્વાગત છે",
  "LK": "வரவேற்கிறோம்",
  "TE": "స్వాగతం",
  "ML": "സ്വാഗതം",
  "KN": "ಸ್ವಾಗತ",
  "LK2": "ආයුබෝවන්",
  "LA": "ຍິນດີຕ້ອນຮັບ",
  "KH": "សូមស្វាគមន៍",
  "TH": "ยินดีต้อนรับ",
  "GJ": "સ્વાગત",
  "KE": "Karibu",
  "PH": "Maligayang pagdating",
  "PH2": "Mabuhay",
  "ID": "Selamat datang",
  "VN": "Chào mừng",
  "TR": "Hoş geldiniz",
  "GR": "Καλώς ήρθατε",
  "IS": "Velkomin",
  "MK": "Добредојдовте",
  "BG": "Добро дошли",
  "FR2": "Degemer mat",
  "IE": "Fáilte",
  "GB": "Croeso",
  "BE": "Failt ort",
  "ZA": "Wolkom",
  "LV": "Esiet sveicināti",
  "MT": "Merħba",
  "AM": "Բարի գալուստ",
  "KZ": "Кош келдіңіз",
  "MN": "Сайн байна уу",
  "UZ": "Қош келдіңіз",
  "TJ": "Хуш омадед"
};
var welcome_arr = Object.values(welcome_translations);
// if adblocker exists will not work
fetch('https://api.country.is/')
  .then(response => response.json())
  .then(data => {welcome_arr = welcome_translations.hasOwnProperty(data.country) ? [welcome_translations[data.country] || [], ...welcome_arr]: welcome_arr;});

window.addEventListener("load", function() {
  const elapsed = Date.now() - start;

  function revealPage() {
    preloader.classList.add("hidden");
    // setTimeout(() => {
    //   content.classList.add("visible");
    // }, 800); // wait until fade-out finishes
    var welcome_options = {
      strings: welcome_arr,
      typeSpeed: 100,
      backSpeed: 70,
      showCursor: false,
      startDelay: 500,
    };
    var typed = new Typed('.welcome', welcome_options);
  }

  if (elapsed < minTime) {
    setTimeout(revealPage, minTime - elapsed);
  } else {
    revealPage();
  }
});
