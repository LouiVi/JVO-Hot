cfg.Material, cfg.Light;

address = "https://rr1---sn-hp57knd6.googlevideo.com/videoplayback?expire=1698038681&ei=Oa81ZcPCKeiN_9EPkZ6isA8&ip=84.247.112.142&id=o-AHYyHbM_WZP-fPQWhjO4Y4tvHIm9GR4rHMqTR4e8HOiU&itag=244&source=youtube&requiressl=yes&spc=UWF9f0OEOqFbBelbZP_qHXNQTkIWa9s&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=9225697&dur=202.533&lmt=1619502398712653&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=ANDROID&txp=5316224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AGM4YrMwRAIgSF2cGbyDkyhjRAFq-iR66Dg63gMw_z1IBeEzixdB7egCIG5p-JMXE2oUYwoww7SNKdzP7u47hncL3Q7K0VQ1_maR&rm=sn-ab5ese76&req_id=2b83995fe51ea3ee&redirect_counter=2&cm2rm=sn-20xguvgpjvpm-nw0e7s&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=zY&mip=172.96.171.20&mm=29&mn=sn-hp57knd6&ms=rdu&mt=1698016847&mv=m&mvi=1&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRQIgbkTxba72WEZs_A_-KL5sQxXWGzlJyWaCC2lqZnw_LwoCIQC43x-kFQo96khYPr9q9MRwqyw-fUG9OfZcD9Kk1HZ6yg%3D%3D";
address2 = "Misc/Video.Guru_20231023_225240633.mp4";//ttps://rr1---sn-20xguvgpjvpm-nw0e.googlevideo.com/videoplayback?expire=1698041910&ei=1rs1ZZ-pBueej-8Pq8qMmAU&ip=102.129.235.35&id=o-AHOUcBEIFLhhTkCl3hvpJQSFSQijwSSjc4rkNPW-MNrB&itag=248&source=youtube&requiressl=yes&spc=UWF9f4lmoosOWvfDzf4t_-AO-lumiR8&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=36230463&dur=298.400&lmt=1671863150710350&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=ANDROID&txp=5319224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AGM4YrMwRQIgZQB3MS2LZsIXGX2eUAq1o3FuF85R-r8ScI3KibKY94UCIQD-IhGnrrg3milE6MubmpIX1S_rJfiHKy6tahDV-6wa2g%3D%3D&redirect_counter=1&rm=sn-p5qeel7s&req_id=1fdd23666706a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=MG&mip=172.96.171.20&mm=31&mn=sn-20xguvgpjvpm-nw0e&ms=au&mt=1698019661&mv=u&mvi=1&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRAIgO-FZEZwAFb0Hhf6EEztH4DotoUBuDB54yYbZeHk39S0CIEwGTwPzXbajHnb-XDOBxy9m7Vax-sjlzLOi1TBlBJja";
address3 = "https://rr2---sn-q4flrn7y.googlevideo.com/videoplayback?expire=1698042785&ei=Qb81ZcepNPnavdIP1MeGyAk&ip=149.34.242.138&id=o-AB-iWdsI33iwvZjxtNuDf5F15Nm5iZktYiHKdNYDRAAq&itag=244&source=youtube&requiressl=yes&spc=UWF9f0KClcaL_CyBQvpRYTpn5ETj3c0&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=3060689&dur=35.767&lmt=1483597403461784&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=ANDROID&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AGM4YrMwRAIgShTTGCEKUo7qn71hgflOuAiugro4hZrkq0X0IcD-sjsCIHjZODwc-mE9dNNHnbCJC15VFYtX6cEa4L8pSr859aRR&redirect_counter=1&cm2rm=sn-q0ce77z&req_id=ab7fb4b9c809a3ee&cms_redirect=yes&mh=0p&mip=172.96.171.20&mm=34&mn=sn-q4flrn7y&ms=ltu&mt=1698020913&mv=m&mvi=2&pl=22&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AK1ks_kwRQIgboOTF-yNHSSwUmowbtlEWNaXY7a-W32npP3Z6wggiXQCIQCfq71jsu508-Qb5_Ok01-iUQo2UJQ3z6iFCGW8dINawQ%3D%3D";
//Handle 'Stop' button.
function btnStop_OnTouch() 
{
	player.Stop()
	btnPlay.SetTextColor( "#ffffff" );
	btnPause.SetTextColor( "#ffffff" );
	btnStop.SetTextColor( "#ef3434" );
}

//Handle 'Play' button.
function btnPlay_OnTouch() 
{
	player.Play()
	btnPlay.SetTextColor( "#33fe33" );
	btnPause.SetTextColor( "#ffffff" );
	btnStop.SetTextColor( "#ffffff" );
}

//Handle 'Pause' button.
function btnPause_OnTouch() 
{
	player.Pause()
	btnPlay.SetTextColor( "#ffffff" );
	btnPause.SetTextColor( "#efef34" );
	btnStop.SetTextColor( "#ffffff" );
}//Called when application is started.
function OnStart()
{   
	dur = null;
    //Create layout that fills the screen.
    lay = app.CreateLayout( "Linear", "Top,FillXY,HCenter" )
        
    //Create video view.
    player = app.CreateVideoView( 1, 0.40 )
    lay.AddChild( player )
    player.SetOnReady( player_OnReady )
    player.SetOnComplete( player_OnComplete )
	player.SetOnError( player_OnError )
    
    //Create video list.
    spin = app.CreateSpinner( "...,Theme Song,Mama Killed Him!" )
    spin.SetSize( 0.8, 0.07 )
    spin.SetOnTouch( spn_OnTouch )
    lay.AddChild( spin )
    
    layH = app.CreateLayout( "Linear", "FillX,Horizontal" )
	lay.AddChild( layH );
	//Create 'Play' button.
	btnPlay = app.CreateButton( "Play [fa-play]", 0.33, 0.06871, "FontAwesome,Gray" )
	btnPlay.SetTextColor( "#ffffff" );
	btnPlay.SetTextShadow( 3, 0, 0, "#000000" );
	//btnPlay.SetMargins( 0, 0.05, 0, 0 )
	btnPlay.SetOnTouch( btnPlay_OnTouch )
	layH.AddChild( btnPlay ) 
	
	//Create 'Pause' button.
	btnPause = app.CreateButton( "Pause [fa-pause]", 0.33, 0.06871, "FontAwesome,Gray")
	btnPause.SetTextColor( "#ffffff" );
	btnPause.SetTextShadow( 3, 0, 0, "#000000" );
	btnPause.SetOnTouch( btnPause_OnTouch )
	layH.AddChild( btnPause ) 
	
	//Create 'Stop' button.
	btnStop = app.CreateButton( "Stop [fa-stop]", 0.33, 0.06871, "FontAwesome,Gray" )
	btnStop.SetTextColor( "#ffffff" );
	btnStop.SetTextShadow( 3, 0, 0, "#000000" );
	btnStop.SetOnTouch( btnStop_OnTouch )
	layH.AddChild( btnStop ) 
	
	    
	
	//Create seek bar and add to layout.
	skb = app.CreateSeekBar( 0.8, -1 )
	skb.SetMargins( 0, 0.05, 0, 0 )
	skb.SetRange( 1.0 )
	skb.SetOnTouch( skb_OnTouch )
	lay.AddChild( skb )
	txt = app.CreateText( "", 1, 0.1 );
	lay.AddChild( txt )
    
    img = app.CreateImage( "Img/Theme Song.png", 0.95, -1 );
    lay.AddChild( img )
    //Add main layout to app.
    app.AddLayout( lay )
	
	//Start timer to update seek bar every second.
	setInterval( "Update()", 1000 )
}

//Handle file select.
function spn_OnTouch( item )
{
	
    if( item=="Theme Song" ) {
		app.ShowProgress( "Buffering..." )
		setTimeout( "app.HideProgress()", 7000 )
		img.SetImage( "Img/" + item + ".png" );	
			player.SetFile( address3);//"https://archive.org/download/NASAMissions/NASA Missions.mp4" )
	}
	else if( item=="Mama Killed Him!" ) {
		app.ShowProgress( "Buffering..." )
		setTimeout( "app.HideProgress()", 7000 )
	img.SetImage( "Img/" + item + ".png" );
		player.SetFile( address2);//"rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov")
		skb.SetVisibility( "Show" )
	}
}

function Update()
{
	prog = player.GetPosition()
	//alert(prog);
	if( dur ) skb.SetValue( prog / dur )
	txt.SetText( convertSecondsToHoursMinutesSeconds(prog) + " - " + convertSecondsToHoursMinutesSeconds(dur));//convertMS(parseInt(prog*10)).seconds);
	//if(prog >= 250.443) player.Stop(), player_OnReady();
}

//Called when user touches volume bar.
/*function skbVol_OnTouch( value )
{
	player.SetVolume( value, value )
}
*/
function convertSecondsToHoursMinutesSeconds(seconds) {
  var hours = Math.floor(seconds / 3600);
  if(hours<10){ hours = "0" + hours; }
  var minutes = Math.floor((seconds - (hours * 3600)) / 60);
  if(minutes<10){ minutes= "0" + minutes; }
  var remainingSeconds = seconds - (hours * 3600) - (minutes * 60);
  if(remainingSeconds<10){ remainingSeconds = "0" + parseFloat(remainingSeconds).toFixed(0); } else {"0" + parseFloat(remainingSeconds).toFixed(0); }
  var sec = parseFloat(remainingSeconds).toFixed(0);
  if(sec.length==1) sec = "0" + sec;
  return hours + ":" + minutes + ":" + sec;
}

function convertMS(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return {hours, minutes, seconds };
  //return hours.toString() + ":" + minutes.toString() + ":" + seconds;
}

function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

app.ShowPopup( seconds );
  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}//Called when file is ready to play.
function player_OnReady()
{
	app.HideProgress()
    player.Play()
    dur = player.GetDuration();
}

//Called when playback has finished.
function player_OnComplete()
{
    app.ShowPopup( "Finished" )
}

//Called when an error occurs.
function player_OnError()
{
    app.ShowPopup( "Error" )
}



//Called when user touches the seek bar.
function skb_OnTouch( value )
{
	player.SeekTo( dur * value )
}

//Update seek bar.
function Update7()
{
	dur = player.GetDuration()
	prog = player.GetPosition()
	if( dur ) skb.SetValue( prog / dur )
}