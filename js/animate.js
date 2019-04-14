$("#menu ul li i").click(function (e) { 
    e.preventDefault();
    
    if($(this).parent().index() !== 0) {
        $("#menu").addClass("-bg-change");
    }
    else $("#menu").removeClass("-bg-change");

    if(!$(this).hasClass("zoom")) {
        
        $("#menu ul li i").removeClass("zoom");

        $(this).addClass("zoom");

        let idx = $(this).parent().index();

        $(".active")
            .addClass("hidden-from-left-to-right")
            .one('webkitAnimationEnd', function(){

            $(".hidden-from-left-to-right").removeClass("hidden-from-left-to-right");
            

        });
        //console.log(idx);
        $(`.slide:nth-child(${idx+1})`)
            .addClass("visiable-from-right-to-left")
            .one('webkitAnimationEnd', function(){
                $(".active").removeClass("active");
                
                $(".visiable-from-right-to-left").addClass("active").removeClass("visiable-from-right-to-left");
                
        });
    }
});