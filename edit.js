$(document).ready(function(){

$.ajax({
type: "POST",
url: "allpost.php",
data: 1,
cache: false,
success: function(result){



$.each(result, function(index) {





if(result[index].time>86400)
{
var t = Math.ceil(result[index].time/86400) + ' days ago';
}

else if(result[index].time>3600)
{
var t = Math.ceil(result[index].time/3600) + ' hours ago';
}

else if(result[index].time>60)
{
var t = Math.ceil(result[index].time/60) + ' minutes ago';
}
else
{
var t = Math.ceil(result[index].time) + ' seconds ago';
}
         
if(result[index].uId===4)
{	

$('<div/>',{

         'class' : 'status',
         'html' :  '<div><figure><image class="profile_pic" src="pics/blank.jpeg" alt="profile" style="float:left;margin-left:2%;margin-top:1%;" width="50" height="50" /><figcaption>&nbsp;&nbsp; <a href="user.html?uId='+result[index].uId+'"><span class="name" style="color:#3b5998">'+result[index].fName+' '+result[index].lName+'</span></a><br/>&nbsp;&nbsp; <span class="time" style="font-size:10px;">'+t+' </span></figcaption></figure><br/><br/></div><div style="margin-left:2%;float:left"><p>'
                      +result[index].status+'</p><a href="edit.html" style="float:right;font-size:12px">Edit</a></div>',


    }


    ).appendTo( "div#status" );

	}

	else
	{
		$('<div/>',{

         'class' : 'status',
         'html' :  '<div><figure><image class="profile_pic" src="pics/blank.jpeg" alt="profile" style="float:left;margin-left:2%;margin-top:1%;" width="50" height="50" /><figcaption>&nbsp;&nbsp; <a href="user.html?uId='+result[index].uId+'"><span class="name" style="color:#3b5998">'+result[index].fName+' '+result[index].lName+'</span></a><br/>&nbsp;&nbsp; <span class="time" style="font-size:10px;">'+t+' </span></figcaption></figure><br/><br/></div><div style="margin-left:2%;float:left"><p>'
                      +result[index].status+'</p></div>',


    }


    ).appendTo( "div#status" );	
	}	
            
        });

}
});
});	