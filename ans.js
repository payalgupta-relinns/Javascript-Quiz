let click_count=0;
let correct=0;
let res_arr=[];
let ans_arr=["option2","option4","option3","option2","option4"];
function nextques()
{ 
    let val;
   if (click_count==0)
   val="ans1";
   else if(click_count==1)
   val="ans2";
   else if(click_count==2)
   val="ans3";
   else if(click_count==3)
   val="ans4";

   var response=document.querySelector('input[name='+ CSS.escape(val) +']:checked');
   if(response==null && click_count>-1)
   {  document.getElementById("show").style.display="block";
   document.getElementById("show").innerHTML="Please select one answer !";
   }
   else if(response!=null)
   {
    if( document.getElementById("show").innerHTML!="")
    document.getElementById("show").style.display="none";

    var ans=response.value;
    res_arr.push(ans);
    click_count=click_count+1;
    if(click_count==1)
    {   document.getElementById("ques1").style.display="none";
        document.getElementById("ques2").style.display="block";
    }
    else if(click_count==2)
    {
        document.getElementById("ques2").style.display="none";
        document.getElementById("ques3").style.display="block";
    }
    else if(click_count==3)
    {
        document.getElementById("ques3").style.display="none";
        document.getElementById("ques4").style.display="block";
    }
    else if(click_count==4)
    {
        document.getElementById("ques4").style.display="none";
        document.getElementById("ques5").style.display="block";
        document.getElementById("next").style.display="none";
    }
    
   }
   
}

function finish()
{
    var response=document.querySelector('input[name="ans5"]:checked');
    if(response==null && click_count>-1)
   { 
        document.getElementById("show").style.display="block";
        document.getElementById("show").innerHTML="Please select one answer !";
   }
   else if(response!=null)
   {
    var ans=response.value;
    res_arr.push(ans);
   
    for(let i=0;i<res_arr.length;i++)
    {
        if(res_arr[i]==ans_arr[i])
        correct=correct+1;
    }
    if(correct<=2){
    document.getElementById("show").style.display="block";
    document.getElementById("show").innerHTML="Your score is:"+correct+" / 5 ";
    }
    else{
        document.getElementById("show").style.display="block";
        document.getElementById("show").style.color="green";
        document.getElementById("show").innerHTML="Well done! Your score is: "+correct+" / 5 ";;
    }
   }
}

