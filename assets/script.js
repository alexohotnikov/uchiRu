/*    ---------  All var here!! -------*/
var oneStep = 39.28; // одно деление на спрайте в пикселях
var checkStep = 0;
var idInAn_1 = document.getElementById( 'input-an-1' );
var idInAn_2 = document.getElementById( 'input-an-2' );
var idOutPr_1 = document.getElementById( 'input-pr-1' );
var idOutPr_2 = document.getElementById( 'input-pr-2' );
var idResult = document.getElementById( 'result' );
var idArr_1 = document.getElementById( 'ar1' );
var idArr_2 = document.getElementById( 'ar2' );
var c = document.getElementById( "myCanvas" );
var ctx = c.getContext( "2d" );
/* ------- Рандомом инициализируем сам задачку школьнику -----------  */
var var_1 = getRandomInt( 6, 9 );
var sum = getRandomInt( 11, 14 );
var var_2 = sum - var_1;
idOutPr_1.value = var_1;
idOutPr_2.value = var_2;
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
    if ( checkStep == 0 ) {
      var ok = ( oneStep * var_1 ) + ( oneStep * var_2 );
      idArr_2.classList.remove( 'hidden' );
      idInAn_2.hidden = false;
      idInAn_2.style.left = ( ok / 2 );
      idInAn_2.disabled = false;
      idInAn_2.focus();
      canvasDraw( ok - ( ( oneStep * var_2 ) / 2 ), ok, idInAn_2, idArr_2, oneStep * var_1, 50 );
    }
    if ( checkStep == 1 ) {
      idResult.disabled = false;
      idResult.focus();
      idResult.value = "";
    }
    checkStep++;
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
canvasDraw( oneStep * var_1 / 2, oneStep * var_1, idInAn_1, idArr_1, 0, 0 );
idInAn_1.onkeydown = function( e ) {
  if ( e.keyCode == 13 ) {
    CheckInput( parseInt( idInAn_1.value ), var_1, idInAn_1, idOutPr_1 );
  }
}
idInAn_2.onkeydown = function( e ) {
  if ( e.keyCode == 13 ) {
    CheckInput( parseInt( idInAn_2.value ), var_2, idInAn_2, idOutPr_2 );
  }
}
idResult.onkeydown = function( e ) {
  if ( e.keyCode == 13 ) {
    CheckInput( parseInt( idResult.value ), sum, idResult, false );
  }
}