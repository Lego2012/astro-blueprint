# Open Props

See the tutorial from Coding in Public:
https://youtu.be/cq7c3tawEnI

The PDF is here:
Tutorial PDFs/CSS/_Open Props/Open Props CSS Framework (An Introduction) - Coding in Public.pdf

Best use the JIT version (PostCSS needed) to generate only the props which are used in the code.

Try to start with the normalized stylesheet and develop your own colors, sizes etc. from there. Advantage: Dark Mode is included by default. That process saves a lot of time.

## Important to know

**The Font Family is ‘Font Sans‘ if you use the Normalize stylesheet!**

**Modern Setup for container**
From Kevin Powell: Tutorial PDFs/CSS/_Open Props/Supercharge your CSS with Open Props - Powell.pdf

~~~css
.container {
   width: min(100% - 2rem, 50rem);
   margin-inline: auto;
}
~~~

First value is for smaller screen sizes, second value for larger.

**Modern setup for the main tag**
From Coding in Public: Automatically choose the largest of the 2 values depending on the screen size. Margin Auto is included as well.

~~~css
main {
   display: grid;
   gap: var(--size-fluid-4);
   padding-block: var(--size-fluid-4);
   margin-inline: max(((100% - 70rem) / 2), var(--size-fluid-4));
}
~~~

**Section setup**
From Coding in Public: Set the styling for all sections and edit single sections individually.

~~~css
section {
   display: grid;
   gap: var(--size-fluid-2);
   margin: auto;
   text-align: center;
   max-inline-size: var(--size-content-3);
}
~~~
~~~css
[aria-labelledby="section2"] {
   --size-content-3: 125ch;
}
~~~

**Create your own variables**

~~~css
:root {
   --brand: var(--lime-6);
}
~~~

You can even use Open Props variables including calc, clamp etc.

**Include Dark Mode**

~~~css
@media (prefers-color-scheme: dark) {
   :root {
      --brand: var(--lime-2);
   }
}
~~~

**Max Width Alternative**

~~~css
h1 {
   max-inline-size: var(--size-header-3);
   margin-inline: auto;
}
~~~

**Modern Image Reset**
Kevin Powell: A better image reset for your CSS

~~~css
img {
   font-style: italic;

   background-repeat: no-repeat;
   background-size: cover;

   shape-margin: 1rem;

   max-width: 100%;
   height: auto;
   vertical-align: middle;
}
~~~
