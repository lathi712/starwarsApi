# Star Wars API

A Node.js application that provides RESTful API endpoints to access Star Wars character and planet data.

## Features

- **Character Data**: Access detailed information about Star Wars characters
- **Planet Data**: Retrieve data about planets in the Star Wars universe
- **Sorting Options**: Sort results by various attributes (height, mass, name)
- **Search Functionality**: Find specific characters by name

## Installation

Follow these steps to get the application up and running:

```bash
# 1. Clone the repository
git clone https://github.com/lathi712/starwarsApi.git

# 2. Change to the project directory
cd starwarsApi

# 3. Initialize npm (if needed)
npm init

# 4. Install dependencies
npm install

# 5. Start the server
node server.js
```

## API Endpoints

### Characters

- **Get all characters**: 
  ```
  GET http://localhost:3000/api/people/
  ```

- **Get character by name**: 
  ```
  GET http://localhost:3000/api/people/Luke Skywalker
  ```

- **Get sorted characters**: 
  ```
  GET http://localhost:3000/api/people/?sort=height
  GET http://localhost:3000/api/people/?sort=mass
  GET http://localhost:3000/api/people/?sort=name
  ```

### Planets

- **Get all planets**: 
  ```
  GET http://localhost:3000/api/planets/
  ```

## Technologies Used

- Node.js
- Express.js
- Star Wars API data

## Dependencies

- Express
- Axios (for API requests)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

---

Created by Lathesh Karkera S