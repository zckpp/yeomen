  var switchTabs = (function() {
    var buttons = $('.switchable-tabs-controls');
    var tabs = $('.switchable-tabs > div');

    buttons.each(function(){
      $(this).find('button').click(function(){
        var target = $(this).attr('data-target');
        var targetFiltered = '.' + target;
        buttons.find('button').removeClass('-active');
        $(this).addClass('-active');
        tabs.hide();
        $(targetFiltered).show();
      });
    });

    //mobile Tabs
    $('.Select-link').click(function () {
      var target = $(this).attr('href');
      var targetFiltered = '.' + target;
      buttons.find('button').removeClass('-active');
      $(this).addClass('-active');
      tabs.hide();
      $(targetFiltered).show();
    });
  })();