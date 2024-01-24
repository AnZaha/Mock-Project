function Points (mySprite: Sprite, level: number) {
    list = [
    img`
        . . 5 5 5 5 5 . . 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        5 5 . 5 5 5 5 . . 5 5 5 5 . 5 5 
        5 5 5 . 5 5 5 5 5 5 5 5 . 5 5 5 
        5 5 5 5 . 5 5 . . 5 5 . 5 5 5 5 
        5 5 5 5 5 . 5 5 5 5 . 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 . 5 5 5 5 5 5 
        . 5 . 5 . 5 5 . . 5 5 . 5 . 5 . 
        . 5 . 5 . 5 5 . . 5 5 . 5 . 5 . 
        5 5 5 5 5 5 . 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 . 5 5 5 5 . 5 5 5 5 5 
        5 5 5 5 . 5 5 . . 5 5 . 5 5 5 5 
        5 5 5 . 5 5 5 5 5 5 5 5 . 5 5 5 
        5 5 . 5 5 5 5 . . 5 5 5 5 . 5 5 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 . . 5 5 5 5 5 . . 
        `,
    img`
        . . 9 9 9 9 9 . . 9 9 9 9 9 . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        9 9 . 9 9 9 9 . . 9 9 9 9 . 9 9 
        9 9 9 . 9 9 9 9 9 9 9 9 . 9 9 9 
        9 9 9 9 . 9 9 . . 9 9 . 9 9 9 9 
        9 9 9 9 9 . 9 9 9 9 . 9 9 9 9 9 
        9 9 9 9 9 9 . 9 9 . 9 9 9 9 9 9 
        . 9 . 9 . 9 9 . . 9 9 . 9 . 9 . 
        . 9 . 9 . 9 9 . . 9 9 . 9 . 9 . 
        9 9 9 9 9 9 . 9 9 . 9 9 9 9 9 9 
        9 9 9 9 9 . 9 9 9 9 . 9 9 9 9 9 
        9 9 9 9 . 9 9 . . 9 9 . 9 9 9 9 
        9 9 9 . 9 9 9 9 9 9 9 9 . 9 9 9 
        9 9 . 9 9 9 9 . . 9 9 9 9 . 9 9 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . 9 9 9 9 9 . . 9 9 9 9 9 . . 
        `,
    img`
        . . a a a a a . . a a a a a . . 
        . . a a a a a a a a a a a a . . 
        a a . a a a a . . a a a a . a a 
        a a a . a a a a a a a a . a a a 
        a a a a . a a . . a a . a a a a 
        a a a a a . a a a a . a a a a a 
        a a a a a a . a a . a a a a a a 
        . a . a . a a . . a a . a . a . 
        . a . a . a a . . a a . a . a . 
        a a a a a a . a a . a a a a a a 
        a a a a a . a a a a . a a a a a 
        a a a a . a a . . a a . a a a a 
        a a a . a a a a a a a a . a a a 
        a a . a a a a . . a a a a . a a 
        . . a a a a a a a a a a a a . . 
        . . a a a a a . . a a a a a . . 
        `,
    img`
        . . 1 1 1 1 1 . . 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        1 1 3 1 1 1 1 . . 1 1 1 1 3 1 1 
        1 1 1 3 1 1 1 1 1 1 1 1 3 1 1 1 
        1 1 1 1 3 1 1 . . 1 1 3 1 1 1 1 
        1 1 1 1 1 3 1 1 1 1 3 1 1 1 1 1 
        1 1 1 1 1 1 3 . . 3 1 1 1 1 1 1 
        . 1 . 1 . 1 . . . . 1 . 1 . 1 . 
        . 1 . 1 . 1 . . . . 1 . 1 . 1 . 
        1 1 1 1 1 1 3 . . 3 1 1 1 1 1 1 
        1 1 1 1 1 3 1 1 1 1 3 1 1 1 1 1 
        1 1 1 1 3 1 1 . . 1 1 3 1 1 1 1 
        1 1 1 3 1 1 1 1 1 1 1 1 3 1 1 1 
        1 1 3 1 1 1 1 . . 1 1 1 1 3 1 1 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 . . 1 1 1 1 1 . . 
        `
    ]
    while (Level > 3) {
    	
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Level = Level + 1
    tiles.placeOnTile(Fish, tiles.getTileLocation(0, current_row - 13))
    Fish.setVelocity(Current_velocity + 50, 0)
})
let list: Image[] = []
let Current_velocity = 0
let current_row = 0
let Fish: Sprite = null
let Level = 0
Level = 0
scene.setBackgroundImage(assets.image`background water`)
tiles.setCurrentTilemap(tilemap`level`)
let EndPole = sprites.create(assets.image`EndPole`, SpriteKind.Enemy)
tiles.placeOnTile(EndPole, tiles.getTileLocation(250, 252))
EndPole.changeScale(10, ScaleAnchor.Middle)
Fish = sprites.create(assets.image`myImage`, SpriteKind.Player)
current_row = 252
tiles.placeOnTile(Fish, tiles.getTileLocation(0, current_row))
scene.cameraFollowSprite(Fish)
Fish.setStayInScreen(true)
Current_velocity = Current_velocity
Fish.setVelocity(80, 0)
Fish.changeScale(3, ScaleAnchor.Middle)
controller.moveSprite(Fish, 40, 40)
