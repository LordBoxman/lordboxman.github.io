var blocks = 0;
var blocksTotal = 0;
var blocksPerSec = 0;
var blocksPerClick = 1;

var cursors = 0;


function blockClick(){
  blockAdd(blocksPerClick);
};

function blockAdd(num){
	blocks = blocks + num;
	blocksTotal = blocksTotal + num;
	document.getElementById("blocks").innerHTML = blocks;
	document.getElementById("statBlocks").innerHTML = blocks;
	document.getElementById("statBlocksTotal").innerHTML = blocksTotal;
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
    if(blocks >= cursorCost){
        cursors = cursors + 1;
		blocksPerSec = blocksPerSec + 1;
		blocks = blocks - cursorCost;
		document.getElementById('blocks').innerHTML = blocks;
		document.getElementById("statBlocks").innerHTML = blocks;
        document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('blocksPerSec').innerHTML = blocksPerSec;
		document.getElementById('statBlocksPerSec').innerHTML = blocksPerSec;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
    document.getElementById('cursorCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	blockAdd(blocksPerSec);
	
}, 1000);
