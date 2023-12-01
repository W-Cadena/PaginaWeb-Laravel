<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/sass/app.scss','resources/js/app.js'])
    <title>@yield('title')</title>
    <style>
        .card {
            animation: slide-in 0.5s ease-in-out;
            transition: box-shadow 0.3s ease-in-out;
            height: 100%;
        }

        .card:hover {
            box-shadow: 0 0 10px rgba(20, 230, 230, 0.3);
        }

        .card img {
            max-width: 100%;
            max-height: 400px;
            object-fit: cover;
        }

        @keyframes slide-in {
            0% {
                transform: translateY(50px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    </style>
</head>
<body>
    @yield('content')
</body>
</html>