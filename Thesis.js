function showMinute(){
    var currentMinute = new Date().getMinutes();
    console.log(currentMinute);
    document.getElementById("minute").innerText=currentMinute;
    }


var x;
      function show_hide(){
          if(x == 1){
              document.getElementById("test").style.display="inline";
              return x=0;
          }
          else{
              document.getElementById("test").style.display="none";
              return x=1;
          }
      }


var y;
    function show_hide1(){
        if(y == 1){
            document.getElementById("test1").style.display="inline";
            return y=0;
          }
        else{
            document.getElementById("test1").style.display="none";
            return y=1;
        }
    }

function howdy(){
    alert("This is an alert.")
}

function lastItem(){
    var array1 = ['Watermelon','Apple','Orange','Kiwi'];
    console.log(array1);
    document.getElementById("lastItem1").innerText=array1;
}

function sortArrayAlpha(arr){
    var arr=['Watermelon','Apple','Orange','Kiwi'];
    arr.sort(function(a,b){
        return a===b? 0: a < b? 1: -1;
    })
    console.log(arr[0]);
    document.getElementById("lastItem3").innerText=arr[0];
}

function sortSimple(arr){
    var arr=['Watermelon','Apple','Orange','Kiwi'];
    arr = arr.sort();
    document.getElementById("sort1").innerText=arr[arr.length-1];
}


function takeInput(){
    let selectedElement = document.getElementById("input1");
    var array1 = new Array(1,2,3,4);
    array1.forEach(function(element, index, array){
        array[index] = prompt("entern an element");
    });
    selectedElement.innerText=array1.sort();
}

function wikiAPI(){
    var searchTerm = document.getElementById("searchTerm").value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;
    connect.open('GET',url);
    //define actions
    connect.onload = function(){
        var wikiObject = JSON.parse(this.response);
        // console.log(wikiObject);
        console.log(wikiObject.query.pages);
        var pages = wikiObject.query.pages;
        for (var i in pages){
            // var newDiv = document.createElement("div");
            // newDiv.setAttribute('class','row h4');
            // document.getElementById("wiki").appendChild(newDiv);
            // newDiv.innerText = pages[i].title;

             //Challenge:display links to the wiki html pages as results
            var pageURL = "https://en.wikipedia.org/?curid=";
            var newAnchor = document.createElement("a");
            newAnchor.href= pageURL+ pages[i].pageid;
            newAnchor.className ='d-block';
            newAnchor.innerText =pages[i].title;
            document.getElementById("wiki").appendChild(newAnchor);
        }
       

    }
    //send request
    connect.send();
}


// ochre api
var parentElement = document.getElementById("ochreTableBody");
var url = "https://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300";

function loadXML(){
    XMLrequest(url);
    console.log('loadXML -- OK');
}

function XMLrequest(link){
    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            listTexts(this.responseXML);
        };
    };
    connect.open('GET', link, true);
    connect.send();
    console.log('XML request -- ok');
}

function listTexts(sourceXML){
    document.getElementById('projectTitle').innerText = sourceXML.getElementsByTagName('metadata')[0].children[1].innerHTML;
    document.getElementById('setTitle').innerText= sourceXML.getElementsByTagName('set')[0].children[3].children[0].innerHTML;
    document.getElementById('setDescription').innerText=sourceXML.getElementsByTagName('set')[0].children[4].innerHTML;
    var licenseText = document.getElementById('license');
    licenseText.innerText=sourceXML.getElementsByTagName('availability')[0].children[0].innerHTML;
    licenseText.setAttribute('href', sourceXML.getElementsByTagName('availability')[0].children[0].attributes[0].nodeValue);
    


    //select,parse and display the data
    console.log(sourceXML);
    var textList = sourceXML.getElementsByTagName("text");
    console.log(textList);
    for (i=0; i<textList.length; i++){
        var tr = document.createElement('tr');
        tr.setAttribute('class','ochreTableRows');
        tr.setAttribute('id','row_'+i);
        document.getElementById('ochreTableBody').appendChild(tr);
        //
        var td = document.createElement('td');
        td.setAttribute('id','td_name_'+i);
        td.textContent=textList[i].children[0].children[0].innerHTML;
        document.getElementById('row_'+i).appendChild(td);
        var td2 = document.createElement('td');
        td2.setAttribute('id','td_desc_'+i);
        td2.textContent= textList[i].children[3].innerHTML;
        document.getElementById('row_'+i).appendChild(td2);
    }

}