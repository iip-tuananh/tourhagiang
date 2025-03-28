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
            <section class="pkl-section-hero section-hero section-hero-clear section">
                <div class="container text-center">
                    <h2 class="section-title text-primary mb-4"><span class="text-nowrap">Ưu đãi</span><span
                            class="section-title-text">Gói nghỉ dưỡng</span></h2>
                    <p class="section-lead text-primary mb-0 fw-5">Thảnh thơi nghỉ dưỡng với ưu đãi đặc biệt của {{$config->web_title}}</p>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="dropdown dropdown-nav mb-lg-4">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                            data-bs-offset="0, 0">Tất Cả</button>
                        <div class="dropdown-menu">
                            <div class="nav-responsive">
                                <div class="nav-responsive-inner">
                                    <ul class="nav nav-style-1 justify-content-center">
                                        <li class="nav-item">
                                            <a class="nav-link" ng-class="{'active': category == 'all'}" aria-current="page"
                                                href="javascript:void(0);" ng-click="getDataTab(3, 'all')">Tất Cả</a>
                                        </li>
                                        @foreach ($service_types as $item)
                                        <li class="nav-item">
                                            <a class="nav-link" ng-class="{'active': category == '{{$item->slug}}'}" href="javascript:void(0);" ng-click="getDataTab(3, '{{$item->slug}}')">{{$item->name}}</a>
                                        </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section section-list-pkg">
                        <article class="card card-package" ng-repeat="service in listService">
                            <div class="row gx-lg-5">
                                <div class="col-lg-7">
                                    <a class="thumbnail thumbnail-hover"
                                        href="/goi-nghi-duong/<% service.slug %>.html"
                                        role="button">
                                        <div class="thumbnail-inner">
                                            <img class="thumbnail-img"
                                                ng-src="<% service.image.path %>"
                                                alt="<% service.name %>" loading="lazy" />
                                            <span class="card-badge">OFF
                                                <span class="card-badge-num"><% ((service.base_price - service.price) / service.base_price * 100) | number:0 %>%</span>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-lg-5 pt-xl-4">
                                    <div class="card-body text-center text-lg-start text-gray">
                                        <h3 class="card-title mb-lg-4 mb-3">
                                            <a href="/goi-nghi-duong/<% service.slug %>.html"
                                                role="button"><% service.name %></a>
                                        </h3>
                                        <p class="paragraph mb-0 mb-lg-3"><% service.description %></p>
                                        <p class="paragraph text-decoration-line-through mb-0"><% service.base_price | number %> VNĐ/ Khách</p>
                                        <p class="fw-5 text-primary mb-1">Chỉ từ
                                            <span class="fs-30px"><% service.price | number %></span>
                                            VNĐ/ Khách
                                        </p>
                                        <div class="row gx-3 gy-2 justify-content-center justify-content-lg-start">
                                            <div class="col-sm-auto">
                                                <a class="btn btn-cta btn-outline-primary fs-18px text-uppercase px-4 w-100"
                                                    href="/goi-nghi-duong/<% service.slug %>.html"
                                                    role="button">Chi tiết</a>
                                            </div>
                                            {{-- <div class="col-sm-auto">
                                                <a class="btn btn-cta btn-primary fs-18px text-uppercase px-4 w-100 package_contact_button"
                                                    data-title="<% service.name %>" data-bs-toggle="modal"
                                                    data-bs-target="#modal-pkg-booking" href="#" role="button">Gửi
                                                    yêu cầu</a>
                                            </div> --}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
        {{-- <div class="modal fade" id="modal-pkg-booking" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <button class="btn btn-link modal-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                        <span>x</span>
                    </button>
                    <div class="text-center mb-5">
                        <h4 class="text-primary-5 fs-36px mb-3 fw-5">Bắt đầu kỳ nghỉ của bạn tại Avana Retreat</h4>
                        <p class="text-primary fs-lg fw-5 mb-0 package_modal_title"></p>
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
                            <input name="reservation" type="hidden" class="package_title_field" value="">
                            <input name="link" type="hidden" value="https://avanaretreat.com/vn/goi-nghi-duong">
                            <button class="btn rounded-pill btn-primary fs-18px px-4 text-uppercase" type="submit">Gửi
                                thông tin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <script>
            $(".package_contact_button").bind("click", function() {
                var title = $(this).attr("data-title");
                $(".package_modal_title").text(title);
                $(".package_title_field").val(title);
            })
        </script> --}}
    </div>
@endsection
@push('scripts')
    <script>
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
        });
    </script>
@endpush
