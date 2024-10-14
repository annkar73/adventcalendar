# Adventskalender  

En enkel adventskalender byggd med Vite, React och TypeScript.  
Kalendern erbjuder något nytt varje dag, en länk till ett pyssel eller recept som passar för julsäsongen.  
Projektet inkluderar även en nedräkning till julafton från innevarande dag.

[English version](#advent-calendar)

## Funktioner

<ul>
<li>Adventskalender: En klickbar kalender där användaren kan öppna en ny "lucka" varje dag fram till julafton</li>
<li>Nedräkning: Visar hur många dagar, timmar och minuter som återstår till midnatt på julafton</li>
<li>Modalvisning: Varje kalenderdag öppnar en modal med länk till ett julinspirerat pyssel eller recept</li>
<li>Responsiv design: Layouten anpassar sig till olika skärmstorlekar, vilket säkerställer en smidig upplevelse på mobila enheter</li>
<li>Styled Components: Projektet använder styled-components för styling, vilket gör det enkelt att underhålla och anpassa</li>
</ul>

### Installation


  Klona repot: `git clone https://github.com/annkar73/adventcalendar.git`  
  Gå till projektkatalogen: `cd adventcalendar`  
  Installera beroenden: `npm install`


### Användning


  Starta utvecklingsservern: `npm run dev`  
  Gå vidare till webläsaren via länken i terminalen  
  Ha roligt med att styla om, lägga till och ta bort funktioner och göra det till din egen version


### Utvecklarinställningar
I filen **Day.tsx** finns en konstant `isDevelopmentMode` som bör vara inställt på `true`för utvecklingssyften. För att återgå till normal funktionalitet och begränsa tillgången till luckor, ställ om denna konstant till `false`: `const isDevelopmentMode = false;`

## Projektstruktur

<pre>
adventcalendar/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── helpers/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
└── package.json
</pre>

# Advent Calendar

A simple advent calendar built with Vite, React and TypeScript.  
The calendar offers something new every day, a link to a Christmas Craft or recipe suitable for the holiday season.  
The project also includes a countdown to Christmas Eve from the current day.  

## Features

<ul>
  <li>Advent Calendar: A clickable calendar where users can open a new "door" every day until Christmas Eve</li>
  <li>Countdown: Displays how many days, hours and minutes are left until midnight on Christmas Eve</li>
  <li>Modal Display: Each calendar day opens a modal with a link to a Christmas-inspired craft or recipe</li>
  <li>Responsive Design: The layout adjusts to different screen sizes, ensuring a smooth experience on mobile devices</li>
  <li>Styled Components: The project uses styled-components for styling, making it easy to maintain and customize</li>
</ul>

### Installation 

  Clone the repository: `git clone https://github.com/annkar73/adventcalendar.git`  
  Navigate to the project directory: `cd adventcalendar`  
  Install dependencies: `npm install`
</ol>

### Usage

  Start the development server: `npm run dev`  
  Open the link in the terminal to access the app in your browser  
  Have fun styling, adding and removing features to make it your own version

### Developer Settings
In the file **Day.tsx**, there is a constant `isDevelopmentMode` that should be set to `true` for development purposes. To revert to normal functionality and restrict access to the doors, change this constant to `false`: `const isDevelopmentMode = false;`

## Project Structure

<pre>
adventcalendar/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── helpers/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
└── package.json
</pre>






  
