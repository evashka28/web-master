const supportedLanguages = {
    en: 'greeting_en.js',
    ru: 'greeting_ru.js',
    zh: 'greeting_zh.js',
    hi: 'greeting_hi.js',
    pt: 'greeting_pt.js'
};

async function loadGreeting(languageCode) {
    if (!supportedLanguages[languageCode]) {
        console.error("Ошибка: Неверный код языка. Доступные коды: en, ru, zh, hi, pt.");
        return;
    }
    try {
        const greeting = await import(`./${supportedLanguages[languageCode]}`);
        console.log(greeting.default); 
    } catch (error) {
        console.error("Ошибка при загрузке файла:", error);
    }
}

const lang = process.argv[2];
loadGreeting(lang);