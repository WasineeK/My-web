// let map;
// let marker;

// function initMap() {
//   const centerLatLng = { lat: 14.0360620, lng: 100.7316547 };

//   map = new google.maps.Map(document.getElementById('map'), {
//     center: centerLatLng,
//     zoom: 17
//   });
// }

// function toggleLocation() {
//   if (marker) {
//     // Clear the marker and reset the map center
//     marker.setMap(null);
//     map.setCenter({ lat: 14.0360620, lng: 100.7316547 });
//     marker = null;
//   } else {
//     // Get user's current location
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLatLng = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//           };

//           // Center the map to the user's location
//           map.setCenter(userLatLng);

//           // Add a marker for the user's location
//           marker = new google.maps.Marker({
//             position: userLatLng,
//             map: map,
//             title: 'คุณอยู่ที่นี่'
//           });
//         },
//         (error) => {
//           console.error('Error getting user location:', error);
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   }
// }

// function initMap() {
//     const areas = [
//         [
//             //ประตู 3 #1 gate3
//             { lat: 14.036956, lng: 100.731258 }, //  14.036956, 100.731258 = 101
//             { lat: 14.036953, lng: 100.731524 }, //  14.036953, 100.731524 = 102
//             { lat: 14.035883, lng: 100.731650 }, //  14.035883, 100.731650 = 103
//             { lat: 14.035879, lng: 100.731256 }  //  14.035879, 100.731256 = 104
//         ],
//         [
//             //บริหาร #2 business
//             { lat: 14.037823, lng: 100.731506 }, // 14.037823, 100.731506 = 201
//             { lat: 14.037819, lng: 100.731569 }, // 14.037819, 100.731569 = 202
//             { lat: 14.036962, lng: 100.731515 }, // 14.036962, 100.731515 = 203
//             { lat: 14.036968, lng: 100.731473 }  // 14.036968, 100.731473 = 204
//         ],
//         [
//             //สถาปัตย์ #3 Barchitecture
//             { lat: 14.038980, lng: 100.731481 }, // 14.038980, 100.731481 = 301 
//             { lat: 14.038980, lng: 100.731580 }, // 14.038980, 100.731580 = 302 
//             { lat: 14.037871, lng: 100.731574 }, // 14.037871, 100.731574 = 303 
//             { lat: 14.037874, lng: 100.731511 }  // 14.037874, 100.731511 = 304 
//         ],
//         [
//             //ดุริยางค์ #4 music408
//             { lat: 14.039819, lng: 100.730559 }, // 14.039819, 100.730559 = 401
//             { lat: 14.039812, lng: 100.731566 }, // 14.039812, 100.731566 = 402
//             { lat: 14.038984, lng: 100.731576 }, // 14.038984, 100.731576 = 403
//             { lat: 14.038986, lng: 100.730581 }  // 14.038986, 100.730581 = 404
//         ],
//         [
//             //รป #5 commonbuild
//             { lat: 14.039808, lng: 100.730263 }, // 14.039808, 100.730263 = 501
//             { lat: 14.039826, lng: 100.730553 }, // 14.039826, 100.730553 = 502
//             { lat: 14.038826, lng: 100.730394 }, // 14.038826, 100.730394 = 503
//             { lat: 14.038824, lng: 100.730259 }  // 14.038824, 100.730259 = 504
//         ],
//         [
//             //สถาปัตย์หน้า #6 Farchitecture
//             { lat: 14.038772, lng: 100.730266 }, // 14.038772, 100.730266 = 601
//             { lat: 14.038767, lng: 100.730365 }, // 14.038767, 100.730365 = 602
//             { lat: 14.037822, lng: 100.730363 }, // 14.037822, 100.730363 = 603
//             { lat: 14.037824, lng: 100.730275 }  // 14.037824, 100.730275 = 604
//         ],
//         [
//             //ศิลปศาสตร์ #7 liberalarts708
//             { lat: 14.038785, lng: 100.728335 }, // 14.038785, 100.728335 = 701
//             { lat: 14.038774, lng: 100.728448 }, // 14.038774, 100.728448 = 702
//             { lat: 14.037911, lng: 100.730266 }, // 14.037911, 100.730266 = 703
//             { lat: 14.037814, lng: 100.730259 }, // 14.037814, 100.730259 = 704
//             { lat: 14.037809, lng: 100.728333 }  // 14.037809, 100.728333 = 705
//         ],
//         [
//             //วิทยาศาสตร์ #8 science808
//             { lat: 14.039085, lng: 100.727494 }, // 14.039085, 100.727494 = 801
//             { lat: 14.039082, lng: 100.728422 }, // 14.039082, 100.728422 = 802
//             { lat: 14.038785, lng: 100.728422 }, // 14.038785, 100.728422 = 803
//             { lat: 14.039012, lng: 100.727507 }  // 14.039012, 100.727507 = 804

//         ],
//         [
//             //สื่อสารมวลชน #9 masscom904
//             { lat: 14.039077, lng: 100.726337 }, // 14.039077, 100.726337 = 901
//             { lat: 14.039082, lng: 100.727481 }, // 14.039082, 100.727481 = 902
//             { lat: 14.039012, lng: 100.727483 }, // 14.039012, 100.727483 = 903
//             { lat: 14.039009, lng: 100.726325 }  // 14.039009, 100.726325 = 904
//         ],
//         [
//             //วิศวะสิ่งทอ #10 textileengineer
//             { lat: 14.039069, lng: 100.725093 }, // 14.039069, 100.725093 = 1001
//             { lat: 14.039061, lng: 100.726312 }, // 14.039061, 100.726312 = 1002
//             { lat: 14.039018, lng: 100.726314 }, // 14.039018, 100.726314 = 1003
//             { lat: 14.037790, lng: 100.725094 }  // 14.037790, 100.725094 = 1004
//         ],
//         [
//             //วิศวะเครื่องกล #11 mechanicalengineer
//             { lat: 14.037885, lng: 100.723624 }, // 14.037885, 100.723624 = 1101
//             { lat: 14.037878, lng: 100.725083 }, // 14.037878, 100.725083 = 1102
//             { lat: 14.037786, lng: 100.725084 }, // 14.037786, 100.725084 = 1103
//             { lat: 14.037685, lng: 100.723603 }  // 14.037685, 100.723603 = 1104
//         ],
//         [
//             //สถานพยาบาล #12 hospital
//             { lat: 14.037654, lng: 100.723599 }, // 14.037654, 100.723599 = 1201
//             { lat: 14.037630, lng: 100.723803 }, // 14.037630, 100.723803 = 1202
//             { lat: 14.036657, lng: 100.723726 }, // 14.036657, 100.723726 = 1203
//             { lat: 14.036658, lng: 100.723648 }  // 14.036658, 100.723648 = 1204
//         ],
//         [
//             //องค์การนักศึกษา #13 stuorganize
//             { lat: 14.036644, lng: 100.723662 }, // 14.036644, 100.723662 = 1301
//             { lat: 14.036666, lng: 100.724883 }, // 14.036666, 100.724883 = 1302
//             { lat: 14.036518, lng: 100.724883 }, // 14.036581, 100.724883 = 1303
//             { lat: 14.036583, lng: 100.723719 }  // 14.036583, 100.723719 = 1304
//         ],
//         [
//             //วิศวไฟฟ้า #14 electricengineer
//             { lat: 14.036467, lng: 100.724864 }, // 14.036467, 100.724864 = 1401
//             { lat: 14.036466, lng: 100.724913 }, // 14.036466, 100.724913 = 1402
//             { lat: 14.035813, lng: 100.724932 }, // 14.035813, 100.724932 = 1403
//             { lat: 14.035809, lng: 100.724876 }  // 14.035809, 100.724876 = 1404
//         ],
//         [
//             //วิศวคอมพิวเตอร์ #15
//             { lat: 14.035812, lng: 100.724945 }, // 14.035812, 100.724945 = 1501
//             { lat: 14.035829, lng: 100.725664 }, // 14.035829, 100.725664 = 1502
//             { lat: 14.035757, lng: 100.725668 }, // 14.035757, 100.725668 = 1503
//             { lat: 14.035758, lng: 100.724931 }  // 14.035758, 100.724931 = 1504
//         ],
//         [
//             //โรงอาหารกลาง,iwork #16 foodcurt
//             { lat: 14.035741, lng: 100.724862 }, // 14.035741, 100.724862 = 1601
//             { lat: 14.035736, lng: 100.724941 }, // 14.035736, 100.724941 = 1602
//             { lat: 14.034763, lng: 100.724930 }, // 14.034763, 100.724930 = 1603
//             { lat: 14.034754, lng: 100.728442 }  // 14.034754, 100.724842 = 1604
//         ],
//         [
//             //ยิมเนเซียม #17 gymnasium
//             { lat: 14.034734, lng: 100.724844 }, // 14.034734, 100.724844 = 1701
//             { lat: 14.034736, lng: 100.724930 }, // 14.034736, 100.724930 = 1702
//             { lat: 14.033932, lng: 100.724924 }, // 14.033932, 100.724924 = 1703
//             { lat: 14.033895, lng: 100.723736 }  // 14.033895, 100.723736 = 1704
//         ],
//         [
//             //หอใน #18 dormitory
//             { lat: 14.033960, lng: 100.721853 }, // 14.033960, 100.721853 = 1801
//             { lat: 14.033991, lng: 100.723614 }, // 14.033991, 100.723614 = 1802
//             { lat: 14.031892, lng: 100.723073 }, // 14.031892, 100.723073 = 1803
//             { lat: 14.031962, lng: 100.721812 }  // 14.031962, 100.721812 = 1804
//         ],
//         [
//             //คณะวิศวกรรม #19 engineer
//             { lat: 14.035859, lng: 100.725657 }, // 14.035859, 100.725657 = 1901
//             { lat: 14.035909, lng: 100.726137 }, // 14.035909, 100.726137 = 1902
//             { lat: 14.035781, lng: 100.726170 }, // 14.035781, 100.726170 = 1903
//             { lat: 14.035758, lng: 100.725684 }  // 14.035758, 100.725684 = 1904
//         ],
//         [
//             //หอประชุมราชมงคล,ศิลปกรรมศาสตร์ #20 appliedarts
//             { lat: 14.035970, lng: 100.726146 }, // 14.035970, 100.726146 = 2001
//             { lat: 14.036051, lng: 100.727599 }, // 14.036051, 100.727599 = 2002
//             { lat: 14.035926, lng: 100.727588 }, // 14.035926, 100.727588 = 2003
//             { lat: 14.035809, lng: 100.726188 }  // 14.035809, 100.726188 = 2004
//         ],
//         [
//             //คณะศึกษาศาสตร์,คณะพยาบาลศาสตร์ #21 nursscience
//             { lat: 14.036043, lng: 100.727627 }, // 14.036043, 100.727627 = 2101
//             { lat: 14.036019, lng: 100.728365 }, // 14.036019, 100.728365 = 2102
//             { lat: 14.035971, lng: 100.728371 }, // 14.035971, 100.728371 = 2103
//             { lat: 14.035941, lng: 100.727619 }  // 14.035941, 100.727619 = 2104
//         ],
//         [
//             //สวัสดิการ #22 welfare
//             { lat: 14.036034, lng: 100.728437 }, // 14.036034, 100.728437 = 2201
//             { lat: 14.036035, lng: 100.730260 }, // 14.036035, 100.730260 = 2202
//             { lat: 14.035967, lng: 100.730265 }, // 14.035967, 100.730265 = 2203
//             { lat: 14.035961, lng: 100.728437 }  // 14.035961, 100.728437 = 2204
//         ],
//         [
//             //คณะครุศาสตร์ #23 education
//             { lat: 14.036034, lng: 100.730351 }, // 14.036034, 100.730351 = 2301
//             { lat: 14.036046, lng: 100.731188 }, // 14.036046, 100.731188 = 2302
//             { lat: 14.035993, lng: 100.731188 }, // 14.035993, 100.731188 = 2303
//             { lat: 14.035978, lng: 100.730332 }  // 14.035978, 100.730332 = 2304
//         ],
//         // เพิ่มพื้นที่เพิ่มเติมตามต้องการ
//     ];
//     map = new google.maps.Map(document.getElementById("map"), {
//     center: areas[0][0] // เลือกพื้นที่แรกเป็นจุดศูนย์กลาง
// });
// areas.forEach(areaCoordinates => {
//     const areaPolygon = new google.maps.Polygon({
//         paths: areaCoordinates,
//         strokeColor: "#FF0000",
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: "#FF0000",
//         fillOpacity: 0.35
//     });
//     areaPolygon.setMap(map);
// });

// marker = new google.maps.Marker({
//     map: map,
//     title: "ตำแหน่งปัจจุบัน"
// });

// updateLocation();
// }   



let map;
let marker;

function initMap() {
    const centerLatLng = { lat: 14.0360620, lng: 100.7316547 };

    map = new google.maps.Map(document.getElementById('map'), {
        center: centerLatLng,
        zoom: 17
    });

    const areas = [
        [
            //ประตู 3 #1 gate3
            { lat: 14.036956, lng: 100.731258 }, //  14.036956, 100.731258 = 101
            { lat: 14.036953, lng: 100.731524 }, //  14.036953, 100.731524 = 102
            { lat: 14.035883, lng: 100.731650 }, //  14.035883, 100.731650 = 103
            { lat: 14.035879, lng: 100.731256 }  //  14.035879, 100.731256 = 104
        ],
        [
            //บริหาร #2 business
            { lat: 14.037823, lng: 100.731506 }, // 14.037823, 100.731506 = 201
            { lat: 14.037819, lng: 100.731569 }, // 14.037819, 100.731569 = 202
            { lat: 14.036962, lng: 100.731515 }, // 14.036962, 100.731515 = 203
            { lat: 14.036968, lng: 100.731473 }  // 14.036968, 100.731473 = 204
        ],
        [
            //สถาปัตย์ #3 Barchitecture
            { lat: 14.038980, lng: 100.731481 }, // 14.038980, 100.731481 = 301 
            { lat: 14.038980, lng: 100.731580 }, // 14.038980, 100.731580 = 302 
            { lat: 14.037871, lng: 100.731574 }, // 14.037871, 100.731574 = 303 
            { lat: 14.037874, lng: 100.731511 }  // 14.037874, 100.731511 = 304 
        ],
        [
            //ดุริยางค์ #4 music408
            { lat: 14.039819, lng: 100.730559 }, // 14.039819, 100.730559 = 401
            { lat: 14.039812, lng: 100.731566 }, // 14.039812, 100.731566 = 402
            { lat: 14.038984, lng: 100.731576 }, // 14.038984, 100.731576 = 403
            { lat: 14.038986, lng: 100.730581 }  // 14.038986, 100.730581 = 404
        ],
        [
            //รป #5 commonbuild
            { lat: 14.039808, lng: 100.730263 }, // 14.039808, 100.730263 = 501
            { lat: 14.039826, lng: 100.730553 }, // 14.039826, 100.730553 = 502
            { lat: 14.038826, lng: 100.730394 }, // 14.038826, 100.730394 = 503
            { lat: 14.038824, lng: 100.730259 }  // 14.038824, 100.730259 = 504
        ],
        [
            //สถาปัตย์หน้า #6 Farchitecture
            { lat: 14.038772, lng: 100.730266 }, // 14.038772, 100.730266 = 601
            { lat: 14.038767, lng: 100.730365 }, // 14.038767, 100.730365 = 602
            { lat: 14.037822, lng: 100.730363 }, // 14.037822, 100.730363 = 603
            { lat: 14.037824, lng: 100.730275 }  // 14.037824, 100.730275 = 604
        ],
        [
            //ศิลปศาสตร์ #7 liberalarts708
            { lat: 14.038785, lng: 100.728335 }, // 14.038785, 100.728335 = 701
            { lat: 14.038774, lng: 100.728448 }, // 14.038774, 100.728448 = 702
            { lat: 14.037911, lng: 100.730266 }, // 14.037911, 100.730266 = 703
            { lat: 14.037814, lng: 100.730259 }, // 14.037814, 100.730259 = 704
            { lat: 14.037809, lng: 100.728333 }  // 14.037809, 100.728333 = 705
        ],
        [
            //วิทยาศาสตร์ #8 science808
            { lat: 14.039085, lng: 100.727494 }, // 14.039085, 100.727494 = 801
            { lat: 14.039082, lng: 100.728422 }, // 14.039082, 100.728422 = 802
            { lat: 14.038785, lng: 100.728422 }, // 14.038785, 100.728422 = 803
            { lat: 14.039012, lng: 100.727507 }  // 14.039012, 100.727507 = 804

        ],
        [
            //สื่อสารมวลชน #9 masscom904
            { lat: 14.039077, lng: 100.726337 }, // 14.039077, 100.726337 = 901
            { lat: 14.039082, lng: 100.727481 }, // 14.039082, 100.727481 = 902
            { lat: 14.039012, lng: 100.727483 }, // 14.039012, 100.727483 = 903
            { lat: 14.039009, lng: 100.726325 }  // 14.039009, 100.726325 = 904
        ],
        [
            //วิศวะสิ่งทอ #10 textileengineer
            { lat: 14.039069, lng: 100.725093 }, // 14.039069, 100.725093 = 1001
            { lat: 14.039061, lng: 100.726312 }, // 14.039061, 100.726312 = 1002
            { lat: 14.039018, lng: 100.726314 }, // 14.039018, 100.726314 = 1003
            { lat: 14.037790, lng: 100.725094 }  // 14.037790, 100.725094 = 1004
        ],
        [
            //วิศวะเครื่องกล #11 mechanicalengineer
            { lat: 14.037885, lng: 100.723624 }, // 14.037885, 100.723624 = 1101
            { lat: 14.037878, lng: 100.725083 }, // 14.037878, 100.725083 = 1102
            { lat: 14.037786, lng: 100.725084 }, // 14.037786, 100.725084 = 1103
            { lat: 14.037685, lng: 100.723603 }  // 14.037685, 100.723603 = 1104
        ],
        [
            //สถานพยาบาล #12 hospital
            { lat: 14.037654, lng: 100.723599 }, // 14.037654, 100.723599 = 1201
            { lat: 14.037630, lng: 100.723803 }, // 14.037630, 100.723803 = 1202
            { lat: 14.036657, lng: 100.723726 }, // 14.036657, 100.723726 = 1203
            { lat: 14.036658, lng: 100.723648 }  // 14.036658, 100.723648 = 1204
        ],
        [
            //องค์การนักศึกษา #13 stuorganize
            { lat: 14.036644, lng: 100.723662 }, // 14.036644, 100.723662 = 1301
            { lat: 14.036666, lng: 100.724883 }, // 14.036666, 100.724883 = 1302
            { lat: 14.036518, lng: 100.724883 }, // 14.036581, 100.724883 = 1303
            { lat: 14.036583, lng: 100.723719 }  // 14.036583, 100.723719 = 1304
        ],
        [
            //วิศวไฟฟ้า #14 electricengineer
            { lat: 14.036467, lng: 100.724864 }, // 14.036467, 100.724864 = 1401
            { lat: 14.036466, lng: 100.724913 }, // 14.036466, 100.724913 = 1402
            { lat: 14.035813, lng: 100.724932 }, // 14.035813, 100.724932 = 1403
            { lat: 14.035809, lng: 100.724876 }  // 14.035809, 100.724876 = 1404
        ],
        [
            //วิศวคอมพิวเตอร์ #15
            { lat: 14.035812, lng: 100.724945 }, // 14.035812, 100.724945 = 1501
            { lat: 14.035829, lng: 100.725664 }, // 14.035829, 100.725664 = 1502
            { lat: 14.035757, lng: 100.725668 }, // 14.035757, 100.725668 = 1503
            { lat: 14.035758, lng: 100.724931 }  // 14.035758, 100.724931 = 1504
        ],
        [
            //โรงอาหารกลาง,iwork #16 foodcurt
            { lat: 14.035741, lng: 100.724862 }, // 14.035741, 100.724862 = 1601
            { lat: 14.035736, lng: 100.724941 }, // 14.035736, 100.724941 = 1602
            { lat: 14.034763, lng: 100.724930 }, // 14.034763, 100.724930 = 1603
            { lat: 14.034754, lng: 100.728442 }  // 14.034754, 100.724842 = 1604
        ],
        [
            //ยิมเนเซียม #17 gymnasium
            { lat: 14.034734, lng: 100.724844 }, // 14.034734, 100.724844 = 1701
            { lat: 14.034736, lng: 100.724930 }, // 14.034736, 100.724930 = 1702
            { lat: 14.033932, lng: 100.724924 }, // 14.033932, 100.724924 = 1703
            { lat: 14.033895, lng: 100.723736 }  // 14.033895, 100.723736 = 1704
        ],
        [
            //หอใน #18 dormitory
            { lat: 14.033960, lng: 100.721853 }, // 14.033960, 100.721853 = 1801
            { lat: 14.033991, lng: 100.723614 }, // 14.033991, 100.723614 = 1802
            { lat: 14.031892, lng: 100.723073 }, // 14.031892, 100.723073 = 1803
            { lat: 14.031962, lng: 100.721812 }  // 14.031962, 100.721812 = 1804
        ],
        [
            //คณะวิศวกรรม #19 engineer
            { lat: 14.035859, lng: 100.725657 }, // 14.035859, 100.725657 = 1901
            { lat: 14.035909, lng: 100.726137 }, // 14.035909, 100.726137 = 1902
            { lat: 14.035781, lng: 100.726170 }, // 14.035781, 100.726170 = 1903
            { lat: 14.035758, lng: 100.725684 }  // 14.035758, 100.725684 = 1904
        ],
        [
            //หอประชุมราชมงคล,ศิลปกรรมศาสตร์ #20 appliedarts
            { lat: 14.035970, lng: 100.726146 }, // 14.035970, 100.726146 = 2001
            { lat: 14.036051, lng: 100.727599 }, // 14.036051, 100.727599 = 2002
            { lat: 14.035926, lng: 100.727588 }, // 14.035926, 100.727588 = 2003
            { lat: 14.035809, lng: 100.726188 }  // 14.035809, 100.726188 = 2004
        ],
        [
            //คณะศึกษาศาสตร์,คณะพยาบาลศาสตร์ #21 nursscience
            { lat: 14.036043, lng: 100.727627 }, // 14.036043, 100.727627 = 2101
            { lat: 14.036019, lng: 100.728365 }, // 14.036019, 100.728365 = 2102
            { lat: 14.035971, lng: 100.728371 }, // 14.035971, 100.728371 = 2103
            { lat: 14.035941, lng: 100.727619 }  // 14.035941, 100.727619 = 2104
        ],
        [
            //สวัสดิการ #22 welfare
            { lat: 14.036034, lng: 100.728437 }, // 14.036034, 100.728437 = 2201
            { lat: 14.036035, lng: 100.730260 }, // 14.036035, 100.730260 = 2202
            { lat: 14.035967, lng: 100.730265 }, // 14.035967, 100.730265 = 2203
            { lat: 14.035961, lng: 100.728437 }  // 14.035961, 100.728437 = 2204
        ],
        [
            //คณะครุศาสตร์ #23 education
            { lat: 14.036034, lng: 100.730351 }, // 14.036034, 100.730351 = 2301
            { lat: 14.036046, lng: 100.731188 }, // 14.036046, 100.731188 = 2302
            { lat: 14.035993, lng: 100.731188 }, // 14.035993, 100.731188 = 2303
            { lat: 14.035978, lng: 100.730332 }  // 14.035978, 100.730332 = 2304
        ],
        // เพิ่มพื้นที่เพิ่มเติมตามต้องการ
    ];

    areas.forEach(areaCoordinates => {
        const areaPolygon = new google.maps.Polygon({
            aths: areaCoordinates,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillOpacity: 0
        });
        areaPolygon.setMap(map);
    });

    // marker = new google.maps.Marker({
    //     map: map,
    //     title: "ตำแหน่งปัจจุบัน"
    // });

    setTimeout(updateLocation, 1000);
}

function toggleLocation() {
    if (marker) {
      // Clear the marker and reset the map center
      marker.setMap(null);
      map.setCenter({ lat: 14.0360620, lng: 100.7316547 });
      marker = null;
    } else {
      // Get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLatLng = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
  
            // Center the map to the user's location
            map.setCenter(userLatLng);
  
            // Add a marker for the user's location
            marker = new google.maps.Marker({
              position: userLatLng,
              map: map,
              title: 'คุณอยู่ที่นี่'
            });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }
  }

// function toggleLocation() {
//     if (marker) {
//         // Clear the marker and reset the map center
//         marker.setMap(null);
//         map.setCenter({ lat: 14.0360620, lng: 100.7316547 });
//         marker = null;
//     } else {
//         // Get user's current location
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     const userLatLng = {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude
//                     };

//                     // Center the map to the user's location
//                     map.setCenter(userLatLng);

//                     // Add a marker for the user's location
//                     marker = new google.maps.Marker({
//                         position: userLatLng,
//                         map: map,
//                         title: 'คุณอยู่ที่นี่'
//                     });
//                 },
//                 (error) => {
//                     console.error('Error getting user location:', error);
//                 }
//             );
//         } else {
//             console.error('Geolocation is not supported by this browser.');
//         }
//     }
// }

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLatLng = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                // Center the map to the user's location
                map.setCenter(userLatLng);

                // Update marker position
                if (marker) {
                    marker.setPosition(userLatLng);
                }
            },
            (error) => {
                console.error('Error getting user location:', error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

