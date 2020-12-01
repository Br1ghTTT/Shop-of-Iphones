function theSearch() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }



function forI7(){
      document.getElementById("i7").style.display = "block";
      document.getElementById("i8").style.display = "none";
      document.getElementById("iX").style.display = "none";
      document.getElementById("i11").style.display = "none";
      document.getElementById("i12").style.display = "none";
      return false;
    }

function forI8(){
    document.getElementById("i7").style.display = "none";
    document.getElementById("i8").style.display = "block";
    document.getElementById("iX").style.display = "none";
    document.getElementById("i11").style.display = "none";
    document.getElementById("i12").style.display = "none";
    return false;
  }

function forIX(){
    document.getElementById("i7").style.display = "none";
    document.getElementById("i8").style.display = "none";
    document.getElementById("iX").style.display = "block";
    document.getElementById("i11").style.display = "none";
    document.getElementById("i12").style.display = "none";
    return false;
  }

function forI11(){
    document.getElementById("i7").style.display = "none";
    document.getElementById("i8").style.display = "none";
    document.getElementById("iX").style.display = "none";
    document.getElementById("i11").style.display = "block";
    document.getElementById("i12").style.display = "none";
    return false;
  }

function forI12(){
    document.getElementById("i7").style.display = "none";
    document.getElementById("i8").style.display = "none";
    document.getElementById("iX").style.display = "none";
    document.getElementById("i11").style.display = "none";
    document.getElementById("i12").style.display = "block";
    return false;
  }

function forAll(){
    document.getElementById("i7").style.display = "block";
    document.getElementById("i8").style.display = "block";
    document.getElementById("iX").style.display = "block";
    document.getElementById("i11").style.display = "block";
    return false;
  }

function forA1(){
  document.getElementById("a1").style.display = "block";
  document.getElementById("a2").style.display = "none";
  document.getElementById("a3").style.display = "none";
  return false;
}
function forA2(){
  document.getElementById("a1").style.display = "none";
  document.getElementById("a2").style.display = "block";
  document.getElementById("a3").style.display = "none";
  return false;
}
function forA3(){
  document.getElementById("a1").style.display = "none";
  document.getElementById("a2").style.display = "none";
  document.getElementById("a3").style.display = "block";
  return false;
}
function forAllAir(){
  document.getElementById("a1").style.display = "block";
  document.getElementById("a2").style.display = "block";
  document.getElementById("a3").style.display = "block";
  return false;
}