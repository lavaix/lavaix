const abtme = document.getElementById("abtme");
const mainheader = document.getElementById("mainheader");
const mainparagraph = document.getElementById("mainparagraph");
const home = document.getElementById("home");
const qna = document.getElementById("qna");

abtme.onclick = function(){
    mainheader.textContent = "Who Am I? Why Am I Here?";
    mainparagraph.innerHTML = ""
    qna.innerHTML = `
        <div style="text-align: left;">
            <strong style="font-size: xx-large;">Question 1: What do I do?</strong>
            <p style="font-size: x-large;">I am a student in 11th Grade. I wanted to learn some new skills that would help me in the future. Therefore, taking advantage of todays diverse internet, I learnt HTML, CSS and JavaScript.</p>
            <br>
            <strong style="font-size: xx-large;">Question 2: What are my interests?</strong>
            <p style="font-size: x-large;">I have a wide variety of interests. I like video games (alot), coding and other stuff related to computing.</p>
            <br>
            <strong style="font-size: xx-large;">Question 3: Why did I create this website?</strong>
            <p style="font-size: x-large;">I created this website to showcase my projects. Also in this day and age, it is very cool to have a website.</p>
            <br>
            <strong style="font-size: xx-large;">Question 4: How can you contact me?</strong>
            <p style="font-size: x-large;">Click on the button and find out ;)</p>
        </div>
    `;
    qna.style.display = "block";
}
home.onclick = function(){
    mainheader.textContent = "Welcome To My Website!";
    mainparagraph.textContent = "Hello Visitor! Welcome aboard on my website. Here you will find what I am currently doing and what I am up to. If I do anything cool, it will most likely be here. Go ahead and check my site. Use the navigation bar on top to see some cool stuff. Enjoy your stay!"
    qna.innerHTML = ``;
}