angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup) {


  $scope.username = localStorage.getItem('username');
  $scope.User_Id = 0;

  $scope.ClicksOfLike = 145;
  $scope.ButtonStatus = 0;
  $scope.ButtonColour = "calm";
  $scope.Like = "heart-outline";

  $scope.Click = function(){
    console.log("You clicked me...");
    if($scope.ButtonStatus == 0){
      $scope.ClicksOfLike = $scope.ClicksOfLike+1;
      $scope.ButtonStatus = 1;
      $scope.ButtonColour = "assertive";
      $scope.Like = "heart";

    }
    else{
      $scope.ClicksOfLike = $scope.ClicksOfLike-1;
      $scope.ButtonStatus = 0;
      $scope.ButtonColour ="calm";
      $scope.Like = "heart-outline";
    }
  }

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    localStorage.setItem('username',$scope.loginData.username);
    $scope.username = localStorage.getItem('username');

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  // Form data for the Register modal
  $scope.RegisterData = {};

  // Create the Register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/register.html', {
    scope: $scope
  }).then(function(modalRegister) {
    $scope.modalRegister = modalRegister;
  });

  // Triggered in the Register modal to close it
  $scope.closeRegister = function() {
    $scope.modalRegister.hide();
  };

  // Open the Register modal
  $scope.Register = function() {
    $scope.modalRegister.show();
  };

  // Perform the Register action when the user submits the Register form
  $scope.doRegister = function() {
    console.log('Doing Register', $scope.RegisterData);
    localStorage.setItem('username',$scope.RegisterData.username);
    $scope.username = localStorage.getItem('username');
    $scope.showPopup();

    // Simulate a Register delay. Remove this and replace with your Register
    // code if using a Register system
    $timeout(function() {
      $scope.closeRegister();
    }, 1000);
  };

  $scope.showPopup = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'You registered successfully',
      template: 'Thanks for Registration'
    });
  }

})

.controller('PlaylistsCtrl', function($scope , $rootScope, $http) {
  $http.get('http://edu.birbilenesor.com.tr/teknopark/Berk/json_db.php')
  .success(function(data)
  {
    $rootScope.firmalar = data;
    console.log("Gelen Data" + $rootScope.firmalar);
  });
  /*$rootScope.firms = [
     { firm_title: 'Akbank',
    shortdetail: 'Amac??m??z size her zaman daha iyi hizmet verebilmektir. Bu nedenle g??r???? ve ??nerilerinize ??ok de??er veriyor; ??r??n ve hizmetlerimizi geli??tirmeye y??nelik ??al????malar??m??zda titizlikle de??erlendiriyoruz.' ,
    detail: 'Akbank, 30 Ocak 1948 tarihinde ??zel sermayeli bir ticaret bankas?? stat??s??nde Adana???da kurulmu??tur. Kurulu?? amac?? b??lgedeki pamuk ??reticilerine finansman sa??lamak olan Akbank, ilk ??stanbul ??ubesini, 14 Temmuz 1950???de Sirkeci???de a??m????t??r. 1954 y??l??nda Genel M??d??rl?????????n??n ??stanbul???a ta????nmas??n??n ard??ndan ??ube say??s??n?? h??zla art??ran Akbank, 1963 y??l??nda t??m bankac??l??k i??lemlerinde otomasyona ge??mi??tir.', 
    img:'/img/akbtw.gif', 
    tel:"4440444",
    id: 0},
    { firm_title: 'Turkiye Is Bankasi', 
    shortdetail: 'Lider, ??nc?? ve g??venilir banka konumunu b??lgesel finansal g???? olarak s??rd??rerek, m????terilerin, hissedarlar??n ve ??al????anlar??n en ??ok tercih ettikleri banka olmak',
    detail: 'Vizyon ve ama??lar??m??za ula??mak ??zere ???m????teriye en yak??n banka olma temeline dayal?? sorunsuz s??rd??r??lebilir k??rl?? b??y??me???dir.', 
    img:'/img/isbankasi2.gif',
    tel:"4440444",
    id: 1},
    { firm_title: 'Garanti Bankasi',
    shortdetail:'Avrupa`da en iyi banka olmak.', 
    detail: '1946 y??l??nda Ankara`da kurulan Garanti Bankas??, 31 Aral??k 2016 tarihi itibar??yla 312,1 milyar T??rk Liras??`na ula??an konsolide aktif b??y??kl?????? ile T??rkiye`nin en b??y??k ikinci ??zel bankas?? konumunda.',
    img:'/img/garanti.gif', 
    tel:"4440444",
    id: 2 },
    { firm_title: 'Ziraat Bankasi', 
    shortdetail: 'Ziraat Bankas?? olarak, ge??mi??te oldu??u gibi g??n??m??zde de T??rkiye`nin Bankac??l??k sekt??r??n?? ??ekillendirmeye devam ediyoruz.',
    detail: 'T??rkiye???de ve d??nyan??n her yerinde yayg??n, g??venilir ve ayn?? kalitede hizmet sunan, herkesin ve her kesimin bankas?? olan, m????teri ve insan kayna????n?? en de??erli aktifi olarak kabul eden, k??kl?? ge??mi??ine yak??????r ??ekilde s??rekli olarak fark ve de??er yaratan, rakiplerinin ??rnek ald??????, her a??amada bir bankadan daha fazlas??n?? vaat eden, evrensel, sayg??n ve piyasa de??eri y??ksek, lider banka olmakt??r.', 
    img:'/img/ziraat.png',
    tel:"4440444", 
    id: 3 },
    { firm_title: 'Vak??fBank', 
    shortdetail:'B??lgesinin en iyi, en ??ok tercih edilen ve de??er yaratan bankas?? olmak.',
    detail: '1954 y??l??nda, vak??f kaynaklar??n?? ekonomik kalk??nman??n gereksinimleri do??rultusunda en iyi bi??imde de??erlendirmek amac??yla kurulan Vak??fBank, o g??nden bu yana ??a??da?? bankac??l??k y??ntemleri ve uygulamalar??yla T??rkiye???nin tasarruf d??zeyinin geli??im s??recine katk??da bulunmaktad??r. ', 
    img:'/img/vakif.gif',
    tel:"4440444", 
    id: 4 },
    { firm_title: 'YapiKredi',
     shortdetail: 'Finans sekt??r??n??n tart????mas??z lideri olmak',
     detail: 'T??rkiye finans sekt??r??n??n iki g????l?? ve k??kl?? kurumu olan Yap?? ve Kredi Bankas?? A.??. ve Ko??bank A.??.`nin g????lerini, tecr??belerini ve kaynaklar??n?? bir araya getirerek daha iyisini sunmak i??in yaratt?????? birliktelikle yeni olu??umunu 2006 y??l??nda tamamlayan Yap?? Kredi, bug??n her iki kurumun tarihini ve ortak de??erlerini i??eren bir finans devi haline gelmi??tir.', 
     img:'/img/yapikredi.gif',
     tel:"4440444", 
     id: 5 },
    { firm_title: 'FinansBank',
    shortdetail:'T??rkiye`yi ba??ar??ya ta????yacak her bireysel ve ticari finansal plan??n mimar?? olmak.', 
    detail: 'Finansbank A.??, 26 Ekim 1987 tarihinde H??sn?? ??zye??in`in ??nderli??inde 4 milyon dolar ??denmi?? sermaye ile kurulmu??tur. Gerek kurucusu gerekse liderlik tak??m??yla o d??nem kurulan bankalardan temel felsefe ve bankac??l????a bak???? a????s??yla ayr????m????; profesyonel bankac??lar??n hayata ge??irdi??i, ak??ll?? bankac??l??????n icra edildi??i bir ba??ar?? ??yk??s??ne d??n????m????t??r.', 
    img:'/img/finansbank.gif',
    tel:"4440444", 
    id: 6 }
  ];*/
})

.controller('PlaylistCtrl', function($scope, $stateParams, $rootScope) {
  
  console.log("json data :" +$rootScope.firms[$stateParams.playlistId].firm_title);
  
  $scope.firm_title = $rootScope.firms[$stateParams.playlistId].firm_title;
  $scope.firm_logo = $rootScope.firms[$stateParams.playlistId].img;
  $scope.firm_shortdetail = $rootScope.firms[$stateParams.playlistId].shortdetail;
  $scope.firm_tel = $rootScope.firms[$stateParams.playlistId].tel;
  $scope.firm_img = $rootScope.firms[$stateParams.playlistId].img;

  
});
