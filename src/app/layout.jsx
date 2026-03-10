export const metadata = {
  title: "SiteForge Pro",
  description: "Ecommerce Site Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
```

4. Click **Commit new file**

Then go to Vercel and hit **Redeploy**.

**Why this is happening:** Next.js requires every app to have a `layout.jsx` file sitting in the same `src/app/` folder as your `page.jsx`. It's the wrapper that holds the whole app together. Without it the build fails every time regardless of how good your page code is.

After you commit that file your folder structure in GitHub should look like this:
```
src/
  app/
    layout.jsx   ← the wrapper
    page.jsx     ← your generator
package.json
next.config.js
