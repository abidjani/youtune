window.onscroll = function() {
    var className = 'sticky';
    var scrollTrigger = 60;
    var header = document.getElementsByTagName('header')[0];
    var firstLogo = header.getElementsByTagName('img')[0];
    var selectedLanguage = header.getElementsByClassName('language-selected')[0];
    var selectedLanguageDarkClassName = 'language-dark';

    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        header.classList.add(className);
        // firstLogo.src = '../images/common/youtunein_colored3d.png';
        selectedLanguage.classList.add(selectedLanguageDarkClassName);
    } else {
        header.classList.remove(className);
        // firstLogo.src = '../images/common/youtunein_light.png';
        selectedLanguage.classList.remove(selectedLanguageDarkClassName);
    }
};
