document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const width = 28 //28 * 28 = 784 squares
    let score = 0;

    //layout of grid and what is in the squares

    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]

    const arraySquares = []
    //Legend
    //0 - pac-dot
    //1 wall
    //2 - ghosh-lair
    //3 - power-pellet
    //4 - empty

    //draw the grid and render it
    function createBoard(){
        for (let i=0; i<layout.length; i++) {
            const square = document.createElement('div')
            grid.appendChild(square)
            arraySquares.push(square)

            //add layout to the board
            if(layout[i] === 0){
                arraySquares[i].classList.add('pac-dot') //class css
            }else if(layout[i] === 1){
                arraySquares[i].classList.add('wall') //class css
            }else if(layout[i] === 3){
                arraySquares[i].classList.add('power-pellet')
            }
        }
    }
    createBoard() 

    //add   
    //draw blinky on the board
    //let blinkyCurrentIndex = 197
    //arraySquares[blinkyCurrentIndex].classList.add('blinky')

    //get the coordinates of pacman or blinky on the grid with X and Y axis
    /* function getCoordinates(index) {
        return [index % width, Math.floor(index / width)]
    } */
 



    //starting postion of pac-man
    let pacmanCurrentIndex = 490
    arraySquares[pacmanCurrentIndex].classList.add('pac-man')

    //move pac-man
    function movePacman(e){
        arraySquares[pacmanCurrentIndex].classList.remove('pac-man')

        switch (e.keyCode) {
            case 37:  //izq
                if( pacmanCurrentIndex % width !== 0 && !arraySquares[pacmanCurrentIndex -1].classList.contains('wall')){
                    pacmanCurrentIndex -=1;
                }    
                
                //check if pacman is in the left exit
                if((pacmanCurrentIndex -1) === 363){
                    pacmanCurrentIndex = 391
                }

                break;
            case 38: //arriba
                if(pacmanCurrentIndex - width >=0 && !arraySquares[pacmanCurrentIndex - width].classList.contains('wall')){
                    pacmanCurrentIndex -=width;
                }
                break;

            case 39://der
                if(pacmanCurrentIndex % width < width-1 && !arraySquares[pacmanCurrentIndex +1].classList.contains('wall')){
                    pacmanCurrentIndex +=1;
                }

                //check if pacman is in the righ exit
                if(pacmanCurrentIndex +1 === 392 ){
                   arraySquares[pacmanCurrentIndex].classList.add('pac-man')
                   pacmanCurrentIndex = 364
                   arraySquares[391].classList.remove('pac-man')
                }

                break;
            case 40: //abajo
                if(pacmanCurrentIndex + width < width * width && !arraySquares[pacmanCurrentIndex +width].classList.contains('wall')){
                    pacmanCurrentIndex +=width;
                }
                break
            /* default:
                break; */
        }

        arraySquares[pacmanCurrentIndex].classList.add('pac-man')


        pacDotEaten()
        powerPelletEaten()
        checkForGameOver()
        checkForWin()
    }

    document.addEventListener('keyup', movePacman)

    //wath happens when pac-man a pac-dot

    function pacDotEaten(){
        if(arraySquares[pacmanCurrentIndex].classList.contains('pac-dot')){
            score++
            scoreDisplay.innerHTML = score
            arraySquares[pacmanCurrentIndex].classList.remove('pac-dot')

        }
    }

    //what happens when you eat a power-pellet
    function powerPelletEaten() {
        if (arraySquares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        score +=10
        arrayGhosts.forEach(ghost => ghost.isScared = true)
        setTimeout(unScareGhosts, 10000)
        arraySquares[pacmanCurrentIndex].classList.remove('power-pellet')
        }
    }

    //make the ghosts stop flashing
    function unScareGhosts() {
        arrayGhosts.forEach(ghost => ghost.isScared = false)
    }

    //create our ghost template
    class Ghost{
        constructor(className, startIndex, speed) {      
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    //all my ghosts
    const arrayGhosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 400),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 379, 500)
    ]

    //drav my ghossts onto the grid
    arrayGhosts.forEach(ghost => {
        arraySquares[ghost.currentIndex].classList.add(ghost.className)
        arraySquares[ghost.currentIndex].classList.add('ghost')
    })

    //move all the ghost randomly  
    arrayGhosts.forEach(ghost => moveGhost(ghost))
    
    //write the function to move the ghosts
    function moveGhost(ghost){
        //add
        //const directions =  [-1, +1, +width, -width]
        //let ghostimerId  = NaN   

        const directions = [-1, +1, width, -width] 
        let direction = directions[Math.floor(Math.random() * directions.length)]

        /* ghostimerId = setInterval(function() {
            console.log(blinkyCurrentIndex)
            if  (!arraySquares[blinkyCurrentIndex + direction].classList.contains('wall')) {
                //remove the ghosts classes
                arraySquares[blinkyCurrentIndex].classList.remove('blinky')
                //move into that space
      
                const [blinkyX, blinkyY] = getCoordinates(blinkyCurrentIndex)
                const [pacManX, pacManY] = getCoordinates(pacmanCurrentIndex)
                const [blinkyNextX, blinkyNextY] = getCoordinates(blinkyCurrentIndex + direction)
      
                function isXCoordCloser() {
                  if ((blinkyNextX - pacManX) > (blinkyX - pacManX)){
                    return true
                  } else return false
               }
      
                function isYCoordCloser() {
                  if ((blinkyNextY - pacManY) > (blinkyY - pacManY)) {
                    return true
                  } else return false
                }
                if (isXCoordCloser() || isYCoordCloser()) {
                  blinkyCurrentIndex += direction
                  arraySquares[blinkyCurrentIndex].classList.add('blinky')
      
                } else {
                    arraySquares[blinkyCurrentIndex].classList.add('blinky')
                  direction = directions[Math.floor(Math.random() * directions.length)]
              }
              arraySquares[blinkyCurrentIndex].classList.add('blinky')
              } else direction = directions[Math.floor(Math.random() * directions.length)]
      
            if(arraySquares[blinkyCurrentIndex].classList.contains('pac-man')) clearInterval(ghostimerId)
      
          }, 300) */



        ghost.timerId = setInterval(function(){
            //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
            if(!arraySquares[ghost.currentIndex + direction].classList.contains('wall') && !arraySquares[ghost.currentIndex + direction].classList.contains('ghost') ) {
            //remove the ghosts classes
            //squares[ghost.currentIndex].classList.remove(ghost.className)
            arraySquares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            //move into that space
            ghost.currentIndex += direction
            arraySquares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
          //else find a new random direction ot go in
          } else 
            direction = directions[Math.floor(Math.random() * directions.length)]

            //if the ghost is currently scared
            if (ghost.isScared) {
                arraySquares[ghost.currentIndex].classList.add('scared-ghost')
            }

            //if the ghost is currently scared and pacman is on it
            if(ghost.isScared && arraySquares[ghost.currentIndex].classList.contains('pac-man')) {
                arraySquares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex = ghost.startIndex
                score +=100
                arraySquares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
            }

            checkForGameOver()
        }, ghost.speed)

        
    }

    //check for a game over
    function checkForGameOver() {
        if (arraySquares[pacmanCurrentIndex].classList.contains('ghost') && !arraySquares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
        arrayGhosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
            /* setTimeout(function(){ 
                alert("Game Over"); 
            }, 500) */
            scoreDisplay.innerHTML = 'GAME OVER'
        }
    }

    //check for a win - more is when this score is reached
    function checkForWin() {
        if (score === 274) {
            arrayGhosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            /* setTimeout(function(){ 
                alert("You have WON!");
            }, 500) */
            scoreDisplay.innerHTML = 'You have WON!'
        }
    }
})