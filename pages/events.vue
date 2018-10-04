<template>
    <div class="events">
        <div class="events-header">
            <h2>Find Your Event</h2>
        </div>
        <div class="events-section">
                <div>
                    <md-button class="md-icon-button" disabled>
                         <md-icon>add</md-icon>
                    </md-button>
                </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'IconButtons'
}
</script>


<style lang="stylus"> 

@import '~assets/breakpoint'

.events  {
    width:85vw;
    margin: 0 auto;
}

.events-section {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

</style>   