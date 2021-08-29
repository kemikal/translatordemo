function Translator(cb, textToTranslate, lang) {

   fetch("https://api.mymemory.translated.net/get?d=janne@hiveandfive.se&q=" + textToTranslate + "!&langpair=sv|" + lang)
   .then(response => response.json())
   .then(data => {
       //console.log(data.responseData.translatedText);
       cb(data.responseData.translatedText);
   }) 

}

export default Translator;