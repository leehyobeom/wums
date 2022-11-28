<template>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import gql from 'graphql-tag'
import moment from 'moment';
export default defineComponent({
  name: 'Coordinate',
  props: {
    brand: String,
  },
  data () {
    return {
      coordinate: [{x:50, y:50}],
      currnetCoordinate: {
        x:50,
        y:50
      },
      intervalId: 0,
      date: moment().format("YYYY-MM-DD HH:mm:ss"),
      ip: 0
    }
  },
  async created (){
    const { ip } = await fetch('https://api.ipify.org?format=json').then(x => x.json());
    this.ip = ip;
    window.addEventListener('beforeunload', this.setMouseCoordinate);
    document.addEventListener("mousemove", (event) => {
      this.currnetCoordinate = {
          x: Math.floor(event.clientX / window.innerWidth * 100),
          y: Math.floor(event.clientY / window.innerHeight * 100)
      }
    });
    this.intervalId = window.setInterval(()=>{
      this.coordinate.push(this.currnetCoordinate);
    },10);
  },
  methods: {
        async setMouseCoordinate() {
          await this.$apollo.mutate({
            mutation: gql`mutation create($cursorMonitor: [CursorMonitor!]!) {
              create(cursorMonitor: $cursorMonitor)
            }`,
            variables: {
                cursorMonitor: {
                  brand: this.brand,
                  date: moment().format("YYYY-MM-DD HH:mm:ss"),
                  coordinate: this.coordinate,
                  ip: this.ip
            },
          }
          })
          window.clearInterval(this.intervalId);
        },
    }
})
</script>
