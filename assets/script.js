/*    ---------  All var here!! -------*/
const $Dom = {
  inputForAnswer:
    [ document.getElementById( 'input-an-1' ), document.getElementById( 'input-an-2' ) ],
  expOut:
    [ document.getElementById( 'input-pr-1' ), document.getElementById( 'input-pr-2' ) ],
  result:
    document.getElementById( 'result' ),
  arrays:
    [ document.getElementById( 'ar1' ), document.getElementById( 'ar2' ) ],
};

const props = {
  step: 39.28
}

const state = {
  checkStep: 0
}


const c = document.getElementById( "myCanvas" );
const ctx = c.getContext( "2d" );


/* ------- Рандомом инициализируем сам задачку школьнику -----------  */
var var_1 = getRandomInt( 6, 9 );
var sum = getRandomInt( 11, 14 );
var var_2 = sum - var_1;
$Dom.expOut[0].value = var_1;
$Dom.expOut[1].value = var_2;
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
    }, 600 );
    if ( state.checkStep == 0 ) {
      var ok = ( props.step * var_1 ) + ( props.step * var_2 );
      $Dom.arrays[1].classList.remove( 'hidden' );
      $Dom.inputForAnswer[1].hidden = false;
      $Dom.inputForAnswer[1].style.left = ( ok / 2 );
      $Dom.inputForAnswer[1].disabled = false;
      $Dom.inputForAnswer[1].focus();
      canvasDraw( ok - ( ( props.step * var_2 ) / 2 ), ok, $Dom.inputForAnswer[1], $Dom.arrays[1], props.step * var_1, 50 );
    }
    if ( state.checkStep == 1 ) {
      $Dom.result.disabled = false;
      $Dom.result.focus();
      $Dom.result.value = "";
    }
    state.checkStep++;
    return true;
  } else {
    if ( pr_id != false ) pr_id.classList.add( 'error-pr' );
    an_id.classList.add( 'reded' );
    setTimeout( function() {
      an_id.classList.remove( 'reded' );
    }, 600 );
    return false;
  }
}
/*  ----------------------    */
canvasDraw( props.step * var_1 / 2, props.step * var_1, $Dom.inputForAnswer[0], $Dom.arrays[0], 0, 0 );
$Dom.inputForAnswer[0].onkeydown = function( e ) {
  if ( e.keyCode == 13 ) {
    CheckInput( parseInt( $Dom.inputForAnswer[0].value ), var_1, $Dom.inputForAnswer[0], $Dom.expOut[0] );
  }
}
$Dom.inputForAnswer[1].onkeydown = function( e ) {
  if ( e.keyCode == 13 ) {
    CheckInput( parseInt( $Dom.inputForAnswer[1].value ), var_2, $Dom.inputForAnswer[1], $Dom.expOut[1] );
  }
}
$Dom.result.onkeydown = function( e ) {
  if ( e.keyCode == 13 ) {
    CheckInput( parseInt( $Dom.result.value ), sum, $Dom.result, false );
  }
}