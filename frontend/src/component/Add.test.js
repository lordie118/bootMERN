import { render, screen, fireEvent } from '@testing-library/react';
import Add from './Add';
import toast from 'react-hot-toast';

jest.mock('react-hot-toast', () => ({
  success: jest.fn(),
  error: jest.fn(),
}));

describe('Add Component', () => {
  const mockOnClose = jest.fn();
  const mockOnTaskAdded = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Affiche correctement le formulaire', () => {
    render(<Add open={true} onClose={mockOnClose} />);
    
    // Vérifie que tous les champs sont présents
    expect(screen.getByLabelText(/Task Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Due Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Priority/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Task Description/i)).toBeInTheDocument();
  });

  test('Mise à jour des champs quand l’utilisateur tape', () => {
    render(<Add open={true} onClose={mockOnClose} />);

    const titleInput = screen.getByLabelText(/Task Title/i);
    const descriptionInput = screen.getByLabelText(/Task Description/i);

    // Simule la saisie utilisateur
    fireEvent.change(titleInput, { target: { value: 'Test Task' } });
    fireEvent.change(descriptionInput, { target: { value: 'This is a test description' } });

    // Vérifie que les valeurs sont mises à jour
    expect(titleInput.value).toBe('Test Task');
    expect(descriptionInput.value).toBe('This is a test description');
  });

  test('Appelle la fonction onTaskAdded après soumission', async () => {
    const mockAddTask = jest.fn(() => Promise.resolve({ data: {} }));
    jest.mock('../Service/LoginService', () => ({
      addTask: mockAddTask,
    }));

    render(<Add open={true} onClose={mockOnClose} onTaskAdded={mockOnTaskAdded} />);

    // Remplit les champs
    fireEvent.change(screen.getByLabelText(/Task Title/i), { target: { value: 'Test Task' } });
    fireEvent.change(screen.getByLabelText(/Due Date/i), { target: { value: '2024-12-25' } });
    fireEvent.change(screen.getByLabelText(/Priority/i), { target: { value: 'High' } });
    fireEvent.change(screen.getByLabelText(/Task Description/i), { target: { value: 'Test Description' } });

    // Simule un clic sur le bouton de soumission
    fireEvent.click(screen.getByText(/Add new Task/i));

    // Vérifie que la fonction onTaskAdded est appelée
    expect(mockOnTaskAdded).toHaveBeenCalledTimes(1);
    expect(toast.success).toHaveBeenCalledWith('Successfully Created!');
  });

  test('Affiche une erreur si le champ est manquant', async () => {
    render(<Add open={true} onClose={mockOnClose} />);

    // Ne pas remplir les champs
    fireEvent.click(screen.getByText(/Add new Task/i));

    // Vérifie qu'une erreur est affichée
    expect(toast.error).toHaveBeenCalled();
  });

  test('Ferme le modal quand on clique sur le bouton de fermeture', () => {
    render(<Add open={true} onClose={mockOnClose} />);

    // Simule un clic sur le bouton de fermeture
    fireEvent.click(screen.getByRole('button', { name: /Close modal/i }));

    // Vérifie que la fonction onClose est appelée
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
