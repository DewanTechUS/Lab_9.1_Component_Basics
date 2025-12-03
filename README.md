# Lab 1 Component Creation & Props (Lab 9.1 - Component Basics)

# Author
- Dewan Mahmud (Rocky)
- Per Scholas Software Engineering Student
- 2025-RTT-57

# This project is part of my Lab 1 assignment for the React + TypeScript module. The goal of the lab was to build a small component library using functional components, TypeScript interfaces for props, and basic component composition.

# I created three UI components:
-	AlertBox - shows different types of alert messages
-	UserProfileCard - displays user information
-	ProductDisplay - shows product data and stock details

# All components are written in React + TypeScript, and the prop interfaces are defined in src/types/index.ts.


# Component Overview
- AlertBox
- Props: type, message
- Supports four alert types (success, error, warning, and info) and displays a message based on the type.
- UserProfileCard
- Prop: user
- Shows a user’s name, email, role, and an avatar if one is provided.
- ProductDisplay
- Prop: product
- Displays product name, price, description, image (I will do it later), and whether the item is in stock.

# Testing and Example Usage

## I tested all components in App.tsx using different sets of props:
-	AlertBox using multiple type values
-	UserProfileCard with users who have an avatar and users who do not
-	ProductDisplay with and without product images and different stock values

##  Running npm run dev starts the development server and shows all the components on one page.

# Reflection

## How did you handle optional props?
- I left the optional props in the TypeScript interfaces, but I did not implement extra behavior for them yet. I focused on using only the required props for now. Optional props such as children and callback functions will be added later when I get more comfortable with props and event handling.

## What considerations did you make when designing the interfaces?
- I followed the structure given in the lab. I kept related data together by passing a single user object to the UserProfileCard instead of separate values. This made the code cleaner and easier to manage. Naming the props clearly helped avoid confusion later.

## How did you ensure type safety?
- Each component imports its prop type from the src/types/index.ts file. TypeScript checks whether the correct values are being passed. When I made mistakes or mixed up values, the editor showed warnings right away, which helped catch issues early.

## What challenges did you face with composition?
- Most of my issues came from small syntax errors and import problems. I ran into things like missing curly braces, wrong file paths, missing exports, and forgetting that a component must return a single parent element. I had to fix these errors by reading the messages in the terminal and looking closely at the code. I debugged many times while getting the components to render together correctly. Working in App.tsx made it easier to see when components were not passing props properly.

## Special Thanks
- I want to thank my instructors  and Bryan Santos for explaining props, destructuring, and how data moves from parent to child components. I need more practice, but their examples made it easier to understand why we type props and how to use them correctly in a component.

# Getting Started

## Install dependencies:
- npm install

## Start the development server:
- npm run dev

## Open the project in the browser:
- http://localhost:5173

# Notes
-	This assignment focused on component creation, TypeScript prop typing, and basic prop usage.
-	Optional props are defined, but the components currently only use the required props.
-	Styling is minimal, mainly for readability and layout.



