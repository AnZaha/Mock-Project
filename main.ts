function Velocity_Increase_Points (Level: number) {
    Fish_Food = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d . e . . e . . . . . 
        . . . . . e d d e e . . . . . . 
        . . e d e d d e e e d . . . . . 
        . . . d e d e d d e d . . . . . 
        . . . d e d e e d e d . . . . . 
        . . . d e d d d d d e . . . . . 
        . . . . e e e e e e d . . . . . 
        . . . . . . . d e d d . . . . . 
        . . . . . . . . . e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Fish_Food.setPosition(155, randint(20, 85))
    Fish_Food.setVelocity(100, 30)
}
let Fish_Food: Sprite = null
let Level = 0
let Fish = sprites.create(assets.image`myImage`, SpriteKind.Player)
Fish.setVelocity(30, 0)
controller.moveSprite(Fish, 40, 40)
scene.setBackgroundImage(assets.image`background water`)
Fish.changeScale(3, ScaleAnchor.Middle)
Fish.ax = 30
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(Fish)
tiles.placeOnTile(Fish, tiles.getTileLocation(0, 252))
Velocity_Increase_Points(Level)
