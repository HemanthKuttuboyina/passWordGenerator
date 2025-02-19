
# Password Generator

This is a simple React-based password generator. It allows users to generate a random password with customizable length, numeric characters, and special characters. The generated password can also be copied to the clipboard with a single click.

## Features
- Generate a random password.
- Adjust password length using a range slider (6 to 20 characters).
- Option to include numbers.
- Option to include special characters.
- Copy generated password to clipboard.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HemanthKuttuboyina/passWordGenerator
   ```
2. **Navigate to the project directory:**
   ```bash
   cd password-generator
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm start
   ```

## Usage

1. Adjust the password length using the range slider.
2. Check the boxes to include numbers and/or special characters.
3. Copy the generated password using the **Copy** button.

## Project Structure

- `App.js`: Main component handling password generation logic.
- `App.css`: Styles for the UI.

## Technologies Used

- React (`useState`, `useEffect`, `useCallback`, `useRef`)
- JavaScript
- HTML & CSS

## Known Issues and Improvements

### Known Issues
- The `clipboard` function's dependency setup is a bit unusual and could be refactored for clarity.
- The password generation loop might not generate the exact number of characters as specified.

### Future Enhancements
- Add a toggle button to show/hide the generated password.
- Improve UI design and responsiveness.
- Include a strength indicator for generated passwords.
