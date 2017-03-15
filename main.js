/*    ---------  All var here!! -------*/
var one_step = 39.28; // одно деление на спрайте в пикселях
// console.group('Start debug...');
var checkstep = 0;
var ID_in_an_1 = document.getElementById( 'input-an-1' );
var ID_in_an_2 = document.getElementById( 'input-an-2' );
var ID_out_pr_1 = document.getElementById( 'input-pr-1' );
var ID_out_pr_2 = document.getElementById( 'input-pr-2' );
var ID_result = document.getElementById( 'result' );
var ID_arr_1 = document.getElementById( 'ar1' );
var ID_arr_2 = document.getElementById( 'ar2' );
var c = document.getElementById( "myCanvas" );
var ctx = c.getContext( "2d" );
var errorenId = '' || undefined;
/* ------- Рандомом инициализируем сам задачку школьнику -----------  */
var var_1 = getRandomInt( 6, 9 );
var sum = getRandomInt( 11, 14 );
var var_2 = sum - var_1;
ID_out_pr_1.value = var_1;
ID_out_pr_2.value = var_2;
document.getElementById( 'result' ).value = '?';
/* ---------- Functions ------- */
function getRandomInt( min, max ) {
  return Math.floor( Math.random() * ( max - min ) ) + min;
}

function canvasDraw( center_pos, end_pos, id_input, id_arr, start_pos, Ra ) {
  ctx.beginPath();
  ctx.moveTo( start_pos, 120 );
  ctx.quadraticCurveTo( center_pos, Ra, end_pos, 120 );
  ctx.strokeStyle = "red";
  ctx.stroke();
  id_input.style.left = center_pos - 12.5 + 'px';
  id_arr.style.left = end_pos - 15 + 'px';
  // console.log(center_pos,end_pos,id_input,id_arr,start_pos,Ra);
}

function CheckInput( input_varible, prog_varible, an_id, pr_id = false ) {
  if ( input_varible == prog_varible ) {
    an_id.disabled = true;
    an_id.classList.add( 'border-off' );
    an_id.classList.add( 'win-in-an' );
    if ( pr_id != false ) pr_id.classList.remove( 'error-pr' );
    setTimeout( function() {
      an_id.classList.remove( 'win-in-an' );
    }, 1000 );
    if ( checkstep == 0 ) {
      var ok = ( one_step * var_1 ) + ( one_step * var_2 );
      ID_arr_2.classList.remove( 'hidden' );
      ID_in_an_2.hidden = false;
      ID_in_an_2.style.left = ( ok / 2 );
      ID_in_an_2.disabled = false;
      ID_in_an_2.focus();
      canvasDraw( ok - ( ( one_step * var_2 ) / 2 ), ok, ID_in_an_2, ID_arr_2, one_step * var_1, 50 );
    }
    if ( checkstep == 1 ) {
      ID_result.disabled = false;
      ID_result.focus();
      ID_result.value = "";
    }
    checkstep++;
    return true;
  } else {
    if ( pr_id != false ) pr_id.classList.add( 'error-pr' );
    an_id.classList.add( 'reded' );
    setTimeout( function() {
      an_id.classList.remove( 'reded' );
    }, 1000 );
    return false;
  }
}
/*  ----------------------    */
canvasDraw( one_step * var_1 / 2, one_step * var_1, ID_in_an_1, ID_arr_1, 0, 0 );
ID_in_an_1.onkeydown = function( e ) {
  if ( e.keyCode == 13 ) {
    CheckInput( parseInt( ID_in_an_1.value ), var_1, ID_in_an_1, ID_out_pr_1 );
  }
}
ID_in_an_2.onkeydown = function( e ) {
  if ( e.keyCode == 13 ) {
    CheckInput( parseInt( ID_in_an_2.value ), var_2, ID_in_an_2, ID_out_pr_2 );
  }
}
ID_result.onkeydown = function( e ) {
  if ( e.keyCode == 13 ) {
    CheckInput( parseInt( ID_result.value ), sum, ID_result, false );
  }
}