const translations = {
  en: {
    // Общие
    title: "SkyFlight",
    logo: "SkyFlight",
    logo_text: "SkyFlight",
    home: "Home",
    about: "About",
    fleet: "Fleet",
    statistics: "Statistics",
    destinations: "Destinations",
    join_us: "Join Us",
    footer_text: "© 2025 SkyFlight - All rights reserved",
    
    // Главная (index.html)
    welcome_title: "Welcome Aboard",
    welcome_text: "Experience the skies with professionalism and passion.",
    learn_more: "Learn More About Us",

    // Fleet (fleet.html)
    fleet_text: "Explore the aircraft we operate:",

    // Destinations (destinations.html)
    destinations_title: "Destinations",
    logo_text: "SkyFlight",
    our_flight_routes: "Our Flight Routes",
    popular_destinations: "Our popular destinations:",
    popular_destinations_desc: "Explore our most popular destinations and discover new adventures.",
    city_1: "City 1",
    city_2: "City 2",
    city_3: "City 3",

    // About (about.html)
    about_title: "About",
    about_heading: "About Us",
    about_text: "We are a dedicated team of virtual aviation enthusiasts offering a realistic and enjoyable flying experience for everyone.",
    our_mission: "Our Mission",
    mission_text: "To simulate professional airline operations while building a strong and fun pilot community through training, events, and flights.",
    what_we_offer: "What We Offer",
    offer_1: "Realistic flight schedules and routes",
    offer_2: "Flight tracking and statistics",
    offer_3: "Pilot ranks and awards",
    offer_4: "Weekly group flights and events",
    offer_5: "Helpful training and documentation",
    offer_6: "Friendly Discord community",

    // Statistics (statistics.html)
    statistics_title: "Statistics",
    pilot_statistics: "Pilot Statistics",
    pilot_statistics_desc: "Explore detailed stats for our active pilots.",
    table_pilot: "Pilot",
    table_flight_hours: "Flight Hours",
    table_flights: "Flights",
    table_rank: "Rank",
    rank_captain: "Captain",
    rank_first_officer: "First Officer",
    rank_second_officer: "Second Officer",
  },
  ru: {
    // Общие
    title: "SkyFlight",
    logo: "SkyFlight",
    logo_text: "SkyFlight",
    home: "Главная",
    about: "О нас",
    fleet: "Флот",
    statistics: "Статистика",
    destinations: "Направления",
    join_us: "Присоединяйтесь",
    footer_text: "© 2025 SkyFlight - Все права защищены",
    
    // Главная (index.html)
    welcome_title: "Добро пожаловать на борт",
    welcome_text: "Ощутите небо с профессионализмом и страстью.",
    learn_more: "Узнайте о нас больше",

    // Fleet (fleet.html)
    fleet_text: "Ознакомьтесь с нашим флотом:",

    // Destinations (destinations.html)
    destinations_title: "Направления",
    logo_text: "SkyFlight",
    our_flight_routes: "Наши маршруты",
    popular_destinations: "Наши популярные направления:",
    popular_destinations_desc: "Исследуйте наши самые популярные направления и откройте для себя новые приключения.",
    city_1: "Дубай",
    city_2: "Шереметьево",
    city_3: "Иркутск",

    // About (about.html)
    about_title: "О нас",
    about_heading: "О нас",
    about_text: "Мы — команда энтузиастов виртуальной авиации, предлагающая реалистичный и увлекательный опыт полетов для всех.",
    our_mission: "Наша миссия",
    mission_text: "Симулировать профессиональную работу авиакомпаний и создавать сильное и дружное сообщество пилотов через обучение, мероприятия и полеты.",
    what_we_offer: "Что мы предлагаем",
    offer_1: "Реалистичные расписания и маршруты полетов",
    offer_2: "Отслеживание полетов и статистика",
    offer_3: "Звания и награды пилотов",
    offer_4: "Еженедельные групповые полеты и мероприятия",
    offer_5: "Полезное обучение и документация",
    offer_6: "Дружелюбное сообщество Discord",

    // Statistics (statistics.html)
    statistics_title: "Статистика",
    pilot_statistics: "Статистика пилотов",
    pilot_statistics_desc: "Подробная статистика наших активных пилотов.",
    table_pilot: "Пилот",
    table_flight_hours: "Часы налета",
    table_flights: "Рейсы",
    table_rank: "Звание",
    rank_captain: "Капитан",
    rank_first_officer: "Первый офицер",
    rank_second_officer: "Второй офицер",
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Кнопка переключения показывает язык, на который можно переключиться (не текущий)
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = (lang === "en") ? "Русский" : "English";
  }

  localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  let lang = localStorage.getItem("language") || "en";
  setLanguage(lang);

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      lang = (lang === "en") ? "ru" : "en";
      setLanguage(lang);
    });
  }
});
