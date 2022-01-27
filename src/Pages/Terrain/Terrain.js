import { useState } from "react";
import { MainTerrain, ChunkRow, ChunkPiece } from "./style";
import { terrainSizeInPx, chunkSizeInPx } from "../../Utils/constants";
import Tree from "../../Components/Trees/Tree";

function generateChunkIdData() {
  const numberOfChunkRowsAndPieces = terrainSizeInPx / chunkSizeInPx;
  let chunkMatrix = [];

  for (let i = 0; i < numberOfChunkRowsAndPieces; i++) {
    let chunkPieceArray = [];
    for (let j = 0; j < numberOfChunkRowsAndPieces; j++) {
      chunkPieceArray.push(`${i}i${j}j`);
    }
    chunkMatrix.push(chunkPieceArray);
  }

  return chunkMatrix;
}

function Terrain() {
  const chunkMatrix = generateChunkIdData();

  const onChunkPress = (event) => {
    console.log(event.target.id);
  };

  return (
    <MainTerrain>
      {chunkMatrix.map((chunkRow, index) => {
        return (
          <ChunkRow id={`${index}i`} key={index}>
            {chunkRow.map((chunkPieceId) => {
              return (
                <ChunkPiece
                  id={chunkPieceId}
                  key={chunkPieceId}
                  onClick={onChunkPress}
                >
                  <Tree/>
                </ChunkPiece>
              );
            })}
          </ChunkRow>
        );
      })}
    </MainTerrain>
  );
}

export default Terrain;
