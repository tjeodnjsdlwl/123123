
//스티키 헤더 백그라운드 변경
$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if(scroll > 42) {
        $('.sticky_background').addClass('scrolled');
    } else {
      $('.sticky_background').removeClass('scrolled');
    }
});





//intro 타이틀, 링크리스트 오파시티
gsap.registerPlugin(ScrollTrigger);

gsap.to(".sc_intro .intro_title, .sc_intro .watch_list", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".sc_intro",
        start: "15% top",
        end: "28% top",
        scrub: 1,
    },
});


//intro 헤드라인 
const tl1 = gsap.timeline({scrollTrigger: {
    trigger: ".sc_intro",
    start: "-96px top",
    end: "35% top",
    scrub: true,
    markers: false
}});
tl1.to(".sc_intro .intro_headline", {duration: 1, scale: 1.15})
   .to(".sc_intro .intro_headline", {opacity: 0},"-=0.5");

   
//intro 서브 영역
const tl2 = gsap.timeline({scrollTrigger: {
    trigger:".sc_intro",
    start: "39% top",
    end: "59% top",
    scrub: true,
    markers: false
}});
tl2.to(".sc_intro .sub_area", {duration: 1, scale: 0.97})
   .to(".sc_intro .sub_area", {duration: 0.5, opacity: 1},"-=1");


//value 동영상 백그라운드
const tl3 = gsap.timeline({scrollTrigger: {
    trigger: ".sc_value .video_area",
    start: "0% top",
    end: "180% top",
    scrub: true,
}});
tl3.to(".sc_value .video_area",{duration: 0.1, opacity: 1})
   .to(".sc_intro .sub_area", {duration: 0.1, opacity: 0},"-=0.1")
   .to(".sc_value .video_area", {duration: 0.2, opacity: 0},"1");


//value 컨텐츠 리스트 오파시티
// const tl4 = gsap.timeline({scrollTrigger: {
//     trigger: ".sc_value .content_list",
//     start: "0% bottom",
//     end: "130% bottom",
//     scrub: 1,
// }});
// tl4.to(".sc_value .content_item:nth-child(1)",{opacity: 1},"-=0.2")
//    .to(".sc_value .content_item:nth-child(1)",{duration: 0.2, opacity: 0.15})
//    .to(".sc_value .content_item:nth-child(2)",{opacity: 1},"-=0.2")
//    .to(".sc_value .content_item:nth-child(2)",{duration: 0.2, opacity: 0.15})
//    .to(".sc_value .content_item:nth-child(3)",{opacity: 1},"-=0.2")
//    .to(".sc_value .content_item:nth-child(3)",{duration: 0.2, opacity: 0.15})
//    .to(".sc_value .content_item:nth-child(4)",{opacity: 1},"-=0.2")
//    .to(".sc_value .content_item:nth-child(4)",{duration: 0.2, opacity: 0.15})
//    .to(".sc_value .content_item:nth-child(5)",{opacity: 1},"-=0.2");

/**
 * @i = 인덱스
 * @l = 엘리먼트
 */
// $('.sc_value .content_item').each(function(i,l){
//     const tl4 = gsap.timeline({scrollTrigger: {
//         trigger: l,
//         start: "0% 70%",
//         end: "130% 70%",
//         scrub: 1,
//         markers:true,
//     }});
//     tl4
//     .to(l,{opacity: 1},"-=0.2")
//     .to(l,{duration: 0.2, opacity: 0.15})
// })

const valueContentEl = document.querySelectorAll('.sc_value .content_item');
let i = 0;
valueContentEl.forEach(l => {
    const tl4 = gsap.timeline({scrollTrigger: {
        trigger: l,
        start: "0% 70%",
        end: "130% 70%",
        scrub: 1,
        // markers:true,
    }});

    if(i === 4){
        tl4
        .to(l,{opacity: 1},"-=0.2")
    }else{
        tl4
        .to(l,{opacity: 1},"-=0.2")
        .to(l,{duration: 0.2, opacity: 0.15})
    }
    i++;
});







//audio group_xray 스티키
const tl5 = gsap.timeline({scrollTrigger: {
    defaults:{
        ease:'none'
    },
    trigger: ".group_xray",
    start: "0% top",
    end: "100% 150%",
    // end:"200%",
    scrub: 1,
    // pin:true,
    // markers:true,
}});
gsap.set('.group_xray .desc01,.group_xray .desc02,.group_xray .desc03',{y:150, opacity:0})
tl5
   .addLabel('a')
   .to(".group_xray .desc01",{y:-130, opacity: 1},'a')
   .to(".group_xray .desc01", {y:-200,opacity: 0},'a+1')
   .to(".group_xray .desc02",{y:-130, opacity: 1},'a+1.5')
   .to(".group_xray .desc02", {y:-200, opacity: 0},'a+2')
   .to(".group_xray .lockup_left img", {duration:2,scale:0.9},'a')
   .to(".group_xray .lockup_left img", {opacity: 0},'a+2')
    .addLabel('b')
    .to(".group_xray .lockup_right img", {opacity: 1, scale:0.95},'b')
    .to(".group_xray .lockup_right img", {scale:0.9},'b+0.5')
    .to(".group_xray .lockup_right img", {opacity:0},'b+0.5')
    .to(".group_xray .desc03",{y:-130, opacity: 1},'b')
    .to(".group_xray .desc03", {y:-200,opacity: 0},'b+0.5')
    .addLabel('c')
    .to(".group_xray .glitter_area video", { opacity: 1, scale: 1},'c-=0.5')
    .to(".group_xray .glitter_area img", { opacity: 1},'c-=0.5')
    .to(".group_xray .glitter_area img", { scale: 0.78},'c-=0.5')

    .to(".group_xray .glitter_area", { opacity: 0,})

//noise 통풍구
const tl6 = gsap.timeline({scrollTrigger: {
    trigger: ".sc_noise .group_canceling",
    start:"0% center",
    end:"50% center",
    scrub: true,
}});
tl6.fromTo(".sc_noise .right_area img", {opacity: 0.2, y: 100}, {duration: 1, opacity: 1, y: 0})
   .fromTo(".sc_noise .right_area .bar", {height: 10}, {duration: 1, height: 350},"-=1");

   //noise 이어팁 슬라이딩
gsap.set('.sc_noise .group_eartip .eartip_sequence',{opacity: 0, x: 30})
const tl7 = gsap.timeline({scrollTrigger: {
    trigger: ".sc_noise .group_eartip",
    start:"5% center",
    end:"30% center",
    scrub: 1,
}});
tl7.to('.sc_noise .group_eartip .eartip_sequence',{opacity: 1, x: 0,
    stagger:0.1
})

// @@@@
$('.btn-control').click(function(){
    if($(this).hasClass('on')){
        $(this).parents('.video-frame').find('video').get(0).play();
        $(this).attr('aria-label','정지').removeClass('on');
    }else{
        $(this).parents('.video-frame').find('video').get(0).pause();
        $(this).attr('aria-label','재생').addClass('on');
    }
})



//noise 스와이프 터치 닷
const tl8 = gsap.timeline({scrollTrigger: {
    trigger: ".sc_noise .group_control",
    start:"top center",
    end:"50% center",
    toggleActions: "restart none restart none",
}});
tl8.fromTo(".sc_noise .dot",{opacity: 0.8},{duration: 1, opacity:0, top: 0,
     ease: Power2.easeIn})
   .fromTo(".sc_noise .dot",{opacity: 0.8},{duration: 1, opacity:0, top: 170, delay: 0.3, ease: Power2.easeIn})


//personalize 댄서 동영상 스크롤 컨트롤(시작 지점 설정 못하겟음)
const vid = document.getElementById('dancer_video');

ScrollTrigger.create({
    trigger:".sc_personalize .group_dancer",
    start:"0% 0%",
    end:"100% 50%",
    // markers:true,
    onEnter:function(self){
        setInterval(function(){
            vid.currentTime = self.progress.toFixed(3)*4;
        }, 40);
    },
})

gsap.set('.sc_personalize p.text_wrap01',{opacity:0})
$('.sc_personalize p.text_wrap01').each(function(i,l){
    const tl4 = gsap.timeline({scrollTrigger: {
        trigger: l,
        start: "0% 70%",
        end: "100% 40%",
        scrub: 1,
        // markers:true,
    }});
    tl4
    .to(l,{y:-50,opacity: 1},"-=0.2")
    .to(l,{y:-150, opacity: 0})
})



gsap.to('.sc_personalize .group_dancer .video_area',{
    scrollTrigger: {
        trigger: ".sc_case",
        start:"top 50%",
        end:"top 30%",
        // markers:true,
        scrub:1,
    },
    opacity:0,
})




// var vid = document.getElementById('dancer_video');

// window.onscroll = function(){
//     vid.pause();
// };

// setInterval(function(){
//     vid.currentTime = window.pageYOffset/230;
// }, 40);


//personalize 댄서 동영상 텍스트 스크롤
// const tl9 = gsap.timeline({scrollTrigger: {
//     trigger: ".sc_personalize .group_dancer",
//     start:"0% top",
//     end:"100% top",
//     scrub: 1,
//     markers: true,
// }});
// tl9.to(".sc_personalize .group_dancer .scroll01",{duration:1, opacity:1})
//    .to(".sc_personalize .group_dancer .scroll01",{duration:1, opacity:0})



//intro 캔버스 이미지 시퀀스
var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');
var scrollYPos = 0;
var img = new Image();

img.src = "./images/canvas/0.png";//스크롤 전 첫 이미지

window.addEventListener('scroll', function(e){
    scrollYPos = Math.round(window.scrollY/12);

    if(scrollYPos > 64) {
        scrollYPos = 64;
    }

    player(scrollYPos);
})

function player(num) {        //img가 1씩 증가할때마다 이미지가 바뀌는 함수
    img.src = "./images/canvas/" + num + ".png";
}

img.addEventListener('load', function(e) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(img, 0, 0);
})



