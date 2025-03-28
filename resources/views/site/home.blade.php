@extends('site.layouts.master')
@section('title')
    {{ $config->web_title }}
@endsection
@section('description')
    {{ $config->web_des }}
@endsection
@section('image')
    {{ url('' . $banners[0]->image->path ?? '') }}
@endsection

@section('css')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <style>
        @media (max-width: 768px) {
            #section-hero .swiper-slide img {
                object-fit: cover;
                height: 100%;
            }
        }
    </style>
@endsection

@section('content')
    <div class="page page-home">
        @include('site.partials.header')
        <div class="page-main">
            <section class="section-hero section text-white" id="section-hero" style="padding-top: 0; padding-bottom: 0;">
                {{-- <div class="container text-center">

                    <h1 class="section-title mb-2">Avana Retreat</h1>
                    <p class="section-lead fw-5 mx-auto">Find your natural-self</p>
                    <a class="play-circle" id="hero-btn-play" href="#"></a>
                </div> --}}
                {{-- <video class="section-bg-video" id="hero-video" autoplay muted="muted" loop playsinline poster="https://avanaretreat.com/storage/2023/07/1688529704DJI_0065 copy.jpg" data-poster-full="https://avanaretreat.com/storage/2023/07/1688529704DJI_0065 copy.jpg" data-src-full="https://avanaretreat.com/storage/2023/05/1685327232Organic Life - Video banner.mp4">
                    <source src="https://avanaretreat.com/storage/2023/07/1688528966Organic Life   banner 10s autoplay 2.mp4" type="video/mp4">
                </video> --}}
                <div class="swiper banner-slider">
                    <div class="swiper-wrapper">
                        @foreach ($banners as $banner)
                            <div class="swiper-slide">
                                <img class="img-fluid w-100" src="{{ $banner->image->path }}"
                                    alt="{{ $banner->image->name }}" loading="lazy" />
                            </div>
                        @endforeach
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </section>

            <!-- SECTION WELCOME -->
            <section class="section-1 section section-line-overlap pt-5" id="section-1">
                <div class="container text-center">
                    <h2 class="section-title fs-1 ff-tertiary fw-bold text-primary-3 mb-3">{{ $config->web_title }}</h2>
                    <p class="section-lead paragraph text-primary-4 mw-890px mx-auto mb-0">{{ $config->web_des }}</p>
                </div>
            </section>
            <!-- END SECTION WELCOME -->
            <!-- SECTION Our story -->
            <section class="section-2 section bg-primary-1" id="section-2">
                <div class="container flex-center flex-column">
                    {{-- <figure class="blockquote blockquote-center mb-5 pb-lg-3">
                        <blockquote class="blockquote-body">
                            <p><p>Y&ecirc;u tr&aacute;i đất như y&ecirc;u ch&iacute;nh m&igrave;nh,</p>
                            <p>ta sẽ biết y&ecirc;u thương vạn vật</p></p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <span class="blockquote-author">LÃO TỬ</span>
                        </figcaption>
                    </figure> --}}
                    <div class="row g-20px align-items-center">
                        <div class="col-lg-8">
                            <div class="row g-20px">
                                <div class="col-md-6 align-self-center text-center text-md-end pe-md-4 mb-4 mb-md-0">
                                    <div class="section-content">
                                        <h2 class="section-title text-uppercase text-primary fw-5 mb-3 pb-1">Chuyện của
                                            {{ $config->web_title }}</h2>
                                        <div class="paragraph text-gray mb-4">
                                            {!! $config->introduction !!}
                                        </div>
                                        {{-- <a class="btn btn-cta btn-outline-primary" href="https://avanaretreat.com/vn/cau-chuyen-avana" role="button">Tìm hiểu thêm</a> --}}
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="section-img section-img-1 h-100">
                                        <img class="img-fluid w-100 h-100"
                                            src="https://avanaretreat.com/storage/2023/04/1681705785Rectangle 5.png"
                                            alt="" />
                                    </div>
                                </div>
                                <div class="col-6 d-md-none">
                                    <div class="section-img section-img-3 h-100">
                                        <img class="img-fluid w-100 h-100"
                                            src="https://avanaretreat.com/storage/2023/04/16817058601618562486home-heritage-1.jpg"
                                            alt="" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="section-img section-img-2">
                                        <img class="img-fluid w-100 h-100"
                                            src="https://avanaretreat.com/storage/2023/04/1681705957Rectangle 7.png"
                                            alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5 mx-auto d-none d-md-block">
                            <div class="section-img section-img-3">
                                <img class="img-fluid w-100 h-100"
                                    src="https://avanaretreat.com/storage/2023/04/16817058601618562486home-heritage-1.jpg"
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END SECTION Our story -->
            <!-- SECTION Accomodatio -->
            <section class="section-3 section bg-primary-1 pt-0" id="section-3">
                <div class="section section-top text-white mb-0"
                    style="background-image: url('/site/images/section-3.jpg')">
                    <div class="container">
                        <div class="row g-5 align-items-center">
                            <div class="col-md-6">
                                <figure class="blockquote blockquote-dark blockquote-center blockquote-md-start mb-0">
                                    <blockquote class="blockquote-body">
                                        <p>
                                        <p><span style="font-weight: 400;">T&ocirc;i vẫn lu&ocirc;n mơ ước được sống trong
                                                sự tĩnh lặng của thi&ecirc;n nhi&ecirc;n</span></p>
                                        </p>
                                    </blockquote>
                                    <figcaption class="blockquote-footer">
                                        <span class="blockquote-author">CLAUDE MONET</span>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="col-md-6 text-center text-md-start">
                                <h2 class="section-title text-uppercase fw-5 mb-3 pb-1">Hạng phòng</h2>
                                <div class="paragraph fw-5 mb-4">
                                    <p><span style="font-weight: 400;">
                                        Trải nghiệm sự hòa quyện hoàn hảo giữa thiên nhiên và tiện nghi đẳng cấp. Được thiết kế tinh tế với không gian mở, phòng mang đến tầm nhìn tuyệt đẹp ra khu vườn xanh mát hoặc bờ biển yên bình. Nội thất sang trọng sử dụng chất liệu gỗ tự nhiên, kết hợp cùng ánh sáng dịu nhẹ tạo cảm giác thư thái, gần gũi với thiên nhiên.

                                        Mỗi phòng đều được trang bị giường ngủ êm ái, bồn tắm thư giãn, cùng ban công riêng để tận hưởng không khí trong lành. Đặc biệt, khách lưu trú có thể tận hưởng các liệu pháp spa chuyên sâu, giúp cơ thể và tâm trí đạt đến trạng thái cân bằng tuyệt đối. Đây là lựa chọn lý tưởng cho những ai muốn tìm kiếm sự thư giãn và phục hồi năng lượng trong không gian yên tĩnh, thanh bình.
                                    </p>
                                </div>
                                <a class="btn btn-cta btn-outline-white" href="{{ route('front.room-category') }}"
                                    role="button">Xem các hạng phòng</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="swiper-container swiper-accomodation swiper-buttons-outside swiper-pagination-outside">
                        <div class="swiper" data-plugin="swiper" data-options='{"spaceBetween":20}'>
                            <div class="swiper-wrapper">
                                @foreach ($listRoom as $room)
                                    <div class="swiper-slide text-center">
                                        <a href="{{ route('front.room-category') }}#{{ $room->name }}">
                                            <img class="img-fluid w-100 mb-4"
                                                src="{{ $room->galleries[0]->image->path }}"
                                                alt="" loading="lazy" />
                                        </a>
                                        <a href="{{ route('front.room-category') }}#{{ $room->name }}">
                                            <h3 class="section-title text-primary fw-5 mb-3 mt-md-2">{{$room->name}}
                                            </h3>
                                        </a>
                                        <a class="btn btn-cta btn-primary px-4"
                                            href="#" role="button">
                                            Đặt phòng
                                        </a>
                                    </div>
                                @endforeach
                            </div>
                            <div class="swiper-buttons swiper-buttons-style-1 d-none d-md-block">
                                <div class="swiper-button-prev">
                                    <i class="fas fa-arrow-left"></i>
                                </div>
                                <div class="swiper-button-next">
                                    <i class="fas fa-arrow-right"></i>
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
                            <p>
                            <p>Mẹ Thi&ecirc;n Nhi&ecirc;n mới ch&iacute;nh l&agrave; nghệ sĩ đ&iacute;ch thực.<br />Những
                                s&aacute;ng tạo ẩm thực c&oacute; nhiệm vụ gi&uacute;p Mẹ tỏa s&aacute;ng</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <span class="blockquote-author">MARCO PIERRE WHITE</span>
                        </figcaption>
                    </figure>
                    <div class="row gx-0 gy-5 align-items-center justify-content-between align-self-stretch">
                        <div class="col-lg text-center text-lg-end">
                            <div class="section-body ms-auto">
                                <h2 class="section-title text-uppercase text-primary fw-5 mb-3 pb-1">Ẩm thực</h2>
                                <div class="paragraph text-gray mb-4">
                                    <p><span style="font-weight: 400;">
                                        Hãy sẵn sàng cho một chuyến hành trình đầy cảm xúc, nơi bạn được đắm chìm trong những hương vị tinh tế. Từ các món đặc sản địa phương đậm đà bản sắc đến những tinh hoa ẩm thực quốc tế được chế biến công phu, mỗi món ăn là một câu chuyện, một trải nghiệm đáng nhớ.

                                        Bắt đầu ngày mới với bữa sáng tươi ngon bên khung cảnh thiên nhiên thanh bình, thưởng thức bữa trưa đầy sáng tạo với nguyên liệu tươi sạch, và khép lại ngày bằng một bữa tối lãng mạn dưới ánh nến, nơi những ly rượu vang hảo hạng hòa quyện cùng hương vị tinh túy của ẩm thực.

                                        Hành trình ẩm thực không chỉ là một bữa ăn mà còn là sự khám phá và tận hưởng – nơi bạn cảm nhận được sự kết hợp hài hòa giữa nghệ thuật nấu nướng và tinh thần hiếu khách tuyệt vời.
                                    </span></p>
                                </div>
                                {{-- <a class="btn btn-cta btn-outline-primary section-btn-more"
                                    href="{{ route('front.cuisine') }}" role="button">Tìm hiểu thêm</a> --}}
                            </div>
                        </div>
                        <div class="col-imgs col-lg-auto d-grid gap-md-4 gap-3">
                            @foreach ($cuisines as $key => $cuisine)
                                <div class="cuisine cuisine-{{ $key + 1 }}">
                                    <img class="img-fluid w-100 cuisine-img"
                                        src="{{ $cuisine->image->path }}"
                                        alt="" loading="lazy" />
                                    <div class="cuisine-overlay">
                                        <a class="btn btn-cta btn-outline-white cuisine-btn px-4"
                                            href="{{route('front.cuisine', ['slug' => $cuisine->slug])}}" role="button">{{ $cuisine->name }}</a>
                                    </div>
                                </div>
                            @endforeach
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
                            <p>
                            <p>Nơi tuyệt vời nhất để t&igrave;m thấy ch&iacute;nh m&igrave;nh l&agrave; b&ecirc;n cạnh một
                                th&aacute;c nước,</p>
                            <p>trong &acirc;m thanh m&ecirc; hoặc của n&oacute;</p>
                            </p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <span class="blockquote-author">ROLAND R. KEMLER</span>
                        </figcaption>
                    </figure>
                    <div class="row g-5">
                        <div class="col-md-6">
                            <div class="section-img section-img-1 h-100">
                                <img class="img-fluid w-100 h-100"
                                    src="https://avanaretreat.com/storage/2024/01/17052908261681706587Rectangle 18.png"
                                    alt="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row flex-column h-100">
                                <div class="col text-center text-md-start flex-center-x flex-column mb-5 mb-xl-0">
                                    <div class="section-content">
                                        <h2 class="section-title text-uppercase text-primary fw-5 mb-3 pb-1"> Spa
                                        </h2>
                                        <div class="paragraph text-gray mb-4">
                                            <p><span style="font-weight: 400;">Kh&ocirc;ng phải tự nhi&ecirc;n m&agrave;
                                                    Orchid Spa được v&iacute; như t&acirc;m hồn của Avana Retreat. Nương
                                                    theo </span><span style="color: #915c37;"><strong>d&ograve;ng
                                                        suối</strong></span><span style="font-weight: 400;"> giữa
                                                </span><span style="color: #915c37;"><strong>rừng nguy&ecirc;n
                                                        sinh</strong></span><span style="font-weight: 400;">, Orchid Spa
                                                    l&agrave; v&ugrave;ng kh&ocirc;ng gian thư th&aacute;i đến kỳ lạ, thơm
                                                </span><span style="color: #915c37;"><strong>hương thảo
                                                        mộc</strong></span><span style="font-weight: 400;"> dịu
                                                    d&agrave;ng. Một c&acirc;y cầu gỗ d&agrave;i h&agrave;ng trăm
                                                    m&eacute;t, uốn lượn theo d&ograve;ng chảy của th&aacute;c, tr&aacute;nh
                                                    từng th&acirc;n c&acirc;y, rồi rẽ nh&aacute;nh, dẫn đến từng
                                                </span><span style="color: #915c37;"><strong>ph&ograve;ng trị liệu đơn
                                                        v&agrave; đ&ocirc;i</strong></span><span
                                                    style="font-weight: 400;">. </span><span
                                                    style="font-weight: 400;">Orchid Spa giống như một một ốc đảo
                                                    b&igrave;nh y&ecirc;n, d&agrave;nh tặng </span><span
                                                    style="color: #915c37;"><strong>phương ph&aacute;p độc
                                                        quyền</strong></span><span style="font-weight: 400;"> chăm
                                                    s&oacute;c sức khỏe cho những người muốn nu&ocirc;ng chiều bản
                                                    th&acirc;n v&agrave; thư gi&atilde;n t&acirc;m hồn.</span></p>
                                        </div>
                                        <a class="btn btn-cta btn-outline-primary" href="https://avanaretreat.com/vn/spa"
                                            role="button">Tìm hiểu thêm</a>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="section-img section-img-2">
                                        <img class="img-fluid w-100"
                                            src="https://avanaretreat.com/storage/2023/06/1685954053spa.jpg"
                                            alt="" />
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
                <div class="section section-nested text-white"
                    style="background-image: url('/site/images/section-6.jpg')">
                    <div class="container py-md-5">
                        <div class="section-content offset-xl-1 text-center text-md-start">
                            <h2 class="section-title text-uppercase fw-5 mb-3 pb-1">TRẢI NGHIỆM</h2>
                            <div class="paragraph fw-5 mb-4">
                                <p><span style="font-weight: 400;">
                                    Hãy để mỗi khoảnh khắc trở thành một hành trình đáng nhớ với những trải nghiệm tinh tế được thiết kế dành riêng cho bạn. Từ việc thư giãn giữa thiên nhiên thanh bình, đắm mình trong làn nước trong xanh, đến tận hưởng những liệu pháp spa thư giãn sâu, mỗi giây phút đều mang đến sự cân bằng hoàn hảo cho tâm hồn và cơ thể.

                                    Khám phá những hoạt động độc đáo, hay thưởng thức ẩm thực tinh hoa với những nguyên liệu tươi ngon nhất. Dù bạn tìm kiếm sự phiêu lưu, thư giãn hay những khoảnh khắc lãng mạn, hành trình trải nghiệm sẽ đưa bạn đến những cung bậc cảm xúc tuyệt vời nhất.
                                </span></p>
                            </div>
                            <a class="btn btn-cta btn-outline-white" href="{{ route('front.experienceService') }}"
                                role="button">Tìm hiểu thêm</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END Experience -->
            <!-- Hightlight -->
            <section class="section-7 section bg-primary-1 pb-0" id="section-7">
                <div class="container">
                    <div class="section-header text-center mb-5">
                        <h2 class="section-title text-uppercase text-primary fw-5 mb-4">Không thể bỏ lỡ những ưu đãi</h2>
                        <p class="section-lead fs-base mx-auto text-gray">
                            Tận hưởng những khoảnh khắc đáng giá với các ưu đãi đặc biệt được thiết kế riêng cho bạn! Dù là kỳ nghỉ dưỡng sang trọng, hành trình ẩm thực tinh tế hay những trải nghiệm thư giãn tại spa, đây là cơ hội tuyệt vời để bạn tận hưởng dịch vụ đẳng cấp với mức giá ưu đãi.

                            Nhanh tay đặt ngay để nhận các đặc quyền hấp dẫn như giảm giá phòng, gói trải nghiệm miễn phí, bữa ăn đặc biệt và nhiều quà tặng bất ngờ. Đừng bỏ lỡ cơ hội tuyệt vời này – số lượng ưu đãi có hạn!
                        </p>
                    </div>
                </div>
                <div class="container container-md-fluid px-md-0">
                    <div class="swiper-container swiper-pagination-outside pb-4 pb-md-0">
                        <div class="swiper" data-plugin="swiper"
                            data-options='{"breakpoints":{"768":{"slidesPerView":3,"allowTouchMove":false}}}'>
                            <div class="swiper-wrapper">
                                @foreach ($promotionService as $service)
                                    <div class="swiper-slide highlight-popup" data-next="" data-prev="" data-id="421">
                                        <a class="thumbnail thumbnail-hover" href="javascript:void(0)" data-bs-toggle="modal"
                                            data-bs-target="#modal-highlight-2">
                                            <div class="thumbnail-inner img">
                                                <img class="thumbnail-img" data-popup-image="{{ $service->image->path }}"
                                                    src="{{ $service->image->path }}"
                                                    alt="{{$service->name}}" />
                                            </div>
                                        </a>
                                        <div class="title" style="position: absolute; z-index: 100; bottom: 10px; color: #fff; right: 10px; font-size: 18px;">{{$service->name}}</div>
                                        <div class="content d-none">
                                            <p>{{$service->description}}</p>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- END Hightlight -->
            <!-- BLOG -->
            <section class="section-blog section pb-0" id="section-blog">
                <div class="container">
                    <div class="row gx-xl-5 gy-md-5 gy-4 mb-md-5 mb-3">
                        <div class="col-lg-3 text-center text-lg-start">
                            <div class="section-body ms-auto">
                                <h2 class="section-title text-uppercase text-primary fw-5 fs-35px mb-4">Gói nghỉ dưỡng</h2>
                                <p class="paragraph text-gray mb-4">Thảnh thơi nghỉ dưỡng với ưu đãi đặc biệt của Asia Tropical.</p>
                                <a class="btn btn-cta btn-primary section-btn-more"
                                    href="{{ route('front.resortService') }}" role="button">Xem thêm</a>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <article class="card card-post mx-flush">
                                <div class="row gx-0">
                                    <div class="col-md-7">
                                        <a class="thumbnail thumbnail-hover h-100"
                                            href="{{ route('front.detailResortService', ['slug' =>$resortService[0]->slug ]) }}">
                                            <div class="thumbnail-inner">
                                                <img class="thumbnail-img"
                                                    src="{{ $resortService[0]->image->path }}"
                                                    alt="{{$resortService[0]->name}}" />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-5 align-self-md-stretch">
                                        <div class="card-body text-center text-md-start">
                                            <h3 class="card-title mb-3">
                                                <a href="{{ route('front.detailResortService', ['slug' =>$resortService[0]->slug ]) }}">
                                                    {{$resortService[0]->name}}</a>
                                            </h3>
                                            <p class="card-meta text-primary">Chỉ từ <span class="fs-30px">{{ formatCurrency($resortService[0]->price) }}</span> VNĐ/ Khách</p>
                                            <p class="card-text paragraph">{{ $resortService[0]->description}}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="swiper-container swiper-pagination-outside mx-flush swiper-blog">
                        <div class="swiper" data-plugin="swiper"
                            data-options='{"spaceBetween":16,"slidesPerView":"auto","breakpoints":{"768":{"spaceBetween":20,"slidesPerView":3,"allowTouchMove":false}}}'>
                            <div class="swiper-wrapper">
                                @foreach ($resortService as $key => $item)
                                    @if ($key == 0)
                                        @break
                                    @endif
                                    <div class="swiper-slide h-auto">
                                        <article class="card card-post h-100">
                                            <a class="thumbnail thumbnail-hover"
                                                href="{{route('front.detailResortService', ['slug' => $item->slug])}}">
                                                <div class="thumbnail-inner">
                                                    <img class="thumbnail-img"
                                                        src="{{ $item->image->path }}"
                                                        alt="{{$item->name}}" loading="lazy" />
                                                </div>
                                            </a>
                                            <div class="card-body text-center text-md-start p-3 p-lg-4">
                                                <h3 class="card-title fs-lg mb-3">
                                                    <a
                                                        href="{{route('front.detailResortService', ['slug' => $item->slug])}}">{{$item->name}}</a>
                                                </h3>
                                                <p class="card-meta text-primary mb-lg-2 mb-0">
                                                    Chỉ từ <span class="fs-30px">{{ formatCurrency($item->price) }}</span>
                                                    VNĐ/ Khách</p>
                                                <p class="card-text paragraph d-none d-lg-block">{{$item->description}}</p>
                                            </div>
                                        </article>
                                    </div>
                                @endforeach
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- journey -->

            <!-- =============== POPUP ================ -->
            <div class="modal fade modal-guest-journey text-center" id="modal-guest-journey" tabindex="-1"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <button class="btn btn-link modal-close" type="button" data-bs-dismiss="modal"
                            aria-label="Close">
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
                        <button class="btn btn-link modal-close" type="button" data-bs-dismiss="modal"
                            aria-label="Close">
                            <span>x</span>
                        </button>
                        <div class="row gx-5 gy-4 align-items-center">
                            <div class="col-xl-7 img">
                                <img class="img-fluid w-100"
                                    src="https://avanaretreat.com/vn/htmlv2/images/ex/home/s7/modal-img.jpg"
                                    alt="" />
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
                $(document).ready(function() {

                    $(".journey-popup").bind("click", function() {
                        var content = $(this).find('.content').html();
                        var title = $(this).find('.title').text();
                        var img = $(this).find('.thumbnail-img').attr("data-popup-image");
                        $("#modal-guest-journey").find(".img").html('<img class="img-fluid w-100 rounded-2" src="' +
                            img + '">');
                        $("#modal-guest-journey").find(".content").html(content);
                        $("#modal-guest-journey").find(".title").text(title);
                        $('#modal-guest-journey').modal();
                    });
                    $("#hero-btn-play").bind("click", function() {
                        //$("#hero-video").removeAttr("muted");
                        $("#hero-video").prop('muted', false);
                    })

                    $(".highlight-popup").bind("click", function() {

                        // var content = $(this).find('.content').html();
                        // var title = $(this).find('.title').text();
                        // var img = $(this).find('.thumbnail-img').attr("data-popup-image");
                        // $("#modal-highlight").find(".img").html('<img class="img-fluid w-100" src="' + img + '">');
                        // $("#modal-highlight").find(".content").html(content);
                        // $("#modal-highlight").find(".title").text(title);
                        var news_id = $(this).attr("data-id");
                        var url = 'https://avanaretreat.com/vn/blog/popup/:news_id';
                        url = url.replace(":news_id", news_id);
                        popupBlog(url);
                    });

                    // $(".highlight-popup-2").bind("click",function(){
                    //     $(this).find('.main-content').html(html);
                    //     $('#modal-highlight-2').modal();
                    // });
                });
            </script>

            <script>
                $('#modal-reserve-now').on('shown.bs.modal', function(e) {
                    // do something...
                    var service = $(e.relatedTarget).attr("data-service");
                    $("#booking_service_name").text(service);
                    $("#booking_service_input").val(service);
                })
            </script>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        var swiper = new Swiper(".banner-slider", {
            spaceBetween: 20,
            centeredSlides: true,
            // loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    </script>
    {{-- <script>
        app.controller('ServicePageController', function($scope, $http, $rootScope, $compile) {
            $scope.listService = @json($listService);
            $scope.service_types = @json($service_types);
            $scope.category = 'all';
            $scope.getDataTab = function(type, slug) {
                $scope.category = slug;
                $.ajax({
                    type: 'GET',
                    url: '{{ route('front.getServiceTab') }}',
                    headers: {
                        'X-CSRF-TOKEN': "{{ csrf_token() }}"
                    },
                    data: {
                        'type': type,
                        'slug': slug
                    },
                    success: function(response) {
                        if (response.success) {
                            $scope.listService = response.data;
                        }
                    },
                    error: function() {
                        console.log('error');
                    },
                    complete: function() {
                        $scope.$applyAsync();
                    }
                })
            }

            $scope.service_highlight = {};
            $scope.popupBlog = function(service) {
                var modal = $('#modal-highlight');
                $scope.service_highlight = service;
                $scope.$applyAsync();
                modal.modal('show');
            }
        });
    </script> --}}
@endpush
