<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <base href="/">
    <style>[ng\:cloak],[ng-cloak],.ng-cloak{display: none;}</style>

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

    <title>Elfsight Dashboard</title>

    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body ng-app="app" ng-controller="appController as app" ng-cloak>
    @verbatim
    <header class="header">
        <div class="header-inner">
            <div class="header-title">
                <a class="header-title-logo" href="/#/"><img src="/img/logo.svg"></a>
                <span class="header-title-section" ng-if="section"> > {{ section }}</span>
            </div>
            <menu class="header-nav">
                <menu-item link="/">Home</menu-item>
                <menu-item link="/features/" button-new="true">Features</menu-item>
                <menu-item link="/customs/" button-new="true">Customs</menu-item>
                <menu-item link="/releases/">Releases</menu-item>
                <menu-item link="/apps/">Apps</menu-item>
            </menu>
        </div>
    </header>

    <main class="main" ng-view></main>

    <div class="notifications"></div>
    <div class="loader" ng-show="loaderShow" ng-class="{ 'loader-visible': isLoading }"><div class="loader-inner"></div></div>

    <footer class="footer" ng-show="!isLoading">
        <div class="footer-inner">
            <div class="footer-copyright">
                <p>2019 © Elfsight</p>
                <a href="https://elfsight.com" target="_blank">Elfsight Apps</a>
            </div>
            <ul class="footer-links">
                <li><a href="https://elfsight.com/help" target="_blank">Help Center</a></li>
                <li><a href="https://elfsight.zendesk.com/hc/en-us/requests/new" target="_blank">Elfsight Apps support</a></li>
            </ul>
            <div class="footer-user">
                <div ng-if="!user" class="user-login">
                    <p>Members login:</p>
                    <input class="user-login-input" ng-model="loginEmail" placeholder="E-mail">
                    <input class="user-login-input" ng-model="loginPass" placeholder="Password">
                    <button class="button user-login-button">Login</button>
                </div>
                <div ng-if="user" class="user">
                    <div class="user-avatar"><img src="{{ user.avatar }}"></div>
                    <div class="user-name">{{ user.name }}</div>
                </div>
            </div>
        </div>
    </footer>

    @endverbatim
    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>
