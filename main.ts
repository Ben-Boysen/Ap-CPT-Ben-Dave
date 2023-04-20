namespace SpriteKind {
    export const Item = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.A.isPressed()) {
        greenBallItem = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Item)
        PlayerHold(greenBallItem)
        tiles.setTileAt(location, assets.tile`myTile6`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (controller.A.isPressed()) {
        redBallItem = sprites.create(img`
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
        PlayerHold(redBallItem)
        tiles.setTileAt(location, assets.tile`myTile4`)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedEast, function (sprite, location) {
    if (stage == 1 && info.score() >= 1) {
        info.changeScoreBy(-1)
        tiles.setCurrentTilemap(tilemapList[1])
        tiles.placeOnTile(player1, tiles.getTileLocation(1, 8))
    }
    if (stage == 2 && info.score() >= 1) {
        info.changeScoreBy(-1)
        tiles.setCurrentTilemap(tilemapList[2])
        tiles.placeOnTile(player1, tiles.getTileLocation(1, 8))
    }
    if (stage == 3 && info.score() >= 1) {
        info.changeScoreBy(-1)
        tiles.setCurrentTilemap(tilemapList[3])
        tiles.placeOnTile(player1, tiles.getTileLocation(1, 8))
        Make_Enemy(8)
    }
    heldItem.setPosition(player1.x + 10, player1.y)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`redBallOnPortal`, function (sprite, location) {
    if (heldItem != redBallItem && controller.A.isPressed()) {
        redBallItem = sprites.create(img`
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
        tiles.setTileAt(location, sprites.dungeon.collectibleInsignia)
        PlayerHold(redBallItem)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
        if (heldItem == redBallItem) {
            tiles.setTileAt(player1.tilemapLocation(), assets.tile`redBallOnPortal`)
            PlayerHold(None)
            sprites.destroy(redBallItem)
        }
        if (heldItem == greenBallItem) {
            tiles.setTileAt(player1.tilemapLocation(), assets.tile`myTile5`)
            PlayerHold(None)
            sprites.destroy(greenBallItem)
        }
    } else {
        PlayerDrop(heldItem)
    }
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (heldItem == Sword) {
        for (let value of ListOfEnemies) {
            if (player1.overlapsWith(value) || Sword.overlapsWith(value)) {
                statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, value).value += -50
            }
        }
        animation.runImageAnimation(
        Sword,
        [img`
            ................
            ................
            ...........fff..
            ..........f9ff..
            .........f969f..
            ........f969f...
            .......f969f....
            ......f969f.....
            .....f969f......
            .ff.f969f.......
            ..ff969f........
            ...ff9f.........
            ..ffff..........
            .fff.ff.........
            .ff...f.........
            ................
            ................
            ................
            ................
            ................
            `,img`
            ................
            ................
            ..............ff
            ............ff9f
            ...........f9969
            ..........f9669f
            .........f9699f.
            ........f969ff..
            ......ff969f....
            .fff.f9969f.....
            ...ff9669f......
            ....ff99f.......
            ...fffff........
            .ffff.fff.......
            .fff....f.......
            ................
            ................
            ................
            ................
            ................
            `,img`
            ................
            ................
            ................
            ................
            ................
            .............fff
            ............f9ff
            ...........f969f
            ........f9969f..
            .......f9669f...
            .fff.f969ff.....
            ...ff969f.......
            ....ff9f........
            .ffff.ff........
            .fff...f........
            ................
            ................
            ................
            ................
            ................
            `,img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ...........fff..
            ..........f9ff..
            .......ff969f...
            .f....f9969f....
            ....f9699f......
            ff.f969ff.......
            ..ff9f..........
            .ffff...........
            ................
            ................
            ................
            ................
            ................
            `,img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            .....f..........
            .....ffffffffff.
            ..ffff999999999f
            .fffff6666666666
            ..ffff999999999f
            .....ffffffffff.
            .....f..........
            ................
            ................
            ................
            ................
            ................
            `,img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ...ffff.........
            ....ff9f........
            .fff.f969ff.....
            ......f9699f....
            ........f9969f..
            .........ff969f.
            ............f9ff
            .............fff
            ................
            ................
            ................
            `,img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            .ffff...f.......
            .fffff.ff.......
            .....ff9f.......
            ....ff969f......
            .ffff.f969ff....
            ........f9669f..
            .........f9969f.
            ............f969
            .............f9f
            `,img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            .fff....f.......
            .ffff.fff.......
            ...fffff........
            ....ff99f.......
            ...ff9669f......
            .fff.f9969f.....
            ......ff969f....
            ........f969ff..
            .........f9699f.
            ..........f9669f
            `,img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ..ff...f........
            ..fff.ff........
            ...ffff.........
            ....ff9f........
            ...ff969f.......
            ..ff.f969f......
            ......f969f.....
            .......f969f....
            ........f969f...
            .........f969f..
            `,img`
            ................
            ................
            ...........fff..
            ..........f9ff..
            .........f969f..
            ........f969f...
            .......f969f....
            ......f969f.....
            .....f969f......
            .ff.f969f.......
            ..ff969f........
            ...ff9f.........
            ..ffff..........
            .fff.ff.........
            .ff...f.........
            ................
            ................
            ................
            ................
            ................
            `],
        25,
        false
        )
    }
})
function Make_Enemy (num: number) {
    for (let index = 0; index < num; index++) {
        Ghost = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Ghost, sprites.dungeon.darkGroundCenter)
        GhostHealth = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        GhostHealth.value = 100
        GhostHealth.attachToSprite(Ghost, -20, 0)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    if (stage == 1) {
        tiles.setCurrentTilemap(tilemapList[1])
        tiles.placeOnTile(player1, tiles.getTileLocation(1, 8))
    }
    heldItem.setPosition(player1.x + 10, player1.y)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (stage == 2) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(12, 11), assets.tile`myTile5`) && (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 5), assets.tile`myTile5`) && (tiles.tileAtLocationEquals(tiles.getTileLocation(6, 5), assets.tile`myTile5`) && tiles.tileAtLocationEquals(tiles.getTileLocation(3, 11), assets.tile`myTile5`)))) {
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                stage = 3
                info.setScore(1)
                tiles.setWallAt(tiles.getTileLocation(15, 8), false)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (stage == 1) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(8, 7), assets.tile`redBallOnPortal`) && (tiles.tileAtLocationEquals(tiles.getTileLocation(7, 8), assets.tile`redBallOnPortal`) && (tiles.tileAtLocationEquals(tiles.getTileLocation(7, 7), assets.tile`myTile5`) && tiles.tileAtLocationEquals(tiles.getTileLocation(8, 8), assets.tile`myTile5`)))) {
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                stage = 2
                info.setScore(1)
                tiles.setWallAt(tiles.getTileLocation(15, 8), false)
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (heldItem != greenBallItem && controller.A.isPressed()) {
        greenBallItem = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Item)
        PlayerHold(greenBallItem)
        tiles.setTileAt(location, sprites.dungeon.collectibleInsignia)
    }
})
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
function Enemy_Following (Enemy: Sprite) {
    Enemy.follow(player1, 50)
    if (Enemy.overlapsWith(player1)) {
        Enemy.follow(player1, 0)
    }
}
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
let GhostHealth: StatusBarSprite = null
let Ghost: Sprite = null
let ListOfEnemies: Sprite[] = []
let greenBallItem: Sprite = null
let redBallItem: Sprite = null
let heldItem: Sprite = null
let None: Sprite = null
let Sword: Sprite = null
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
tilemapList = [
tilemap`firstlevel`,
tilemap`level10`,
tilemap`level0`,
tilemap`level12`
]
let Tilemap = tilemap`level2`
scene.cameraFollowSprite(player1)
tiles.setCurrentTilemap(tilemap`firstlevel`)
Sword = sprites.create(img`
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
redBallItem = sprites.create(img`
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
greenBallItem = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Item)
redBallItem.setFlag(SpriteFlag.Ghost, true)
redBallItem.setFlag(SpriteFlag.Invisible, true)
greenBallItem.setFlag(SpriteFlag.Ghost, true)
greenBallItem.setFlag(SpriteFlag.Invisible, true)
info.setScore(0)
PlayerHold(Sword)
Make_Enemy(3)
let playerHealth = statusbars.create(20, 4, StatusBarKind.Health)
playerHealth.setOffsetPadding(0, -22)
playerHealth.attachToSprite(player1)
playerHealth.value = 100
game.onUpdate(function () {
    controller.moveSprite(heldItem, HeldItemControllerX(), HeldItemControllerY())
    ListOfItems = sprites.allOfKind(SpriteKind.Item)
    for (let value2 of ListOfItems) {
        if (player1.overlapsWith(value2) && value2 != heldItem) {
            if (!(LastAButton) && controller.A.isPressed()) {
                PlayerHold(value2)
            }
        }
    }
    LastAButton = controller.A.isPressed()
    ListOfEnemies = sprites.allOfKind(SpriteKind.Enemy)
    for (let value22 of ListOfEnemies) {
        if (statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, value22).value <= 0) {
            sprites.destroy(value22)
        }
        Enemy_Following(value22)
    }
})
game.onUpdateInterval(1000, function () {
    for (let value3 of ListOfEnemies) {
        if (value3.overlapsWith(player1)) {
            playerHealth.value += -5
        }
    }
    if (playerHealth.value <= 0) {
        game.gameOver(false)
    }
})
