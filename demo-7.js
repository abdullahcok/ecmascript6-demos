window.onload = function(){
  function* items(){
    var item1 = yield "notebook";
    var item2 = yield "phone";
    var item3 = yield "tablet";
    return "all done";
  }

  var myItems = items();
  console.log(myItems.next(1));
  console.log(myItems.next(1));
  console.log(myItems.next());
  console.log(myItems.next());
}
