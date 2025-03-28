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
@endsection

@section('content')
    <div class="page ">
        @include('site.partials.header')

        <div class="page-main">
            <section class="section-hero section section-overlay text-white"
                style="background-image: url('https://avanaretreat.com/storage/16183065951617868742Cover-acom-1 1.jpg')">
                <div class="container text-center">
                    <h2 class="section-title mb-4">Hạng Phòng</h2>
                    <p class="section-lead mx-auto fw-5 mb-0">Ba mươi sáu villa là ba mươi sáu không gian riêng tư, nằm dọc
                        theo sườn núi, mở ra khung cảnh thiên nhiên rộng lớn, tràn ngập ánh sáng của núi rừng Tây Bắc.</p>
                </div>
            </section>

            <section class="acc-section-2">
                @foreach($rooms as $key => $room)
                    @if($key % 2 == 0)
                        <div class="section-acc section mb-0" id="rooms-accommodation2">
                            <div class="container">
                                <div class="section-row row gx-0 gy-4">
                                    <div class="col-lg-6">
                                        <div class="section-body">
                                            <h2 class="section-title mb-4 pb-lg-2">{{ $room->name }}</h2>
                                            <ul class="list list-icons mb-lg-5 mb-4">
                                                <li class="list-item">
                                                    <span class="list-icon">
                                                        <svg class="iconsvg-size-o">
                                                            <use xlink:href="/htmlv2/images/sprite.svg#size-o"></use>
                                                        </svg>
                                                    </span>Diện tích: {{ $room->area }}
                                                </li>
                                                <li class="list-item">
                                                    <span class="list-icon">
                                                        <svg class="iconsvg-group-o">
                                                            <use xlink:href="/htmlv2/images/sprite.svg#group-o"></use>
                                                        </svg>
                                                    </span>Số khách tối đa: {{ $room->maximum_occupancy }}
                                                </li>
                                                <li class="list-item">
                                                    <span class="list-icon">
                                                        <svg class="iconsvg-photo-o">
                                                            <use xlink:href="/htmlv2/images/sprite.svg#photo-o"></use>
                                                        </svg>
                                                    </span>View: {{ $room->view }}
                                                </li>
                                                <li class="list-item">
                                                    <span class="list-icon">
                                                        <svg class="iconsvg-bedroom-o">
                                                            <use xlink:href="/htmlv2/images/sprite.svg#bedroom-o"></use>
                                                        </svg>
                                                    </span>{{ $room->bedrooms }}
                                                </li>
                                            </ul>
                                            <div class="tab tab-1 fs-sm mb-4 pb-2">
                                                <div class="nav-responsive">
                                                    <div class="nav-responsive-inner">

                                                        <ul class="tab-nav nav nav-dots mb-lg-4 mb-3">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" href="#tab-1-description-0"
                                                                    data-bs-toggle="tab">Mô tả</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#tab-1-key-facts-0"
                                                                    data-bs-toggle="tab">Điểm nổi bật</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#tab-1-facilities-0"
                                                                    data-bs-toggle="tab">Tiện nghi</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="tab-content">
                                                    <div class="tab-pane fade show active" id="tab-1-description-0">
                                                        <div class="paragraph">
                                                            {!! $room->description !!}
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade list-wrapper list list-bullets list-gap-2 paragraph"
                                                        id="tab-1-key-facts-0">
                                                        <ul>
                                                            <?php $points = explode("\n", $room->highlight); ?>
                                                            @foreach ($points as $point)
                                                                <li>{{ $point }}</li>
                                                            @endforeach
                                                        </ul>
                                                    </div>
                                                    <div class="tab-pane fade" id="tab-1-facilities-0">
                                                        <div class="list list-icons row gy-3">
                                                            <div class="col-sm-6">
                                                                <div class="list-item">
                                                                    <span class="list-icon">
                                                                        <svg class="iconsvg-wifi-o">
                                                                            <use
                                                                                xlink:href="{{ asset('site/images/wifi.svg') }}">
                                                                            </use>
                                                                        </svg>
                                                                    </span>Wifi miễn phí
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="list-item">
                                                                    <span class="list-icon">
                                                                        <svg class="iconsvg-tea-o">
                                                                            <use
                                                                                xlink:href="https://avanaretreat.com/htmlv2/images/sprite.svg#tea-o">
                                                                            </use>
                                                                        </svg>
                                                                    </span>Dụng cụ pha trà &amp; cà phê
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="list-item">
                                                                    <span class="list-icon">
                                                                        <svg class="iconsvg-conditioning-o">
                                                                            <use
                                                                                xlink:href="/htmlv2/images/sprite.svg#conditioning-o">
                                                                            </use>
                                                                        </svg>
                                                                    </span>Điều hòa không khí 2 chiều
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="list-item">
                                                                    <span class="list-icon">
                                                                        <svg class="iconsvg-minibar-o">
                                                                            <use
                                                                                xlink:href="/htmlv2/images/sprite.svg#minibar-o">
                                                                            </use>
                                                                        </svg>
                                                                    </span>Minibar
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="list-item">
                                                                    <span class="list-icon">
                                                                        <svg class="iconsvg-safe">
                                                                            <use
                                                                                xlink:href="/htmlv2/images/sprite.svg#safe">
                                                                            </use>
                                                                        </svg>
                                                                    </span>
                                                                    Két an toàn
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="list-item">
                                                                    <span class="list-icon">
                                                                        <svg class="iconsvg-ipad">
                                                                            <use
                                                                                xlink:href="/htmlv2/images/sprite.svg#ipad">
                                                                            </use>
                                                                        </svg>
                                                                    </span>Máy tính bảng
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row g-3 justify-content-left">
                                                <div class="col-sm-auto">
                                                    <a class="btn btn-cta btn-outline-primary fs-18px px-md-4 w-100"
                                                        href="https://avanaretreat.com/vn/dat-phong" role="button">ĐẶT
                                                        PHÒNG</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="swiper-container swiper-controls-style-1 mx-flush"
                                            data-plugin="photoswipe">
                                            <div class="swiper" data-plugin="swiper"
                                                data-options='{"pagination":{"el":".swiper-pagination","type":"fraction"}}'>
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-wrapper">
                                                        @foreach ($room->galleries as $gally)
                                                            <div class="swiper-slide">
                                                                <a href="{{ @$gally->image->path ?? '' }}"
                                                                    target="_blank">
                                                                    <img class="img-fluid w-100"
                                                                        src="{{ @$gally->image->path ?? '' }}?format=jpg"
                                                                        alt="{{ $room->name }}">
                                                                </a>
                                                            </div>
                                                        @endforeach
                                                    </div>
                                                    <div class="swiper-buttons">
                                                        <div class="swiper-button-prev">
                                                            <svg class="iconsvg-chevron-right rotate-180">
                                                                <use xlink:href="/htmlv2/images/sprite.svg#chevron-right">
                                                                </use>
                                                            </svg>
                                                        </div>
                                                        <div class="swiper-button-next">
                                                            <svg class="iconsvg-chevron-right">
                                                                <use xlink:href="/htmlv2/images/sprite.svg#chevron-right">
                                                                </use>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-pagination"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="section-acc section mb-0  bg-light " id="rooms-accommodation1">
                                <div class="container">
                                    <div class="section-row row gx-0 gy-4">
                                        <div class="col-lg-6">
                                            <div class="section-body">
                                                <h2 class="section-title mb-4 pb-lg-2">{{ $room->name }}</h2>
                                                <ul class="list list-icons mb-lg-5 mb-4">
                                                    <li class="list-item">
                                                        <span class="list-icon">
                                                            <svg class="iconsvg-size-o">
                                                                <use xlink:href="/htmlv2/images/sprite.svg#size-o"></use>
                                                            </svg>
                                                        </span>Diện tích: {{ $room->area }}
                                                    </li>
                                                    <li class="list-item">
                                                        <span class="list-icon">
                                                            <svg class="iconsvg-group-o">
                                                                <use xlink:href="/htmlv2/images/sprite.svg#group-o"></use>
                                                            </svg>
                                                        </span>Số khách tối đa: {{ $room->maximum_occupancy }}
                                                    </li>
                                                    <li class="list-item">
                                                        <span class="list-icon">
                                                            <svg class="iconsvg-photo-o">
                                                                <use xlink:href="/htmlv2/images/sprite.svg#photo-o"></use>
                                                            </svg>
                                                        </span>View: {{ $room->view }}
                                                    </li>
                                                    <li class="list-item">
                                                        <span class="list-icon">
                                                            <svg class="iconsvg-bedroom-o">
                                                                <use xlink:href="/htmlv2/images/sprite.svg#bedroom-o">
                                                                </use>
                                                            </svg>
                                                        </span>{{ $room->bedrooms }}
                                                    </li>
                                                </ul>
                                                <div class="tab tab-1 fs-sm mb-4 pb-2">
                                                    <div class="nav-responsive">
                                                        <div class="nav-responsive-inner">
                                                            <ul class="tab-nav nav nav-dots mb-lg-4 mb-3">
                                                                <li class="nav-item">
                                                                    <a class="nav-link active" href="#tab-1-description-1"
                                                                        data-bs-toggle="tab">Mô tả</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="#tab-1-key-facts-1"
                                                                        data-bs-toggle="tab">Điểm nổi bật</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="#tab-1-facilities-1"
                                                                        data-bs-toggle="tab">Tiện nghi</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="tab-content">
                                                        <div class="tab-pane fade show active" id="tab-1-description-1">
                                                            <div class="paragraph">
                                                                {!! $room->description !!}
                                                            </div>
                                                        </div>
                                                        <div class="tab-pane fade list-wrapper list list-bullets list-gap-2 paragraph"
                                                            id="tab-1-key-facts-1">
                                                            <ul>
                                                                <?php $points = explode("\n", $room->highlight); ?>
                                                                @foreach ($points as $point)
                                                                    <li>{{ $point }}</li>
                                                                @endforeach
                                                            </ul>
                                                        </div>
                                                        <div class="tab-pane fade" id="tab-1-facilities-1">
                                                            <div class="list list-icons row gy-3">
                                                                <div class="col-sm-6">
                                                                    <div class="list-item">
                                                                        <span class="list-icon">
                                                                            <svg class="iconsvg-wifi-o">
                                                                                <use
                                                                                    xlink:href="/htmlv2/images/sprite.svg#wifi-o">
                                                                                </use>
                                                                            </svg>
                                                                        </span>Wifi miễn phí
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="list-item">
                                                                        <span class="list-icon">
                                                                            <svg class="iconsvg-tea-o">
                                                                                <use
                                                                                    xlink:href="/htmlv2/images/sprite.svg#tea-o">
                                                                                </use>
                                                                            </svg>
                                                                        </span>Dụng cụ pha trà &amp; cà phê
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="list-item">
                                                                        <span class="list-icon">
                                                                            <svg class="iconsvg-conditioning-o">
                                                                                <use
                                                                                    xlink:href="/htmlv2/images/sprite.svg#conditioning-o">
                                                                                </use>
                                                                            </svg>
                                                                        </span>Điều hòa không khí 2 chiều
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="list-item">
                                                                        <span class="list-icon">
                                                                            <svg class="iconsvg-minibar-o">
                                                                                <use
                                                                                    xlink:href="/htmlv2/images/sprite.svg#minibar-o">
                                                                                </use>
                                                                            </svg>
                                                                        </span>Minibar
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="list-item">
                                                                        <span class="list-icon">
                                                                            <svg class="iconsvg-safe">
                                                                                <use
                                                                                    xlink:href="/htmlv2/images/sprite.svg#safe">
                                                                                </use>
                                                                            </svg>
                                                                        </span>
                                                                        Két an toàn
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="list-item">
                                                                        <span class="list-icon">
                                                                            <svg class="iconsvg-ipad">
                                                                                <use
                                                                                    xlink:href="/htmlv2/images/sprite.svg#ipad">
                                                                                </use>
                                                                            </svg>
                                                                        </span>Máy tính bảng
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row g-3 justify-content-left">
                                                    <div class="col-sm-auto">
                                                        <a class="btn btn-cta btn-outline-primary fs-18px px-md-4 w-100"
                                                            href="https://avanaretreat.com/vn/dat-phong"
                                                            role="button">ĐẶT PHÒNG</a>
                                                    </div>
                                                    <div class="col-sm-auto">
                                                        <a class="btn btn-cta btn-primary-3 fs-18px px-md-4 w-100"
                                                            href="https://vrtour.avanaretreat.com/lantana/"
                                                            target="_blank" role="button">Xem VR Tour</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="swiper-container swiper-controls-style-1 mx-flush"
                                                data-plugin="photoswipe">
                                                <div class="swiper" data-plugin="swiper"
                                                    data-options='{"pagination":{"el":".swiper-pagination","type":"fraction"}}'>
                                                    <div class="swiper-wrapper">
                                                        @foreach ($room->galleries as $gally)
                                                            <div class="swiper-slide">
                                                                <a href="{{ @$gally->image->path ?? '' }}"
                                                                    target="_blank">
                                                                    <img class="img-fluid w-100"
                                                                        src="{{ @$gally->image->path ?? '' }}"
                                                                        alt="{{ $room->name }}">
                                                                </a>
                                                            </div>
                                                        @endforeach

                                                    </div>
                                                    <div class="swiper-buttons">
                                                        <div class="swiper-button-prev">
                                                            <svg class="iconsvg-chevron-right rotate-180">
                                                                <use xlink:href="/htmlv2/images/sprite.svg#chevron-right">
                                                                </use>
                                                            </svg>
                                                        </div>
                                                        <div class="swiper-button-next">
                                                            <svg class="iconsvg-chevron-right">
                                                                <use xlink:href="/htmlv2/images/sprite.svg#chevron-right">
                                                                </use>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-pagination"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    @endif
                @endforeach





            </section>
            <section class="acc-section-3 section py-0">
                <div class="container">
                    <div class="tab">
                        <div class="dropdown dropdown-nav">
                            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false" data-bs-offset="0, 0">Thông tin quan trọng</button>
                            <div class="dropdown-menu">
                                <div class="nav-responsive">
                                    <div class="nav-responsive-inner">
                                        <ul class="tab-nav nav nav-fill nav-style-1 nav-style-1-active-primary"
                                            role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" href="#tab_241" data-bs-toggle="tab"
                                                    role="tab" aria-controls="acc-s3-tab-info-guest"
                                                    aria-selected="true">Thông tin quan trọng</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link " href="#tab_242" data-bs-toggle="tab" role="tab"
                                                    aria-controls="acc-s3-tab-info-guest" aria-selected="true">Chính sách
                                                    phòng và nhận trả phòng</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link " href="#tab_243" data-bs-toggle="tab" role="tab"
                                                    aria-controls="acc-s3-tab-info-guest" aria-selected="true">Quy định
                                                    khách đến thăm</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link " href="#tab_244" data-bs-toggle="tab" role="tab"
                                                    aria-controls="acc-s3-tab-info-guest" aria-selected="true">Đặt phòng
                                                    và đặt cọc</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link " href="#tab_245" data-bs-toggle="tab" role="tab"
                                                    aria-controls="acc-s3-tab-info-guest" aria-selected="true">Khoảng cách
                                                    đến các điểm lân cận</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="tab_241">
                                <div class="showmore">
                                    <div class="collapse" id="acc-s3-showmore-info-guest">
                                        <div class="paragraph fs-sm">
                                            <p><strong>Phụ thu th&ecirc;m người</strong></p>
                                            <p>Nếu số lượng kh&aacute;ch thực tế (bao gồm cả trẻ em) khi nhận ph&ograve;ng
                                                vượt qu&aacute; số lượng quy định tr&ecirc;n x&aacute;c nhận, phụ ph&iacute;
                                                th&ecirc;m người c&oacute; thể được &aacute;p dụng theo ch&iacute;nh
                                                s&aacute;ch của resort.<br /><br /><strong>H&uacute;t thuốc</strong></p>
                                            <p>C&aacute;c sản phẩm của thuốc l&aacute;, bao gồm thuốc l&aacute;, x&igrave;
                                                g&agrave;, tẩu, thuốc l&aacute; điện tử, chất lỏng điện tử, thuốc l&aacute;
                                                dạng h&iacute;t hoặc nhai, chỉ được ph&eacute;p sử dụng tại c&aacute;c khu
                                                vực c&oacute; biển chỉ dẫn. Nếu sai quy định ph&iacute; phạt cho một lần vi
                                                phạm l&agrave; 3.000.000 VNĐ.</p>
                                            <p><strong>T&agrave;i sản c&aacute; nh&acirc;n</strong></p>
                                            <p>Qu&yacute; kh&aacute;ch cần ch&uacute; &yacute; cửa ph&ograve;ng trong suốt
                                                thời gian lưu tr&uacute;. Khu nghỉ kh&ocirc;ng chịu tr&aacute;ch nhiệm với
                                                bất kỳ đồ c&aacute; nh&acirc;n, vật gi&aacute; trị n&agrave;o để lại trong
                                                ph&ograve;ng. K&eacute;t an to&agrave;n trong ph&ograve;ng được khuyến
                                                kh&iacute;ch sử dụng.</p>
                                            <p><strong>Cơ sở vật chất khu nghỉ</strong></p>
                                            <p>Qu&yacute; kh&aacute;ch sẽ chịu tr&aacute;ch nhiệm nếu l&agrave;m thất lạc
                                                hay tổn hại đến cơ sở vật chất của khu nghỉ.</p>
                                            <p><strong>Th&uacute; cưng</strong></p>
                                            <p>Vật nu&ocirc;i kh&ocirc;ng được ph&eacute;p mang v&agrave;o resort.</p>
                                            <p><strong>Đảm bảo sự ri&ecirc;ng tư</strong></p>
                                            <p>Kh&ocirc;ng mang flycam, thiết bị bay kh&ocirc;ng người l&aacute;i, v&agrave;
                                                c&aacute;c thiết bị &acirc;m thanh g&acirc;y ồn &agrave;o ảnh hưởng tới sự
                                                an to&agrave;n v&agrave; t&iacute;nh ri&ecirc;ng tư của kh&aacute;ch.
                                                Ph&iacute; phạt cho một lần vi phạm l&agrave; 3.000.000 VNĐ.</p>
                                            <p><strong>Quy định an to&agrave;n</strong></p>
                                            <p>Kh&ocirc;ng nấu ăn hoặc mang dụng cụ nấu ăn, đồ ăn c&oacute; m&ugrave;i
                                                v&agrave;o trong ph&ograve;ng. Ph&iacute; phạt cho một lần vi phạm l&agrave;
                                                5.000.000 VNĐ.<br />Kh&ocirc;ng mang ph&aacute;o hoa, chất dễ ch&aacute;y
                                                nổ, chất g&acirc;y nghiện v&agrave; c&aacute;c chất cấm kh&aacute;c
                                                v&agrave;o khu nghỉ. Ph&iacute; phạt cho một lần vi phạm l&agrave; 5.000.000
                                                VNĐ.<br />Kh&ocirc;ng tr&egrave;o, bơi, hoặc lội xuống nước ở c&aacute;c khu
                                                th&aacute;c trong khu&ocirc;n vi&ecirc;n khu nghỉ để đảm bảo an to&agrave;n
                                                v&agrave; bảo vệ m&ocirc;i trường tự nhi&ecirc;n. Ph&iacute; phạt cho một
                                                lần vi phạm l&agrave; 3.000.000 VNĐ.<br />Avana Retreat kh&ocirc;ng chịu
                                                tr&aacute;ch nhiệm với bất kỳ tai nạn n&agrave;o xảy ra do việc kh&ocirc;ng
                                                chấp h&agrave;nh c&aacute;c quy định n&oacute;i tr&ecirc;n.</p>
                                            <p><strong>Đảm bảo sự an to&agrave;n cho trẻ em</strong></p>
                                            <p><span style="font-weight: 400;">Để đảm bảo sự an to&agrave;n cho trẻ em
                                                    trong kh&ocirc;ng gian nhiều đồi n&uacute;i, suối, th&aacute;c tại Avana
                                                    Retreat, bố mẹ hoặc người gi&aacute;m hộ c&oacute; tr&aacute;ch nhiệm
                                                    tr&ocirc;ng coi trẻ em dưới 16 tuổi trong suốt kỳ nghỉ. </span></p>
                                            <p><strong>Chỗ đậu xe</strong></p>
                                            <p>Chỗ đậu xe miễn ph&iacute; trong resort.</p>
                                            <p><strong>Bền vững v&agrave; M&ocirc;i trường</strong></p>
                                            <p>Avana Retreat nằm trong m&ocirc;i trường thi&ecirc;n nhi&ecirc;n đa dạng với
                                                đồi, n&uacute;i, thung lũng, th&aacute;c nước, hồ c&aacute;, v&agrave; suối.
                                                Ch&uacute;ng t&ocirc;i kh&ocirc;ng chịu bất kỳ tr&aacute;ch nhiệm n&agrave;o
                                                li&ecirc;n quan đến rủi ro xảy ra nếu kh&aacute;ch kh&ocirc;ng thực hiện
                                                theo c&aacute;c hướng dẫn về an to&agrave;n của Avana Retreat.<br />Sứ mệnh
                                                của ch&uacute;ng t&ocirc;i l&agrave; x&acirc;y dựng một m&ocirc;i trường bền
                                                vững cho kh&aacute;ch h&agrave;ng, nh&acirc;n vi&ecirc;n v&agrave; cộng đồng
                                                địa phương. Việc sử dụng c&aacute;c sản phẩm nhựa, c&aacute;c h&agrave;nh vi
                                                c&oacute; t&aacute;c động ti&ecirc;u cực đến m&ocirc;i trường đều
                                                kh&ocirc;ng được ph&eacute;p.</p>
                                        </div>
                                    </div>
                                    <div class="showmore-footer text-center">
                                        <button class="btn showmore-btn collapsed" type="button"
                                            href="#acc-s3-showmore-info-guest" data-bs-toggle="collapse"
                                            aria-expanded="false" aria-controls="acc-s3-showmore-info-guest">
                                            <svg class="iconsvg-chevron-double-down showmore-btn-icon">
                                                <use xlink:href="/htmlv2/images/sprite.svg#chevron-double-down"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade " id="tab_242">
                                <div class="showmore">
                                    <div class="collapse" id="acc-s3-showmore-info-guest">
                                        <div class="paragraph fs-sm">
                                            <p><strong>Thời gian nhận v&agrave; trả ph&ograve;ng:</strong></p>
                                            <p>Giờ nhận ph&ograve;ng v&agrave;o 14:00 v&agrave; trả ph&ograve;ng v&agrave;o
                                                11:00. Bất k&igrave; sự gia hạn lưu tr&uacute; n&agrave;o cũng cần được
                                                b&aacute;o trước với bộ phận lễ t&acirc;n.</p>
                                            <p><strong>1. Lantana Mountain Bungalow</strong></p>
                                            <p>Ti&ecirc;u chuẩn ph&ograve;ng: Gi&aacute; ph&ograve;ng đ&atilde; bao gồm bữa
                                                s&aacute;ng cho bốn người lớn v&agrave; hai trẻ em dưới 6 tuổi, thuế
                                                v&agrave; ph&iacute; dịch vụ.</p>
                                            <p>Sức chứa tối đa: 4 người lớn v&agrave; 4 trẻ em HOẶC 6 người lớn v&agrave; 2
                                                trẻ em</p>
                                            <p><strong>2. Bauhinia Mountain Suite</strong></p>
                                            <p>Ti&ecirc;u chuẩn ph&ograve;ng: Gi&aacute; ph&ograve;ng đ&atilde; bao gồm bữa
                                                s&aacute;ng cho hai người lớn v&agrave; một trẻ em dưới 6 tuổi, thuế
                                                v&agrave; ph&iacute; dịch vụ</p>
                                            <p>Sức chứa tối đa: 2 người lớn v&agrave; 2 trẻ em HOẶC 3 người lớn v&agrave; 1
                                                trẻ em</p>
                                            <p><strong>3. Ferns Grand Mountain Suite</strong></p>
                                            <p>Ti&ecirc;u chuẩn ph&ograve;ng: Gi&aacute; ph&ograve;ng đ&atilde; bao gồm bữa
                                                s&aacute;ng cho hai người lớn v&agrave; một trẻ em dưới 6 tuổi, thuế
                                                v&agrave; ph&iacute; dịch vụ</p>
                                            <p>Sức chứa tối đa: 2 người lớn v&agrave; 2 trẻ em HOẶC 3 người lớn v&agrave; 1
                                                trẻ em</p>
                                            <p><strong>4. Senna Hilltop Pool Villa 1BR</strong></p>
                                            <p>Ti&ecirc;u chuẩn ph&ograve;ng: Gi&aacute; ph&ograve;ng đ&atilde; bao gồm bữa
                                                s&aacute;ng cho hai người lớn v&agrave; một trẻ em dưới 6 tuổi, thuế
                                                v&agrave; ph&iacute; dịch vụ</p>
                                            <p>Sức chứa tối đa: 2 người lớn v&agrave; 2 trẻ em HOẶC 3 người lớn v&agrave; 1
                                                trẻ em</p>
                                            <p><strong>5. Senna Hilltop Pool Villa 2BR</strong></p>
                                            <p>Ti&ecirc;u chuẩn ph&ograve;ng: Gi&aacute; ph&ograve;ng đ&atilde; bao gồm bữa
                                                s&aacute;ng cho 4 người lớn v&agrave; 2 trẻ em dưới 6 tuổi, thuế v&agrave;
                                                ph&iacute; dịch vụ</p>
                                            <p>Sức chứa tối đa: 4 người lớn v&agrave; 4 trẻ em HOẶC 5 người lớn v&agrave; 3
                                                trẻ em</p>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                    <div class="showmore-footer text-center">
                                        <button class="btn showmore-btn collapsed" type="button"
                                            href="#acc-s3-showmore-info-guest" data-bs-toggle="collapse"
                                            aria-expanded="false" aria-controls="acc-s3-showmore-info-guest">
                                            <svg class="iconsvg-chevron-double-down showmore-btn-icon">
                                                <use xlink:href="/htmlv2/images/sprite.svg#chevron-double-down"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade " id="tab_243">
                                <div class="showmore">
                                    <div class="collapse" id="acc-s3-showmore-info-guest">
                                        <div class="paragraph fs-sm">
                                            <ul>
                                                <li>Tất cả th&ocirc;ng tin của kh&aacute;ch đến thăm cần được cung cấp tới
                                                    nh&acirc;n vi&ecirc;n lễ t&acirc;n bao gồm: Số kh&aacute;ch, T&ecirc;n,
                                                    Thời gian đến, Thời gian đi.</li>
                                                <li>Kh&aacute;ch đến thăm cần lưu lại thẻ căn cước, chứng minh thư tại bộ
                                                    phận bảo vệ.</li>
                                                <li>Kh&aacute;ch đến thăm chỉ được thăm quan tại những khu vực c&ocirc;ng
                                                    cộng, kh&ocirc;ng được ph&eacute;p v&agrave;o ph&ograve;ng của
                                                    kh&aacute;ch lưu tr&uacute;.</li>
                                                <li>Kh&aacute;ch lưu tr&uacute; vui l&ograve;ng đ&oacute;n kh&aacute;ch đến
                                                    thăm tại sảnh lễ t&acirc;n.</li>
                                                <li>Kh&aacute;ch đến thăm chỉ được lưu tr&uacute; kh&ocirc;ng mất ph&iacute;
                                                    tối đa 2 tiếng. Qu&aacute; 2 tiếng sẽ t&iacute;nh ph&iacute;
                                                    3,000,000VNĐ tr&ecirc;n kh&aacute;ch. Qu&aacute; 6 tiếng sẽ t&iacute;nh
                                                    ph&iacute; 6,000,000VNĐ tr&ecirc;n kh&aacute;ch. Tất cả c&aacute;c
                                                    h&oacute;a đơn thu ph&iacute; sẽ được cộng v&agrave;o h&oacute;a đơn
                                                    ph&ograve;ng kh&aacute;ch đang lưu tr&uacute;.</li>
                                                <li>Kh&aacute;ch đến thăm phải rời khu nghỉ trước 17:00.</li>
                                                <li>Ch&uacute;ng t&ocirc;i kh&ocirc;ng cho ph&eacute;p những đơn vị
                                                    b&ecirc;n thứ 3 v&agrave;o thăm khu nghỉ như: Nhiếp ảnh gia chuy&ecirc;n
                                                    nghiệp, chuy&ecirc;n gia l&agrave;m đẹp, nghệ sĩ giải tr&iacute;&hellip;
                                                </li>
                                            </ul>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                    <div class="showmore-footer text-center">
                                        <button class="btn showmore-btn collapsed" type="button"
                                            href="#acc-s3-showmore-info-guest" data-bs-toggle="collapse"
                                            aria-expanded="false" aria-controls="acc-s3-showmore-info-guest">
                                            <svg class="iconsvg-chevron-double-down showmore-btn-icon">
                                                <use xlink:href="/htmlv2/images/sprite.svg#chevron-double-down"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade " id="tab_244">
                                <div class="showmore">
                                    <div class="collapse" id="acc-s3-showmore-info-guest">
                                        <div class="paragraph fs-sm">
                                            <p><strong>Điều khoản về Đặt ph&ograve;ng &amp; Đặt cọc</strong></p>
                                            <p>Bằng việc đặt ph&ograve;ng với ch&uacute;ng t&ocirc;i (chủ sở hữu / người đại
                                                diện của chủ sở hữu), bạn (kh&aacute;ch ch&iacute;nh) v&agrave; đối
                                                t&aacute;c đặt ph&ograve;ng của bạn (kh&aacute;ch) đồng &yacute; với
                                                c&aacute;c điều khoản v&agrave; điều kiện dưới đ&acirc;y. Trong thời gian
                                                lưu tr&uacute;, bạn đồng &yacute; tu&acirc;n thủ c&aacute;c điều kiện tiếp
                                                theo như đ&atilde; đề ra. Nếu bạn c&oacute; bất kỳ c&acirc;u hỏi n&agrave;o
                                                về việc đặt ph&ograve;ng, vui l&ograve;ng li&ecirc;n hệ trước khi đặt
                                                ph&ograve;ng.</p>
                                            <p><strong>Hướng dẫn &amp; Hạn chế về virus Corona</strong></p>
                                            <p>C&aacute;c hướng dẫn v&agrave; hạn chế về virus Corona được &aacute;p dụng
                                                tại Avana Retreat ph&ugrave; hợp với hướng dẫn hiện h&agrave;nh của địa
                                                phương v&agrave; quốc gia.</p>
                                            <p><strong>Quy tr&igrave;nh đặt ph&ograve;ng</strong></p>
                                            <p>Để đặt ph&ograve;ng Avana Retreat, kh&aacute;ch ch&iacute;nh phải từ 18 tuổi
                                                trở l&ecirc;n. Số lượng kh&aacute;ch lưu tr&uacute; tối đa cho mỗi
                                                ph&ograve;ng được ghi r&otilde; trong Ch&iacute;nh s&aacute;ch Ph&ograve;ng
                                                hoặc tr&ecirc;n tr&ecirc;n web của Avana Retreat. Trong trường hợp người đặt
                                                ph&ograve;ng kh&aacute;c với kh&aacute;ch ch&iacute;nh, người đặt
                                                ph&ograve;ng c&oacute; thể sẽ phải chịu tr&aacute;ch nhiệm về việc hủy
                                                ph&ograve;ng, kh&ocirc;ng đến v&agrave; những thiệt hại theo như quy định
                                                của Avana Retreat. Chỉ kh&aacute;ch ch&iacute;nh v&agrave; người c&oacute;
                                                t&ecirc;n đặt ph&ograve;ng mới được ph&eacute;p sử dụng t&agrave;i sản
                                                v&agrave; c&aacute;c tiện nghi của Avana Retreat, bất kỳ kh&aacute;ch
                                                b&ecirc;n thứ ba n&agrave;o cũng chỉ được ph&eacute;p truy cập khi c&oacute;
                                                sự cho ph&eacute;p r&otilde; r&agrave;ng v&agrave; cụ thể của ch&uacute;ng
                                                t&ocirc;i.</p>
                                            <p>Bạn c&oacute; thể thanh to&aacute;n trực tuyến hoặc chuyển khoản.
                                                Kh&aacute;ch h&agrave;ng ch&iacute;nh sẽ phải ho&agrave;n trả cho ng&acirc;n
                                                h&agrave;ng của ch&uacute;ng t&ocirc;i c&aacute;c khoản ph&iacute;
                                                ph&aacute;t sinh n&agrave;o để xử l&yacute; thẻ t&iacute;n dụng hoặc chuyển
                                                khoản bị từ chối trong v&ograve;ng bảy (7) ng&agrave;y kể từ khi c&oacute;
                                                y&ecirc;u cầu thực hiện.</p>
                                            <p>Kh&aacute;ch h&agrave;ng của Avana Retreat đồng &yacute; t&ocirc;n trọng sự
                                                ri&ecirc;ng tư v&agrave; y&ecirc;n tĩnh của c&aacute;c kh&aacute;ch lưu
                                                tr&uacute; kh&aacute;c. Ch&uacute;ng t&ocirc;i c&oacute; quyền hủy đặt
                                                ph&ograve;ng c&oacute; hiệu lực ngay lập tức nếu kh&aacute;ch kh&ocirc;ng
                                                t&ocirc;n trọng thỏa thuận n&agrave;y, hoặc g&acirc;y phiền h&agrave; /
                                                phiền to&aacute;i cho những kh&aacute;ch kh&aacute;c.</p>
                                            <p><strong>C&aacute;c điều kiện hủy, đặt cọc trả lại &amp; kh&ocirc;ng c&oacute;
                                                    mặt</strong></p>
                                            <p>Kh&aacute;ch h&agrave;ng c&oacute; nhu cầu hủy đặt ph&ograve;ng vui
                                                l&ograve;ng li&ecirc;n hệ với ch&uacute;ng t&ocirc;i c&agrave;ng sớm
                                                c&agrave;ng tốt, t&ugrave;y thuộc v&agrave;o ch&iacute;nh s&aacute;ch hủy
                                                đặt ph&ograve;ng của qu&yacute; kh&aacute;ch. Kh&aacute;ch đặt ph&ograve;ng
                                                n&ecirc;n mua bảo hiểm hủy / chuyến đi ph&ugrave; hợp nếu c&oacute;
                                                y&ecirc;u cầu.</p>
                                            <p>Trong trường hợp hiếm hoi ch&uacute;ng t&ocirc;i cần hủy đặt ph&ograve;ng của
                                                bạn, xin lưu &yacute; rằng ch&uacute;ng t&ocirc;i kh&ocirc;ng thể chịu
                                                tr&aacute;ch nhiệm cho những trường hợp nằm ngo&agrave;i tầm kiểm
                                                so&aacute;t; tr&aacute;ch nhiệm của ch&uacute;ng t&ocirc;i đối với bạn chỉ
                                                giới hạn ở việc ho&agrave;n trả bất kỳ khoản thanh to&aacute;n n&agrave;o
                                                đ&atilde; được thực hiện.</p>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>
                                    <div class="showmore-footer text-center">
                                        <button class="btn showmore-btn collapsed" type="button"
                                            href="#acc-s3-showmore-info-guest" data-bs-toggle="collapse"
                                            aria-expanded="false" aria-controls="acc-s3-showmore-info-guest">
                                            <svg class="iconsvg-chevron-double-down showmore-btn-icon">
                                                <use xlink:href="/htmlv2/images/sprite.svg#chevron-double-down"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade " id="tab_245">
                                <div class="showmore">
                                    <div class="collapse" id="acc-s3-showmore-info-guest">
                                        <div class="paragraph fs-sm">
                                            <p><strong>Từ th&agrave;nh phố H&agrave; Nội:</strong>&nbsp;165km (4 giờ &ocirc;
                                                t&ocirc;)</p>
                                            <p><strong>Từ s&acirc;n bay Nội B&agrave;i:</strong>&nbsp;185km (4 giờ &ocirc;
                                                t&ocirc;)</p>
                                            <p><strong>Từ th&agrave;nh phố Ninh B&igrave;nh:</strong>&nbsp;160km (4 giờ
                                                &ocirc; t&ocirc;)</p>
                                            <p><strong>Từ P&ugrave; Lu&ocirc;ng, Thanh H&oacute;a:</strong>&nbsp;50km (1.5
                                                giờ &ocirc; t&ocirc;)</p>
                                            <p><strong>Từ thị trấn Mộc Ch&acirc;u:</strong>&nbsp;90km (2 giờ &ocirc;
                                                t&ocirc;)</p>
                                            <p><strong>Từ s&acirc;n bay C&aacute;t Bi:</strong>&nbsp;290km (6 giờ &ocirc;
                                                t&ocirc;)</p>
                                            <p><strong>Từ th&agrave;nh phố Hạ Long:</strong>&nbsp;315km (6 giờ &ocirc;
                                                t&ocirc;)</p>
                                            <p>Gi&uacute;p bạn thuận tiện di chuyển, Avana Retreat cung cấp dịch vụ đưa
                                                đ&oacute;n xe ri&ecirc;ng (c&oacute; t&iacute;nh ph&iacute;). Vui
                                                l&ograve;ng gửi th&ocirc;ng tin v&agrave;o email sau để đặt xe đưa
                                                đ&oacute;n cho kỳ nghỉ của bạn:&nbsp;<a
                                                    href="/cdn-cgi/l/email-protection#80e9eef1f5e9f2e9e5f3c0e1f6e1eee1f2e5f4f2e5e1f4aee3efed"><span
                                                        class="__cf_email__"
                                                        data-cfemail="b6dfd8c7c3dfc4dfd3c5f6d7c0d7d8d7c4d3c2c4d3d7c298d5d9db">[email&#160;protected]</span></a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="showmore-footer text-center">
                                        <button class="btn showmore-btn collapsed" type="button"
                                            href="#acc-s3-showmore-info-guest" data-bs-toggle="collapse"
                                            aria-expanded="false" aria-controls="acc-s3-showmore-info-guest">
                                            <svg class="iconsvg-chevron-double-down showmore-btn-icon">
                                                <use xlink:href="/htmlv2/images/sprite.svg#chevron-double-down"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <script>
            $('#modal-reserve-now').on('shown.bs.modal', function(e) {
                // do something...
                var service = $(e.relatedTarget).attr("data-service");
                $("#booking_service_name").text(service);
                $("#booking_service_input").val(service);
            })
        </script>

        <script data-cfasync="false" src="js/email-decode.min.js"></script>
        <script>
            $(document).ready(function() {
                $("#contact-subscribe").submit(function(e) {
                    e.preventDefault(); // avoid to execute the actual submit of the form.

                    var form = $(this);
                    var actionUrl = form.attr('action');
                    grecaptcha.ready(function() {
                        grecaptcha.execute('6Lc4XdseAAAAAASz8TVWJyXVDb90LPZRprPDMU3Y', {
                            action: 'submit'
                        }).then(function(token) {
                            $.ajax({
                                type: "POST",
                                url: actionUrl,
                                dataType: "json",
                                data: form
                            .serialize(), // serializes the form's elements.
                                beforeSend: function(request) {
                                    request.setRequestHeader("captcha", token);
                                },
                                success: function(data) {
                                    if (data.status == 'error') {
                                        alert(data.message);
                                        return true;
                                    }
                                    window.location.href =
                                        "https://avanaretreat.com/vn/gui-thong-tin-thanh-cong";
                                }
                            });
                        });
                    });
                });
            });
        </script>
    </div>
    <!-- <div class="loader" id="loader">
        <span class="loader-text" id="loader-text">0%</span>
    </div> -->
    <div class="modal-booknow modal modal-xl mfp-with-anim mfp-hide" id="modal-booknow-form">
        <div class="text-center mb-5">
            <h4 class="text-primary text-uppercase mb-3 fw-5">Cảm ơn đã liên hệ với chúng tôi </h4>
            <p class="ff-secondary text-primary-dark">Nếu bạn có bất kỳ yêu cầu nào cần trợ giúp, vui lòng liên hệ với
                chúng tôi.:</p>
        </div>
        <form class="form-style-1" action="/api/contacts" method="POST" id="modal_contacts_form">
            <input type="hidden" name="lang" value="vn">
            <input type="hidden" name="_token" value="LHrlFjjZvTbiQZFR7dluW3GWewJdOxeX3ZfeEzt8"> <input type="hidden"
                name="reservation" value="">
            <div class="row gutter-md-4 mb-5">
                <div class="col-lg-4 col-md-6 mb-4">
                    <label class="form-label" for="form-booknow-first-name">Tên</label>
                    <input class="form-control form-control-lg" id="form-booknow-first-name" type="text"
                        name="first_name" required="" />
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <label class="form-label" for="form-booknow-last-name">Họ và tên đệm</label>
                    <input class="form-control form-control-lg" id="form-booknow-last-name" type="text"
                        name="last_name" required="" />
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <label class="form-label" for="form-booknow-email">Email</label>
                    <input class="form-control form-control-lg" id="form-booknow-email" name="email" type="email"
                        required="" />
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <label class="form-label" for="form-booknow-contact-number">Số điện thoại</label>
                    <input class="form-control form-control-lg" id="form-booknow-contact-number" name="phone"
                        type="text" required="" />
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <label class="form-label" for="form-booknow-date">Ngày</label>
                    <div class="flatpickr" data-plugin="flatpickr">
                        <input class="form-control form-control-lg" id="form-booknow-date" type="text"
                            data-input="data-input" name="date" />
                        <svg class="icon icon-calendar flatpickr-icon" data-toggle="data-toggle">
                            <use xlink:href="https://avanaretreat.com/htmlv2/images/sprite.svg#calendar"></use>
                        </svg>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <label class="form-label" for="form-booknow-time">Thời gian</label>
                    <div class="flatpickr" data-plugin="flatpickr"
                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","time_24hr":true}'>
                        <input class="form-control form-control-lg" id="form-booknow-time" type="text" value="14:30"
                            data-input="data-input" name="time" />
                    </div>
                </div>
                <div class="col-12">
                    <label class="form-label" for="form-booknow-request">Yêu cầu dịch vụ</label>
                    <textarea class="form-control form-control-lg" rows="6" id="form-booknow-request" name="message"></textarea>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-cta btn btn-lg rounded-pill btn-outline-primary-dark px-5"
                    id="modal_contacts_submit">Gửi yêu cầu</button>
                <p class="ff-secondary text-primary-dark mt-3 mb-0" id="reserve_thanks" style="display: none;">Cám ơn
                    bạn. Chúng tôi sẽ sớm liên hệ lại với bạn.</p>
            </div>
        </form>
    </div>
    <script>
        $('#modal-reserve-now').on('shown.bs.modal', function(e) {
            // do something...
            var service = $(e.relatedTarget).attr("data-service");
            $("#booking_service_name").text(service);
            $("#booking_service_input").val(service);
        })
    </script>
@endsection
