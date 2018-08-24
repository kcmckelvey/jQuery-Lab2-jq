var myButton =$('<button>test</button>').click (function(){
    alert('You only kinda suck at coding')
})

myButton.appendTo('body')

$('#zeeButton').click (function(){
    alert($('#theText').val())
})
 let divColor = ('background-color', 'red') 
$('#myDiv').mouseenter(function(){
    $('#myDiv').css(divColor)

})


var p1 =$('<p>This is some text that I am supposed to put into the paragraph</p>')
p1.appendTo('body')

let colorArray= ['red', 'blue', 'pink', 'green','mintcream', 'yellow', 'orange']
function randomColor(){
    let randomListColor = Math.floor(Math.random()* colorArray.length)
    return colorArray[randomListColor]
}

$(p1).click (function(){
    $(p1).css('color', randomColor())
})

var div2 = $('<div></div>')
div2.appendTo('body')

var mySpan = $('<span>Kevin</span>')

var theSecondButton = $('<button>pull the lever Kronk</button>').click(function(){
    mySpan.appendTo(div2)
})

theSecondButton.appendTo(div2)

var friendsArray = ['kevin','luke','michael','taylor','chase','carter','ray','frank','baxter','tom']
var i = 0

$('.theOtherButton').click(function(){
    if (i>=friendsArray.length){
        console.log('out of friends loser')
    }
    else {
        var friendsList = $('<li>'+friendsArray[i]+'</li>')
    $('ul').append(friendsList)
    }
    i++
    console.log(i)
})