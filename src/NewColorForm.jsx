import React, { useState } from 'react';
import './NewColorForm.css';

/**
 * Form for users to add a new color. Takes name and color value.
 */
function NewColorForm({ addColor }) {
    const [formData, setFormData] = useState({ name: '', color: '#000000' });

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (formData.name.trim() !== '') {
            addColor(formData);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="color-form">
            <div>
                <label htmlFor="name">Color Name: </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="color">Pick a Color: </label>
                <input
                    id="color"
                    name="color"
                    type="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add Color</button>
        </form>
    );
}

export default NewColorForm;
