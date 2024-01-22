controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Fish_Food.setVelocity(50, 50)
    Fish_Food.setPosition(160, randint(5, 115))
})
function Velocity_Increase_Points (Level: number) {
	
}
let Fish_Food: Sprite = null
let Level = 0
Fish_Food = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 4 4 4 4 5 . . . . . 
    . . . . . 5 4 5 5 4 5 . . . . . 
    . . . . . 5 4 5 5 4 5 . . . . . 
    . . . . . 5 4 4 4 4 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Fish = sprites.create(assets.image`myImage`, SpriteKind.Player)
Fish.setStayInScreen(true)
Fish.setVelocity(30, 0)
controller.moveSprite(Fish, 40, 40)
scene.setBackgroundImage(assets.image`background water`)
Fish.changeScale(3, ScaleAnchor.Middle)
Fish.ax = 30
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(Fish)
tiles.placeOnTile(Fish, tiles.getTileLocation(0, 252))
