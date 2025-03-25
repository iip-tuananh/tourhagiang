@extends('site.layouts.master')
@section('title')
    {{ $config->web_title }}
@endsection
@section('description')
    {{$config->web_des}}
@endsection
@section('image')
    {{url(''. $banners[0]->image->path ?? '')}}
@endsection

@section('css')
@endsection

@section('content')
    <div class="page page-home">
        @include('site.partials.header')
        <div class="page-main">
            <section class="section-hero section text-white" id="section-hero">
                <div class="container text-center">

                    <h1 class="section-title mb-2">Avana Retreat</h1>
                    <p class="section-lead fw-5 mx-auto">Find your natural-self</p>
                    <a class="play-circle" id="hero-btn-play" href="#"></a>
                </div>
                <video class="section-bg-video" id="hero-video" autoplay muted="muted" loop playsinline poster="https://avanaretreat.com/storage/2023/07/1688529704DJI_0065 copy.jpg" data-poster-full="https://avanaretreat.com/storage/2023/07/1688529704DJI_0065 copy.jpg" data-src-full="https://avanaretreat.com/storage/2023/05/1685327232Organic Life - Video banner.mp4">
                    <source src="https://avanaretreat.com/storage/2023/07/1688528966Organic Life   banner 10s autoplay 2.mp4" type="video/mp4">
                </video>
            </section>

            <!-- SECTION WELCOME -->
            <section class="section-1 section section-line-overlap pt-5" id="section-1">
                <div class="container text-center">
                    <h2 class="section-title fs-1 ff-tertiary fw-bold text-primary-3 mb-3">Avana Retreat</h2>
                    <p class="section-lead paragraph text-primary-4 mw-890px mx-auto mb-0">Chào mừng bạn đến với Avana Retreat - Một “bản nhỏ” ẩn giữa rừng nguyên sinh.</p>
                </div>
            </section>
            <!-- END SECTION WELCOME -->
            <!-- SECTION Our story -->
            <section class="section-2 section bg-primary-1" id="section-2">
                <div class="container flex-center flex-column">
                    <figure class="blockquote blockquote-center mb-5 pb-lg-3">
                        <blockquote class="blockquote-body">
                            <p><p>Y&ecirc;u tr&aacute;i đất như y&ecirc;u ch&iacute;nh m&igrave;nh,</p>
                            <p>ta sẽ biết y&ecirc;u thương vạn vật</p></p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <span class="blockquote-author">LÃO TỬ</span>
                        </figcaption>
                    </figure>
                    <div class="row g-20px align-items-center">
                        <div class="col-lg-8">
                            <div class="row g-20px">
                                <div class="col-md-6 align-self-center text-center text-md-end pe-md-4 mb-4 mb-md-0">
                                    <div class="section-content">
                                        <h2 class="section-title text-uppercase text-primary fw-5 mb-3 pb-1">Chuyện của Avana</h2>
                                        <div class="paragraph text-gray mb-4"><p><span style="font-weight: 400;">Khi quyết định mua mảnh đất n&agrave;y, những người đồng s&aacute;ng lập Avana Retreat kh&ocirc;ng hề nghĩ rằng m&igrave;nh sẽ x&acirc;y dựng tại đ&acirc;y một khu nghỉ dưỡng. Họ chỉ c&oacute; một suy nghĩ đơn giản: &ldquo;Vẻ đẹp nguy&ecirc;n sơ v&agrave; nền văn h&oacute;a bản địa nơi n&agrave;y xứng đ&aacute;ng được bảo vệ, nu&ocirc;i dưỡng, v&agrave; chia sẻ với những người c&ugrave;ng chung t&igrave;nh y&ecirc;u d&agrave;nh cho thi&ecirc;n nhi&ecirc;n.&rdquo;</span></p>
                                            <p><span style="font-weight: 400;">Khởi sinh từ t&iacute;nh c&aacute;ch của những người th&iacute;ch kh&aacute;m ph&aacute;, ưa mạo hiểm, khao kh&aacute;t chinh phục những việc kh&oacute;, &yacute; tưởng đầu ti&ecirc;n về Avana Retreat ra đời một thời gian sau đ&oacute;.</span></p></div>
                                        <a class="btn btn-cta btn-outline-primary" href="https://avanaretreat.com/vn/cau-chuyen-avana" role="button">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="section-img section-img-1 h-100">
                                        <img class="img-fluid w-100 h-100" src="https://avanaretreat.com/storage/2023/04/1681705785Rectangle 5.png" alt="" />
                                    </div>
                                </div>
                                <div class="col-6 d-md-none">
                                    <div class="section-img section-img-3 h-100">
                                        <img class="img-fluid w-100 h-100" src="https://avanaretreat.com/storage/2023/04/16817058601618562486home-heritage-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="section-img section-img-2">
                                        <img class="img-fluid w-100 h-100" src="https://avanaretreat.com/storage/2023/04/1681705957Rectangle 7.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5 mx-auto d-none d-md-block">
                            <div class="section-img section-img-3">
                                <img class="img-fluid w-100 h-100" src="https://avanaretreat.com/storage/2023/04/16817058601618562486home-heritage-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END SECTION Our story -->
            <!-- SECTION Accomodatio -->
            <section class="section-3 section bg-primary-1 pt-0" id="section-3">
                <div class="section section-top text-white mb-0" style="background-image: url('https://avanaretreat.com/storage/2023/04/1681714748DJI_0267-1 copy 5.jpg')">
                    <div class="container">
                        <div class="row g-5 align-items-center">
                            <div class="col-md-6">
                                <figure class="blockquote blockquote-dark blockquote-center blockquote-md-start mb-0">
                                    <blockquote class="blockquote-body">
                                        <p><p><span style="font-weight: 400;">T&ocirc;i vẫn lu&ocirc;n mơ ước được sống trong sự tĩnh lặng của thi&ecirc;n nhi&ecirc;n</span></p></p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">
                                        <span class="blockquote-author">CLAUDE MONET</span>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-md-6 text-center text-md-start">
                                <h2 class="section-title text-uppercase fw-5 mb-3 pb-1">Hạng phòng</h2>
                                <div class="paragraph fw-5 mb-4"><p><span style="font-weight: 400;">Theo thời gian, </span><span style="color: #ffdfa4;"><strong>ba mươi s&aacute;u villa</strong></span><span style="font-weight: 400;"> của Avana, trong đ&oacute; ba </span><span style="color: #ffdfa4;"><strong>villa c&oacute; bể bơi ri&ecirc;ng nước n&oacute;ng</strong></span><span style="font-weight: 400;">, lần lượt xuất hiện, duy&ecirc;n d&aacute;ng v&agrave; tinh tế nhưng giản dị, gần gũi như lối sống v&agrave; nụ cười của người d&acirc;n địa phương. Tất cả đều x&acirc;y dọc theo sườn n&uacute;i với </span><span style="color: #ffdfa4;"><strong>ban c&ocirc;ng ri&ecirc;ng</strong></span><span style="font-weight: 400;"> nh&igrave;n ra ruộng bậc thang v&agrave; thung lũng xanh mướt. Lấy cảm hứng từ những n&eacute;t văn h&oacute;a đặc sắc của v&ugrave;ng đất T&acirc;y Bắc, c&aacute;c căn villa l&agrave; sự kết hợp ho&agrave;n hảo giữa </span><span style="color: #ffdfa4;"><strong>kiến tr&uacute;c bản địa</strong></span><span style="font-weight: 400;"> với phong cảnh thi&ecirc;n nhi&ecirc;n xung quanh.&nbsp;</span></p></div>
                                <a class="btn btn-cta btn-outline-white" href="https://avanaretreat.com/vn/hang-phong" role="button">Xem các hạng phòng</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="swiper-container swiper-accomodation swiper-buttons-outside swiper-pagination-outside">
                        <div class="swiper" data-plugin="swiper" data-options='{"spaceBetween":20}'>
                            <div class="swiper-wrapper">
                                <div class="swiper-slide text-center">
                                    <a href="https://avanaretreat.com/vn/hang-phong/#rooms-accommodation2">
                                        <img class="img-fluid w-100 mb-4" src="https://avanaretreat.com/storage/2023/04/168170140902. Bauhinia Moutain Suite _1.jpg" alt="" />
                                    </a>
                                    <a href="https://avanaretreat.com/vn/hang-phong/#rooms-accommodation2">
                                        <h3 class="section-title text-primary fw-5 mb-3 mt-md-2">Bauhinia Mountain Suite</h3>
                                    </a>
                                    <a class="btn btn-cta btn-primary px-4" href="https://avanaretreat.com/vn/dat-phong?room_id=2" role="button">
                                        Đặt phòng
                                    </a>
                                </div>
                                <div class="swiper-slide text-center">
                                    <a href="https://avanaretreat.com/vn/hang-phong/#rooms-accommodation1">
                                        <img class="img-fluid w-100 mb-4" src="https://avanaretreat.com/storage/2023/04/168170134601. Lantana Mountain Bungalow_1.jpg" alt="" />
                                    </a>
                                    <a href="https://avanaretreat.com/vn/hang-phong/#rooms-accommodation1">
                                        <h3 class="section-title text-primary fw-5 mb-3 mt-md-2">Lantana Mountain Bungalow 2PN</h3>
                                    </a>
                                    <a class="btn btn-cta btn-primary px-4" href="https://avanaretreat.com/vn/dat-phong?room_id=1" role="button">
                                        Đặt phòng
                                    </a>
                                </div>
                                <div class="swiper-slide text-center">
                                    <a href="https://avanaretreat.com/vn/hang-phong/#rooms-accommodation3">
                                        <img class="img-fluid w-100 mb-4" src="https://avanaretreat.com/storage/2023/05/168542265303. Ferms Grand Mountain Suite_4.jpg" alt="" />
                                    </a>
                                    <a href="https://avanaretreat.com/vn/hang-phong/#rooms-accommodation3">
                                        <h3 class="section-title text-primary fw-5 mb-3 mt-md-2">Ferns Grand Mountain Suite</h3>
                                    </a>
                                    <a class="btn btn-cta btn-primary px-4" href="https://avanaretreat.com/vn/dat-phong?room_id=3" role="button">
                                        Đặt phòng
                                    </a>
                                </div>
                                <div class="swiper-slide text-center">
                                    <a href="https://avanaretreat.com/vn/hang-phong/#rooms-accommodation4">
                                        <img class="img-fluid w-100 mb-4" src="https://avanaretreat.com/storage/2023/04/168170144004. Senna Hilltop Pool Villa 1 BR_1.jpg" alt="" />
                                    </a>
                                    <a href="https://avanaretreat.com/vn/hang-phong/#rooms-accommodation4">
                                        <h3 class="section-title text-primary fw-5 mb-3 mt-md-2">Senna Hilltop Pool Villa 1PN</h3>
                                    </a>
                                    <a class="btn btn-cta btn-primary px-4" href="https://avanaretreat.com/vn/dat-phong?room_id=4" role="button">
                                        Đặt phòng
                                    </a>
                                </div>
                                <div class="swiper-slide text-center">
                                    <a href="https://avanaretreat.com/vn/hang-phong/#rooms-accommodation5">
                                        <img class="img-fluid w-100 mb-4" src="https://avanaretreat.com/storage/2024/08/1722927145senna 2br.jpg" alt="" />
                                    </a>
                                    <a href="https://avanaretreat.com/vn/hang-phong/#rooms-accommodation5">
                                        <h3 class="section-title text-primary fw-5 mb-3 mt-md-2">Senna Hilltop Pool Villa 2PN</h3>
                                    </a>
                                    <a class="btn btn-cta btn-primary px-4" href="https://avanaretreat.com/vn/dat-phong?room_id=5" role="button">
                                        Đặt phòng
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-buttons swiper-buttons-style-1 d-none d-md-block">
                                <div class="swiper-button-prev">
                                    <svg class="iconsvg-arrow-right rotate-180">
                                        <use xlink:href="/htmlv2/images/sprite.svg#arrow-right"></use>
                                    </svg>
                                </div>
                                <div class="swiper-button-next">
                                    <svg class="iconsvg-arrow-right">
                                        <use xlink:href="/htmlv2/images/sprite.svg#arrow-right"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="swiper-pagination d-md-none"></div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END Accomodatio -->
            <!-- Cuisine -->
            <section class="section-4 section section-line-top" id="section-4">
                <div class="container flex-center flex-column">
                    <figure class="blockquote blockquote-center mb-5 pb-lg-3">
                        <blockquote class="blockquote-body">
                            <p><p>Mẹ Thi&ecirc;n Nhi&ecirc;n mới ch&iacute;nh l&agrave; nghệ sĩ đ&iacute;ch thực.<br />Những s&aacute;ng tạo ẩm thực c&oacute; nhiệm vụ gi&uacute;p Mẹ tỏa s&aacute;ng</p>            </blockquote>
                        <figcaption class="blockquote-footer">
                            <span class="blockquote-author">MARCO PIERRE WHITE</span>
                        </figcaption>
                    </figure>
                    <div class="row gx-0 gy-5 align-items-center justify-content-between align-self-stretch">
                        <div class="col-lg text-center text-lg-end">
                            <div class="section-body ms-auto">
                                <h2 class="section-title text-uppercase text-primary fw-5 mb-3 pb-1">Ẩm thực</h2>
                                <div class="paragraph text-gray mb-4"><p><span style="font-weight: 400;">H&agrave;nh tr&igrave;nh ẩm thực tại Avana Retreat giống như h&agrave;nh tr&igrave;nh khơi gợi k&yacute; ức hạnh ph&uacute;c. Những </span><span style="color: #915c37;"><strong>nguy&ecirc;n liệu tươi ngon nhất</strong></span><span style="font-weight: 400;"> được lựa chọn cẩn thận, chế biến kh&eacute;o l&eacute;o, b&agrave;y tr&iacute; tinh tế, kết nối với </span><span style="color: #915c37;"><strong>thi&ecirc;n nhi&ecirc;n</strong></span><span style="font-weight: 400;"> v&agrave; </span><span style="color: #915c37;"><strong>văn h&oacute;a địa phương</strong></span><span style="font-weight: 400;">. Bởi vậy m&agrave;, tại </span><span style="color: #915c37;"><strong>nh&agrave; h&agrave;ng b&ecirc;n ruộng bậc thang</strong></span><span style="font-weight: 400;"> hay kh&ocirc;ng gian </span><span style="color: #915c37;"><strong>b&iacute; mật</strong></span><span style="font-weight: 400;">, </span><span style="color: #915c37;"><strong>ri&ecirc;ng tư</strong></span><span style="font-weight: 400;"> ẩn s&acirc;u trong rừng, trải nghiệm ẩm thực trở n&ecirc;n an l&agrave;nh v&agrave; đong đầy cảm x&uacute;c.</span></p></div>
                                <a class="btn btn-cta btn-outline-primary section-btn-more" href="https://avanaretreat.com/vn/am-thuc" role="button">Tìm hiểu thêm</a>
                            </div>
                        </div>
                        <div class="col-imgs col-lg-auto d-grid gap-md-4 gap-3">
                            <div class="cuisine cuisine-1">
                                <img class="img-fluid w-100 cuisine-img" src="https://avanaretreat.com/storage/2024/06/1718779387private dining home.jpg" alt="" />
                                <div class="cuisine-overlay">
                                    <a class="btn btn-cta btn-outline-white cuisine-btn px-4" href="https://avanaretreat.com/vn/tiec-toi-ben-thac" role="button">Tiệc tối riêng tư</a>
                                </div>
                            </div>
                            <div class="cuisine cuisine-2">
                                <img class="img-fluid w-100 cuisine-img" src="https://avanaretreat.com/storage/2023/03/1680112777img-2.jpg" alt="" />
                                <div class="cuisine-overlay">
                                    <a class="btn btn-cta btn-outline-white cuisine-btn px-4" href="https://avanaretreat.com/vn/am-thuc-ban-dia" role="button">Ẩm thực bản địa</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END Cuisine -->
            <!-- SPA -->
            <section class="section-5 section section-line-overlap-top bg-primary-1" id="section-5">
                <div class="container flex-center flex-column">
                    <figure class="blockquote blockquote-center mb-5 pb-md-3">
                        <blockquote class="blockquote-body">
                            <p><p>Nơi tuyệt vời nhất để t&igrave;m thấy ch&iacute;nh m&igrave;nh l&agrave; b&ecirc;n cạnh một th&aacute;c nước,</p>
                            <p>trong &acirc;m thanh m&ecirc; hoặc của n&oacute;</p></p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <span class="blockquote-author">ROLAND R. KEMLER</span>
                        </figcaption>
                    </figure>
                    <div class="row g-5">
                        <div class="col-md-6">
                            <div class="section-img section-img-1 h-100">
                                <img class="img-fluid w-100 h-100" src="https://avanaretreat.com/storage/2024/01/17052908261681706587Rectangle 18.png" alt="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row flex-column h-100">
                                <div class="col text-center text-md-start flex-center-x flex-column mb-5 mb-xl-0">
                                    <div class="section-content">
                                        <h2 class="section-title text-uppercase text-primary fw-5 mb-3 pb-1">Orchid Spa</h2>
                                        <div class="paragraph text-gray mb-4"><p><span style="font-weight: 400;">Kh&ocirc;ng phải tự nhi&ecirc;n m&agrave; Orchid Spa được v&iacute; như t&acirc;m hồn của Avana Retreat. Nương theo </span><span style="color: #915c37;"><strong>d&ograve;ng suối</strong></span><span style="font-weight: 400;"> giữa </span><span style="color: #915c37;"><strong>rừng nguy&ecirc;n sinh</strong></span><span style="font-weight: 400;">, Orchid Spa l&agrave; v&ugrave;ng kh&ocirc;ng gian thư th&aacute;i đến kỳ lạ, thơm </span><span style="color: #915c37;"><strong>hương thảo mộc</strong></span><span style="font-weight: 400;"> dịu d&agrave;ng. Một c&acirc;y cầu gỗ d&agrave;i h&agrave;ng trăm m&eacute;t, uốn lượn theo d&ograve;ng chảy của th&aacute;c, tr&aacute;nh từng th&acirc;n c&acirc;y, rồi rẽ nh&aacute;nh, dẫn đến từng </span><span style="color: #915c37;"><strong>ph&ograve;ng trị liệu đơn v&agrave; đ&ocirc;i</strong></span><span style="font-weight: 400;">. </span><span style="font-weight: 400;">Orchid Spa giống như một một ốc đảo b&igrave;nh y&ecirc;n, d&agrave;nh tặng </span><span style="color: #915c37;"><strong>phương ph&aacute;p độc quyền</strong></span><span style="font-weight: 400;"> chăm s&oacute;c sức khỏe cho những người muốn nu&ocirc;ng chiều bản th&acirc;n v&agrave; thư gi&atilde;n t&acirc;m hồn.</span></p></div>
                                        <a class="btn btn-cta btn-outline-primary" href="https://avanaretreat.com/vn/spa" role="button">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="section-img section-img-2">
                                        <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2023/06/1685954053spa.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END SPA -->
            <!-- Experience -->
            <section class="section-6 section pb-0" id="section-6">
                <div class="container text-center">
                    <figure class="blockquote blockquote-center mb-5 pb-md-3">
                        <blockquote class="blockquote-body">
                            <p>Rời đường lớn, tìm đến với đường mòn</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <span class="blockquote-author">PYTHAGORAS</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="section section-nested text-white" style="background-image: url('https://avanaretreat.com/storage/2024/08/1723457004exp.jpg')">
                    <div class="container py-md-5">
                        <div class="section-content offset-xl-1 text-center text-md-start">
                            <h2 class="section-title text-uppercase fw-5 mb-3 pb-1">TRẢI NGHIỆM</h2>
                            <div class="paragraph fw-5 mb-4"><p><span style="font-weight: 400;">Avana Retreat l&agrave; một thế giới trong l&ograve;ng thế giới với giai điệu, cuộc sống v&agrave; những vận động của ri&ecirc;ng m&igrave;nh. Đi </span><span style="color: #ffdfa4;"><strong>trek </strong></span><span style="font-weight: 400;">đường m&ograve;n xuy&ecirc;n rừng gi&agrave;, thư gi&atilde;n </span><span style="color: #ffdfa4;"><strong>ch&egrave;o kayak</strong></span><span style="font-weight: 400;"> trong l&ograve;ng hồ, </span><span style="font-weight: 400;">hay </span><span style="color: #ffdfa4;"><strong>thiền </strong></span><span style="font-weight: 400;">tĩnh tại tr&ecirc;n đồi cao..., mỗi trải nghiệm kh&ocirc;ng chỉ để cảm nhận vẻ đẹp v&ugrave;ng đất T&acirc;y Bắc m&agrave; c&ograve;n l&agrave; h&agrave;nh tr&igrave;nh t&igrave;m thấy ch&iacute;nh m&igrave;nh giữa thi&ecirc;n nhi&ecirc;n.</span></p></div>
                            <a class="btn btn-cta btn-outline-white" href="https://avanaretreat.com/vn/trai-nghiem" role="button">Tìm hiểu thêm</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END Experience -->
            <!-- Hightlight -->
            <section class="section-7 section bg-primary-1 pb-0" id="section-7">
                <div class="container">
                    <div class="section-header text-center mb-5">
                        <h2 class="section-title text-uppercase text-primary fw-5 mb-4">Không thể bỏ lỡ</h2>
                        <p class="section-lead fs-base mx-auto text-gray">Những bí mật của cảm xúc sẽ được gợi mở trước thiên nhiên. Chào bình minh với trải nghiệm yoga trên đồi cao tĩnh lặng, tiếp nhận năng lượng ngày mới. Ngâm mình trong hồ nước suối mát lạnh ẩn trong rừng, xoa dịu mọi căng thẳng. Thưởng thức bữa tối riêng tư, lãng mạn bên dòng thác chảy trong lòng khu nghỉ...</p>
                    </div>
                </div>
                <div class="container container-md-fluid px-md-0">
                    <div class="swiper-container swiper-pagination-outside pb-4 pb-md-0">
                        <div class="swiper" data-plugin="swiper" data-options='{"breakpoints":{"768":{"slidesPerView":3,"allowTouchMove":false}}}'>
                            <div class="swiper-wrapper">
                                <div class="swiper-slide highlight-popup" data-next="" data-prev="" data-id="421" >
                                    <a class="thumbnail thumbnail-hover" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#modal-highlight-2">
                                        <div class="thumbnail-inner img">
                                            <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage" src="https://avanaretreat.com/storage/2024/11/1731551718thac pung.jpg" alt="Thác Pùng" />
                                        </div>
                                    </a>
                                    <div class="title d-none">Thác Pùng</div>
                                    <div class="content d-none"><p>Th&aacute;c P&ugrave;ng, con th&aacute;c tự nhi&ecirc;n nằm trong l&ograve;ng khu nghỉ l&agrave; khởi nguồn &yacute; tưởng h&igrave;nh th&agrave;nh Avana Retreat. Giữa kh&ocirc;ng gian m&aacute;t l&agrave;nh, b&igrave;nh y&ecirc;n n&agrave;y, một bữa tối l&atilde;ng mạn hay đ&aacute;m cưới b&iacute; mật sẽ được chuẩn bị chỉ d&agrave;nh ri&ecirc;ng cho bạn.</p></div>
                                </div>
                                <div class="swiper-slide highlight-popup" data-next="" data-prev="" data-id="197" >
                                    <a class="thumbnail thumbnail-hover" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#modal-highlight-2">
                                        <div class="thumbnail-inner img">
                                            <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2023/05/1685348387_MG_0425.jpg" src="https://avanaretreat.com/storage/2023/04/1681898859H&#039;mong-Cottage.jpg" alt="H&#039;mong Cottage" />
                                        </div>
                                    </a>
                                    <div class="title d-none">H&#039;mong Cottage</div>
                                    <div class="content d-none"><p><span style="font-weight: 400;">Duy&ecirc;n d&aacute;ng tr&ecirc;n đồi cao, H'mong Cottage được lấy cảm hứng từ l&aacute;n nhỏ của người H'mong tr&ecirc;n những ruộng bậc thang. Tại đ&acirc;y, c&aacute;c lớp học Yoga v&agrave; Thiền miễn ph&iacute; c&ugrave;ng huấn luyện vi&ecirc;n được mở h&agrave;ng tuần, gi&uacute;p bạn cải thiện sức khoẻ tinh thần v&agrave; thể chất.</span></p></div>
                                </div>
                                <div class="swiper-slide highlight-popup" data-next="" data-prev="" data-id="195" >
                                    <a class="thumbnail thumbnail-hover" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#modal-highlight-2">
                                        <div class="thumbnail-inner img">
                                            <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2024/07/1721613913_VBK0298-edit.jpg" src="https://avanaretreat.com/storage/2024/07/1721613909pool.jpg" alt="Cloud Pool" />
                                        </div>
                                    </a>
                                    <div class="title d-none">Cloud Pool</div>
                                    <div class="content d-none"><p>Duy&ecirc;n d&aacute;ng như những ruộng bậc thang T&acirc;y Bắc, Cloud Pool xếp ba tầng uốn lượn tr&ecirc;n đỉnh đồi, hướng tầm nh&igrave;n v&ocirc; cực ra thung lũng v&agrave; d&ograve;ng th&aacute;c P&ugrave;ng tu&ocirc;n chảy trong rừng gi&agrave;. Từ nguồn suối tự nhi&ecirc;n, nước tại Cloud Pool được lọc sạch tạp chất, m&aacute;t lạnh v&agrave;o m&ugrave;a h&egrave;, v&agrave; ấm n&oacute;ng v&agrave;o m&ugrave;a đ&ocirc;ng, đ&aacute;p ứng nhu cầu thư gi&atilde;n bốn m&ugrave;a.<br />(Cảnh quan thực tế thay đổi theo thời điểm.)</p></div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END Hightlight -->
            <section class="section-8 section py-0" id="section-8">
                <h2 class="visually-hidden">Map Avana Retreat</h2>
                <div class="section-map">
                    <img class="img-fluid w-100 of-cover" src="https://avanaretreat.com/storage/2023/08/1691721842Map Avana - VN_1920.png" alt="Cách di chuyển đến Avana retreat" />
                </div>
                <div class="text-center mt-4 mt-lg-0">
                    <a target="_blank" class="btn btn-has-icon btn-primary section-btn" href="https://avanaretreat.com/vn/cach-di-chuyen-den-avana-retreat" type="button">
            <span class="btn-icon">
              <svg class="iconsvg-car">
                <use xlink:href="/htmlv2/images/sprite.svg#car"></use>
              </svg>
            </span>
                        Cách di chuyển đến<br>Avana retreat
                    </a>
                </div>
            </section>
            <!-- BLOG -->
            <section class="section-blog section pb-0" id="section-blog">
                <div class="container">
                    <div class="row gx-xl-5 gy-md-5 gy-4 mb-md-5 mb-3">
                        <div class="col-lg-3 text-center text-lg-start">
                            <div class="section-body ms-auto">
                                <h2 class="section-title text-uppercase text-primary fw-5 fs-35px mb-4">Blog</h2>
                                <p class="paragraph text-gray mb-4">Khám phá những thông tin, câu chuyện thú vị về Avana Retreat, thiên nhiên, văn hóa, cuộc sống bản địa ở Mai Châu và những hoạt động cộng đồng đầy ý nghĩa.</p>
                                <a class="btn btn-cta btn-primary section-btn-more" href="https://avanaretreat.com/vn/blog" role="button">Xem thêm</a>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <article class="card card-post mx-flush">
                                <div class="row gx-0">
                                    <div class="col-md-7">
                                        <a class="thumbnail thumbnail-hover h-100" href="https://avanaretreat.com/vn/blog/380-mua-dong-thu-thai-voi-be-boi-nuoc-nong-tai-avana-retreat.html">
                                            <div class="thumbnail-inner">
                                                <img class="thumbnail-img" src="https://avanaretreat.com/storage/2023/05/1685067878Mùa Đông Thư Thái Với Bể Bơi Nước Nóng Tại Avana Retreat.jpg" alt="Mùa Đông Thư Thái Với Bể Bơi Nước Nóng Tại Avana Retreat" />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-5 align-self-md-stretch">
                                        <div class="card-body text-center text-md-start">
                                            <h3 class="card-title mb-3">
                                                <a href="https://avanaretreat.com/vn/blog/380-mua-dong-thu-thai-voi-be-boi-nuoc-nong-tai-avana-retreat.html">Mùa Đông Thư Thái Với Bể Bơi Nước Nóng Tại Avana Retreat</a>
                                            </h3>
                                            <p class="card-meta text-primary">30/10/2024</p>
                                            <p class="card-text paragraph">Bể bơi nước nóng cùng những trải nghiệm thú vị cho kỳ nghỉ mùa đông</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="swiper-container swiper-pagination-outside mx-flush swiper-blog">
                        <div class="swiper" data-plugin="swiper" data-options='{"spaceBetween":16,"slidesPerView":"auto","breakpoints":{"768":{"spaceBetween":20,"slidesPerView":3,"allowTouchMove":false}}}'>
                            <div class="swiper-wrapper">
                                <div class="swiper-slide h-auto">
                                    <article class="card card-post h-100">
                                        <a class="thumbnail thumbnail-hover" href="https://avanaretreat.com/vn/blog/367-avana-retreat-diem-den-lang-man-cho-tinh-yeu.html">
                                            <div class="thumbnail-inner">
                                                <img class="thumbnail-img" src="https://avanaretreat.com/uploads/crop/413x267/2024/10/1729047302diem_den_lang_man.jpg" alt="Avana Retreat - Điểm Đến Lãng Mạn Cho Tình Yêu" />
                                            </div>
                                        </a>
                                        <div class="card-body text-center text-md-start p-3 p-lg-4">
                                            <h3 class="card-title fs-lg mb-3">
                                                <a href="https://avanaretreat.com/vn/blog/367-avana-retreat-diem-den-lang-man-cho-tinh-yeu.html">Avana Retreat - Điểm Đến Lãng Mạn Cho Tình Yêu</a>
                                            </h3>
                                            <p class="card-meta text-primary mb-lg-2 mb-0">24/08/2024</p>
                                            <p class="card-text paragraph d-none d-lg-block">Giữa thiên nhiên thơ mộng, riêng tư, hãy dành thời gian cho tình yêu nở rộ</p>
                                        </div>
                                    </article>
                                </div>

                                <div class="swiper-slide h-auto">
                                    <article class="card card-post h-100">
                                        <a class="thumbnail thumbnail-hover" href="https://avanaretreat.com/vn/blog/360-mua-may-ghe-tham-ban-nho.html">
                                            <div class="thumbnail-inner">
                                                <img class="thumbnail-img" src="https://avanaretreat.com/uploads/crop/413x267/2024/10/1729047319mua_may.jpg" alt="Mùa Mây Ghé Thăm Bản Nhỏ" />
                                            </div>
                                        </a>
                                        <div class="card-body text-center text-md-start p-3 p-lg-4">
                                            <h3 class="card-title fs-lg mb-3">
                                                <a href="https://avanaretreat.com/vn/blog/360-mua-may-ghe-tham-ban-nho.html">Mùa Mây Ghé Thăm Bản Nhỏ</a>
                                            </h3>
                                            <p class="card-meta text-primary mb-lg-2 mb-0">24/05/2024</p>
                                            <p class="card-text paragraph d-none d-lg-block">Với vị trí biệt lập trong thung lũng, Avana Retreat là nơi lý tưởng để bạn “săn mây”.</p>
                                        </div>
                                    </article>
                                </div>

                                <div class="swiper-slide h-auto">
                                    <article class="card card-post h-100">
                                        <a class="thumbnail thumbnail-hover" href="https://avanaretreat.com/vn/blog/379-9-dieu-dac-biet-ve-orchid-spa.html">
                                            <div class="thumbnail-inner">
                                                <img class="thumbnail-img" src="https://avanaretreat.com/uploads/crop/413x267/2024/10/1729047205dieu_dac_biet_ve_orchild_spa.jpg" alt="9 Điều Đặc Biệt Về Orchid Spa" />
                                            </div>
                                        </a>
                                        <div class="card-body text-center text-md-start p-3 p-lg-4">
                                            <h3 class="card-title fs-lg mb-3">
                                                <a href="https://avanaretreat.com/vn/blog/379-9-dieu-dac-biet-ve-orchid-spa.html">9 Điều Đặc Biệt Về Orchid Spa</a>
                                            </h3>
                                            <p class="card-meta text-primary mb-lg-2 mb-0">26/03/2024</p>
                                            <p class="card-text paragraph d-none d-lg-block">Orchid Spa, nơi bạn đón nhận năng lượng thiên nhiên thuần khiết</p>
                                        </div>
                                    </article>
                                </div>

                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- journey -->
            <section class="section-9 section" id="section-9">
                <div class="container">
                    <div class="row gx-5 align-items-center">
                        <div class="col-xl-3 col-lg-4 order-lg-last">
                            <div class="section-content text-center text-lg-start">
                                <h2 class="section-title text-uppercase text-primary fw-5 mb-3 pb-1 text-lg-nowrap">Khoảnh khắc đáng nhớ</h2>
                                <p class="paragraph text-gray mb-4">Cùng Avana Retreat lưu giữ những khoảnh khắc thư thái, hạnh phúc và ý nghĩa trong kỳ nghỉ kết nối với thiên nhiên và văn hóa bản địa truyền thống.</p>
                                <a class="btn btn-cta btn-outline-primary" href="https://avanaretreat.com/vn/tu-lieu-truyen-thong.html?mtab=64" role="button">Xem thêm</a>
                            </div>
                        </div>
                        <div class="col-xl-9 col-lg-8 gj-gallery">
                            <!-- for desktop-->
                            <div class="row align-items-center d-none d-md-flex">
                                <div class="col-4"><div class="row">

                                        <!-- <a class="thumbnail thumbnail-hover rounded-2" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                          <div class="thumbnail-inner">
                                            <img class="thumbnail-img" src="https://avanaretreat.com/vn/htmlv2/images/ex/home/s9/img-1.jpg" alt="" />
                                          </div>
                                        </a> -->


                                        <div class="col-12">
                                            <a class="thumbnail thumbnail-hover rounded-2 journey-popup" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                                <div class="thumbnail-inner">
                                                    <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2023/05/1685330480Aden and Peggy.jpg" src="https://avanaretreat.com/storage/2023/05/1685330472Aden and Peggy (1).jpg" alt="" />
                                                    <div class="title d-none">Mr. Aden and Ms.Peggy</div>
                                                    <div class="content d-none">"Chúng tôi vẫn thường xuyên nhắc về Avana Retreat với bạn bè. Cảm ơn sự chăm chỉ và tận tâm của các bạn. Nơi đây luôn nằm trong trái tim của chúng tôi."</div>

                                                </div>
                                            </a>
                                        </div>
                                    </div></div>
                                <div class="col-4"><div class="row">

                                        <!-- <a class="thumbnail thumbnail-hover rounded-2" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                          <div class="thumbnail-inner">
                                            <img class="thumbnail-img" src="https://avanaretreat.com/vn/htmlv2/images/ex/home/s9/img-1.jpg" alt="" />
                                          </div>
                                        </a> -->


                                        <div class="col-12">
                                            <a class="thumbnail thumbnail-hover rounded-2 journey-popup" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                                <div class="thumbnail-inner">
                                                    <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2023/05/1684380369Adrian Anh Tuấn.jpg" src="https://avanaretreat.com/storage/2023/04/1681703443Rectangle 28.png" alt="" />
                                                    <div class="title d-none">Mr. Adrian Anh Tuấn</div>
                                                    <div class="content d-none">"Resort có view đẹp xỉu luôn chụp hoài không chán, mùa đông chắc còn mê ly nữa á!"</div>

                                                </div>
                                            </a>
                                        </div>

                                        <!-- <a class="thumbnail thumbnail-hover rounded-2" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                          <div class="thumbnail-inner">
                                            <img class="thumbnail-img" src="https://avanaretreat.com/vn/htmlv2/images/ex/home/s9/img-1.jpg" alt="" />
                                          </div>
                                        </a> -->


                                        <div class="col-12">
                                            <a class="thumbnail thumbnail-hover rounded-2 journey-popup" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                                <div class="thumbnail-inner">
                                                    <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2023/06/1685953759ảnh từ fb (1) (1).jpg" src="https://avanaretreat.com/storage/2023/06/1685953757ảnh từ fb (1).jpg" alt="" />
                                                    <div class="title d-none">Ms. Ngô Thanh Vân</div>
                                                    <div class="content d-none">"Yêu và sống trọn vẹn ở hiện tại. Đó mới gọi là hạnh phúc. Cám ơn Avana Retreat đã giúp vun đắp cho chúng tớ những kỷ niệm thật đẹp..."</div>

                                                </div>
                                            </a>
                                        </div>
                                    </div></div>
                                <div class="col-4"><div class="row">

                                        <!-- <a class="thumbnail thumbnail-hover rounded-2" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                          <div class="thumbnail-inner">
                                            <img class="thumbnail-img" src="https://avanaretreat.com/vn/htmlv2/images/ex/home/s9/img-1.jpg" alt="" />
                                          </div>
                                        </a> -->


                                        <div class="col-12">
                                            <a class="thumbnail thumbnail-hover rounded-2 journey-popup" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                                <div class="thumbnail-inner">
                                                    <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2024/04/1713325048a2 (1).jpg" src="https://avanaretreat.com/storage/2024/04/1713325040a2.jpg" alt="" />
                                                    <div class="title d-none">Gia Đình Mrs. Amandine</div>
                                                    <div class="content d-none">Nụ cười rạng rỡ của những đứa trẻ trong gia đình Mrs. Amandine thực sự sưởi ấm trái tim chúng tôi.</div>

                                                </div>
                                            </a>
                                        </div>

                                        <!-- <a class="thumbnail thumbnail-hover rounded-2" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                          <div class="thumbnail-inner">
                                            <img class="thumbnail-img" src="https://avanaretreat.com/vn/htmlv2/images/ex/home/s9/img-1.jpg" alt="" />
                                          </div>
                                        </a> -->


                                        <div class="col-12">
                                            <a class="thumbnail thumbnail-hover rounded-2 journey-popup" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                                <div class="thumbnail-inner">
                                                    <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2024/08/1723457370ngang.jpg" src="https://avanaretreat.com/storage/2024/08/1723457366caption.jpg" alt="" />
                                                    <div class="title d-none">Mr. Graham O</div>
                                                    <div class="content d-none">“Một trong những nơi tuyệt nhất trong hành trình tại Việt Nam của chúng tôi”</div>

                                                </div>
                                            </a>
                                        </div>
                                    </div></div>
                            </div>
                            <!-- for mobile-->
                            <div class="swiper-container swiper-pagination-outside mx-flush d-md-none">
                                <div class="swiper" data-plugin="swiper" data-options='{"slidesPerView":"auto","centeredSlides":true,"loop":true,"autoplay":{"delay":5000}}'>
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <a class="thumbnail thumbnail-hover journey-popup" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                                <div class="thumbnail-inner">
                                                    <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2023/05/1685330480Aden and Peggy.jpg" src="https://avanaretreat.com/storage/2023/05/1685330472Aden and Peggy (1).jpg" alt="" />
                                                    <div class="title d-none">Mr. Aden and Ms.Peggy</div>
                                                    <div class="content d-none">"Chúng tôi vẫn thường xuyên nhắc về Avana Retreat với bạn bè. Cảm ơn sự chăm chỉ và tận tâm của các bạn. Nơi đây luôn nằm trong trái tim của chúng tôi."</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a class="thumbnail thumbnail-hover journey-popup" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                                <div class="thumbnail-inner">
                                                    <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2023/05/1684380369Adrian Anh Tuấn.jpg" src="https://avanaretreat.com/storage/2023/04/1681703443Rectangle 28.png" alt="" />
                                                    <div class="title d-none">Mr. Adrian Anh Tuấn</div>
                                                    <div class="content d-none">"Resort có view đẹp xỉu luôn chụp hoài không chán, mùa đông chắc còn mê ly nữa á!"</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a class="thumbnail thumbnail-hover journey-popup" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                                <div class="thumbnail-inner">
                                                    <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2023/06/1685953759ảnh từ fb (1) (1).jpg" src="https://avanaretreat.com/storage/2023/06/1685953757ảnh từ fb (1).jpg" alt="" />
                                                    <div class="title d-none">Ms. Ngô Thanh Vân</div>
                                                    <div class="content d-none">"Yêu và sống trọn vẹn ở hiện tại. Đó mới gọi là hạnh phúc. Cám ơn Avana Retreat đã giúp vun đắp cho chúng tớ những kỷ niệm thật đẹp..."</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a class="thumbnail thumbnail-hover journey-popup" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                                <div class="thumbnail-inner">
                                                    <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2024/04/1713325048a2 (1).jpg" src="https://avanaretreat.com/storage/2024/04/1713325040a2.jpg" alt="" />
                                                    <div class="title d-none">Gia Đình Mrs. Amandine</div>
                                                    <div class="content d-none">Nụ cười rạng rỡ của những đứa trẻ trong gia đình Mrs. Amandine thực sự sưởi ấm trái tim chúng tôi.</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="swiper-slide">
                                            <a class="thumbnail thumbnail-hover journey-popup" href="#" data-bs-toggle="modal" data-bs-target="#modal-guest-journey">
                                                <div class="thumbnail-inner">
                                                    <img class="thumbnail-img" data-popup-image="https://avanaretreat.com/storage/2024/08/1723457370ngang.jpg" src="https://avanaretreat.com/storage/2024/08/1723457366caption.jpg" alt="" />
                                                    <div class="title d-none">Mr. Graham O</div>
                                                    <div class="content d-none">“Một trong những nơi tuyệt nhất trong hành trình tại Việt Nam của chúng tôi”</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="text-center mt-4 mt-lg-0">
                      <button class="btn btn-has-icon btn-primary section-btn-vr" type="button">
                        <span class="btn-icon">
                          <svg class="iconsvg-vr-glasses">
                            <use xlink:href="/htmlv2/images/sprite.svg#vr-glasses"></use>
                          </svg>
                        </span>Watch VR TOUR
                      </button>
                    </div> -->
                </div>
            </section>

            <!-- =============== POPUP ================ -->
            <div class="modal fade modal-guest-journey text-center" id="modal-guest-journey" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <button class="btn btn-link modal-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span>x</span>
                        </button>
                        <div class="mb-4 pb-3 img"></div>
                        <h5 class="text-primary fw-5 mb-3 title"></h5>
                        <p class="paragraph text-gray mb-0 mw-480px mx-auto content"></p>
                    </div>
                </div>
            </div>
            <div class="modal fade modal-highlight" id="modal-highlight" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <button class="btn btn-link modal-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                            <span>x</span>
                        </button>
                        <div class="row gx-5 gy-4 align-items-center">
                            <div class="col-xl-7 img">
                                <img class="img-fluid w-100" src="https://avanaretreat.com/vn/htmlv2/images/ex/home/s7/modal-img.jpg" alt="" />
                            </div>
                            <div class="col-xl-5">
                                <h4 class="text-primary title fw-5 mb-3"></h4>
                                <div class="paragraph content text-gray"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                $(document).ready(function(){

                    $(".journey-popup").bind("click",function(){
                        var content = $(this).find('.content').html();
                        var title = $(this).find('.title').text();
                        var img = $(this).find('.thumbnail-img').attr("data-popup-image");
                        $("#modal-guest-journey").find(".img").html('<img class="img-fluid w-100 rounded-2" src="' + img + '">');
                        $("#modal-guest-journey").find(".content").html(content);
                        $("#modal-guest-journey").find(".title").text(title);
                        $('#modal-guest-journey').modal();
                    });
                    $("#hero-btn-play").bind("click",function() {
                        //$("#hero-video").removeAttr("muted");
                        $("#hero-video").prop('muted',false);
                    })

                    $(".highlight-popup").bind("click",function(){

                        // var content = $(this).find('.content').html();
                        // var title = $(this).find('.title').text();
                        // var img = $(this).find('.thumbnail-img').attr("data-popup-image");
                        // $("#modal-highlight").find(".img").html('<img class="img-fluid w-100" src="' + img + '">');
                        // $("#modal-highlight").find(".content").html(content);
                        // $("#modal-highlight").find(".title").text(title);
                        var news_id = $(this).attr("data-id");
                        var url = 'https://avanaretreat.com/vn/blog/popup/:news_id';
                        url = url.replace(":news_id",news_id);
                        popupBlog(url);
                    });

                    // $(".highlight-popup-2").bind("click",function(){
                    //     $(this).find('.main-content').html(html);
                    //     $('#modal-highlight-2').modal();
                    // });
                });

            </script>

            <script>
                $('#modal-reserve-now').on('shown.bs.modal', function (e) {
                    // do something...
                    var service = $(e.relatedTarget).attr("data-service");
                    $("#booking_service_name").text(service);
                    $("#booking_service_input").val(service);
                })
            </script>
            });

            </script>
        </div>
    </div>

@endsection




