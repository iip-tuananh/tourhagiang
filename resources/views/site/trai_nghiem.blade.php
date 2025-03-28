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
@endsection

@section('content')
    <div class="page " ng-controller="ServicePageController" ng-cloak>
        @include('site.partials.header')
        <div class="page-main" id="experiences_category">
            <section class="eo-section-hero section-hero section-hero-clear section">
                <div class="container text-center">
                    <h2 class="section-title text-primary mb-0">Trải nghiệm<span>đặc biệt</span>
                    </h2>
                    <p class="section-lead text-primary mb-0">Gác lại những bận rộn sau lưng để sải bước tự do trên thảo nguyên mênh mông và hít căng lồng ngực bầu không khí trong trẻo của núi rừng.</p>
                </div>
            </section>
            <section class="section" id="section_main_content">
                <div class="container">
                    <div class="dropdown dropdown-nav mb-5 pb-lg-4">
                        <button id="button_all_mobile" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false" data-bs-offset="0, 0">Tất Cả</button>
                        <div class="dropdown-menu">
                            <div class="nav-responsive">
                                <div class="nav-responsive-inner">
                                    <ul class="nav nav-style-1 justify-content-center">
                                        <li class="nav-item">
                                            <a class="nav-link" ng-class="{'active': category == 'all'}" aria-current="page"
                                                href="javascript:void(0);" ng-click="getDataTab(1, 'all')">Tất Cả</a>
                                        </li>
                                        @foreach ($service_types as $item)
                                        <li class="nav-item">
                                            <a class="nav-link" ng-class="{'active': category == '{{$item->slug}}'}" href="javascript:void(0);" ng-click="getDataTab(1, '{{$item->slug}}')">{{$item->name}}</a>
                                        </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="experiences_content">
                        {{-- <h2 class="section-title fs-1 ff-tertiary fw-bold text-primary-3 mb-3 text-center">Có một Tây Bắc
                            rất khác</h2>
                        <p class="section-lead paragraph text-primary-4 mw-890px mx-auto mb-5 pb-4 text-center">Gác lại
                            những bận rộn sau lưng để sải bước tự do trên thảo nguyên mênh mông và hít căng lồng ngực bầu
                            không khí trong trẻo của núi rừng.</p> --}}
                        <div class="row gy-5">
                            <div class="col-md-4 col-sm-6" ng-repeat="service in listService">
                                <article class="card card-exp highlight-popup" ng-click="popupBlog(service)">
                                    <div class="thumbnail thumbnail-hover mb-4">
                                        <div class="thumbnail-inner img">
                                            <img class="thumbnail-img"
                                                data-popup-image="<% service.image.path %>"
                                                ng-src="<% service.image.path %>"
                                                alt="<% service.name %>" loading="lazy" />
                                        </div>
                                    </div>
                                    <div class="card-body text-center text-md-start">
                                        <h3 class="card-title text-body mb-3 title"><% service.name %></h3>
                                        <p class="card-text paragraph"><% service.description %>.</p>
                                        <div class="content d-none" ng-bind-html="service.content">

                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                        {{-- <nav aria-label="Page navigation">
                            <ul class="pagination pagination-circle justify-content-center mt-5 mb-0">
                                <li class="page-item active" aria-current="page"><a class="page-link"
                                        href="javascript:void(0)">1</a></li>
                                <li class="page-item"><a class="page-link"
                                        href="https://avanaretreat.com/vn/trai-nghiem?page=2">2</a></li>
                                <li class="page-item"><a class="page-link"
                                        href="https://avanaretreat.com/vn/trai-nghiem?page=3">3</a></li>
                                <li class="page-item"><a class="page-link"
                                        href="https://avanaretreat.com/vn/trai-nghiem?page=4">4</a></li>
                                <li class="page-item page-item-next page-link">
                                    <a class="page-link" href="https://avanaretreat.com/vn/trai-nghiem?page=2"
                                        rel="next" aria-label="Tiếp &raquo;">
                                        <svg class="iconsvg-arrow-right" aria-hidden="true">
                                            <use xlink:href="/htmlv2/images/sprite.svg#arrow-right"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav> --}}
                    </div>
                </div>
            </section>
        </div>
        <div class="modal fade modal-highlight" id="modal-highlight" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <button class="btn btn-link modal-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                <span>x</span>
                </button>
                <div class="row gx-xl-5 gy-2">
                    <div class="col-xl-auto">
                    <div class="gallery-slider gallery-slider-highlight">
                        <div class="swiper-container gallery-slider-main">
                            <div class="swiper" id="gallery-slider-main">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" ng-repeat="item in service_highlight.galleries">
                                        <img class="img-fluid w-100" ng-src="<% item.image.path %>" alt="<% service_highlight.name %>">
                                    </div>
                                </div>
                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                        </div>
                        <div class="swiper-container gallery-slider-thumbs">
                            <div class="swiper swiper-thumbs" id="gallery-slider-thumb">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" ng-repeat="item in service_highlight.galleries">
                                        <img class="img-fluid w-100" ng-src="<% item.image.path %>" alt="<% service_highlight.name %>">
                                    </div>
                                </div>
                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-xl text-center text-xl-start">
                    <h4 class="text-primary fw-5 mb-4"><% service_highlight.name %></h4>
                    <div class="paragraph text-gray mb-4" ng-bind-html="service_highlight.content">
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        {{-- <script>
            $(document).ready(function(){
                $("body").on("click",".highlight-popup",function(){
                    // var content = $(this).find('.content').html();
                    // var title = $(this).find('.title').html();
                    // var img = $(this).find('.thumbnail-img').attr("data-popup-image");
                    // $("#modal-highlight").find(".img").html('<img class="w-100" src="' + img + '">');
                    // $("#modal-highlight").find(".content").html(content);
                    // $("#modal-highlight").find(".title").text(title);
                    // $('#modal-highlight').modal('show');
                    var news_id = $(this).attr("data-id");
                    var url = 'https://avanaretreat.com/vn/blog/popup/:news_id';
                    url = url.replace(":news_id",news_id);
                    popupBlog(url);
                });
            });
        </script> --}}
    </div>
@endsection
@push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        var swiper = new Swiper("#gallery-slider-thumb", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper("#gallery-slider-main", {
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    </script>
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

            $scope.service_highlight = {};
            $scope.popupBlog = function(service) {
                var modal = $('#modal-highlight');
                $scope.service_highlight = service;
                $scope.$applyAsync();
                modal.modal('show');
            }
        });
    </script>
@endpush
