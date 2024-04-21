# Wine Data Set Statistics

This project aims to calculate and display statistical measures of the Wine Data Set using React and Mantine v7. The statistical measures include the class-wise mean, median, and mode of the "Flavanoids" for the entire dataset.

## Features

- Calculate class-wise mean, median, and mode of "Flavanoids".
- Display the calculated statistics in a tabular format.
- Use Mantine v7 for implementing tables.
- Open the rendered page in the browser upon running `yarn start`.
- Clean codebase with removal of unused files and libraries.
- Exclusively use Yarn for package management.

## Requirements

1. Node.js and Yarn installed.
2. Access to Wine Data Set.
3. Basic understanding of React and Mantine.

## Installation

1. Clone the repository:

```
git clone <repository_url>
```

2. Install dependencies:

```
cd <project_directory>
yarn install
```

## Usage

1. Run the project:

```
yarn start
```

2. Access the rendered page in your browser.

## Statistical Measures

The statistical measures calculated for the Wine Data Set are:

- **Flavanoids Mean:** Mean value of flavanoids for each class of alcohol.
- **Flavanoids Median:** Median value of flavanoids for each class of alcohol.
- **Flavanoids Mode:** Mode value(s) of flavanoids for each class of alcohol.

## Project Structure

- **`src/`**: Contains source code files.
  - **`data/`**: Contains Wine Data Set JSON file.
  - **`utils/`**: Contains utility functions for calculating statistics.
  - **`components/`**: Contains React components for displaying statistics.
  - **`App.js`**: Main component for rendering the application.

## License

This project is licensed under the [MIT License](LICENSE).
