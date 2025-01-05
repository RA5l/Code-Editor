function Run (){
    let htmlCode = document.getElementById('htmlCode');
    let cssCode = document.getElementById('cssCode');
    let jsCode = document.getElementById('jsCode');
    let output = document.getElementById('output');

    output.contentDocument.body.innerHTML = 
    htmlCode.value +"<style>"+ cssCode.value +"<style>" ;
    output.contentWindow.eval(jsCode.value) 
}; 

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click',function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
});
