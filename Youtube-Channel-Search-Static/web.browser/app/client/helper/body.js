(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/helper/body.js                                               //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.body.helpers({                                                // 1
    commentsCount: function () {                                       // 4
        // get the channel ID that we are querying against, so that we can display
        // this channel ID on front of the webpage                     //
        try {                                                          // 8
            channelId = comments.findOne().channelId;                  // 10
        } catch (err) {}                                               //
                                                                       //
        // subscribe to the user_comments where the channelID is what we recieved from any comments
        // any comments would have the same channelId, and also remove the last subscription
        try {                                                          // 16
            userVideoSubscribe.stop();                                 // 18
        } catch (err) {}                                               //
        try {                                                          // 20
            userVideoSubscribe = Meteor.subscribe("user_video", channelId);
        } catch (err) {}                                               //
                                                                       //
        // Returns the total count of comments for the channel         //
        return comments.find().count();                                // 26
    },                                                                 //
    uniqueUserCount: function () {                                     // 28
        // Returns a unique number of usernames                        //
        return _.uniq(comments.find({}, {                              // 31
            sort: { username: 1 }, fields: { username: true }          // 32
        }).fetch().map(function (x) {                                  //
            return x.username;                                         // 34
        }), true).length;                                              //
    },                                                                 //
    uniqueVideosCount: function () {                                   // 37
        // Returns a unique number of videoId's                        //
        return _.uniq(comments.find({}, {                              // 40
            sort: { videoId: 1 }, fields: { videoId: true }            // 41
        }).fetch().map(function (x) {                                  //
            return x.videoId;                                          // 43
        }), true).length;                                              //
    },                                                                 //
    user_videos: function () {                                         // 46
        // Returns each user's comment's for each video, users[channelId] is an array
        // of user comments.                                           //
        array = [];                                                    // 50
        user_videos.find().forEach(function (users) {                  // 51
            array.push({ '_id': users['_id'], 'videos': users[channelId], 'time': users["dateOfReply"] });
        });                                                            //
        return array;                                                  // 55
    }                                                                  //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
