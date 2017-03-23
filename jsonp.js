$(document).ready(function(){

      $("#fuenla").click(function(){
            setScript("fuenlabrada");
      });

      $("#clear").click(function(){
            $("#media").html("");
      });

      $("#category").click(function(){
            var categories = $("#list").val();
            categories = categories.split(" ");

            for (var i = 0 ; i < categories.length; i++) {
                  setScript(categories[i]);
            }
      });
});

function f(jsonp) {
      var items = jsonp.items;

      $("#media").append("<h2>" + jsonp.title + "</h2>")
      for (var i = 0 ; i < items.length; i++) {
            setImage(items[i].media.m);
      }
}

var setImage = function (src) {
      $("#media").append('<img src="' + src + '"> </img>');
}

var setScript = function (category) {
      $("#media").html("");

      $("head").append('<script type="text/javascript" charset="utf-8" \
      src="http://api.flickr.com/services/feeds/photos_public.gne?tags=' + category + '&tagmode=any&format=json&jsoncallback=f"></script>');
}
