# Contribution guidelines

In order to contribute to this project, here are some general guidelines.

## Version Control

Version control guidelines are omitted on this project since it's a short-lived technical test.

## Code

#### CSS

##### Tools and Architecture

For this project, we use the following tools to manage our CSS code base:

- Sass (with `.scss` file extensions)
- Stylelint
- Prettier

###### _General architecture philosophy_

Our CSS architecture is based on principles derived from the [ECSS](https://drive.google.com/open?id=1Pzr6685TeBuLAHmgmS3AiSJ6BWOqmPWw) (Enduring CSS) methodology developed by Ben Frain.

At its core, ECSS is based on the **simplification by isolation** principle. The opposite principle, _simplification by abstraction_, is the founding principle of other CSS architectures, and while it works well for some use cases, we think it is not the best approach for our use case, for several reasons.

Mainly, the benefits of **simplification by isolation**, and therefore of ECSS, are the following:

- The principle of isolation is better suited to modern application structures that are **component-based**. Following
  this principle allows for better reusability, portability, clarity and general maintenance of components.
- At the CSS class level, isolation greatly reduces complexity by eliminating all unneccessary _hierarchy_ and
  _cascading_ coupling of element styles that happens when the **_abstraction_** principle is used. The abstraction
  principle encourages reusability of styles and using hierarchy and cascading in order to make the code base _DRYer_.
  While that approach has its benefits for sole developers and very tight teams, it has a tendency to make a code base
  more difficult to reason about and to maintain over time. The **isolation** principle makes it easier for new
  contributors to add or modify code without breaking things and it also makes it easier for the code base to be
  maintained over time because any change to a given class will only affect the element to which the class is applied.
  The styles for that element are **isolated** to that element. There are a few scenarios where that rule can be broken
  but they are rare and should be avoided as much as possible.
- Isolation of the styles at the element level allows for the wrapping on an entire **component** with a
  component-wrapping CSS class that will contain all the classes that are related to all the elements that are
  nested within that component's HTML structure. This makes components entirely portable and reusable across the
  application and even across projects. It also makes refactoring and fixing issues much easier.

Furthermore, while following the **isolation** principle can lead to more repetition in the code base, this consequence
is **greatly reduced** by using some Sass syntax features and well-defined naming conventions.

On a performance level, benchmarking has been done extensively by the creators of ECSS and they have come to the
conclusion that avoiding cascading (rarely using the hierarchical inheritance feature of CSS), therefore focusing on
**specificity of selectors** to limit the scope of styles to individual elements, reduces performance of even a large
application by a **negligible** amount. The only detail to keep in mind while using this approach is to be careful when
repeating compute-intensive CSS manipulations across many elements. In this case, it might be an exception where using
one compute-intensive class on several elements might be a better option in order to maximize performance. An example
would be an expensive CSS animation class that needs to be applied to a large number of elements in a given view.

The performance hit gets even more negligible when the compiled CSS assets are compressed (for example, using _gzip_) 
before getting shipped to the frontend agent (web browser, mobile application, ...). File compression algorithms will 
prevent repeating strings in code from being repeated in the compressed files. Those strings will be handled using 
indexing and replacement techniques. The resulting minified files will therefore be streamlined and lighter.

In Conclusion, the architecture used in this project has many benefits from the **isolation** principles and very few
of its usual drawbacks. The advantages far outweigh the disadvantages.

##### Style Guide

###### Overview

This project uses a well-defined set of principles and conventions that, when used together, form a very efficient and
elegant system for writing and managing CSS code.

This system borrows and integrates various principles, features and conventions from a few key tools and methodologies.

In a nutshell, it combines some features from the [**Sass**](https://sass-lang.com/) (Syntactically Awesome Style Sheets) CSS extension language, some
principles and rules from the [**ECSS**](https://drive.google.com/open?id=1Pzr6685TeBuLAHmgmS3AiSJ6BWOqmPWw) (Enduring
 CSS) methodology and the responsive power of the native CSS Grid and Flexbox modules.

###### Details

##### _ECSS_

[ECSS](https://drive.google.com/open?id=1Pzr6685TeBuLAHmgmS3AiSJ6BWOqmPWw) (Enduring CSS) is a set of about 10 rules/conventions that, when followed as rigorously as possible, will apply and provide the benefits of the **isolation** principle to the styling of the HTML elements to which they are applied.

On this project, we integrate the following rules/conventions:

- Anytime it is possible, **a given CSS class should be applied to only one HTML element**. Therefore, the styles
  provided by that class are scoped/isolated to that single HTML element.

- In the case where an element (or component) is repeated in the same HTML document, for example when a component gets
  repeated a number of times as the result of a loop in a framework template, it is ok to use the same CSS class for each
  repeated element/component outputted by the loop. But in general, reusing classes across HTML elements and components
  should be avoided.

- When an element is the **outermost** element of an HTML _component_ (therefore, the **component element**), there
  should be **one CSS class** applied to this highest order element that **wraps all the other classes** that provide
  styling for the elements **nested inside that outermost HTML element** (the component element). Using _Sass_ allows for
  structuring all of those nested components styles, including media queries, inside **one enclosing CSS class**. When
  using one dedicated `.scss` file for each component in the project, the enclosing CSS class will be at the **root** of
  the .scss file, as in the following example:

  ```sass
  .app-AppContainer {
    width: 100%;

    @include respond(md) {
      padding: 1rem;
    }

    &_LayoutWrapper {
      max-width: $max-app-width;
      margin: 0 auto;
    }
  }
  ```

  In the previous example, the `.app-AppContainer` class is at the root of the .scss files and encloses all the
  classes and styles of elements that are nested inside the **app component**.

- Use _nesting_ **only** for media queries or overrides.

- **Avoid descendant selectors** whenever possible. Add a class directly to the child element instead in order to isolate its styles.

- Never use **index** selectors. Always use **class** selectors.

- Whenever possible, use **Sass** _variables_ for sizing, colors and z-indexes.

- Never add _vendor prefixes_ manually in the code. This process should be automated using a tool like **Autoprefixer**.

- Always write rules **mobile-first** (starting with base styles and the smallest viewports styles at the top of a given class and then progressively applying media queries using **only** the _min-width_ argument). The following example respects that approach:

  ```sass
  .upsell-Hero {
    height: 16.25rem;

    &_Title {
      padding: 4rem 2rem 1rem;
      text-align: left;

      @include respond(sm) {
        padding: 0;
        text-align: center;
      }

      &Heading {
        font-size: 3.3rem;

        @include respond(sm) {
          font-size: 3.5rem;
        }

        @include respond(md) {
          font-size: $size-text-xxl;
        }
      }
    }
  }
  ```

- Use _rem_ units as much as possible for elements that are **not text elements**. For text elements, use
 _px_ units.  For elements that should be sized in relation to the viewport dimensions (layout elements, ...), use
  **viewport** units (_vw_, _vh_, ...) as much as possible.

- Use _mixins_ **with restraint** (only if they are used frequently and/or if they don't make the style sheets harder to
  reason about).

- Avoid using the _@extend_ rule from Sass.

- **Comment** all magic numbers, browser hacks or other ninja techniques. Avoid fancy code as much as possible,
  especially if it would be hard for other developers to understand. Resist writing complicated CSS when simple CSS would
  work just as well. Keep It Simple Stupid (KISS).

- **Never inline images** in the HTML, unless there is a very good reason to do so.

- Keep _global_ CSS as **minimal** as possible, and manage those styles in separate partial files that handle a specific
  subset of the global styles. Import those partial `.scss` files into a main global styles file that gets consumed by
  different parts of the application (for example, individual components) if they need them.

  For example, the following **sass** folder contains all the _global_ Sass files for a given project:

  ```
  sass
  |--- _base.scss
  |--- _mixins.scss
  |--- _variables.scss
  |--- global.scss
  ```

- Optionally, accessibility [WAI-ARIA](https://www.w3.org/TR/wai-aria/) features of HTML and CSS can be used to
  communicate state and to style state changes within the application. This can be done by using the **WAI-ARIA
  attributes** of HTML **as CSS selector targets**. This is a very elegant way of both improving the accessibility of the
  application and communicating state changes. For example, the following code snippet shows a `button` element on which
  the styling gets modified when its state is toggled to `selected`:

  ```html
  <button class="checkout-OrderSubmitButton" aria-selected="true">Submit order</button>
  ```

  ```sass
  .checkout-OrderSubmitButton {
    background-color: $color-button-passive;

    &[aria-selected="true"] {
      background-color: $color-button-selected;
    }
  }
  ```

- Finally, ECSS proposes a strict **naming convention** for CSS **classes**.

  An ECSS class name can have _up to 4 sections_ and _cannot have less than the first 2 sections_. This means that
  **every** CSS class in the project needs a name that contains a minimum of _2 mandatory sections_ and a maximum of 4
  sections. _2 sections are optional_.

  The anatomy of a full class name (containing the 4 possible sections) looks like the following:

  ```sass
  .modulename-ComponentName_ElementName-variantname {
    styles...
  }
  ```

  Let's go back over the various parts of the above ECSS selector and the allowed character types:

  - **Module name** (section 1) (_mandatory_): This section should consist of the _module_ name as per the application
    structure. It should be **all lowercase**.

  - **Component name** (section 2) (_mandatory_): This section should consist of the _component_ name as per the
    application structure. It should be **pascal case**. It should always be preceded by a hyphen character ( - ).

  - **Element name** (section 3) (_optional_): This section should consist of the element name. It should be **pascal
    case** and always be preceded by an underscore character ( \_ ).

  - **Variant** (section 4) (_optional_): This section should indicate a variant of a class that starts with the exact
    same 3 sections. For example, it can be used to provide styles for a variant on a given element, like a button that
    could have varying background colors but otherwise all of its styles would be the same. It could also be used to
    style state changes on an element. This section should be **all lowercase**.

The following examples show various possible class names that follow the ECSS class naming convention:

**_The enclosing class of the Cart component from the Checkout module (this class is written at the root of the Cart
component's .scss file and contains all the styles of the other elements nested in the Cart component)_**

```sass
.checkout-Cart {
  styles specific to the Cart component element...
}
```

**_The class of the Order Submit Button from the Cart component from the Checkout module (notice the use of the Sass ( & ) operator in order to prevent the repetition of the '.checkout-Cart' sections of the '.checkout-Cart_OrderSubmitButton' class)_**

```sass
.checkout-Cart {
  styles specific to the Cart component element...

  &_OrderSubmitButton {
    styles specific to the Order Submit Button element...
  }
}
```

**_The class of the 'selected' variant (a state variant) of the Order Submit Button from the Cart component from the Checkout module_**

```sass
.checkout-Cart {
  styles specific to the Cart component element...

  &_OrderSubmitButton {
    styles specific to the Order Submit Button element...

    &-selected {
      styles specific to the 'selected' state variant of the Order Submit Button element... {
    }
  }
}
```

To recap, the above examples clearly demonstrate the power of Sass and ECSS when combined. When adding mixins
and other features of Sass to the mix, the CSS code base becomes highly readable, reusable and maintainable.

As a final example, here is a more complete snippet that represents a full .scss file for a _Header_ component that is
defined in the _Layout_ module of the project (TODO: Add CSS Grid and Flexbox code that defines the responsive rows, 
columns and other layout elements):

`header.component.html`

```html
<section class="layout-Header">
  <div class="layout-Header_BrandNameTextWrapper">
    <a href="/" routerLink="/" class="layout-Header_BrandNameAnchor">
      <span class="layout-Header_BrandNameText">My Company</span>
    </a>
  </div>

  <div class="layout-Header_SupportTextWrapper">
     <span class="layout-Header_SupportText">
       Need help? Contact
       <a href="mailto:support@mycompany.com" class="layout-Header_SupportAnchor">
         support@mycompany.com
      </a>
    </span>
  </div>
</section>
```

`header.component.scss`

```sass
@import 'src/sass/global-styles';

.layout-Header {
  height: auto;

  @include respond(sm) {
    height: 9.38rem;
  }

  &_BrandNameTextWrapper {
    padding-left: 2rem;

    @include respond($max-app-width) {
      padding-left: 0;
    }
  }

  &_BrandNameAnchor {
    height: 2.3rem;
  }

  &_BrandNameText {
    font-size: $size-text-xxl;
    color: $color-text-grey-2;
  }

  &_SupportTextWrapper {
    padding: 0 2rem;

    @include respond(sm) {
      padding: 23px 2rem;
      text-align: right;
    }

    @include respond($max-app-width) {
      padding-right: 0;
    }
  }

  &_SupportText {
    font-size: $size-text-lg;
    font-weight: 500;
  }

  &_SupportAnchor {
    &:link,
    &:focus,
    &:active,
    &:visited {
      color: $color-text-blue;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
```
