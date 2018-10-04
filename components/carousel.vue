<template>
	<slick ref="slick" :options="carouselOptions" style="width:100%;">
		<img v-bind:key="index" class="image" v-for="(image,index) in images" :src="image" alt="">
	</slick>
</template>

<script>
import Slick from 'vue-slick'

export default {
	components: {
		Slick
	},
	props: [
		"images"
	],
	data() {
		return {
			carouselOptions: {
				dots:true,
				fade:true,
				}
		}
     },

}

</script>

<style>

@import 'slick-carousel/slick/slick.css'; 
@import 'slick-carousel/slick/slick-theme.css'; 

.image {
	/* width:100%; */
	/* position: relative; */
    width:  100%;
    height: 250px;
    /* background-position: 50% 50%; */
    /* background-repeat:no-repeat; */
    /* background-size:cover; */
	/* object-fit:contain; */
}

.slick-prev, .slick-next{
	&:before {
		color: #ef5897;
		font-size:25px;
		margin-left:-50px;
		position: relative;
		z-index:10;
	}
}

.slick-dots li button:before {
	font-size:10px;
	line-height: 30px;
	padding-bottom:50px;
}

.slick-list {
	padding-top:20px;
}

</style>