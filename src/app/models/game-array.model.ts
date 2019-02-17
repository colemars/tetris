export class GameArray {
  constructor() {
  }

  static gameState(gameArray, bodies, s) {
    for(let i=0; i<20; i++){
      gameArray.push([[0,0,s.height/20*i,0],[0, 50,s.height/20*i,0],[0, 100,s.height/20*i,0],[0, 150,s.height/20*i,0],[0, 200,s.height/20*i,0],[0, 250,s.height/20*i,0],[0, 300,s.height/20*i,0],[0, 350,s.height/20*i,0],[0, 400,s.height/20*i,0],[0, 450,s.height/20*i,0]]);
    }

    for (let i = 0; i < bodies.length; i++) {
      //indicates whether the position contains an alive or dead body, -1 meaning dead, 1 meaning alive

      bodies[i].blocks.forEach((block => {
        gameArray.forEach((row) => {
          row.forEach((position) => {
            if (block.y === position[2] && block.x === position[1]) {
              position[3] = 1;
              position[0] = 1;
            }
          })
        })
      }))
    }
    return gameArray
  }
}
