import React from 'react';
import { Link } from 'react-router-dom';
import './ColorList.css';

/**
 * Displays a list of all color names as links to their detail pages.
 * Most recently added color appears first.
 */
function ColorList({ colors }) {
  return (
    <div className="color-list">
  <h1>Available Colors</h1>
  <ul>
    {colors.map(color => (
      <li key={color.name}>
        <Link to={`/colors/${color.name.toLowerCase().replace(/\s+/g, '-')}`}>{color.name}</Link>
      </li>
    ))}
  </ul>
  <Link to="/colors/new" className="add-link">Add a new color</Link>
</div>
  );
}

export default ColorList;