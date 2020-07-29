// Chat JS
    var chatMessages = [{
        name: "ms1",
        msg: "Hello! <br> How Are You?",
        delay: 500,
        align: "right",
        showTime: false,
        time: "19:58"
    },
    {
        name: "ms2",
        msg: "Fine☺ <br> How Can I Help You?",
        delay: 500,
        align: "left",
        showTime: false,
        time: "19:58"
    },
    {
        name: "ms3",
        msg: "Good! <br> How To Create ChatBot?",
        delay: 500,
        align: "right",
        showTime: false,
        time: "19:58"
    },
    {
        name: "ms4",
        msg: "Ok, Let's Start",
        delay: 500,
        align: "left",
        showTime: false,
        time: "19:58"
    },
    {
        name: "ms5",
        msg: "And the longer version?",
        delay: 500,
        align: "right",
        showTime: false,
        time: "19:58"
    },
    {
        name: "ms6",
        msg: "Yes are welcome!",
        delay: 500,
        align: "left",
        showTime: false,
        time: "19:58"
    },
    {
        name: "ms7",
        msg: "Hello! <br> How Are You?",
        delay: 500,
        align: "right",
        showTime: false,
        time: "19:58"
    },
    {
        name: "ms8",
        msg: "Fine☺ <br> How Can I Help You?",
        delay: 500,
        align: "left",
        showTime: false,
        time: "19:58"
    },
    {
        name: "ms9",
        msg: "Good! <br> How To Create ChatBot?",
        delay: 500,
        align: "right",
        showTime: false,
        time: "19:58"
    },
    {
        name: "ms10",
        msg: "Ok, Let's Start",
        delay: 500,
        align: "left",
        showTime: false,
        time: "19:58"
    },
    {
        name: "ms11",
        msg: "And the longer version?",
        delay: 500,
        align: "right",
        showTime: false,
        time: "19:58"
    },
    {
        name: "ms12",
        msg: "Yes are welcome!",
        delay: 500,
        align: "left",
        showTime: false,
        time: "19:58"
    }

                       ];
    var chatDelay = 0;

    function onRowAdded() {
      $('.chat-container').animate({
        scrollTop: $('.chat-container').prop('scrollHeight')
      });
    };
    $.each(chatMessages, function(index, obj) {
      chatDelay = chatDelay + 2000;
      chatDelay2 = chatDelay + obj.delay;
      chatDelay3 = chatDelay2 + 10;
      scrollDelay = chatDelay;
      chatTimeString = " ";
      msgname = "." + obj.name;
      msginner = ".messageinner-" + obj.name;
      spinner = ".sp-" + obj.name;
      if (obj.showTime == true) {
        chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
      }
      $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hide><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hide><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
      $(msgname).delay(chatDelay).fadeIn();
      $(spinner).delay(chatDelay2).hide(1);
      $(msginner).delay(chatDelay3).fadeIn();
      setTimeout(onRowAdded, chatDelay);
      setTimeout(onRowAdded, chatDelay3);
      chatDelay = chatDelay3;
    });
