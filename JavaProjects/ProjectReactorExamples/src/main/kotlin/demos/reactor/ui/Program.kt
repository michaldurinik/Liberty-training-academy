package demos.reactor.ui

fun main(args: Array<String>) {
    val gui = GameOfLife()
    gui.isVisible = true

    gui.flux
        .filter { event -> event.alive }
            .map { event -> "Cell at ${event.x}, ${event.y}"}
            .subscribe(::println)
}
