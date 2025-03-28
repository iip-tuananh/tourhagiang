<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
    @include('site.partials.head')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js" integrity="sha512-b+nQTCdtTBIRIbraqNEwsjB6UvL3UEMkXnhzd8awtCYh0Kcsjl9uEgwVFVbhoj3uu1DO1ZMacNvLoyJJiNfcvg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="/site/css/style.min.css?v=20240124">
    <link rel="stylesheet" href="/site/css/callbutton.css?v=20240124">
    <script src="/site/js/jquery.min.js"></script>
    <style type="text/css">@font-face {font-family:Nunito;font-style:normal;font-weight:400;src:url(/cf-fonts/s/nunito/5.0.16/cyrillic/400/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Nunito;font-style:normal;font-weight:400;src:url(/cf-fonts/s/nunito/5.0.16/vietnamese/400/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Nunito;font-style:normal;font-weight:400;src:url(/cf-fonts/s/nunito/5.0.16/latin-ext/400/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Nunito;font-style:normal;font-weight:400;src:url(/cf-fonts/s/nunito/5.0.16/latin/400/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Nunito;font-style:normal;font-weight:400;src:url(/cf-fonts/s/nunito/5.0.16/cyrillic-ext/400/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}</style>
    <style>
        .post-content img {max-width: 100%; height: auto !important;}

        @media  only screen and (min-width: 900px) {
            .post-content img.fullsize {margin-left: -50px !important; margin-right: -50px !important; max-width: 900px;}
            p:has(> img.fullsize) {
                text-align: center;
            }
        }
        .flatpickr-calendar.open {z-index: 666666669;}
        .modal {z-index: 666666668;}
        .modal-backdrop.show {z-index: 666666667;}
        /* @media  only screen and (max-width: 1200px) {
            .post-content img.fullsize {margin-left: 0; margin-right: 0; max-width: 100%;}

        } */
    </style>
    @yield('css')
</head>

<body ng-app="App" data-spy="scroll" data-target="#nav-scrollspy" data-offset="300" ng-cloak>
    @yield('content')

    @include('site.partials.footer')

    @include('site.partials.angular_mix')
    <script type="text/javascript">
        (() => {
            'use strict';
            // Page is loaded
            const objects = document.getElementsByClassName('asyncImage');
            Array.from(objects).map((item) => {
                // Start loading image
                const img = new Image();
                img.src = item.dataset.src;
                // Once image is loaded replace the src of the HTML element
                img.onload = () => {
                    item.classList.remove('asyncImage');
                    return item.nodeName === 'IMG' ?
                        item.src = item.dataset.src :
                        item.style.backgroundImage = `url(${item.dataset.src})`;
                };
            });
        })();
    </script>
    @stack('scripts')
    <script src="/site/js/vendors.js"></script>

    {{-- Call to action button --}}
    <div id="call-to-action-pc" class="hidden-xs">
        <div onclick="window.location.href= 'tel:{{ $config->hotline }}'" class="hotline-phone-ring-wrap">
            <div class="hotline-phone-ring">
                <div class="hotline-phone-ring-circle"></div>
                <div class="hotline-phone-ring-circle-fill"></div>
                <div class="hotline-phone-ring-img-circle">
                    <a href="tel:{{ $config->hotline }}" class="pps-btn-img">
                        <img src="/site/images/phone.png" alt="Gọi điện thoại" width="50" loading="lazy">
                    </a>
                </div>
            </div>
            <a href="tel:{{ $config->hotline }}">
            </a>
            <div class="hotline-bar"><a href="tel:{{ $config->hotline }}">
                </a><a href="tel:{{ $config->hotline }}" style="padding-left: 23px;">
                    <span class="text-hotline">{{ $config->hotline }}</span>
                </a>
            </div>

        </div>
        <div class="inner-fabs">
            <a target="blank" href="" class="fabs roundCool" id="challenges-fab"
                data-tooltip="Send Messenger">
                <img class="inner-fab-icon" src="/site/images/messenger-icon.png" alt="challenges-icon"
                    border="0" loading="lazy">
            </a>
            <a target="blank" href="https://zalo.me/{{ $config->zalo }}" class="fabs roundCool" id="chat-fab"
                data-tooltip="Send message Zalo">
                <img class="inner-fab-icon" src="/site/images/zalo.png" alt="chat-active-icon"
                    border="0" loading="lazy">
            </a>
            <a target="blank" href="https://maps.app.goo.gl/RbxLcX4hv5CqZALo9" class="fabs roundCool" id="chat-fab"
                data-tooltip="View map">
                <img class="inner-fab-icon" src="/site/images/map.png" alt="chat-active-icon"
                    border="0" loading="lazy">
            </a>

        </div>
        <div class="fabs roundCool call-animation" id="main-fab">
            <img class="img-circle" src="/site/images/lienhe.png" alt="" width="135" loading="lazy">
        </div>
    </div>
    <div id="azt-contact-footer-outer" class="hidden-lg">
        <div id="azt-contact-footer">
            <a href="#" class="mr_menu_toggle_mobile">
                <span>
                    <img src="/site/images/menu.png" alt="menu">
                    <span class="azt-contact-footer-btn-label">Menu</span>
                </span>
            </a>
            <a href="https://maps.app.goo.gl/aJYeaHXBZYXG4gQ89">
                <span>
                    <img src="/site/images/map.png" alt="Map">
                    <span class="azt-contact-footer-btn-label">Map</span>
                </span>
            </a>
            <a id="azt-contact-footer-btn-center" href="tel:{{ $config->hotline }}">
                <span class="azt-contact-footer-btn-center-icon">
                    <span class="phone-vr-circle-fill"></span>
                    <img src="/site/images/phone.png" alt="Call Now">
                </span>
                <span>
                    <span class="azt-contact-footer-btn-label">
                        <span>Call Now</span>
                    </span>
                </span>
            </a>
            <a href="https://facebook.com/" target="_blank">
                <span>
                    <img src="/site/images/messenger-icon.png" alt="Messenger">
                    <span class="azt-contact-footer-btn-label">Messenger</span>
                </span>
            </a>
            <a href="https://zalo.me/{{ $config->zalo }}" target="_blank">
                <span>
                    <img class="zalo-icon" src="/site/images/zalo.png" alt="Zalo">
                    <span class="azt-contact-footer-btn-label">Zalo</span>
                </span>
            </a>
        </div>
    </div>
    <script src="/site/js/callbutton.js"></script>

    <!-- Google Translate -->
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'vi',includedLanguages:'en,vi', }, 'translate_select');
        }
    </script>
    <div id="translate_select" style="display: none;"></div>
    <style>
        #goog-gt-tt {
            display: none !important;
        }
        /* iframe.skiptranslate {
            display: none !important;
        }
        .skiptranslate {
            display: none !important;
        } */
    </style>
    <script type="text/javascript"
    src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
    </script>
    <script>
        function translateheader(lang){
            var languageSelect = document.querySelector("select.goog-te-combo");
            languageSelect.value = lang;
            languageSelect.dispatchEvent(new Event("change"));
        }
        function scrollHiddenTranslate() {
            var frame = document.querySelector("iframe.skiptranslate");
            if (frame) {
                if (window.scrollY > 100) {
                    frame.style.display = "none";
                } else {
                    frame.style.display = "block";
                }
            }
        }

        window.addEventListener("scroll", scrollHiddenTranslate);
        scrollHiddenTranslate();
    </script>


</body>

</html>
