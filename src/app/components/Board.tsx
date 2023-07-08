"use client"
import React, { useEffect } from 'react'
import {DragDropContext, DropResult, Droppable} from 'react-beautiful-dnd'
import { useBoardStore } from '../../../store/BoardStore'
import Column from './Column'

const Board = () => {
    const [getBoard, board] = useBoardStore((store)=> [store.getBoard, store.board])

    useEffect(()=>{ 
        getBoard()
    },[getBoard])

    const handleOnDragEnd = (result :DropResult) =>{

    }

    console.log(board);
    
    
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='board' direction='horizontal' type='column'>
            {(provided) => (
                <div
                  className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl md:mx-auto mx-5'
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {Array.from(board.columns.entries()).map(([id, column], index)=>(
                    <Column 
                      key={id}
                      id={id}
                      todos={column.todos}
                      index={index}
                      />
                  ))}
                </div>
            )}
        </Droppable>
    </DragDropContext>
  )
}

export default Board