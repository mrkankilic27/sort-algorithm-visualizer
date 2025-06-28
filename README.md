# Sorting Algorithm Visualizer

Sorting Algorithm Visualizer is a web-based interactive tool that allows users to explore and understand various sorting algorithms through dynamic, real-time visualizations. Built using Angular, this project aims to make learning sorting algorithms intuitive and engaging for students, developers, and educators.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Available Sorting Algorithms](#available-sorting-algorithms)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

Sorting algorithms are fundamental to computer science and software development. Understanding how they work, their time and space complexities, and how they behave on different types of datasets is critical. This project visualizes the behavior of common sorting algorithms, making it easier to grasp these concepts by watching the step-by-step operations in a browser.

## Features

- Interactive and animated visualizations of sorting algorithms
- Intuitive and user-friendly interface
- Adjustable speed for visualization
- Ability to choose the number of array elements
- Real-time rendering using Angular components
- Modular and scalable architecture for adding new algorithms

## Technologies Used

- **Angular** – Framework for building the SPA
- **TypeScript** – Typed JavaScript superset used with Angular
- **HTML & CSS** – UI structure and styling
- **RxJS** – Reactive programming model
- **Node.js** & **NPM** – Package manager and development runtime

## Available Sorting Algorithms

The following sorting algorithms are currently implemented:

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort

## Installation

To run this project locally:

1. Install **Node.js** (v16 or above) and **Angular CLI** globally if you haven't already:

```bash
npm install -g @angular/cli
```

2. Clone the repository and install dependencies:

```bash
git clone https://github.com/mrkankilic27/sort-algorithm-visualizer.git
cd sort-algorithm-visualizer
npm install
```

3. Run the development server:

```bash
ng serve
```

Then navigate to `http://localhost:4200/` in your browser.

## Usage

1. Launch the application in a browser.
2. Choose a sorting algorithm from the dropdown.
3. Set the array size and visualization speed.
4. Click "Start" to begin the sorting visualization.

The sorting progress will be animated in real-time, making it easy to observe and understand how the algorithm operates.

## Development

If you're contributing or modifying the project, you may find the following Angular CLI commands helpful:

- `ng serve` – Run the application locally in development mode
- `ng generate component <component-name>` – Create a new component
- `ng build` – Build the app for production
- `ng test` – Run unit tests
- `ng lint` – Run linter on the codebase

## Folder Structure

```
src/
├── app/
│   ├── main/                  # Main visualization logic and UI
│   ├── navbar/                # Navigation bar component
│   ├── services/              # Sorting logic and control services
│   ├── app.component.ts       # Root component
│   └── app.module.ts          # Root module
├── assets/                    # Static assets
├── environments/              # Environment-specific configurations
├── styles.css                 # Global styles
└── index.html                 # Main entry point
```

## Contributing

Contributions are always welcome. If you'd like to improve the visualizations, add new algorithms, or fix bugs:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes.
4. Push to your branch and submit a pull request.

For significant changes, please open an issue first to discuss the proposed changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions, feedback, or collaboration inquiries, feel free to reach out:

- **Name:** Mertcan Kankılıç  
- **Email:** mertcankankilic27@gmail.com  
- **GitHub:** [mrkankilic27](https://github.com/mrkankilic27)