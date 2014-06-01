//main script

var yhc = (function(){
    var self = {};

    self.PLAYER = "#player-api";
    
    self.setContent = function () {
        var player = $(self.PLAYER);

        chrome.storage.sync.get({
            targetSite: 'https://icoxfog417.github.io/YourHybridcast/'
        }, function (items) {
            var $overlay = $("<iframe src='" + items.targetSite + "'></iframe>");
            $overlay.width(player.width());
            $overlay.height(player.height() - 38);
            $overlay.css({ "position": "absolute", "top": player.position().top, "left": player.position().left });
            $(body).append($overlay);
        });

    }

    return self;

})();

$(function () {
    
    yhc.setContent();

})
