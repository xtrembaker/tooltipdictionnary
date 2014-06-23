require([
  'jquery',
  'tooltip'
//  'dico'
], function(){
//  console.log($.fn.jquery);
  
  
  //
  
  jQuery('.livedico').tooltip({
    items : 'span[class]',
    content : function(){
      var text = $(this).text();
      return "<iframe src='http://en.wiktionary.org/wiki/"+text+"' height='800' width='800'></iframe>"
      return text;      
    }
  });
});