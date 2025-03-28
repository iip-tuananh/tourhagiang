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
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
@endsection

@section('content')
    <div class="page" ng-controller="spaPage">
        @include('site.partials.header')

        <div class="page-main">
            @if(@$spa)
                <section class="section-hero section section-overlay text-white" style="background-image: url('{{ @$spa->image->path ?? '' }}')">
                    <div class="container text-center">
                        <div class="section-body my-auto">
                            <h2 class="section-title mb-4">{{ $spa->title }}</h2>
                            <p class="section-lead mx-auto fw-5 mb-4">
                                {!!$spa->intro !!}
                            </p>
                        </div>
                        <a class="btn btn-cta btn-white fs-18px px-4" target="_blank" href="#" role="button">SPA BROCHURE</a>
                    </div>
                </section>

            @endif

            @if(@$spa->blocks[0])
             <section class="spa-section-1 section pt-5">
                        <div class="container">
                            <h2 class="section-title fs-1 ff-tertiary fw-bold text-primary-3 mb-3 text-center letter-spacing-15">{{$spa->blocks[0]->title}}</h2>
                            <p class="section-lead paragraph text-primary-4 mw-890px mx-auto mb-5 text-center">
                                {!! $spa->blocks[0]->body !!}
                            </p>
                        </div>
                    </section>
            @endif


            <section class="spa-section-2 section py-0">
                <div class="container">
                    <div class="swiper-container swiper-buttons-outside swiper-pagination-outside mx-auto mb-5">
                        <div class="swiper" data-plugin="swiper">
                            <div class="swiper-wrapper">
                                @foreach($servicesSpa as $service)
                                    <div class="swiper-slide">
                                        <div class="row gx-0">
                                            <div class="col-lg-6">
                                                <img class="img-fluid w-100 section-img"
                                                     data-popup-image="https://avanaretreat.com/storage"
                                                     src="{{ @$service->image->path ?? '' }}" alt="{{ $service->name }}" />
                                            </div>
                                            <div class="col-lg-6 bg-primary text-white flex-column flex-center text-center py-5 px-3 px-md-5">
                                                <h3 class="section-title mb-3">{{ $service->name }}</h3>
                                                <p class="paragraph fs-sm mb-3">
                                                    {!! $service->body !!}
                                                </p>

                                                <a class="btn btn-cta btn-white text-uppercase px-4 d-lg-inline-flex" href="#" data-bs-toggle="modal"
                                                   data-service="{{ $service->name }}" data-bs-target="#modal-reserve-now" role="button" role="button">Gửi yêu cầu</a>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                            <div class="swiper-buttons swiper-buttons-style-1 swiper-buttons-primary">
                                <div class="swiper-button-prev">
                                    <svg class="iconsvg-arrow-right rotate-180">
                                        <use xlink:href="#"></use>
                                    </svg>
                                </div>
                                <div class="swiper-button-next">
                                    <svg class="iconsvg-arrow-right">
                                        <use xlink:href="#"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a class="btn btn-cta btn-outline-primary fs-18px px-4" target="_blank" href="#" role="button">Xem Brochure</a>
                    </div>
                </div>
            </section>

            <section class="spa-section-3 section">
                <div class="container">
                    <h2 class="section-title text-uppercase text-primary fw-5 text-center mb-5">Những trải nghiệm thư thái</h2>
                </div>
                <div class="container container-md-fluid px-md-0">
                    <div class="swiper-container swiper-pagination-outside">
                        <div class="swiper" data-plugin="swiper" data-options='{"breakpoints":{"768":{"slidesPerView":3,"allowTouchMove":false}}}'>
                            <div class="swiper-wrapper">
                                @foreach($experienceSpa as $experience)
                                    <div class="swiper-slide">
                                        <a class="thumbnail thumbnail-hover" data-bs-toggle="modal" data-bs-target="#modal-ex" role="button" data-exId="{{ $experience->id }}">
                                            <div class="thumbnail-inner img">
                                                <img class="thumbnail-img"  ng-click="showExperience()"
                                                     src="{{ @$experience->image->path ?? '' }}"
                                                     alt="{{ $experience->name }}" />
                                            </div>
                                            <div class="title d-none">{{ $experience->name }}</div>
                                            <div class="content d-none">
                                               {!! $experience->body !!}
                                            </div>
                                        </a>
                                    </div>
                                @endforeach
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

        <div class="modal fade" id="modal-reserve-now" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <button class="btn btn-link modal-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                        <span>x</span>
                    </button>
                    <div class="text-center mb-5">
                        <h4 class="text-primary-3 fs-30px text-uppercase mb-3 fw-5">Cảm ơn bạn đã liên hệ</h4>
                        <p class="ff-secondary text-gray fw-5 mb-4">Vui lòng cho chúng tôi biết bạn có bất kỳ yêu cầu nào về các dịch vụ bổ sung:</p>
                        <p class="fs-4 fw-5 text-uppercase text-gray mb-0">
                            <span class="text-primary">Dịch vụ:</span>
                            <span id="booking_service_name"></span>
                        </p>
                    </div>
                    <form class="form-style-1" autocomplete="off"  id="contact-form-service" autocomplete="off" action="#">
                        <input type="hidden" id="booking_service_input" name="reservation" value="">
                        <div class="row gutter-md-4 mb-5">
                            <div class="col-lg-4 col-md-6 mb-4">
                                <label class="form-label" for="form-rn-first-name">Họ</label>
                                <input class="form-control form-control-lg" name="first_name" id="form-rn-first-name" type="text" />
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <label class="form-label" for="form-rn-last-name">Tên</label>
                                <input class="form-control form-control-lg" name="last_name" id="form-rn-last-name" type="text" />
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <label class="form-label" for="form-rn-email">Email</label>
                                <input class="form-control form-control-lg" name="email" id="form-rn-email" type="email" />
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <label class="form-label" for="form-rn-contact-number">Số điện thoại</label>
                                <input class="form-control form-control-lg" name="phone" id="form-rn-contact-number" type="text" />
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <label class="form-label" for="form-rn-date">Ngày</label>
                                <div class="flatpickr" data-plugin="flatpickr">
                                    <input class="form-control form-control-lg" name="date" id="form-rn-date" type="text" data-input="data-input" />
                                    <svg class="iconsvg-calendar flatpickr-icon" data-toggle="data-toggle">
                                        <use xlink:href="images/sprite.svg#calendar"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <label class="form-label" for="form-rn-time">Thời gian</label>
                                <div class="flatpickr flatpickr-dropdown" data-plugin="flatpickr" data-options='{"minDate": "today", "locale": "vn", "enableTime":true,"noCalendar":true,"dateFormat":"H:i","time_24hr":true}'>
                                    <input class="form-control form-control-lg" name="time" id="form-rn-time" type="text" value="14:30" data-input="data-input" />
                                </div>
                            </div>
                            <div class="col-12">
                                <label class="form-label" for="form-rn-request">Dịch vụ yêu cầu</label>
                                <textarea class="form-control form-control-lg" name="message" rows="6" id="form-rn-request"></textarea>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn rounded-pill btn-primary-3 py-2 px-5 text-uppercase" type="">Gửi thông tin</button>
                        </div>
                        <input type="hidden" name="type" value="reservation">
                        <input name="link" type="hidden" value="https://avanaretreat.com/vn/spa">
                        <input type="hidden" name="_token" value="fiIquB24Qb61xCf95Hl2jXmFYYE2Fx5mATtPkjVy">        </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modal-ex" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <button class="btn btn-link modal-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                        <span>x</span>
                    </button>

                    <div class="main-content">
                        <div class="row gx-xl-5 gy-2">
                            <div class="col-xl-auto">
                                <!-- Gallery Slider Highlight -->
                                <div class="gallery-slider gallery-slider-highlight">
                                    <!-- Slider chính (gallery-slider-main) -->
                                    <div class="swiper" id="gallery-slider-main">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide"  ng-repeat="gallery in ex.galleries">
                                                <img class="img-fluid w-100"
                                                     ng-src="<% gallery.image.path %>"
                                                     alt="<% ex.name %>">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Slider thumbnails (gallery-slider-thumb) -->
                                    <div class="swiper mt-3" id="gallery-slider-thumb">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide"  ng-repeat="gallery in ex.galleries">
                                                <img class="img-fluid" ng-src="<% gallery.image.path %>"
                                                     alt="<% ex.name %>">
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Phần nội dung text -->
                            <div class="col-xl text-center text-xl-start">

                                <h4 class="text-primary fw-5 mb-4">
                                    <% ex.name %>
                                </h4>
                                <div class="paragraph text-gray mb-4" ng-bind-html="ex.body">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

@endsection
@push('scripts')
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
            <script>
                $('#modal-reserve-now').on('shown.bs.modal', function (e) {
                    // do something...
                    var service = $(e.relatedTarget).attr("data-service");
                    $("#booking_service_name").text(service);
                    $("#booking_service_input").val(service);
                })
            </script>

            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    // Slider thumbnails
                    var galleryThumbs = new Swiper('#gallery-slider-thumb', {
                        spaceBetween: 10,
                        slidesPerView: 3,
                        freeMode: true,
                        watchSlidesVisibility: true,
                        watchSlidesProgress: true,
                        breakpoints: {
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 12,
                            },
                        },
                    });

                    // Slider chính
                    var galleryMain = new Swiper('#gallery-slider-main', {
                        spaceBetween: 10,
                        // Thumbs
                        thumbs: {
                            swiper: galleryThumbs,
                        },
                    });
                });
                app.controller('spaPage', function ($rootScope, $scope, $interval) {
                    $('#modal-ex').on('shown.bs.modal', function (e) {
                        let exId = $(e.relatedTarget).attr('data-exId');

                        console.log(exId)
                        $.ajax({
                            type: 'GET',
                            url: "/admin/experience/" + exId + "/getData",
                            headers: {
                                'X-CSRF-TOKEN': "{{ csrf_token() }}"
                            },
                            success: function (response) {
                                if (response.success) {
                                    $scope.ex = response.data;
                                    $scope.$applyAsync();
                                } else {
                                }
                            },
                            error: function (e) {
                                toastr.error('Đã có lỗi xảy ra');
                            }
                        });

                    })
                })

            </script>
@endpush
