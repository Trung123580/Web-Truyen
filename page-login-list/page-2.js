   $(document).ready(function () {
      $(".nav__content-item").hide(); //ẩn đi menu item
      $(".nav__content-item:first-child").fadeIn(); //.fadenin hiện thị ra
      $(".nav__tabs li").onclick(function () {
        // active nav tabs
        $(".nav__tabs li").removeClass("active");
        $(this).addClass("active");
        //show tab-conten item
        let id_tab_content = $(this).children("a").attr("href"); //lấy đến thẻ con a //=>attr lấy đến thuộc tính id
        // alert(id_tab_content);
        $(".nav__content-item").hide(); //ẩn đi menu item
        $(id_tab_content).fadeIn();
        return false;
      });
   });

const $$ = document.querySelectorAll.bind(document)
const $ = document.querySelector.bind(document)

const tabs = $$('')

    

var sort_1 = document.querySelector('#sort-1')
var sort_2 = document.querySelector('#sort-2')
sort_1.onclick = function () {
   sort_2.style.display = 'inline';
   sort_1.style.display = 'none';  
}
sort_2.onclick = function () {
   sort_1.style.display = 'inline';
   sort_2.style.display = 'none'
}