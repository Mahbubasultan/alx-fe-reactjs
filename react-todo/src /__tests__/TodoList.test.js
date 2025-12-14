import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Build todo app')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New todo item' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New todo item')).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');
    const initialTodos = screen.getAllByTestId(/^todo-item-/);

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);

    const todosAfter = screen.getAllByTestId(/^todo-item-/);
    expect(todosAfter).toHaveLength(initialTodos.length);
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todoText);
    
    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    fireEvent.click(todoText);
    
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoToDelete = screen.getByText('Learn React');
    const deleteButton = screen.getByTestId('delete-button-1');

    expect(todoToDelete).toBeInTheDocument();
    
    fireEvent.click(deleteButton);
    
    expect(todoToDelete).not.toBeInTheDocument();
  });

  test('adds todo using form submission', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const form = input.closest('form');

    fireEvent.change(input, { target: { value: 'Form submission todo' } });
    fireEvent.submit(form);

    expect(screen.getByText('Form submission todo')).toBeInTheDocument();
    expect(input.value).toBe('');
  });
});