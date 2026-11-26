class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

   

    numIslands(grid) {
        let numberofIsland = 0
        for(let i = 0; i < grid.length; i += 1){
            for(let j = 0; j < grid[0].length; j += 1){
                if(grid[i][j] === "1"){
                    traverseIsland(i,j);
                    numberofIsland += 1
                }
            }
        }

    function traverseIsland(x,y) {
        if(x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) return;
        if(grid[x][y] !== "1" ) return;

        grid[x][y] = "0";

        traverseIsland(x + 1,y) //only add 1 at a time.
        traverseIsland(x - 1,y) //only add 1 at a time.
        traverseIsland(x, y + 1) //only add 1 at a time.
        traverseIsland(x, y - 1) //only add 1 at a time.


    }
    return numberofIsland;
    }
    
}
