/*******************************************************
* Based on code from Dynamic Drive's Sliding Menu Bar Script 2-
* visit http://www.dynamicdrive.com for full source code. 
*******************************************************/
var ns4=document.layers?1:0
var ie4=document.all
var ns6=document.getElementById&&!document.all?1:0

if (ns4)
document.captureEvents(Event.KEYPRESS)
function keycommand(e){
 if (ns4||ns6){
  if (e.which==112)
   window.start_play()
  if (e.which==111)
   window.stop_play()
  if (e.which==46||e.which==62)
   window.forwardstep()
  if (e.which==44||e.which==60)
   window.backstep()
  if (e.which==61||e.which==43) {
   window.delay = window.delay / window.inc; window.show_delay(); }
  if (e.which==45||e.which==95){
   window.delay = window.delay * window.inc; window.show_delay(); } 
  if (e.which==100){
   window.show_dwell('key') } 
  if (e.which==119){
   window.incDwell(); show_dwell() } 
  if (e.which==113){
   window.decDwell(); show_dwell() } 
  if (e.which==114){
   if (document.form.rock.checked) document.form.rock.checked=false; else document.form.rock.checked=true } 
  if (e.which==109||e.which==77){
   if (document.form.nostep.checked) document.form.nostep.checked=false; else document.form.nostep.checked=true } 
  if (e.which==49||e.which==33){
   window.open_key() } 
  if (e.which==93)
   forward();
  if (e.which==91)
   reverse();  
 }
 else if (ie4){
  if (event.keyCode==112)
   window.start_play()
  if (event.keyCode==111)
   window.stop_play()
  if (event.keyCode==46||event.keyCode==62)
   window.forwardstep()
  if (event.keyCode==44||event.keyCode==60)
   window.backstep()
  if (event.keyCode==61||event.keyCode==43) {
   window.delay = window.delay / window.inc; window.show_delay(); }
  if (event.keyCode==45||event.keyCode==95){
   window.delay = window.delay * window.inc; window.show_delay(); } 
  if (event.keyCode==100){
   window.show_dwell('key'); } 
  if (event.keyCode==119){
   window.incDwell(); show_dwell() } 
  if (event.keyCode==113){
   window.decDwell(); show_dwell() } 
  if (event.keyCode==114){
   if (document.form.rock.checked) document.form.rock.checked=false; else document.form.rock.checked=true } 
  if (event.keyCode==109||event.keyCode==77){
   if (document.form.nostep.checked) document.form.nostep.checked=false; else document.form.nostep.checked=true } 
  if (event.keyCode==49||event.keyCode==33)
   window.open_key()
  if (event.keyCode==93)
   window.forward()
  if (event.keyCode==91)
   window.reverse()
  
 }
}
document.onkeypress=keycommand


