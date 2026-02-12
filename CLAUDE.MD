# Project Overview

This is a Japanese company information search application that allows users to search for company names and retrieve their securities codes, corporate numbers (法人番号), and EDINET codes.

## Purpose

A practice repository for Claude Code Desktop that provides a simple web-based tool to look up Japanese company information and access relevant external resources:
- **Securities Code**: Links to Yahoo! Finance for stock price information
- **Corporate Number**: Links to National Tax Agency's corporate number database
- **EDINET Code**: Links to Financial Services Agency's EDINET for securities reports

## Project Structure

```
claudecode-practice/
├── index.html          # Main HTML file with search interface
├── css/
│   └── style.css      # Styling for the application
├── js/
│   ├── data.js        # Company data storage
│   └── app.js         # Application logic and event handlers
├── LICENSE            # Project license
└── README.md          # Basic project description
```

## Technology Stack

- **HTML5**: Semantic markup for the search interface
- **CSS3**: Styling and responsive design
- **Vanilla JavaScript**: No frameworks, pure JavaScript for functionality

## Features

1. **Company Search**: Text input with search functionality
2. **Auto-suggestions**: Displays suggestions as user types
3. **Search Results Display**: Shows company information with clickable links
4. **External Integration**: Direct links to:
   - Yahoo! Finance (株価情報)
   - National Tax Agency Corporate Number Site (法人番号公表サイト)
   - EDINET (有価証券報告書)

## How to Use

1. Open `index.html` in a web browser
2. Enter a company name in Japanese (e.g., トヨタ, ソニー)
3. Click the search button or press Enter
4. View results with links to external information sources

## Development Notes

- This is a static web application with no backend server required
- Company data is stored in `js/data.js`
- All text and UI are in Japanese
- The application is designed for Japanese companies listed on stock exchanges

## File Descriptions

### index.html
Main entry point containing:
- Search input field
- Search button
- Results container
- Suggestions dropdown
- Footer with link descriptions

### css/style.css
Contains all styling for:
- Layout and responsive design
- Search box styling
- Results display formatting
- Suggestion dropdown appearance

### js/data.js
Data storage file containing:
- Company information array/object
- Securities codes
- Corporate numbers
- EDINET codes

### js/app.js
Application logic including:
- Search functionality
- Auto-suggestion system
- Results rendering
- Event handlers
- External link generation

## Future Enhancement Ideas

- Add more company data
- Implement fuzzy search
- Add English language support
- Include company logos
- Add filtering by industry
- Implement local storage for search history
- Add dark mode support

## License

See LICENSE file for details.
