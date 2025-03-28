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
    <div class="page ">
        @include('site.partials.header')

        <div class="page-main">
            <section class="section-hero section section-overlay text-white" style="background-image: url('{{ @$post->image->path ?? '' }}')">
                <div class="container text-center">
                    <h2 class="section-title mb-0">{{ @$post->category->name ?? '' }}</h2>
                </div>
            </section>

            @if(@$post['blocks'][0])
                <?php
                    $block1 = $post['blocks'][0];
                ?>
                <section class="sl-section-1 section pt-5 pb-0">
                    <div class="container">
                        <h2 class="section-title fs-30px text-center mx-auto mb-4">{{ $block1->title }}</h2>
                        <hr class="divider-style-1 my-4" />
                        <p class="section-lead fs-base text-gray text-center mx-auto mb-5">
                            {!! $block1->body !!}
                        </p>
                    </div>
                    <div class="row gx-0">
                        @foreach($block1->galleries as $gallery)
                            <div class="col-6">
                                <img class="img-fluid w-100" src="{{ @$gallery->image->path ?? '' }}" alt="" />
                            </div>
                        @endforeach
                    </div>
                </section>
            @endif

            @if(@$post['blocks'][1])
                    <?php
                    $block2 = $post['blocks'][1];
                    ?>
                <section class="sl-section-2 section">
                    <div class="container">
                        <h2 class="section-title fs-30px text-center mx-auto mb-4">{{ $block2->title }}</h2>
                        <hr class="divider-style-1 my-4" />
                        <p class="section-lead fs-base text-gray text-center mx-auto mb-5">
                            {!! $block2->body !!}
                        </p>
                        <div class="col-lg-8 mx-auto">
                            <div class="row g-2 g-md-3 g-md-4 mb-5">
                                @foreach($block2->galleries as $gallery)
                                    <div class="col-6">
                                        <img class="img-fluid w-100" src="{{ @$gallery->image->path ?? '' }}" alt="" />
                                    </div>
                                @endforeach
                            </div>
                            <div class="text-center">
                                <a class="btn btn-cta btn-outline-primary fs-18px" target="_blank" href="#" role="button">Xem thực đơn</a>
                            </div>
                        </div>
                    </div>
                </section>
            @endif

            @if(@$post['blocks'][2])
                    <?php
                    $block3 = $post['blocks'][2];
                    ?>
                <section class="sl-section-3 section bg-primary-1">
                    <div class="container">
                        <div class="row align-items-center gy-3">
                            <div class="col-md-7">
                                <h2 class="section-title fs-30px text-center mb-4">{{ $block3->title }}</h2>
                                <hr class="divider-style-1 my-4">
                                <div class="text-gray text-center mb-4">
                                    <div class="paragraph text-gray text-center">
                                        {!! $block3->body !!}
                                    </div>
                                </div>
                                <img class="img-fluid w-100" src="{{ @$block3->galleries[0]->image->path ?? '' }}" alt="{{ $block3->title }}">
                            </div>
                            <div class="col-md-5">
                                @if(@$block3->galleries[1])
                                    <img class="img-fluid w-100" src="{{ @$block3->galleries[1]->image->path ?? '' }}" alt="{{ $block3->title }}" />
                                    <p class="fst-italic fs-22px fw-5 text-primary-3 text-center pt-4">
                                        {{ $block3->title }}
                                    </p>
                                @endif
                            </div>
                        </div>
                    </div>

                </section>

            @endif
        </div>

    </div>

@endsection
