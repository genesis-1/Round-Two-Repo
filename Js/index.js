


var constMinusLimit = 0;
var constPlusLimit = 0;
var isPlusCountOver = false;
var isMinCountOver = false;

function Decount()
{
    var limit = 0;
    var pluseValue = parseInt(document.getElementById('plusInput').value, 10);

    var minsValue = parseInt(document.getElementById('minInput').value, 10);

    limit = pluseValue + minsValue;
    if(constMinusLimit == 0 && isMinCountOver != true){
        constMinusLimit = limit;
    }

    if(constMinusLimit >= 0){
        
        document.getElementById('number').value = constMinusLimit;
        constMinusLimit = constMinusLimit - 1;
        if(constMinusLimit == 0){
            isMinCountOver = true;
        }
    }
}


function Incount()
{

    var limit = 0;
    var pluseValue = parseInt(document.getElementById('plusInput').value, 10);

    var minsValue = parseInt(document.getElementById('minInput').value, 10);

    limit = pluseValue + minsValue;
    if(constPlusLimit == 0 && isPlusCountOver != true){
        constPlusLimit = 0;
    }

    if(constPlusLimit <= limit){
        document.getElementById('number').value = constPlusLimit;
        constPlusLimit = constPlusLimit + 1;
        if(constPlusLimit == limit){
            isMinCountOver = true;
        }
    }
}

