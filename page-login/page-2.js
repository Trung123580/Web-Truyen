//    $(document).ready(function () {
//       $(".nav__content-item").hide(); //ẩn đi menu item
//       $(".nav__content-item:first-child").fadeIn(); //.fadenin hiện thị ra
//       $(".nav__tabs li").click(function () {
//         // active nav tabs
//         $(".nav__tabs li").removeClass("active");
//         $(this).addClass("active");
//         //show tab-conten item
//         let id_tab_content = $(this).children("a").attr("href"); //lấy đến thẻ con a //=>attr lấy đến thuộc tính id
//         // alert(id_tab_content);
//         $(".nav__content-item").hide(); //ẩn đi menu item
//         $(id_tab_content).fadeIn();
//         return false;
//       });
//     });