// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`190014000101010101010101010101010101010101010101010101010101050505050000000000000000000000000000000000000001010504040500000000000000000000000000000000000000010105030305000000000000000000000000000000000000000101050303050000000000000000000000000000000000000001010502050500000000000000000000000000000000000000010100000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000001010000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101`, img`
2222222222222222222222222
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2.......................2
2222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorLight2,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
