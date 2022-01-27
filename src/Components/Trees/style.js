import styled from "styled-components";
import { colors } from "../../Utils/colors";
import {terrainSizeInPx,chunkSizeInPx} from '../../Utils/constants'

const treeSize = (80*chunkSizeInPx)/100

export const TreePlaceholder = styled.div`
    width: ${treeSize}px;
    height: ${treeSize}px;
    border-radius:50%;
    background-color: #048809;
`