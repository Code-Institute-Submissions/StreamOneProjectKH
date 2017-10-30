// function DateForBlog() {
// 	var theDate = new Date();
// 	var dateFormat = theDate.getDate() + '/' + theDate.getMonth() + '/' theDate.getFullYear();

// 	return dateFormat.toLocaleDateString();

// }

var dateDec = new Date("23 Oct 2017");
var theDate = dateDec.toDateString();
console.log(theDate);
console.log(dateDec);
document.getElementById('dateForBlog').innerHTML = theDate;
//document.getElementById('blogFrame').contentWindow.document.getElementById('dateForBlog').innerHTML = theDate;

// $(document).ready(function(){
// 	var dateDec = new Date("23 Oct 2017");
// 	var theDate = dateDec.toDateString();

//  	$('#dateForBlog').val(theDate);
//  	console.log(theDate);
// });


// function blgDate(obj){
// 	var d = new Date(23 Oct 2017);
// 	obj.innerHTML = d;
// }

// $document.ready(function(){
// 	$(".blogHead").mouseenter(function(){
// 		$(".blogHead").addClass("blue");
// 	});
// });

function blogOver(obj){
	obj.style.backgroundColor = "#ffffff"
}
function blogOut(obj){
	obj.style.backgroundColor = ""
}