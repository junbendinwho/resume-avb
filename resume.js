$(document).ready(function () {

    $(".text-content").mCustomScrollbar({
        theme: "minimal",
        alwaysShowScrollbar: 0,
        scrollButtons: { enable: true },
        scrollInertia: 2000
    });

    loadSkills();

    $(".aboutme-container").hide();
    $(".contact-container").hide();

    dob = new Date("1995/07/28");
    var today = new Date();
    var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
    $('#age').text(age + " years old");

    updateNavUI();
});


// ========================
// STATE CONTROL
// ========================
var resumesel = 1;
var aboutmesel = 0;
var contactsel = 0;

// 🔒 GLOBAL ANIMATION LOCK
let isAnimating = false;


function updateNavUI() {

    $("#resume").css("color", resumesel ? "#4e90cd" : "#d6d6d6");
    $("#aboutme").css("color", aboutmesel ? "#4e90cd" : "#d6d6d6");
    $("#contact").css("color", contactsel ? "#4e90cd" : "#d6d6d6");
}

// ========================
// CURSOR
// ========================
var clientX = -300,
    clientY = -300,
    outerCursor = document.querySelector(".cursor--outer"),
    innerCursor = document.querySelector(".cursor--inner");

var initCursor = function () {
    document.addEventListener("mousemove", function (e) {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    var render = function () {
        TweenMax.set(outerCursor, {
            x: clientX,
            y: clientY,
            delay: .08,
            ease: Power1.easeOut
        });

        TweenMax.set(innerCursor, {
            x: clientX,
            y: clientY
        });

        requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
};

initCursor();


// ========================
// LAYOUT RESIZE
// ========================
function resizeLayout() {
    let mconth = $('.main-container').height();

    if ($(window).width() < 1400 && $(window).width() > 760) {
        $('.right-content').height(mconth * .8);

        if ($(window).height() < 750) $(".circlediv").hide();
        else $(".circlediv").show();

    } else {
        $('.right-content').height(mconth * .79);

        if ($(window).height() <= 750) $(".circlediv").hide();
        else $(".circlediv").show();
    }
}

resizeLayout();
$(window).resize(resizeLayout);


// ========================
// NAV CLICK: RESUME
// ========================
$('#resume').click(function () {

    if (isAnimating || resumesel == 1) return;
    isAnimating = true;

    var origheightrd = $('.right-content').height();

    if ($(window).width() < 760) {

        rconth = $('.right-content').height();
        swidthpx = rconth * .03;

        $(".right-content").animate({ height: swidthpx }, 500, function () {

            $('.percentage').text("0%");
            $('.myBar').width(0);

            $(".aboutme-container, .contact-container").hide();
            $(".resume-container").show();

        }).animate({ height: origheightrd }, 800, function () {
            loadSkills();
        });

    } else {

        rcontw = $('.right-content').width();
        swidthpx = rcontw * .45;

        $(".right-content").animate({ width: swidthpx }, function () {

            $('.percentage').text("0%");
            $('.myBar').width(0);

            $(".aboutme-container, .contact-container").hide();
            $(".resume-container").show();

        }).animate({ width: rcontw }, function () {
            loadSkills();
            $(".right-content").animate({ width: 'auto' });
        });
    }

    $(".circlediv").animate({ top: "41%" }, 600, function () {
        isAnimating = false; // UNLOCK HERE
    });

    $("#resume").css("color", "#4e90cd");
    $("#aboutme, #contact").css("color", "#d6d6d6");

    resumesel = 1;
    aboutmesel = 0;
    contactsel = 0;
});


// ========================
// NAV CLICK: ABOUT
// ========================
$('#aboutme').click(function () {

    if (isAnimating || aboutmesel == 1) return;
    isAnimating = true;

    var origheightrd = $('.right-content').height();

    if ($(window).width() < 760) {

        rconth = $('.right-content').height();
        swidthpx = rconth * .03;

        $(".right-content").animate({ height: swidthpx }, 500, function () {
            $(".resume-container, .contact-container").hide();
            $(".aboutme-container").show();
        }).animate({ height: origheightrd }, 800);

    } else {

        rcontw = $('.right-content').width();
        swidthpx = rcontw * .45;

        $(".right-content").animate({ width: swidthpx }, function () {
            $(".resume-container, .contact-container").hide();
            $(".aboutme-container").show();
        }).animate({ width: rcontw }, function () {
            $(".right-content").animate({ width: 'auto' });
        });
    }

    $(".circlediv").animate({ top: "49.7%" }, 600, function () {
        isAnimating = false;
    });

    $("#aboutme").css("color", "#4e90cd");
    $("#resume, #contact").css("color", "#d6d6d6");

    resumesel = 0;
    aboutmesel = 1;
    contactsel = 0;
});


// ========================
// NAV CLICK: CONTACT
// ========================
$('#contact').click(function () {

    if (isAnimating || contactsel == 1) return;
    isAnimating = true;

    var origheightrd = $('.right-content').height();

    if ($(window).width() < 760) {

        rconth = $('.right-content').height();
        swidthpx = rconth * .04;

        $(".right-content").animate({ height: swidthpx }, 500, function () {
            $(".resume-container, .aboutme-container").hide();
            $(".contact-container").show();
        }).animate({ height: origheightrd }, 800);

    } else {

        rcontw = $('.right-content').width();
        swidthpx = rcontw * .45;

        $(".right-content").animate({ width: swidthpx }, function () {
            $(".resume-container, .aboutme-container").hide();
            $(".contact-container").show();
        }).animate({ width: rcontw }, function () {
            $(".right-content").animate({ width: 'auto' });
        });
    }

    $(".circlediv").animate({ top: "58.1%" }, 600, function () {
        isAnimating = false;
    });

    $("#contact").css("color", "#4e90cd");
    $("#resume, #aboutme").css("color", "#d6d6d6");

    resumesel = 0;
    aboutmesel = 0;
    contactsel = 1;
});


// ========================
// HOVER STATES
// ========================
$("#resume").hover(
    function () { $("#resume").css("color", "#4e90cd"); },
    function () { $("#resume").css("color", resumesel ? "#4e90cd" : "#d6d6d6"); }
);

$("#aboutme").hover(
    function () { $("#aboutme").css("color", "#4e90cd"); },
    function () { $("#aboutme").css("color", aboutmesel ? "#4e90cd" : "#d6d6d6"); }
);

$("#contact").hover(
    function () { $("#contact").css("color", "#4e90cd"); },
    function () { $("#contact").css("color", contactsel ? "#4e90cd" : "#d6d6d6"); }
);


// ========================
// SKILLS
// ========================
let skillsData = [];

function loadSkills() {
    if (skillsData.length > 0) {
        renderSkills(skillsData);
        return;
    }

    $.getJSON("skills.json", function (skills) {
        skillsData = skills;
        renderSkills(skillsData);
    });
}

function renderSkills(skills) {

    const container = $("#skillset");
    container.empty();

    skills.forEach(skill => {

        const html = `
            <div class="skill-container">
                <div class="skill-text">
                    <h4 class="skillTittle">
                        ${skill.name}
                        ${skill.sub ? `<span>${skill.sub}</span>` : ""}
                    </h4>
                    <h4 class="percentage">0%</h4>
                </div>
                <div class="barbackground">
                    <div class="myBar"></div>
                </div>
            </div>
        `;

        const element = $(html);
        container.append(element);

        const bar = element.find(".myBar")[0];
        const percentEl = element.find(".percentage")[0];

        animateBar(bar, percentEl, skill.percent);
    });
}

function animateBar(bar, percentEl, target) {

    let width = 0;

    const id = setInterval(() => {
        if (width >= target) {
            clearInterval(id);
        } else {
            width++;
            bar.style.width = width + "%";
            percentEl.innerText = width + "%";
        }
    }, 17);
}