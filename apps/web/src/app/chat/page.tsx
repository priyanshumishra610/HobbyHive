import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

/**
 * Chat List Page - View all conversations
 */
export default function ChatListPage() {
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

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Messages</h1>
          <p className="text-muted-foreground">
            Chat with your skill exchange partners
          </p>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Link key={i} href={`/chat/${i}`}>
              <Card className="hover:bg-accent cursor-pointer transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      👤
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold">User Name {i}</h3>
                        <span className="text-xs text-muted-foreground">
                          Just now
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        Last message preview here...
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">
                        1
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        <Card className="mt-6">
          <CardContent className="pt-6 text-center py-12">
            <p className="text-muted-foreground mb-4">
              No messages yet. Start matching to begin chatting!
            </p>
            <Link href="/matches">
              <Button>Find Matches</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

