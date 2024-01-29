# Kevin Powell

## [Modern Font Stacks](https://modernfontstacks.com/)

See the tutorial "These font stacks will improve your site performance"

## Modern Setup for container

From Kevin Powell: Tutorial PDFs/CSS/_Open Props/Supercharge your CSS with Open Props - Powell.pdf

~~~css
.container {
   width: min(100% - 2rem, 50rem);
   margin-inline: auto;
}
~~~

First value is for smaller screen sizes, second value for larger.

## Modern setup for the main tag

From Coding in Public: Automatically choose the largest of the 2 values depending on the screen size. Margin Auto is included as well.

~~~css
main {
   display: grid;
   gap: var(--size-fluid-4);
   padding-block: var(--size-fluid-4);
   margin-inline: max(((100% - 70rem) / 2), var(--size-fluid-4));
}
~~~

## Section setup

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

## Max Width Alternative

~~~css
h1 {
   max-inline-size: var(--size-header-3);
   margin-inline: auto;
}
~~~

## Modern Image Reset

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

## [No more Container](https://youtu.be/c13gpBrnGEw)

[CodePen](https://codepen.io/kevinpowell/pen/ExrZrrw)

The solution is named lines.

~~~css
.content-grid {
   display: grid;
   grid-template-columns: 1fr [content-start] 1fr [content-end] 1fr;
}
~~~

Now we have a 3 column grid where we can center the content in the middle (from content-start to content-end). And now we can use the empty columns for breakout situations.

~~~css
.content-grid > * {
   grid-column: content;
}
~~~

Now the content is in the middle column. ‘content‘ is the key for positioning. You can name it anyway you want.

~~~css
.content-grid {
   display: grid;
   grid-template-columns: 100px 100px [content-start] 1fr [content-end] 100px 100px;
}
~~~

Now we have 2 100px-cols left and right.

To prepare our breakout situation we change the grid to this:

~~~css
.content-grid {
   display: grid;
   grid-template-columns:
      100px [breakout-start] 100px [content-start] 1fr [content-end] 100px [breakout-end] 100px;
}
~~~

We can use the breakout with the breakout class and the section will be 100px wider on both sides.

~~~css
.content-grid > .breakout {
   grid-column: breakout;
}
~~~

To be able to make the background full width we need one more adjustment:

~~~css
.content-grid {
   display: grid;
   grid-template-columns:
      [full-width-start] 100px [breakout-start] 100px [content-start] 1fr [content-end] 100px [breakout-end] 100px [full-width-end];
}
~~~

We can use the full width with the full-width class and the section will go from edge to edge:

~~~css
.content-grid > .full-width {
   grid-column: full-width;
}
~~~

To finalize the system and make it maintainable:

~~~css
.content-grid {
   --padding-inline: 2rem;
   --content-max-width: 70ch;
   --breakout-max-width: 85ch;

   display: grid;
   grid-template-columns:
      [full-width-start] minmax(var(--padding-inline), 1fr)
      [breakout-start] 0px
      /* Use the smaller between those 2 values */
      [content-start] min(100% - (var(--padding-inline) * 2), var(--content-max-width)) [content-end]
      0px [breakout-end]
      minmax(var(--padding-inline). 1fr) [full-width-end];
}
~~~

Usage:

~~~css
.content-grid > :not(.breakout, .full-width),
.full-width > :not(.breakout, .full-width) {
   grid-column: content;
}
~~~

## Hotfix Flexbox Shrink Behaviour

~~~css
* {
   min-width: 0;
}
~~~

[Min Width Video](https://youtu.be/cH8VbLM1958)

[Josh Comeau: An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)

# Simple Grid Layout

![Simple Grid Layout](https://bilder.leomerkel.de/simple%20grid%20layouts/simple-grid-layouts1.jpg)
![Simple Grid Layout](https://bilder.leomerkel.de/simple%20grid%20layouts/simple-grid-layouts2.jpg)

If you want to see them in action, the [first two are looked at in this video](https://youtu.be/r1IitKbJRFE) and the [second two are looked at in this video](https://youtu.be/JHregeIsjPQ).

If you’re still struggling with grid, I’d suggest [checkout out this video](https://youtu.be/rg7Fvvl3taU) that looks at what I think are the easiest ways to get going with it.
