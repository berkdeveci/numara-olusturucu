$(function(){
    const Input = $("input[name='numara']");
    const Btn = $(".btn");

    function Check(){
        Btn.click(function(){
        if(Input.val().length > 2 || Input.val().length == "" || Input.val() <= 0){
            $(".warn").text("(1-99 arası değer giriniz)").css({
                "color": "red",
                "transform": "translateY(10px)",
                "text-transform": "uppercase",
                "font-weight": "bold"
            })
            Input.css("border", "2px solid red");                 
            $(".btn").prop("disabled", true);
            setTimeout(() => {
                $(".btn").prop("disabled", false)
           }, 1000);
        } else{

            $(".warn").text("");
            Input.css("border", "none");     
            $(".produce").empty();

            if(Input.val() > 10){
                $(".produce").css({
                    "column-count": "4",
                    "column-gap": "122px",
                    "column-rule": "1px solid white"
                })                       
            }else{
                $(".produce").css({
                    "column-count": "",
                    "column-gap": "",
                    "column-rule": ""
                })  
            }
            function Generator(){
                function randomInt(min, max) {
                  return Math.floor(Math.random() * (max - min + 1)) + min;
                }                
                const time = setInterval(() => {
                    $(".produce").each(function(){
                    $(this).append("<p>"+  "+90"+ randomInt(529, 540) +""+ randomInt(100, 999) +""+ randomInt(1000, 9999) + "</p>")
                    $("p:nth-child(" + Input.val() + ")").addClass("active");
                    $(".produce p:nth-child(1)").css("margin-top", "0")
                    if( $("p", this).hasClass("active")){
                        clearInterval(time)
                    }else{
                        //
                    }
                });
                }, 100);
            }
            Generator();
        } 
    })
    }
    Check();
})