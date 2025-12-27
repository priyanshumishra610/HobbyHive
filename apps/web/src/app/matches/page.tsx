import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Matches Page - Browse and manage skill matches
 */
export default function MatchesPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="text-2xl font-bold">
            🐝 HobbyHive
          </Link>
          <nav className="flex gap-4 items-center">
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link href="/matches">
              <Button variant="ghost">Matches</Button>
            </Link>
            <Link href="/chat">
              <Button variant="ghost">Chat</Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost">Profile</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Match Suggestions</h1>
          <p className="text-muted-foreground">
            Find people to exchange skills with based on your profile
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-4 items-center flex-wrap">
              <select className="px-3 py-2 border rounded-md">
                <option>All Categories</option>
                <option>Music</option>
                <option>Cooking</option>
                <option>Art & Design</option>
                <option>Technology</option>
              </select>
              <select className="px-3 py-2 border rounded-md">
                <option>Any Location</option>
                <option>Same City</option>
                <option>Online Only</option>
              </select>
              <Button variant="outline">Apply Filters</Button>
            </div>
          </CardContent>
        </Card>

        {/* Match Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    👤
                  </div>
                  <div>
                    <CardTitle>User Name</CardTitle>
                    <CardDescription>City, Country</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Can Teach:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                      Skill 1
                    </span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                      Skill 2
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Wants To Learn:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                      Your Skill 1
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1">Accept</Button>
                  <Button variant="outline" className="flex-1">
                    Decline
                  </Button>
                </div>
                <Link href="/chat/1" className="block">
                  <Button variant="ghost" className="w-full">
                    Start Chat
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        <Card className="mt-6">
          <CardContent className="pt-6 text-center py-12">
            <p className="text-muted-foreground mb-4">
              Complete your profile to see match suggestions
            </p>
            <Link href="/profile/create">
              <Button>Complete Profile</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

