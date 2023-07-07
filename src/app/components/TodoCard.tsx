"use client"
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

function TodoCard({todo, index, id, innerRef, draggableProps, dragHandleProps}:Props) {

  return (
    <div
    ref={innerRef}
    {...draggableProps}
    {...dragHandleProps}
    className='bg-white rounded-md space-y-2 drop-shadow-md p-2'
    >
        <p className='ml-5 h-8 w-8'>{todo.title}</p>
    </div>
  )
}

export default TodoCard