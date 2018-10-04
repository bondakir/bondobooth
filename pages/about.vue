<template>
    <div class="about">
        <div class="about1">
            <img class="aboutimage" src="~/assets/images/aboutheaderphoto.jpg">
        </div>
        <section class="bahndoh">
            <h2>Bondo: (noun) /bahn-doh/</h2>
            <br>
            <p><strong>1. An experience that binds you with others by just being yourself.</strong></p>
            <br>
            <p><em>"Wow, what a magical night. I feel so connected to these folks in my pictures and I 
                barely know them!"</em></p>
            <p><em>"Well, that's a Bondo Booth for you."</em></p>
            <br>
            <p>Bondo, aka Bondo Booth, is about strengthening connections within our communities 
                through the joy of taking photos together. We aim to make the photo booth experience 
                authentic, expressive, and memorable for everyone at your event.</p>
        </section>
        <section class="aboutsection">
                <div class="whatwedocontent">
                    <img class="polaroid" src="~/assets/images/polaroid.jpg">
                </div>
                <div class="whatwedotext">
                    <h2>What We Do</h2>
                    <br>
                    <p>We think outside of the box when it comes to making our photo booth one of the most memorable experiences of your event.</p>
                    <br>
                    <p>We thrive on uniquely curated props, innovative backdrops, and engaging photo booth hosts.</p>
                    <br>
                    <p>We focus on bringing the photo booth experience to as many communities as possible by offering 
                    simple, low-cost packages, developing "community love" programs, and directing our outreach to 
                    community-oriented events.</p>
                    <br>
                    <p>We like to have a good time and think you probably do too, so book your Bondo Booth today!</p>
                </div>
        </section>
        <section>
            <div class="aboutsection">
                <div class="whowearetext">
                    <h2>Who We Are</h2>
                    <br>
                    <p>Best friends turned sisters-in-law, Jessica and Kirsten Bondalapati, created Bondo 
                        to bring their own take on the photo booth experience to communities in and around Detroit.</p>
                    <br>
                    <p>Previously working in the public health and inclusive equity fields, the two decided to 
                        take their shared passion for positively impacting communities and launch a business that 
                        promotes authenticity, connection, and joy. Together, they deliver a pretty cool vibe for 
                        your event, plus over 10 years of event planning and community engagement experience.</p>
                    <br>
                    <p>Welcome to Bondo Booth!</p>
                </div>
                <div class="whowearecontent">
                    <img class="jess-kirsten" src="~/assets/images/jess-kirsten.jpg">
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="stylus"> 

@import '~assets/breakpoint'

.about1 {
    overflow:hidden;
    width:85vw;
    margin: auto;
}

.aboutimage {
    width:100%;
}

.bahndoh {
    padding-left:10vw;
    padding-top:5vh;
    padding-bottom:5vh;
    margin:0;
    max-width: 105ch;
}

.aboutsection {
    width:85vw;
    margin: 0 auto;
    padding-bottom:10vh;
    display:flex;
}

.polaroid {
    width:100%;
    padding-right:2vw;
    object-fit:contain;
    object-position:center;
    
}
.whatwedocontent {
    display:inline-block;
    width:50%;
    position:relative;
    height:100%;
}

.whatwedotext {
    padding-left:2vw;
    width:50%;
    display:inline-block;
}

.whowearecontent {
    display:inline-block;
    width:50%;
}

.jess-kirsten {
    width:100%;
    padding-left:2vw;

}
.whowearetext {
    padding-right:2vw;
    display:inline-block;
    width:50%;
}

@media (max-width:tablet) {
    .aboutsection {
        flex-wrap:wrap;
    }
    .whatwedocontent  {
        display:block;
        width:100%;
    }
    .whatwedotext {
        display:block;
        width:100%;
    }

    .whowearecontent {
        display:block;
        width:100%
        order:1;
    }

    .whowearetext {
        display:block;
        width:100%;
        order:2;
    }
    
    .polaroid {
        padding-bottom:30px;
    }

    .jess-kirsten {
        padding-bottom:30px;
    }

}

@media (min-width:tablet) {
    .about1 {
        height:500px;
    }
    
    .aboutimage {
        overflow:hidden;
        margin-top:-50px;

    }
}

</style>

