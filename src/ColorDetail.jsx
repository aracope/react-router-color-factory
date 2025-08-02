import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './ColorDetail.css';
/**
 * Shows a full-page background of the selected color.
 * Redirects to /colors if color is not found.
 */
function ColorDetail({ colors }) {
  const { color } = useParams();
  const selected = colors.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === color.toLowerCase()
  );

  if (!selected) return <Navigate to="/colors" />;

  return (
    <div className="color-detail" style={{ backgroundColor: selected.color }}>

      <h1>This is {selected.name}</h1>
      <p>The background color is {selected.color}</p>
      <a href="/colors">Back to color list</a>
    </div>
  );
}

export default ColorDetail;
