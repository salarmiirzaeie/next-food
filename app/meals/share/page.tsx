import React from "react";

const page = () => {
  return (
    <main className="form-container">
      <form>
        <h2>Upload Your Image</h2>
        <div className="input-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className="input-group">
          <label htmlFor="image">Choose an Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default page;
