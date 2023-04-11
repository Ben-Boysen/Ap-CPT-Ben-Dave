namespace SpriteKind {
    export const Item = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedEast, function (sprite, location) {
    if (stage == 1 && info.score() >= 1) {
        info.changeScoreBy(-1)
        tiles.setCurrentTilemap(tilemapList[1])
        tiles.placeOnTile(player1, tiles.getTileLocation(1, 8))
    }
    heldItem.setPosition(player1.x + 10, player1.y)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerDrop(heldItem)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTileAt(location, assets.tile`openChest`)
        info.changeScoreBy(1)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    }
})
function PlayerHold (Sprite2: Sprite) {
    PlayerDrop(heldItem)
    Sprite2.setPosition(player1.x + 10, player1.y)
    heldItem = Sprite2
    heldItem.setFlag(SpriteFlag.GhostThroughWalls, true)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    if (stage == 1) {
        tiles.setCurrentTilemap(tilemapList[1])
        tiles.placeOnTile(player1, tiles.getTileLocation(1, 8))
    }
    heldItem.setPosition(player1.x + 10, player1.y)
})
function PlayerDrop (Sprite2: Sprite) {
    heldItem = None
    controller.moveSprite(Sprite2, 0, 0)
    Sprite2.setFlag(SpriteFlag.GhostThroughWalls, false)
}
function ItemHold () {
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
}
function HeldItemControllerY () {
    if (player1.vy == 0) {
        heldItem.setPosition(player1.x + 10, player1.y)
        StoppedY = true
        return 0
    } else {
        if (StoppedY) {
            heldItem.setPosition(player1.x + 10, player1.y)
        }
        StoppedY = false
        return 100
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    if (stage == 1) {
        tiles.setCurrentTilemap(tilemapList[0])
        tiles.placeOnTile(player1, tiles.getTileLocation(14, 8))
        tiles.setTileAt(tiles.getTileLocation(15, 8), sprites.dungeon.doorOpenEast)
    }
    heldItem.setPosition(player1.x + 10, player1.y)
})
function HeldItemControllerX () {
    if (player1.vx == 0) {
        heldItem.setPosition(player1.x + 10, player1.y)
        Stopped = true
        return 0
    } else {
        if (Stopped) {
            heldItem.setPosition(player1.x + 10, player1.y)
        }
        Stopped = false
        return 100
    }
}
let LastAButton = false
let ListOfItems: Sprite[] = []
let StoppedY = false
let Stopped = false
let heldItem: Sprite = null
let None: Sprite = null
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
    `, SpriteKind.Item)
None = sprites.create(img`
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
    `, SpriteKind.Item)
heldItem = None
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
    `, SpriteKind.Item)
info.setScore(0)
PlayerHold(Sword)
let PlayerState = "Walking"
game.onUpdate(function () {
    controller.moveSprite(heldItem, HeldItemControllerX(), HeldItemControllerY())
    ListOfItems = sprites.allOfKind(SpriteKind.Item)
    for (let value of ListOfItems) {
        if (player1.overlapsWith(value) && value != heldItem) {
            if (!(LastAButton) && controller.A.isPressed()) {
                PlayerHold(value)
            }
        }
    }
    LastAButton = controller.A.isPressed()
})
