/*/////////==================================================///////////
/////////// OKLAHOMA WEATHER LAB IMAGE LOOPER - HOOT PROJECT ///////////
///------------------------------------------------------------------///
/// This was originally based off the  California-Nevada River       ///
/// Forecast Center (http://www.cnrfc.noaa.gov) Image Looper.        ///
///------------------------------------------------------------------///
/// Significant Modifications made by Joe Young of the Oklahoma      ///
/// Weather Lab - HOOT Project (http://hoot.metr.ou.edu).            ///
/// Januray 2008                                                     ///
///                                                                  ///
/// More Modifications made by Joe Young for the HOOT Project        ///
/// February 2009                                                    ///
///__________________________________________________________________///
/// Sourced at hoot.metr.ou.edu/global/js/looper.js                  ///
///==================================================================///
///////// PLEASE KEEP THIS REFERENCE INTACT FOR USE             ////////
//////////////////////////////////////////////////////////////////////*/

var inc = 2, delay = 500, dinc = 100, dwell = 1000;
var num_loaded_images = 0;
var frame=-1;
var timeout_id=null;
var dir=1; 
var playing = 0;
var run = 0;

// function to count images as they are loaded into cache
function count_images() 
{ 
	if (++num_loaded_images == window.imax) {
		/// this is where we define wether or not to start looping
		/// once images are loaded. 
		if (!window.pauseOnStart) animate(); 
		else step(window.pauseWhere,false);
		hideLoadBox();
		show_delay();
		show_dwell();
		forward();
	}  else 
	{
		document.animation.src=images[num_loaded_images-1].src;
		document.form.frame.value=num_loaded_images+" of "+window.imax; 
		showLoadBox();
	}
}



// actual loading is done here
function initialize_looper()
{
	images = new Array(window.imax);
	for (var i = 0 ; i < window.imax; i++) {
	 images[i]= new Image();
	 images[i].onload=count_images;
	 images[i].src=window.temp_list[i];
	 if (images[i].height == null) {i-=1;}
	}

	// call the functions to initialize the values of the displays

	show_delay();
	show_dwell();
}
// function to start movie

function start_play() {
 if (playing == 0) {
  if (timeout_id == null && num_loaded_images==window.imax) animate();
 }
} 

// function to stop movie

function stop_play() {
 if (timeout_id) clearTimeout(timeout_id); 
  timeout_id=null;
  playing = 0;
} 

// function to do the animation when all images are loaded

function animate()
{
 var j;
 var controlDelay;
 frame=(frame+dir+window.imax)%window.imax;
 j=frame+1;
 if ((j == window.imax || j == 1) && document.form.dwell.checked) {controlDelay = dwell;} else {controlDelay = delay; }
 if ((j == 1 || j == window.imax) && document.form.rock.checked) dir = -dir; 
 if (images[frame].height) {document.animation.src=images[frame].src;} else {images[i].src=window.temp_list[frame];document.animation.src=images[window.temp_list].src;}
 document.form.frame.value=j+" of "+window.imax;
 timeout_id=setTimeout("animate()",controlDelay);
 playing=1;
}


// function to control stepping thru each frame

function step(frm,click)
{
 var j;
 if (frm == null) {

    if (timeout_id) clearTimeout(timeout_id); timeout_id=null;
    frame=(frame+dir+window.imax)%window.imax;
    j=frame+1;
    document.animation.src=images[frame].src;
    document.form.frame.value=j+" of "+window.imax;
 } else if (document.form.nostep.checked || click != null){

    if (timeout_id) clearTimeout(timeout_id); timeout_id=null;
    frame=frm;
    j=frm+1;
    document.animation.src=images[frm].src;
    document.form.frame.value=j+" of "+window.imax;
 }
 document.cookie="frame=" + frame.toString() + '; path=/';
 playing=0;
}
function forwardstep()
{
 var j;
 if (timeout_id) clearTimeout(timeout_id); timeout_id=null;
 frame=(frame+dir+window.imax)%window.imax;
 j=frame+1;
 document.animation.src=images[frame].src;
 document.form.frame.value=j+" of "+window.imax;
 document.cookie="frame=" + frame.toString() + '; path=/';
 playing=0;
}
function backstep()
{
 var j;
 if (timeout_id) clearTimeout(timeout_id); timeout_id=null;
 frame=(frame-dir+window.imax)%window.imax;
 j=frame+1;
 document.animation.src=images[frame].src;
 document.form.frame.value=j+" of "+window.imax;
 document.cookie="frame=" + frame.toString() + '; path=/';
 playing=0;
}

// functions to control direction of animation

function reverse()
{
 if (dir < 0) dir = dir;
 if (dir > 0) dir=-dir; 
 loop=1;
}

function forward()
{
 if (dir < 0) dir = -dir;
 if (dir > 0) dir = dir;
 loop=1;
}

function loop()
{
  loop="yes";
}

// function to display delay between frames

function show_delay()
{
var dely;

dely  = 1/(delay/1000);
dely = Math.round(dely*10)/10;
document.form.dly.value=dely;
}
function incDwell()
{
	dwell = dwell + dinc; 
}

function decDwell()
{ 
	if (dwell > 0) {dwell = dwell - dinc; }
}

function show_dwell(typ)
{
	var dwel = dwell/1000;
	if (typ !=null) 
	{
		if (document.form.dwell.checked) 
		{
			document.form.dwell.checked=false;
		} 
		else 
		{
			document.form.dwell.checked=true;
		} 
	} 

	if (document.form.dwell.checked) 
	{
		document.form.dwl.value=dwel;
	} else 
	{
		document.form.dwl.value=null;
	}

}

function showLoadBox()
{
	document.getElementById('loadingBox').style.display="block";
}
function hideLoadBox()
{
	document.getElementById('loadingBox').style.display="none";
}
