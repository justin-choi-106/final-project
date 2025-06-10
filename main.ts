tiles.setCurrentTilemap(assets.tilemap`level`)
 let mySprite = sprites.create(img`
     . . . . . . . . . . . . . . . .
     . . . . 3 3 . . . . . . . . . .
     . . 3 3 3 3 3 3 3 3 3 3 . . . .
     . 3 3 . . . . . . . . . 3 . . .
     . 3 . . . . . . . . . . . 3 . .
     . 3 . . . . . . . . . . . 3 . .
     . 3 3 . . . . . . . . . . 3 . .
     . . 3 . 3 3 3 3 3 3 . . . . 3 .
     . . . 3 3 . . . . . 3 3 . . 3 .
     . . . 3 . 3 3 3 3 3 3 3 3 3 . .
     . . . . 3 . . . . . . . . . 3 .
     . . . . . 3 . . . . . . . . . 3
     . . . . . . 3 . . . . . . . . 3
     . . . . . . . 3 3 . . . . . . 3
     . . . . . . . . . 3 3 . . . . 3
     . . . . . . . . . . . 3 3 3 3 3
 `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function() {
    
})