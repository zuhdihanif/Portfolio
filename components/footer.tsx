export default function Footer() {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} emzieich. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
