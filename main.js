document.onreadystatechange = function() {
	if (document.readyState == 'complete'){
		var crash_player = false;
		var crash_walls = false;
		var enemy = ["image", "x", "y", "width", "height", "speed",]
		var pongo = ["image", "x", "y", "width", "height", "speed",]
		var wall = ["x", "y", "width", "height"]
		var wall2 = ["x", "y", "width", "height"]
		var wall3 = ["x", "y", "width", "height"]
		var wall4 = ["x", "y", "width", "height"]
		var wall5 = ["x", "y", "width", "height"]
		var canvas = document.getElementById("canvas");
    		var ctx = canvas.getContext("2d");
		var game = true;
		var y_speed = 0;
		var x_speed = 0;




		pongo[0] = document.getElementById("pongo");
		enemy[0] = document.getElementById("enemy");
		enemy[1] = 120;
		enemy[2] = 107;
		enemy[3] = 64;
		enemy[4] = 64;

		pongo[1] = 0;
		pongo[2] = 128;
		pongo[3] = 61.624/2;
		pongo[4] = 44.125/2;
		wall[0] = 230;
		wall[1] = 130;
		wall[2] = 20;
		wall[3] = 20;
                wall2[0] = 100;
                wall2[1] = 130;
                wall2[2] = 20;
                wall2[3] = 20;
		var collision_walls = function(){
                         	if( pongo[1] == 0,
                           	 pongo[1] == 269){
					crash_walls = truel;

				}
				else{
					crash_walls = false;
				}
		}


		var collision_enemy = function() {
			if (pongo[1] + pongo[3] == enemy[1] ,
			    pongo[1] == enemy[1] + enemy[3] ,
      			    enemy[2] == pongo[2] + pongo[4] )
			{
			crash_player = true;
  			} else {
    				crash_player = false;
  			 }
		}






                var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFra$
                window.requestAnimationFrame = requestAnimationFrame;
		function drawWalls(){
			ctx.fillStyle = 'navy';
			ctx.fillRect(wall[0], wall[1], wall[2], wall[3]);
			ctx.fillRect(wall2[0], wall2[1], wall2[2], wall2[3]);

		}
		function update(){
			setInterval(update, 20);
		// draw our player
			drawWalls();
			ctx.drawImage(pongo[0], pongo[1], pongo[2], pongo[3], pongo[4]);
		// run through the loop again
			ctx.drawImage(enemy[0], enemy[1], enemy[2], enemy[3], enemy[4])
			requestAnimationFrame(update);
		}







			window.addEventListener("load", function(){
				  update();
			});

		if (game == false){
			clearInterval(update);

		}







	}


}
