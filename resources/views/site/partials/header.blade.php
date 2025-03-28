<header class="header header-headroom {{ Route::currentRouteName() == 'front.promotionService' || Route::currentRouteName() == 'front.experienceService' || Route::currentRouteName() == 'front.resortService' ? 'header-fixed' : ''}}" id="header">
    <nav class="header-navbar navbar navbar-expand-lg" id="navbar">
        <div class="container">
            <a class="header-logo" href="{{route('front.home-page')}}">
                {{-- <svg class="iconsvg-avana">
                    <use xlink:href="{{$config->image->path}}"></use>
                </svg> --}}
                <img src="{{$config->image->path}}" alt="{{$config->image->name}}" loading="lazy" style="width: 100%;">
            </a>
            <button class="navbar-toggle hamburger hamburger--slider d-lg-none" id="navbar-toggle">
        <span class="hamburger-box d-block">
          <span class="hamburger-inner"></span>
        </span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-collapse">
                <a class="navbar-logo d-lg-none" href="{{route('front.home-page')}}">
                    {{-- <svg class="iconsvg-avana">
                        <use xlink:href="{{$config->image->path}}"></use>
                    </svg> --}}
                    <img src="{{$config->image->path}}" alt="{{$config->image->name}}" loading="lazy" style="width: 100%;">
                </a>
                <button class="navbar-close btn d-lg-none" id="navbar-close">
                    <i class="icont-close"></i>
                </button>
                <ul class="navbar-nav w-100" id="navbar-nav">
                    <li class="nav-item  ">
                        <a class="nav-link " href="{{route('front.room-category')}}">Hạng phòng</a>
                    </li>
                    <li class="nav-item  ">
                        <a class="nav-link " href="{{route('front.spa')}}">SPA</a>
                    </li>
                    {{-- <li class="nav-item  ">
                        <a class="nav-link " href="{{route('front.experienceService')}}">Trải nghiệm</a>
                    </li> --}}
                    <li class="nav-item  dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Ẩm Thực</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="/vn/am-thuc">Trải nghiệm ẩm thực</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/vn/am-thuc-ban-dia">Ẩm thực bản địa</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/vn/tiec-toi-rieng-tu">Tiệc tối riêng tư</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item  ">
                        <a class="nav-link " href="/vn/cloud-pool">Pool & bar về khu nghỉ dưỡng</a>
                    </li>
                    {{-- <li class="nav-item ms-lg-auto dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Về Avana</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="/vn/cau-chuyen-avana">Chuyện của Avana</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/vn/phat-trien-ben-vung">Phát Triển Bền Vững</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/vn/triet-ly-hoat-dong">Triết lý hoạt động</a>
                            </li>
                        </ul>
                    </li> --}}
                    <li class="nav-item ms-lg-auto ">
                        <a class="nav-link " href="{{route('front.experienceService')}}">Trải nghiệm</a>
                    </li>
                    <li class="nav-item  ">
                        <a class="nav-link " href="{{ route('front.resortService') }}">Gói Nghỉ Dưỡng</a>
                    </li>
                    <li class="nav-item  ">
                        <a class="nav-link " href="{{route('front.promotionService')}}">Ưu đãi</a>
                    </li>

                    <li class="nav-item dropdown dropdown-language d-none d-lg-block">
                        <a class="nav-link dropdown-toggle" href="javascript:void(0)">Ngôn ngữ</a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="nav-link " href="javascript:void(0)" onclick="translateheader('en')">Tiếng anh</a>
                            <a class="nav-link active" href="javascript:void(0)" onclick="translateheader('vi')">Tiếng việt</a>
                        </div>
                    </li>
                </ul>
                <!-- for mobile (cta, socials, language)-->
                <div class="navbar-bottom d-lg-none">
                    <a class="btn btn-cta btn-primary-2 mb-4" href="https://avanaretreat.com/vn/dat-phong" role="button">Đặt phòng</a>
                    <div class="navbar-social social mb-5">
                        <a class="social-item" target="_blank" href="https://www.facebook.com/avanaretreat/">
                            <svg class="iconsvg-facebook">
                                <use xlink:href="/htmlv2/images/sprite.svg#facebook"></use>
                            </svg>
                        </a>
                        <a class="social-item" target="_blank" href="https://www.instagram.com/avanaretreat/">
                            <svg class="iconsvg-instagram">
                                <use xlink:href="/htmlv2/images/sprite.svg#instagram"></use>
                            </svg>
                        </a>
                        <a class="social-item" target="_blank" href="https://twitter.com/avanaretreat/">
                            <svg class="iconsvg-twitter">
                                <use xlink:href="/htmlv2/images/sprite.svg#twitter"></use>
                            </svg>
                        </a>
                        <a class="social-item" target="_blank" href="https://www.youtube.com/@AvanaRetreat">
                            <svg class="iconsvg-youtube">
                                <use xlink:href="/htmlv2/images/sprite.svg#youtube"></use>
                            </svg>
                        </a>
                        <a class="social-item" target="_blank" href="https://wa.me/84382209868">
                            <svg class="iconsvg-whatsapp ">
                                <use xlink:href="/htmlv2/images/sprite.svg#whatsapp"></use>
                            </svg>
                        </a>
                        <a class="social-item" target="_blank" href="https://zalo.me/4287706890382799776">
                            <svg class="iconsvg-zalo ">
                                <use xlink:href="/htmlv2/images/sprite.svg#zalo"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="nav nav-language mt-auto mb-3">
                        <a class="nav-link " href="javascript:void(0)" onclick="translateheader('en')">Tiếng anh</a>
                        <a class="nav-link active" href="javascript:void(0)" onclick="translateheader('vi')">Tiếng việt</a>
                    </div>
                </div>
            </div>
            <a class="btn btn-cta btn-primary-2 header-cta ms-2 ms-xl-3" href="https://avanaretreat.com/vn/dat-phong" role="button">Đặt phòng
                <!-- <br class="d-lg-none"> your stay -->
            </a>
        </div>
    </nav>
</header>
