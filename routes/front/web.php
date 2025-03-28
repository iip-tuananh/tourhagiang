<?php

Route::group(['namespace' => 'Front'], function () {
    Route::get('/','FrontController@homePage')->name('front.home-page');
    Route::get('/hang-phong.html','FrontController@roomCategory')->name('front.room-category');
    Route::get('/am-thuc/{slug}.html','FrontController@cuisine')->name('front.cuisine');
    Route::get('/spa.html','FrontController@spa')->name('front.spa');
    Route::get('/cloud-pool.html','FrontController@cloudPool')->name('front.cloudPool');




    Route::get('/tour-detail/{slug}','FrontController@tourDetail')->name('front.tour-detail');
    Route::get('/search-tour','FrontController@searchTour')->name('front.search-tour');
    Route::get('/uu-dai.html','FrontController@promotionService')->name('front.promotionService');
    Route::get('/trai-nghiem.html','FrontController@experienceService')->name('front.experienceService');
    Route::get('/goi-nghi-duong.html','FrontController@resortService')->name('front.resortService');
    Route::get('/goi-nghi-duong/{slug}.html','FrontController@detailResortService')->name('front.detailResortService');
    Route::get('/dat-phong.html','FrontController@bookingRoom')->name('front.bookingRoom');

    Route::get('/getServiceTab','FrontController@getServiceTab')->name('front.getServiceTab');

    Route::get('/news/{slug?}','FrontController@indexBlog')->name('front.index-blog');
    Route::get('/news-detail/{slug}','FrontController@detailBlog')->name('front.detail-blog');

    Route::get('/get-info-tour/{id}','FrontController@getInfoTour')->name('front.getInfoTour');
    Route::get('/booking-tour/{slug?}','FrontController@bookingTour')->name('front.booking-tour');
    Route::get('/about-us','FrontController@aboutUs')->name('front.about-us');

    Route::post('/booking-tour','FrontController@submitBooking')->name('front.submit-booking');

    // Route::get('/load-product-home-page','FrontController@loadProductHomePage')->name('front.load-product-home-page');
    Route::get('/danh-muc/{categorySlug}.html','FrontController@showProductCategory')->name('front.show-product-category');
    Route::get('/load-more/product','FrontController@loadMoreProduct')->name('front.product-load-more');
    Route::get('/get-product-quick-view','FrontController@getProductQuickView')->name('front.get-product-quick-view');
    Route::get('/tao-thiet-ke.html','FrontController@productCustom')->name('front.product-custom');

    // giỏ hàng
    Route::post('/{productId}/add-product-to-cart','CartController@addItem')->name('cart.add.item');
    Route::get('/remove-product-to-cart','CartController@removeItem')->name('cart.remove.item');
    Route::get('/gio-hang.html','CartController@index')->name('cart.index');
    Route::post('/update-cart','CartController@updateItem')->name('cart.update.item');
    Route::get('/thanh-toan.html','CartController@checkout')->name('cart.checkout');
    Route::post('/checkout','CartController@checkoutSubmit')->name('cart.submit.order');
    Route::get('/dat-hang-thanh-cong.html','CartController@checkoutSuccess')->name('cart.checkout.success');
    Route::post('/apply-voucher','CartController@applyVoucher')->name('cart.apply.voucher');

    // đặt hàng thiết kế
    Route::post('/design-order','FrontController@designOrder')->name('front.design_order');

    // Liên hệ
    Route::get('/lien-he.html','FrontController@contactUs')->name('front.contact-us');
    Route::post('/lien-he','FrontController@postContact')->name('front.post-contact');

    // Blogs
//    Route::get('/tin-tuc.html','FrontController@indexBlog')->name('front.index-blog');
    Route::get('/tin-tuc/{slug}.html','FrontController@listBlog')->name('front.list-blog');
//    Route::get('/chi-tiet-tin-tuc/{slug}.html','FrontController@detailBlog')->name('front.detail-blog');

    // Tìm kiếm
    Route::post('/auto-search-complete','FrontController@autoSearchComplete')->name('front.auto-search-complete');
    Route::get('/search-product','FrontController@searchProduct')->name('front.search-product');

    // reset data
    Route::get('/reset-data','FrontController@resetData')->name('front.resetData');

    // laster buy products
    Route::get('/laster-buy-products','FrontController@lasterBuyProducts')->name('front.laster-buy-products');

    // review
    Route::post('/review/submit','FrontController@submitReview')->name('front.submit-review');

});



