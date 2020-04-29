window.addEventListener("load", ()=>{
    const canvas = document.getElementById("pointCanvas");
    const context = canvas.getContext("2d");
    const colorInput = document.getElementById("colorInput");
    //when true, allow the draw function works
    let painting = false;
    let drawColor = colorInput.value; 
    //change the value of painting variable
    function startPosition(e){
        painting = true;
        drawLines(e);
    }
    function endPosition(){
        painting = false;
    }
    // drawing funcyion on canvas element
    function drawLines(e){
        // x and y coordinates related to mouse events
        var coord = {
            'x': (e.clientX - this.offsetLeft)*this.width/this.clientWidth,
            'y': (e.clientY - this.offsetTop)*this.height/this.clientHeight
        };
        if(!painting)return;
        context.lineWidth = 1.5;
        context.strokeStyle = drawColor;
        context.lineCap = 'round';
        context.imageS
        context.lineTo(coord.x,coord.y);
        context.stroke();
        context.beginPath();
        context.moveTo(coord.x,coord.y);
    }
    //mouse events 
    canvas.addEventListener("mousedown",startPosition);
    canvas.addEventListener("mouseup",endPosition);
    canvas.addEventListener("mousemove",drawLines);

})