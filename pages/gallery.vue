<template>
    <div class="gallery">
        <div class="gallery-header">
            <h2>Gallery</h2>
            <p class="samples">Samples of our work! Find your event here.</p>
        </div>
        <div class="gallery-photos">
            <img class="galleryimg" src="/images/gallery_wall_adulting.jpg">
            <!-- <div class="gallery-col-1">
                <img class="galleryimg" src="~/assets/images/gallery_white_coc.jpg">
                <img class="galleryimg" src="~/assets/images/gallery_pink_lyft.jpg">
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            photos: []
        }
    },
    async asyncData (context) {
        var data = {
            "path":"/Gallery"
        }
        context.$axios.setToken('0w_NwioORzAAAAAAAAB2MHi4jRwsBrubKfQl7YWKf4b2z1lrJBOuiotGjMhISYuF','Bearer')
        let response = await context.$axios.$post('https://api.dropboxapi.com/2/files/list_folder',data)
        return {
            photos: response.entries
        }
    }
}
</script>


<style lang="stylus"> 

@import '~assets/breakpoint'

.gallery {
    width:85vw;
    margin: 0 auto;
}

.samples {
    padding-top:5vh;
    padding-bottom:5vh;
}

.gallery-photos {
    display:flex;
    justify-content:space-evenly;
}

.gallery-col-1 {
    width:47%;
}

.gallery-col-2 {
    width:47%;
}

.galleryimg {
    width:100%;
    height:auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:5%;
}

@media (max-width:phone) {
  .gallery-photos {
      display:block;
  }
  .gallery-col-1 {
      width:100%;
  }
  .gallery-col-2 {
      width:100%;
  }
}
</style>