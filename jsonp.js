$(document).ready(function(){
      $("#fuenla").click(function(){
            $("head").append('<script type="text/javascript" charset="utf-8" \
            src="http://api.flickr.com/services/feeds/photos_public.gne?tags=fuenlabrada&tagmode=any&format=json&jsoncallback=f"></script>');
      });
});

function f(jsonp) {
      var items = jsonp.items;
      
      $("#media").html("");
      for (var i = 0 ; i < items.length; i++) {
            $("#media").append('<img src="' + items[i].media.m + '"> </img>');
      }
}
