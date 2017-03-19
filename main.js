function genBackground(this_){
  var bg_r, bg_g, bg_b, bg;
  bg_r = Math.floor( Math.random() * 255);
  bg_g = Math.floor( Math.random() * 255);
  bg_b = Math.floor( Math.random() * 255);
  bg = 'rgb(' + bg_r + ',' + bg_g + ',' + bg_b + ')';
  if( bg == 'rgb(0,0,0)' || bg == 'rgb(255,255,255)' )
    genBackground(this_);
  this_.style.background = bg;
  return;
}
