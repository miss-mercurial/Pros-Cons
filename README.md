# Pros & Cons
#### Video Demo:  https://youtu.be/cKClXvessl0
#### Description:
Pros & Cons is a PWA made to help make difficult decisions and solve dilemmas. It visualises the weight of pros and cons for a decision and even takes into account the sensitivity of the decision.

It is based on the PWA Starter from (https://docs.pwabuilder.com/#/starter/quick-start).

## Introduction

Pros & Cons will help users make decisions when in doubt, by calculating the proportional weight of the pros and cons, and making a conclusion based on the sensitivity level for the decision.

### What features does it have?

It has the possibility of setting up the problematic decision, e.g. “Should I get more cats?”.

The user can choose the decision sensitivity, i.e. how much should the pros or cons weigh in order to make the decision? Should it be 60% pros / 60% cons before the decision can be made?

There are dropdowns for each pro/con, with a grading from low through medium to high importance. The user can also add extra lines of pros and cons.

At the bottom there is a conclusion showing how many pros and cons there are in percentage along with a conclusion on whether to go through with the decision, not do it or think more about it.

### Why PWA?

I chose to make a PWA so that it would be easy to access both on computers and phones, so that the help is near, whenever there is a decision to be made.

### What did I have to learn?

I had to learn to set up and use VS Code on my own PC. Along the way I learned how to use Git and GitHub to have a version control system. I had to learn how to make a PWA, and for that I used the seminar on PWAs to get started. I even used the PWA Starter. But to get everything up and running, I had to learn how to install the correct version of noce.js and npm on my computer. I ran everything through a WSL using Ubuntu and Bash.

To use the PWA Starter I needed to learn how to use Lit, Shoelace and TypeScript.

## The files

### router.ts

The file came with the starter, and I just adjusted it to fit my project by deleting boiler plate code and correcting names.

### app-index.ts

The file came with the starter, and I just adjusted it to fit my project by deleting boiler plate code and correcting names.

### styles folder

Contains the global and shared styles for the components.

### app-home.ts

Is kept for template purposes, as I would like to develop the PWA further in the future. Adding the possibility to save a pdf, adding a picture, making it more reactive to the media used and more.

### pros-cons.ts

This is where all the magic happens. @state ensures that the whole page is re-rendered during specific event, such as when the list of pros and cons is updated.

The header is rendered, and all the custom elements, also referred to as components, are added.

The map() directive in Lit is used to list the pros and cons, using the importance-selector component, to avoid repetitive error-prone code.

At the end of the file, there are functions to handle all the events and calculations. A model class, pros-cons-state.ts is used for holding the state for the conclusion.

## The components

### background-card.ts and background-card-styles.ts

To ensure that the content is correctly centred.

### importance.ts and importance-styles.ts

The layout of a pro/con-line is set up here, consisting of a selector and an input. The colours in the selector reflect if the choice is a pro or con, and the element has the option to input labels (used for the first instance of the importance-selector component).

### dilemma.ts

The custom element for the dilemma input at the top of the PWA. Autofocus selected.

### header.ts

The header contains the name of the PWA and is prepared for a back button, it more pages should be added in the next version of Pros & Cons.

### sensitivity.ts

Where the sensitivity for the decision is chosen. The element handles if the value is more than 100, less than 0 or NaN.

### In general

Dispatch events are used to send information up through the DOM, and content projection is used to render components, inside of other components in the parent. For instance, in pros-cons.ts, components like the dilemma-input component are projected into the background-card. The background-card then projects these components into the <slot> element.