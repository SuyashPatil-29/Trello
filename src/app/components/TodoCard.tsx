"use client"
import { XCircleIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn,
    innerRef: (element : HTMLElement | null) => void;
    draggableProps : DraggableProvidedDraggableProps;
    dragHandleProps : DraggableProvidedDragHandleProps | undefined | null
}

function TodoCard({ todo, index, id, innerRef, draggableProps, dragHandleProps }: Props) {
  const deleteTask = ()=>{
    console.log("Task deleted");
    
  }

  return (
      <div
          className='rounded-md space-y-2 drop-shadow-md bg-white'
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
      >
          <div className='flex justify-between item-center p-5'>
              <p>{todo.title}</p>
              <button onClick={() => { deleteTask() }} className='text-red-500 hover:text-red-600'>
                  <XCircleIcon className='ml-5 h-8 w-8' />
              </button>
          </div>
      </div>
  )
}

export default TodoCard