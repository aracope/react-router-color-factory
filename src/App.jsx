import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import NewColorForm from './NewColorForm';
import './App.css';

function normalizeColorName(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

function App() {
  const initialColors = (() => {
    try {
      return JSON.parse(localStorage.getItem('colors')) || [];
    } catch (e) {
      console.error('Failed to parse colors from localStorage:', e);
      return [];
    }
  })();

  const [colors, setColors] = useState(initialColors);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      localStorage.setItem('colors', JSON.stringify(colors));
    } catch (e) {
      console.error('Failed to save colors to localStorage:', e);
      setError('Failed to save colors.');
    }
  }, [colors]);

  function addColor(newColor) {
    try {
      const normalizedName = normalizeColorName(newColor.name);
      const isDuplicate = colors.some(
        c => normalizeColorName(c.name) === normalizedName
      );
      if (!isDuplicate) {
        setColors([newColor, ...colors]);
        setError(null);
        navigate('/colors');
      } else {
        setError('Color name already exists.');
      }
    } catch (e) {
      console.error('Error adding color:', e);
      setError('Something went wrong while adding the color.');
    }
  }

  return (
    <>
      {error && <div className="error-banner">{error}</div>}
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </>
  );
}

export default App;