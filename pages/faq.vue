<template>
    <div class="faq">
        <div class="faq-header">
            <h2>FAQ</h2>
        </div>
        <div id="cross"></div>

        <div class="faq-section">
            <div class="faq-content">
                <div class="faq-question" @click="toggleAccordion">
                    <p>What's Included?</p>
                </div>
                <div class="faq-answer" :class="{'is-closed':!isOpen}">
                    <div class="faq-anwser-body">exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>

                <div class="faq-question plus">How Much Does It Cost?
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-body">itation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </div>
                </div>
                <div class="faq-question">My Event Is Outside of Detroit, Can You Make It?</div>
                <div class="faq-answer">
                    <div class="faq-answer-body">third anwser to the question.
                    </div>
                </div>
                <div class="faq-question">What's The Cancelation Policy?</div>
                <div class="faq-answer">
                    <div class="faq-answer-body">third anwser to the question.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleAccordion: function() {
            this.isOpen = !this.isOpen;
        }
    }
}


// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         console.log('test')
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     });
// }
</script>


<style lang="stylus"> 

@import '~assets/breakpoint'

.faq  {
    width:85vw;
    margin: 0 auto;
}

.faq-question {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 17px;
    transition: 0.4s;
    margin-bottom:20px;
}

.faq-question > div {
    display:inline;
}


.active, .faq-question:hover {
    background-color: #ccc; 
}

.faq-section {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.faq-answer {
    padding: 0 18px;
    background-color: white;
    overflow: hidden;
}

.is-closed {
    max-height:0;
}

.faq-answer-body {
    padding:20px;
}

#cross {
   width: 50px;
   height:50px;
   position: relative;
    cursor: pointer;

}

#cross:before, #cross:after {
  content: "";
  position: absolute;
  z-index: -1;
  background: #acacac;
}

#cross:before {
  left: 50%;
  width: 20%;
  margin-left: -10%;
  height: 100%;
}

#cross:after {
  top: 50%;
  height: 20%;
  margin-top: -10%;
  width: 100%;
}

</style>   