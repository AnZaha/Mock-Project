namespace SpriteKind {
    export const p = SpriteKind.create()
}
function Points (mySprite: Sprite, level: number) {
    list = [
    img`
        . . 5 5 5 5 3 . . 3 5 5 5 5 . . 
        . . 5 5 5 5 3 3 3 3 5 5 5 5 . . 
        5 5 . 5 5 5 3 . . 3 5 5 5 . 5 5 
        5 5 5 . 5 5 3 3 3 3 5 5 . 5 5 5 
        5 5 5 5 . 5 3 . . 3 5 . 5 5 5 5 
        5 5 5 5 5 . 3 3 3 3 . 5 5 5 5 5 
        3 3 3 3 3 3 . 3 3 . 3 3 3 3 3 3 
        . 3 . 3 . 3 3 . . 3 3 . 3 . 3 . 
        . 3 . 3 . 3 3 . . 3 3 . 3 . 3 . 
        3 3 3 3 3 3 . 3 3 . 3 3 3 3 3 3 
        5 5 5 5 5 . 3 3 3 3 . 5 5 5 5 5 
        5 5 5 5 . 5 3 . . 3 5 . 5 5 5 5 
        5 5 5 . 5 5 3 3 3 3 5 5 . 5 5 5 
        5 5 . 5 5 5 3 . . 3 5 5 5 . 5 5 
        . . 5 5 5 5 3 3 3 3 5 5 5 5 . . 
        . . 5 5 5 5 3 . . 3 5 5 5 5 . . 
        `,
    img`
        . . 3 9 9 9 9 . . 9 9 9 9 3 . . 
        . . 3 3 9 9 9 9 9 9 9 9 3 3 . . 
        3 3 . 3 3 9 9 . . 9 9 3 3 . 3 3 
        9 3 3 . 3 3 9 9 9 9 3 3 . 3 3 9 
        9 9 3 3 . 3 3 . . 3 3 . 3 3 9 9 
        9 9 9 3 3 . 3 3 3 3 . 3 3 9 9 9 
        9 9 9 9 3 3 . 3 3 . 3 3 9 9 9 9 
        . 9 . 9 . 3 3 . . 3 3 . 9 . 9 . 
        . 9 . 9 . 3 3 . . 3 3 . 9 . 9 . 
        9 9 9 9 3 3 . 3 3 . 3 3 9 9 9 9 
        9 9 9 3 3 . 3 3 3 3 . 3 3 9 9 9 
        9 9 3 3 . 3 3 . . 3 3 . 3 3 9 9 
        9 3 3 . 3 3 9 9 9 9 3 3 . 3 3 9 
        3 3 . 3 3 9 9 . . 9 9 3 3 . 3 3 
        . . 3 3 9 9 9 9 9 9 9 9 3 3 . . 
        . . 3 9 9 9 9 . . 9 9 9 9 3 . . 
        `,
    img`
        . . 3 3 3 3 3 . . 3 3 3 3 3 . . 
        . . 3 a a a 3 3 3 3 a a a 3 . . 
        3 3 . a a a a . . a a a a . 3 3 
        3 a a . a a a a a a a a . a a 3 
        3 a a a . a a . . a a . a a a 3 
        3 a a a a . a a a a . a a a a 3 
        3 3 a a a a . a a . a a a a 3 3 
        . 3 . a . a a . . a a . a . 3 . 
        . 3 . a . a a . . a a . a . 3 . 
        3 3 a a a a . a a . a a a a 3 3 
        3 a a a a . a a a a . a a a a 3 
        3 a a a . a a . . a a . a a a 3 
        3 a a . a a a a a a a a . a a 3 
        3 3 . a a a a . . a a a a . 3 3 
        . . 3 a a a 3 3 3 3 a a a 3 . . 
        . . 3 3 3 3 3 . . 3 3 3 3 3 . . 
        `,
    img`
        . . 3 1 1 1 1 . . 1 1 1 1 3 . . 
        . . 3 1 1 1 1 1 1 1 1 1 1 3 . . 
        3 3 3 1 1 1 1 . . 1 1 1 1 3 3 3 
        1 1 1 3 1 1 1 1 1 1 1 1 3 1 1 1 
        1 1 1 1 3 1 1 . . 1 1 3 1 1 1 1 
        1 1 1 1 1 3 1 1 1 1 3 1 1 1 1 1 
        1 1 1 1 1 1 3 . . 3 1 1 1 1 1 1 
        . 1 . 1 . 1 . 3 3 . 1 . 1 . 1 . 
        . 1 . 1 . 1 . 3 3 . 1 . 1 . 1 . 
        1 1 1 1 1 1 3 . . 3 1 1 1 1 1 1 
        1 1 1 1 1 3 1 1 1 1 3 1 1 1 1 1 
        1 1 1 1 3 1 1 . . 1 1 3 1 1 1 1 
        1 1 1 3 1 1 1 1 1 1 1 1 3 1 1 1 
        3 3 3 1 1 1 1 . . 1 1 1 1 3 3 3 
        . . 3 1 1 1 1 1 1 1 1 1 1 3 . . 
        . . 3 1 1 1 1 . . 1 1 1 1 3 . . 
        `
    ]
    while (false) {
    	
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Level = Level + 1
    game.splash("You have reached: Level ", Level)
    tiles.placeOnTile(EndPole, tiles.getTileLocation(250, Pole_Row - 13))
    tiles.placeOnTile(Fish, tiles.getTileLocation(0, current_row - 13))
    Fish.setVelocity(Current_velocity + 50, 0)
})
let Point: Sprite = null
let list: Image[] = []
let Current_velocity = 0
let current_row = 0
let Fish: Sprite = null
let Pole_Row = 0
let EndPole: Sprite = null
let Level = 0
Level = 0
info.setScore(Level)
scene.setBackgroundImage(assets.image`background water`)
tiles.setCurrentTilemap(tilemap`level`)
EndPole = sprites.create(assets.image`EndPole`, SpriteKind.Enemy)
Pole_Row = 252
tiles.placeOnTile(EndPole, tiles.getTileLocation(254, Pole_Row))
EndPole.changeScale(10, ScaleAnchor.Middle)
Fish = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.cameraFollowSprite(Fish)
current_row = 252
tiles.placeOnTile(Fish, tiles.getTileLocation(0, current_row))
Fish.setStayInScreen(true)
Current_velocity = 150
Fish.setVelocity(Current_velocity, 0)
Fish.ax = 100
Fish.changeScale(3, ScaleAnchor.Middle)
controller.moveSprite(Fish, 100, 100)
game.splash("Use arrow keys to navigate, who can gain the most points?")
game.onUpdateInterval(1000, function () {
    if (Level / 2 != 0) {
        for (let index = 0; index < 4; index++) {
            Point = sprites.create(list._pickRandom(), SpriteKind.p)
            Point.setPosition(160, 56)
            Point.setVelocity(-100, 0)
            pause(100)
        }
    }
})
