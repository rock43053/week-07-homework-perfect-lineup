function validateLineup(lineup) {
  let posP = 0
  let posC = 0
  let pos1B = 0
  let pos2B = 0
  let pos3B = 0
  let posSS = 0
  let posOF = 0
  let gamesPlayed = []
  let playerTeam = []


  lineup.forEach(player => {
    if (player.salary <= 45000) {
      switch (player.position) {
        case 'P':
          posP += 1
          gamesPlayed.push(player.gameId)
          playerTeam.push(player.teamId)
          break
        case 'C':
          posC += 1
          gamesPlayed.push(player.gameId)
          playerTeam.push(player.teamId)
          break
        case '1B':
          pos1B += 1
          gamesPlayed.push(player.gameId)
          playerTeam.push(player.teamId)
          break
        case '2B':
          pos2B += 1
          gamesPlayed.push(player.gameId)
          playerTeam.push(player.teamId)
          break
        case '3B':
          pos3B += 1
          gamesPlayed.push(player.gameId)
          playerTeam.push(player.teamId)
          break
        case 'SS':
          posSS += 1
          gamesPlayed.push(player.gameId)
          playerTeam.push(player.teamId)
          break
        case 'OF':
          posOF += 1
          gamesPlayed.push(player.gameId)
          playerTeam.push(player.teamId)
          break
      }
    }
  })


  let count = 0


  for (let i = 0; i < gamesPlayed.length; i++) {
    for (let x = i + 1; x < gamesPlayed.length; x++) {
      if (gamesPlayed[i] === gamesPlayed[x]) {
        count++
        break
      }
    }
  }
  // let teamIdCount = 0


  for (let i = 0; i < playerTeam.length; i++) {
    for (let x = 0; x < playerTeam.length; x++) {
      if (playerTeam[i] === playerTeam[x]) {
        // teamIdCount++
      }
    }
  }


  let playerPositions = posOF === 3 && pos1B === 1 && pos2B === 1 && pos3B === 1 &&
posC === 1 && posSS === 1 && posP === 1


  let result = playerPositions === true && count <= 2


  return result
}

module.exports = validateLineup
