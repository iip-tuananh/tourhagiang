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
    <div class="page " ng-controller="ServicePageController" ng-cloak>
        @include('site.partials.header')
        <div class="page-main">
            <section class="pkd-section-hero section-hero section section-overlay text-white"
                style="background-image: url('{{$service->image->path}}')">
                <div class="container">
                    <div class="section-body my-auto text-center">
                        <h2 class="section-title mb-4">{{$service->name}}</h2>
                        </h2>
                        <div class="d-flex flex-column flex-md-row mb-4 py-2">
                            <span class="pkg-sale-off">OFF<span class="pkg-sale-off-num">{{ formatCurrency( round(($service->base_price - $service->price) / $service->base_price * 100)) }}%</span>
                            </span>
                            <span class="pkg-price">Chỉ từ<span class="pkg-price-num">{{ formatCurrency($service->price) }}</span>VNĐ/
                                Khách</span>
                        </div>
                        {{-- <a class="btn btn-cta btn-white fs-22px px-4 py-2 package_contact_button" data-bs-toggle="modal"
                            data-bs-target="#modal-pkg-booking" href="#" role="button">Liên hệ tư vấn</a> --}}
                        <a class="btn btn-cta btn-white fs-22px px-4 py-2 package_contact_button" href="tel:{{str_replace(' ','',$config->hotline)}}" role="button">Liên hệ tư vấn</a>
                    </div>
                    {{-- <div class="pkg-featured">
                        <div class="row justify-content-evenly gy-3 gy-md-2">
                            <div class="col-lg-auto col-md-4">
                                <div class="pkg-featured-item">
                                    <img width="76px" height="76px"
                                        src="https://avanaretreat.com/storage/2024/08/1723619738restaurant.png"
                                        alt="Bữa sáng bên suối">
                                    <h3 class="pkg-featured-item-title mb-0">
                                        Bữa sáng bên suối
                                    </h3>
                                </div>
                            </div>
                            <div class="col-lg-auto col-md-4">
                                <div class="pkg-featured-item">
                                    <img width="76px" height="76px"
                                        src="https://avanaretreat.com/storage/2024/08/1723619738Romantic Dinner.png"
                                        alt="Bữa tối bên thác nước">
                                    <h3 class="pkg-featured-item-title mb-0">
                                        Bữa tối bên thác nước
                                    </h3>
                                </div>
                            </div>
                            <div class="col-lg-auto col-md-4">
                                <div class="pkg-featured-item">
                                    <img width="76px" height="76px"
                                        src="https://avanaretreat.com/storage/2024/08/1723619738activity.png"
                                        alt="20 hoạt động trải nghiệm">
                                    <h3 class="pkg-featured-item-title mb-0">
                                        20 hoạt động trải nghiệm
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div> --}}
                </div>
            </section>
            {{-- <section class="pkd-section-1 section">
                <div class="container">
                    <p class="section-lead fs-lg fw-5 text-primary mx-auto mb-5 text-center">Tận hưởng sự lãng mạn bậc nhất
                        với bữa tối bên thác nước cùng 20 hoạt động khám phá thiên nhiên và trải nghiệm văn hóa cùng nghệ
                        nhân bản địa.</p>
                    <div class="row gx-lg-5 gy-4 mb-5">
                        <div class="col-md d-flex flex-column gap-4">
                            <div>
                                <h3 class="fs-lg fw-5 mb-3">Giá</h3>
                                <div class="ps-3 ff-secondary text-gray">
                                    <p class="text-decoration-line-through mb-0">13,753,000 VNĐ/ Khách</p>
                                    <p class="text-primary fw-5 mb-1">Chỉ từ
                                        <span class="fs-26px ff-base">11,790,000</span>
                                        VNĐ/ Khách
                                    </p>
                                    <p class="mb-0">Tối thiểu 2 khách/ gói nghỉ dưỡng</p>
                                </div>
                            </div>
                            <div>
                                <h3 class="fs-lg fw-5 mb-3">Dịch vụ bao gồm</h3>
                                <ul
                                    class="list list-bullets list-bullets-sm list-bullets-color-inherit list-gap-2 mb-0 text-gray">
                                    <li class="list-item">Set chào mừng lúc nhận phòng</li>
                                    <li class="list-item">Ăn sáng hàng ngày từ 6:00 - 10:00 tại nhà hàng Green Chili</li>
                                    <li class="list-item">Tiệc tối bên thác nước</li>
                                    <li class="list-item">1 giỏ hoa quả, 2 chai nước ép, 4 chai nước tinh khiết Avana hàng
                                        ngày</li>
                                    <li class="list-item">Miễn phí Mini-bar trong phòng – được thêm mới hàng ngày</li>
                                    <li class="list-item">Miễn phí café (viên nén pha bằng máy) và trà Việt Nam trong phòng
                                    </li>
                                    <li class="list-item">Miễn phí ăn nhẹ buổi chiều tại Cloud Pool Bar</li>
                                    <li class="list-item">Miễn phí sử dụng máy tính bảng trong phòng</li>
                                    <li class="list-item">Dịch vụ xe điện, dịch vụ làm phòng mỗi tối</li>
                                    <li class="list-item">Miễn phí bể bơi bốn mùa tại Cloud Pool Bar, phòng gym, kid&#039;s
                                        club, thư viện, bảo tàng nhà sàn, nhà yoga</li>
                                    <li class="list-item">Thuế và phí phục vụ</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-auto d-none d-md-block">
                            <div class="border-start border-dark h-100"></div>
                        </div>
                        <div class="col-md d-flex flex-column gap-4">
                            <div>
                                <h3 class="fs-lg fw-5 mb-3">Thời gian</h3>
                                <ul
                                    class="list list-bullets list-bullets-sm list-bullets-color-inherit list-gap-2 mb-0 text-gray">
                                    <li class="list-item">3 ngày 2 đêm</li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="fs-lg fw-5 mb-3">Điều kiện áp dụng</h3>
                                <ul
                                    class="list list-bullets list-bullets-sm list-bullets-color-inherit list-gap-2 mb-0 text-gray">
                                    <li class="list-item">Đặt tối thiểu 2 khách/ gói nghỉ dưỡng</li>
                                    <li class="list-item">Áp dụng đặt và lưu trú từ 1/1 - 30/6/2025 (ngoại trừ: 5/4 - 7/4,
                                        30/4 - 4/5)</li>
                                    <li class="list-item">Miễn phụ thu cuối tuần </li>
                                    <li class="list-item">Ưu đãi dành cho khách Việt Nam và khách nước ngoài sinh sống, làm
                                        việc tại Việt Nam</li>
                                    <li class="list-item">Tour đã đặt không hoàn, hủy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- photo-->
                    <div class="pkg-photo mb-5">
                        <div class="pkg-photo-item">
                            <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2024/08/17236247525a.jpg"
                                alt="Tiệc tối bên thác nước" />
                            <h3 class="pkg-photo-item-title mb-0">Tiệc tối bên thác nước</h3>
                        </div>
                        <div class="pkg-photo-item">
                            <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2024/08/17236244734a.jpg"
                                alt="Bể bơi bốn mùa vô cực" />
                            <h3 class="pkg-photo-item-title mb-0">Bể bơi bốn mùa vô cực</h3>
                        </div>
                        <div class="pkg-photo-item">
                            <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2024/08/17236245253a.jpg"
                                alt="Nhà hàng Green Chili bên suối" />
                            <h3 class="pkg-photo-item-title mb-0">Nhà hàng Green Chili bên suối</h3>
                        </div>
                        <div class="pkg-photo-item">
                            <img class="img-fluid w-100"
                                src="https://avanaretreat.com/storage/2024/08/1723625021_VBK7080.jpg" alt="Spa bên suối" />
                            <h3 class="pkg-photo-item-title mb-0">Spa bên suối</h3>
                        </div>
                        <div class="pkg-photo-item">
                            <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2024/08/17236246701a.jpg"
                                alt="Lớp học làm nến thơm" />
                            <h3 class="pkg-photo-item-title mb-0">Lớp học làm nến thơm</h3>
                        </div>
                        <div class="pkg-photo-item">
                            <a class="btn btn-outline-primary text-uppercase rounded-0 w-100 py-3 fs-lg lh-heading text-start"
                                target="_blank" href="https://avanaretreat.com/vn/trai-nghiem" role="button">
                                <svg class="iconsvg-arrow-right-2 me-3 flex-shrink-0">
                                    <use xlink:href="/htmlv2/images/sprite.svg#arrow-right-2"></use>
                                </svg>
                                Khám phá thêm các trải nghiệm thú vị
                            </a>
                        </div>
                    </div>
                    <div class="text-center">
                        <a class="btn btn-cta btn-primary fs-18px px-4" href="#" role="button"
                            data-bs-toggle="modal" data-bs-target="#modal-pkg-booking">Liên hệ tư vấn</a>
                    </div>
                </div>
            </section> --}}
            <section class="pkd-section-2 section bg-primary-1">
                <div class="container">
                    {!! $service->content !!}
                </div>
            </section>
            <section class="pkd-section-3 section">
                <div class="container">
                    <h2 class="fs-36px text-uppercase text-primary fw-5 text-center mb-5">Khoảnh khắc đáng nhớ</h2>
                    <div class="pkg-photo2 mb-5">
                        @foreach ($service->galleries as $item)
                            <div class="pkg-photo2-item">
                                <a class="journey-popup" href="#" data-bs-toggle="modal"
                                    data-bs-target="#modal-guest-journey">
                                    <img class="img-fluid w-100"
                                        data-src="{{$item->image->path}}"
                                        src="{{$item->image->path}}"
                                        alt="$item->title" loading="lazy" />
                                </a>
                            </div>
                        @endforeach
                    </div>
                    {{-- <div class="text-center">
                        <a class="btn btn-cta btn-primary fs-18px px-4" target="_blank"
                            href="https://avanaretreat.com/vn/tu-lieu-truyen-thong.html" role="button">xem thêm</a>
                    </div> --}}
                </div>
            </section>
            {{-- <section class="pkd-section-4 section pt-4" id="package_contact_form">
                <div class="container">
                    <div class="text-center mb-5">
                        <h4 class="text-primary-5 fs-36px mb-3 fw-5">Bắt đầu kỳ nghỉ của bạn tại Avana Retreat</h4>
                        <p class="text-primary fs-lg fw-5 mb-0">Kỳ nghỉ lãng mạn 3N2Đ
                            trọn gói tiệc bên thác
                        </p>
                    </div>
                    <form class="form-style-1 form-style-1-plus common_contact_form"
                        redirect_uri="https://avanaretreat.com/vn/cam-on-yeu-cau" method="POST"
                        action="https://avanaretreat.com/vn/contacts" autocomplete="off">
                        <input type="hidden" name="_token" value="xeZ6Kog8bFvCYFmPwviqnctxMAjsPspfivtb02Rw">
                        <div class="row gy-4 mb-5">
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-first-name">Họ và tên</label>
                                <input class="form-control form-control-lg form-control-icon-user" name="fullname"
                                    id="form-bk-first-name" type="text" />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-last-phonenumber">Số điện thoại </label>
                                <input class="form-control form-control-lg form-control-icon-phone" name="phone"
                                    id="form-bk-last-phonenumber" type="text" />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-email">Email</label>
                                <input class="form-control form-control-lg form-control-icon-email" name="email"
                                    id="form-bk-email" type="email" />
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label" for="form-bk-date">Ngày nhận phòng</label>
                                <div class="flatpickr" data-plugin="flatpickr"
                                    data-options='{"minDate": "today","locale": "vn"}'>
                                    <input class="form-control form-control-lg form-control-icon-calendar"
                                        value="28/03/2025" name="date" id="form-bk-date" type="text"
                                        data-input="data-input" />
                                    <svg class="iconsvg-calendar flatpickr-icon" data-toggle="data-toggle">
                                        <use xlink:href="images/sprite.svg#calendar"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label" for="form-bk-sl-1">Số lượng người lớn</label>
                                <input class="form-control form-control-lg" type="number" min="1"
                                    name="params[adults]" id="form-bk-sl-1" type="text" />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-sl-2">Số lượng trẻ 0 - 2 tuổi</label>
                                <input class="form-control form-control-lg" type="number" value="0"
                                    name="params[children_1]" id="form-bk-sl-2" type="text" />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-sl-3">Số lượng trẻ 3 - 5 tuổi</label>
                                <input class="form-control form-control-lg" type="number" value="0"
                                    name="params[children_2]" id="form-bk-sl-3" type="text" />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-sl-4">Số lượng trẻ 6 - 11 tuổi</label>
                                <input class="form-control form-control-lg" type="number" value="0"
                                    name="params[children_3]" id="form-bk-sl-4" type="text" />
                            </div>
                        </div>
                        <div class="text-center">
                            <input name="type" type="hidden" value="packages">
                            <input name="reservation" type="hidden" class="package_title_field"
                                value="Kỳ nghỉ lãng mạn #3N2Đ#trọn gói tiệc bên thác">
                            <input name="link" type="hidden"
                                value="https://avanaretreat.com/vn/goi-nghi-duong/413-ky-nghi-lang-man-3n2d-tron-goi-tiec-ben-thac.html">
                            <button class="btn rounded-pill btn-primary fs-18px px-4 text-uppercase" type="submit">Gửi
                                thông tin</button>
                        </div>
                    </form>
                </div>
            </section> --}}
        </div>
        <div class="modal fade modal-guest-journey text-center" id="modal-guest-journey" tabindex="-1"
            aria-hidden="true">
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
        {{-- <div class="modal fade" id="modal-pkg-booking" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <button class="btn btn-link modal-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                        <span>x</span>
                    </button>
                    <div class="text-center mb-5">
                        <h4 class="text-primary-5 fs-36px mb-3 fw-5">Bắt đầu kỳ nghỉ của bạn tại Avana Retreat</h4>
                        <p class="text-primary fs-lg fw-5 mb-0">Kỳ nghỉ lãng mạn 3N2Đ
                            trọn gói tiệc bên thác
                        </p>
                    </div>
                    <form class="form-style-1 form-style-1-plus common_contact_form"
                        redirect_uri="https://avanaretreat.com/vn/cam-on-yeu-cau" method="POST"
                        action="https://avanaretreat.com/vn/contacts" autocomplete="off">
                        <input type="hidden" name="_token" value="xeZ6Kog8bFvCYFmPwviqnctxMAjsPspfivtb02Rw">
                        <div class="row gy-4 mb-5">
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-first-name">Họ và tên</label>
                                <input class="form-control form-control-lg form-control-icon-user" name="fullname"
                                    id="form-bk-first-name" type="text" />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-last-phonenumber">Số điện thoại </label>
                                <input class="form-control form-control-lg form-control-icon-phone" name="phone"
                                    id="form-bk-last-phonenumber" type="text" />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-email">Email</label>
                                <input class="form-control form-control-lg form-control-icon-email" name="email"
                                    id="form-bk-email" type="email" />
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label" for="form-bk-date">Ngày nhận phòng</label>
                                <div class="flatpickr" data-plugin="flatpickr"
                                    data-options='{"minDate": "today","locale": "vn"}'>
                                    <input class="form-control form-control-lg form-control-icon-calendar"
                                        value="28/03/2025" name="date" id="form-bk-date" type="text"
                                        data-input="data-input" />
                                    <svg class="iconsvg-calendar flatpickr-icon" data-toggle="data-toggle">
                                        <use xlink:href="images/sprite.svg#calendar"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <label class="form-label" for="form-bk-sl-1">Số lượng người lớn</label>
                                <input class="form-control form-control-lg" type="number" min="1"
                                    name="params[adults]" id="form-bk-sl-1" type="text" />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-sl-2">Số lượng trẻ 0 - 2 tuổi</label>
                                <input class="form-control form-control-lg" type="number" value="0"
                                    name="params[children_1]" id="form-bk-sl-2" type="text" />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-sl-3">Số lượng trẻ 3 - 5 tuổi</label>
                                <input class="form-control form-control-lg" type="number" value="0"
                                    name="params[children_2]" id="form-bk-sl-3" type="text" />
                            </div>
                            <div class="col-lg-4">
                                <label class="form-label" for="form-bk-sl-4">Số lượng trẻ 6 - 11 tuổi</label>
                                <input class="form-control form-control-lg" type="number" value="0"
                                    name="params[children_3]" id="form-bk-sl-4" type="text" />
                            </div>
                        </div>
                        <div class="text-center">
                            <input name="type" type="hidden" value="packages">
                            <input name="reservation" type="hidden" class="package_title_field"
                                value="Kỳ nghỉ lãng mạn #3N2Đ#trọn gói tiệc bên thác">
                            <input name="link" type="hidden"
                                value="https://avanaretreat.com/vn/goi-nghi-duong/413-ky-nghi-lang-man-3n2d-tron-goi-tiec-ben-thac.html">
                            <button class="btn rounded-pill btn-primary fs-18px px-4 text-uppercase" type="submit">Gửi
                                thông tin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> --}}
        <script>
            $(".journey-popup").bind("click", function() {
                var content = $(this).find('.content').html();
                var title = $(this).find('.title').text();
                var img = $(this).find('img').attr("data-src");
                $("#modal-guest-journey").find(".img").html('<img class="img-fluid w-100 rounded-2" src="' + img +
                '">');
                $("#modal-guest-journey").find(".content").html(content);
                $("#modal-guest-journey").find(".title").text(title);
                $('#modal-guest-journey').modal();
            });
            $('a[href="#package_contact_button"]').
            click(function() {
                var target = $('#package_contact_button');
                if (target.length) {
                    var top = target.offset().top;
                    $('html,body').animate({
                        scrollTop: top
                    }, 1000);
                    return false;
                }
            });
        </script>
    </div>
@endsection
@push('scripts')
    <script>
        app.controller('ServicePageController', function($scope, $http, $rootScope, $compile) {
        });
    </script>
@endpush
