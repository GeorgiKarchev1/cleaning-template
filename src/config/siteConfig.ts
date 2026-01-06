// Site configuration - все данни се четат от environment variables
// За да промениш данните за нов клиент, промени .env.local файла

export const siteConfig = {
  // Основна информация
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || "CleanLeaders",
  tagline: process.env.NEXT_PUBLIC_TAGLINE || "Професионално почистване Пловдив",
  description: process.env.NEXT_PUBLIC_DESCRIPTION || "Трансформираме вашето пространство с безкомпромисно внимание към детайла и професионална техника Kärcher.",

  // Контакти
  phone1: process.env.NEXT_PUBLIC_PHONE_1 || "0899 299 825",
  phone1Link: process.env.NEXT_PUBLIC_PHONE_1_LINK || "+359899299825",
  phone2: process.env.NEXT_PUBLIC_PHONE_2 || "0879 889 800",
  phone2Link: process.env.NEXT_PUBLIC_PHONE_2_LINK || "+359879889800",
  email: process.env.NEXT_PUBLIC_EMAIL || "info@cleanleaders.bg",

  // Адрес
  city: process.env.NEXT_PUBLIC_CITY || "Пловдив",
  address: process.env.NEXT_PUBLIC_ADDRESS || "Пловдив, България",

  // Социални мрежи
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "https://www.instagram.com/cleanleaders/",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK || "",

  // Статистики (могат да се променят за всеки клиент)
  clientsCount: process.env.NEXT_PUBLIC_CLIENTS_COUNT || "100+",
  yearsExperience: process.env.NEXT_PUBLIC_YEARS_EXPERIENCE || "8+",
  rating: process.env.NEXT_PUBLIC_RATING || "5.0",

  // Отстъпка за нови клиенти
  discountPercent: process.env.NEXT_PUBLIC_DISCOUNT_PERCENT || "20",

  // SEO
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://cleanleaders.bg",
};

export type SiteConfig = typeof siteConfig;
