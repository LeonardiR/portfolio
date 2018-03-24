jQuery(document).ready(function(){

    //B-BOY//
    function opacity(){
        var tl = new TimelineMax({repeat:-1, repeatDelay:3});
        tl.to("#box", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box2", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box3", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box4", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box5", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box6", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box7", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box8", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box9", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box10", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box11", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box12", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box13", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box14", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box15", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box16", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box17", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box18", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box19", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box20", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box21", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box22", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box23", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
        tl.to("#box24", 0.2, {y:0, opacity:1, ease: SteppedEase.config(4)});
    }

    opacity();

    var reverseRepeat = function(tl) {
        tl.reverse(0); // 0 sets the playhead at the end of the animation
    };

    function rot(){
        var tl = new TimelineMax({repeat:-1, onReverseComplete:reverseRepeat, onReverseCompleteParams:['{self}']});
        tl.to("#lentes", 0.2,{rotation:10, ease: SteppedEase.config(1),force3D:true, transformOrigin:"center center"});
        tl.to("#lentes", 0.2,{rotation:-10, ease: SteppedEase.config(1),force3D:true, transformOrigin:"center center"});

    }

    rot();

    TweenMax.to("#boca", 0.5,{scaleY:0.4, repeat:-1, ease: SteppedEase.config(1),force3D:true});

    TweenMax.to("#cuerpo", 0.5,{scaleX:-1, repeat:-1, ease: SteppedEase.config(1),force3D:true,transformOrigin:"center center"});


//LOGO RADIO//

    wiggle(".rayo");

    function wiggle(selector){
        jQuery(selector).each(function() {
            wiggleProp(this, 'scale', 0.98, 1);
            wiggleProp(this, 'rotation', -2, 2);
            wiggleProp(this, 'x', -5, 1);
            wiggleProp(this, 'y', -5, 1);
        })
    }

    function wiggleProp(element, prop, min, max) {
        var duration = Math.random() * (.1 - .2) + .1;

        var tweenProps = {
            ease: Power1.easeInOut,
            onComplete: wiggleProp,
            onCompleteParams: [element, prop, min, max]
        };
        tweenProps[prop] = Math.random() * (max - min) + min;

        TweenMax.to(element, duration, tweenProps);
    }



    //BEAT MAKER//


    function body(){

        var tl3 = new TimelineMax({repeat:-1});
        tl3.to("#body", 0.2,{y:10});
        tl3.to("#body", 0.2,{y:-10});
        tl3.to("#body", 0.1,{y:0});

    }

    body();


    function hand(){

        var tl2 = new TimelineMax({repeat:-1});
        tl2.to("#hand", 0.5,{rotation:15, transformOrigin:"center bottom"});
        tl2.to("#hand", 0.5,{rotation:-15, transformOrigin:"center bottom"});
        tl2.to("#hand", 0.2,{rotation: 0, transformOrigin:"center bottom"});

    }

    hand();

    function vol(){

        var tl2 = new TimelineMax({repeat:-1});
        tl2.to("#volume", 0.5,{rotation:-180, transformOrigin:"40% center"});
        tl2.to("#volume", 0.2,{rotation: 0, transformOrigin:"40% center"});

    }

    vol();

    function ojos(){

        var tl4 = new TimelineMax({repeat:-1, repeatDelay:Math.floor(Math.random() * 4) + 1});

        tl4.to("#ojos", 0.2,{opacity:0, ease: SteppedEase.config(1)});
        tl4.to("#ojos", 0.2,{opacity:1, ease: SteppedEase.config(1)});
        tl4.to("#ojos", 0.2,{opacity:0, ease: SteppedEase.config(1)});
        tl4.to("#ojos", 0.2,{opacity:1, ease: SteppedEase.config(1)});
    }

    ojos();

    function block1(){

        var tl5 = new TimelineMax({repeat:-1});

        tl5.to("#1", Math.floor(Math.random() * 3) + 1,{fill: "rgb(241,91,37)", ease: SteppedEase.config(1)});
        tl5.to("#1", Math.floor(Math.random() * 3) + 1,{fill: "rgb(60, 101, 175)", ease: SteppedEase.config(1)});
    }

    block1();

    function block2(){

        var tl5 = new TimelineMax({repeat:-1});

        tl5.to("#2", Math.floor(Math.random() * 3) + 1,{fill: "rgb(241,91,37)", ease: SteppedEase.config(1)});
        tl5.to("#2", Math.floor(Math.random() * 3) + 1,{fill: "rgb(60, 101, 175)", ease: SteppedEase.config(1)});
    }

    block2();

    function block3(){

        var tl5 = new TimelineMax({repeat:-1});

        tl5.to("#3", Math.floor(Math.random() * 3) + 1,{fill: "rgb(241,91,37)", ease: SteppedEase.config(1)});
        tl5.to("#3", Math.floor(Math.random() * 3) + 1,{fill: "rgb(60, 101, 175)", ease: SteppedEase.config(1)});
    }

    block3();


    function block4(){

        var tl5 = new TimelineMax({repeat:-1});

        tl5.to("#4", Math.floor(Math.random() * 3) + 1,{fill: "rgb(241,91,37)", ease: SteppedEase.config(1)});
        tl5.to("#4", Math.floor(Math.random() * 3) + 1,{fill: "rgb(60, 101, 175)", ease: SteppedEase.config(1)});
    }

    block1();

    function block5(){

        var tl5 = new TimelineMax({repeat:-1});

        tl5.to("#5", Math.floor(Math.random() * 3) + 1,{fill: "rgb(241,91,37)", ease: SteppedEase.config(1)});
        tl5.to("#5", Math.floor(Math.random() * 3) + 1,{fill: "rgb(60, 101, 175)", ease: SteppedEase.config(1)});
    }

    block5();

    function block6(){

        var tl5 = new TimelineMax({repeat:-1});

        tl5.to("#6", Math.floor(Math.random() * 3) + 1,{fill: "rgb(241,91,37)", ease: SteppedEase.config(1)});
        tl5.to("#6", Math.floor(Math.random() * 3) + 1,{fill: "rgb(60, 101, 175)", ease: SteppedEase.config(1)});
    }

    block6();


    function block7(){

        var tl5 = new TimelineMax({repeat:-1});

        tl5.to("#7", Math.floor(Math.random() * 3) + 1,{fill: "rgb(241,91,37)", ease: SteppedEase.config(1)});
        tl5.to("#7", Math.floor(Math.random() * 3) + 1,{fill: "rgb(60, 101, 175)", ease: SteppedEase.config(1)});
    }

    block7();


    function block8(){

        var tl5 = new TimelineMax({repeat:-1});

        tl5.to("#8", Math.floor(Math.random() * 3) + 1,{fill: "rgb(241,91,37)", ease: SteppedEase.config(1)});
        tl5.to("#8", Math.floor(Math.random() * 3) + 1,{fill: "rgb(60, 101, 175)", ease: SteppedEase.config(1)});
    }

    block8();


    function block9(){

        var tl5 = new TimelineMax({repeat:-1});

        tl5.to("#9", Math.floor(Math.random() * 3) + 1,{fill: "rgb(241,91,37)", ease: SteppedEase.config(1)});
        tl5.to("#9", Math.floor(Math.random() * 3) + 1,{fill: "rgb(60, 101, 175)", ease: SteppedEase.config(1)});
    }

    block9();

    //76//

    function l76(){

        var tl5 = new TimelineMax({repeat:-1});
        tl5.to("#siete_brazo", 0.5,{x:0, rotation:360, transformOrigin:"center center",  force3D:true});
        tl5.to("#siete_cuerpo", 0.5,{y:0, rotation:360, transformOrigin:"center center", force3D:true});
        tl5.to("#seis", 0.5,{x:0, rotation:540, transformOrigin:"50% 65.5%", force3D:true});
        tl5.to("#seis", 1,{rotation:360, transformOrigin:"50% 65.5%", force3D:true, ease: Bounce.easeOut});
        tl5.to("#letras", 0.3,{scale:1, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:0.6, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:1, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:0.6, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:1, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:0.6, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:1, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:0.6, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:1, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:0.6, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:1, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:0.6, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:1, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:0.6,  force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:1, force3D:true, transformOrigin:"center center"});
        tl5.to("#letras", 0.3,{scale:0.6, force3D:true, transformOrigin:"center center"});
    }

    l76();

    //OCTO//

    function rotB(){
        var tl = new TimelineMax({repeat:-1});
        tl.to("#octobody", 1,{rotation:12, transformOrigin:"center center"});
        tl.to("#octobody", 1,{rotation:-12, transformOrigin:"center center"});
        tl.to("#octobody", 0.15,{rotation:0, transformOrigin:"center center"});
    }

    rotB();

    function movB(){
        var tl = new TimelineMax({repeat:-1});
        tl.to("#octobody", 2,{y:25});
        tl.to("#octobody", 2,{y:-25});
        tl.to("#octobody", 0.5,{y:0});
    }


    movB();

    function movTy(){
        var tl = new TimelineMax({repeat:-1});
        tl.to("#tentaculos", 0.5,{y:10, x:10});
        tl.to("#tentaculos", 0.5,{y:-10, x:-10});
        tl.to("#tentaculos", 0.1,{y:0, x:0});
    }


    movTy();

    function rotS(){
        var tl = new TimelineMax({repeat:-1, repeatDelay:3});
        tl.to("#spray_can_tentacle", 0.1,{y:15});
        tl.to("#spray_can_tentacle", 0.1,{y:-15});
        tl.to("#spray_can_tentacle", 0.1,{y:15});
        tl.to("#spray_can_tentacle", 0.1,{y:-15});
        tl.to("#spray_can_tentacle", 0.1,{y:15});
        tl.to("#spray_can_tentacle", 0.1,{y:-15});
        tl.to("#spray_can_tentacle", 0.1,{y:0});
        tl.to("#spray", 0.1,{opacity:1});
        tl.to("#spray", 0.4,{x:50});
        tl.to("#spray", 0.1,{opacity:0});
        tl.to("#spray", 0.2,{x:0});
        tl.to("#spray", 0.1,{opacity:1});
        tl.to("#spray", 0.4,{x:50});
        tl.to("#spray", 0.1,{opacity:0});
        tl.to("#spray", 0.2,{x:0});
        tl.to("#spray", 0.1,{opacity:1});
        tl.to("#spray", 0.4,{x:50});
        tl.to("#spray", 0.1,{opacity:0});
    }

    rotS();

//MIC//




    function movmic(){
        var tl = new TimelineMax({repeat:-1});
        tl.to("#body2", 0.5,{y:-50 });
        tl.to("#body2", 1,{y:0, ease: Bounce.easeOut});
    }

    movmic();



    function mouthmic(){
        var tl = new TimelineMax({repeat:-1});
        tl.to("#mouth", 0.2,{scaleY:0.7, transformOrigin:"center center"});
        tl.to("#mouth", 0.2,{scaleY:1, transformOrigin:"center center"});
        tl.to("#mouth", 0.2,{scaleY:0.4, transformOrigin:"center center"});
        tl.to("#mouth", 0.2,{scaleY:1, transformOrigin:"center center"});
        tl.to("#mouth", 0.2,{scaleY:0.4, transformOrigin:"center center"});
        tl.to("#mouth", 0.2,{scaleY:0.7, transformOrigin:"center center"});
        tl.to("#mouth", 0.2,{scaleY:1, transformOrigin:"center center"});
        tl.to("#mouth", 0.2,{scaleY:0.4, transformOrigin:"center center"});
        tl.to("#mouth", 0.2,{scaleY:1, transformOrigin:"center center"});
        tl.to("#mouth", 0.2,{scaleY:0.4, transformOrigin:"center center"});
        tl.to("#mouth", 0.2,{scaleY:1, transformOrigin:"center center"});


    }


    mouthmic();

    function rotBrowL(){
        var tl = new TimelineMax({repeat:-1});
        tl.to("#brow_L", 0.2,{y:4});
        tl.to("#brow_L", 0.2,{y:0});
        tl.to("#brow_L", 0.2,{y:4});
        tl.to("#brow_L", 0.2,{y:0});
        tl.to("#brow_L", 0.2,{y:4});
        tl.to("#brow_L", 0.2,{y:0});

    }

    rotBrowL();

    function rotBrowR(){
        var tl = new TimelineMax({repeat:-1});
        tl.to("#brow_R", 0.2,{y:4});
        tl.to("#brow_R", 0.2,{y:0});
        tl.to("#brow_R", 0.2,{y:4});
        tl.to("#brow_R", 0.2,{y:0});
        tl.to("#brow_R", 0.2,{y:4});
        tl.to("#brow_R", 0.2,{y:0});
    }

    rotBrowR();


    wiggle(".voice");

    function wiggle(selector){
        jQuery(selector).each(function() {
            wiggleProp(this, 'scale', 0.98, 1);
            wiggleProp(this, 'rotation', -2, 2);
            wiggleProp(this, 'x', -5, 1);
            wiggleProp(this, 'y', -5, 1);
        })
    }

    function wiggleProp(element, prop, min, max) {
        var duration = Math.random() * (.1 - .2) + .1;

        var tweenProps = {
            ease: Power1.easeInOut,
            onComplete: wiggleProp,
            onCompleteParams: [element, prop, min, max]
        };
        tweenProps[prop] = Math.random() * (max - min) + min;

        TweenMax.to(element, duration, tweenProps);
    }


//ANTENA//


    function lines(){
        var tl = new TimelineMax({repeat:-1});
        tl.to("#line1", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line2", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line3", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line4", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line5", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line6", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line7", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line8", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line9", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line10", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line11", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line12", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line13", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line14", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line15", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line16", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line17", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line18", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line19", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line20", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line21", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line22", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line23", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line24", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line25", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line26", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line27", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line28", 0.1,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#line29", 0.1,{opacity:1, ease: SteppedEase.config(1)});



    }

    lines();


    function letras(){
        var tl = new TimelineMax({repeat:-1, repeatDelay:3});
        tl.to("#letra1", 0.1,{opacity:0.2 , ease: SteppedEase.config(1)});
        tl.to("#letra1", 0.01,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#letra2", 0.1,{opacity:0.2, ease: SteppedEase.config(1)});
        tl.to("#letra2", 0.01,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#letra3", 0.1,{opacity:0.2, ease: SteppedEase.config(1)});
        tl.to("#letra3", 0.01,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#letra4", 0.1,{opacity:0.2, ease: SteppedEase.config(1)});
        tl.to("#letra4", 0.01,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#letra5", 0.1,{opacity:0.2, ease: SteppedEase.config(1)});
        tl.to("#letra5", 0.01,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#letra6", 0.1,{opacity:0.2, ease: SteppedEase.config(1)});
        tl.to("#letra6", 0.01,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#letra7", 0.1,{opacity:0.2, ease: SteppedEase.config(1)});
        tl.to("#letra7", 0.01,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#letra8", 0.1,{opacity:0.2, ease: SteppedEase.config(1)});
        tl.to("#letra8", 0.01,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#letra9", 0.1,{opacity:0.2, ease: SteppedEase.config(1)});
        tl.to("#letra9", 0.01,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#letra10", 0.1,{opacity:0.2, ease: SteppedEase.config(1)});
        tl.to("#letra10", 0.01,{opacity:1, ease: SteppedEase.config(1)});
        tl.to("#letra11", 0.1,{opacity:0.2, ease: SteppedEase.config(1)});
        tl.to("#letra11", 0.01,{opacity:1, ease: SteppedEase.config(1)});

    }

    letras();

//FRESH CAN//

    function body3(){

        var tl3 = new TimelineMax({repeat:-1});
        tl3.to("#body3", 0.5,{rotation:7, transformOrigin:"center bottom"});
        tl3.to("#body3", 0.5,{rotation:-7 , transformOrigin:"center bottom"});
        tl3.to("#body3", 0.2,{rotation:0 , transformOrigin:"center bottom"});

    }

    body3();

    function arm(){

        var tl3 = new TimelineMax({repeat:-1});
        tl3.to("#arm", 0.7,{rotation:-20, transformOrigin:"center top"});
        tl3.to("#arm", 0.7,{rotation:0 , transformOrigin:"center top"});

    }

    arm();


    function brows2 (){

        var tl3 = new TimelineMax({repeat:-1});
        tl3.to("#brows2", 0.2,{y:3});
        tl3.to("#brows2", 0.2,{y:-3});
        tl3.to("#brows2", 0.05,{y:0});

    }

    brows2();

    function letters (){

        var tl3 = new TimelineMax({repeat:-1, repeatDelay:3});
        tl3.to("#le1", 0.4, {x:0, opacity:1});
        tl3.to("#le2", 0.4, {x:0, opacity:1});
        tl3.to("#le3", 0.4, {x:0, opacity:1});
        tl3.to("#le4", 0.4, {x:0, opacity:1});
        tl3.to("#le5", 0.4, {x:0, opacity:1});
        tl3.to("#le6", 0.4, {x:0, opacity:1});
        tl3.to("#le7", 0.4, {y:0, opacity:1});

        }

    letters();

//MUSIC//

    function mus(){

        var tl3 = new TimelineMax({repeat:-1});
        tl3.to("#mus", 0.5,{rotation:490, transformOrigin:"center top", force3D:true});
        tl3.to("#mus", 0.5,{rotation:330, transformOrigin:"center top", force3D:true});
        tl3.to("#mus", 0.5,{rotation:380, transformOrigin:"center top", force3D:true});
        tl3.to("#mus", 0.5,{rotation:350, transformOrigin:"center top", force3D:true});
        tl3.to("#mus", 0.3,{rotation:360 , transformOrigin:"center top", force3D:true});
        tl3.to("#mus", 0.3,{scale:0.9 , transformOrigin:"center center", force3D:true});
        tl3.to("#mus", 0.3,{scale:1 , transformOrigin:"center center", force3D:true});
        tl3.to("#mus", 0.3,{scale:0.9 , transformOrigin:"center center", force3D:true});
        tl3.to("#mus", 0.3,{scale:1 , transformOrigin:"center center", force3D:true});
        tl3.to("#mus", 0.3,{scale:0.9 , transformOrigin:"center center", force3D:true});
        tl3.to("#mus", 0.3,{scale:1 , transformOrigin:"center center", force3D:true});
        tl3.to("#mus", 0.3,{scale:0.9 , transformOrigin:"center center", force3D:true});
        tl3.to("#mus", 0.3,{scale:1 , transformOrigin:"center center", force3D:true});


    }

    mus();

});