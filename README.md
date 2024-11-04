# HTML Boilerplate with Tailwindcss

<p>
  <a href="https://github.com/acfatah/html-boilerplate/commits/tailwind">
  <img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/acfatah/html-boilerplate?display_timestamp=committer&style=flat-square"></a>
</p>

HTML Boilerplate with [Tailwindcss](https://tailwindcss.com)

## Usage

```bash
npx tiged acfatah/html-boilerplate#tailwind
```

## CDN

1. Add Tailwindcss config,

```html
<script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries"></script>
<script>
  tailwind.config = {
    darkMode: 'class', // Remove this line to use `prefers-color-scheme` CSS media feature
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          background: {
            DEFAULT: 'hsl(var(--background))',
            dark: 'hsl(var(--background))',
          },
          foreground: {
            DEFAULT: 'hsl(var(--foreground))',
            dark: 'hsl(var(--foreground))',
          },
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
        },
        borderRadius: {
          xl: 'calc(var(--radius) + 4px)',
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
      },
    },
  }
</script>
```

2. Add the basic styling for forms,

```html
<style type="text/tailwindcss">
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0.3rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 14.9%;
  }

  body {
    @apply p-2 sm:p-4 text-foreground bg-background;
  }

  fieldset {
    @apply p-2 sm:p-4 border-2 border-border rounded-xl;
  }

  legend {
    @apply p-2 text-lg font-bold;
  }

  fieldset,
  form {
    @apply flex flex-col gap-2;
  }

  form > [role='help'] {
    @apply relative -top-1 text-gray-400;
  }

  form > [role='alert'] {
    @apply relative -top-1 text-red-500;
  }

  fieldset > [role='button'],
  form > [role='button'] {
    @apply flex gap-2 justify-end;
  }

  label {
    @apply relative -bottom-1 flex items-center;
  }

  label[for]:has(input[type='checkbox']),
  label[for]:has(input[type='radio']),
  label[for]:has(input[type='color']) {
    @apply gap-2;
  }

  label[for]:has(+ input:required)::before {
    content: ' *';
    @apply relative -top-1 text-red-500;
  }

  input[type='text'],
  input[type='password'],
  input[type='number'],
  input[type='email'],
  input[type='date'],
  select,
  textarea {
    @apply border rounded-xl border-gray-300 text-foreground bg-background hover:border-blue-500 hover:bg-opacity-50 focus:bg-gray-50 dark:focus:bg-gray-900;
  }

  .dark input[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  input:disabled,
  select:disabled,
  textarea:disabled {
    @apply opacity-50 cursor-not-allowed hover:border-gray-300 hover:bg-none;
  }

  button[type='reset'],
  button[type='submit'] {
    @apply border rounded-xl sm:px-4 sm:max-w-min border-gray-300 hover:bg-gray-50 hover:border-blue-500 dark:hover:bg-gray-900;
  }

  button[type='reset'] {
    @apply text-gray-500 dark:text-gray-400;
  }
</style>
```

3. Add the `container` class.

```html
<body>
  <div class="prose prose-neutral dark:prose-invert container mx-auto">
    <!-- other elements -->
  </div>
</body>
```

Using external files for Tailwindcss is not possible since:

1. PostCSS is not available.
2. The browser has no way to process external files.

So, we need to use the `style` tag with `type="text/tailwindcss"` attribute.
