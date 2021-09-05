
function changeLogo()
{
    document.getElementById('logo').src='image/logo2.png';
}

function previousLogo()
{
    document.getElementById('logo').src='image/logo.png';
}

function TaskView()
{
    document.getElementById('task').style='color: #fff; cursor: context-menu;'
    document.getElementById('task').innerHTML="| | | |";
}

function TaskViewReset()
{
    document.getElementById('task').style='color: #fff';
    document.getElementById('task').innerHTML="| |";
}

document.getElementById('task').style='color: #fff';
document.getElementById('task').innerHTML="| |";

// Date & Time function start here
window.onload = function dateAndtime()
{
    const date = new Date();

    const months = [ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    document.getElementById('time').style='color: #fff; font-size: 13px;';
    
    if( date.getMinutes() >= 10 )
    {
        document.getElementById('time').innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} <br> ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    }
    else
    {
        zeros = 0;
        document.getElementById('time').innerHTML=`${date.getHours()}:${zeros}${date.getMinutes()}:${date.getSeconds()} <br> ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    setTimeout(dateAndtime,1000)
}
// Date & Time end here


// show & hide
// start menu
let getInput = document.getElementById('ShowAndHide');

document.getElementById('mainMenu').style='display:none'; // first hide the menu 

getInput.addEventListener('click', () => {

    let getDivMenu = document.getElementById('mainMenu');

    if( getDivMenu.style.display == "none" )
    {
        getDivMenu.style.display = 'block';
    }
    else
    {
        getDivMenu.style.display = 'none';
    }

    // to close the wifiMenu
    document.getElementById('wifimenu').style='display:none;';
});

// wifi menu

document.getElementById('wifimenu').style='display:none;';

let getwifiInput = document.getElementById('wifiForJS');

getwifiInput.addEventListener('click', () =>{

    let wifi_ON_OFF = document.getElementById('wifimenu');

    if(wifi_ON_OFF.style.display == 'none')
    {
        wifi_ON_OFF.style.display = 'block';
    }
    else
    {
        wifi_ON_OFF.style.display = 'none';
    }
    
    // to close the start Menu
    document.getElementById('mainMenu').style='display:none';
});

function connect()
{
    document.getElementById('hidden').style='color: rgb(190, 190, 207); font-size: 15px; display:block; margin-left: 54px; margin-top: -15px; font-family: tahoma;';
    document.getElementById('wifiSize').style='height:170px; background-color: #32669a;';
    // change code with Connect Wifi   --->  document.getElementById('checkbox').style='margin-top: 10px; width: 20px; height: 20px; margin-left: 50px; display: block;';
    document.getElementById('msg').style='font-family: tahoma; letter-spacing: 1px; margin-left: 80px; margin-top: 11px; display: block; color: #fff;';
    document.getElementById('btn').style='display: block;';

    document.getElementById('btn').innerHTML="Connect";
    // To change Background Color 
    let getinput = document.getElementById('wifiSize');

    getinput.addEventListener('mouseover', () => {
        
        document.getElementById('wifiSize').style='background-color: #3573b1; height: 170px;';
    });

    getinput.addEventListener('mouseout', () => {
        
        document.getElementById('wifiSize').style='background-color: #32669a; height: 170px';
    });

    let box = document.getElementById('checkbox');
    let btn = document.getElementById('btn');

    // To Connect The Wifi
    if( box.style.display === 'block' )
    {
        box.style.display = 'none';
        box.style='margin-top: 10px; width: 20px; height: 20px; margin-left: 50px;';
        document.getElementById('msg').innerHTML='Checking network requirements';
       // To connection time function 
       setTimeout(ConnectToTheNetwork,3000);
    }
    else
    {
        box.style='margin-top: 10px; width: 20px; height: 20px; margin-left: 50px;';
        box.style.display = 'block';
        document.getElementById('msg').innerHTML='Connect automatically';
        document.getElementById('hidden').innerHTML='Secured';

        // remove png
        document.getElementById('notconfig').src='image/notconfig.png';
        document.getElementById('wifi').src='image/wifioff.png';
    }

    function ConnectToTheNetwork()
    {
        document.getElementById('hidden').innerHTML='Connected, secured'
        document.getElementById('msg').style.textDecoration = 'underline';
        document.getElementById('msg').innerHTML='properties';

        // connecting png
        document.getElementById('notconfig').src='image/wifion.png';
        document.getElementById('wifi').src='image/wifion.png';
        
        btn.innerHTML = 'Disconnect';
    }

}

// show & hide

let moveInput = document.querySelector('.Calculator');

moveInput.addEventListener('dblclick', mousedown);

function mousedown()
{
    moveInput.addEventListener('mousemove', (e) =>{
        let x = e.clientX - 175 + 'px';
        let y = e.clientY - 250 + 'px';

        this.style.left = x;
        this.style.top = y;
    });

    moveInput.addEventListener('mouseup',(ev) => {
  
            let x = ev.clientX - 175 + 'px';
            let y = ev.clientY - 250 + 'px';
    
            this.style.left = x;
            this.style.top = y;
    });

}
