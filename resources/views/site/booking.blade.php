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
            <section class="bys-section-1 section">
                <div class="container">
                    {{-- <div class="row gx-2 gx-md-5 justify-content-center mb-5">
                        <div class="col-md-auto col-6">
                            <div class="reviews">
                                <div id="TA_cdsratingsonlynarrow995" class="TA_cdsratingsonlynarrow">
                                    <ul id="5jPgBrLPf" class="TA_links dHZfsHhz">
                                        <li id="O7pw8ZPVeo" class="2jIsyEJIB"><a target="_blank"
                                                href="https://www.tripadvisor.com.vn/Hotel_Review-g1652592-d23169139-Reviews-Avana_Retreat-Mai_Chau_Hoa_Binh_Province.html"><img
                                                    style="max-height: 137px;"src="https://www.tripadvisor.com.vn/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
                                                    alt="TripAdvisor" /></a></li>
                                    </ul>
                                </div>
                                <script async
                                    src="https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&amp;uniq=995&amp;locationId=23169139&amp;lang=vi&amp;border=false&amp;shadow=false&amp;display_version=2"
                                    data-loadtrk onload="this.loadtrk=true"></script>
                            </div>
                        </div>
                        <div class="col-md-auto col-6">
                            <div class="reviews">
                                <a href="https://www.google.com/travel/search?q=avana%20retreat&amp;g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4570333%2C4597339%2C4757164%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4920132%2C4924070%2C4965990%2C4985712%2C4990494%2C72248281%2C72253256%2C72256471%2C72262103%2C72271034%2C72271797%2C72272556%2C72276044%2C72280387&amp;hl=vi-VN&amp;gl=vn&amp;ssta=1&amp;ts=CAESABpHCikSJzIlMHgzMTMzZjdkMDRhMWI2NWNkOjB4OGE3MDQxMzYzNTkwZTRhNRIaEhQKBwjnDxAHGBgSBwjnDxAHGBkYATICEAA&amp;qs=CAEyFENnc0lwY25Eck9PbWtMaUtBUkFCOAJCCwml5JA1NkFwihgBQgsJpeSQNTZBcIoYAQ&amp;ap=ugEHcmV2aWV3cw&amp;ictx=1&amp;sa=X&amp;ved=0CAAQ5JsGahcKEwiAz5zRl7X_AhUAAAAAHQAAAAAQCQ"
                                    target="_blank">
                                    <img style="max-width: 100%"
                                        src="https://avanaretreat.com/storage/2025/02/1739863336Đánh giá google vn.jpg"
                                        alt="google review">
                                </a>
                            </div>
                        </div>
                    </div> --}}
                    <div class="hbe-bws">
                        <section id="hbe-bws-page">
                            <div id="hbe-bws-wrapper"> </div>
                        </section>
                    </div>
                    <link type="text/css" rel="stylesheet" href="//book.securebookings.net/css/app-v2.css" />
                    <script type="text/javascript" src="//book.securebookings.net/js/v2/widget.all.js"></script>
                    <script type="text/javascript" src="//book.securebookings.net/widgetCustomize?lang=en&widgetType=Widget&id=59f3012e-ed3b-1742547031-4d5f-9b15-93cdb5302521&ajax=true"></script>
                </div>
            </section>
        </div>
    </div>
@endsection
@push('scripts')
<script>
    angular.element(document).ready(function () {
        var el = document.getElementById("hbe-bws-wrapper");

        if (el && !angular.element(el).scope()) {
            angular.bootstrap(el, ["widgetApp"]);
        } else {
            console.warn("AngularJS đã được khởi tạo, bỏ qua bootstrap.");
        }
    });
</script>
@endpush
