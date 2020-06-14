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
function playUpAnimation () {
    animation.runImageAnimation(
    seeward,
    [img`
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e e f e f e 
. f f e e e e f f f e e e 
. e e e e f f f e e e e . 
. f f e e e e e e e e f f 
. 4 f f f e e e e f e f . 
. . e e f e e f f e e f . 
. . . e f f e f e e e . . 
. . . e e f e e e e 4 . . 
. . . . e e e e e 4 4 . . 
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
f e e f f e e e e f e f e 
. f f e e e e f f f e e e 
. e e e e f f f e e e e . 
. f f e e e e e e e e f f 
. 4 f f f e e e e f e f . 
. . e e f e e f f e e f . 
. . . e f f e f e e e . . 
. . . e e f e e e e 4 . . 
. . . . e e e e e 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . c c c . c 4 4 . . . 
. . . 4 4 . . . e e . . . 
. . . e e . . . f f . . . 
. . . f f . . . . . . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e e f e f e 
. f f e e e e f f f e e e 
. e e e e f f f e e e e . 
. f f e e e e e e e e f f 
. 4 f f f e e e e f e f . 
. . e e f e e f f e e f . 
. . . e f f e f e e e . . 
. . . e e f e e e e 4 . . 
. . . . e e e e e 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . 4 4 c . c c c . . . 
. . . e e . . . 4 4 . . . 
. . . f f . . . e e . . . 
. . . . . . . . f f . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e e f e f e 
. f f e e e e f f f e e e 
. e e e e f f f e e e e . 
. f f e e e e e e e e f f 
. 4 f f f e e e e f e f . 
. . e e f e e f f e e f . 
. . . e f f e f e e e . . 
. . . e e f e e e e 4 . . 
. . . . e e e e e 4 4 . . 
. e e e 4 4 4 4 4 4 e e . 
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
. 4 . c c c c c c c . . . 
. . . 4 4 c . c c c . . . 
. . . e e . . . 4 4 . . . 
. . . f f . . . e e . . . 
. . . . . . . . f f . . . 
`,img`
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e e f e f e 
. f f e e e e f f f e e e 
. e e e e f f f e e e e . 
. f f e e e e e e e e f f 
. 4 f f f e e e e f e f . 
. . e e f e e f f e e f . 
. . . e f f e f e e e . . 
. . . e e f e e e e 4 . . 
. . . . e e e e e 4 4 . . 
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
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. f f e f f f e f e f e . 
e f e e f e e f e e f e . 
f e e f f e e e e f e f e 
. f f e e e e f f f e e e 
. e e e e f f f e e e e . 
. f f e e e e e e e e f f 
. 4 f f f e e e e f e f . 
. . e e f e e f f e e f . 
. . . e f f e f e e e . . 
. . . e e f e e e e 4 . . 
. . . . e e e e e 4 4 . . 
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
`],
    100,
    true
    )
}
function initGame () {
    guitar = sprites.create(img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . e e e e e . . . . . 
. . . . . . e 1 1 4 4 1 e . . . . 
. . . . . e 1 1 4 4 1 e . . . . . 
. . . . . e 4 4 4 1 e . . . . . . 
. . . . . . e d e . . . . . . . . 
. . . . . . e e e . . . . . . . . 
. . . . . . e d e . . . . . . . . 
. . . . . . e e e . . . . . . . . 
. . . . e . e d e . . . . . . . . 
. . . e 4 e e e e . . e . . . . . 
. . e 4 4 e e d e . e 4 e . . . . 
. . e 4 4 4 e e e e 4 4 e . . . . 
. . e 4 4 4 e d e 4 4 4 e . . . . 
. . e 4 4 d e e e 4 4 4 e . . . . 
. . e 4 4 d e e e 4 4 4 e . . . . 
. . . e 4 d b b b 4 4 e . . . . . 
. . . . e d d d d 4 e . . . . . . 
. . . e 4 d e e e 4 4 e . . . . . 
. . . e 4 d b b b 4 4 e . . . . . 
. . e 4 4 d b b b d 4 4 e . . . . 
. e 4 4 4 d e e e d 4 4 4 e . . . 
. e 4 4 d d b b b d d 4 4 e . . . 
. e 4 4 4 d e e e d d 4 4 e . . . 
. e 4 4 4 d d d d d d 4 4 e . . . 
. e 4 4 4 4 d d d 4 4 4 4 e . . . 
. . e 4 4 4 4 4 4 4 f 4 e . . . . 
. . . e 4 4 4 4 4 4 4 e . . . . . 
. . . . e e e e e e e e . . . . . 
`, SpriteKind.Player)
    guitar.setPosition(30, 30)
    scene.setBackgroundColor(9)
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
    playIdleRightAnimation()
    controller.moveSprite(seeward)
}
function playWalkRightAnimation2 () {
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
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    playIdleRightAnimation()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    playIdleRightAnimation()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    playWalkRightAnimation2()
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    playIdleRightAnimation()
})
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
`],
    100,
    true
    )
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    playUpAnimation()
})
function playWalkLeftAnimation () {
    animation.runImageAnimation(
    seeward,
    [img`
. . . . f f e f e e . . . 
. . . f e e f e e f e . . 
. . f e f f f e f e f e . 
. f e e f e e f e e f e . 
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
. e e e e e 4 4 4 e e e . 
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
. . e f e e f e e f e . . 
. . f e f f f e f e f e . 
. f e e f e e f e e f e . 
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
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
. 4 . c c c c c c c . 4 . 
4 4 . c c c c c c c 4 4 . 
. . . c c c . c c c . . . 
. . 4 4 . . e e b . . . . 
. e e b . . f f f . . . . 
. f f f . . . . . . . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. . f e f f f e f e f e . 
. f e e f e e f e e f e . 
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
. e . e e e 4 4 4 e . e . 
. e . e e e e e e e . e . 
. 4 . e e e e e e e . 4 . 
. 4 . e e e e e e e . 4 . 
4 4 . c c c c c c c . 4 . 
. . . c c c c c c c . 4 . 
. . . c c c . c c c 4 4 . 
. . . 4 4 . . . 4 4 . . . 
. . e e b . . e e b . . . 
. . f f f . . f f f . . . 
`,img`
. . . . . . . . . . . . . 
. . . e f f e f e e . . . 
. . e f e e f e e f e . . 
. . f e f f f e f e f e . 
. f e e f e e f e e f e . 
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
. e . e e e 4 4 4 e . e . 
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
let guitar: Sprite = null
let seeward: Sprite = null
initGame()
