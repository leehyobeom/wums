<template>
  {{"gogogogogogo"}}
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import gql from 'graphql-tag'

export default defineComponent({
  name: 'Coordinate',
  props: {
    brand: String,
    ip: String,
    date: String,
  },
  data () {
    return {
      coordinate: [{x:50, y:50}],
      currnetCoordinate: {
        x:50,
        y:50
      },
      intervalId: 0
    }
  },
  created (){
    // window.addEventListener('beforeunload', this.setMouseCoordinate);
    // document.addEventListener("mousemove", (event) => {
    //   this.currnetCoordinate = {
    //       x: Math.floor(event.clientX / window.innerWidth * 100),
    //       y: Math.floor(event.clientY / window.innerHeight * 100)
    //   }
    // });
    // this.intervalId = window.setInterval(()=>{
    //   this.coordinate.push(this.currnetCoordinate);
    // },10);
  },
  methods: {
        // async setMouseCoordinate() {
        //   await this.$apollo.mutate({
        //     mutation: gql`mutation create($cursorMonitor: [CursorMonitor!]!) {
        //       create(cursorMonitor: $cursorMonitor)
        //     }`,
        //     variables: {
        //         cursorMonitor: {
        //           brand: this.brand,
        //           ip: this.ip,
        //           date: this.date,
        //           coordinate: this.coordinate
        //     },
        //   }
        //   })
        //   window.clearInterval(this.intervalId);
        // }
    }
})
</script>
