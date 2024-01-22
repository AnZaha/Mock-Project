controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Fish_Food = sprites.createProjectileFromSprite(img`
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
        `, Off_right_projectile_spawner, 50, 50)
})
function Velocity_Increase_Points (Level: number) {
	
}
let Fish_Food: Sprite = null
let Off_right_projectile_spawner: Sprite = null
let Level = 0
let Fish = sprites.create(assets.image`myImage`, SpriteKind.Player)
Off_right_projectile_spawner = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Off_right_projectile_spawner, tiles.getTileLocation(11, 240))
Fish.setVelocity(30, 0)
controller.moveSprite(Fish, 40, 40)
scene.setBackgroundImage(assets.image`background water`)
Fish.changeScale(3, ScaleAnchor.Middle)
Fish.ax = 30
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(Fish)
tiles.placeOnTile(Fish, tiles.getTileLocation(0, 252))
forever(function () {
	
})
