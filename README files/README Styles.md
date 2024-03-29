~~~css
/* Custom variables */

:root {
   --lm-test: blue;
   --lm-brand: var(--lime-3);
   --lm-primary: yellow;
}

body {
   font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Kevin Powell: A better image reset for your CSS */
img {
   font-style: italic;

   background-repeat: no-repeat;
   background-size: cover;

   shape-margin: 1rem;

   max-width: 100%;
   height: auto;
   vertical-align: middle;
}

/* Coding in Public: Modern main styling */
main {
   display: grid;
   gap: var(--size-fluid-6);
   padding-block: var(--size-fluid-1);
   margin-inline: max(((100% - 70rem) / 2), var(--size-fluid-4));
}

/* Coding in Public: Modern section styling */
section {
   display: grid;
   gap: var(--size-fluid-2);
   margin: auto;
   text-align: center;
   max-inline-size: var(--size-content-3);
}

[aria-labelledby="section2"] {
   --size-content-3: 125ch;
}

/* Coding in Public: Modern container styling */
.container {
   display: grid;
   width: min(100% - 2rem, 50rem);
   margin-inline: auto;
   gap: var(--size-fluid-1);
}

/* Custom CSS */
h1 {
   background-color: var(--blue-6);
}
~~~
