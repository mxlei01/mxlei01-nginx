(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw('<!-- top menu bar -->\n    <div class="ui pointing menu">\n        <!-- chosen the dropdown and search to appear on the left -->\n        <div class="left menu">\n            <!-- dropdown and search belongs to one item -->\n            <div class="item">\n                <!-- the type of dropdown is a selection type -->\n                <div class="ui selection dropdown">\n                    <input name="type" type="hidden" value="">\n                    <i class="dropdown icon"></i>\n                    <div class="default text">Search Type</div>\n                    <!-- let the user change search type between channel ID or user name-->\n                    <div class="menu">\n                        <div class="item" data-value="1">Channel ID</div>\n                        <div class="item" data-value="0">User Name</div>\n                    </div>\n                </div>\n                <!-- search menu for the user to type in text so that we can execute our search based\n                     on the text -->\n                <!-- Note: Use ui transparent loading icon input to show a loading icon-->\n                <div class="ui search">\n                    <div class="ui left icon input">\n                        <input class="prompt" type="text" placeholder="Search Youtube" value="">\n                        <i class="icon"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- shows the user a large header for the channel ID or the User name typed in -->\n    <div class="ui segment">\n        <h1 id="userSearch"></h1>\n    </div>\n    <!-- shows the user some statistics returned by the search -->\n    '), HTML.DIV({
    "class": "ui segment"
  }, "\n        ", HTML.DIV({
    "class": "ui three statistics"
  }, "\n            ", HTML.Raw("<!-- Shows the user the number of unique users -->"), "\n            ", HTML.DIV({
    "class": "statistic"
  }, "\n                ", HTML.DIV({
    "class": "value"
  }, "\n                    ", Blaze.View("lookup:uniqueVideosCount", function() {
    return Spacebars.mustache(view.lookup("uniqueVideosCount"));
  }), "\n                "), "\n                ", HTML.Raw('<div class="label">\n                    Videos\n                </div>'), "\n            "), "\n            ", HTML.Raw("<!-- Shows the user the number of unique videos -->"), "\n            ", HTML.DIV({
    "class": "statistic"
  }, "\n                ", HTML.DIV({
    "class": "value"
  }, "\n                    ", Blaze.View("lookup:uniqueUserCount", function() {
    return Spacebars.mustache(view.lookup("uniqueUserCount"));
  }), "\n                "), "\n                ", HTML.Raw('<div class="label">\n                    Users\n                </div>'), "\n            "), "\n            ", HTML.Raw("<!-- Shows the user the number of comments -->"), "\n            ", HTML.DIV({
    "class": "statistic"
  }, "\n                ", HTML.DIV({
    "class": "value"
  }, "\n                    ", Blaze.View("lookup:commentsCount", function() {
    return Spacebars.mustache(view.lookup("commentsCount"));
  }), "\n                "), "\n                ", HTML.Raw('<div class="label">\n                    Comments\n                </div>'), "\n            "), "\n        "), "\n    "), "\n    ", HTML.DIV({
    "class": "ui segment"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("user_videos"));
  }, function() {
    return [ "\n            ", Spacebars.include(view.lookupTemplate("user_video")), "\n        " ];
  }), "\n    ") ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("user_video");
Template["user_video"] = new Template("Template.user_video", (function() {
  var view = this;
  return HTML.DIV({
    "class": "html ui top attached segment"
  }, "\n        ", HTML.DIV({
    "class": "ui comments"
  }, "\n            ", HTML.H3({
    "class": "ui dividing header"
  }, Blaze.View("lookup:_id", function() {
    return Spacebars.mustache(view.lookup("_id"));
  })), "\n            ", HTML.DIV({
    "class": "comment"
  }, "\n                ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("videos"));
  }, function() {
    return [ "\n                ", HTML.DIV({
      "class": "content"
    }, "\n                    ", HTML.A({
      "class": "author"
    }, Blaze.View("lookup:videoName", function() {
      return Spacebars.mustache(view.lookup("videoName"));
    })), "\n                    ", HTML.DIV({
      "class": "metadata"
    }, "\n                        ", HTML.SPAN({
      "class": "date"
    }, Blaze.View("lookup:time", function() {
      return Spacebars.mustache(view.lookup("time"));
    })), "\n                    "), "\n                    ", HTML.DIV({
      "class": "text"
    }, "\n                        ", Blaze.View("lookup:comment", function() {
      return Spacebars.mustache(view.lookup("comment"));
    }), "\n                    "), "\n                "), "\n                " ];
  }), "\n            "), "\n        "), "\n    ");
}));

}).call(this);