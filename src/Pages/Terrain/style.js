import styled from "styled-components";
import { colors } from "../../Utils/colors";
import {terrainSizeInPx,chunkSizeInPx} from '../../Utils/constants'

const borderSize = 1
const actualSize = chunkSizeInPx-(borderSize*2)

export const MainTerrain = styled.section`
    width: ${terrainSizeInPx}px;
    height:  ${terrainSizeInPx}px;
    background-color: ${colors.terrainColorNeutral};
`

export const ChunkPiece = styled.div`
    height: ${chunkSizeInPx}px;
    width: ${chunkSizeInPx}px;
    background-color: transparent;
    border: 0.5px solid #000;
`

export const ChunkRow = styled.div`
    display: flex;
    width:100%;
    height: ${chunkSizeInPx}px;
`