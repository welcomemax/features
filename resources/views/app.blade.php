<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/img/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png">

    <title>Elfsight Features</title>

    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body ng-app="app">
    <header class="header">
        <div class="header-inner">
            <h1 class="header-title">Elfsight Features</h1>
            <nav class="header-nav">
                <ul>
                    <li><a href="/#/">Home</a></li>
                    <li><a href="/#/features/">Features</a></li>
                    <li><a href="/#/features/new/">New Feature</a></li>
                    <li><a href="/#/releases/">Releases</a></li>
                    <li><a href="https://elfsight.com" target="_blank">Elfsight Apps</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="main" ng-view></main>

    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>
