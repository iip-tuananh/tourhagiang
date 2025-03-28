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
            <section class="section-hero section section-overlay text-white" style="background-image: url('https://avanaretreat.com/storage/2023/04/16813783721903 x 894 - 2.jpg')">
                <div class="container text-center">
                    <h2 class="section-title mb-0">{{ $post->category->name }}</h2>
                </div>
            </section>
            <section class="sl-section-1 section pt-5 pb-0">
                <div class="container">
                    <h2 class="section-title fs-30px text-center mx-auto mb-4">Hài hòa với thiên nhiên</h2>
                    <hr class="divider-style-1 my-4" />
                    <p class="section-lead fs-base text-gray text-center mx-auto mb-5">Nhà hàng Green Chili “chiêu đãi&quot; thực khách khung cảnh thiên nhiên sinh động từ ruộng bậc thang, thảm cỏ xanh đến những hồ nước suối, nơi đàn cá Koi và những cô cậu vịt tận hưởng sự bình yên, an nhàn. Tiếng thác nước trong khu rừng phía sau nhà hàng như bản nhạc nhẹ nhàng đưa bạn vào sự thư thái.</p>
                </div>
                <div class="row gx-0">
                    <div class="col-6">
                        <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2024/10/1728269780Restaurant_5 (1).jpg" alt="" />
                    </div>
                    <div class="col-6">
                        <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2024/10/1728269546DSCF3855 (1).jpg" alt="" />
                    </div>
                </div>
            </section>
            <section class="sl-section-2 section">
                <div class="container">
                    <h2 class="section-title fs-30px text-center mx-auto mb-4">Phù hợp với mọi tâm trạng</h2>
                    <hr class="divider-style-1 my-4" />
                    <p class="section-lead fs-base text-gray text-center mx-auto mb-5">Hạnh phúc nhiều khi thật giản đơn, và đó là được thưởng thức những món ăn ngon. Tại nhà hàng Green Chili, chúng tôi chế biến nhiều loại thực phẩm phù hợp với mọi tâm trạng của bạn.</p>
                    <div class="col-lg-8 mx-auto">
                        <div class="row g-2 g-md-3 g-md-4 mb-5">
                            <div class="col-6">
                                <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2024/10/1728270843DSCF3807.jpg" alt="" />
                            </div>
                            <div class="col-6">
                                <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2024/10/1728270930DSCF3846.jpg" alt="" />
                            </div>
                            <div class="col-6">
                                <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2024/10/1728270843DSCF3936.jpg" alt="" />
                            </div>
                            <div class="col-6">
                                <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2024/10/1728269590DSCF3953.jpg" alt="" />
                            </div>
                        </div>
                        <div class="text-center">
                            <a class="btn btn-cta btn-outline-primary fs-18px" target="_blank" href="https://avanaretreat.com/storage/2024/05/Green-Chili-Restaurant-Menu.pdf" role="button">Xem thực đơn</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="sl-section-3 section bg-primary-1">
                <div class="container">
                    <div class="row flex-md-row-reverse gy-3">
                        <div class="col-md-7">
                            <div class="px-lg-5 mb-5">
                                <h2 class="section-title fs-30px text-center mx-auto mb-4">Phở Avana</h2>
                                <hr class="divider-style-1 my-4" />
                                <div class="paragraph text-gray text-center">
                                    <p><span style="font-weight: 400;">Phở được đ&aacute;nh gi&aacute; l&agrave; m&oacute;n ngon nổi tiếng nhất Việt Nam. Người s&agrave;nh phở sẽ t&igrave;m kiếm những qu&aacute;n nhỏ l&acirc;u năm b&ecirc;n lề đường H&agrave; Nội để kh&ocirc;ng chỉ thưởng thức hương vị, m&agrave; c&ograve;n tận hưởng kh&ocirc;ng kh&iacute; phố phường h&ograve;a v&agrave;o m&ugrave;i hương thơm phức.</span></p>
                                    <p><span style="font-weight: 400;">Tại nh&agrave; h&agrave;ng Green Chili, Phở l&agrave; m&oacute;n ăn được y&ecirc;u th&iacute;ch nhất. Nước d&ugrave;ng được ninh trong &iacute;t nhất 8 tiếng với xương b&ograve; hoặc xương lợn, nước mắm, hạt m&ugrave;i, hồi, quế, ti&ecirc;u đen, h&agrave;nh nướng v&agrave; gừng theo c&ocirc;ng thức b&iacute; mật của đầu bếp Avana, tạo n&ecirc;n hương vị đặc biệt.&nbsp;</span></p>
                                    <p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                            <img class="img-fluid w-100" src="https://avanaretreat.com/storage/2023/04/1681290123Rectangle 323.png" alt="Phở Avana" />
                        </div>
                        <div class="col-md-5">
                            <img class="img-fluid w-100 mb-5" src="https://avanaretreat.com/storage/2023/04/1681290108Rectangle 322.png" alt="Phở Avana" />
                            <p class="paragraph fst-italic fs-22px fw-5 text-primary-3 text-center px-lg-5 pt-lg-4">“Một trong những món Phở ngon nhất mà tôi từng nếm thử” là nhận xét mà chúng tôi thường xuyên nhận được từ ​​các vị khách dành cho Phở Avana.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

@endsection
