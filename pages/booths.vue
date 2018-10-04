<template>
    <div class="booths">
        <div class="thephotobooth">
            <h2 style="text-align:center">The Photo Booth</h2>
            <div class="thephotobooth-elements">
                <div class="immediatephotos">
                    <h3>Immediate Photos</h3>
                    <img src="~/assets/images/immediate_photos.jpg">
                    <p>Your photos are available immediately after they're taken, so guests can access 
                        photos on their phones at the event and share for all the world to see. Prints come out 
                        in less than a minute after the photos are taken.</p>
                </div>
                <div class="modernprints">
                    <h3>Modern Prints</h3>
                    <img src="~/assets/images/modern_prints.jpg">
                    <p>Choose between classic 2x6 photo booth strips or a 4x6 that features larger photos 
                        and branding space. We create a tailored print designs for your event, which can 
                        include any branding, hashtags, or messaging that you want.</p>
                </div>
                <div class="qualitysetup">
                     <h3>High Quality Setup</h3>
                     <img src="~/assets/images/setup.jpg">
                     <p>Our booth consists of a studio camera and lighting, backdrop, curated props, 
                         and a commercial-grade printer. We use an interactive touchscreen so guests can 
                         see their poses in real time, much like taking a selfie.</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="pricing">
            <h2 style="text-align:center">Pricing</h2>
            <div class="pricing-elements">
                <div class="digital">
                    <img src="~/assets/images/digital.png">
                </div>
                <div class="prints">
                    <img src="~/assets/images/prints.png">
                </div>
                <div class="custom">
                     <img src="~/assets/images/custom.png">
                </div>
            </div>
            <p style="text-align:center">All packages include two hours of photo booth time. Contact Us for a quote.</p>
        </div>
        <hr>
        <div class="backdrops">
            <h2 style="text-align:center">Backdrops</h2>
            <div class="backdrops-elements">
                <div class="included">
                    <h3>Included</h3>
                    <carousel :images="carousel1"></carousel>
                    <p>Included for free when you book. Choose between white, nirvana, teal, and color crinkle.</p>
                </div>
                <div class="extra">
                    <h3>Extra</h3>
                    <carousel :images="carousel2"></carousel>
                    <p>For a little extra (+$100) choose pink sparkle, mermaid, champagne sparkle, or green screen.</p>
                </div>
                <div class="custom">
                     <h3>Custom</h3>
                     <carousel :images="carousel3"></carousel>
                     <p>We can create any backdrop for your event. Your vision, our creation, 
                         step-and-repeat, or something else! Range from +$100 to +$500.</p>
                </div>
            </div>
        </div>
        <hr>
        <div class="props">
            <h2>Props</h2>
            <div class="props-elements">
                <div class="variety">
                    <h3>Variety</h3>
                    <carousel :images="carousel4"></carousel>
                    <p>At every event, we bring a variety of high quality props at no cost. Stick props, hats, 
                        headbands, signs, and more!.</p>
                </div>
                <div class="themed">
                    <h3>Themed</h3>
                    <carousel :images="carousel5"></carousel>
                    <p>Have a theme? We'll curate and add to our variety to make your event special. 
                        Cost varies depending on what you're looking for.</p>
                </div>
                <div class="customprop">
                    <h3>Custom Props</h3>
                    <carousel :images="carousel6"></carousel>
                    <p>We can take your logo, hashtag, or anything else and turn 
                        it into a prop. These run about $40 each.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import carousel from '~/components/carousel.vue';
  export default {
    components: {
      carousel
    },
    data() {
        return {
            carousel1: [
                "/images/gallery_white_coc.jpg",
                "/images/nirvana.jpg",
                "/images/teal.jpg",
                "/images/colorcrinkle.jpg"
            ],
            carousel2: [
                "/images/pinksparkle.jpg",
                "/images/whitegold.jpg",
                "/images/champagnesparkle.jpg",
                "/images/greenscreen.jpg"
            ],
            carousel3: [
                "/images/custom2.jpg",
                "/images/custombackdrop_stepandrepeat.jpg",
                "/images/custom1.jpg"
            ],
            carousel4: [
                "/images/propsvariety1.jpg",
                "/images/propsvariety2.jpg",
                "/images/propsvariety3.jpg"
            ],
            carousel5: [
                "/images/propstheme3.jpg",
                "/images/propstheme1.jpg",
                "/images/propstheme2.jpg",
                "/images/propstheme4.jpg",
                "/images/propstheme5.jpg"
            ],
            carousel6: [
                "/images/customprop_cutout_duo.jpg",
                "/images/customprop_cutout_lela.jpg",
                "/images/customprop_cutout_whatupdoe.jpg",
                "/images/customprop_cutout_ddp.jpg",
                "/images/customprop_cutout_intermittenlogo.jpg",
                "/images/customprop_cutout_detroitpal.jpg"
            ]
        }
    }
  }
</script>

<style lang="stylus"> 

@import '~assets/breakpoint'

.booths  {
    width:85vw;
    margin: 0 auto;
}

.thephotobooth-elements {
    display:flex;
    justify-content:space-around;
    padding:5vh 0;
}

.thephotobooth-elements > div  {
    flex: 1 1 0;
    margin:0 30px;
}

.thephotobooth-elements > div > img  {
    width:100%;
    margin:3vh 0;
}

.thephotobooth-elements > div > h3  {
    text-align:center;
}

.thephotobooth-elements > div > p  {
    text-align:center;
}

.pricing {
    margin-bottom:5vh
}

.pricing > h2 {
    margin:5vh 0;
}

.pricing-elements {
    display:flex;
    justify-content:space-around;
}

.pricing-elements > div  {
    flex: 1 1 0;
    margin:0 30px;
}

.pricing-elements > div > img  {
    width:100%;
    margin:3vh 0;
}

hr {
    margin:10px 0px;
}

.backdrops {
    margin-bottom:5vh;
}

.backdrops > h2 {
    margin:5vh 0;
}

.backdrops-elements {
    display:flex;
    justify-content:space-around;
    padding bottom 5vh;
}

.backdrops-elements > div  {
    flex: 1 1 33.333%;
    margin:0 30px;
    width 33%;
}

.backdrops-elements > div > img  {
    width:100%;
    margin:3vh 0;
}

.backdrops-elements > div > h3  {
    text-align:center;
}

.backdrops-elements > div > p  {
    text-align:center;
}


.props {
    margin-bottom:10vh;
}

.props > h2 {
    margin:5vh 0;
    text-align:center;
}

.props-elements > div > h3  {
    text-align:center;
}

.props-elements {
    display:flex;
    justify-content:space-around;
    padding bottom 5vh;
}

.props-elements > div  {
    flex: 1 1 33.333%;
    margin:0 30px;
    width 33%;
}

.props-elements > div > img  {
    width:100%;
    margin:3vh 0;
}

.props-elements > div > p  {
    text-align:center;
}


</style>