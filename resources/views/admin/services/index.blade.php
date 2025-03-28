@extends('layouts.main')

@section('css')
@endsection

@section('title')
Quản lý {{$title}}
@endsection

@section('page_title')
Quản lý {{$title}}
@endsection

@section('content')
<div  ng-cloak>
	<div class="row" ng-controller="Services">
		<div class="col-12">
			<div class="card">
				<!-- /.card-header -->
				<div class="card-body">
					<table id="table-list">
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
@section('script')
<script>
    let columns = [
        {data: 'DT_RowIndex', orderable: false, title: "STT"},
        {
            data: 'image', title: "Hình ảnh", orderable: false, className: "text-center",
        },
        {data: 'name',title: 'Tiêu đề'},
        {data: 'service_type', title: 'Danh mục'},
        {data: 'time', title: 'Thời gian'},
        {data: 'price', title: 'Giá ưu đãi', className:'text-right'},
        {data: 'base_price', title: 'Giá dịch vụ', className:'text-right'},
        {
            data: 'status',
            title: "Trạng thái",
            render: function (data) {
                return getStatus(data, @json(App\Model\Admin\Service::STATUSES));
            },
            className: 'text-center'
        },
        {data: 'action', orderable: false, title: "Hành động"}
    ];
    if ({{ $type }} == @json(\App\Model\Admin\ServiceType::TRAI_NGHIEM) || {{ $type }} == @json(\App\Model\Admin\ServiceType::UU_DAI)) {
        columns.splice(4, 1);
        columns.splice(4, 1);
        columns.splice(4, 1);
    }
    let datatable = new DATATABLE('table-list', {
        ajax: {
            url: '{{route('services.searchData')}}',
            data: function (d, context) {
                DATATABLE.mergeSearch(d, context);
                d.type = '{{$type}}';
            }
        },
        columns: columns,
        search_columns: [
            {data: 'name', search_type: "text", placeholder: "Tiêu đề"},
            {
                data: 'status', search_type: "select", placeholder: "Trạng thái",
                column_data: @json(App\Model\Admin\Post::STATUSES)
            },
        ],
        search_by_time: false,
        @if(Auth::user()->type == App\Model\Common\User::SUPER_ADMIN || Auth::user()->type == App\Model\Common\User::QUAN_TRI_VIEN)
        create_link: "{{ route('services.create') }}?type={{$type}}"
        @endif
    }).datatable;

    app.controller('Services', function ($scope, $rootScope, $http) {

    })
</script>
@include('partial.confirm')
@endsection
