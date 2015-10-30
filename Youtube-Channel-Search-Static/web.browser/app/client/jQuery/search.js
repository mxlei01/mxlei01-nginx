(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/jQuery/search.js                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
$(document).ready(function () {                                        // 1
    // Initializes the search UI                                       //
    $('.ui.search').search({                                           // 4
        apiSettings: {                                                 // 8
            beforeSend: function (settings) {                          // 10
                // Subscribe to comments collection, and will filter based on the value
                // the user typed in the search box, and also stop the last subscription
                try {                                                  // 14
                    commentSubscribe.stop();                           // 16
                } catch (err) {}                                       //
                commentSubscribe = Meteor.subscribe("comments", $('.ui.search').search('get value'), $('.ui.dropdown').dropdown('get value'));
                                                                       //
                // Changes a header showing the user what was searched
                $('#userSearch').text($('.ui.search').search('get value'));
                                                                       //
                // Add a loading icon to the search bar before we sent our request
                // to the tornado server                               //
                $('.ui.search').addClass("loading");                   // 25
                                                                       //
                // If the dropdown value is 0, it means that we are searching
                // by username, if the dropdown value is 1, then it means we are searching
                // by channel ID                                       //
                if ($('.ui.dropdown').dropdown('get value') == "1") {  // 30
                    // If searching by channel ID, then we will populate the ID portion
                    // of the request                                  //
                    settings.url = settings.url + 'name=&id=' + $('.ui.search').search('get value');
                } else if ($('.ui.dropdown').dropdown('get value') == "0") {
                    // If searching by user name, then we will populate the name portion
                    // of the request                                  //
                    settings.url = settings.url + 'id=&name=' + $('.ui.search').search('get value');
                }                                                      //
                                                                       //
                // returns the setting.url that we have modified       //
                return settings;                                       // 46
            },                                                         //
            // Base URL settings, according to the dropdown, we will either populate a
            // Channel ID or user name, but not both (limitation of youtube API v3)
            url: 'http://localhost:8888/channel?'                      // 50
        }                                                              //
    });                                                                //
                                                                       //
    // Initialize a dropdown, so that users can select between Channel ID, and User Name
    // if dropdown is not initialized, it will not work                //
    $('.ui.dropdown').dropdown({});                                    // 57
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
