var name = "anon";
function loadLog(){    
    var oldscrollHeight = $(".textBox").attr("scrollHeight")
    $.ajax({
        url: "log.html",
        cache: false,
        success: function(html){       
            $(".textBox").html(html);
            var newscrollHeight = $(".textBox").attr("scrollHeight");
            if(newscrollHeight > oldscrollHeight){
                $(".textBox").animate({ scrollTop: newscrollHeight }, 'normal');
            }     
        }                
    }
)};
function logout(){
    $('.nameInput').remove();
    $('body').append("<input class='nameInput' action='index.php' method ='post' placeholder='Enter your name here', default - 'anon' maxlength='10'></input>");
    name="anon"
    $('.nameInput').keyup(function(eventObject){
            if(event.keyCode == 13){
                name = $(this).val();
                $('.nameInput').remove();
                $('body').append("<p class='nameInput' onclick='logout()'>Logged as: "+name+", click to logout</p>");
            }
    });
}
$(document).ready(function(){
    loadLog();
    setInterval(loadLog,1000)
        $('.nameInput').keyup(function(eventObject){
            if(event.keyCode == 13){
                name = $(this).val();
                $('.nameInput').remove();
                $('body').append("<p class='nameInput' onclick='logout()'>Logged as: "+name+", click to logout</p>");
            }
        });
        $('.textInput').keyup(function(eventObject){
        if(event.keyCode == 13){
            var text = $(this).val();
            var newString = name+':'+text;
            console.log(newString)
            $.post("post.php",{text:newString});
            loadLog();
            $('.textInput').val(""); 
        }
    });
    
});