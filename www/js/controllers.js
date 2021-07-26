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
    shortdetail: 'Amacımız size her zaman daha iyi hizmet verebilmektir. Bu nedenle görüş ve önerilerinize çok değer veriyor; ürün ve hizmetlerimizi geliştirmeye yönelik çalışmalarımızda titizlikle değerlendiriyoruz.' ,
    detail: 'Akbank, 30 Ocak 1948 tarihinde özel sermayeli bir ticaret bankası statüsünde Adana’da kurulmuştur. Kuruluş amacı bölgedeki pamuk üreticilerine finansman sağlamak olan Akbank, ilk İstanbul şubesini, 14 Temmuz 1950’de Sirkeci’de açmıştır. 1954 yılında Genel Müdürlüğü’nün İstanbul’a taşınmasının ardından şube sayısını hızla artıran Akbank, 1963 yılında tüm bankacılık işlemlerinde otomasyona geçmiştir.', 
    img:'/img/akbtw.gif', 
    tel:"4440444",
    id: 0},
    { firm_title: 'Turkiye Is Bankasi', 
    shortdetail: 'Lider, öncü ve güvenilir banka konumunu bölgesel finansal güç olarak sürdürerek, müşterilerin, hissedarların ve çalışanların en çok tercih ettikleri banka olmak',
    detail: 'Vizyon ve amaçlarımıza ulaşmak üzere “müşteriye en yakın banka olma temeline dayalı sorunsuz sürdürülebilir kârlı büyüme”dir.', 
    img:'/img/isbankasi2.gif',
    tel:"4440444",
    id: 1},
    { firm_title: 'Garanti Bankasi',
    shortdetail:'Avrupa`da en iyi banka olmak.', 
    detail: '1946 yılında Ankara`da kurulan Garanti Bankası, 31 Aralık 2016 tarihi itibarıyla 312,1 milyar Türk Lirası`na ulaşan konsolide aktif büyüklüğü ile Türkiye`nin en büyük ikinci özel bankası konumunda.',
    img:'/img/garanti.gif', 
    tel:"4440444",
    id: 2 },
    { firm_title: 'Ziraat Bankasi', 
    shortdetail: 'Ziraat Bankası olarak, geçmişte olduğu gibi günümüzde de Türkiye`nin Bankacılık sektörünü şekillendirmeye devam ediyoruz.',
    detail: 'Türkiye’de ve dünyanın her yerinde yaygın, güvenilir ve aynı kalitede hizmet sunan, herkesin ve her kesimin bankası olan, müşteri ve insan kaynağını en değerli aktifi olarak kabul eden, köklü geçmişine yakışır şekilde sürekli olarak fark ve değer yaratan, rakiplerinin örnek aldığı, her aşamada bir bankadan daha fazlasını vaat eden, evrensel, saygın ve piyasa değeri yüksek, lider banka olmaktır.', 
    img:'/img/ziraat.png',
    tel:"4440444", 
    id: 3 },
    { firm_title: 'VakıfBank', 
    shortdetail:'Bölgesinin en iyi, en çok tercih edilen ve değer yaratan bankası olmak.',
    detail: '1954 yılında, vakıf kaynaklarını ekonomik kalkınmanın gereksinimleri doğrultusunda en iyi biçimde değerlendirmek amacıyla kurulan VakıfBank, o günden bu yana çağdaş bankacılık yöntemleri ve uygulamalarıyla Türkiye’nin tasarruf düzeyinin gelişim sürecine katkıda bulunmaktadır. ', 
    img:'/img/vakif.gif',
    tel:"4440444", 
    id: 4 },
    { firm_title: 'YapiKredi',
     shortdetail: 'Finans sektörünün tartışmasız lideri olmak',
     detail: 'Türkiye finans sektörünün iki güçlü ve köklü kurumu olan Yapı ve Kredi Bankası A.Ş. ve Koçbank A.Ş.`nin güçlerini, tecrübelerini ve kaynaklarını bir araya getirerek daha iyisini sunmak için yarattığı birliktelikle yeni oluşumunu 2006 yılında tamamlayan Yapı Kredi, bugün her iki kurumun tarihini ve ortak değerlerini içeren bir finans devi haline gelmiştir.', 
     img:'/img/yapikredi.gif',
     tel:"4440444", 
     id: 5 },
    { firm_title: 'FinansBank',
    shortdetail:'Türkiye`yi başarıya taşıyacak her bireysel ve ticari finansal planın mimarı olmak.', 
    detail: 'Finansbank A.Ş, 26 Ekim 1987 tarihinde Hüsnü Özyeğin`in önderliğinde 4 milyon dolar ödenmiş sermaye ile kurulmuştur. Gerek kurucusu gerekse liderlik takımıyla o dönem kurulan bankalardan temel felsefe ve bankacılığa bakış açısıyla ayrışmış; profesyonel bankacıların hayata geçirdiği, akıllı bankacılığın icra edildiği bir başarı öyküsüne dönüşmüştür.', 
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
