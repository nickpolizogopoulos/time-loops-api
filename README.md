# Time Loops API

Power your applications with real, accurate and up-to-date data with **Time Loops API**. A free, fast, reliable, and developer-friendly REST API that ensures seamless integration, delivering the information you need to build smarter, more efficient and scalable solutions effortlessly!

[Jump in!](https://timeloopsapi.com/)

## What You Get
  - [**100 Music Albums**](https://timeloopsapi.com/albums): Timeless albums from renowned artists and bands.
  - [**250 Quotes**](https://timeloopsapi.com/quotes): Iconic quotes from legendary figures.
  - [**10 Skyscrapers**](https://timeloopsapi.com/skyscrapers): Historic skyscrapers that have shaped city skylines.
  - [**50 Software Tools**:](https://timeloopsapi.com/software-tools): Revolutionary software tools that have transformed technology.

## Getting Started

To begin using the Time Loops API:

1. **Explore the Documentation**: Visit the [official documentation](https://timeloopsapi.com/docs) for detailed guides and endpoint information.
2. **Try Endpoints**: Test the API directly in your browser. For example:
   
   - Retrieve details of a specific album:
     ```
     https://timeloopsapi.com/albums/6
     ```
   - Retrieve a quote:
     ```
     https://timeloopsapi.com/quotes/7
     ```
   - Retrieve details of a specific software tool:
     ```
     https://timeloopsapi.com/software-tools/8
     ```

## Full CRUD Support

The Time Loops API provides complete **CRUD** (Create, Read, Update, Delete) functionality, allowing seamless data management.  

- **Create** → Add new records to the database.  
- **Read** → Retrieve existing data via API endpoints.  
- **Update** → Modify existing records with updated details.  
- **Delete** → Remove records when no longer needed.  

This ensures flexibility and control over the data, making it easy to integrate into any application.  
<sub>***-Note***: The POST, PUT, PATCH and DELETE operations simulate real-world behavior but do not persist or modify data.</sub>

## Examples

Try any of the snippers in your IDE.

### GET Request
```
fetch('https://timeloopsapi.com/albums')
  .then(response => response.json())
  .then(data => console.log('Albums:', data))
  .catch(error => console.error('Error:', error));
```

### POST Request
```
const newAlbum = {
  id: 1,  
  title: 'Experience',  
  artist: 'The Prodigy',  
  description: 'Experience is the debut studio album by the Prodigy.',  
  releaseDate: {  
    day: 28,  
    month: 'September',  
    year: 1992,  
  },  
  genre: 'Electronic',  
  label: [
    {
      name: 'XL Recordings',
      link: 'https://en.wikipedia.org/wiki/XL_Recordings'
    }
  ],  
  wiki: 'https://en.wikipedia.org/wiki/Experience_(The_Prodigy_album)',  
};

fetch('https://timeloopsapi.com/albums', {  
  method: 'POST',  
  body: JSON.stringify(newAlbum)  
})  
  .then(response => response.json())  
  .then(data => console.log('New album added:', data))  
  .catch(error => console.error('Error:', error));
```

### DELETE Request
```
fetch('https://timeloopsapi.com/software-tools/7', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log('Software Tool deleted:', data))
  .catch(error => console.error('Error:', error));
```

### PUT Request
```
const updatedQuote =  {
  quote: "It is not that I'm so smart, it's just that I stay with problems longer",
  author: "Albert Einstein",
  category: "wisdom"
};
fetch('https://timeloopsapi.com/quotes/1', {
  method: 'PUT',
  body: JSON.stringify(updatedQuote)
})
  .then(response => response.json())
  .then(data => console.log('Updated Quote:', data))
  .catch(error => console.error('Error:', error));
```

### PATCH Request
```
const patchedSkyscraper =  {
  subtitle: "One WTC"
};
fetch('https://timeloopsapi.com/skyscrapers/4', {
  method: 'PATCH',
  body: JSON.stringify(patchedSkyscraper)
})
  .then(response => response.json())
  .then(data => console.log('Updated Skyscraper:', data))
  .catch(error => console.error('Error:', error));