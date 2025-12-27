import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

/**
 * Chat Detail Page - Individual conversation view
 */
export default function ChatDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/chat">
              <Button variant="ghost" size="icon">←</Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                👤
              </div>
              <div>
                <h2 className="font-semibold">User Name</h2>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
          </div>
          <nav className="flex gap-2">
            <Link href="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link href="/matches">
              <Button variant="ghost">Matches</Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost">Profile</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl flex-1 flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
          <div className="flex justify-start">
            <Card className="max-w-[70%]">
              <CardContent className="p-3">
                <p className="text-sm">Hello! I'm interested in learning from you.</p>
                <span className="text-xs text-muted-foreground">10:30 AM</span>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-end">
            <Card className="max-w-[70%] bg-primary text-primary-foreground">
              <CardContent className="p-3">
                <p className="text-sm">Hi! I'd love to help you learn. Let's schedule a session!</p>
                <span className="text-xs opacity-80">10:32 AM</span>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Message Input */}
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border rounded-md"
              />
              <Button>Send</Button>
            </div>
          </CardContent>
        </Card>

        {/* Session Booking */}
        <Card className="mt-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Schedule a Session</h3>
                <p className="text-sm text-muted-foreground">
                  Book a time to exchange skills
                </p>
              </div>
              <Link href="/booking">
                <Button>Book Session</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

