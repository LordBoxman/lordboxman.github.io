var blocks = 0;
var cursors = 0;

function blockClick(num){
  blocks = blocks + num;
  document.getElementById("blocks").innerHTML = blocks;
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
    if(cookies >= cursorCost){
        cursors = cursors + 1;
    	blocks = blocks - cursorCost;
        document.getElementById('cursors').innerHTML = cursors;
        document.getElementById('cookies').innerHTML = cookies;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
    document.getElementById('cursorCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
	blockClick(cursors);
	
}, 1000);