let replaceSettings = {
  beforebegin: 'beforebegin', // перед самим элементом targetElement
  afterbegin: 'afterbegin', // внутри элемента targetElement, перед его первым потомком
  beforeend: 'beforeend', //  внутри элемента targetElement, после его последнего потомка
  afterend: 'afterend', // после самого элемента targetElement
  mobile: 576,
  smallTablet: 768,
  tablet: 1006
}

let elementName = {
  phone: '.header__contact',
  phoneParent: '.header__adress',
  phoneMobile: '.header__logo',

  sortingBtn : '.seo__consultation-title',
  formParentBtn: '.seo__consultation-info',
  mobileSiblingstBtn: '.seo__consultation',

  lang: '.lang',
  langParent: '.header__worktime',
  langMobile: '.mobile__lang',
}

let items = [...document.querySelectorAll('.wrapper')];

const replaceElements = (elements, elementClass, desktopClass, mobileClass, mobileSetting, desktopSetting, breakpointSetting) => {
  let containerWidth = document.documentElement.clientWidth;

  elements.map(function (item) {
    const myElement = item.querySelector(elementClass);
    const myDesktop = item.querySelector(desktopClass);
    const myMobile = item.querySelector(mobileClass);

    (function() {
      if (myDesktop && myElement && myMobile) {
        containerWidth <= breakpointSetting ?
        myMobile.insertAdjacentElement(mobileSetting, myElement) :
        myDesktop.insertAdjacentElement(desktopSetting, myElement);
      }
    }());
  });
}

window.addEventListener('resize', () => {
  replaceElements(items, elementName.sortingBtn, elementName.formParentBtn, elementName.mobileSiblingstBtn, replaceSettings.beforebegin, replaceSettings.afterbegin, replaceSettings.tablet);
  replaceElements(items, elementName.phone, elementName.phoneParent, elementName.phoneMobile, replaceSettings.afterend, replaceSettings.beforebegin, replaceSettings.tablet);
  replaceElements(items, elementName.lang, elementName.langParent, elementName.langMobile, replaceSettings.afterend, replaceSettings.afterend, replaceSettings.tablet);
});

window.addEventListener('DOMContentLoaded', () => {
  replaceElements(items, elementName.sortingBtn, elementName.formParentBtn, elementName.mobileSiblingstBtn, replaceSettings.beforebegin, replaceSettings.afterbegin, replaceSettings.tablet);
  replaceElements(items, elementName.phone, elementName.phoneParent, elementName.phoneMobile, replaceSettings.afterend, replaceSettings.beforebegin, replaceSettings.tablet);
  replaceElements(items, elementName.lang, elementName.langParent, elementName.langMobile, replaceSettings.afterend, replaceSettings.afterend, replaceSettings.tablet);


});
