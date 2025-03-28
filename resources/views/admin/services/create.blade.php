@extends('layouts.main')

@section('title')
Thêm mới {{$title}}
@endsection

@section('page_title')
Thêm mới {{$title}}
@endsection

@section('content')
<div ng-controller="Service" ng-cloak>
@include('admin.services.form')
</div>
@endsection
@section('script')
@include('admin.services.Service')
<script>
app.controller('Service', function ($scope, $http) {
    $scope.form = new Service({}, {scope: $scope});
    $scope.type = @json($type);
    if ($scope.type == @json(\App\Model\Admin\ServiceType::TRAI_NGHIEM)) {
        $scope.all_service_types = @json(\App\Model\Admin\ServiceType::getForSelect(1));
    } else if ($scope.type == @json(\App\Model\Admin\ServiceType::UU_DAI)) {
        $scope.all_service_types = @json(\App\Model\Admin\ServiceType::getForSelect(2));
    } else {
        $scope.all_service_types = @json(\App\Model\Admin\ServiceType::getForSelect(3));
    }

    $scope.loading = {}

    $scope.submit = function(publish = 0) {
        $scope.loading.submit = true;
        let data = $scope.form.submit_data;
        data.append('type', $scope.type);
        $.ajax({
            type: 'POST',
            url: "{{route('services.store')}}",
            headers: {
            'X-CSRF-TOKEN': CSRF_TOKEN
            },
            data: data,
            processData: false,
            contentType: false,
            success: function(response) {
            if (response.success) {
                toastr.success(response.message);
                window.location.href = "{{ route('services.index') }}?type=" + $scope.type;
            } else {
                toastr.warning(response.message);
                $scope.errors = response.errors;
            }
            },
            error: function(e) {
            toastr.error('Đã có lỗi xảy ra');
            },
            complete: function() {
            $scope.loading.submit = false;
            $scope.$applyAsync();
            }
        });
    }

    @include('admin.services.formJs');
});
</script>
@endsection
