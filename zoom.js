<script>
function detectZoom() {
    let zoomLevel = Math.round(window.devicePixelRatio * 100);
    
    if (zoomLevel !== 100) {
        document.body.style.zoom = (100 / zoomLevel); // Adjust layout
    }
}

window.addEventListener("resize", detectZoom);
window.addEventListener("load", detectZoom);
</script>