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
            <section class="eo-section-hero section-hero section-hero-clear section">
                <div class="container text-center">
                    <h2 class="section-title text-primary mb-0">Ưu đãi<span>đặc biệt</span>
                    </h2>
                    <p class="section-lead text-primary mb-0">Tận hưởng ngay những ưu đãi đặc biệt của {{$config->web_title}}</p>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="dropdown dropdown-nav mb-lg-4">
                        <button id="button_all_mobile" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false" data-bs-offset="0, 0">Tất Cả</button>
                        <div class="dropdown-menu">
                            <div class="nav-responsive">
                                <div class="nav-responsive-inner">
                                    <ul class="nav nav-style-1 justify-content-center" id="offer_category">
                                        <li class="nav-item">
                                            <a class="nav-link" ng-class="{'active': category == 'all'}" aria-current="page"
                                                href="javascript:void(0);" ng-click="getDataTab(2, 'all')">Tất Cả</a>
                                        </li>
                                        @foreach ($service_types as $item)
                                        <li class="nav-item">
                                            <a class="nav-link" ng-class="{'active': category == '{{$item->slug}}'}" href="javascript:void(0);" ng-click="getDataTab(2, '{{$item->slug}}')">{{$item->name}}</a>
                                        </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section section-list-offers" id="offer_content">
                        <article class="card card-offers" ng-repeat="service in listService">
                            <div class="row gx-lg-5 align-items-center">
                                <div class="col-lg-7">
                                    <div class="thumbnail thumbnail-hover">
                                        <div class="thumbnail-inner">
                                            <img class="thumbnail-img"
                                                ng-src="<% service.image.path %>"
                                                alt="<% service.name %>" loading="lazy" />
                                            <a class="card-view-detail collapsed" data-bs-toggle="collapse"
                                                href="#collapse-offers-437" role="button" aria-expanded="false"
                                                aria-controls="collapse-offers-1">
                                                Xem chi tiết
                                                <i class="fa fa-angle-down" style="border: 2px solid #fff; border-radius: 50%; font-size: 14px; padding: 5px"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="card-body text-center text-lg-start">
                                        <h3 class="card-title mb-lg-4 mb-3"><% service.name %></h3>
                                        <p class="card-text paragraph text-gray mb-lg-4 mb-0 mb-lg-3"><% service.description %></p>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="collapse" id="collapse-offers-437">
                                        <div class="card-collapse" ng-bind-html="service.content">
                                        </div>
                                    </div>
                                </div>
                                <!-- for mobile-->
                                <div class="col-12 d-lg-none">
                                    <div class="card-body text-center text-lg-start pt-0">
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    </div>
@endsection
@push('scripts')
<script>
    app.controller('ServicePageController', function($scope, $http, $rootScope, $compile) {
        $scope.listService = @json($listService);
        $scope.service_types = @json($service_types);
        $scope.category = 'all';
        $scope.getDataTab = function (type, slug) {
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
