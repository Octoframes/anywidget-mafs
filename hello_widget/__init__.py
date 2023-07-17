import pathlib
import anywidget
import traitlets

class Mafs(anywidget.AnyWidget):
    p = pathlib.Path(__file__).parent / "static/widget.js"
    _esm =  p
    _css=  pathlib.Path(__file__).parent / "static/style.css"
