<script type="text/javascript">
function wordcount(textarea){
 var chars=textarea.length,
 words=textarea.match(/\w+/g).length;
 document.getElementById('word_count').value=words;
[var rx=/["']?[A-Z][^.?!]+((?![.?!]['"]?\s["']?[A-Z][^.?!]).)+[.?!'"]+/g,;
str.match(rx).join('\
\
')

function countSentence(textarea){
  var str=textarea.length,
  sentence=textarea.match(/[?!.]/g).length;  alert("Number of sentences = "+str.match(/[?!.]/g).length);
   document.getElementById('sentence_count').value=sentence;
    }
<style type="text/css">
body{
display: inline;
font-family: arial, sans serif;
font-size: 20px;
font-style: normal;
color: purple;
background-color:pink;
}
a{
color: white;
}
</style>
</head>
<body>
<form name="demoform" method=”post”>
<center>
<div style="margin-top:15px;"><strong></a></strong><u><strong>Counter</u></strong><div>

<div style="border:3px solid gray;width:250px;height:170px;background-color:gray;margin-top:2px;">
    <table>
     <tr>
       <td><strong>Enter Your Words Below</strong></td>
     </tr>
       <td><strong>Enter the Words in the Textarea</strong></td>
     </tr>
    <tr>
       <td colspan="2"><textarea style="background-color: rgb(238, 255, 238); margin: 2px; height: 93px; padding:2px 0 0 2px;" cols="40" onkeyup="wordcount(this.value)" name="texarea"> </textarea>
       </td>
     </tr>
    <tr>
       <td><label style="margin-left:165px;">Words entered :</label></td>
       <td><input type=text name=words id=word_count size=4 readonly ></td>
     </tr>
    </table>
</div>
</center>
</form>
</body>
</html>
