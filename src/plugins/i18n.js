import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to Your Vue.js App',
        guide: 'For a guide and recipes on how to configure / customize this project,',
        checkout: 'check out the',
        plugins: 'Installed CLI Plugins',
        links: 'Essential Links',
        ecosystem: 'Ecosystem',
        home: 'Home',
        profile: 'Profile',
        dailyQuote: 'Daily Quote',
        newQuote: 'New Quote',
        newQuoteSubtitle: 'Specify a new quote',
        quotes: 'Quotes',
        today: 'Today',
        quoteOfTheDay: "The quote of the day is",
        authorName: "Author's Name:",
        authorNameEmpty: "Enter Author's Name",
        to:'To name:',
        toEmpty:'Enter To Name',
        quote:'Quote:',
        quoteEmpty:'Enter To Name',
        quoteDate:"Quote's Date:",
        quoteDateEmpty: "Enter Quote's Date",
        submit:'Submit',
        reset:"Reset",
        shareTittle:"Check out this awesome quote!",
        shareDescription:"This quote was generated on quote app",
        shareQuote:"Sample Quote",
        seeMore:"See More",
        settingsMainLabel:"Settings",
        settingsGeneralLabel:"General",
        language:"Language"
    },
    'es': {
        welcomeMsg: 'Bienvenido a tu aplicación Vue.js',
        guide: 'Para una guía y recetas sobre cómo configurar / personalizar este proyecto,',
        checkout: 'revisar la',
        plugins: 'Plugins de CLI instalados',
        links: 'Enlaces esenciales',
        ecosystem: 'Ecosistema',
        home: 'Home',
        profile: 'Perfil',
        dailyQuote: 'Frase del dia',
        newQuote: 'Nueva Frase',
        newQuoteSubtitle: 'Ingresa los detalles de la frase',
        quotes: 'Frases',
        today: 'Hoy',
        quoteOfTheDay: 'La frase del dia es',
        authorName: "Nombre del Autor:",
        authorNameEmpty: "Ingresa nombre del Autor",
        to:'Para:',
        toEmpty:'Ingrese para',
        quote:'Frase:',
        quoteEmpty:'Ingrese la frase',
        quoteDate:"Fecha de la frase:",
        quoteDateEmpty: "ingrese Fecha de la frase",
        submit:'Enviar',
        reset:"Reiniciar",
        shareTittle:"Mira esta increible frase!",
        shareDescription:"Esta frase fue generada en quote app",
        shareQuote:"Sample Quote",
        seeMore:"Ver Mas",
        settingsMainLabel:"Ajustes",
        settingsGeneralLabel:"Generales",
        language:"Lenguaje"
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;
