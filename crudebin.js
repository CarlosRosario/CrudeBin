var isHTMLPanelShowing = true;
$("#htmlButton").click(function(){
    if(isHTMLPanelShowing == false){
        $("#htmlPanel").css({"display": "block"});
        isHTMLPanelShowing = true;
    }
    else {
        $("#htmlPanel").css("display", "none");
        isHTMLPanelShowing = false;
    }
});

var isCSSPanelShowing = false;
$("#cssButton").click(function(){
    if(isCSSPanelShowing == false){
        $("#cssPanel").css({"display": "block"});
        isCSSPanelShowing = true;
    }
    else {
        $("#cssPanel").css("display", "none");
        isCSSPanelShowing = false;
    }
});

var isJSPanelShowing = false;
$("#javascriptButton").click(function(){
    if(isJSPanelShowing == false){
        $("#javascriptPanel").css({"display": "block"});
        isJSPanelShowing = true;
    }
    else {
        $("#javascriptPanel").css("display", "none");
        isJSPanelShowing = false;
    }
});

var isOutputPanelShowing = true;
$("#outputButton").click(function(){
    if(isOutputPanelShowing == false){
        $("#outputPanel").css({"display": "block"});
        isOutputPanelShowing = true;
    }
    else {
        $("#outputPanel").css("display", "none");
        isOutputPanelShowing = false;
    }
});

$(".yummyButton").hover(function(){
    $(this).addClass("highlightedYummyButton");
}, function(){
    $(this).removeClass("highlightedYummyButton");
});

$(".yummyButton").click(function(){
    $(this).toggleClass("yummyActiveButton");
    $(this).toggleClass("yummyInactiveButton");
    $(this).removeClass("highlightedYummyButton")
});

$("#htmlText").val("<p>HELLO WORLD!</p>");
$("#cssText").val("p {\n\tfont-weight:bold;\n}");
updateOutput();




$(".codeInput").on('change keyup paste', function() {
    updateOutput();
});

function updateOutput() {
    $("#outputPanel").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssText").val() + "</style></head><body>" + $("#htmlText").val() + "</body></html>");
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptText").val());
}

