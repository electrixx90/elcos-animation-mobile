import React from "react";
import WebView from "react-native-webview";
import SVGatorPlayer from "@svgator/react-native";

function getHtml() {
    return SVGatorPlayer.wrapPage("<svg id=\"enFfLObwSGq1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" viewBox=\"0 0 1920 1080\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\"><g transform=\"matrix(.8 0 0 0.8-163.272188 236.782012)\"><rect width=\"187.551817\" height=\"235.153447\" rx=\"0\" ry=\"0\" transform=\"translate(1681.75 748.86)\" fill=\"#fff\" stroke-width=\"0\"\/><g transform=\"matrix(.472481 0 0 0.472481 1635.890551 784.509162)\" opacity=\"0\"><g><path d=\"M499.5,341.25h-26c-5.305,0-9.837,3.327-11.648,8h-9.452v-65.508c5.193-1.519,9-6.315,9-11.992v-17c0-5.677-3.807-10.473-9-11.992v-13.016c5.193-1.519,9-6.315,9-11.992v-17c0-5.677-3.807-10.473-9-11.992v-15.758c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v15.25h-29v-36c0-6.893-5.607-12.5-12.5-12.5h-57.186c.829-4.713,1.286-9.553,1.286-14.5s-.457-9.787-1.286-14.5h81.186c9.649,0,17.5,7.851,17.5,17.5v9.75c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-9.75c0-17.921-14.58-32.5-32.5-32.5h-85.298c-11.947-31.524-42.442-54-78.101-54s-66.154,22.476-78.101,54h-25.4c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h21.286c-.829,4.713-1.286,9.553-1.286,14.5s.457,9.787,1.286,14.5h-58.186c-6.893,0-12.5,5.607-12.5,12.5v36h-29v-60c0-9.649,7.851-17.5,17.5-17.5h25.9c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-25.899c-17.92,0-32.5,14.579-32.5,32.5v60.508c-5.193,1.519-9,6.315-9,11.992v17c0,5.677,3.807,10.473,9,11.992v13.016c-5.193,1.519-9,6.315-9,11.992v17c0,5.677,3.807,10.473,9,11.992v65.508h-9.452c-1.812-4.673-6.344-8-11.648-8h-26c-6.893,0-12.5,5.607-12.5,12.5v70c0,6.893,5.607,12.5,12.5,12.5h26c5.305,0,9.837-3.327,11.648-8h77.851v24.5c0,9.649,7.851,17.5,17.5,17.5h16c3.718,0,7.162-1.174,10-3.159c2.838,1.985,6.282,3.159,10,3.159h16c9.649,0,17.5-7.851,17.5-17.5v-8.5h83v8.5c0,9.649,7.851,17.5,17.5,17.5h16c3.718,0,7.162-1.174,10-3.159c2.838,1.985,6.282,3.159,10,3.159h16c9.649,0,17.5-7.851,17.5-17.5v-24.5h76.852c1.812,4.673,6.344,8,11.648,8h26c6.893,0,12.5-5.607,12.5-12.5v-70c0-6.893-5.607-12.5-12.5-12.5ZM36,421.25h-21v-65h21Zm363.399-152v-12h47v12Zm9-27v-12h29v12Zm38-27h-47v-12h47Zm-38,134v-65h29v65Zm-15-194.5v34.008c-5.193,1.518-9,6.315-9,11.992v17c0,5.677,3.807,10.474,9,11.992v13.016c-5.193,1.518-9,6.315-9,11.992v17c0,5.677,3.807,10.474,9,11.992v65.508h-8.399v-24.5c0-9.649-7.851-17.5-17.5-17.5h-16c-3.718,0-7.162,1.174-10,3.159-2.838-1.985-6.282-3.159-10-3.159h-16c-9.649,0-17.5,7.851-17.5,17.5v8.5h-12v-55.5h14v5c0,6.893,5.607,12.5,12.5,12.5h15c6.893,0,12.5-5.607,12.5-12.5v-50c0-6.893-5.607-12.5-12.5-12.5h-15c-6.893,0-12.5,5.607-12.5,12.5v5h-14v-5c0-4.76-2.675-8.904-6.6-11.015v-16.204c25.418-7.262,45.915-26.278,55.201-50.781Zm-136.899,54c2.665,0,5.298-.139,7.9-.384v11.884h-15.8v-11.884c2.602.245,5.235.384,7.9.384Zm43.5,54h-14v-10h14Zm-73,0h-11v-10h11Zm15-27.5h29v98h-29Zm73,45v-45h10v45ZM256.5,56.75c37.771,0,68.5,30.729,68.5,68.5s-30.729,68.5-68.5,68.5-68.5-30.729-68.5-68.5s30.729-68.5,68.5-68.5Zm-78.101,98c9.286,24.503,29.783,43.52,55.201,50.781v16.204c-3.925,2.111-6.6,6.255-6.6,11.015v5h-13.5c-6.893,0-12.5,5.607-12.5,12.5v15c0,6.893,5.607,12.5,12.5,12.5h13.5v55.5h-12v-8.5c0-9.649-7.851-17.5-17.5-17.5h-16c-3.718,0-7.162,1.174-10,3.159-2.838-1.985-6.282-3.159-10-3.159h-16c-9.649,0-17.5,7.851-17.5,17.5v24.5h-9.399v-65.508c5.193-1.518,9-6.315,9-11.992v-17c0-5.677-3.807-10.474-9-11.992v-13.016c5.193-1.518,9-6.315,9-11.992v-17c0-5.677-3.807-10.474-9-11.992v-34.008Zm-65.798,60.5h-47v-12h47Zm-9,15v12h-29v-12Zm-38,39v-12h47v12Zm9,15h29v65h-29ZM51,413.25v-49h77v49Zm110.5,42h-16c-1.378,0-2.5-1.121-2.5-2.5v-128c0-1.379,1.122-2.5,2.5-2.5h16c1.378,0,2.5,1.121,2.5,2.5v128c0,1.379-1.122,2.5-2.5,2.5Zm53.5-26v-30.25c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v53.75c0,1.379-1.122,2.5-2.5,2.5h-16c-1.378,0-2.5-1.121-2.5-2.5v-128c0-1.379,1.122-2.5,2.5-2.5h16c1.378,0,2.5,1.121,2.5,2.5v39.25c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-15.75h83v81Zm116.5,26h-16c-1.378,0-2.5-1.121-2.5-2.5v-128c0-1.379,1.122-2.5,2.5-2.5h16c1.378,0,2.5,1.121,2.5,2.5v128c0,1.379-1.122,2.5-2.5,2.5Zm38.5-2.5c0,1.379-1.122,2.5-2.5,2.5h-16c-1.378,0-2.5-1.121-2.5-2.5v-128c0-1.379,1.122-2.5,2.5-2.5h16c1.378,0,2.5,1.121,2.5,2.5Zm15-88.5h76v49h-76Zm112,57h-21v-65h21Z\"\/><path d=\"M227.862,164.495c2.929-2.93,2.929-7.678,0-10.607-15.791-15.79-15.791-41.484,0-57.275C233.845,90.63,241.251,86.919,249,85.47v18.571c-8.729,3.096-15,11.433-15,21.21s6.271,18.114,15,21.21v.688c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-.688c8.729-3.096,15-11.433,15-21.21s-6.271-18.114-15-21.21v-18.572c7.749,1.449,15.155,5.16,21.138,11.143c15.791,15.79,15.791,41.484,0,57.275-2.929,2.93-2.929,7.678,0,10.607c1.464,1.464,3.384,2.196,5.303,2.196s3.839-.732,5.303-2.196c21.64-21.641,21.639-56.851,0-78.49-8.911-8.91-20.125-14.142-31.744-15.714v-.724c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v.724c-11.619,1.572-22.833,6.804-31.744,15.715-21.64,21.641-21.639,56.851,0,78.49c2.929,2.928,7.678,2.928,10.606,0ZM256.5,132.75c-4.136,0-7.5-3.364-7.5-7.5s3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5-3.364,7.5-7.5,7.5Z\"\/><path d=\"M247.828,164.798c-1.132-.246-2.267-.544-3.374-.887-3.956-1.228-8.158.988-9.383,4.945s.989,8.158,4.946,9.383c1.519.471,3.076.88,4.629,1.217.536.116,1.071.173,1.598.173c3.453,0,6.56-2.399,7.322-5.911.879-4.048-1.691-8.042-5.738-8.92Z\"\/><path d=\"M268.556,163.907c-1.106.343-2.24.641-3.373.887-4.048.878-6.618,4.871-5.739,8.92.762,3.512,3.869,5.911,7.322,5.911.527,0,1.062-.057,1.598-.173c1.554-.337,3.112-.746,4.63-1.217c3.957-1.226,6.17-5.427,4.945-9.384s-5.43-6.165-9.383-4.944Z\"\/><\/g><\/g><g id=\"enFfLObwSGq10\" transform=\"matrix(.287908 0.084316-.084316 0.287908 1559.954287 803.334273)\" opacity=\"0\"><path d=\"M1538.839048,956.326996l7.205956,6.829592l11.702961,4.865427l54.406043-47.250305l11.655028,1.497205l13.760111-2.572647l15.204258-14.090446l1.245407-13.120894-21.854787,14.815205-12.931496-5.239291-6.067206-16.472843l20.105425-15.922524-8.868296-1.967314-13.908208,1.758378-17.090305,15.062567-.545347,14.688595l3.791598,9.44584-54.038004,41.170125-3.773138,6.50333Z\" transform=\"matrix(2.955014 0 0 3.573817-4523.129483-2973.329636)\" fill=\"#bcbcbc\" stroke-width=\"3.84\"\/><path d=\"M1585.317082,874.039403l44.250566-42.181913l47.970803,16.954609l12.7932,47.727328-41.64369,38.699246-47.030191-13.637344-16.340688-47.561926Z\" transform=\"translate(-1311.260763-700.62329)\" fill=\"#f2f2f2\" stroke-width=\"3.84\"\/><ellipse rx=\"3.176291\" ry=\"3.176291\" transform=\"matrix(3 0 0 3 327.291388 183.281172)\" fill=\"#fff\" stroke-width=\"0\"\/><path d=\"M328,208c11.44972.00006,21.305048-8.087855,23.538915-19.317545s-3.775884-22.473566-14.353962-26.855387-22.778376-.681204-29.139749,8.838724-5.11211,22.207765,2.983796,30.304208c4.49078,4.516291,10.602038,7.047795,16.971,7.03Zm-5.656-29.657c3.123999-3.123056,8.188001-3.123056,11.312,0c2.288192,2.287905,2.972821,5.728926,1.734632,8.718445s-4.155343,4.938763-7.391132,4.938763-6.152943-1.949245-7.391132-4.938763-.55356-6.43054,1.734632-8.718445Z\"\/><path d=\"M66.912,429.088h16v16h-16Z\" transform=\"matrix(.707-.707 0.707 0.707-287.127 180.991)\"\/><path d=\"M72.936,347.064h168v16h-168Z\" transform=\"matrix(.707-.707 0.707 0.707-205.097 214.951)\"\/><path d=\"M491.13,157.205L455.962,143.54L447.1,122.16l15.224-34.6c1.329037-3.019838.667837-6.545841-1.665-8.879L433.316,51.338c-2.332978-2.332404-5.858434-2.993576-8.878-1.665L389.84,64.9l-21.38-8.858L354.8,20.87c-1.196088-3.07513-4.157447-5.100466-7.457-5.1h-38.681c-3.299553-.000466-6.260912,2.02487-7.457,5.1L287.541,56.038L266.16,64.9l-34.6-15.223c-3.019838-1.329037-6.545841-.667837-8.879,1.665L195.339,78.684c-2.332748,2.332749-2.994322,5.858233-1.666,8.878l15.224,34.6-8.859,21.38-35.168,13.663c-3.07513,1.196088-5.100466,4.157447-5.1,7.457v38.676c-.000466,3.299553,2.02487,6.260912,5.1,7.457l5.579,2.168c-.039.28-.09.557-.127.838-2.671981,20.784418.956964,41.892357,10.417,60.591L27.05,417.674c-6.885873,6.400746-10.872618,15.326604-11.044057,24.72636s3.487169,18.465055,10.135057,25.11264l18.225,18.224c6.632848,6.697201,15.708713,10.401861,25.133512,10.259201s18.384378-4.120316,24.811488-11.015201l104.038-111.4-11.693-10.92L82.61,474.069c-3.513745,3.767006-8.428647,5.913566-13.58,5.931-5.013021-.016456-9.814554-2.02195-13.35-5.576L37.454,456.2c-3.503714-3.484751-5.467643-8.22641-5.454-13.168.008187-5.177032,2.163458-10.118731,5.952-13.647L196.2,281.854c2.746075-2.560422,3.342105-6.686043,1.433-9.919-20.847659-35.129453-14.673539-80.001421,14.887-108.195c21.071261-20.013515,50.613329-28.429126,79.068-22.524l-52.072,52.072c-2.14292,2.142638-2.891262,5.312154-1.933,8.187l16.97,50.912c.796259,2.389056,2.670944,4.263741,5.06,5.06l50.911,16.971c2.874846.958262,6.044362.20992,8.187-1.933L361.4,229.8c-.819791,28.351201-15.25547,54.568883-38.774718,70.42157s-53.237895,19.396362-79.825282,9.51843c-3.024466-1.121305-6.426474-.316542-8.628,2.041L202.3,345.905l11.693,10.92l28.34-30.346c16.788651,5.236334,34.630797,6.130866,51.859,2.6l7.013,18.048c1.196088,3.07513,4.157447,5.100466,7.457,5.1h38.676c3.299553.000466,6.260912-2.02487,7.457-5.1l13.664-35.168L389.84,303.1l34.6,15.223c3.019838,1.329037,6.545841.667837,8.879-1.665l27.345-27.346c2.332748-2.332749,2.994322-5.858233,1.666-8.878L447.1,245.84l8.859-21.38L491.13,210.8c3.07513-1.196088,5.100466-4.157447,5.1-7.457v-38.681c.000466-3.299553-2.02487-6.260912-5.1-7.457ZM175.768,191.432v-21.295l14.815-5.757c-6.279344,8.215338-11.27463,17.336665-14.815,27.052Zm143.079-54.847l42.426,14.142l14.143,42.425-38.263,38.263-42.426-14.142-14.143-42.425Zm-7.953,121.09l-42.427-14.142-14.142-42.427l13.61-13.61l12.877,38.632c.796259,2.389056,2.670944,4.263741,5.06,5.06L324.5,244.065Zm169.338-59.812l-33.25,12.92c-2.035503.791851-3.658753,2.381502-4.493,4.4l-11.475,27.694c-.835454,2.01625-.810889,4.286301.068,6.284l14.4,32.716-19.606,19.607-32.716-14.4c-1.997849-.878192-4.267615-.902754-6.284-.068l-27.694,11.475c-2.016604.835368-3.6043,2.458467-4.395,4.493l-12.919,33.25h-27.732l-4.491-11.558c21.512821-7.921014,39.776433-22.778538,51.91-42.229c19.840543-6.824378,37.180036-19.439225,49.78-36.216c27.398283-36.705813,27.565567-87.012787.412-123.9l-12.876,9.5c22.967304,31.209963,22.825205,73.768103-.35,104.824-7.157444,9.527942-16.157439,17.519625-26.465,23.5c4.901738-14.67608,6.476124-30.259045,4.609-45.619l13.56-13.56c2.143306-2.142835,2.891676-5.312857,1.933-8.188l-16.97-50.911c-.796259-2.389056-2.670944-4.263741-5.06-5.06l-50.912-16.97c-2.874363-.958101-6.043343-.210181-8.186,1.932l-6.341,6.341c-13.219423-4.109511-27.123297-5.553094-40.905-4.247c32.679175-34.932082,87.283784-37.344323,122.916-5.43l10.677-11.917c-22.885632-20.49081-53.65873-29.816936-84.069256-25.478114s-57.347655,21.898756-73.589744,47.972114c-7.059456,2.393633-13.841361,5.538675-20.229,9.381l5.5-13.268c.835454-2.01625.810889-4.286301-.068-6.284l-14.4-32.716l19.606-19.607l32.716,14.4c1.997699.878889,4.26775.903454,6.284.068l27.694-11.475c2.016604-.835368,3.6043-2.458467,4.395-4.493l12.919-33.25h27.728l12.92,33.25c.790469,2.03434,2.377775,3.657408,4.394,4.493l27.694,11.475c2.01625.835454,4.286301.810889,6.284-.068l32.717-14.4l19.605,19.607-14.4,32.715c-.879174,1.997986-.903739,4.268459-.068,6.285l11.475,27.694c.834247,2.018498,2.457497,3.608149,4.493,4.4l33.25,12.92Z\"\/><\/g><g id=\"enFfLObwSGq18\" transform=\"translate(1720.093028 843.931327)\" opacity=\"0\"><path d=\"M47.925,5.022L36.991,0.173c-1.007-.449-2.191.008-2.639,1.018s.008,2.191,1.018,2.639l6.141,2.724C23.888,13.111,10.265,27.986,5.353,46.448c-.284,1.067.351,2.163,1.418,2.447.172.046.345.068.516.068.884,0,1.693-.592,1.931-1.486c4.631-17.404,17.565-31.384,34.258-37.382l-3.505,7.852c-1.046,2.344,2.595,3.998,3.652,1.631L48.941,7.666c.427-.956-.036-2.211-1.016-2.644Z\" stroke=\"#000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\/><path d=\"M121.815,34.116c-1.012-.442-2.191.019-2.634,1.031l-2.686,6.142C109.976,23.564,95.212,9.863,76.891,4.919c-1.061-.285-2.164.343-2.452,1.409s.344,2.165,1.41,2.452c17.282,4.664,31.165,17.698,37.118,34.52l-7.771-3.519c-1.007-.454-2.191-.009-2.647.997-.456,1.007-.009,2.191.997,2.647l11.828,5.355c1.001.451,2.219-.017,2.658-1.021l4.815-11.012c.442-1.01-.02-2.189-1.032-2.631Z\" stroke=\"#000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\/><path d=\"M116.718,74.476c-1.066-.285-2.163.351-2.447,1.419-4.648,17.496-17.685,31.535-34.501,37.487-.046.016-.091-.029-.074-.075l2.663-7.203c.355-.96.039-2.108-.861-2.596-1.096-.593-2.42-.066-2.837,1.061l-4.149,11.223c0,0,.156,2.255,1.222,2.645l12.134,4.442c2.427.887,3.793-2.87,1.375-3.756l-6.621-2.424c-.049-.018-.049-.085-.001-.104c17.316-6.681,30.667-21.428,35.514-39.673.286-1.067-.349-2.163-1.417-2.446-1.066-.285,1.068.283,0,0Z\" stroke=\"#000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\/><path d=\"M48.783,117.071c.285-1.066-.351-2.163-1.419-2.447-17.496-4.648-31.535-17.685-37.487-34.501-.016-.046.029-.091.075-.074l7.203,2.663c.96.355,2.108.039,2.596-.861.593-1.096.066-2.42-1.061-2.837L7.467,74.865c-1.064-.394-2.255.156-2.645,1.222L0.38,88.221c-.887,2.427,2.87,3.793,3.756,1.375L6.56,82.975c.018-.049.085-.049.104-.001c6.681,17.316,21.428,30.667,39.673,35.514c1.067.286,2.163-.349,2.446-1.417.285-1.066-.283,1.068,0,0Z\" stroke=\"#000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\/><\/g><g id=\"enFfLObwSGq23\" transform=\"matrix(2.996606 0 0 2.996606 1564.3638 838.857429)\" opacity=\"0\"><path d=\"M62.31,14.26c0,0-6.43-5.4-11.62-6.01-1.6-.19-5.51-.17-5.51-.17v-5.8c0,0,4.83-.12,6.42.08c7.22.89,14.47,7.34,14.47,7.34l-3.76,4.56Z\" fill=\"#dddaeb\" stroke=\"#1d1d1b\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\/><rect width=\"44.99\" height=\"7.77\" rx=\"0\" ry=\"0\" transform=\"translate(.5 0.5)\" fill=\"#d2cee7\" stroke=\"#1d1d1b\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\/><rect width=\"77.82\" height=\"3.51\" rx=\"0\" ry=\"0\" transform=\"translate(24.62 23.95)\" fill=\"#1d1d1b\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\/><circle r=\"11.57\" transform=\"translate(70.9 19.92)\" fill=\"#dddaeb\" stroke=\"#1d1d1b\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\/><\/g><g id=\"enFfLObwSGq28\" transform=\"matrix(.325926 0 0 0.325926 1718.103525 822.356556)\" opacity=\"0\"><path d=\"M368,184C368,82.542969,285.464844,0,184,0s-184,82.542969-184,184c0,90.535156,65.753906,165.960938,152,181.160156L152,384h-8c-4.425781,0-8,3.585938-8,8v24h-8c-4.425781,0-8,3.585938-8,8v32c0,4.414062,3.574219,8,8,8h8v24c0,4.414062,3.574219,8,8,8h80c4.425781,0,8-3.585938,8-8v-24h8c4.425781,0,8-3.585938,8-8v-32c0-4.414062-3.574219-8-8-8h-8v-24c0-4.414062-3.574219-8-8-8h-8v-18.839844C302.246094,349.960938,368,274.535156,368,184ZM16,184C16,91.359375,91.367188,16,184,16s168,75.359375,168,168-75.367188,168-168,168-168-75.359375-168-168ZM216,480h-64v-16h64Zm16-32h-96v-16h96Zm-80-32v-16h64v16Zm48-32h-32v-16.734375C173.28125,367.71875,178.609375,368,184,368s10.71875-.28125,16-.734375Zm0,0\"\/><path d=\"M336,184c0-83.816406-68.183594-152-152-152s-152,68.183594-152,152s68.183594,152,152,152s152-68.183594,152-152ZM93.800781,285.511719L109.65625,269.65625l-11.3125-11.3125-15.855469,15.855469C74,264.65625,66.863281,253.945312,61.304688,242.296875l22.261718-11.136719-7.160156-14.3125-21.183594,10.59375C51.441406,216.199219,49.128906,204.320312,48.40625,192L72,192v-16h-23.59375c.722656-12.320312,3.035156-24.199219,6.832031-35.433594l21.1875,10.59375l7.160157-14.3125-22.265626-11.136718C66.878906,114.0625,74.015625,103.34375,82.503906,93.808594l15.855469,15.855468l11.3125-11.3125L93.816406,82.496094c9.542969-8.488282,20.253906-15.625,31.902344-21.183594l11.136719,22.261719l14.3125-7.160157-10.59375-21.183593C151.800781,51.441406,163.679688,49.128906,176,48.40625L176,72h16v-23.59375c12.320312.722656,24.199219,3.035156,35.433594,6.832031l-10.59375,21.1875l14.3125,7.160157l11.136718-22.265626c11.648438,5.558594,22.367188,12.695313,31.902344,21.183594L258.335938,98.359375l11.3125,11.3125l15.855468-15.855469c8.488282,9.542969,15.625,20.253906,21.183594,31.902344l-22.261719,11.136719l7.160157,14.3125l21.183593-10.59375c3.796875,11.234375,6.109375,23.113281,6.832031,35.433593h-23.601562v16h23.59375c-.722656,12.320313-3.035156,24.199219-6.832031,35.433594l-21.1875-10.59375-7.160157,14.3125l22.265626,11.136719c-5.558594,11.648437-12.695313,22.367187-21.183594,31.902344L269.640625,258.34375l-11.3125,11.3125l15.855469,15.855469C250.160156,306.886719,218.625,320,184,320s-66.160156-13.113281-90.199219-34.488281Zm0,0\"\/><path d=\"M243.761719,113.214844L181.265625,152.28125C164.910156,153.695312,152,167.296875,152,184c0,17.648438,14.351562,32,32,32c16.710938,0,30.3125-12.921875,31.726562-29.273438l39.058594-62.488281c1.976563-3.160156,1.503906-7.261719-1.128906-9.894531-2.640625-2.632812-6.734375-3.097656-9.894531-1.128906ZM184,200c-8.824219,0-16-7.175781-16-16s7.175781-16,16-16s16,7.175781,16,16-7.175781,16-16,16Zm26.078125-34.425781c-2.101563-2.964844-4.6875-5.550781-7.652344-7.652344l20.421875-12.769531Zm0,0\"\/><path d=\"M232,232h-96c-4.425781,0-8,3.585938-8,8v32c0,4.414062,3.574219,8,8,8h96c4.425781,0,8-3.585938,8-8v-32c0-4.414062-3.574219-8-8-8Zm-8,32h-80v-16h80Zm0,0\"\/><\/g><g id=\"enFfLObwSGq33\" opacity=\"0\"><g transform=\"matrix(.238096 0 0 0.238096 1705.061219 851.109481)\"><g><g><path d=\"M432,0L80,0C35.888,0,0,35.888,0,80v40c0,11.046,8.954,20,20,20s20-8.954,20-20v-40c0-22.056,17.944-40,40-40h352c22.056,0,40,17.944,40,40v352c0,22.056-17.944,40-40,40h-352c-22.056,0-40-17.944-40-40v-40c0-11.046-8.954-20-20-20s-20,8.954-20,20v40c0,44.112,35.888,80,80,80h352c44.112,0,80-35.888,80-80v-352c0-44.112-35.888-80-80-80Z\"\/><\/g><\/g><g id=\"enFfLObwSGq38\"><g><g><path d=\"M335.919,213.567l-74.784-74.716c-7.814-7.807-20.477-7.801-28.284.013s-7.801,20.477.013,28.284l74.778,74.709c7.798,7.798,7.798,20.486,0,28.284-.029.029-.058.059-.087.088l-74.784,75.716c-7.762,7.859-7.684,20.522.175,28.284c3.897,3.85,8.976,5.771,14.053,5.771c5.16,0,10.318-1.985,14.23-5.946l74.746-75.677c23.346-23.398,23.329-61.425-.056-84.81Z\"\/><\/g><\/g><g><g><path d=\"M233,236h-213c-11.046,0-20,8.954-20,20s8.954,20,20,20h213c11.046,0,20-8.954,20-20s-8.954-20-20-20Z\"\/><\/g><\/g><\/g><\/g><text dx=\"0\" dy=\"0\" font-family=\"&quot;enFfLObwSGq1:::Montserrat&quot;\" font-size=\"75\" font-weight=\"700\" transform=\"matrix(1.308077 0 0 1.308077 1562.578616 948.476363)\" stroke-width=\"0\"><tspan y=\"0\" font-weight=\"700\" stroke-width=\"0\"><![CDATA[\r\nIN\r\n]]><\/tspan><\/text><\/g><g id=\"enFfLObwSGq47\" transform=\"matrix(4 0 0 4 1691.21806 765.960967)\" opacity=\"0\"><path d=\"M41,27.17v7.83c.002756,3.390016-1.428493,6.623039-3.94,8.9C32.94,47.65,28.67,47,23,47c-6.627417,0-12-5.372583-12-12v-8c0-3.47,6-2.23,6,2v-15c-.001173-.824163.336765-1.612512.934472-2.179956s1.402537-.864,2.225528-.820044c1.632318.146752,2.872848,1.531428,2.84,3.17v7.83c0-1.656854,1.343146-3,3-3s3,1.343146,3,3v2c0-1.656854,1.343146-3,3-3s3,1.343146,3,3v3c-.001173-.824163.336765-1.612512.934472-2.179956s1.402537-.864,2.225528-.820044c1.632318.146752,2.872848,1.531428,2.84,3.17Z\" fill=\"#f6ccaf\"\/><path d=\"M41,27.17v7.83c.001501,4.020807-2.010828,7.775153-5.36,10L27,45c-5.522847,0-10-4.477153-10-10v-21c-.014703-.898704.374324-1.756651,1.060034-2.33776s1.595845-.824149,2.479966-.66224c1.478538.322985,2.514207,1.657566,2.46,3.17v7.83c-.001173-.824163.336765-1.612512.934472-2.179956s1.402537-.864,2.225528-.820044c1.62841.146498,2.867538,1.525246,2.84,3.16v1.84c-.001173-.824163.336765-1.612512.934472-2.179956s1.402537-.864,2.225528-.820044c1.62841.146498,2.867538,1.525246,2.84,3.16v2.84c-.014703-.898704.374324-1.756651,1.060034-2.33776s1.595845-.824149,2.479966-.66224c1.478538.322985,2.514207,1.657566,2.46,3.17Z\" fill=\"#ffdec7\"\/><path d=\"M17,29v6c0,.552285-.447715,1-1,1s-1-.447715-1-1v-9.47c1.239431.715584,2.00211,2.038831,2,3.47Z\" fill=\"#edb996\"\/><g><g id=\"enFfLObwSGq52\" transform=\"translate(.000001 0)\"><path d=\"M27.92,14.15c.421825-2.960886-.843138-5.909796-3.279279-7.64473s-5.636571-1.966122-8.296769-.599327-4.335852,4.103285-4.343952,7.094057c0,.95.05,2,1.07,2c.293376.003322.57341-.12236.765929-.343757s.278099-.516171.234071-.806243c-.331111-2.323715.723163-4.627132,2.698276-5.895288s4.508336-1.268155,6.483448,0s3.029387,3.571573,2.698276,5.895288c-.034102.518101.333988.976113.847292,1.054281s1.001043-.249514,1.122708-.754281Z\" fill=\"#231f20\"\/><path d=\"M20,2c3.402041.000218,6.612545,1.574566,8.695775,4.264182s2.804735,6.191806,1.954225,9.485818c-.138071.535716.184284,1.081929.72,1.22s1.081929-.184284,1.22-.72c1.353825-5.262124-.707786-10.81116-5.168985-13.912852s-10.380831-3.101691-14.84203,0-6.52281,8.650728-5.168985,13.912852c.138071.535716.684284.858071,1.22.72s.858071-.684284.72-1.22c-.85051-3.294012-.129005-6.796202,1.954225-9.485818s5.293734-4.263964,8.695775-4.264182Z\" fill=\"#231f20\"\/><\/g><path d=\"M36,23.57c-.155676-1.383403-1.019422-2.586363-2.280481-3.176081s-2.738026-.481364-3.899519.286081c-.395706-1.13331-1.279469-2.028992-2.407376-2.439845s-2.380703-.293436-3.412624.319845v-4.39c.068698-1.628084-.857098-3.135093-2.340419-3.80973s-3.227613-.382022-4.409581.73973C15.59,12.67,16,13.43,16,25c-2.7-2-6-.8-6,2v8c0,7.179702,5.820298,13,13,13h6c7.179702,0,13-5.820298,13-13v-7.83c.049897-1.453245-.692779-2.819102-1.939661-3.567231s-2.801545-.760676-4.060339-.032769ZM40,35c0,6.075132-4.924868,11-11,11h-6c-6.075132,0-11-4.924868-11-11v-8c0-1.4,2-1.23,3.09-.16s.91,2.02.91,8.16c0,.552285.447715,1,1,1s1-.447715,1-1v-21c-.000833-.550054.224913-1.076169.624127-1.454571s.936651-.575683,1.485873-.545429c1.097245.124073,1.917729,1.06611,1.89,2.17L22,29c0,.552285.447715,1,1,1s1-.447715,1-1v-7c0-1.104569.895431-2,2-2s2,.895431,2,2v7c0,.552285.447715,1,1,1s1-.447715,1-1v-5c0-1.104569.895431-2,2-2s2,.895431,2,2v5c0,.552285.447715,1,1,1s1-.447715,1-1c0-2.17-.13-2.74.62-3.45.601257-.579671,1.49941-.724698,2.252554-.363723s1.202687,1.151937,1.127446,1.983723Z\" fill=\"#231f20\"\/><\/g><\/g><g id=\"enFfLObwSGq56\" transform=\"matrix(.370282 0 0 0.370282 1658.411311 801.436712)\" opacity=\"0\"><g><rect width=\"156.289289\" height=\"19.608044\" rx=\"0\" ry=\"0\" transform=\"matrix(2.802044 0 0 3.135919 36.392727 357.24865)\" fill=\"#d2dbed\" stroke-width=\"0\"\/><rect width=\"31.999948\" height=\"33.72473\" rx=\"0\" ry=\"0\" transform=\"matrix(2.965813 0.022216-.019041 2.542038 209.228548 346.072489)\" fill=\"#d2dbed\" stroke-width=\"0\"\/><rect width=\"31.999948\" height=\"33.72473\" rx=\"0\" ry=\"0\" transform=\"matrix(1.393674 0.010439-.015973 2.132397 4.77622 353.168416)\" fill=\"#b3b3b3\" stroke-width=\"0\"\/><rect width=\"31.999948\" height=\"33.72473\" rx=\"0\" ry=\"0\" transform=\"matrix(1.393674 0.010439-.015973 2.132397 463.885768 353.168416)\" fill=\"#b3b3b3\" stroke-width=\"0\"\/><rect width=\"31.999948\" height=\"33.72473\" rx=\"0\" ry=\"0\" transform=\"matrix(2.481231 0.018586-.030311 4.046564 133.451901 320.760686)\" fill=\"#b3b3b3\" stroke-width=\"0\"\/><rect width=\"31.999948\" height=\"33.72473\" rx=\"0\" ry=\"0\" transform=\"matrix(2.481231 0.018586-.030311 4.046564 300.891853 320.760686)\" fill=\"#b3b3b3\" stroke-width=\"0\"\/><rect width=\"31.999948\" height=\"33.72473\" rx=\"0\" ry=\"0\" transform=\"matrix(1.457781 0.01092-.023613 3.152365 233.434109 227.935899)\" fill=\"#b3b3b3\" stroke-width=\"0\"\/><g transform=\"matrix(2.656701 0 0 2.656701-873.34681-561.109542)\"><path d=\"M1683.580462,931.86769l.288656-85.906723l5.069859-5.76l125.638644-.532638l8.572151,6.292638.555053,86.463003-17.403255-.000001-.000001-75.907673-106.196137-.847713-.354976,76.199108-16.169994-.000001Z\" transform=\"translate(-1328.370933-589.297569)\" fill=\"#d2dbed\" stroke-width=\"3.84\"\/><\/g><rect width=\"31.999948\" height=\"33.72473\" rx=\"0\" ry=\"0\" transform=\"matrix(-.0041-.593034 2.022703-.013984 389.758401 220.774501)\" fill=\"#b3b3b3\" stroke-width=\"0\"\/><rect width=\"31.999948\" height=\"33.72473\" rx=\"0\" ry=\"0\" transform=\"matrix(-.0041-.593034 2.022703-.013984 54.878497 220.774501)\" fill=\"#b3b3b3\" stroke-width=\"0\"\/><rect width=\"31.999948\" height=\"33.72473\" rx=\"0\" ry=\"0\" transform=\"matrix(-.0041-.593034 2.022703-.013984 389.758401 272.086745)\" fill=\"#b3b3b3\" stroke-width=\"0\"\/><rect width=\"31.999948\" height=\"33.72473\" rx=\"0\" ry=\"0\" transform=\"matrix(-.0041-.593034 2.022703-.013984 54.878497 272.086745)\" fill=\"#b3b3b3\" stroke-width=\"0\"\/><path d=\"M499.5,341.25h-26c-5.305,0-9.837,3.327-11.648,8h-9.452v-65.508c5.193-1.519,9-6.315,9-11.992v-17c0-5.677-3.807-10.473-9-11.992v-13.016c5.193-1.519,9-6.315,9-11.992v-17c0-5.677-3.807-10.473-9-11.992v-15.758c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v15.25h-29v-36c0-6.893-5.607-12.5-12.5-12.5h-57.186c.829-4.713,1.286-9.553,1.286-14.5s-.457-9.787-1.286-14.5h81.186c9.649,0,17.5,7.851,17.5,17.5v9.75c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-9.75c0-17.921-14.58-32.5-32.5-32.5h-85.298c-11.947-31.524-42.442-54-78.101-54s-66.154,22.476-78.101,54h-25.4c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5h21.286c-.829,4.713-1.286,9.553-1.286,14.5s.457,9.787,1.286,14.5h-58.186c-6.893,0-12.5,5.607-12.5,12.5v36h-29v-60c0-9.649,7.851-17.5,17.5-17.5h25.9c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-25.899c-17.92,0-32.5,14.579-32.5,32.5v60.508c-5.193,1.519-9,6.315-9,11.992v17c0,5.677,3.807,10.473,9,11.992v13.016c-5.193,1.519-9,6.315-9,11.992v17c0,5.677,3.807,10.473,9,11.992v65.508h-9.452c-1.812-4.673-6.344-8-11.648-8h-26c-6.893,0-12.5,5.607-12.5,12.5v70c0,6.893,5.607,12.5,12.5,12.5h26c5.305,0,9.837-3.327,11.648-8h77.851v24.5c0,9.649,7.851,17.5,17.5,17.5h16c3.718,0,7.162-1.174,10-3.159c2.838,1.985,6.282,3.159,10,3.159h16c9.649,0,17.5-7.851,17.5-17.5v-8.5h83v8.5c0,9.649,7.851,17.5,17.5,17.5h16c3.718,0,7.162-1.174,10-3.159c2.838,1.985,6.282,3.159,10,3.159h16c9.649,0,17.5-7.851,17.5-17.5v-24.5h76.852c1.812,4.673,6.344,8,11.648,8h26c6.893,0,12.5-5.607,12.5-12.5v-70c0-6.893-5.607-12.5-12.5-12.5ZM36,421.25h-21v-65h21Zm363.399-152v-12h47v12Zm9-27v-12h29v12Zm38-27h-47v-12h47Zm-38,134v-65h29v65Zm-15-194.5v34.008c-5.193,1.518-9,6.315-9,11.992v17c0,5.677,3.807,10.474,9,11.992v13.016c-5.193,1.518-9,6.315-9,11.992v17c0,5.677,3.807,10.474,9,11.992v65.508h-8.399v-24.5c0-9.649-7.851-17.5-17.5-17.5h-16c-3.718,0-7.162,1.174-10,3.159-2.838-1.985-6.282-3.159-10-3.159h-16c-9.649,0-17.5,7.851-17.5,17.5v8.5h-12v-55.5h14v5c0,6.893,5.607,12.5,12.5,12.5h15c6.893,0,12.5-5.607,12.5-12.5v-50c0-6.893-5.607-12.5-12.5-12.5h-15c-6.893,0-12.5,5.607-12.5,12.5v5h-14v-5c0-4.76-2.675-8.904-6.6-11.015v-16.204c25.418-7.262,45.915-26.278,55.201-50.781Zm-136.899,54c2.665,0,5.298-.139,7.9-.384v11.884h-15.8v-11.884c2.602.245,5.235.384,7.9.384Zm43.5,54h-14v-10h14Zm-73,0h-11v-10h11Zm15-27.5h29v98h-29Zm73,45v-45h10v45ZM256.5,56.75c37.771,0,68.5,30.729,68.5,68.5s-30.729,68.5-68.5,68.5-68.5-30.729-68.5-68.5s30.729-68.5,68.5-68.5Zm-78.101,98c9.286,24.503,29.783,43.52,55.201,50.781v16.204c-3.925,2.111-6.6,6.255-6.6,11.015v5h-13.5c-6.893,0-12.5,5.607-12.5,12.5v15c0,6.893,5.607,12.5,12.5,12.5h13.5v55.5h-12v-8.5c0-9.649-7.851-17.5-17.5-17.5h-16c-3.718,0-7.162,1.174-10,3.159-2.838-1.985-6.282-3.159-10-3.159h-16c-9.649,0-17.5,7.851-17.5,17.5v24.5h-9.399v-65.508c5.193-1.518,9-6.315,9-11.992v-17c0-5.677-3.807-10.474-9-11.992v-13.016c5.193-1.518,9-6.315,9-11.992v-17c0-5.677-3.807-10.474-9-11.992v-34.008Zm-65.798,60.5h-47v-12h47Zm-9,15v12h-29v-12Zm-38,39v-12h47v12Zm9,15h29v65h-29ZM51,413.25v-49h77v49Zm110.5,42h-16c-1.378,0-2.5-1.121-2.5-2.5v-128c0-1.379,1.122-2.5,2.5-2.5h16c1.378,0,2.5,1.121,2.5,2.5v128c0,1.379-1.122,2.5-2.5,2.5Zm53.5-26v-30.25c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v53.75c0,1.379-1.122,2.5-2.5,2.5h-16c-1.378,0-2.5-1.121-2.5-2.5v-128c0-1.379,1.122-2.5,2.5-2.5h16c1.378,0,2.5,1.121,2.5,2.5v39.25c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-15.75h83v81Zm116.5,26h-16c-1.378,0-2.5-1.121-2.5-2.5v-128c0-1.379,1.122-2.5,2.5-2.5h16c1.378,0,2.5,1.121,2.5,2.5v128c0,1.379-1.122,2.5-2.5,2.5Zm38.5-2.5c0,1.379-1.122,2.5-2.5,2.5h-16c-1.378,0-2.5-1.121-2.5-2.5v-128c0-1.379,1.122-2.5,2.5-2.5h16c1.378,0,2.5,1.121,2.5,2.5Zm15-88.5h76v49h-76Zm112,57h-21v-65h21Z\" stroke=\"#fff\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\/><ellipse rx=\"25.108327\" ry=\"25.108327\" transform=\"matrix(2.685739 0 0 2.685739 256.808582 123.009053)\" fill=\"#fff\" stroke-width=\"0\"\/><ellipse rx=\"25.108327\" ry=\"25.108327\" transform=\"matrix(1.966713 0 0 1.966713 256.808582 125.709697)\" fill=\"rgba(210,219,237,0.63)\" stroke-width=\"0\"\/><path d=\"M227.862,164.495c2.929-2.93,2.929-7.678,0-10.607-15.791-15.79-15.791-41.484,0-57.275C233.845,90.63,241.251,86.919,249,85.47v18.571c-8.729,3.096-15,11.433-15,21.21s6.271,18.114,15,21.21v.688c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-.688c8.729-3.096,15-11.433,15-21.21s-6.271-18.114-15-21.21v-18.572c7.749,1.449,15.155,5.16,21.138,11.143c15.791,15.79,15.791,41.484,0,57.275-2.929,2.93-2.929,7.678,0,10.607c1.464,1.464,3.384,2.196,5.303,2.196s3.839-.732,5.303-2.196c21.64-21.641,21.639-56.851,0-78.49-8.911-8.91-20.125-14.142-31.744-15.714v-.724c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v.724c-11.619,1.572-22.833,6.804-31.744,15.715-21.64,21.641-21.639,56.851,0,78.49c2.929,2.928,7.678,2.928,10.606,0ZM256.5,132.75c-4.136,0-7.5-3.364-7.5-7.5s3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5-3.364,7.5-7.5,7.5Z\" stroke=\"#fff\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\/><path d=\"M247.828,164.798c-1.132-.246-2.267-.544-3.374-.887-3.956-1.228-8.158.988-9.383,4.945s.989,8.158,4.946,9.383c1.519.471,3.076.88,4.629,1.217.536.116,1.071.173,1.598.173c3.453,0,6.56-2.399,7.322-5.911.879-4.048-1.691-8.042-5.738-8.92Z\"\/><path d=\"M268.556,163.907c-1.106.343-2.24.641-3.373.887-4.048.878-6.618,4.871-5.739,8.92.762,3.512,3.869,5.911,7.322,5.911.527,0,1.062-.057,1.598-.173c1.554-.337,3.112-.746,4.63-1.217c3.957-1.226,6.17-5.427,4.945-9.384s-5.43-6.165-9.383-4.944Z\"\/><\/g><\/g><\/g>\r\n<script><![CDATA[\r\n" + SVGatorPlayer.getPlayer("91c80d77") + "(function(s,i,o,w,d,a,b){(a=Array.from(d.querySelectorAll('svg#' + i.root)).filter(n=> !n.svgatorPlayer)[0]||{}).svgatorPlayer={ready:(function(a){b=[];return function(c){return c?(b.push(c),a.svgatorPlayer):b}})(a)};w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('91c80d77',{\"root\":\"enFfLObwSGq1\",\"version\":\"2022-05-04\",\"animations\":[{\"elements\":{\"enFfLObwSGq10\":{\"transform\":{\"data\":{\"o\":{\"x\":1638.411691,\"y\":885.543909,\"type\":\"corner\"},\"s\":{\"x\":0.3,\"y\":0.3},\"t\":{\"x\":-328.000992,\"y\":-189.483799}},\"keys\":{\"r\":[{\"t\":2000,\"v\":16.323132},{\"t\":3000,\"v\":0}]}},\"opacity\":[{\"t\":1800,\"v\":0},{\"t\":2000,\"v\":1},{\"t\":2990,\"v\":1},{\"t\":3200,\"v\":0}]},\"enFfLObwSGq18\":{\"transform\":{\"data\":{\"o\":{\"x\":1781.723108,\"y\":905.438236,\"type\":\"corner\"},\"t\":{\"x\":-61.63008,\"y\":-61.506909}},\"keys\":{\"r\":[{\"t\":2000,\"v\":0},{\"t\":3000,\"v\":360}]}},\"opacity\":[{\"t\":1800,\"v\":0},{\"t\":2000,\"v\":1},{\"t\":2990,\"v\":1},{\"t\":3200,\"v\":0}]},\"enFfLObwSGq23\":{\"opacity\":[{\"t\":4000,\"v\":0},{\"t\":5000,\"v\":1},{\"t\":5200,\"v\":0}]},\"enFfLObwSGq28\":{\"opacity\":[{\"t\":5600,\"v\":0},{\"t\":6000,\"v\":1},{\"t\":6400,\"v\":0}]},\"enFfLObwSGq33\":{\"opacity\":[{\"t\":6400,\"v\":0},{\"t\":6600,\"v\":0},{\"t\":7000,\"v\":1},{\"t\":8000,\"v\":1},{\"t\":8400,\"v\":0}]},\"enFfLObwSGq38\":{\"transform\":{\"data\":{\"t\":{\"x\":-176.735565,\"y\":-256.499817}},\"keys\":{\"o\":[{\"t\":6400,\"v\":{\"x\":176.735565,\"y\":256.499817,\"type\":\"corner\"}},{\"t\":6600,\"v\":{\"x\":218.735431,\"y\":256.499817,\"type\":\"corner\"}},{\"t\":7000,\"v\":{\"x\":176.735565,\"y\":256.499817,\"type\":\"corner\"}},{\"t\":8000,\"v\":{\"x\":218.735431,\"y\":256.499817,\"type\":\"corner\"}},{\"t\":8400,\"v\":{\"x\":176.735565,\"y\":256.499817,\"type\":\"corner\"}}]}}},\"enFfLObwSGq47\":{\"opacity\":[{\"t\":11000,\"v\":0},{\"t\":11100,\"v\":0},{\"t\":11600,\"v\":1},{\"t\":12100,\"v\":1},{\"t\":12200,\"v\":0}]},\"enFfLObwSGq52\":{\"transform\":{\"data\":{\"t\":{\"x\":-19.999999,\"y\":-8.50641}},\"keys\":{\"o\":[{\"t\":10900,\"v\":{\"x\":20,\"y\":8.50641,\"type\":\"corner\"}},{\"t\":11200,\"v\":{\"x\":20,\"y\":6.00641,\"type\":\"corner\"}},{\"t\":11400,\"v\":{\"x\":20,\"y\":8.50641,\"type\":\"corner\"}},{\"t\":11600,\"v\":{\"x\":20,\"y\":6.00641,\"type\":\"corner\"}},{\"t\":11800,\"v\":{\"x\":20,\"y\":8.50641,\"type\":\"corner\"}}]}}},\"enFfLObwSGq56\":{\"opacity\":[{\"t\":0,\"v\":0},{\"t\":500,\"v\":1},{\"t\":1000,\"v\":0}]}},\"s\":\"MDAA1ZTg0MmI2ZGDdlN2I2YTdkTNzI3OE43NzJJiNDMzYVAzYjPNlMzkzOVgzNDTJiNmQ3MjdiLNmU2Y0o3ZDcEyNzg3NzJiNDRMzYTM1MmI3MFjdkNmU3YjZhJN2Q3Mjc4NzcX3YzJiNDMzYTNM1MmI2ZjcyNHzU3NTJiNDMzTYVgzNTJiNmEN3NTdkVjZlN2BI3NzZhUDdkNAmUyYjQzNmY2XYTc1N2M2ZVIYzNTJiN2M3OTCZlNmU2ZDJiNQDMzYTM1MmI2XZjc5N2MyYjQAzM2EzOTM5ODBY\/\"}],\"options\":\"MDGAxODkyQjM5OMGE4Yjc4ODk4JYjM5NTEzOTgO3ODk4NjdlODIk3ODg0ODQ3OPDhiODA3YTM5NOTQ\/\"},'__SVGATOR_PLAYER__',window,document)\r\n]]><\/script>\r\n\r\n<style><![CDATA[\r\n@font-face {font-family: 'enFfLObwSGq1:::Montserrat';font-style: normal;font-weight: 700;src: url(data:font\/ttf;charset=utf-8;base64,AAEAAAAQAQAABAAAR0RFRgARAAIAAAE4AAAAFkdQT1OPK5dIAAADdAAAAHZHU1VCI3YkggAAAbQAAAAuT1MvMngVXg0AAAKkAAAAYFNUQVTl9MwaAAACHAAAAERjbWFwAF4A1wAAAmAAAABEZ2FzcAAAABAAAAEUAAAACGdseWYj+j38AAADBAAAAHBoZWFkGIezFwAAAeQAAAA2aGhlYQmLAj4AAAGQAAAAJGhtdHgH1gDOAAABKAAAABBsb2NhAFgATAAAARwAAAAKbWF4cAAYALUAAAFQAAAAIG5hbWUwm1n2AAAD7AAAAkBwb3N0\/58AMgAAAXAAAAAgcHJlcGgGjIUAAAEMAAAAB7gB\/4WwBI0AAAEAAf\/\/AA8AAAAUACAAOAA4AAACSwAoAUgAUwMoAFMBGwAAAAEAAAAMAAAAAAAAAAEAAQACAAEAAQAAAAEAAAAEAFkABwBYAAkAAQAAAAAAAAAAAAAAAAADAAMAAwAAAAAAAP+cADIAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAADyP8FAAAGpv8y\/I4GjgABAAAAAAAAAAAAAAAAAAAABAABAAAACgAsACwAA0RGTFQAGGN5cmwAFGxhdG4AFAAAAAAABAAAAAD\/\/wAAAAAAAAABAAAACAAAtSP\/UV8PPPUAAwPoAAAAANYL\/kYAAAAA3ZxwxP8y\/vYGjgQ0AAEABgACAAAAAAAAAAEAAQAIAAIAAAAUAAIAAAAkAAJ3Z2h0AQAAAGl0YWwBEwABABQABAADAAEAAgEUAAAAAAABAAAAAQAAAAABBwK8AAAAAAACAAAAAwAAABQAAwABAAAAFAAEADAAAAAIAAgAAgAAACAASQBO\/\/8AAAAgAEkATv\/\/\/+P\/uP+0AAEAAAAAAAAAAAAEAnICvAAFAAACigJYAAAASwKKAlgAAAFeADIBNgAAAAAAAAAAAAAAAKAAAv9AACB7AAAAAAAAAABVTEEAAKAAAPsCA8j\/BQAABFUBDiAAAZcAAAAAAgUCvAAAACAAAwACACgAAAIjArwAAwAHAAAzESERJSERISgB+\/5VAVv+pQK8\/URGAjAAAQBTAAAA9QK8AAMAADMRMxFTogK8\/UQAAQBTAAAC1QK8AAsAADMRMwEjETMRIwEzEVOGAZ1BoIX+YkECvP4IAfj9RAH4\/ggAAQAAAAoAKgA4AANERkxUABRjeXJsABRsYXRuABQABAAAAAD\/\/wABAAAAAWtlcm4ACAAAAAEAAAABAAQACQAIAAEACAABAAIAAAAIAAIAFAAEAAAAJgAcAAEAAgAAAAAAAQACAAEAAgABAAEAAgABAAEAAgAAAAAAAAAMAJYAAwABBAkAAACwAPoAAwABBAkAAQAUAOYAAwABBAkAAgAIAN4AAwABBAkAAwAyAKwAAwABBAkABAAeAI4AAwABBAkABQAaAHQAAwABBAkABgAeAFYAAwABBAkADgA0ACIAAwABBAkBAAAMABYAAwABBAkBBwAIAN4AAwABBAkBEwAMAAoAAwABBAkBFAAKAAAAUgBvAG0AYQBuAEkAdABhAGwAaQBjAFcAZQBpAGcAaAB0AGgAdAB0AHAAOgAvAC8AcwBjAHIAaQBwAHQAcwAuAHMAaQBsAC4AbwByAGcALwBPAEYATABNAG8AbgB0AHMAZQByAHIAYQB0AC0AQgBvAGwAZABWAGUAcgBzAGkAbwBuACAAOAAuADAAMAAwAE0AbwBuAHQAcwBlAHIAcgBhAHQAIABCAG8AbABkADgALgAwADAAMAA7AFUATABBADsATQBvAG4AdABzAGUAcgByAGEAdAAtAEIAbwBsAGQAQgBvAGwAZABNAG8AbgB0AHMAZQByAHIAYQB0AEMAbwBwAHkAcgBpAGcAaAB0ACAAMgAwADEAMQAgAFQAaABlACAATQBvAG4AdABzAGUAcgByAGEAdAAgAFAAcgBvAGoAZQBjAHQAIABBAHUAdABoAG8AcgBzACAAKABoAHQAdABwAHMAOgAvAC8AZwBpAHQAaAB1AGIALgBjAG8AbQAvAEoAdQBsAGkAZQB0AGEAVQBsAGEALwBNAG8AbgB0AHMAZQByAHIAYQB0ACk=) format('truetype');}\r\n]]><\/style>\r\n<\/svg>\r\n");
}

const SVGatorComponent = React.forwardRef((props, ref) => {
    const html = getHtml();
    if (!SVGatorPlayer.getWebViewProps) {
        console.warn("Your currently installed @svgator/react-native package is outdated. " +
            "Please update it to the newest version. " +
            "See more: https://www.npmjs.com/package/@svgator/react-native");
        const newProps = SVGatorPlayer.parseProps(props, html);
        return (
            <WebView ref={ref}
                     {...newProps}
                     source={{html}}
                     containerStyle={{flex: 0}}
                     style={{backgroundColor: "transparent", flex: 0}}/>
        );
    }

    const {newProps, styles} = SVGatorPlayer.getWebViewProps(props, html);

    return (
        <WebView
            ref={ref}
            {...newProps}
            source={{html}}
            containerStyle={[styles.container, props.container]}
            style={styles.style}
        />
    );
});

export default SVGatorComponent;