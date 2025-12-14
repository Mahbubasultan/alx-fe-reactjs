import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Test new todo' } });
    fireEvent.click(button);

    expect(screen.getByText('Test new todo')).toBeInTheDocument();
  });

  test('can toggle todo completion', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');

    expect(todoText).not.toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId('delete-1');

    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
