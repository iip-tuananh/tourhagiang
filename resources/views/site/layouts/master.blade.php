<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
    @include('site.partials.head')
    @yield('css')
</head>

<body ng-app="App" data-spy="scroll" data-target="#nav-scrollspy" data-offset="300">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RV5NTP"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    @yield('content')


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

</body>

</html>
