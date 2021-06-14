var blocks = 0;
var blocksTotal = 0;
var blocksPerSec = 0;
var blocksPerClick = 1;

var buildings = [0,0,0,0,0];


function blockClick(){
  blockAdd(blocksPerClick);
};

function blockAdd(num){
	blocks = blocks + num;
	blocksTotal = blocksTotal + num;
	document.getElementById("blocks").innerHTML = Math.floor(blocks);
	document.getElementById("statBlocks").innerHTML = Math.floor(blocks);
	document.getElementById("statBlocksTotal").innerHTML = Math.floor(blocksTotal);
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.148154,buildings[0]));
    if(blocks >= cursorCost){
        buildings[0] = buildings[0] + 1;
		blocksPerSec = blocksPerSec + 1;
		blocks = blocks - cursorCost;
        document.getElementById('cursors').innerHTML = buildings[0];
		updateAfterSpending();
    };
    var nextCost = Math.floor(10 * Math.pow(1.148154,buildings[0]));
    document.getElementById('cursorCost').innerHTML = nextCost;
};

function buyBlockman(){
    var blockmanCost = Math.floor(150 * Math.pow(1.148154,buildings[1]));
    if(blocks >= blockmanCost){
        buildings[1] = buildings[1] + 1;
		blocksPerSec = blocksPerSec + 10;
		blocks = blocks - blockmanCost;
        document.getElementById('blockmans').innerHTML = buildings[1];
		updateAfterSpending();
    };
    var nextCost = Math.floor(150 * Math.pow(1.148154,buildings[1]));
    document.getElementById('blockmanCost').innerHTML = nextCost;
};

function updateAfterSpending(){
	document.getElementById('blocks').innerHTML = Math.floor(blocks);
	document.getElementById("statBlocks").innerHTML = Math.floor(blocks);
	document.getElementById('blocksPerSec').innerHTML = blocksPerSec;
	document.getElementById('statBlocksPerSec').innerHTML = blocksPerSec;
}




window.setInterval(function(){
	
	blockAdd(blocksPerSec/4);
	
}, 250);
