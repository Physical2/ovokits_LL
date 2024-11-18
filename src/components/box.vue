.translator {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  input, select, button {
    margin: 10px 0;
    padding: 8px;
    font-size: 1rem;
  }
  
  .result {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
  }



  .translator {
    font-family: Arial, sans-serif;
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
    text-align: center;
  }
  
  .header {
    margin-bottom: 20px;
  }
  
  .header h1 {
    color: #4285f4;
    font-size: 2rem;
    margin: 0;
  }
  
  .translation-options {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    gap: 10px;
  }
  
  .translation-options button {
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background-color: #f9f9f9;
    color: #333;
  }
  
  .translation-options button.active {
    background-color: #4285f4;
    color: #fff;
  }
  
  .translation-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }
  
  .input-section, .output-section {
    flex: 1;
  }
  
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
  }
  
  textarea[readonly] {
    background-color: #f5f5f5;
  }
  
  .controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  select, button {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button {
    background-color: #4285f4;
    color: #fff;
  }
  
  button:hover {
    background-color: #357ae8;
  }
  