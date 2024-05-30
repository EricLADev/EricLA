

/*
    Draw Cube with QUAD
 */


class Brick {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(d, size, mX, mY, r ,g ,b , avg) {
        push();
        let distance = dist(this.x, this.y, mX, mY);
        translate(this.x, this.y);
        fill(r,g,b);
        if (distance <= d) {
            rotate(mX);
            scale((distance/d));
        }
        rect(0, 0, size, size);
        pop();
    }
}

class tileBox {
    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    drawFaceBox(boxWidth, boxHeight, boxDepth, x, y) {

        angleMode(DEGREES);
        let w = boxWidth;
        let h = boxHeight;
        let d = boxDepth;

        // Center the box.
        translate(-w / 2, -h / 2);
        //translate(x, y);

        push();
        color(255,0,0);
        quad(0, 0, w, 0, w, h, 0, h);
        pop();

        push();
        fill(0,255,0);
        translate(0, 0, -d);
        rotateY(-90);
        quad(0, 0, d, 0, d, h, 0, h);
        pop();

        push();
        fill(0,0,255);
        translate(0, 0, -d);
        rotateX(90);
        quad(0, 0, w, 0, w, d, 0, d);
        pop();

        push();
        fill(0,255,255);
        translate(w, 0, 0);
        rotateY(90);
        quad(0, 0, d, 0, d, h, 0, h);
        pop();

        push();
        fill(255,0,255);
        translate(0, h, 0);
        rotateX(-90);
        quad(0, 0, w, 0, w, d, 0, d);
        pop();

        push();
        fill(255,255,0);
        rotateY(180);
        translate(-w, 0, d);
        quad(0, 0, w, 0, w, h, 0, h);
        pop();
    }

    display(d, tileSize, mX, mY, angle) {
        push();
        //let distance = dist(this.x, this.y, mX, mY);
        translate(this.x, this.y, this.z);
        //if (distance <= d) {
            //rotate(mX);
            //scale((distance/d));
        //}
        rotateX(millis() / 100);
        rotateY(millis() / 100);
        //rotateZ(millis() / 100);
        //rotateX(mouseY);rotateY(-mouseX);
        //this.drawFaceBox(tileSize, tileSize, tileSize, this.x, this.y);
        box(tileSize);
        pop();
    }
}


class square {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        if (dia>=tileSize) {
            dia = tileSize;
        }

        push();
        translate(this.x, this.y);

        fill(r,g,b);
        rect(0, 0, dia);

        pop();
    }

}

class polygoneSquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        translate(this.x, this.y);

        fill(r, g, b);

        beginShape();
        for (var i = 0; i <= 360; i += 90) {

            var x = dia/2 * cos(i);
            var y = dia/2 * sin(i);
            vertex(x, y);
        }
        endShape();

        pop();
    }

}

class squareInSquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        fill(r,g,b);
        translate(this.x, this.y);

        // Add Square
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            rect(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        if (dia>=tileSize) {
            dia = tileSize-4;
        }

        fill(r,g,b);
        rect(0, 0, dia, dia);

        pop();
    }

}


class emptySquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        if (dia>=tileSize) {
            dia = tileSize;
        }

        if (dia%2 !== 0) dia = dia-1;

        push();
        translate(this.x, this.y);
        stroke(r, g, b);
        strokeWeight(1);
        fill(bgTextureR, bgTextureG, bgTextureB);
        rect(0, 0, dia);
        pop();
    }
}

class emptyCircle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        if (dia>=tileSize) {
            dia = tileSize;
        }

        if (dia%2 !== 0) dia = dia-1;

        push();
        translate(this.x, this.y);
        stroke(r, g, b);
        strokeWeight(1);
        fill(bgTextureR, bgTextureG, bgTextureB);
        ellipse(0, 0, dia);
        pop();
    }
}

class strokeSquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        if (dia>=tileSize) {
            dia = tileSize;
        }

        let strokeSize = floor(dia/2);
        if (strokeSize%2 === 0) strokeSize = strokeSize+1;

        push();
        translate(this.x, this.y);
        stroke(r, g, b);
        strokeWeight(strokeSize);
        fill(bgTextureR, bgTextureG, bgTextureB);
        rect(0, 0, tileSize - strokeSize);
        pop();
    }
}

class strokeCircle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        if (dia>=tileSize) {
            dia = tileSize;
        }

        let strokeSize = floor(dia/2);
        if (strokeSize%2 === 0) strokeSize = strokeSize+1;

        push();
        translate(this.x, this.y);
        stroke(r, g, b);
        strokeWeight(strokeSize);
        fill(bgTextureR, bgTextureG, bgTextureB);
        ellipse(0, 0, tileSize - strokeSize);
        pop();
    }
}

class circle2 {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        if (dia>=tileSize) {
            dia = tileSize;
        }

        push();
        fill(r,g,b)
        translate(this.x, this.y);

        fill(r,g,b);
        ellipse(0, 0, dia, dia);
        pop();
    }
}

class circleInCircle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        fill(r,g,b)
        translate(this.x, this.y);

        // Circle
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            ellipse(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        if (dia>=tileSize) {
            dia = tileSize-4;
        }

        fill(r,g,b);
        ellipse(0, 0, dia, dia);
        pop();
    }
}

class plusSign {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        translate(this.x, this.y);
        fill(r,g,b);

        if (dia>=tileSize) {
            dia = tileSize-2;
        }

        rect(0, 0, dia, 1);
        rect(0, 0, 1, dia);
        pop();
    }
}

class plusSignInSquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        translate(this.x, this.y);

        // Add Square
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            rect(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        if (dia>=tileSize) {
            dia = tileSize-2;
        }

        fill(r,g,b);
        rect(0, 0, dia, 1);
        rect(0, 0, 1, dia);
        pop();
    }
}

class plusSignBold {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        translate(this.x, this.y);
        fill(r,g,b);

        if (dia>=tileSize) {
            dia = tileSize;
        }

        rect(0, 0, dia, 3);
        rect(0, 0, 3, dia);
        pop();
    }
}

class plusSignBoldInSquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        fill(r,g,b)
        translate(this.x, this.y);

        // Add Square
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            rect(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        fill(r,g,b);
        rect(0, 0, dia, 3);
        rect(0, 0, 3, dia);
        pop();
    }
}

class plusSignInCircle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        fill(r,g,b)
        translate(this.x, this.y);

        // Circle
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            ellipse(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        fill(r,g,b);
        rect(0, 0, dia, 1);
        rect(0, 0, 1, dia);
        pop();
    }
}

class plusSignBoldInCircle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        fill(r,g,b)
        translate(this.x, this.y);

        // Circle
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            ellipse(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        if (dia>=tileSize) {
            dia = tileSize-2;
        }

        fill(r,g,b);
        rect(0, 0, dia, 3);
        rect(0, 0, 3, dia);
        pop();
    }
}

class horizontalRectangle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        if (dia>=tileSize) {
            dia = tileSize;
        }

        push();
        translate(this.x, this.y);
        fill(r,g,b);
        rect(0, 0, tileSize, dia);
        pop();
    }
}

class horizontalRectangleInSquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        translate(this.x, this.y);

        // Add Square
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            rect(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        if (dia>=tileSize) {
            dia = tileSize-2;
        }

        fill(r,g,b);
        rect(0, 0, tileSize, dia);
        pop();
    }
}

class crossRectangle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        translate(this.x, this.y);
        fill(r,g,b);

        if (dia>=tileSize) {
            dia = tileSize;
        }

        rect(0, 0, tileSize, dia*.3);
        rect(0, 0, dia*.3, tileSize);
        pop();
    }
}

class crossRectangleInSquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        translate(this.x, this.y);

        // Add Square
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            rect(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        if (dia>=tileSize) {
            dia = tileSize-2;
        }

        fill(r,g,b);
        rect(0, 0, tileSize-3, dia*.25);
        rect(0, 0, dia*.25, tileSize-3);
        pop();
    }
}

class crossDiagRectangle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        /*let nbLine = int(map(dia, 1, tileSize, 1, 9));
        push();
        translate(this.x, this.y);

        if (dia>=tileSize) {
            dia = tileSize-2;
        }

        fill(r,g,b);
        rotate(45);
        rect(0, 0, tileSize, nbLine);
        rotate(180);
        rect(0, 0, nbLine, tileSize);
        pop();*/

        push();
        translate(this.x, this.y);
        fill(r,g,b);

        if (dia>=tileSize) {
            dia = tileSize;
        }
        rotate(45);
        rect(0, 0, tileSize, dia*.3);
        rotate(180);
        rect(0, 0, dia*.3, tileSize);
        pop();
    }
}

class crossDiagRectangleInSquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        let nbLine = int(map(dia, 1, tileSize, 1, 9));
        push();
        translate(this.x, this.y);

        // Add Square
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            rect(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        if (dia>=tileSize) {
            dia = tileSize-2;
        }

        fill(r,g,b);
        rotate(45);
        rect(0, 0, dia, nbLine);
        rotate(180);
        rect(0, 0, nbLine, dia);
        pop();
    }
}

class verticalRectangle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        translate(this.x, this.y);
        fill(r,g,b);

        if (dia>=tileSize) {
            dia = tileSize;
        }

        rect(0, 0, dia, tileSize);
        pop();
    }
}

class verticalRectangleInSquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        push();
        translate(this.x, this.y);

        // Add Square
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            rect(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        if (dia>=tileSize) {
            dia = tileSize-2;
        }

        fill(r,g,b);
        rect(0, 0, dia, tileSize);
        pop();
    }
}

class verticalLineRandom {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        dia = floor(map(dia, 1, tileSize, 1, tileSize-5));
        push();
        translate(this.x, this.y);
        fill(r,g,b);
        for(let k=1;k<dia;k++) {
            rect(random(1,tileSize)- tileSize/2, 0, 1, tileSize);
        }
        pop();
    }
}

class verticalLineRandomInSquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        dia = floor(map(dia, 1, tileSize, 1, tileSize-5));
        push();
        translate(this.x-(tileSize/2), this.y);

        // Add Square
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            rect(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        fill(r,g,b);
        for(let k=1;k<dia;k++) {
            rect(random(1,tileSize)- tileSize/2 , 0, 1, tileSize);
        }
        pop();
    }
}

class verticalLine {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        let nbLine = floor(map(dia, 1, tileSize, 1, 8));

        push();
        translate(this.x, this.y);
        fill(r,g,b);
        //rotate(millis() / 100);

        switch (nbLine) {
            case 1:
                break;
            case 2:
                rect(0, 0, 1, tileSize);
                break;
            case 3:
                rect(-2, 0, 1, tileSize);
                rect(2, 0, 1, tileSize);
                break;
            case 4:
                rect(-4, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(4, 0, 1, tileSize);
                break;
            case 5:
                rect(-4, 0, 1, tileSize);
                rect(-2, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(2, 0, 1, tileSize);
                rect(4, 0, 1, tileSize);
                break;
            case 6:
                rect(-6, 0, 1, tileSize);
                rect(-4, 0, 1, tileSize);
                rect(-2, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(2, 0, 1, tileSize);
                rect(4, 0, 1, tileSize);
                rect(6, 0, 1, tileSize);
                break;
            case 7:
                rect(0, 0, tileSize, tileSize);
                fill(bgTextureR, bgTextureG, bgTextureB);
                rect(-7, 0, 1, tileSize);
                rect(-3, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(3, 0, 1, tileSize);
                rect(7, 0, 1, tileSize);
                break;
            case 8:
                rect(0, 0, tileSize, tileSize);
                fill(bgTextureR, bgTextureG, bgTextureB);
                rect(-7, 0, 1, tileSize);
                rect(-3, 0, 1, tileSize);
                rect(3, 0, 1, tileSize);
                rect(7, 0, 1, tileSize);
                break;
            case 9:
                rect(0, 0, tileSize, tileSize);
                fill(bgTextureR, bgTextureG, bgTextureB);
                rect(0, 0, 1, tileSize);
                break;
            case 10:
                rect(0, 0, tileSize, tileSize);
                break;
        }
        pop();
    }
}

class verticalLineInSquare {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        let nbLine = floor(map(dia, 1, tileSize, 1, 8));
        let addGap = .5;
        let gap;

        push();
        translate(this.x, this.y);

        // Add Square
        if (dia !== 0) {
            stroke(r, g, b);
            strokeWeight(1);
            fill(bgTextureR, bgTextureG, bgTextureB);
            rect(0, 0, tileSize - 1, tileSize - 1);
            noStroke();
        }
        //

        fill(r,g,b);

        switch (nbLine) {
            case 1:
                break;
            case 2:
                rect(0, 0, 1, tileSize);
                break;
            case 3:
                rect(-2, 0, 1, tileSize);
                rect(2, 0, 1, tileSize);
                break;
            case 4:
                rect(-4, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(4, 0, 1, tileSize);
                break;
            case 5:
                rect(-4, 0, 1, tileSize);
                rect(-2, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(2, 0, 1, tileSize);
                rect(4, 0, 1, tileSize);
                break;
            case 6:
                rect(-6, 0, 1, tileSize);
                rect(-4, 0, 1, tileSize);
                rect(-2, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(2, 0, 1, tileSize);
                rect(4, 0, 1, tileSize);
                rect(6, 0, 1, tileSize);
                break;
            case 7:
                rect(0, 0, tileSize, tileSize);
                fill(bgTextureR, bgTextureG, bgTextureB);
                rect(-7, 0, 1, tileSize);
                rect(-3, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(3, 0, 1, tileSize);
                rect(7, 0, 1, tileSize);
                break;
            case 8:
                rect(0, 0, tileSize, tileSize);
                fill(bgTextureR, bgTextureG, bgTextureB);
                rect(-7, 0, 1, tileSize);
                rect(-3, 0, 1, tileSize);
                //rect(0, 0, 1, tileSize);
                rect(3, 0, 1, tileSize);
                rect(7, 0, 1, tileSize);
                break;
            case 9:
                rect(0, 0, tileSize, tileSize);
                fill(bgTextureR, bgTextureG, bgTextureB);
                rect(0, 0, 1, tileSize);
                break;
            case 10:
                rect(0, 0, tileSize, tileSize);
                break;
        }
        //rect(0, 0, tileSize, 1);
        pop();
    }
}

class verticalLineAlgo2 {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        let nbLine = floor(map(dia, 1, tileSize, 1, 9));
        let addGap = .5;
        let gap;

        push();
        translate(this.x, this.y);
        fill(r,g,b);

        switch (nbLine) {
            case 1:
                break;
            case 2:
                rect(0, 0, 1, tileSize);
                break;
            case 3:
                gap = ((tileSize/nbLine) / 3) + addGap;
                rect(-gap, 0, 1, tileSize);
                rect(gap, 0, 1, tileSize);
                break;
            case 4:
                gap = ((tileSize/nbLine) / 2) + addGap;
                rect(-gap, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(gap, 0, 1, tileSize);
                break;
            case 5:
                gap = ((tileSize/nbLine) / 1.75) + addGap;
                rect(-(gap*2), 0, 1, tileSize);
                rect(-gap, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(gap, 0, 1, tileSize);
                rect(gap*2, 0, 1, tileSize);
                break;
            case 6:
                gap = ((tileSize/nbLine) / 1.5) + addGap;
                rect(-(gap*3), 0, 1, tileSize);
                rect(-(gap*2), 0, 1, tileSize);
                rect(-gap, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(gap, 0, 1, tileSize);
                rect(gap*2, 0, 1, tileSize);
                rect(gap*3, 0, 1, tileSize);
                break;
            case 7:
                rect(0, 0, tileSize, tileSize);
                fill(255)
                gap = ((tileSize/nbLine) / 2) + addGap;
                rect(-(gap*2), 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(gap*2, 0, 1, tileSize);
                break;
            case 8:
                rect(0, 0, tileSize, tileSize);
                fill(255)
                gap = ((tileSize/nbLine) / 3) + addGap;
                rect(-(gap*2), 0, 1, tileSize);
                //rect(0, 0, 1, tileSize);
                rect(gap*2, 0, 1, tileSize);
                break;
            case 9:
                rect(0, 0, tileSize, tileSize);
                fill(255)
                gap = ((tileSize/nbLine) / 1.5) + addGap;
                rect(0, 0, 1, tileSize);
                break;
            /*case 10:
                rect(0, 0, tileSize, tileSize);
                break;*/
        }
        //rect(0, 0, tileSize, 1);
        pop();
    }
}

class verticalLineInSquareAlgo2 {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        let nbLine = floor(map(dia, 1, tileSize, 1, 9));
        let addGap = .5;
        let gap;

        push();
        translate(this.x, this.y);
        fill(r,g,b);

        // Add Square
        stroke(r,g,b);
        strokeWeight(1);
        fill(bgTextureR, bgTextureG, bgTextureB);
        rect(0, 0, tileSize-1, tileSize-1);
        noStroke();
        //

        fill(r,g,b);

        switch (nbLine) {
            case 1:
                break;
            case 2:
                rect(0, 0, 1, tileSize);
                break;
            case 3:
                gap = ((tileSize/nbLine) / 3) + addGap;
                rect(-gap, 0, 1, tileSize);
                rect(gap, 0, 1, tileSize);
                break;
            case 4:
                gap = ((tileSize/nbLine) / 2) + addGap;
                rect(-gap, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(gap, 0, 1, tileSize);
                break;
            case 5:
                gap = ((tileSize/nbLine) / 1.75) + addGap;
                rect(-(gap*2), 0, 1, tileSize);
                rect(-gap, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(gap, 0, 1, tileSize);
                rect(gap*2, 0, 1, tileSize);
                break;
            case 6:
                gap = ((tileSize/nbLine) / 1.5) + addGap;
                rect(-(gap*3), 0, 1, tileSize);
                rect(-(gap*2), 0, 1, tileSize);
                rect(-gap, 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(gap, 0, 1, tileSize);
                rect(gap*2, 0, 1, tileSize);
                rect(gap*3, 0, 1, tileSize);
                break;
            case 7:
                rect(0, 0, tileSize, tileSize);
                fill(255)
                gap = ((tileSize/nbLine) / 2) + addGap;
                rect(-(gap*2), 0, 1, tileSize);
                rect(0, 0, 1, tileSize);
                rect(gap*2, 0, 1, tileSize);
                break;
            case 8:
                rect(0, 0, tileSize, tileSize);
                fill(255)
                gap = ((tileSize/nbLine) / 3) + addGap;
                rect(-(gap*2), 0, 1, tileSize);
                //rect(0, 0, 1, tileSize);
                rect(gap*2, 0, 1, tileSize);
                break;
            case 9:
                rect(0, 0, tileSize, tileSize);
                fill(255)
                gap = ((tileSize/nbLine) / 1.5) + addGap;
                rect(0, 0, 1, tileSize);
                break;
            /*case 10:
                rect(0, 0, tileSize, tileSize);
                break;*/
        }
        //rect(0, 0, tileSize, 1);
        pop();
    }
}

class randomLineRotation {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display(dia, tileSize, r, g, b, avg, bgTextureR, bgTextureG, bgTextureB) {

        let nbLine = floor(map(dia, 1, tileSize, 1, 9));
        let addGap = .5;
        let gap;

        push();
        translate(this.x, this.y);
        fill(0);
        rect(0, 0, tileSize, 1);

        if (nbLine === 1) {
            nbLine = 0;
        }
        if (nbLine === 9) {
            nbLine = 20;
        }

        for (let k=0;k<=nbLine;k++) {
            rotate(random(0,90));
            rect(0, 0, 1, tileSize);
        }

        pop();
    }
}
