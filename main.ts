scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedEast, function (sprite, location) {
    if (stage == 1) {
        tiles.setCurrentTilemap(tilemapList[1])
        tiles.placeOnTile(player1, tiles.getTileLocation(1, 8))
    }
    heldItem.setPosition(player1.x + 10, player1.y)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`openChest`)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
function PlayerHold (Sprite2: Sprite) {
    Sprite2.setPosition(player1.x + 10, player1.y)
    heldItem = Sprite2
    heldItem.setFlag(SpriteFlag.GhostThroughWalls, true)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    if (stage == 1) {
        tiles.setCurrentTilemap(tilemapList[0])
        tiles.placeOnTile(player1, tiles.getTileLocation(14, 8))
    }
    heldItem.setPosition(player1.x + 10, player1.y)
})
let Stopped = false
let heldItem: Sprite = null
let tilemapList: tiles.TileMapData[] = []
let player1: Sprite = null
let stage = 0
stage = 1
player1 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player1)
tilemapList = [tilemap`level12`, tilemap`level10`]
let Tilemap = tilemap`level2`
scene.cameraFollowSprite(player1)
tiles.setCurrentTilemap(tilemap`level12`)
let Sword = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . f 9 f f . . 
    . . . . . . . . . f 9 6 9 f . . 
    . . . . . . . . f 9 6 9 f . . . 
    . . . . . . . f 9 6 9 f . . . . 
    . . . . . . f 9 6 9 f . . . . . 
    . . . . . f 9 6 9 f . . . . . . 
    . f f . f 9 6 9 f . . . . . . . 
    . . f f 9 6 9 f . . . . . . . . 
    . . . f f 9 f . . . . . . . . . 
    . . f f f f . . . . . . . . . . 
    . f f f . f f . . . . . . . . . 
    . f f . . . f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setScore(0)
PlayerHold(Sword)
let PlayerState = "Walking"
let redBallItem = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . 4 4 4 5 5 4 4 4 . . . . 
    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
    . . . . 4 4 2 2 2 2 4 4 . . . . 
    . . . . . . 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdate(function () {
    if (player1.vx == 0) {
        controller.moveSprite(heldItem, 0, 0)
        heldItem.setPosition(player1.x + 10, player1.y)
        Stopped = true
    } else {
        if (Stopped) {
            heldItem.setPosition(player1.x + 10, player1.y)
        }
        controller.moveSprite(heldItem)
        Stopped = false
    }
})
