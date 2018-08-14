
function getFirstSelector(selector)
 {
   return document.querySelector(selector);
 }

 function nestedTarget()
 {
   return document.querySelector('#nested .target');
 }

 function deepestChild()
 {
   var grandNode = document.querySelector('#grand-node');


   return deepestNode;
 }

 function increaseRankBy(n)
 {
   var ranks =  document.querySelectorAll('.ranked-list');
   for (var i = 0; i < ranks.length; i++)
   {
     ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
   }
 }
