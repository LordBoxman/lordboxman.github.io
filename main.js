var blocks = 0;
var cursors = 0;
var blocksTotal = 0;
var blocksPerSec = 0;
var blocksPerClick = 1;

function blockClick(blocksPerClick){
  blocks = blocks + blocksPerClick;
  blocksTotal = blocksTotal + blocksPerClick;
  document.getElementById("blocks").innerHTML = blocks;
  document.getElementById("blocksTotal").innerHTML = blocksTotal;
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
    if(blocks >= cursorCost){
        cursors = cursors + 1;
		blocksPerSec = blocksPerSec + 1;
		blocks = blocks - cursorCost;
        document.getElementById('cursors').innerHTML = cursors;
        document.getElementById('blocks').innerHTML = blocks;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
    document.getElementById('cursorCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	blockClick(blocksPerClick);
	
}, 1000);
