"use client"
import React, { useEffect } from 'react'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import { useBoardStore } from '../../../store/BoardStore'

const Board = () => {
    const getBoard = useBoardStore((store)=> store.getBoard)
    useEffect(()=>{ 
        getBoard()
    },[getBoard])
  return (
    <h1>Hello</h1>
    // <DragDropContext>
    //     <Droppable droppableId='board' direction='horizontal' type='column'>
    //         {(provided) => (
    //             <div>A</div>
    //         )}
    //     </Droppable>
    // </DragDropContext>
  )
}

export default Board