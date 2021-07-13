const refs = {
  telephoneFirst: {
    link: 'tel:+380665832837',
    text: '38 (066) 583-28-37'
  },
  telephoneSecond: {
    link: 'tel:+380969991765',
    text: '38 (096) 999-17-65'
  },
  maill: "info@aeroc.store",
  linkFb: "https://www.facebook.com/aeroc.ua",
  linkInst: "https://www.instagram.com/aeroc.ua/",
  linkYouTube: "https://www.youtube.com/channel/UCumgUm6iHKmJ_zZ0noGaCwA"
}



export const headerTemplate = `
<div class="header-top container">
      <div class="header-top__logo">
        <a href="index.html" class="logo">
          <img src="images/logo.svg" alt="logo" />
        </a>
      </div>
      <div class="header-top__right">
        <div class="header-number">
          <div class="header-number__icon">
            <img src="images/call.svg" alt="" />
          </div>
          <a href="${refs.telephoneFirst.link} " class="header-number__item">${refs.telephoneFirst.text}</a>
          <a href="${refs.telephoneSecond.link}" class="header-number__item">${refs.telephoneSecond.text}</a>
        </div>
        <div class="header-social">
          <a href="${refs.linkFb}" class="header-social__item facebook" target="_blank">facebook</a>
          <a href="${refs.linkInst}" class="header-social__item instagram" target="_blank">instagram</a>
          <a href="${refs.linkYouTube}" class="header-social__item youTube" target="_blank">YouTube</a>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-nav container">
        <button type="button" class="header-nav__btn js-open-catalog">
          <span class="header-nav__btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <rect x="1" y="1" width="9" height="9" rx="1" stroke="#F04F23" stroke-width="2" />
              <rect x="15" y="1" width="9" height="9" rx="1" stroke="#F04F23" stroke-width="2" />
              <rect x="15" y="15" width="9" height="9" rx="1" stroke="#F04F23" stroke-width="2" />
              <rect x="1" y="15" width="9" height="9" rx="1" stroke="#F04F23" stroke-width="2" />
            </svg>
          </span>
          Каталог товарів</button>
        <button type="button" class="header-nav__buy js-open-modal">Придбати</button>
      </div>
      <div class="header-catalog js-header-catalog">
        <div class="header-catalog__contain">
          <nav class="header-catalog__list">
            <a href="./blocks-aeroc.html" class="header-link">Стінові блоки AEROC</a>
            <a href="./locks-u.html" class="header-link">U-блоки AEROC</a>
            <a href="./thermal-insulation-panels.html" class="header-link">Теплоізоляція AEROC ENERGY</a>
            <a href="./fittings.html" class="header-link">Армовані вироби AEROC</a>
            <a href="./mixture.html" class="header-link">Сухі будівельні суміші AEROC</a>
            <a href="./tool.html" class="header-link">Інструмент AEROC</a>
            <a href="./doc/Instrykcia_korystuvacha.pdf" class="header-link">Інструкція користувача</a>
          </nav>
        </div>
      </div>
    </div>
`;
export const footerTemplate = `
  <div class="footer-top container">
  <div class="footer-top__item">
    <div class="footer-logo">
      <img src="images/logo.svg" alt="">
    </div>
    <ul class="footer-contact">
      <li class="footer-contact__item">
        <div class="e-nexus__make">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
            <path
              d="M6.99988 0C3.40532 0 0.480957 2.92437 0.480957 6.51888C0.480957 10.9798 6.31475 17.5287 6.56313 17.8053C6.79643 18.0651 7.20375 18.0647 7.43662 17.8053C7.685 17.5287 13.5188 10.9798 13.5188 6.51888C13.5187 2.92437 10.5944 0 6.99988 0ZM6.99988 9.79871C5.19137 9.79871 3.72008 8.32739 3.72008 6.51888C3.72008 4.71037 5.1914 3.23909 6.99988 3.23909C8.80835 3.23909 10.2796 4.71041 10.2796 6.51892C10.2796 8.32743 8.80835 9.79871 6.99988 9.79871Z"
              fill="#ffffff"></path>
          </svg>
        </div>
        Україна, 08700, м. Обухів
        <br> вул. Промислова, 6
      </li>
      <li class="footer-contact__item">
        <div class="e-nexus__make">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M11.8718 10.1867C11.376 9.67399 10.757 9.67399 10.2643 10.1867C9.88846 10.577 9.51264 10.9674 9.14313 11.3643C9.04207 11.4735 8.9568 11.4966 8.83363 11.4238C8.59045 11.2849 8.33149 11.1725 8.09778 11.0203C7.00822 10.3025 6.09551 9.37959 5.28702 8.34093C4.88593 7.8249 4.52906 7.27249 4.27956 6.65062C4.22903 6.52492 4.23851 6.44222 4.33641 6.33968C4.71223 5.95927 5.07858 5.56895 5.44808 5.17862C5.96286 4.63613 5.96286 4.00102 5.44493 3.45523C5.15122 3.14429 4.85751 2.83997 4.5638 2.52903C4.26061 2.21148 3.96059 1.89061 3.65425 1.57637C3.15842 1.07027 2.53942 1.07027 2.04674 1.57968C1.66776 1.97 1.30458 2.37025 0.91928 2.75396C0.562408 3.1079 0.382393 3.54123 0.344495 4.04733C0.28449 4.87099 0.477138 5.64834 0.748739 6.40583C1.30458 7.97376 2.15096 9.36636 3.17737 10.6432C4.5638 12.3699 6.21868 13.736 8.15463 14.7218C9.02628 15.165 9.92951 15.5057 10.9117 15.562C11.5876 15.6017 12.175 15.423 12.6455 14.8706C12.9677 14.4935 13.3309 14.1495 13.6719 13.789C14.1772 13.2531 14.1804 12.6048 13.6783 12.0755C13.0782 11.4437 12.475 10.8152 11.8718 10.1867Z"
              fill="#ffffff"></path>
            <path
              d="M11.2687 8.21257L12.434 8.00417C12.2509 6.88281 11.7455 5.86731 10.9781 5.0602C10.1665 4.21008 9.14006 3.67421 8.00944 3.50882L7.84521 4.73603C8.72003 4.86503 9.51588 5.27851 10.1444 5.93677C10.7381 6.55865 11.1265 7.34591 11.2687 8.21257Z"
              fill="#ffffff"></path>
            <path
              d="M13.091 2.90689C11.7456 1.49774 10.0433 0.607927 8.16422 0.333374L8 1.56059C9.62329 1.79876 11.095 2.56949 12.2572 3.78348C13.3594 4.93792 14.0826 6.39669 14.3447 8.001L15.5101 7.79261C15.2038 5.93359 14.3669 4.24658 13.091 2.90689Z"
              fill="#ffffff"></path>
          </svg>
        </div>
        ${refs.telephoneFirst.text}
        <br>
        ${refs.telephoneSecond.text}
      </li>
      <li class="footer-contact__item">
        <div class="e-nexus__make">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M0.00814536 6.67325C-0.0148264 7.14928 0.0108255 7.62634 0.0846633 8.09716C0.555803 11.0045 2.7868 13.3113 5.67664 13.8792C6.10955 13.9598 6.54897 14.0003 6.98932 14C8.2631 14.002 9.51331 13.6565 10.6053 13.0006L9.7013 11.5023C7.21493 12.9948 3.98948 12.1889 2.49713 9.7025C1.00474 7.21606 1.81055 3.99051 4.29692 2.49812C5.18942 1.96242 6.22102 1.70404 7.2606 1.75589C10.1005 1.98851 12.278 4.37612 12.2488 7.22552V7.87575C12.2488 8.3591 11.857 8.75089 11.3736 8.75089C10.8903 8.75089 10.4985 8.3591 10.4985 7.87575V7.00061C10.4985 5.06732 8.93131 3.50005 6.99807 3.50005C5.06483 3.49053 3.4899 5.05003 3.48038 6.98327C3.47086 8.91657 5.03032 10.4916 6.9635 10.5011C7.85792 10.5055 8.72013 10.1673 9.37313 9.55602C10.2948 10.6672 11.9427 10.8208 13.0539 9.89913C13.6556 9.39998 14.0024 8.65764 13.999 7.87581V7.22558C14.0625 3.43064 11.1355 0.254312 7.34811 0.00828816C3.48076 -0.178226 0.194545 2.80584 0.00814536 6.67325ZM6.99807 8.75089C6.03145 8.75089 5.24784 7.96726 5.24784 7.00061C5.24784 6.03396 6.03145 5.25033 6.99807 5.25033C7.96469 5.25033 8.7483 6.03396 8.7483 7.00061C8.7483 7.96726 7.96469 8.75089 6.99807 8.75089Z"
              fill="#ffffff"></path>
          </svg>
        </div>
        ${refs.maill}
      </li>
    </ul>
    <div class="footer-social">
      <a href="${refs.linkFb}" class="footer-social__item facebook" target="blank">facebook</a>
      <a href="${refs.linkInst}" class="footer-social__item instagram" target="blank">instagram</a>
      <a href="${refs.linkYouTube}" class="footer-social__item youTube" target="blank">YouTube</a>
    </div>
  </div>
  <div class="footer-top__item">
    <ul class="footer-listLink">
      <li class="footer-listLink__item">
        <a href="#">Головна</a>
      </li>
      <li class="footer-listLink__item">
        <a href="#">Про компанію</a>
      </li>
      <li class="footer-listLink__item">
        <a href="#">Придбати</a>
      </li>
      <li class="footer-listLink__item">
        <a href="#">Каталог товарів</a>
      </li>
    </ul>
  </div>
  <div class="footer-top__item">
    <form class="footer-form">
      <h2 class="footer-form__title">Зворотній зв'язок</h2>
      <input type="text" name="name" class="input" placeholder="Им'я">
      <input type="text" name="name" class="input" placeholder="Телефон">
      <button type="submit" class="btn">Відправити</button>
    </form>
  </div>
  </div>
  <div class="footer-bootom">
  <div class="footer-bootom-link container">
    <a href="#">© AEROC 2006 - 2021 Всі права захищені.</a>
    <a href="#">Політика конфіденційності</a>
    <a href="#">Створення сайтів - студія Webkitchen</a>
  </div>
  </div>
`;

export const modalTemlate = `<span class="modal-close">x</span>
<div class="modal">
  <form class="modal-form">
    <h2 class="modal-form__title">Залиште заявку</h2>
    <input type="text" class="input" placeholder="ім'я">
    <input type="phone" class="input" placeholder="Телефон">
    <button type="submit" class="modal-form__submit">Відправити</button>
  </form>
</div>`;

export const callTemlate = `<a href="tel:+380665832837" class="call-link"><span></span></a>`;
