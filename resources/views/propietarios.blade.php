@extends('layouts.master')
@section('contenido')
<h1>CRUD PROPIETARIOS</h1>
@endsection
@push('scripts')
<script type="text/javascripts" src="{{asset('js/apis/propietarios.js')}}"></script>
@endpush