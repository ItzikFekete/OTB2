var dirt1 = document.querySelector('.dirt1');
var dirt2 = document.querySelector('.dirt2');
var dirt3 = document.querySelector('.dirt3');
var dirt4 = document.querySelector('.dirt4');
var dirt5 = document.querySelector('.dirt5');
var dirt6 = document.querySelector('.dirt6');

$(".dirt1").hover(
  function () {
    $(this).append($("<span> HTML = HyperText Markup Language <br> This is what is seen on any page <br> With HTML a programmer would post everything. This is the very minimum basic <br> In advacnce stages a programmer would write HTML in many other languages </span>"));
  },
  function () {
    $(this).find("span:last").remove();
  });
$(".dirt1.fade").hover(function () {
  $(this).fadeOut(10);
  $(this).fadeIn(5000);
});

$(".dirt2").hover(
  function () {
    $(this).append($("<span>CSS = Cascading Style Sheets <br> In order to write CSS, a person has top have a link from their HTML page. <br> In CSS a programmer would add to the above HTML, style and design. <br> In advance stages of CSS, a computer designer would add movement, etc. <br> A Programmer can implement CSS in other languages </span>"));
  },
  function () {
    $(this).find("span:last").remove();
  });
$(".dirt2.fade").hover(function () {
  $(this).fadeOut(10);
  $(this).fadeIn(5000);
});

$(".dirt3").hover(
  function () {
    $(this).append($("<span>JAVASCRIPT <br> JAVASCRIPT is primarily a front end programming language, where a lot of the cool and exciting features are added. <br> JAVASCRIPT (JS) has a lot of frameworks and libraries, some are used for frond end and some for back end <br> Some of the ones that I am familiar with are (although only on a junior level) REACT.JS, ANGULAR.JS, JSON, JQUERY<span>There are a few ways to add the above extensions, to enable there use. I personally like to use NPM, which I access from the terminal (command prompt)</span></span>"));
  },
  function () {
    $(this).find("span:last").remove();
  });
$(".dirt3.fade").hover(function () {
  $(this).fadeOut(10);
  $(this).fadeIn(5000);
});
$(".dirt4").hover(
  function () {
    $(this).append($("<span> C# = C SHARP <br> C# is my, personal, first love. (I started in the console app). <br> C# is primarily a back end language <br> ASP.NET is one of many frameworks of C# and I love to use the MVC app. As this allowes me to use all of the top 3 language for front end (including some of JS libraries and frameworks) <br> Within ASP.NET, a programmer can use Entity Framework (a lightweight format of SQL) or SQL (explained in the next one) and if used in MVC, a programmer can use front end (top 3) to modify and add to the display </span>"));
  },
  function () {
    $(this).find("span:last").remove();
  });
$(".dirt4.fade").hover(function () {
  $(this).fadeOut(10);
  $(this).fadeIn(5000);
});

$(".dirt5").hover(
  function () {
    $(this).append($("<span> SQL= Structured Query Language <br> This is the most common format of creating and controlling databases(DB). <br> different DB's use the structure and some syntax of SQL <br> My personal preference (I studied it from Microsoft Assistant Learning) is MSSQL. This, as mentioned above, has a lot of similarities to MySQL but, obviously every langage has its differences.</span>"));
  },
  function () {
    $(this).find("span:last").remove();
  });
$(".dirt5.fade").hover(function () {
  $(this).fadeOut(10);
  $(this).fadeIn(5000);
});

$(".dirt6").hover(
  function () {
    $(this).append($("<span>RUBY= a language I would like to Learn <p> XML = Extensible Markup Language. <br> XML has a lot of the same syntax as HTML, it is used for display. <br> I have used it in my studies of Android Apps (a Scholarship from Google) </p> <p> JAVA= a different programming language, I have only studied it a little when developing Android Apps. </p></span>"));
  },
  function () {
    $(this).find("span:last").remove();
  });
$(".dirt6.fade").hover(function () {
  $(this).fadeOut(10);
  $(this).fadeIn(5000);
});

document.querySelector('.clear').addEventListener('click', function () {
  document.querySelector('.dirt1').style.display = 'none';
  document.querySelector('.dirt2').style.display = 'none';
  document.querySelector('.dirt3').style.display = 'none';
  document.querySelector('.dirt4').style.display = 'none';
  document.querySelector('.dirt5').style.display = 'none';
  document.querySelector('.dirt6').style.display = 'none';
});
document.querySelector('.d1').style.display = 'none';
document.querySelector('.d2').style.display = 'none';
document.querySelector('.d3').style.display = 'none';
document.querySelector('.d4').style.display = 'none';
document.querySelector('.d5').style.display = 'none';
document.querySelector('.d6').style.display = 'none';
 

document.querySelector('.dice2').addEventListener('click', function () {
var diceRoll= Math.floor(Math.random()*6+1); 
  
  if (diceRoll===1) {
    d11.src = "img/dices/dice1.png";
    document.querySelector('.dirt1').style.display = 'block';
    $('.result').append('<center><img src="img/dices/dice1.png" height="45"> <br><strong>1</strong> <p> Pleasae see above what it is displayed, when you hover</p>');

  } else if (d11===2) {
    document.querySelector('.dirt1').style.display = 'block';
    document.querySelector('.dirt2').style.display = 'block';
    document.querySelector('.dirt3').style.display = 'block';
    $('.result').append('<center><img src="img/dices/dice2.png" height="45"> <br><strong>2</strong> <p> You will see above A B C are displayed when you hover</p>');
  } else if (dice2 = d3) {
    $('.result').append('<center><img src="img/dices/dice3.png" height="45"><br><strong>2</strong> <p> Please see above random three will show up</p> ');
    treasureMix2.style.display = 'block';
  }
});
