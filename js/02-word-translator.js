let languageCode = prompt(`Please enter language code`);
// Method 1
if (languageCode === 'es') {
    console.log(`Hello World translated in Spanish is: Hola Mundo`);
} ;
if (languageCode ===`de`) {
    console.log(`Hello World translated in German is: Hallo Welt`);
} ;
if (languageCode === `fr`) {
    console.log(`Hello World translated in French is: Bonjour le monde`);
} ;
if (languageCode === `en`) {
    console.log(`Hello World translated in English is: Hello World`);
} ;
if (languageCode != 'es' && languageCode != 'de' && languageCode != `fr` && languageCode != `en` ) {
    console.log(`Hello World translated in English is: Hello World`);
};

// Method 2
if (languageCode === 'es') {
    console.log(`Hello World translated in Spanish is: Hola Mundo`);
} else if (languageCode ===`de`) {
    console.log(`Hello World translated in German is: Hallo Welt`);
} else if (languageCode === `fr`) {
    console.log(`Hello World translated in French is: Bonjour le monde`);
} else {
    console.log(`Hello World translated in English is: Hello World`);
};