import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Landing Page - HobbyHive Home
 */
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            🐝 HobbyHive
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            The World's Most Powerful Skill & Hobby Exchange Platform
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn anything. Teach what you love. Build meaningful human connections.
            Powered with AI. Designed for the next billion learners.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="text-lg px-8">
                Get Started
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>🎯 Find Your Match</CardTitle>
                <CardDescription>
                  Our AI matches you based on what you can teach and what you want to learn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Example: You know Guitar 🎸 & want to learn Cooking 🍳. 
                  We find someone who knows Cooking & wants Guitar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>💬 Connect & Chat</CardTitle>
                <CardDescription>
                  In-app messaging to coordinate and plan your skill exchange
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Seamless communication to schedule sessions and exchange knowledge
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>⭐ Build Trust</CardTitle>
                <CardDescription>
                  Community-driven reviews and trust scores ensure quality exchanges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Rate and review sessions to build a trusted learning community
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of learners exchanging skills and building connections
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="text-lg px-8">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

