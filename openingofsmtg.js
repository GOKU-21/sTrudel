setcpm(140/4)
const Roland= "tr989"

$: s("hh:2!4").gain(.01)._punchcard() // visualising cycles (hh)
// 'gain' function is to play with the velocity of a beat - eg low sound to high
// can set randomness into the gain function by '.gain(rand.range(.3, .7))' whereas cases as such no doublequotes required 

// $: s("hh:2!6").gain("<.3 .7>") // in such cases where u specify , u need to do them inside the doublequotes 
//   ._punchcard()

$: s("hh:2!6").gain(rand.range(.3, .7)).fast(2).degradeBy(.5).rib(57,1) // '.fast()' is a func that speeds up entire things thats written before that as ONE cycle
  /// '.degradeBy.()' reduces that percentage of beats out 
  // .rib() finds pattern inside the randomness and repeats it  , has 'seeds' eg '(1,1)' - play with them in order to pick different patterns 
  ._punchcard()
$: s("<bd:2> sd ")
// // // $: s("<oh>").fast(0.5)
// // $: s("<cr:2*3 - ->").gain(.5)._punchcard()
$: note("48 67 63 [62, 58], [36, 43]") /// start without sawtooth 
.sound("piano gm_electric_guitar_muted, sawtooth").pianoroll() ///crazyy ass start 

// note("<[36 48]*4 [34 46]*4 [41 53]*4 [39 51]*4>")
// .sound("gm_acoustic_bass piano")    /// refer - understand 

//INCOMPLETELY DONE