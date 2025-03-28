<footer class="footer" id="footer">
    <div class="footer-main text-center py-4">
        <div class="container">
            <a class="footer-logo text-primary-2 mb-3" href="https://avanaretreat.com/vn">
                <svg class="iconsvg-avana">
                    <use xlink:href="/htmlv2/images/sprite.svg#avana"></use>
                </svg>
            </a>
            <div class="footer-nav nav justify-content-center mb-4 mb-md-3">
                <h3 class="nav-item">
                    <a class="nav-link" href="/vn/lien-he">Hạng phòng</a>
                </h3>
                <h3 class="nav-item">
                    <a class="nav-link" href="/vn/tu-lieu-truyen-thong.html">Spa</a>
                </h3>
                <h3 class="nav-item">
                    <a class="nav-link" href="{{route('front.experienceService')}}">Trải nghiệm</a>
                </h3>
                <h3 class="nav-item">
                    <a class="nav-link" href="/vn/dieu-khoan-su-dung">Ẩm thực</a>
                </h3>
                <h3 class="nav-item">
                    <a class="nav-link" href="/vn/blog">Pool & bar về khu nghỉ dưỡng</a>
                </h3>
                <h3 class="nav-item">
                    <a class="nav-link" href="{{route('front.resortService')}}">Gói nghĩ dưỡng</a>
                </h3>
                <h3 class="nav-item">
                    <a class="nav-link" href="{{route('front.promotionService')}}">Ưu đãi</a>
                </h3>

            </div>
            <div class="footer-search search mb-3">
                <form id="contact-subscribe" class="form-style-1" id="contact-form" action="{{ route('front.post-contact') }}" method="POST">
                    @csrf
                    <input class="search-input form-control" autocomplete="off" name="email" type="text" placeholder="Your email">
                    <button class="search-btn btn btn-link" type="submit">&#8594;</button>
                </form>
            </div>
            <div class="footer-social social mt-1">
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
                    <svg class="iconsvg-twitter-x">
                        <use xlink:href="/htmlv2/images/sprite.svg#twitter-x"></use>
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
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container text-center text-md-start">
            <div class="row justify-content-between align-items-center">
                <div class="col-md-auto">
                    <p class="mb-1 mb-md-0">@ 2025 {{ $config->web_title }}</p>
                </div>
                <div class="col-md-auto">
                    <p class="footer-copyright-address mb-1">{{ $config->address_company }}</p>
                    <div class="row justify-content-center justify-content-md-end">
                        <div class="col-sm-auto mb-1 mb-md-0">
                            <a href="mailto:{{ $config->email }}"><span class="__cf_email__">{{ $config->email }}</span></a>
                        </div>
                        <div class="col-sm-auto">
                            <a href="tel:{{str_replace(' ','',$config->hotline)}}">{{$config->hotline}}</a> | <a href="tel:{{str_replace(' ','',$config->phone_switchboard)}}">{{$config->phone_switchboard}}</a> | <a href="tel:02372.888.222">02372.888.222</a> | <a href="tel:02376.666.777">02376.666.777</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
