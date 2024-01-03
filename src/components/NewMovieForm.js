import React from "react";
import "./NewMovieForm.css";

function NewMovieForm({ toggleShow, additionHandler, newData, setNewData }) {
  return (
    <div className="NewMovieForm">
      <form
        className="AdditionForm"
        onSubmit={(e) => {
          e.preventDefault();
          additionHandler(newData);
        }}
      >
        <fieldset className="add">
          <legend>Add your fav Movie</legend>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            required
            placeholder="Movie none"
            onChange={(e) => setNewData({ ...newData, title: e.target.value })}
          />
          <label htmlFor="imgURL"> URL:</label>
          <input
            type="text"
            id="imgURL"
            required
            placeholder="link"
            onChange={(e) => setNewData({ ...newData, imgURL: e.target.value })}
          />
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            required
            placeholder="rating "
            min="1"
            max="10"
            step="0.1"
            onChange={(e) => setNewData({ ...newData, rating: e.target.value })}
          />
          
          
          <label htmlFor="description">Description please:</label>
          <textarea
            rows={5}
            type="text"
            id="description"
            placeholder="write some description please"
            value={newData.description}
            onChange={(e) =>
              setNewData({
                ...newData,
                description: e.target.value,
              })
            }
          required/>
          <div className="addBtn">
            <button type="Submit">Adding</button>
          </div>
        </fieldset>
      </form>
      <button onClick={toggleShow} id="exit">
        X
      </button>
    </div>
  );
}

export default NewMovieForm;
