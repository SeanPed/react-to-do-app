import type { ReactNode } from 'react';
import React from 'react';
import classes from './Todo.module.css';

type ToDoProps = {
  isDone: boolean;
  title: string;
  description: string; // add "?" behind the name before the ":" to make prop optional
};

function ToDo({ isDone, title, description }: ToDoProps): JSX.Element {
  if (isDone) {
    return (
      <div className={classes.todoTrue}>
        <h2 className={classes.titleText}>{title}</h2>
        <p className={classes.textElement}>{description}</p>
      </div>
    );
  } else {
    return (
      // make it more efficent? - just add class to object
      <div className={classes.todoFalse}>
        <h2 className={classes.titleText}>{title}</h2>
        <p className={classes.textElement}>{description}</p>
      </div>
    );
  }
}

export default ToDo;
