export function Footer() {
  return (
    <footer className="mt-auto py-8 px-6 bg-card border-t border-border text-center text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
}
