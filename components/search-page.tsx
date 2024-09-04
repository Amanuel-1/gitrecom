
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon, StarIcon, GitBranchIcon, UsersIcon } from "lucide-react"

export function Page() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Discover the Best Products</h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          Search through our extensive catalog to find the perfect item.
        </p>
      </div>
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-muted-foreground" />
        </div>
        <Input
          type="search"
          placeholder="Search for products..."
          className="w-full rounded-lg bg-background pl-10 pr-4 py-2.5 text-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
          <img
            src="/placeholder.svg"
            alt="Product Image"
            width={200}
            height={200}
            className="w-32 h-32 object-cover rounded-l-lg"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="p-4 flex-1">
            <h3 className="text-xl font-bold mb-2">shadcn/ui</h3>
            <div className="flex items-center gap-2 mb-2">
              <StarIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm text-muted-foreground">20k</span>
              <GitBranchIcon className="w-4 h-4 fill-muted-foreground" />
              <span className="text-sm text-muted-foreground">100</span>
              <UsersIcon className="w-4 h-4 fill-muted-foreground" />
              <span className="text-sm text-muted-foreground">10</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Beautifully designed components that you can copy and paste into your apps.
            </p>
            <Button size="sm">Learn More</Button>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
          <img
            src="/placeholder.svg"
            alt="Product Image"
            width={200}
            height={200}
            className="w-32 h-32 object-cover rounded-l-lg"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="p-4 flex-1">
            <h3 className="text-xl font-bold mb-2">vercel/next.js</h3>
            <div className="flex items-center gap-2 mb-2">
              <StarIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm text-muted-foreground">100k</span>
              <GitBranchIcon className="w-4 h-4 fill-muted-foreground" />
              <span className="text-sm text-muted-foreground">1k</span>
              <UsersIcon className="w-4 h-4 fill-muted-foreground" />
              <span className="text-sm text-muted-foreground">100</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              The React Framework – created and maintained by Vercel.
            </p>
            <Button size="sm">Learn More</Button>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
          <img
            src="/placeholder.svg"
            alt="Product Image"
            width={200}
            height={200}
            className="w-32 h-32 object-cover rounded-l-lg"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="p-4 flex-1">
            <h3 className="text-xl font-bold mb-2">tailwindlabs/tailwindcss</h3>
            <div className="flex items-center gap-2 mb-2">
              <StarIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm text-muted-foreground">80k</span>
              <GitBranchIcon className="w-4 h-4 fill-muted-foreground" />
              <span className="text-sm text-muted-foreground">500</span>
              <UsersIcon className="w-4 h-4 fill-muted-foreground" />
              <span className="text-sm text-muted-foreground">50</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              A utility-first CSS framework for rapidly building custom designs.
            </p>
            <Button size="sm">Learn More</Button>
          </div>
        </div>
        <div className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center">
          <img
            src="/placeholder.svg"
            alt="Product Image"
            width={200}
            height={200}
            className="w-32 h-32 object-cover rounded-l-lg"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="p-4 flex-1">
            <h3 className="text-xl font-bold mb-2">facebook/react</h3>
            <div className="flex items-center gap-2 mb-2">
              <StarIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm text-muted-foreground">200k</span>
              <GitBranchIcon className="w-4 h-4 fill-muted-foreground" />
              <span className="text-sm text-muted-foreground">2k</span>
              <UsersIcon className="w-4 h-4 fill-muted-foreground" />
              <span className="text-sm text-muted-foreground">200</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">A JavaScript library for building user interfaces.</p>
            <Button size="sm">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
