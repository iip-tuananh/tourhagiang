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
    <div class="page" ng-controller="spaPage">
        @include('site.partials.header')

        <div class="page-main">
            @if(@$data)
                <section class="section-hero section section-overlay text-white" style="background-image: url('{{ @$data->image->path ?? '' }}')">
                    <div class="container text-center">
                        <h2 class="section-title mb-0">{{ $data->title }}</h2>
                    </div>
                </section>
            @endif
            @if(@$data['blocks'][0])
                <?php
                        $block1 = $data['blocks'][0];
                ?>

                    <section class="cp-section-1 section">
                        <div class="container">
                            <div class="section-content text-lg-end bg-primary-1">
                                <h2 class="section-title fs-30px mb-4">{{ $block1->title }}</h2>
                                <hr class="divider-style-1 my-4 me-lg-0 ms-0 ms-lg-auto">
                                <p class="section-text text-gray">
                                    {!! $block1->body !!}
                                </p>
                            </div>
                            <div class="section-img">
                                @foreach($block1->galleries as $gallery)
                                    <img class="img-fluid w-100" src="{{ @$gallery->image->path ?? '' }}" alt="">
                                @endforeach
                            </div>
                        </div>
                    </section>
            @endif

           @if(@$data['blocks'][1])
              <?php
                 $block2 = $data['blocks'][1];
              ?>

                    <section class="cp-section-2 section">
                        <div class="container">
                            <div class="row row-content">
                                <div class="col-lg-auto col-title">
                                    <h2 class="section-title fs-30px mb-4">{{ $block2->title }}</h2>
                                    <hr class="divider-style-1 my-4 ms-0">
                                </div>
                                <div class="col-lg order-lg-first">
                                    <p class="section-text text-gray text-lg-end ms-auto">
                                        {!! $block2->body !!}
                                    </p>
                                </div>
                            </div>
                            <div class="row row-imgs align-items-end gy-3">
                                @foreach($block2->galleries as $gallery)
                                    <div class="col-md">
                                        <div class="section-img section-img-1">
                                            <img class="img-fluid w-100" src="{{ @$gallery->image->path ?? '' }}" alt="">
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </section>


                @endif

                @if(@$data['blocks'][2])
                        <?php
                        $block3 = $data['blocks'][2];
                        ?>
                    <section class="cp-section-3 section bg-primary-1">
                        <div class="container text-center">
                            <h2 class="section-title fs-30px mx-auto mb-4">{{ $block3->title }}</h2>
                            <hr class="divider-style-1 my-4">
                            <p class="section-text text-gray mx-auto fw-5 mb-4 pb-1">
                                {!! $block3->body !!}
                            </p>
                            <a class="btn btn-cta btn-outline-primary fs-18px px-md-4" target="_blank" href="#" role="button">Xem thực đơn</a>
                            <div class="swiper-container swiper-pagination-outside mt-5">

                                <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" data-plugin="swiper" data-options="{&quot;spaceBetween&quot;:10,&quot;breakpoints&quot;:{&quot;576&quot;:{&quot;slidesPerView&quot;:2},&quot;768&quot;:{&quot;slidesPerView&quot;:3,&quot;allowTouchMove&quot;:false}}}">
                                    <div class="swiper-wrapper" id="swiper-wrapper-b5100bcb65d8d9eb9" aria-live="polite" style="transform: translate3d(0px, 0px, 0px);">
                                        @foreach($block3->galleries as $gallery)
                                            <div class="swiper-slide swiper-slide-active" role="group" aria-label="1 / 3" style="width: 420px; margin-right: 10px;">
                                                <img class="img-fluid w-100" src="{{ @$gallery->image->path ?? '' }}" alt="">
                                            </div>
                                        @endforeach
                                    </div>
                                    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span></div>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                            </div>
                        </div>
                    </section>


                @endif
        </div>

    </div>

@endsection
@push('scripts')


    <script>


    </script>
@endpush
