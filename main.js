
/*    ---------  All var here!! -------*/
        var one_step = 39.28;                     // одно деление на спрайте в пикселях
        console.group('Start debug...')
        var ID_in_wrap_1 = document.getElementById('in_wrap_1');
        var ID_in_wrap_2 = document.getElementById('in_wrap_2');
        var ID_result = document.getElementById('result');
        var ID_arr_1 = document.getElementById('ar1');
        var ID_arr_2 = document.getElementById('ar2');
        var c = document.getElementById("myCanvas");
        var ctx =c.getContext("2d");
        var errorenId = '' || undefined;

/* ------- Рандомом инициализируем сам задачку школьнику -----------  */

		    var var_1 = getRandomInt( 6, 9 );
		    var sum = getRandomInt( 11, 14 );
		    var var_2 = sum-var_1;

		    document.getElementById( 'in_var1' ).value = var_1;
		    document.getElementById( 'in_var2' ).value = var_2;
		    document.getElementById( 'result' ).value = '?';

 /* ---------- Functions ------- */  

      function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min)) + min; } 
      function setError(id, in_var){
          if (in_var !== undefined) document.getElementById(in_var).style.backgroundColor = '#CC9900';
          id.style.color = 'red';
          errorenId = id;
          setTimeout(function(){
            id.style.color = '#000' 
          },1000);
      }

 /*  ----------------------    */

			ctx.beginPath();
			ctx.moveTo(0,120);
			ctx.quadraticCurveTo((one_step*var_1)/2,0,(one_step*var_1),120);
			ctx.strokeStyle = "red";
			ctx.stroke();
			ID_in_wrap_1.style.left = ((one_step*var_1)/2)-12.5+'px';
      ID_arr_1.style.left = (one_step*var_1)-15+'px';
      // console.log('left',ID_arr_1.style.left);
            



       ID_in_wrap_1.onkeydown = function(e){
         if(e.keyCode == 13){
             var rr = parseInt(ID_in_wrap_1.value);
              if(rr == var_1){
                document.getElementById('in_var1').style.backgroundColor = '#fff';
                ID_in_wrap_1.style.color = 'green';
                setTimeout(function(){ ID_in_wrap_1.style.color = 'black'; }, 1000);
                ID_in_wrap_1.disabled = true;
                ID_in_wrap_1.style.border = 'none';
                ctx.beginPath();
                ctx.moveTo((one_step*var_1),120);
                ctx.quadraticCurveTo(((one_step*var_2)/2) + (one_step*var_1),50,(one_step*var_2)+(one_step*var_1),120);
                ctx.strokeStyle = "red";
                ctx.stroke();
                ID_arr_2.style.left = ((one_step * var_1) + (one_step * var_2)) - 15+'px';
                ID_arr_2.classList.remove('hidden');
                // console.log('left',ID_arr_2.style.left);
                ID_in_wrap_2.disabled = false;
                ID_in_wrap_2.style.border = '2px solid #ccc';
                ID_in_wrap_2.hidden = false;
                ID_in_wrap_2.style.left = ((one_step*var_2)/2) + (one_step*var_1)-12.5+'px';
                ID_in_wrap_2.style.top = '35px';
                ID_in_wrap_2.focus();
              }
             else {
                  setError(ID_in_wrap_1,'in_var1');
             }
         }
    }
      


             ID_in_wrap_2.onkeydown = function(e){
         if(e.keyCode == 13){
           var rr = parseInt(ID_in_wrap_2.value);
              if(rr == var_2){
              	 document.getElementById('in_var2').style.backgroundColor = '#fff';
              	 ID_in_wrap_2.style.color = 'green';
                 setTimeout(function(){ ID_in_wrap_2.style.color = 'black'; }, 1000);
              	 ID_in_wrap_2.disabled = true;
             	   ID_in_wrap_2.style.border = 'none';
             	   ID_result.disabled = false;
             	   ID_result.focus();
             	   ID_result.value = '';
              }
              else{
              	setError(ID_in_wrap_2,'in_var2');
              }
         }
     }

      
      ID_result.onkeydown = function(e){
         if(e.keyCode == 13){
           var rr = parseInt(ID_result.value);
             if (rr == sum){
                ID_result.style.color = 'green';
                ID_result.disabled = true;
                ID_result.style.border = 'none';
                console.log('wow!');
                console.groupEnd();
             }
             else {
                 setError(ID_result);
             }
         }
     }
