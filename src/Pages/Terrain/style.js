import styled from "styled-components";
import { colors } from "../../Utils/colors";
import {terrainSizeInPx,chunkSizeInPx} from '../../Utils/constants'

const borderSize = 1
const actualSize = chunkSizeInPx-(borderSize*2)

export const MainTerrain = styled.section`
    width: ${terrainSizeInPx}px;
    /* height:  ${terrainSizeInPx}px; */
    height: fit-content;
    background-color: ${colors.terrainColorNeutral};
`

export const ChunkPiece = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${actualSize}px;
    width: ${actualSize}px;
    background-color: transparent;
    border: 1px solid ${colors.lightGrey};
`

export const ChunkRow = styled.div`
    display: flex;
    width:100%;
    height: ${chunkSizeInPx}px;
`