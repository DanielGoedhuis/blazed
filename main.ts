controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`myImage3`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim2`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    200,
    true
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage3`, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
tiles.setTilemap(tilemap`level3`)
scene.cameraFollowSprite(mySprite)
forever(function () {
	
})
