namespace SpriteKind {
    export const guitar = SpriteKind.create()
    export const knife = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
// ///////////////////////// Controls
// ///////////////////
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    playIdleBackAnimation()
})
function playIdleBackAnimation () {
    animation.runImageAnimation(
    seeward,
    [img`
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e e e e f e 
. f f e e e e e f f e e e 
. e e e f f f f f e e e . 
. f f e e e e e e e e f f 
. 4 f e e f f f f f e f . 
. . e e e e e e e e e f . 
. . . 4 e e f f e e e . . 
. . . 4 4 e e e e e 4 . . 
. . . . 4 4 4 4 4 4 4 . . 
. . . . . . 4 4 4 . . . . 
. e e e e e 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . 4 . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e e e e f e 
. f f e e e e e f f e e e 
. e e e f f f f f e e e . 
. f f e e e e e e e e f f 
. 4 f e e f f f f f e f . 
. . e e e e e e e e e f . 
. . . 4 e e f f e e e . . 
. . . 4 4 e e e e e 4 . . 
. . . . 4 4 4 4 4 4 4 . . 
. e e e e e 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . 4 . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e e e e f e 
. f f e e e e e f f e e e 
. e e e f f f f f e e e . 
. f f e e e e e e e e f f 
. 4 f e e f f f f f e f . 
. . e e e e e e e e e f . 
. . . 4 e e f f e e e . . 
. . . 4 4 e e e e e 4 . . 
. . . . 4 4 4 4 4 4 4 . . 
. e e e e e 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . 4 . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e e e e f e 
. f f e e e e e f f e e e 
. e e e f f f f f e e e . 
. f f e e e e e e e e f f 
. 4 f e e f f f f f e f . 
. . e e e e e e e e e f . 
. . . 4 e e f f e e e . . 
. . . 4 4 e e e e e 4 . . 
. . . . 4 4 4 4 4 4 4 . . 
. e e e e e 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. . . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e e e e f e 
. f f e e e e e f f e e e 
. e e e f f f f f e e e . 
. f f e e e e e e e e f f 
. 4 f e e f f f f f e f . 
. . e e e e e e e e e f . 
. . . 4 e e f f e e e . . 
. . . 4 4 e e e e e 4 . . 
. . . . 4 4 4 4 4 4 4 . . 
. e e e e e 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`],
    100,
    true
    )
}
// /////////////////////////// when player flips
// switch ///////////////////////////
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.greenSwitchDown)
    game.splash("quick, find the guitar")
    info.startCountdown(10)
    addGuitar()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    playWalkLeftAnimation()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    playUpDownAnimation()
})
function playUpDownAnimation () {
    animation.runImageAnimation(
    seeward,
    [img`
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. . . . 4 4 4 4 4 4 . . . 
. e e e e e 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . 4 4 . . . 4 4 . . . 
. . . e e . . . e e . . . 
. . . f f . . . f f . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . e e . . . 4 4 . . . 
. . . f f . . . e e . . . 
. . . . . . . . f f . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . 4 4 . . . e e . . . 
. . . e e . . . f f . . . 
. . . f f . . . . . . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . e e . . . 4 4 . . . 
. . . f f . . . e e . . . 
. . . . . . . . f f . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . 4 4 . . . e e . . . 
. . . e e . . . f f . . . 
. . . f f . . . . . . . . 
`],
    100,
    true
    )
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    playAttackAnimation()
})
function playAttackAnimation () {
    animation.runImageAnimation(
    seeward,
    [img`
. . . . . . e f f e f e e . . . . . . . . . . . . . . 
. . . . . e f e e f e e f e . . . . . . . . . . . . . 
. . . . f f e f f f e f e f e . . . . . . . . . . . . 
. . . e f e e f e e f e e f e . . . . . . . . . . . . 
. . . f e e f f e e e 4 e e f e . . . . . . . . . . . 
. . . . f e e e 4 4 4 4 4 e e e . . . . . . . . . . . 
. 1 . . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . . 
. 1 1 . . f f f f f 4 4 f f f f . . . . . . . . . . . 
. 1 1 . . 4 4 f 4 e f f e 4 f . . . . . . . . . . . . 
. 1 1 . . 4 4 f f f 4 4 f f f . . . . . . . . . . . . 
. 1 1 1 . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . 
. . 1 1 . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . 
. . 1 1 . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . . 
. . 1 1 e e e 4 4 4 4 4 4 . . . . . . . . . . . . . . 
. . . 1 1 e e e 4 4 4 4 . . . . . . . . . . . . . . . 
. . . 1 1 1 e e e e e e e b b b 1 b b b b b b b . . . 
. . . . e 1 1 1 1 1 1 1 1 1 1 b b 1 b b b b b b 1 . . 
. . . . e e e e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . e e e e e e e . . . . . . . . . . . . . . . . 
. . . . c c e e e e e . . . . . . . . . . . . . . . . 
. . . . c c c c c c c . . . . . . . . . . . . . . . . 
. . . . c c c . c c c . . . . . . . . . . . . . . . . 
. . . . 4 4 . . . 4 4 . . . . . . . . . . . . . . . . 
. . . e e b . . . b e e . . . . . . . . . . . . . . . 
. . . f f f . . . f f f . . . . . . . . . . . . . . . 
`,img`
. . . . . . e f f e f e e . . . . . . . . . . . . . . 
. . . . . e f e e f e e f e . . . . . . . . . . . . . 
. . . . f f e f f f e f e f e . . . . . . . . . . . . 
. . . e f e e f e e f e e f e . . . . . . . . . . . . 
. . . f e e f f e e e 4 e e f e . . . . . . . . . . . 
. . . . f e e e 4 4 4 4 4 e e e . . . . . . . . . . . 
. . . . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . . 
. . . . . f f f f f 4 4 f f f f . . . . . . . . . . . 
. . . . . 4 4 f 4 e f f e 4 f . . . . . . . . . . . . 
. . . . . 4 4 f f f 4 4 f f f . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . . 
. . . . . e e 4 4 4 4 4 4 . . . . . . . . . . . . . . 
. . . . e e e e 4 4 4 4 . . . . . . . . . . . . . . . 
. . . . e e e e e e e e e b b b b b b b b b b 5 . 5 . 
. . . . e e e e e e e e e b b b b b b b b b 1 1 5 . . 
. . . . e e e e e e e . . 1 1 1 1 1 1 1 1 1 1 5 . 5 . 
. . . . e e e e e e e . . . . . . . . . . . . . . . . 
. . . . c c c c c c c . . . . . . . . . . . . . . . . 
. . . . c c c c c c c . . . . . . . . . . . . . . . . 
. . . . c c c . c c c . . . . . . . . . . . . . . . . 
. . . . 4 4 . . . 4 4 . . . . . . . . . . . . . . . . 
. . . e e b . . . b e e . . . . . . . . . . . . . . . 
. . . f f f . . . f f f . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . e f f e f e e . . . . . . . . . . . . . . . . 
. . . e f e e f e e f e . . . . . . . . . . . . . . . 
. . f f e f f f e f e f e . . . . . . . . . . . . . . 
. e f e e f e e f e e f e e . . . . . . . . . . . . . 
. f e e f f e e e 4 e e f e . . . . . . . . . . . . . 
. . f f e e 4 4 4 4 4 e e . . . . . . . . . . . . . . 
. . e e 4 4 4 4 4 4 4 4 e . . . . . . . . . . . . . . 
. 1 f f f f f f 4 4 f f f f . . . . . . . . . . . . . 
. . 4 f 4 f 4 e f f e 4 f . . . . . . . . . . . . . . 
. . . e 4 f f f 4 4 f f f . . . . . . . . . . . . . . 
. . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 e 4 4 4 . . . . . . . 1 1 1 . . . . . 
. . . . . 4 4 4 4 4 4 . . . . . . . . 1 1 . . . . . . 
1 1 . e e e e 4 4 4 . . . . . . . . 1 1 . . . . . . . 
. 1 1 e e e e e e e . . . . . . 1 1 1 . . . . . . . . 
. 1 1 1 1 e e e e e . . . . . . 1 1 . . . . . . . . . 
. 1 1 1 1 1 e e e e . . . . 1 1 1 . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 . . 1 1 1 1 . . . . . . . . . . . 
. . . c 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . 
. . . c c 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . 4 4 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . e e b . . 1 1 1 . . . . . . . . . . . . . . . . 
. . . f f f . . f f f . . . . . . . . . . . . . . . . 
`,img`
. . . . e f f e f e e . . . . . . . . . . . . . . . . 
. . . e f e e f e e f e . . . . . . . . . . . . . . . 
. . f f e f f f e f e f . . . . . . . . . . . . . . . 
. e f e e f e e f e e f . . . . . . . . . . . . . . . 
. f e e f f e e e 4 e e e . . . . . . . . . . . . . . 
. . f f e e 4 4 4 4 4 e e . . . . . . . . . . . . . . 
. . e e 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . 
. 1 f f f f f f 4 4 f f f . . . . . . . . . . . . . . 
. . 4 f 4 f 4 e f f e 4 f . . . . . . . . . . . . . . 
. . . e 4 f f f 4 4 f f f . . . . . . . . . . . . . . 
. . . 4 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 e 4 4 . . . . . . . . . . . . . . . 
. 1 . . 4 4 4 4 e 4 4 4 . . . . . . . . . . . . . . . 
1 1 1 . . 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . 
1 1 1 1 . 4 4 4 4 4 e e . . . . . . . . . . . . . . . 
1 1 1 1 e e e e e e e . . . . . . . . . . . . . . . . 
1 1 1 1 e e e e e e e . . . . . . . . . . . . . . . . 
. 1 1 1 e e e e e e e . . . . . . . . . . . . . . . . 
. . 1 1 1 e e e e e e . . . . . . . . . . . . . . . . 
. . . 1 1 1 e e e e . . . . . . . . . . . . . . . . . 
. . . c 1 1 1 c c c . 1 . . . . . . . . . . . . . . . 
. . . c c c 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . 4 4 . . 1 1 1 . . . . . . . . . . . . . . . . 
. . . e e b . . b e e . . . . . . . . . . . . . . . . 
. . . f f f . . f f f . . . . . . . . . . . . . . . . 
`,img`
. . . . e f f e f e e . . . . . . . . . . . . . . . . 
. . . e f e e f e e f e . . . . . . . . . . . . . . . 
. . f f e f f f e f e f e . . . . . . . . . . . . . . 
. e f e e f e e f e e f e . . . . . . . . . . . . . . 
. f e e f f e e e 4 e e f e . . . . . . . . . . . . . 
. . f 1 e e 4 4 4 4 4 e e e . . . . . . . . . . . . . 
. . b b 1 4 4 4 4 4 4 4 e . . . . . . . . . . . . . . 
. . b b 1 f f f 4 4 f f f f . . . . . . . . . . . . . 
. . b b 1 f 4 e f f e 4 f . . . . . . . . . . . . . . 
. . b b 1 f f f 4 4 f f f . . . . . . . . . . . . . . 
. . b d 1 4 4 4 4 e 4 4 . . . . . . . . . . . . . . . 
. . b d 1 4 4 4 4 e 4 4 . . . . . . . . . . . . . . . 
. . d b 1 4 4 4 e 4 4 4 . . . . . . . . . . . . . . . 
. . d b 1 4 4 4 4 4 4 . . . . . . . . . . . . . . . . 
. e b b 1 4 4 4 4 4 e . . . . . . . . . . . . . . . . 
. e b b 1 e e e e e e . . . . . . . . . . . . . . . . 
. e b b 1 e e e e e e . . . . . . . . . . . . . . . . 
. . e e e e e e e e e . . . . . . . . . . . . . . . . 
. . e 4 4 4 4 4 4 e . . . . . . . . . . . . . . . . . 
. . e e c c c c c c . . . . . . . . . . . . . . . . . 
. . e e c c c c c c . . . . . . . . . . . . . . . . . 
. . . c c c . c c c . . . . . . . . . . . . . . . . . 
. . . . 4 4 . . 4 4 . . . . . . . . . . . . . . . . . 
. . . e e b . . b e e . . . . . . . . . . . . . . . . 
. . . f f f . . f f f . . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
}
function playAttackLeftAnimation () {
    animation.runImageAnimation(
    seeward,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 1 . . . . . f f e f e e . . . 
. . . . . . . . . . . . . . 1 b b . . . f e e f e e f e e . 
. . . . . . . . . . . . . . 1 b b . . f e f f f e f e f e e 
. . . . . . . . . . . . . . 1 b b . f e e f e e f e e f e e 
. . . . . . . . . . . . . . 1 b b . e e f f e 4 4 4 e e f e 
. . . . . . . . . . . . . . 1 b b . f f e e 4 4 4 4 4 e e e 
. . . . . . . . . . . . . . 1 1 b . e e 4 4 4 4 4 4 4 4 e . 
. . . . . . . . . . . . . . 1 1 1 . . f f f 4 4 f f f f f . 
. . . . . . . . . . . . . . 1 b 1 . . f 4 e f f e 4 f 4 . . 
. . . . . . . . . 1 1 . . . 1 b b . . f f f 4 4 f f f 4 . . 
. . . . . . . . 1 1 . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . . 
. . . . . . . 1 1 . . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . . 
. . . . . . . 1 . . . . . . . e e . . . 4 4 4 e 4 4 4 4 . . 
. . . . . . . 1 . . . . . . . e e . . . . 4 4 4 4 4 4 . . . 
. . . . . . . 1 1 . . . . . . e e . . e e e 4 4 4 4 . . . . 
. . . . . . . . 1 1 . . . . . e 4 4 4 e e e e e e . . . . . 
. . . . . . . . 1 1 1 . . . . . . . e e e e e e e . . . . . 
. . . . . . . . . 1 1 . . . . . . . e e e e 1 1 1 . . . . . 
. . . . . . . . . . 1 1 . . . . . . e e e 1 1 1 1 . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . . . c c c . 1 1 c . . . . . 
. . . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . . 
. . . . . . . . . . . . . . . . . e e b . . e e b . . . . . 
. . . . . . . . . . . . . . . . . f f f . . f f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 1 . . . . . f f e f e e . . . 
. . . . . . . . . . . . . . 1 b b . . . f e e f e e f e e . 
. . . . . . . . . . . . . . 1 b b . . f e f f f e f e f e e 
. . . . . . . . . . . . . . 1 b b . f e e f e e f e e f e e 
. . . . . . . . . . . . . . 1 b b . e e f f e 4 4 4 e e f e 
. . . . . . . . . . . . . . 1 b b . f f e e 4 4 4 4 4 e e e 
. . . . . . . . . . . . . . 1 1 b . e e 4 4 4 4 4 4 4 4 e . 
. . . . . . . . . . . 1 1 . 1 1 1 . . f f f 4 4 f f f f f . 
. . . . . . . . . . 1 1 1 . 1 b 1 . . f 4 e f f e 4 f 4 . . 
. . . . . . . . . 1 1 . . . 1 b b . . f f f 4 4 f f f 4 . . 
. . . . . . . . 1 1 . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . . 
. . . . . . . 1 1 . . . . . 1 b b . . 4 4 4 e 4 4 4 4 4 . . 
. . . . . . . 1 . . . . . . . e e . . . 4 4 4 e 4 4 4 4 . . 
. . . . . . . 1 . . . . . . . e e . . . . 4 4 4 4 4 4 . . . 
. . . . . . . 1 1 . . . . . . e e . . e e e 4 4 4 4 . . . . 
. . . . . . . . 1 1 . . . . . e 4 4 4 e e e e e e . . . . . 
. . . . . . . . 1 1 . . . . . . . . e e e e e e e . . . . . 
. . . . . . . . . 1 1 . . . . . . . e e e e e e e . . . . . 
. . . . . . . . . . . 1 . . . . . . e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . . . c c c c c c c . . . . . 
. . . . . . . . . . . . . . . . . . c c c . c c c . . . . . 
. . . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . . 
. . . . . . . . . . . . . . . . . e e b . . e e b . . . . . 
. . . . . . . . . . . . . . . . . f f f . . f f f . . . . . 
`,img`
. . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 . . f f e f e e . . . . . . . . 
. . . . . . . 1 1 1 1 1 1 . . e e e f e e f e e . . . . . . 
. . . . . 1 1 1 1 1 1 1 . . f e f f f e f e f e e . . . . . 
. . . . 1 1 1 1 1 1 1 . . f e e f e e f e e f e e . . . . . 
. . . . 1 1 1 1 1 1 1 . . e e f f e 4 4 4 e e f e . . . . . 
. . . . 1 1 1 1 1 1 1 . . f f e e 4 4 4 4 4 e e e . . . . . 
. . . 1 1 1 1 1 1 1 . . . e e 4 4 4 4 4 4 4 4 e . . . . . . 
. . . 1 1 1 1 1 1 . . . . . f f f 4 4 f f f f f . . . . . . 
. . . 1 1 1 1 1 1 . . . . . f 4 e f f e 4 f 4 . . . . . . . 
. . 1 1 1 1 1 1 . . . . . . f f f 4 4 f f f 4 . . . . . . . 
. 1 1 1 1 1 1 . . . . . e 4 4 4 4 e 4 4 4 4 4 . . . . . . . 
. 1 1 1 1 1 . . . . . e 4 e 4 4 4 e 4 4 4 4 4 . . . . . . . 
. 1 1 1 1 1 . . . . e 4 4 4 . 4 4 4 e 4 4 4 4 . . . . . . . 
. 1 1 1 1 . . . . f e e . . . . 4 4 4 4 4 4 . . . . . . . . 
. 1 1 1 . . . . d b f . . . . e e 4 4 4 4 e e . . . . . . . 
. 1 1 1 . . . d b b . . . . . . e e e e e e e . . . . . . . 
. 4 1 . . . d b b . . . . . . . e e e e e e e . . . . . . . 
. 1 1 . . d b b . . . . . . . . e e e e e e e . . . . . . . 
2 1 2 . d b b . . . . . . . . . e e e e e e e . . . . . . . 
. . . d b b . . . . . . . . . . c c c c c c c . . . . . . . 
. 2 d b b . . . . . . . . . . . c c c . c c c . . . . . . . 
4 d b b . . 4 . . . . . . . . e e b . . e e b . . . . . . . 
2 4 b . 2 . . . . . . . . . . f f f . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f f e f e e . . . . . . . 
. . . . . . . . . . . . . . . . e e e f e e f e e . . . . . 
. . . . . . . . . . . . . . . f e f f f e f e f e e . . . . 
. . . . . . . . . . . . . . f e e f e e f e e f e e . . . . 
. . . . . . . . . . . . . . e e f f e 4 4 4 e e f e . . . . 
. . . . . . . . . . . . . . f f e e 4 4 4 4 4 e e e . . . . 
. . . . . . . . . . . . . . e e 4 4 4 4 4 4 4 4 e . . . . . 
. . . . . . . . . . . . . . . f f f 4 4 f f f f f . . . . . 
. . . . . . . . . . . . . . . f 4 e f f e 4 f 4 . . . . . . 
. . . . . . . . . . . . . . . f f f 4 4 f f f 4 . . . . . . 
. . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . . . . 
. . . . . . . . . . . . e 4 . 4 4 4 e 4 4 4 4 4 . . . . . . 
. . . . . . . . . . . e 4 e 4 . 4 4 4 e 4 4 4 4 . . . . . . 
. . . . . . 2 . . . e 4 4 4 . . . 4 4 4 4 4 4 . . . . . . . 
. . . . . . . . . f e e . . 4 . e e 4 4 4 4 e e . . . . . . 
2 . . . . . . . d b f . . . . . . e e e e e e e . . . . . . 
. . . 2 . . . d b b . . . . . . . e e e e e e e . . . . . . 
. . . . . . d b b . . . . . . . . e e e e e e e . . . . . . 
. . 4 . . d b b . . . . . . . . . e e e e e e e . . . . . . 
. . . . d b b . . . . . . . . . . c c c c c c c . . . . . . 
. . . d b b . . 2 . . . . . . . . c c c . c c c . . . . . . 
. 2 d b b . . . . . . . 4 . . . . 4 4 . . . 4 4 . . . . . . 
. d b b . . 4 . . . . . . . . . e e b . . e e b . . . . . . 
4 d b . 4 . . . . . . . . . . . f f f . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . f f e f e e . . . . . . . 
. . . . . . . . . . . . . . . . f e e f e e f e e . 1 1 . . 
. . . . . . . . . . . . . . . f e f f f e f e f e e . . . . 
. . . . . . . . . . . . . . f e e f e e f e e f e e . . . . 
. . . . . . . . . . . . . . e e f f e 4 4 4 e e f e . . . . 
. . . . . . . . . . . . 1 1 f f e e 4 4 4 4 4 e e e . . . . 
. . . . . . . . . . . 1 1 . e e 4 4 4 4 4 4 4 4 e . . . . . 
. . . . . . . . . 1 1 1 . . . f f f 4 4 f f f f f . . . . . 
. . . . . . . 1 1 1 1 . . . . f 4 e f f e 4 f 4 . . . . . . 
. . . . . . 1 1 1 . . . . . . f f f 4 4 f f f 4 . . . . . . 
. . . . . 1 1 1 . . . . . . . 4 4 4 e 4 4 4 4 4 . . . . . . 
. . . . 1 1 1 . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . . . . 
. . . 1 1 1 . . . . . . . . . . 4 4 4 e 4 4 4 4 . . . . . . 
. . 1 1 1 1 . . . . . . . . . . . 4 4 4 4 4 4 . . . . . . . 
. . 1 1 1 1 . . . . . . . . . . . e 4 4 4 4 e e e e . . . . 
. 1 1 1 1 1 1 . . . . . . . . . . e e e e e e e . e . . . . 
1 1 1 1 1 1 1 1 . . . . . . . . . e e e e e e e . e . . . . 
. 1 1 1 1 1 1 1 1 . . . . . . . . e e 1 1 1 1 e . 4 4 4 . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 e e e e e . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . e e e e e e e . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . . c c c c c c c . . . . . . 
. . . . . . . . . . . . . . . . . c c c . c c c . . . . . . 
. . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . . . 
. . . . . . . . . . . . . . . . e e b . . e e b . . . . . . 
. . . . . . . . . . . . . . . . f f f . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . f f e f e e . . . . . 
. . . . . . . . . . . . . . . . . . f e e f e e f e e . . . 
. . . . . . . . . . . . . . . . . f e f f f e f e f e e . . 
. . . . . . . . . . . . . . . . f e e f e e f e e f e e . . 
. . . . . . . . . . . . . . . . e e f f e 4 4 4 e e f e . . 
. . . . . . . . . . . . . . . . f f e e 4 4 4 4 4 e e e . . 
. . . . . . . . . . . . . . . . e e 4 4 4 4 4 4 4 4 e . . . 
. . . . . . . . . . . . . . . . . f f f 4 4 f f f f f . . . 
. . . . . . . . . . . . . . . . . f 4 e f f e 4 f 4 . . . . 
. . . . . . . . . . . . . . . . . f f f 4 4 f f f 4 . . . . 
. . . . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . . 
. . . . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 4 . . . . 
. . . . . . . . . . . . . . . . . . 4 4 4 e 4 4 4 4 . . . . 
. . . . . . . . . . . . . . . . . . . 4 4 4 4 4 4 . . . . . 
. . . . . . . . . . . . . . . . e e e e 4 4 4 4 e e e . . . 
. . . . . . . . . . . . . . . . e . e e e e e e e . e . . . 
. . . . . . . . . . . . . . . . e . e e e e e e e . e . . . 
. . . . . . . . . . . . . . . . 4 . e e b b b d d b b b b . 
. . . . . . . . . . . . . . . . 4 e e f b b b b d d b b b d 
. . . . . . . . . . . . . . . . 4 e e f d d d d d d d d d . 
. . . . . . . . . . . . . . . . . . c c c c c c c . . . . . 
. . . . . . . . . . . . . . . . . . c c c . c c c . . . . . 
. . . . . . . . . . . . . . . . . . 4 4 . . . 4 4 . . . . . 
. . . . . . . . . . . . . . . . . e e b . . e e b . . . . . 
. . . . . . . . . . . . . . . . . f f f . . f f f . . . . . 
`],
    75,
    false
    )
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    playIdleRightAnimation()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    playIdleRightAnimation()
})
// //////////////////////// break wall
// ////////////////////
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    if (controller.A.isPressed() || controller.B.isPressed()) {
        tiles.setTileAt(location, sprites.dungeon.floorLight5)
    }
})
// //////////////////// grabbing guitar
// ///////////////////
sprites.onOverlap(SpriteKind.Player, SpriteKind.guitar, function (sprite, otherSprite) {
    info.stopCountdown()
    otherSprite.destroy()
    seeward.say("close one...")
    pause(1000)
    seeward.say("")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playAttackLeftAnimation()
})
// ///////////////////////// setup game objects
// ///////////////////////
function initGame () {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100001020302020202030202030203130204050000000000000000000000000000111200000000000000000000200000000c060000000000002600000020000000110600202020000023000000000000000c0600200000000023232327000000000c060020000000000000000000000000111200000000000000000000000000000b0600000000200000000000000000000b0600000000202020202000000000000c1200260000000000000000000026000c060023000000000000000000002200110500280000232323232323000028000b120000000000000000000000000000110600000000000000000000000000000b09100a0a1007070a1007070a100a0714`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . 2 2 . . . 2 . . . . . . . 2 
2 . 2 . . . . 2 2 2 2 . . . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 
2 . 2 . . . . . . . . . . 2 . 2 
2 . 2 . . 2 2 2 2 2 2 . . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.floorLight2,sprites.dungeon.floorLight5,sprites.castle.tilePath5,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchUp,sprites.dungeon.greenSwitchDown,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.floorLight1,sprites.dungeon.floorDark0,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,sprites.dungeon.doorLockedSouth,sprites.dungeon.doorLockedWest,sprites.dungeon.doorLockedNorth,sprites.dungeon.doorLockedEast],
            TileScale.Sixteen
        ))
    scene.setBackgroundColor(6)
    seeward = sprites.create(img`
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. . . . 4 4 4 4 4 4 . . . 
. . e e e e 4 4 4 e e . . 
. e e e e e e e e e e e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 4 c c c c c c c . 4 4 
. . . c c c . c c c . . . 
. . . 4 4 . . . 4 4 . . . 
. . . b e e . . b e e . . 
. . . f f f . . f f f . . 
`, SpriteKind.Player)
    seeward.setPosition(25, 35)
    scene.cameraFollowSprite(seeward)
    playIdleRightAnimation()
    controller.moveSprite(seeward)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    playWalkRightAnimation()
})
function playWalkRightAnimation () {
    animation.runImageAnimation(
    seeward,
    [img`
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. . . . 4 4 4 4 4 4 . . . 
. e e e e e 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 4 
. 4 . c c c c c c c . . . 
. 4 4 c c c . c c 4 4 . . 
. . . 4 4 . . . . b e e . 
. . . b e e . . . f f f . 
. . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 4 c c c c c c c . 4 4 
. . . c c c . c c c . . . 
. . . . b e e . . 4 4 . . 
. . . . f f f . . b e e . 
. . . . . . . . . f f f . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 4 c c c c c c c . 4 . 
. . . c c c c c c c . 4 . 
. . . c c c . c c c . 4 4 
. . . 4 4 . . . 4 4 . . . 
. . . b e e . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 4 
. 4 4 c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . . b e e . b e e . . 
. . . . f f f . f f f . . 
`],
    75,
    true
    )
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    playIdleRightAnimation()
})
// ////////////////////////// adding guitar to scene
// ////////////////////////
function addGuitar () {
    guitar2 = sprites.create(img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . e e e e . . . . . . 
. . . . . . e 1 1 4 4 e . . . . . 
. . . . . e 1 1 4 4 e . . . . . . 
. . . . . e 4 4 4 e . . . . . . . 
. . . . . . e d e . . . . . . . . 
. . . . . . e e e . . . . . . . . 
. . . . . . e d e . . . . . . . . 
. . . . . . e e e . . . . . . . . 
. . . . e . e d e . . . . . . . . 
. . . e 4 e e e e . . e . . . . . 
. . e 4 4 e e d e . e 4 e . . . . 
. . e 4 4 4 e e e e 4 4 e . . . . 
. . e 4 4 d e e e 4 4 4 e . . . . 
. . . e 4 d b b b 4 4 e . . . . . 
. . . . e d d d d 4 e . . . . . . 
. . . e 4 d e e e 4 4 e . . . . . 
. . . e 4 d b b b 4 4 e . . . . . 
. . e 4 4 d b b b d 4 4 e . . . . 
. e 4 4 4 d e e e d d 4 4 e . . . 
. e 4 4 4 d d d d d d 4 4 e . . . 
. e 4 4 4 4 d d d 4 4 4 4 e . . . 
. . e 4 4 4 4 4 4 4 f 4 e . . . . 
. . . e 4 4 4 4 4 4 4 e . . . . . 
. . . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
`, SpriteKind.guitar)
    tiles.placeOnRandomTile(guitar2, myTiles.tile0)
}
function playIdleRightAnimation () {
    animation.runImageAnimation(
    seeward,
    [img`
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. . . . 4 4 4 4 4 4 . . . 
. e e e e e 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . 4 . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . 4 . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . 4 . 
. . . c c c . c c c . . . 
. . . . 4 4 . . b e e . . 
. . . e e b . . f f f . . 
. . . f f f . . . . . . . 
`,img`
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. . . . 4 4 4 4 4 4 . . . 
. e e e e e 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . 4 . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. . . . 4 4 4 4 4 4 . . . 
. e e e e e 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . 4 . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. . . . 4 4 4 4 4 4 . . . 
. e e e e e 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . 4 . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. . . c c c c c c c . 4 . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. f f f f f f 4 4 f f f f 
. 4 f 4 f 4 e f f e 4 f . 
. . e 4 f f f 4 4 f f f . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . 4 4 4 4 4 e 4 4 . . 
. . . . 4 4 4 e 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . . b e e . . 
. . . f f f . . f f f . . 
`],
    100,
    true
    )
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function playWalkLeftAnimation () {
    animation.runImageAnimation(
    seeward,
    [img`
. . . . f f e f e e . . . 
. . . f e e f e e f e e . 
. . f e f f f e f e f e e 
. f e e f e e f e e f e e 
. e e f f e 4 4 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. . f f f 4 4 f f f f f . 
. . f 4 e f f e 4 f 4 . . 
. . f f f 4 4 f f f 4 . . 
. . 4 4 4 e 4 4 4 4 4 . . 
. . 4 4 4 e 4 4 4 4 4 . . 
. . . 4 4 4 e 4 4 4 4 . . 
. . . . 4 4 4 4 4 4 . . . 
. e e e e 4 4 4 4 e e e . 
. e . e e e e e e e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c 4 4 . 
. 4 . c c c c c c c . . . 
4 4 . 4 4 c . c c c . . . 
. . e e b . . . 4 4 . . . 
. . f f f . . e e b . . . 
. . . . . . . f f f . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e e . 
. . f e f f f e f e f e e 
. f e e f e e f e e f e e 
. e e f f e 4 4 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. . f f f 4 4 f f f f f . 
. . f 4 e f f e 4 f 4 . . 
. . f f f 4 4 f f f 4 . . 
. . 4 4 4 e 4 4 4 4 4 . . 
. . 4 4 4 e 4 4 4 4 4 . . 
. . . 4 4 4 e 4 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e 4 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
4 4 . c c c c c c c 4 4 . 
. . . c c c . c c c . . . 
. . . 4 4 . . 4 4 . . . . 
. . e e b . e e b . . . . 
. . f f f . f f f . . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e e . 
. . f e f f f e f e f e e 
. f e e f e e f e e f e e 
. e e f f e 4 4 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. . f f f 4 4 f f f f f . 
. . f 4 e f f e 4 f 4 . . 
. . f f f 4 4 f f f 4 . . 
. . 4 4 4 e 4 4 4 4 4 . . 
. . 4 4 4 e 4 4 4 4 4 . . 
. . . 4 4 4 e 4 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e 4 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
4 4 . c c c c c c c . 4 . 
. . . c c c c c c c . 4 . 
. . . c c c . 4 4 c 4 4 . 
. . . 4 4 . e e b . . . . 
. . e e b . f f f . . . . 
. . f f f . . . . . . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e e . 
. . f e f f f e f e f e e 
. f e e f e e f e e f e e 
. e e f f e 4 4 4 e e f e 
. f f e e 4 4 4 4 4 e e e 
. e e 4 4 4 4 4 4 4 4 e . 
. . f f f 4 4 f f f f f . 
. . f 4 e f f e 4 f 4 . . 
. . f f f 4 4 f f f 4 . . 
. . 4 4 4 e 4 4 4 4 4 . . 
. . 4 4 4 e 4 4 4 4 4 . . 
. . . 4 4 4 e 4 4 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e 4 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c 4 4 . 
4 4 . c c c c c c c . . . 
. . . c c c . c c c . . . 
. . . . 4 4 . . 4 4 . . . 
. . . e e b . e e b . . . 
. . . f f f . f f f . . . 
`],
    75,
    true
    )
}
let guitar2: Sprite = null
let seeward: Sprite = null
// //////////////////// start the game //////////////
initGame()
