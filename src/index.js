import Coordinate from "./components/Coordinate.vue"

export default {
    install: (app, options) => {
        app.component("Coordinate", Coordinate);
    }
}